'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const logarithmBases = {
  '10': Math.log10,
  'e': Math.log,
  '2': Math.log2,
};

export default function LogarithmCalculator() {
  const [number, setNumber] = useState<string>('100');
  const [base, setBase] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(number);
    if (!isNaN(numValue) && numValue > 0) {
      const logFunction = logarithmBases[base as keyof typeof logarithmBases];
      const logResult = logFunction(numValue);
      setResult(parseFloat(logResult.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [number, base]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Logarithm Calculator Results',
      inputs: [
        { label: 'Number', value: number },
        { label: 'Base', value: base },
      ],
      results: [
        { label: 'Result', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Logarithm Result', value: result },
  ] : [];

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
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="base">Base</Label>
        <Select
          id="base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        >
          <option value="10">Base 10 (log)</option>
          <option value="e">Natural Log (ln)</option>
          <option value="2">Base 2</option>
        </Select>
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

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Logarithm Result</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Logarithm Calculator"
      description="Calculate logarithms (natural log, base 10, or custom base)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
