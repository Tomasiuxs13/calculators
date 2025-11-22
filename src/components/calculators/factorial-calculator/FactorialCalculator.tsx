'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function FactorialCalculator() {
  const [number, setNumber] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const calculateFactorial = (n: number): number => {
      if (n < 0) return NaN;
      return n === 0 ? 1 : n * calculateFactorial(n - 1);
    };

    setResult(calculateFactorial(number));
  }, [number]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Factorial Calculator Results',
      inputs: [
        { label: 'Number', value: number.toString() },
      ],
      results: [
        { label: 'Result', value: `${result} (factorial of ${number})` },
      ],
    });
  };

  const inputs = (
    <div className="space-y-2">
      <Label htmlFor="number">Number</Label>
      <Input
        id="number"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
        step="1"
      />
    </div>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{number}! = {result}</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Factorial Calculator"
      description="Calculate factorial of a number (n!)."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
