'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PythagoreanTheoremCalculator() {
  const [a, setA] = useState<string>('3');
  const [b, setB] = useState<string>('4');
  const [c, setC] = useState<number | null>(null);

  useEffect(() => {
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    if (!isNaN(sideA) && !isNaN(sideB)) {
      const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
      setC(hypotenuse);
    } else {
      setC(null);
    }
  }, [a, b]);

  const handleDownloadPDF = () => {
    if (c === null) return;

    generateCalculatorPDF({
      title: 'Pythagorean Theorem Calculator Results',
      inputs: [
        { label: 'Side A', value: a },
        { label: 'Side B', value: b },
      ],
      results: [
        { label: 'Hypotenuse C', value: `${c.toFixed(2)}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="a">Side A</Label>
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
        <Label htmlFor="b">Side B</Label>
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
        <Label htmlFor="c">Hypotenuse C (leave empty to calculate)</Label>
        <Input
          id="c"
          type="number"
          value={c !== null ? c.toFixed(2) : ''}
          readOnly
        />
      </div>
    </>
  );

  const results = c !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {c.toFixed(2)}
      </div>
      <div className="text-lg text-gray-700">Hypotenuse C</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pythagorean Theorem Calculator"
      description="Calculate missing side of a right triangle using Pythagorean theorem."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
