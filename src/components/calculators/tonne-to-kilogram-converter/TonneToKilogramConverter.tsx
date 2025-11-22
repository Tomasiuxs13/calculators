'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type WeightUnit = 't' | 'kg';

const toKilograms: Record<WeightUnit, number> = {
  t: 1000,
  kg: 1,
};

export default function TonneToKilogramConverter() {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<WeightUnit>('t');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // toUnit is derived from fromUnit: convert to the other unit
  const toUnit: WeightUnit = fromUnit === 't' ? 'kg' : 't';

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      // convert to base unit (kilograms) first, then to target unit
      const kilograms = numValue * toKilograms[fromUnit];
      const converted = kilograms / toKilograms[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Tonne ↔ Kilogram Conversion Results',
      inputs: [
        { label: 'Weight', value: value },
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
        <Label htmlFor="value">Weight</Label>
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
          onChange={(e) => setFromUnit(e.target.value as WeightUnit)}
        >
          <option value="t">Tonnes</option>
          <option value="kg">Kilograms</option>
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
      <div className="text-lg text-gray-700">{toUnit === 't' ? 'Tonnes' : 'Kilograms'}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Weight Comparison</h3>
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
      title="Tonne to Kilogram Converter"
      description="Convert tonnes to kilograms and kilograms to tonnes quickly and accurately."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
