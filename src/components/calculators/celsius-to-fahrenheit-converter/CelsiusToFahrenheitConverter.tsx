'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TemperatureUnit = 'C' | 'F';

export default function CelsiusToFahrenheitConverter() {
  const [value, setValue] = useState<string>('25');
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>('C');
  const [toUnit, setToUnit] = useState<TemperatureUnit>('F');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Convert to base unit (Celsius) first, then to target unit
  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult(null);
      return;
    }

    // Convert input to base (Celsius)
    let baseCelsius: number;
    if (fromUnit === 'C') {
      baseCelsius = num;
    } else {
      // F -> C
      baseCelsius = (num - 32) * (5 / 9);
    }

    // Convert base (Celsius) to target
    let converted: number;
    if (toUnit === 'C') {
      converted = baseCelsius;
    } else {
      // C -> F
      converted = baseCelsius * (9 / 5) + 32;
    }

    setResult(parseFloat(converted.toFixed(2)));
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Celsius ↔ Fahrenheit Conversion Results',
      inputs: [
        { label: 'Temperature', value: value },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: fromUnit === 'C' ? `${value}°C` : `${value}°F`, value: parseFloat(value) || 0, unit: fromUnit },
    { label: toUnit === 'C' ? `${result}°C` : `${result}°F`, value: result, unit: toUnit },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Temperature</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as TemperatureUnit)}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as TemperatureUnit)}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div className="text-lg text-gray-700">{toUnit === 'C' ? '°C' : '°F'}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Temperature Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Celsius ↔ Fahrenheit Converter"
      description="Convert temperatures between Celsius and Fahrenheit instantly. Enter a temperature and select the units to convert from and to."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
