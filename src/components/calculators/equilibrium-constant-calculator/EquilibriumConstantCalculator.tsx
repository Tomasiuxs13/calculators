'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CoeffOrder = 'products-first' | 'reactants-first';

export default function EquilibriumConstantCalculator() {
  const [products, setProducts] = useState<string>('0.1, 0.1');
  const [reactants, setReactants] = useState<string>('0.05, 0.05');
  const [coefficients, setCoefficients] = useState<string>('1, 1, 1, 1');
  const [coeffOrder, setCoeffOrder] = useState<CoeffOrder>('products-first');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);

    const parseNumberArray = (input: string) => {
      return input
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .map((s) => parseFloat(s));
    };

    const prodArr = parseNumberArray(products);
    const reactArr = parseNumberArray(reactants);
    const coeffArr = parseNumberArray(coefficients);

    if (prodArr.length === 0 || reactArr.length === 0) {
      setResult(null);
      setError('Provide at least one product and one reactant concentration.');
      return;
    }

    if (prodArr.some((n) => isNaN(n) || n < 0) || reactArr.some((n) => isNaN(n) || n < 0)) {
      setResult(null);
      setError('Concentrations must be non-negative numbers.');
      return;
    }

    if (coeffArr.some((n) => isNaN(n) || n < 0)) {
      setResult(null);
      setError('Coefficients must be non-negative numbers.');
      return;
    }

    const pLen = prodArr.length;
    const rLen = reactArr.length;

    let productCoeffs: number[] = [];
    let reactantCoeffs: number[] = [];

    // Determine coefficients assignment based on provided coefficients and selected order
    if (coeffArr.length === pLen + rLen) {
      if (coeffOrder === 'products-first') {
        productCoeffs = coeffArr.slice(0, pLen);
        reactantCoeffs = coeffArr.slice(pLen);
      } else {
        reactantCoeffs = coeffArr.slice(0, rLen);
        productCoeffs = coeffArr.slice(rLen);
      }
    } else if (coeffArr.length === pLen) {
      productCoeffs = coeffArr.slice();
      reactantCoeffs = Array(rLen).fill(1);
    } else if (coeffArr.length === rLen) {
      reactantCoeffs = coeffArr.slice();
      productCoeffs = Array(pLen).fill(1);
    } else {
      // Fallback: assume all coefficients are 1
      productCoeffs = Array(pLen).fill(1);
      reactantCoeffs = Array(rLen).fill(1);
    }

    // Compute numerator and denominator
    try {
      let numerator = 1;
      for (let i = 0; i < pLen; i++) {
        const conc = prodArr[i];
        const coeff = productCoeffs[i] ?? 1;
        numerator *= Math.pow(conc, coeff);
      }

      let denominator = 1;
      for (let j = 0; j < rLen; j++) {
        const conc = reactArr[j];
        const coeff = reactantCoeffs[j] ?? 1;
        denominator *= Math.pow(conc, coeff);
      }

      if (denominator === 0) {
        setResult(Infinity);
      } else {
        const K = numerator / denominator;
        // Normalize display precision while preserving magnitude
        const display = Number.isFinite(K) ? parseFloat(K.toPrecision(6)) : K;
        setResult(display);
      }
    } catch (e) {
      setResult(null);
      setError('An error occurred computing the equilibrium constant.');
    }
  }, [products, reactants, coefficients, coeffOrder]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Equilibrium Constant (K) Results',
      inputs: [
        { label: 'Product Concentrations', value: products },
        { label: 'Reactant Concentrations', value: reactants },
        { label: 'Coefficients', value: coefficients },
        { label: 'Coefficient Order', value: coeffOrder },
      ],
      results: [
        { label: 'Equilibrium Constant (K)', value: String(result) },
      ],
    });
  };

  const chartData = (() => {
    const prodArr = products
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((s) => parseFloat(s));
    const reactArr = reactants
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((s) => parseFloat(s));

    if (prodArr.some((n) => isNaN(n)) || reactArr.some((n) => isNaN(n))) return [];

    const data: { name: string; concentration: number; type: 'Product' | 'Reactant' }[] = [];
    for (let i = 0; i < prodArr.length; i++) {
      data.push({ name: `P${i + 1}`, concentration: prodArr[i] || 0, type: 'Product' });
    }
    for (let j = 0; j < reactArr.length; j++) {
      data.push({ name: `R${j + 1}`, concentration: reactArr[j] || 0, type: 'Reactant' });
    }
    return data;
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="products">Product Concentrations (comma-separated)</Label>
        <Input
          id="products"
          type="text"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reactants">Reactant Concentrations (comma-separated)</Label>
        <Input
          id="reactants"
          type="text"
          value={reactants}
          onChange={(e) => setReactants(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coefficients">Coefficients (comma-separated)</Label>
        <Input
          id="coefficients"
          type="text"
          value={coefficients}
          onChange={(e) => setCoefficients(e.target.value)}
        />
        <p className="text-sm text-gray-600">Provide coefficients in the order indicated by the "Order" selector below. If length mismatches, coefficients of 1 are assumed where missing.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="order">Order</Label>
        <Select
          id="order"
          value={coeffOrder}
          onChange={(e) => setCoeffOrder(e.target.value as CoeffOrder)}
        >
          <option value="products-first">Products then Reactants (default)</option>
          <option value="reactants-first">Reactants then Products</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Equilibrium Constant (K)</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result === Infinity ? '∞' : result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Unitless (activity-based K)</div>
      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid concentrations and coefficients to see K.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Concentrations</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="concentration" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-center mt-4 text-sm text-gray-600">
        Calculated K: {result === null ? '—' : (result === Infinity ? '∞' : result.toLocaleString())}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Equilibrium Constant Calculator"
      description="Calculate the equilibrium constant (K) for chemical reactions from product and reactant concentrations and stoichiometric coefficients."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
