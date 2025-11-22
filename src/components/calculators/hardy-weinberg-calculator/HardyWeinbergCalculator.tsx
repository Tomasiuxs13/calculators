'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type HWResult = {
  p: number;
  q: number;
  p2: number;   // AA
  pq2: number;  // Aa
  q2: number;   // aa
};

export default function HardyWeinbergCalculator() {
  const [pValue, setPValue] = useState<string>('0.5');
  const [qValue, setQValue] = useState<string>('0.5');
  const [result, setResult] = useState<HWResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const pRaw = parseFloat(pValue);
    const qRaw = parseFloat(qValue);

    const isPValid = !isNaN(pRaw) && pRaw >= 0;
    const isQValid = !isNaN(qRaw) && qRaw >= 0;

    if (!isPValid && !isQValid) {
      setResult(null);
      return;
    }

    // If both provided and they sum to ~1, use them.
    // If they do not sum to 1 (or q invalid), assume q = 1 - p (trust p input)
    let p = isPValid ? pRaw : NaN;
    let q = isQValid ? qRaw : NaN;

    if (isPValid && (!isQValid || Math.abs(p + q - 1) > 1e-6)) {
      q = 1 - p;
    }

    if (!isPValid && isQValid) {
      p = 1 - q;
    }

    // Now validate final numbers
    if (isNaN(p) || isNaN(q) || p < 0 || q < 0) {
      setResult(null);
      return;
    }

    // clamp small floating errors
    if (p < 0) p = 0;
    if (q < 0) q = 0;

    // Normalize if small rounding causes sum != 1
    const sum = p + q;
    if (sum !== 0) {
      p = p / sum;
      q = q / sum;
    }

    const p2 = parseFloat((p * p).toFixed(6));
    const pq2 = parseFloat((2 * p * q).toFixed(6));
    const q2 = parseFloat((q * q).toFixed(6));

    setResult({ p: parseFloat(p.toFixed(6)), q: parseFloat(q.toFixed(6)), p2, pq2, q2 });
  }, [pValue, qValue]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Hardy-Weinberg Equilibrium Results',
      inputs: [
        { label: 'Frequency of Allele A (p)', value: pValue },
        { label: 'Frequency of Allele a (q)', value: qValue },
      ],
      results: [
        { label: 'p (A)', value: result.p.toString() },
        { label: 'q (a)', value: result.q.toString() },
        { label: 'p² (AA)', value: result.p2.toString() },
        { label: '2pq (Aa)', value: result.pq2.toString() },
        { label: 'q² (aa)', value: result.q2.toString() },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'AA', value: result.p2, display: `${(result.p2 * 100).toFixed(2)}%` },
    { label: 'Aa', value: result.pq2, display: `${(result.pq2 * 100).toFixed(2)}%` },
    { label: 'aa', value: result.q2, display: `${(result.q2 * 100).toFixed(2)}%` },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="p">Frequency of Allele A (p)</Label>
          <Input
            id="p"
            type="number"
            value={pValue}
            onChange={(e) => setPValue(e.target.value)}
            min="0"
            max="1"
            step="0.000001"
          />
          <p className="text-sm text-gray-500">Enter a value between 0 and 1. If q is missing or p + q ≠ 1, q will be calculated as 1 − p.</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="q">Frequency of Allele a (q)</Label>
          <Input
            id="q"
            type="number"
            value={qValue}
            onChange={(e) => setQValue(e.target.value)}
            min="0"
            max="1"
            step="0.000001"
          />
          <p className="text-sm text-gray-500">Optional. If left blank or inconsistent, q will be derived from p.</p>
        </div>

        {/* Example usage of imported Select to follow pattern (not required for calculation) */}
        <div className="space-y-2">
          <Label htmlFor="displayMode">Display Mode</Label>
          <Select id="displayMode" defaultValue="decimal" onChange={() => {}}>
            <option value="decimal">Decimal (default)</option>
            <option value="percent">Percent</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Hardy-Weinberg Frequencies</div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">p (A)</div>
          <div className="text-2xl font-bold text-blue-900">{result.p.toLocaleString()}</div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">q (a)</div>
          <div className="text-2xl font-bold text-blue-900">{result.q.toLocaleString()}</div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">Check</div>
          <div className="text-2xl font-bold text-blue-900">{(result.p + result.q).toFixed(6)}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">p² (AA)</div>
          <div className="text-3xl font-bold text-green-700 mt-2">{result.p2.toLocaleString()}</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">2pq (Aa)</div>
          <div className="text-3xl font-bold text-yellow-600 mt-2">{result.pq2.toLocaleString()}</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">q² (aa)</div>
          <div className="text-3xl font-bold text-red-600 mt-2">{result.q2.toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter valid allele frequencies to see results.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Genotype Frequency Distribution</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <Tooltip formatter={(value: number) => `${(value * 100).toFixed(2)}%`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Hardy-Weinberg Equilibrium Calculator"
      description="Calculate allele and genotype frequencies using the Hardy-Weinberg equilibrium (p², 2pq, q²). Enter allele frequencies (p and q) and see expected genotype distributions for a population in equilibrium."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
