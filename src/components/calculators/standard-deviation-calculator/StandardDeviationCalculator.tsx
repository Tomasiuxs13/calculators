'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

function calculateStatistics(numbers: number[]) {
  const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
  const standardDeviation = Math.sqrt(variance);
  return { mean, variance, standardDeviation };
}

export default function StandardDeviationCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50');
  const [results, setResults] = useState<{ mean: number; variance: number; standardDeviation: number; } | null>(null);

  useEffect(() => {
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numArray.length > 0) {
      setResults(calculateStatistics(numArray));
    } else {
      setResults(null);
    }
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (results === null) return;

    generateCalculatorPDF({
      title: 'Standard Deviation Results',
      inputs: [
        { label: 'Numbers', value: numbers },
      ],
      results: [
        { label: 'Mean', value: `${results.mean}` },
        { label: 'Variance', value: `${results.variance}` },
        { label: 'Standard Deviation', value: `${results.standardDeviation}` },
      ],
    });
  };

  const chartData = results ? [
    { name: 'Mean', value: results.mean },
    { name: 'Variance', value: results.variance },
    { name: 'Standard Deviation', value: results.standardDeviation },
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

  const resultsDisplay = results ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`Mean: ${results.mean.toLocaleString()}, Variance: ${results.variance.toLocaleString()}, SD: ${results.standardDeviation.toLocaleString()}`}
      </div>
    </div>
  ) : null;

  const charts = results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Statistical Analysis</h3>
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
      title="Standard Deviation Calculator"
      description="Calculate standard deviation, variance, and mean of a dataset."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={true}
      onToggleCharts={() => {}}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
