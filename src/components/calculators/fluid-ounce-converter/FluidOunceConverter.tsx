'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FluidUnit = 'floz' | 'mL' | 'L' | 'cup' | 'pt' | 'qt' | 'gal';

// Conversion factors to milliliters (mL) - base unit for conversion
const toMilliliter: Record<FluidUnit, number> = {
  // US fluid ounce
  floz: 29.5735,
  mL: 1,
  L: 1000,
  // US legal cup (commonly used) - 240 mL
  cup: 240,
  // US liquid pint
  pt: 473.176,
  // US liquid quart
  qt: 946.353,
  // US liquid gallon
  gal: 3785.41,
};

const unitLabels: Record<FluidUnit, string> = {
  floz: 'Fluid Ounces (US)',
  mL: 'Milliliters',
  L: 'Liters',
  cup: 'Cups (US)',
  pt: 'Pints (US)',
  qt: 'Quarts (US)',
  gal: 'Gallons (US)',
};

export default function FluidOunceConverter() {
  const [value, setValue] = useState<string>('10');
  const [fromUnit, setFromUnit] = useState<FluidUnit>('floz');
  const [toUnit, setToUnit] = useState<FluidUnit>('mL');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      // convert from source unit to base unit (mL), then to target unit
      const inMilliliters = numValue * toMilliliter[fromUnit];
      const converted = inMilliliters / toMilliliter[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Fluid Ounce Conversion Results',
      inputs: [
        { label: 'Volume', value: value },
        { label: 'From Unit', value: `${unitLabels[fromUnit]} (${fromUnit})` },
        { label: 'To Unit', value: `${unitLabels[toUnit]} (${toUnit})` },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { unit: fromUnit, value: parseFloat(value) || 0, label: 'Original' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Volume</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as FluidUnit)}
          >
            <option value="floz">Fluid Ounces (US)</option>
            <option value="mL">Milliliters</option>
            <option value="L">Liters</option>
            <option value="cup">Cups (US)</option>
            <option value="pt">Pints (US)</option>
            <option value="qt">Quarts (US)</option>
            <option value="gal">Gallons (US)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as FluidUnit)}
          >
            <option value="mL">Milliliters</option>
            <option value="L">Liters</option>
            <option value="floz">Fluid Ounces (US)</option>
            <option value="cup">Cups (US)</option>
            <option value="pt">Pints (US)</option>
            <option value="qt">Quarts (US)</option>
            <option value="gal">Gallons (US)</option>
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
      <div className="text-lg text-gray-700">{unitLabels[toUnit]}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Volume Comparison</h3>
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
      title="Fluid Ounce Converter"
      description="Convert fluid ounces (US) to milliliters and other common volume units."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
