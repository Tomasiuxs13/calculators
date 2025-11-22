'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RatioCalculator() {
  const [a, setA] = useState<string>('3');
  const [b, setB] = useState<string>('4');
  const [result, setResult] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB) && numB !== 0) {
      const simplifiedRatio = `${numA / gcd(numA, numB)}:${numB / gcd(numA, numB)}`;
      setResult(simplifiedRatio);
    } else {
      setResult(null);
    }
  }, [a, b]);

  const gcd = (x: number, y: number): number => {
    return y === 0 ? x : gcd(y, x % y);
  };

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Ratio Calculator Results',
      inputs: [
        { label: 'First Value', value: a },
        { label: 'Second Value', value: b },
      ],
      results: [
        { label: 'Simplified Ratio', value: result },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="a">First Value</Label>
        <Input
          id="a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="b">Second Value</Label>
        <Input
          id="b"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Simplified Ratio</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Ratio Calculator"
      description="Calculate ratios, simplify ratios, and find equivalent ratios."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={null}
    />
  );
}
