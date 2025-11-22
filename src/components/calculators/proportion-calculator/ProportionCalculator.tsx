'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ProportionCalculator() {
  const [a, setA] = useState<string>('3');
  const [b, setB] = useState<string>('4');
  const [c, setC] = useState<string>('6');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC) && numB !== 0) {
      const missingValue = (numA * numC) / numB;
      setResult(parseFloat(missingValue.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [a, b, c]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Proportion Calculator Results',
      inputs: [
        { label: 'Value A', value: a },
        { label: 'Value B', value: b },
        { label: 'Value C', value: c },
      ],
      results: [
        { label: 'Result', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Value A', value: parseFloat(a) || 0 },
    { label: 'Value B', value: parseFloat(b) || 0 },
    { label: 'Value C', value: parseFloat(c) || 0 },
    { label: 'Result', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="a">Value A</Label>
        <Input
          id="a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="b">Value B</Label>
        <Input
          id="b"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="c">Value C</Label>
        <Input
          id="c"
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          min="0"
          step="0.01"
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

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Proportion Comparison</h3>
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
      title="Proportion Calculator"
      description="Solve proportions and find missing values in proportional relationships."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
