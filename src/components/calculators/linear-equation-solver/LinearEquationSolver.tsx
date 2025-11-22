'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function LinearEquationSolver() {
  const [a, setA] = useState<string>('2');
  const [b, setB] = useState<string>('-6');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB) && numA !== 0) {
      const solution = -numB / numA;
      setResult(parseFloat(solution.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [a, b]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Linear Equation Solver Results',
      inputs: [
        { label: 'Coefficient a', value: a },
        { label: 'Coefficient b', value: b },
      ],
      results: [
        { label: 'Result', value: `x = ${result}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="a">Coefficient a</Label>
        <Input
          id="a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="b">Coefficient b</Label>
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
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        x = {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Linear Equation Solver"
      description="Solve linear equations in one variable (ax + b = 0)."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
