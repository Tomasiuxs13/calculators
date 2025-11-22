'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ExponentCalculator() {
  const [base, setBase] = useState<string>('2');
  const [exponent, setExponent] = useState<string>('8');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const baseValue = parseFloat(base);
    const exponentValue = parseFloat(exponent);
    if (!isNaN(baseValue) && !isNaN(exponentValue)) {
      setResult(Math.pow(baseValue, exponentValue));
    } else {
      setResult(null);
    }
  }, [base, exponent]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Exponentiation Calculator Results',
      inputs: [
        { label: 'Base', value: base },
        { label: 'Exponent', value: exponent },
      ],
      results: [
        { label: 'Result', value: `${result}` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="base">Base</Label>
        <Input
          id="base"
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="exponent">Exponent</Label>
        <Input
          id="exponent"
          type="number"
          value={exponent}
          onChange={(e) => setExponent(e.target.value)}
          step="1"
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
      title="Exponent Calculator"
      description="Calculate numbers raised to a power (exponentiation)."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
