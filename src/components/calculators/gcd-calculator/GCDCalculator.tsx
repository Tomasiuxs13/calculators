'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function GCDCalculator() {
  const [a, setA] = useState<number>(48);
  const [b, setB] = useState<number>(18);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const gcd = (x: number, y: number): number => {
      return y === 0 ? x : gcd(y, x % y);
    };
    setResult(isNaN(a) || isNaN(b) ? null : gcd(a, b));
  }, [a, b]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'GCD Calculator Results',
      inputs: [
        { label: 'First Number', value: a.toString() },
        { label: 'Second Number', value: b.toString() },
      ],
      results: [
        { label: 'GCD', value: result.toString() },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="a">First Number</Label>
        <Input
          id="a"
          type="number"
          value={isNaN(a) ? '' : a}
          onChange={(e) => setA(parseFloat(e.target.value) || 0)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="b">Second Number</Label>
        <Input
          id="b"
          type="number"
          value={isNaN(b) ? '' : b}
          onChange={(e) => setB(parseFloat(e.target.value) || 0)}
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
      <div className="text-lg text-gray-700">GCD</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="GCD Calculator"
      description="Calculate Greatest Common Divisor (GCD) of two or more numbers."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
