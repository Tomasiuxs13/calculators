'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CalcResult = {
  formula: string;
  breakdown: { element: string; percent: number; moles: number; ratio: number; count: number }[];
};

// Approximate atomic weights for common elements (g/mol)
const atomicWeights: Record<string, number> = {
  H: 1.008,
  He: 4.0026,
  Li: 6.94,
  Be: 9.0122,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.180,
  Na: 22.990,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  Ar: 39.948,
  K: 39.098,
  Ca: 40.078,
  Fe: 55.845,
  Cu: 63.546,
  Zn: 65.38,
  Br: 79.904,
  Ag: 107.8682,
  I: 126.90447,
  Au: 196.96657,
};

function parseList(input: string): string[] {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function parsePercentages(input: string): number[] {
  return input
    .split(',')
    .map((s) => s.trim().replace('%', ''))
    .map((s) => parseFloat(s))
    .filter((n) => !isNaN(n));
}

function findSmallestMultiplier(ratios: number[]): number {
  // try multipliers 1..12 and pick the smallest that makes all close to integers
  for (let mult = 1; mult <= 12; mult++) {
    let ok = true;
    for (const r of ratios) {
      const v = r * mult;
      if (Math.abs(v - Math.round(v)) > 0.15) {
        ok = false;
        break;
      }
    }
    if (ok) return mult;
  }
  return 1; // fallback
}

export default function EmpiricalFormulaCalculator() {
  const [elementsInput, setElementsInput] = useState<string>('C, H, O');
  const [percentInput, setPercentInput] = useState<string>('40, 6.7, 53.3');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    // Auto-calculate whenever inputs change
    const elements = parseList(elementsInput);
    const percentages = parsePercentages(percentInput);

    setError(null);

    if (elements.length === 0 || percentages.length === 0) {
      setResult(null);
      return;
    }

    if (elements.length !== percentages.length) {
      setResult(null);
      setError('Number of elements and percentages must match.');
      return;
    }

    // Check atomic weights availability
    for (const el of elements) {
      if (!atomicWeights.hasOwnProperty(el)) {
        setResult(null);
        setError(`Atomic weight for element "${el}" is not available.`);
        return;
      }
    }

    // Assume 100 g sample: mass of each element in grams = percent (as percent of 100 g)
    const masses = percentages.map((p) => p * 1.0); // grams

    // Calculate moles = mass / atomic weight
    const moles = masses.map((mass, i) => mass / atomicWeights[elements[i]]);

    // Guard against zero or negative
    if (moles.some((m) => !isFinite(m) || m <= 0)) {
      setResult(null);
      setError('Invalid percentages or atomic weights resulted in non-positive moles.');
      return;
    }

    // Find ratios by dividing by smallest mole
    const minMole = Math.min(...moles);
    const rawRatios = moles.map((m) => m / minMole);

    // Find multiplier to convert ratios to near-integers
    const multiplier = findSmallestMultiplier(rawRatios);
    const counts = rawRatios.map((r) => Math.round(r * multiplier));

    // Build formula string
    let formula = '';
    for (let i = 0; i < elements.length; i++) {
      formula += elements[i];
      if (counts[i] > 1) formula += counts[i].toString();
    }

    const breakdown = elements.map((el, i) => ({
      element: el,
      percent: parseFloat(percentages[i].toFixed(4)),
      moles: parseFloat(moles[i].toFixed(6)),
      ratio: parseFloat(rawRatios[i].toFixed(6)),
      count: counts[i],
    }));

    setResult({ formula, breakdown });
  }, [elementsInput, percentInput]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Empirical Formula Results',
      inputs: [
        { label: 'Elements', value: elementsInput },
        { label: 'Percentages', value: percentInput },
      ],
      results: [
        { label: 'Empirical Formula', value: result.formula },
        ...result.breakdown.map((b) => ({ label: `${b.element} breakdown`, value: `Percent: ${b.percent}%, Moles: ${b.moles}, Ratio: ${b.ratio}, Count: ${b.count}` })),
      ],
    });
  };

  const chartData = result
    ? result.breakdown.map((b) => ({ name: b.element, value: b.moles }))
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="elements">Elements (comma-separated)</Label>
        <Input
          id="elements"
          type="text"
          value={elementsInput}
          onChange={(e) => setElementsInput(e.target.value)}
          placeholder="e.g. C, H, O"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="percentages">Percentages (comma-separated)</Label>
        <Input
          id="percentages"
          type="text"
          value={percentInput}
          onChange={(e) => setPercentInput(e.target.value)}
          placeholder="e.g. 40, 6.7, 53.3"
        />
      </div>

      {/* Imported Select to follow example patterns (not used for this calculator) */}
      <div className="sr-only">
        <Label htmlFor="dummy">Dummy Select</Label>
        <Select id="dummy" value="" onChange={() => {}}>
          <option value="">n/a</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Empirical Formula</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.formula}</div>

      <div className="mt-4 bg-gray-50 border border-gray-100 rounded-lg p-4 text-left">
        <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-700 mb-2">
          <div>Element</div>
          <div>Percent (%)</div>
          <div>Moles</div>
          <div>Count</div>
        </div>
        {result.breakdown.map((b) => (
          <div key={b.element} className="grid grid-cols-4 gap-2 items-center text-sm text-gray-800 py-1 border-t border-gray-100">
            <div>{b.element}</div>
            <div>{b.percent.toLocaleString()}</div>
            <div>{b.moles}</div>
            <div>{b.count}</div>
          </div>
        ))}
      </div>

      {error ? <div className="text-sm text-red-600 mt-3">{error}</div> : null}
    </div>
  ) : (
    <div className="text-center text-gray-600">
      {error ? <div className="text-sm text-red-600">{error}</div> : <div>Enter elements and percentages to see results.</div>}
    </div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Moles per Element (Assumed 100 g sample)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(6)} mol`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Empirical Formula Calculator"
      description="Calculate the empirical formula from percent composition. Enter element symbols and their percent composition (by mass)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
