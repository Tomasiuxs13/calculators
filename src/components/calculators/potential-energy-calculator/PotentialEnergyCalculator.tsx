'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PotentialEnergyCalculator() {
  const [mass, setMass] = useState<string>('10');
  const [height, setHeight] = useState<string>('5');
  const [gravity, setGravity] = useState<string>('9.8');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const h = parseFloat(height);
    const g = parseFloat(gravity);
    if (!isNaN(m) && !isNaN(h) && !isNaN(g) && m >= 0 && h >= 0 && g >= 0) {
      const potentialEnergy = m * g * h;
      setResult(parseFloat(potentialEnergy.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [mass, height, gravity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Potential Energy Calculator Results',
      inputs: [
        { label: 'Mass', value: mass },
        { label: 'Height', value: height },
        { label: 'Gravity', value: gravity },
      ],
      results: [
        { label: 'Result', value: `${result} J` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Potential Energy', value: result },
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
        <Label htmlFor="height">Height (m)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gravity">Gravity (m/s²)</Label>
        <Input
          id="gravity"
          type="number"
          value={gravity}
          onChange={(e) => setGravity(e.target.value)}
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
      <div className="text-lg text-gray-700">J</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Potential Energy</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} J`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Potential Energy Calculator"
      description="Calculate gravitational potential energy using PE = mgh."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
