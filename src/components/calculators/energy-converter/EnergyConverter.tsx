'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type EnergyUnit = 'J' | 'kJ' | 'cal' | 'kcal' | 'kWh' | 'BTU' | 'eV';

const energyConversions: Record<EnergyUnit, number> = {
  J: 1,
  kJ: 1000,
  cal: 4.184,
  kcal: 4184,
  kWh: 3600000,
  BTU: 1055.06,
  eV: 1.602176634e-19,
};

export default function EnergyConverter() {
  const [value, setValue] = useState<string>('1000');
  const [fromUnit, setFromUnit] = useState<EnergyUnit>('J');
  const [toUnit, setToUnit] = useState<EnergyUnit>('kcal');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      const joules = numValue * energyConversions[fromUnit];
      const converted = joules / energyConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;
    generateCalculatorPDF({
      title: 'Energy Converter Results',
      inputs: [{ label: 'Value', value: value }, { label: 'From Unit', value: fromUnit }, { label: 'To Unit', value: toUnit }],
      results: [{ label: 'Result', value: `${result} ${toUnit}` }],
    });
  };

  const chartData = result !== null ? [
    { unit: fromUnit, value: parseFloat(value) || 0, label: 'Original' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Energy</Label>
        <Input id="value" type="number" value={value} onChange={(e) => setValue(e.target.value)} min="0" step="0.01" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value as EnergyUnit)}>
            <option value="J">Joules (J)</option>
            <option value="kJ">Kilojoules (kJ)</option>
            <option value="cal">Calories (cal)</option>
            <option value="kcal">Kilocalories (kcal)</option>
            <option value="kWh">Kilowatt-hours (kWh)</option>
            <option value="BTU">BTU</option>
            <option value="eV">Electronvolts (eV)</option>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value as EnergyUnit)}>
            <option value="J">Joules (J)</option>
            <option value="kJ">Kilojoules (kJ)</option>
            <option value="cal">Calories (cal)</option>
            <option value="kcal">Kilocalories (kcal)</option>
            <option value="kWh">Kilowatt-hours (kWh)</option>
            <option value="BTU">BTU</option>
            <option value="eV">Electronvolts (eV)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{toUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Energy Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Energy Converter"
      description="Convert between joules, calories, kilowatt-hours, BTU, and electronvolts."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

