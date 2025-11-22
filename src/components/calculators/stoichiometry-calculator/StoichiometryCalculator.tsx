'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SpeciesMap = Record<string, number>;

type ProductDetail = {
  formula: string;
  moles: number;
  grams: number;
};

// Common molar masses (g/mol) for species used in examples
const molarMasses: Record<string, number> = {
  H2: 2.016,
  O2: 31.998,
  H2O: 18.015,
  // Add more species as needed; unknown species will be treated as 0 and will block calculation
};

export default function StoichiometryCalculator() {
  const [reaction, setReaction] = useState<string>('2H2 + O2 -> 2H2O');
  const [reactantAmount, setReactantAmount] = useState<string>('4');
  const [reactant, setReactant] = useState<string>('H2');
  const [result, setResult] = useState<number | null>(null);
  const [productDetails, setProductDetails] = useState<ProductDetail[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  // Helper: parse simple chemical equations like '2H2 + O2 -> 2H2O'
  const parseEquation = (eq: string): { reactants: SpeciesMap; products: SpeciesMap } => {
    const sides = eq.split('->');
    const left = (sides[0] || '').trim();
    const right = (sides[1] || '').trim();

    const parseSide = (side: string) => {
      const map: SpeciesMap = {};
      if (!side) return map;
      const parts = side.split('+').map((p) => p.trim()).filter(Boolean);
      for (const part of parts) {
        const match = part.match(/^\s*(\d+)?\s*([A-Za-z0-9()]+)\s*$/);
        if (match) {
          const coef = match[1] ? parseInt(match[1], 10) : 1;
          const formula = match[2];
          map[formula] = coef;
        }
      }
      return map;
    };

    return {
      reactants: parseSide(left),
      products: parseSide(right),
    };
  };

  useEffect(() => {
    const numGrams = parseFloat(reactantAmount);
    if (isNaN(numGrams) || numGrams <= 0) {
      setResult(null);
      setProductDetails([]);
      return;
    }

    const { reactants, products } = parseEquation(reaction);

    // Ensure selected reactant is present on left side
    const coefReact = reactants[reactant];
    if (!coefReact) {
      // cannot calculate if selected reactant not found as reactant
      setResult(null);
      setProductDetails([]);
      return;
    }

    const mmReact = molarMasses[reactant] || 0;
    if (mmReact === 0) {
      setResult(null);
      setProductDetails([]);
      return;
    }

    // Convert grams -> moles (base unit = moles)
    const molesReact = numGrams / mmReact;

    const details: ProductDetail[] = [];

    // For each product, compute moles using stoichiometric ratio, then grams
    const productFormulas = Object.keys(products);
    for (const formula of productFormulas) {
      const coefProd = products[formula];
      const mmProd = molarMasses[formula] || 0;
      if (coefProd && mmProd > 0) {
        const molesProd = molesReact * (coefProd / coefReact);
        const gramsProd = molesProd * mmProd;
        details.push({ formula, moles: parseFloat(molesProd.toFixed(6)), grams: parseFloat(gramsProd.toFixed(6)) });
      }
    }

    // Choose primary result as the first product's grams (if any)
    if (details.length > 0) {
      setProductDetails(details);
      setResult(details[0].grams);
    } else {
      setProductDetails([]);
      setResult(null);
    }
  }, [reaction, reactantAmount, reactant]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    const inputs = [
      { label: 'Reaction', value: reaction },
      { label: 'Reactant Amount (g)', value: reactantAmount },
      { label: 'Reactant', value: reactant },
    ];

    const results = [
      { label: 'Primary Product Amount (g)', value: `${result} g` },
      ...productDetails.map((p) => ({ label: `${p.formula} (g)`, value: `${p.grams} g` })),
    ];

    generateCalculatorPDF({
      title: 'Stoichiometry Calculator Results',
      inputs,
      results,
    });
  };

  const chartData = productDetails.length > 0 && result !== null ? [
    { label: reactant, value: parseFloat(reactantAmount) || 0, type: 'Reactant' },
    ...productDetails.map((p) => ({ label: p.formula, value: p.grams, type: 'Product' })),
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="reaction">Chemical Reaction</Label>
        <Input
          id="reaction"
          type="text"
          value={reaction}
          onChange={(e) => setReaction(e.target.value)}
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="reactantAmount">Reactant Amount (g)</Label>
        <Input
          id="reactantAmount"
          type="number"
          value={reactantAmount}
          onChange={(e) => setReactantAmount(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="reactant">Reactant</Label>
        <Select
          id="reactant"
          value={reactant}
          onChange={(e) => setReactant(e.target.value)}
        >
          <option value="H2">H2</option>
          <option value="O2">O2</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Primary Product Amount (first product in equation)</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-4">g</div>

      <div className="space-y-2">
        {productDetails.map((p) => (
          <div key={p.formula} className="bg-gray-50 border rounded-lg p-3">
            <div className="text-sm text-gray-600">{p.formula}</div>
            <div className="text-xl font-semibold">{p.grams.toLocaleString()} g</div>
            <div className="text-sm text-gray-500">{p.moles.toLocaleString()} mol</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter a valid reaction and reactant amount to see results.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mass Comparison (g)</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(3)} g`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Stoichiometry Calculator"
      description="Calculate reactant and product amounts in chemical reactions. Convert grams of a reactant to expected grams of product(s) using stoichiometry and molar masses."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
