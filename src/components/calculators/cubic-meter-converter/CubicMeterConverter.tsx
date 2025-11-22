'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'm3' | 'L' | 'gal' | 'ft3';

const volumeConversions: Record<VolumeUnit, number> = {
  // value = value_in_unit * volumeConversions[unit] => cubic meters
  m3: 1,
  L: 0.001, // 1 liter = 0.001 m³
  gal: 0.00378541, // 1 US gallon = 0.00378541 m³
  ft3: 0.0283168, // 1 cubic foot = 0.0283168 m³
};

export default function CubicMeterConverter() {
  const [value, setValue] = useState<string>('1');
  const [fromUnit] = useState<VolumeUnit>('m3'); // fixed: converting from cubic meters
  const [toUnit, setToUnit] = useState<VolumeUnit>('L');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      // Convert to base unit (cubic meters) first, then to target unit
      const baseCubicMeters = numValue * volumeConversions[fromUnit];
      const converted = baseCubicMeters / volumeConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Cubic Meter Conversion Results',
      inputs: [
        { label: 'Volume (m³)', value: value },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit}` },
      ],
    });
  };

  const chartData =
    result !== null
      ? [
          { unit: fromUnit, value: parseFloat(value) || 0, label: 'Original' },
          { unit: toUnit, value: result, label: 'Converted' },
        ]
      : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Volume (m³)</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="toUnit">To</Label>
        <Select
          id="toUnit"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as VolumeUnit)}
        >
          <option value="L">Liters (L)</option>
          <option value="gal">Gallons (gal)</option>
          <option value="ft3">Cubic Feet (ft³)</option>
        </Select>
      </div>
    </>
  );

  const results =
    result !== null ? (
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Result</div>
        <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
        <div className="text-lg text-gray-700">{toUnit}</div>
      </div>
    ) : null;

  const charts =
    showCharts && result !== null ? (
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Volume Comparison</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => `${Number(value).toFixed(3)} ${chartData.find((d) => d.value === value)?.unit || ''}`}
            />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    ) : null;

  return (
    <CalculatorLayout
      title="Cubic Meter Converter"
      description="Convert cubic meters to liters, gallons, and cubic feet."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
