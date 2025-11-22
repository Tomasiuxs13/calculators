'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type QuartileResults = {
  q1: number;
  q2: number;
  q3: number;
  count: number;
};

function parseNumberList(input: string): number[] {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => Number(s))
    .filter((n) => !Number.isNaN(n));
}

function median(sorted: number[]): number {
  const len = sorted.length;
  if (len === 0) return NaN;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

function computeQuartiles(numbers: number[]): QuartileResults | null {
  if (!numbers || numbers.length === 0) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const n = sorted.length;

  // split into lower and upper halves
  let lower: number[];
  let upper: number[];

  if (n % 2 === 0) {
    lower = sorted.slice(0, n / 2);
    upper = sorted.slice(n / 2);
  } else {
    // exclude median
    lower = sorted.slice(0, Math.floor(n / 2));
    upper = sorted.slice(Math.floor(n / 2) + 1);
  }

  const q1 = median(lower);
  const q2 = median(sorted);
  const q3 = median(upper);

  return {
    q1,
    q2,
    q3,
    count: n,
  };
}

export default function QuartileCalculator() {
  const [numbersInput, setNumbersInput] = useState<string>('10, 20, 30, 40, 50, 60, 70, 80, 90, 100');
  const [results, setResults] = useState<QuartileResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const nums = parseNumberList(numbersInput);
    if (nums.length === 0) {
      setResults(null);
      return;
    }

    const computed = computeQuartiles(nums);
    if (computed) {
      // round to reasonable precision for display
      setResults({
        q1: parseFloat(computed.q1.toFixed(6)),
        q2: parseFloat(computed.q2.toFixed(6)),
        q3: parseFloat(computed.q3.toFixed(6)),
        count: computed.count,
      });
    } else {
      setResults(null);
    }
  }, [numbersInput]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'Quartile Calculator Results',
      inputs: [
        { label: 'Numbers (comma-separated)', value: numbersInput },
      ],
      results: [
        { label: 'Count', value: String(results.count) },
        { label: 'Q1', value: String(results.q1) },
        { label: 'Median (Q2)', value: String(results.q2) },
        { label: 'Q3', value: String(results.q3) },
      ],
    });
  };

  const chartData = results
    ? [
        { label: 'Q1', value: results.q1 },
        { label: 'Q2', value: results.q2 },
        { label: 'Q3', value: results.q3 },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="numbers">Numbers (comma-separated)</Label>
        <Input
          id="numbers"
          type="text"
          value={numbersInput}
          onChange={(e) => setNumbersInput(e.target.value)}
          placeholder="e.g. 1, 2, 3, 4, 5"
        />
      </div>
    </>
  );

  const resultsDisplay = results ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Quartile Results</div>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Q1</div>
          <div className="text-2xl font-bold text-blue-900">{results.q1.toLocaleString()}</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Q2 (Median)</div>
          <div className="text-2xl font-bold text-blue-900">{results.q2.toLocaleString()}</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Q3</div>
          <div className="text-2xl font-bold text-blue-900">{results.q3.toLocaleString()}</div>
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-4">Count: {results.count}</div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter a comma-separated list of numbers to see quartiles.</div>
  );

  const charts = showCharts && results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Quartile Chart</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Quartile Calculator"
      description="Calculate the first (Q1), second (median, Q2), and third quartile (Q3) of a dataset. Provide a comma-separated list of numbers."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
