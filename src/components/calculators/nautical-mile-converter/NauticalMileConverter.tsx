'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DistanceUnit = 'km' | 'mi' | 'm';

// conversion factors to meters
const unitToMeters: Record<DistanceUnit, number> = {
  km: 1000,
  mi: 1609.34,
  m: 1,
};

export default function NauticalMileConverter() {
  const [value, setValue] = useState<string>('10');
  const [toUnit, setToUnit] = useState<DistanceUnit>('km');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // 1 nautical mile = 1852 meters
  const NAUTICAL_MILE_IN_METERS = 1852;

  useEffect(() => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      // convert from nautical miles to meters (base unit)
      const meters = num * NAUTICAL_MILE_IN_METERS;
      // convert meters to target unit
      const converted = meters / unitToMeters[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Nautical Mile Converter Results',
      inputs: [
        { label: 'Distance (nmi)', value: value },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { unit: 'nmi', value: parseFloat(value) || 0, label: 'Nautical Miles' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Distance</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="toUnit">To</Label>
        <Select
          id="toUnit"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as DistanceUnit)}
        >
          <option value="km">Kilometers (km)</option>
          <option value="mi">Miles (mi)</option>
          <option value="m">Meters (m)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">{toUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Nautical Mile Conversion Comparison</h3>
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
      title="Nautical Mile Converter"
      description="Convert nautical miles to kilometers, miles, or meters."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
