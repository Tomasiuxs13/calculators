'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PercentileCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50, 60, 70, 80, 90, 100');
  const [percentile, setPercentile] = useState<number>(75);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numArray.length > 0) {
      numArray.sort((a, b) => a - b);
      const index = (percentile / 100) * (numArray.length - 1);
      const lowerIndex = Math.floor(index);
      const upperIndex = Math.ceil(index);
      const weight = index - lowerIndex;
      const value = (1 - weight) * numArray[lowerIndex] + weight * numArray[upperIndex];
      setResult(parseFloat(value.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [numbers, percentile]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Percentile Calculator Results',
      inputs: [
        { label: 'Numbers', value: numbers },
        { label: 'Percentile', value: percentile.toString() },
      ],
      results: [
        { label: 'Result', value: `${result}` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="numbers">Numbers (comma-separated)</Label>
        <Input
          id="numbers"
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="percentile">Percentile (0-100)</Label>
        <Input
          id="percentile"
          type="number"
          value={percentile}
          onChange={(e) => setPercentile(Number(e.target.value))}
          min="0"
          max="100"
          step="1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Percentile Value</div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Percentile', value: result },
  ] : [];

  const charts = result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Percentile Value</h3>
      <ResponsiveContainer width="100%" height={200}>
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
      title="Percentile Calculator"
      description="Calculate percentiles and quartiles of a dataset."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
