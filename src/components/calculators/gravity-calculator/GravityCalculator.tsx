'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartDatum = {
  label: string;
  value: number;
  unit?: string;
};

const G = 6.67430e-11; // Gravitational constant in m^3 kg^-1 s^-2

export default function GravityCalculator() {
  const [mass1, setMass1] = useState<string>('1000');
  const [mass2, setMass2] = useState<string>('1000');
  const [distance, setDistance] = useState<string>('10');
  const [force, setForce] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m1 = parseFloat(mass1);
    const m2 = parseFloat(mass2);
    const r = parseFloat(distance);

    if (!isNaN(m1) && !isNaN(m2) && !isNaN(r) && r > 0 && m1 >= 0 && m2 >= 0) {
      const raw = (G * m1 * m2) / (r * r);
      // Store a reasonable precision while retaining numeric type
      const rounded = parseFloat(raw.toExponential(6));
      setForce(rounded);
    } else {
      setForce(null);
    }
  }, [mass1, mass2, distance]);

  const handleDownloadPDF = () => {
    if (force === null) return;

    generateCalculatorPDF({
      title: 'Gravity Calculator Results',
      inputs: [
        { label: 'Mass 1 (kg)', value: mass1 },
        { label: 'Mass 2 (kg)', value: mass2 },
        { label: 'Distance (m)', value: distance },
      ],
      results: [
        { label: 'Gravitational Force', value: `${force} N` },
      ],
    });
  };

  const chartData: ChartDatum[] = force !== null ? [
    { label: 'Mass 1', value: parseFloat(mass1) || 0, unit: 'kg' },
    { label: 'Mass 2', value: parseFloat(mass2) || 0, unit: 'kg' },
    { label: 'Force', value: force, unit: 'N' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="mass1">Mass 1 (kg)</Label>
        <Input
          id="mass1"
          type="number"
          value={mass1}
          onChange={(e) => setMass1(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mass2">Mass 2 (kg)</Label>
        <Input
          id="mass2"
          type="number"
          value={mass2}
          onChange={(e) => setMass2(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Distance (m)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0.000001"
          step="0.01"
        />
      </div>
    </>
  );

  const results = force !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {force.toExponential(6)}
      </div>
      <div className="text-lg text-gray-700">N</div>
    </div>
  ) : null;

  const charts = showCharts && force !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Gravity Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props?.payload?.unit ? ` ${props.payload.unit}` : '';
            // Format force using exponential for readability
            if (props?.payload?.label === 'Force') return [`${(value as number).toExponential(6)}`, `${name}${unit}`];
            return [(value as number).toLocaleString(), `${name}${unit}`];
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Gravity Calculator"
      description="Calculate gravitational force using F = G * (m1 * m2) / r². Enter masses (kg) and separation distance (m) to compute the force in newtons (N)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
