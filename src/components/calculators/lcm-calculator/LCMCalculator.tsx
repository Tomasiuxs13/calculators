'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function LCMCalculator() {
  const [a, setA] = useState<number>(12);
  const [b, setB] = useState<number>(18);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const calculateLCM = (num1: number, num2: number): number => {
      const gcd = (x: number, y: number): number => {
        return y === 0 ? x : gcd(y, x % y);
      };
      return (num1 * num2) / gcd(num1, num2);
    };

    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
      setResult(calculateLCM(a, b));
    } else {
      setResult(null);
    }
  }, [a, b]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'LCM Calculator Results',
      inputs: [
        { label: 'First Number', value: a.toString() },
        { label: 'Second Number', value: b.toString() },
      ],
      results: [
        { label: 'LCM', value: result.toString() },
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
          value={a}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setA(isNaN(value) ? 0 : value);
          }}
          min="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="b">Second Number</Label>
        <Input
          id="b"
          type="number"
          value={b}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setB(isNaN(value) ? 0 : value);
          }}
          min="1"
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
      <div className="text-lg text-gray-700">LCM</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="LCM Calculator"
      description="Calculate Least Common Multiple (LCM) of two or more numbers."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
