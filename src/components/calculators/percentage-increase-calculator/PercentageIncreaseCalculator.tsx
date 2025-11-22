'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PercentageIncreaseCalculator() {
  const [originalValue, setOriginalValue] = useState<string>('100');
  const [newValue, setNewValue] = useState<string>('120');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const original = parseFloat(originalValue);
    const newVal = parseFloat(newValue);
    if (!isNaN(original) && !isNaN(newVal) && original > 0) {
      const increase = newVal - original;
      const percentageIncrease = (increase / original) * 100;
      setResult(parseFloat(percentageIncrease.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [originalValue, newValue]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Percentage Increase Calculator Results',
      inputs: [
        { label: 'Original Value', value: originalValue },
        { label: 'New Value', value: newValue },
      ],
      results: [
        { label: 'Percentage Increase', value: `${result}%` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="original">Original Value</Label>
        <Input
          id="original"
          type="number"
          value={originalValue}
          onChange={(e) => setOriginalValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="new">New Value</Label>
        <Input
          id="new"
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
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
      <div className="text-lg text-gray-700">%</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Percentage Increase Calculator"
      description="Calculate percentage increase or decrease between two values."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}