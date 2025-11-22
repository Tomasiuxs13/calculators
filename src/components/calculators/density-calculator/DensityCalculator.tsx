'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartPoint = {
  label: string;
  value: number;
  unit: string;
};

export default function DensityCalculator() {
  const [mass, setMass] = useState<string>('1000');
  const [volume, setVolume] = useState<string>('1');
  const [density, setDensity] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);

    if (!isNaN(m) && !isNaN(v) && v > 0) {
      // Convert to base units first (mass in kg, volume in m^3) - inputs already in base units
      const massKg = m; // kg
      const volumeM3 = v; // m^3
      const rho = massKg / volumeM3; // kg/m^3
      setDensity(parseFloat(rho.toFixed(6)));
    } else {
      setDensity(null);
    }
  }, [mass, volume]);

  const handleDownloadPDF = () => {
    if (density === null) return;

    generateCalculatorPDF({
      title: 'Density Calculator Results',
      inputs: [
        { label: 'Mass (kg)', value: mass },
        { label: 'Volume (m³)', value: volume },
      ],
      results: [
        { label: 'Density (ρ)', value: `${density} kg/m³` },
      ],
    });
  };

  const chartData: ChartPoint[] = density !== null ? [
    { label: 'Mass', value: parseFloat(mass) || 0, unit: 'kg' },
    { label: 'Volume', value: parseFloat(volume) || 0, unit: 'm³' },
    { label: 'Density', value: density, unit: 'kg/m³' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mass">Mass (kg)</Label>
          <Input
            id="mass"
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            min="0"
            step="any"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="volume">Volume (m³)</Label>
          <Input
            id="volume"
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            min="0"
            step="any"
          />
        </div>
      </div>

      <div className="mt-4 bg-blue-50 border border-blue-100 p-3 rounded">
        <div className="text-sm text-gray-700">
          Formula: <code className="font-mono">ρ = m / V</code> (mass divided by volume)
        </div>
      </div>
    </>
  );

  const results = density !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Density</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {density.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">kg/m³</div>
    </div>
  ) : null;

  const charts = showCharts && density !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mass, Volume & Density Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            const found = chartData.find(d => d.value === value);
            return `${typeof value === 'number' ? value.toFixed(4) : value} ${found?.unit || ''}`;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-2 text-center">Note: Mass and volume may be on different scales than density.</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Density Calculator"
      description="Calculate density using ρ = m/V. Enter mass (kg) and volume (m³) to compute density in kg/m³."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
