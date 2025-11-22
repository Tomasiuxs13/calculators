'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AreaUnit = 'm2' | 'km2' | 'ft2' | 'yd2' | 'ac' | 'ha' | 'mi2';

const areaConversions: Record<AreaUnit, number> = {
  m2: 1,
  km2: 1000000,
  ft2: 0.092903,
  yd2: 0.836127,
  ac: 4046.86,
  ha: 10000,
  mi2: 2589988.11,
};

export default function AreaConverter() {
  const [value, setValue] = useState<string>('100');
  const [fromUnit, setFromUnit] = useState<AreaUnit>('m2');
  const [toUnit, setToUnit] = useState<AreaUnit>('ft2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      const m2 = numValue * areaConversions[fromUnit];
      const converted = m2 / areaConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Area Converter Results',
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
        <Label htmlFor="value">Area</Label>
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
            onChange={(e) => setFromUnit(e.target.value as AreaUnit)}
          >
            <option value="m2">Square Meters (m²)</option>
            <option value="km2">Square Kilometers (km²)</option>
            <option value="ft2">Square Feet (ft²)</option>
            <option value="yd2">Square Yards (yd²)</option>
            <option value="ac">Acres (ac)</option>
            <option value="ha">Hectares (ha)</option>
            <option value="mi2">Square Miles (mi²)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as AreaUnit)}
          >
            <option value="m2">Square Meters (m²)</option>
            <option value="km2">Square Kilometers (km²)</option>
            <option value="ft2">Square Feet (ft²)</option>
            <option value="yd2">Square Yards (yd²)</option>
            <option value="ac">Acres (ac)</option>
            <option value="ha">Hectares (ha)</option>
            <option value="mi2">Square Miles (mi²)</option>
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
      <h3 className="text-lg font-semibold mb-4 text-center">Area Comparison</h3>
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
      title="Area Converter"
      description="Convert between square meters, square feet, acres, hectares, and more."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

