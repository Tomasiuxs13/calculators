'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function MolalityCalculator() {
  const [moles, setMoles] = useState<string>('0.5');
  const [solventMass, setSolventMass] = useState<string>('1'); // in kg
  const [molality, setMolality] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const n = parseFloat(moles);
    const massKg = parseFloat(solventMass);

    if (!isNaN(n) && !isNaN(massKg) && massKg > 0 && n >= 0) {
      const m = n / massKg; // molality = moles / kg solvent
      setMolality(parseFloat(m.toFixed(6)));
    } else {
      setMolality(null);
    }
  }, [moles, solventMass]);

  const handleDownloadPDF = () => {
    if (molality === null) return;

    generateCalculatorPDF({
      title: 'Molality Calculator Results',
      inputs: [
        { label: 'Moles of Solute', value: moles },
        { label: 'Solvent Mass (kg)', value: solventMass },
      ],
      results: [
        { label: 'Molality', value: `${molality} mol/kg` },
      ],
    });
  };

  const chartData = molality !== null ? [
    { label: 'Moles', value: parseFloat(moles) || 0, unit: 'mol' },
    { label: 'Molality', value: molality, unit: 'mol/kg' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="moles">Moles of Solute</Label>
        <Input
          id="moles"
          type="number"
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
          min="0"
          step="0.0001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="solventMass">Solvent Mass (kg)</Label>
        <Input
          id="solventMass"
          type="number"
          value={solventMass}
          onChange={(e) => setSolventMass(e.target.value)}
          min="0"
          step="0.0001"
        />
      </div>

      {/* Select imported to follow project patterns; not required for this calculator */}
      <div className="hidden">
        <Label htmlFor="placeholder-select">Placeholder</Label>
        <Select id="placeholder-select" value=""> 
          <option value="">-</option>
        </Select>
      </div>
    </>
  );

  const results = molality !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Molality</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{molality.toLocaleString()}</div>
      <div className="text-lg text-gray-700">mol / kg solvent</div>
    </div>
  ) : null;

  const charts = showCharts && molality !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Molality Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const datum = props?.payload;
            const unit = datum?.unit || '';
            if (typeof value === 'number') {
              return `${value.toFixed(4)} ${unit}`;
            }
            return `${value} ${unit}`;
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Molality Calculator"
      description="Calculate molality (moles of solute per kilogram of solvent). Provide moles of solute and the mass of the solvent in kilograms."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
