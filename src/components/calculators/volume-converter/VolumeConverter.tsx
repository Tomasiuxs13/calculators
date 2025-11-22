'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'ml' | 'l' | 'm3' | 'floz' | 'cup' | 'pt' | 'qt' | 'gal' | 'ft3' | 'yd3';

const volumeConversions: Record<VolumeUnit, number> = {
  ml: 0.001,
  l: 1,
  m3: 1000,
  floz: 0.0295735,
  cup: 0.236588,
  pt: 0.473176,
  qt: 0.946353,
  gal: 3.78541,
  ft3: 28.3168,
  yd3: 764.555,
};

export default function VolumeConverter() {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<VolumeUnit>('l');
  const [toUnit, setToUnit] = useState<VolumeUnit>('gal');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      const liters = numValue * volumeConversions[fromUnit];
      const converted = liters / volumeConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Volume Converter Results',
      inputs: [
        { label: 'Value', value: value },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
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
            onChange={(e) => setFromUnit(e.target.value as VolumeUnit)}
          >
            <option value="ml">Milliliters (ml)</option>
            <option value="l">Liters (l)</option>
            <option value="m3">Cubic Meters (m³)</option>
            <option value="floz">Fluid Ounces (fl oz)</option>
            <option value="cup">Cups (cup)</option>
            <option value="pt">Pints (pt)</option>
            <option value="qt">Quarts (qt)</option>
            <option value="gal">Gallons (gal)</option>
            <option value="ft3">Cubic Feet (ft³)</option>
            <option value="yd3">Cubic Yards (yd³)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as VolumeUnit)}
          >
            <option value="ml">Milliliters (ml)</option>
            <option value="l">Liters (l)</option>
            <option value="m3">Cubic Meters (m³)</option>
            <option value="floz">Fluid Ounces (fl oz)</option>
            <option value="cup">Cups (cup)</option>
            <option value="pt">Pints (pt)</option>
            <option value="qt">Quarts (qt)</option>
            <option value="gal">Gallons (gal)</option>
            <option value="ft3">Cubic Feet (ft³)</option>
            <option value="yd3">Cubic Yards (yd³)</option>
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
      title="Volume Converter"
      description="Convert between liters, gallons, cubic meters, fluid ounces, cups, and more."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

