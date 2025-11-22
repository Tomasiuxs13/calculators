'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AngleUnit = 'deg' | 'rad' | 'grad';

const angleConversions: Record<AngleUnit, number> = {
  deg: 1, // degrees (base)
  rad: 180 / Math.PI, // radians to degrees
  grad: 0.9, // gradians to degrees
};

export default function AngleConverter() {
  const [value, setValue] = useState<string>('90');
  const [fromUnit, setFromUnit] = useState<AngleUnit>('deg');
  const [toUnit, setToUnit] = useState<AngleUnit>('rad');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      // Convert to degrees first
      let degrees = 0;
      if (fromUnit === 'deg') degrees = numValue;
      else if (fromUnit === 'rad') degrees = numValue * angleConversions.rad;
      else if (fromUnit === 'grad') degrees = numValue / angleConversions.grad;

      // Convert from degrees to target unit
      let converted = 0;
      if (toUnit === 'deg') converted = degrees;
      else if (toUnit === 'rad') converted = degrees / angleConversions.rad;
      else if (toUnit === 'grad') converted = degrees * angleConversions.grad;

      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Angle Converter Results',
      inputs: [
        { label: 'Value', value: value },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit === 'deg' ? '°' : toUnit === 'rad' ? 'rad' : 'grad'}` },
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
        <Label htmlFor="value">Angle</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as AngleUnit)}
          >
            <option value="deg">Degrees (°)</option>
            <option value="rad">Radians (rad)</option>
            <option value="grad">Gradians (grad)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as AngleUnit)}
          >
            <option value="deg">Degrees (°)</option>
            <option value="rad">Radians (rad)</option>
            <option value="grad">Gradians (grad)</option>
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
      <div className="text-lg text-gray-700">
        {toUnit === 'deg' ? '°' : toUnit === 'rad' ? 'rad' : 'grad'}
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Angle Comparison</h3>
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
      title="Angle Converter"
      description="Convert between degrees, radians, and gradians."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}


