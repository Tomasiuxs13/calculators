'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type EnergyUnit = 'J/mol' | 'kJ/mol';

const energyConversions: Record<EnergyUnit, number> = {
  'J/mol': 1,
  'kJ/mol': 0.001,
};

export default function EnthalpyCalculator() {
  const [heat, setHeat] = useState<string>('1000');
  const [moles, setMoles] = useState<string>('1');
  const [unit, setUnit] = useState<EnergyUnit>('kJ/mol');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const q = parseFloat(heat);
    const n = parseFloat(moles);

    // Validate inputs: heat can be negative (exothermic), moles must be > 0
    if (!isNaN(q) && !isNaN(n) && n > 0) {
      // Base unit: J/mol (convert heat to J if necessary — heat input is J per spec)
      const baseEnthalpyPerMol = q / n; // J/mol
      // Convert base to requested unit
      const converted = baseEnthalpyPerMol * energyConversions[unit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [heat, moles, unit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Enthalpy Change Results',
      inputs: [
        { label: 'Heat (J)', value: heat },
        { label: 'Moles', value: moles },
        { label: 'Result Unit', value: unit },
      ],
      results: [
        { label: `ΔH (${unit})`, value: `${result} ${unit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Total Heat (J)', value: parseFloat(heat) || 0, unit: 'J' },
    { label: `ΔH (${unit})`, value: result, unit },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="heat">Heat (J)</Label>
        <Input
          id="heat"
          type="number"
          value={heat}
          onChange={(e) => setHeat(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="moles">Moles</Label>
        <Input
          id="moles"
          type="number"
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Result Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as EnergyUnit)}
        >
          <option value="J/mol">Joules per mole (J/mol)</option>
          <option value="kJ/mol">Kilojoules per mole (kJ/mol)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Enthalpy Change</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{unit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Enthalpy Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const item = chartData.find((d) => d.value === value && d.label === props.payload?.label);
            const unitLabel = item?.unit || '';
            // format number with up to 4 decimals for tooltip
            return [`${parseFloat(value.toFixed(4))}`, unitLabel];
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Enthalpy Calculator"
      description="Calculate enthalpy change (ΔH) per mole from heat and amount of substance. Enter total heat in joules and the number of moles to get ΔH in J/mol or kJ/mol."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
