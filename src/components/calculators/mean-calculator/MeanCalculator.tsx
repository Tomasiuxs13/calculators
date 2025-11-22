'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function MeanCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numArray = numbers.split(',').map(Number).filter(n => !isNaN(n));
    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / numArray.length;
    setResult(numArray.length ? mean : null);
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Mean Calculator Results',
      inputs: [
        { label: 'Numbers', value: numbers },
      ],
      results: [
        { label: 'Mean', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Mean', value: result },
  ] : [];

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
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mean Value</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Mean Calculator"
      description="Calculate the mean (average) of a set of numbers."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
