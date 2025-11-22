'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function VarianceCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50');
  const [variance, setVariance] = useState<number | null>(null);
  const [stdDeviation, setStdDeviation] = useState<number | null>(null);
  const [chartData, setChartData] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numArray.length > 0) {
      const mean = numArray.reduce((acc, val) => acc + val, 0) / numArray.length;
      const varianceValue = numArray.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numArray.length;
      const stdDeviationValue = Math.sqrt(varianceValue);
      setVariance(parseFloat(varianceValue.toFixed(6)));
      setStdDeviation(parseFloat(stdDeviationValue.toFixed(6)));

      setChartData(numArray.map((value, index) => ({ label: `Data ${index + 1}`, value })));
    } else {
      setVariance(null);
      setStdDeviation(null);
      setChartData([]);
    }
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (variance === null || stdDeviation === null) return;

    generateCalculatorPDF({
      title: 'Variance Calculator Results',
      inputs: [
        { label: 'Numbers', value: numbers },
      ],
      results: [
        { label: 'Variance', value: variance.toString() },
        { label: 'Standard Deviation', value: stdDeviation.toString() },
      ],
    });
  };

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

  const results = (variance !== null && stdDeviation !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Variance: {variance.toLocaleString()}
      </div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Standard Deviation: {stdDeviation.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = variance !== null && stdDeviation !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Data Distribution</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(2)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Variance Calculator"
      description="Calculate variance and standard deviation of a dataset."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
