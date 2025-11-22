'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ElementCounts = Record<string, number>;

const ATOMIC_WEIGHTS: Record<string, number> = {
  H: 1.00794,
  He: 4.002602,
  Li: 6.941,
  Be: 9.012182,
  B: 10.811,
  C: 12.0107,
  N: 14.0067,
  O: 15.9994,
  F: 18.9984032,
  Ne: 20.1797,
  Na: 22.98976928,
  Mg: 24.3050,
  Al: 26.9815386,
  Si: 28.0855,
  P: 30.973762,
  S: 32.065,
  Cl: 35.453,
  Ar: 39.948,
  K: 39.0983,
  Ca: 40.078,
  Sc: 44.955912,
  Ti: 47.867,
  V: 50.9415,
  Cr: 51.9961,
  Mn: 54.938045,
  Fe: 55.845,
  Co: 58.933195,
  Ni: 58.6934,
  Cu: 63.546,
  Zn: 65.38,
  Ga: 69.723,
  Ge: 72.64,
  As: 74.92160,
  Se: 78.96,
  Br: 79.904,
  Kr: 83.798,
  Ag: 107.8682,
  I: 126.90447,
  Au: 196.966569,
  Pb: 207.2,
  // Add more if needed
};

function parseFormula(formula: string): ElementCounts {
  // Robust parser supporting nested parentheses and multipliers
  type StackItem = ElementCounts;
  const stack: StackItem[] = [{}];
  let i = 0;

  const isUpper = (ch: string) => /[A-Z]/.test(ch);
  const isLower = (ch: string) => /[a-z]/.test(ch);
  const isDigit = (ch: string) => /[0-9]/.test(ch);

  const parseNumber = (): number => {
    let start = i;
    while (i < formula.length && isDigit(formula[i])) i++;
    if (start === i) return 1;
    return parseInt(formula.slice(start, i), 10);
  };

  while (i < formula.length) {
    const ch = formula[i];

    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push({});
      i++;
    } else if (ch === ')' || ch === ']' || ch === '}') {
      i++;
      const multiplier = parseNumber();
      const popped = stack.pop() || {};
      const top = stack[stack.length - 1] || {};
      for (const el of Object.keys(popped)) {
        top[el] = (top[el] || 0) + popped[el] * multiplier;
      }
    } else if (isUpper(ch)) {
      // parse element symbol
      let symbol = formula[i];
      i++;
      while (i < formula.length && isLower(formula[i])) {
        symbol += formula[i];
        i++;
      }
      const count = parseNumber();
      const top = stack[stack.length - 1] || {};
      top[symbol] = (top[symbol] || 0) + count;
    } else {
      // skip any unexpected characters (including whitespace)
      i++;
    }
  }

  return stack[0];
}

export default function PercentCompositionCalculator() {
  const [compound, setCompound] = useState<string>('H2O');
  const [element, setElement] = useState<string>('H');
  const [result, setResult] = useState<number | null>(null);
  const [molarMass, setMolarMass] = useState<number | null>(null);
  const [elementMass, setElementMass] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const formula = compound.trim();
    const target = element.trim();

    if (!formula) {
      setResult(null);
      setMolarMass(null);
      setElementMass(null);
      setError('Please enter a chemical formula.');
      return;
    }

    if (!target) {
      setResult(null);
      setMolarMass(null);
      setElementMass(null);
      setError('Please enter an element symbol to analyze.');
      return;
    }

    try {
      const counts = parseFormula(formula);
      // compute molar mass
      let total = 0;
      let missing: string[] = [];
      for (const el of Object.keys(counts)) {
        const weight = ATOMIC_WEIGHTS[el];
        if (weight === undefined) {
          missing.push(el);
        } else {
          total += weight * counts[el];
        }
      }

      if (missing.length > 0) {
        setResult(null);
        setMolarMass(null);
        setElementMass(null);
        setError(`Unknown element(s): ${missing.join(', ')}. Add atomic weights for them.`);
        return;
      }

      const targetCount = counts[target] || 0;
      if (targetCount === 0) {
        setResult(0);
        setMolarMass(parseFloat(total.toFixed(6)));
        setElementMass(0);
        setError(null);
        return;
      }

      const targetWeight = ATOMIC_WEIGHTS[target];
      if (targetWeight === undefined) {
        setResult(null);
        setMolarMass(null);
        setElementMass(null);
        setError(`Unknown element: ${target}`);
        return;
      }

      const elementMassValue = targetWeight * targetCount;
      const percent = (elementMassValue / total) * 100;

      setMolarMass(parseFloat(total.toFixed(6)));
      setElementMass(parseFloat(elementMassValue.toFixed(6)));
      setResult(parseFloat(percent.toFixed(6)));
      setError(null);
    } catch (e) {
      setResult(null);
      setMolarMass(null);
      setElementMass(null);
      setError('Failed to parse formula. Ensure proper element symbols and parentheses.');
    }
  }, [compound, element]);

  const handleDownloadPDF = () => {
    if (result === null || molarMass === null) return;

    generateCalculatorPDF({
      title: 'Percent Composition Results',
      inputs: [
        { label: 'Compound', value: compound },
        { label: 'Element', value: element },
      ],
      results: [
        { label: 'Molar Mass (g/mol)', value: `${molarMass} g/mol` },
        { label: `${element} Mass in Formula (g/mol)`, value: `${elementMass} g/mol` },
        { label: 'Percent Composition', value: `${result}%` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: element, value: result, label: `${element}` },
    { name: 'Other', value: parseFloat((100 - result).toFixed(6)), label: 'Other Elements' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="compound">Chemical Formula</Label>
        <Input
          id="compound"
          type="text"
          value={compound}
          onChange={(e) => setCompound(e.target.value)}
          placeholder="e.g. H2O, C6H12O6, Fe2(SO4)3"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="element">Element</Label>
        <Input
          id="element"
          type="text"
          value={element}
          onChange={(e) => setElement(e.target.value)}
          placeholder="e.g. H, C, O, Fe"
        />
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      {error ? (
        <div className="text-sm text-red-600 mb-2">{error}</div>
      ) : result !== null ? (
        <>
          <div className="text-sm text-gray-600 mb-2">Percent Composition by Mass</div>
          <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}%</div>
          <div className="text-lg text-gray-700 mb-2">Element: {element}</div>
          <div className="text-sm text-gray-600">Molar Mass: {molarMass} g/mol</div>
          <div className="text-sm text-gray-600">{element} Mass in Formula: {elementMass} g/mol</div>
        </>
      ) : (
        <div className="text-sm text-gray-600">Enter a formula and element to see results.</div>
      )}
    </div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Composition Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Percent Composition Calculator"
      description="Calculate percent composition by mass of a given element in a chemical compound. Supports nested parentheses and common element symbols."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
