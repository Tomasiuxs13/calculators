'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CubeRootCalculator() {
  const [number, setNumber] = useState<string>('27');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numValue = parseFloat(number);
    if (!isNaN(numValue) && numValue >= 0) {
      setResult(Math.cbrt(numValue));
    } else {
      setResult(null);
    }
  }, [number]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Cube Root Calculator Results',
      inputs: [
        { label: 'Number', value: number },
      ],
      results: [
        { label: 'Result', value: `${result}` },
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
        onChange={(e) => setNumber(e.target.value)}
        min="0"
        step="0.01"
      />
    </div>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Cube Root</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cube Root Calculator"
      description="Calculate the cube root of any number."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
