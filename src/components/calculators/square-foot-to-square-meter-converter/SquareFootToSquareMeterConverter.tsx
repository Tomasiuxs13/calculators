'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AreaUnit = 'ft2' | 'm2';

const areaConversions: Record<AreaUnit, number> = {
  // conversion to square meters (base unit)
  ft2: 0.09290304,
  m2: 1,
};

export default function SquareFootToSquareMeterConverter() {
  const [value, setValue] = useState<string>('100');
  const [fromUnit, setFromUnit] = useState<AreaUnit>('ft2');
  const [toUnit, setToUnit] = useState<AreaUnit>('m2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Derive toUnit automatically: if input is ft2, convert to m2, and vice versa
    const derivedToUnit: AreaUnit = fromUnit === 'ft2' ? 'm2' : 'ft2';
    setToUnit(derivedToUnit);

    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      // Convert to base (square meters) first, then to target unit
      const inSquareMeters = numValue * areaConversions[fromUnit];
      const converted = inSquareMeters / areaConversions[derivedToUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Square Feet ↔ Square Meters Conversion Results',
      inputs: [
        { label: 'Area', value: value },
        { label: 'From Unit', value: fromUnit },
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

      <div className="space-y-2">
        <Label htmlFor="fromUnit">From</Label>
        <Select
          id="fromUnit"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as AreaUnit)}
        >
          <option value="ft2">Square Feet (ft²)</option>
          <option value="m2">Square Meters (m²)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{toUnit === 'm2' ? 'Square Meters (m²)' : 'Square Feet (ft²)'}</div>
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
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Square Feet ↔ Square Meters Converter"
      description="Convert between square feet (ft²) and square meters (m²). Enter an area and choose the source unit. The converter will automatically calculate the equivalent area in the other unit."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
