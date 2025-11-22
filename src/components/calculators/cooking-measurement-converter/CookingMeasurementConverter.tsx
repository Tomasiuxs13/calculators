'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type MeasurementUnit = 'cup' | 'tbsp' | 'tsp';

// Conversion factors to milliliters (ml) as the base unit
const volumeConversions: Record<MeasurementUnit, number> = {
  cup: 240,   // 1 US cup = 240 ml (commonly used approximation)
  tbsp: 15,   // 1 tablespoon = 15 ml
  tsp: 5,     // 1 teaspoon = 5 ml
};

export default function CookingMeasurementConverter() {
  const [amount, setAmount] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<MeasurementUnit>('cup');
  const [toUnit, setToUnit] = useState<MeasurementUnit>('tbsp');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const num = parseFloat(amount);
    if (!isNaN(num) && num >= 0) {
      // Convert to base unit (ml) first, then to target unit
      const inMl = num * volumeConversions[fromUnit];
      const converted = inMl / volumeConversions[toUnit];
      setResult(parseFloat(converted.toFixed(4)));
    } else {
      setResult(null);
    }
  }, [amount, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Cooking Measurement Converter Results',
      inputs: [
        { label: 'Amount', value: amount },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { unit: fromUnit, value: parseFloat(amount) || 0, label: 'Original' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
            onChange={(e) => setFromUnit(e.target.value as MeasurementUnit)}
          >
            <option value="cup">Cup</option>
            <option value="tbsp">Tablespoon</option>
            <option value="tsp">Teaspoon</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as MeasurementUnit)}
          >
            <option value="cup">Cup</option>
            <option value="tbsp">Tablespoon</option>
            <option value="tsp">Teaspoon</option>
          </Select>
        </div>
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
      <h3 className="text-lg font-semibold mb-4 text-center">Measurement Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cooking Measurement Converter"
      description="Convert between common cooking measurements: cups, tablespoons, and teaspoons."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
