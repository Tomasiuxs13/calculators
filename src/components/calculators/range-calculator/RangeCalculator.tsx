'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RangeCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50');
  const [range, setRange] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numArray.length > 0) {
      const max = Math.max(...numArray);
      const min = Math.min(...numArray);
      setRange(max - min);
    } else {
      setRange(null);
    }
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (range === null) return;

    generateCalculatorPDF({
      title: 'Range Calculator Results',
      inputs: [
        { label: 'Numbers', value: numbers },
      ],
      results: [
        { label: 'Range', value: `${range}` },
      ],
    });
  };

  const chartData = range !== null ? [
    { label: 'Range', value: range },
  ] : [];

  const inputs = (
    <div className="space-y-2">
      <Label htmlFor="numbers">Numbers (comma-separated)</Label>
      <Input
        id="numbers"
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
    </div>
  );

  const results = range !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {range.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Range</div>
    </div>
  ) : null;

  const charts = showCharts && range !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Range Visualization</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Range Calculator"
      description="Calculate the range (difference between max and min) of a dataset."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
