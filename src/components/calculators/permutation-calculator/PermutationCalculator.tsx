'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PermutationCalculator() {
  const [n, setN] = useState<number>(10);
  const [r, setR] = useState<number>(3);
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    if (n >= 0 && r >= 0 && n >= r) {
      const permutation = factorial(n) / factorial(n - r);
      setResult(permutation);
    } else {
      setResult(null);
    }
  }, [n, r]);

  const factorial = (num: number): number => {
    return num <= 1 ? 1 : num * factorial(num - 1);
  };

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Permutation Calculator Results',
      inputs: [
        { label: 'Total Items (n)', value: n.toString() },
        { label: 'Items to Arrange (r)', value: r.toString() },
      ],
      results: [
        { label: 'Result', value: result.toString() },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Permutations', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="n">Total Items (n)</Label>
        <Input
          id="n"
          type="number"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="r">Items to Arrange (r)</Label>
        <Input
          id="r"
          type="number"
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
          min="0"
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
      <div className="text-lg text-gray-700">Permutations</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Permutation Result</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(0)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Permutation Calculator"
      description="Calculate permutations (nPr) - ordered arrangements."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
