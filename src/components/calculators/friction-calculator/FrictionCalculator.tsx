'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FrictionInputs = {
  normalForce: string;
  coefficient: string;
};

export default function FrictionCalculator() {
  const [normalForce, setNormalForce] = useState<string>('100');
  const [coefficient, setCoefficient] = useState<string>('0.3');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const N = parseFloat(normalForce);
    const mu = parseFloat(coefficient);

    if (!isNaN(N) && !isNaN(mu) && N >= 0 && mu >= 0) {
      // Frictional force (kinetic or maximum static): F = μ * N
      const friction = mu * N;
      setResult(parseFloat(friction.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [normalForce, coefficient]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Friction Calculator Results',
      inputs: [
        { label: 'Normal Force (N)', value: normalForce },
        { label: 'Coefficient of Friction', value: coefficient },
      ],
      results: [
        { label: 'Frictional Force (N)', value: `${result} N` },
      ],
    });
  };

  const chartData = result !== null
    ? [
        { label: 'Normal Force', value: parseFloat(normalForce) || 0, unit: 'N' },
        { label: 'Frictional Force', value: result, unit: 'N' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="normalForce">Normal Force (N)</Label>
        <Input
          id="normalForce"
          type="number"
          value={normalForce}
          onChange={(e) => setNormalForce(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="coefficient">Coefficient of Friction</Label>
        <Input
          id="coefficient"
          type="number"
          value={coefficient}
          onChange={(e) => setCoefficient(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      {/* Keep Select imported to follow example pattern even if not used here */}
      <div className="sr-only">
        <Label htmlFor="placeholderSelect">Placeholder</Label>
        <Select id="placeholderSelect" value={''} onChange={() => {}}>
          <option value="">None</option>
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
      <div className="text-lg text-gray-700">Newtons (N)</div>
      <div className="mt-2 text-sm text-gray-500">Formula: F = μ × N</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Force Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} N`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Friction Calculator"
      description="Calculate frictional force using the normal force and coefficient of friction. Useful for basic mechanics and engineering estimates."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
