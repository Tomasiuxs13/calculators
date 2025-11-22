'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function MomentumCalculator() {
  const [mass, setMass] = useState<string>('10');
  const [velocity, setVelocity] = useState<string>('5');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);

    // Only compute when both are valid numbers
    if (!isNaN(m) && !isNaN(v)) {
      // p = m * v
      const p = m * v;
      setResult(parseFloat(p.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [mass, velocity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Momentum Calculator Results',
      inputs: [
        { label: 'Mass (kg)', value: mass },
        { label: 'Velocity (m/s)', value: velocity },
      ],
      results: [
        { label: 'Momentum', value: `${result} kg·m/s` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Mass (kg)', value: parseFloat(mass) || 0, unit: 'kg' },
    { name: 'Velocity (m/s)', value: parseFloat(velocity) || 0, unit: 'm/s' },
    { name: 'Momentum (kg·m/s)', value: result, unit: 'kg·m/s' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="mass">Mass (kg)</Label>
        <Input
          id="mass"
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="velocity">Velocity (m/s)</Label>
        <Input
          id="velocity"
          type="number"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
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
      <div className="text-lg text-gray-700">kg·m/s</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Momentum Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Momentum Calculator"
      description="Calculate momentum using p = mv. Enter mass (kg) and velocity (m/s) to get linear momentum in kg·m/s."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
