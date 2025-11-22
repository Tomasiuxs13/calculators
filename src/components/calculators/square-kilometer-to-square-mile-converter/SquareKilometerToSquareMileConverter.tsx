'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AreaUnit = 'km2' | 'mi2';

const areaConversions: Record<AreaUnit, number> = {
  // conversion to square meters (m^2)
  km2: 1_000_000, // 1 km^2 = 1,000,000 m^2
  mi2: 2_589_988.110336, // 1 mi^2 = 2,589,988.110336 m^2
};

export default function SquareKilometerToSquareMileConverter() {
  const [value, setValue] = useState<string>('10');
  const [fromUnit, setFromUnit] = useState<AreaUnit>('km2');
  const [toUnit, setToUnit] = useState<AreaUnit>('mi2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
      // convert to base unit (square meters) first, then to target
      const inSquareMeters = num * areaConversions[fromUnit];
      const converted = inSquareMeters / areaConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Square Kilometer ↔ Square Mile Conversion Results',
      inputs: [
        { label: 'Area', value: value },
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
            <option value="km2">Square Kilometers (km²)</option>
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
            <option value="km2">Square Kilometers (km²)</option>
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
      <div className="text-lg text-gray-700">{toUnit === 'km2' ? 'km²' : 'mi²'}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Area Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${Number(value).toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Square Kilometer ↔ Square Mile Converter"
      description="Convert between square kilometers (km²) and square miles (mi²). Enter an area value, choose the 'from' and 'to' units — results update automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
