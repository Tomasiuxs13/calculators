'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CentripetalForceCalculator() {
  const [mass, setMass] = useState<string>('10');
  const [velocity, setVelocity] = useState<string>('5');
  const [radius, setRadius] = useState<string>('2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);
    const r = parseFloat(radius);

    if (!isNaN(m) && !isNaN(v) && !isNaN(r) && m >= 0 && r > 0) {
      const force = (m * v * v) / r; // F = m * v^2 / r
      setResult(parseFloat(force.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [mass, velocity, radius]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Centripetal Force Results',
      inputs: [
        { label: 'Mass (kg)', value: mass },
        { label: 'Velocity (m/s)', value: velocity },
        { label: 'Radius (m)', value: radius },
      ],
      results: [
        { label: 'Centripetal Force (N)', value: `${result} N` },
      ],
    });
  };

  const computedMV2 = (() => {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);
    if (!isNaN(m) && !isNaN(v)) return parseFloat((m * v * v).toFixed(6));
    return 0;
  })();

  const chartData = result !== null ? [
    { label: 'Centripetal Force', value: result, unit: 'N' },
    { label: 'm × v² (numerator)', value: computedMV2, unit: 'kg·m²/s²' },
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
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="radius">Radius (m)</Label>
        <Input
          id="radius"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          min="0.0001"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Newtons (N)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Centripetal Force Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              const unit = props?.payload?.unit ?? '';
              return `${value.toFixed(2)} ${unit}`;
            }}
          />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-3 text-center">Comparison of the computed centripetal force and the numerator term m·v² used in the calculation.</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Centripetal Force Calculator"
      description="Calculate centripetal force using the formula F = m × v² / r. Enter mass (kg), velocity (m/s), and radius (m) to compute the force in Newtons (N)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
