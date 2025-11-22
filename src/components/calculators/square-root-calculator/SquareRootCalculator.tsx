'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function SquareRootCalculator() {
  const [number, setNumber] = useState<string>('25');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const num = parseFloat(number);
    if (!isNaN(num) && num >= 0) {
      setResult(Math.sqrt(num));
    } else {
      setResult(null);
    }
  }, [number]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Square Root Calculator Results',
      inputs: [
        { label: 'Number', value: number }
      ],
      results: [
        { label: 'Square Root', value: `${result}` }
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Square Root Calculator"
      description="Calculate the square root of any number with precision."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={null}
    />
  );
}
