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

export default function MoleCalculator() {
  const [mass, setMass] = useState<string>('18');
  const [molarMass, setMolarMass] = useState<string>('18');
  const [moles, setMoles] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const mm = parseFloat(molarMass);

    // Validate inputs: mass must be >= 0, molar mass must be > 0
    if (!isNaN(m) && !isNaN(mm) && m >= 0 && mm > 0) {
      const calc = m / mm; // moles = mass (g) / molar mass (g/mol)
      setMoles(parseFloat(calc.toFixed(6)));
    } else {
      setMoles(null);
    }
  }, [mass, molarMass]);

  const handleDownloadPDF = () => {
    if (moles === null) return;

    generateCalculatorPDF({
      title: 'Mole Calculator Results',
      inputs: [
        { label: 'Mass (g)', value: mass },
        { label: 'Molar Mass (g/mol)', value: molarMass },
      ],
      results: [
        { label: 'Moles (mol)', value: `${moles} mol` },
      ],
    });
  };

  const chartData: ChartPoint[] = moles !== null ? [
    { label: 'Mass (g)', value: parseFloat(mass) || 0, unit: 'g' },
    { label: 'Molar Mass (g/mol)', value: parseFloat(molarMass) || 0, unit: 'g/mol' },
    { label: 'Moles (mol)', value: moles, unit: 'mol' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="mass">Mass (g)</Label>
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
        <Label htmlFor="molarMass">Molar Mass (g/mol)</Label>
        <Input
          id="molarMass"
          type="number"
          value={molarMass}
          onChange={(e) => setMolarMass(e.target.value)}
          min="0.000001"
          step="any"
        />
      </div>
    </>
  );

  const results = moles !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Moles</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{moles.toLocaleString()}</div>
      <div className="text-lg text-gray-700">mol</div>
    </div>
  ) : null;

  const charts = showCharts && moles !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mole Calculation Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const point: ChartPoint | undefined = chartData.find(d => d.value === value && d.label === props.payload.label);
            const unit = point ? ` ${point.unit}` : '';
            // Format numbers to reasonable precision
            if (typeof value === 'number') return [`${Number(value).toLocaleString(undefined, { maximumFractionDigits: 6 })}${unit}`, props.payload.label];
            return [value, props.payload.label];
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-3 text-center">Note: Chart compares raw input values and computed moles. Units differ between bars.</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Mole Calculator"
      description="Calculate number of moles from mass and molar mass. Enter the mass in grams and the molar mass (g/mol) to obtain the amount in moles."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
