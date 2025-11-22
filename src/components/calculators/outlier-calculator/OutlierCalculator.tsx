'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type OutlierResult = {
  sorted: number[];
  q1: number;
  q2: number;
  q3: number;
  iqr: number;
  lowerFence: number;
  upperFence: number;
  outliers: number[];
};

export default function OutlierCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50, 60, 70, 80, 90, 200');
  const [result, setResult] = useState<OutlierResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Helper: parse input string into array of numbers
  const parseNumbers = (input: string): number[] => {
    return input
      .split(/[,\n;]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((s) => Number(s))
      .filter((n) => !isNaN(n));
  };

  // Helper: median of sorted array slice
  const median = (arr: number[], start = 0, end = arr.length - 1): number => {
    const len = end - start + 1;
    if (len <= 0) return 0;
    const mid = start + Math.floor(len / 2);
    if (len % 2 === 1) {
      return arr[mid];
    } else {
      return (arr[mid] + arr[mid + 1]) / 2;
    }
  };

  useEffect(() => {
    const parsed = parseNumbers(numbers);
    if (parsed.length === 0) {
      setResult(null);
      return;
    }

    const sorted = [...parsed].sort((a, b) => a - b);

    // Compute quartiles using median-of-halves method
    const n = sorted.length;
    let q2: number;
    if (n % 2 === 1) {
      q2 = sorted[Math.floor(n / 2)];
    } else {
      q2 = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    }

    const lowerHalfEnd = Math.floor(n / 2) - 1;
    const upperHalfStart = n % 2 === 0 ? n / 2 : Math.floor(n / 2) + 1;

    const q1 = median(sorted, 0, lowerHalfEnd);
    const q3 = median(sorted, upperHalfStart, n - 1);

    const iqr = q3 - q1;
    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;

    const outliers = sorted.filter((v) => v < lowerFence || v > upperFence);

    setResult({
      sorted,
      q1: parseFloat(q1.toFixed(6)),
      q2: parseFloat(q2.toFixed(6)),
      q3: parseFloat(q3.toFixed(6)),
      iqr: parseFloat(iqr.toFixed(6)),
      lowerFence: parseFloat(lowerFence.toFixed(6)),
      upperFence: parseFloat(upperFence.toFixed(6)),
      outliers,
    });
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Outlier Detection (IQR) Results',
      inputs: [
        { label: 'Numbers (comma-separated)', value: numbers },
      ],
      results: [
        { label: 'Sorted Values', value: result.sorted.join(', ') },
        { label: 'Q1', value: String(result.q1) },
        { label: 'Median (Q2)', value: String(result.q2) },
        { label: 'Q3', value: String(result.q3) },
        { label: 'IQR', value: String(result.iqr) },
        { label: 'Lower Fence', value: String(result.lowerFence) },
        { label: 'Upper Fence', value: String(result.upperFence) },
        { label: 'Outliers', value: result.outliers.length > 0 ? result.outliers.join(', ') : 'None' },
      ],
    });
  };

  const chartData = result
    ? result.sorted.map((v, i) => ({
        name: `#${i + 1}`,
        value: v,
        outlier: result.outliers.includes(v),
      }))
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="numbers">Numbers (comma-separated)</Label>
        <Input
          id="numbers"
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="e.g. 1, 2, 3, 4, 100"
        />
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">IQR Outlier Detection Results</div>
      <div className="grid grid-cols-2 gap-4 text-left mb-4">
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">Q1</div>
          <div className="text-2xl font-bold text-blue-900">{result.q1.toLocaleString()}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">Median (Q2)</div>
          <div className="text-2xl font-bold text-blue-900">{result.q2.toLocaleString()}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">Q3</div>
          <div className="text-2xl font-bold text-blue-900">{result.q3.toLocaleString()}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">IQR</div>
          <div className="text-2xl font-bold text-blue-900">{result.iqr.toLocaleString()}</div>
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-2">Fences</div>
      <div className="mb-3">
        <div className="text-gray-700">Lower: <span className="font-medium">{result.lowerFence}</span></div>
        <div className="text-gray-700">Upper: <span className="font-medium">{result.upperFence}</span></div>
      </div>

      <div className="text-sm text-gray-600 mb-2">Outliers ({result.outliers.length})</div>
      <div className="text-lg text-gray-800 font-medium">
        {result.outliers.length > 0 ? result.outliers.join(', ') : 'None'}
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Value Distribution (Outliers highlighted)</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => String(value)} />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              // highlight outliers in red
              <Cell key={`cell-${index}`} fill={entry.outlier ? '#ef4444' : '#3b82f6'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Outlier Calculator"
      description="Identify outliers in a dataset using the Interquartile Range (IQR) method."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
