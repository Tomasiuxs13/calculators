'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FuelUnit = 'mpg' | 'l100km' | 'kmL';

export default function FuelEconomyConverter() {
  const [value, setValue] = useState<string>('30');
  const [fromUnit, setFromUnit] = useState<FuelUnit>('mpg');
  const [toUnit, setToUnit] = useState<FuelUnit>('l100km');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      let converted = 0;
      
      // Convert to L/100km first
      let l100km = 0;
      if (fromUnit === 'mpg') {
        l100km = 235.214 / numValue; // US MPG to L/100km
      } else if (fromUnit === 'l100km') {
        l100km = numValue;
      } else if (fromUnit === 'kmL') {
        l100km = 100 / numValue;
      }

      // Convert from L/100km to target unit
      if (toUnit === 'l100km') {
        converted = l100km;
      } else if (toUnit === 'mpg') {
        converted = 235.214 / l100km;
      } else if (toUnit === 'kmL') {
        converted = 100 / l100km;
      }

      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;
    generateCalculatorPDF({
      title: 'Fuel Economy Converter Results',
      inputs: [
        { label: 'Value', value: value },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [{ label: 'Result', value: `${result} ${toUnit}` }],
    });
  };

  const chartData = result !== null ? [
    { unit: fromUnit, value: parseFloat(value) || 0, label: 'Original' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Fuel Economy</Label>
        <Input id="value" type="number" value={value} onChange={(e) => setValue(e.target.value)} min="0.01" step="0.01" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value as FuelUnit)}>
            <option value="mpg">Miles per Gallon (MPG)</option>
            <option value="l100km">Liters per 100 km (L/100km)</option>
            <option value="kmL">Kilometers per Liter (km/L)</option>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value as FuelUnit)}>
            <option value="mpg">Miles per Gallon (MPG)</option>
            <option value="l100km">Liters per 100 km (L/100km)</option>
            <option value="kmL">Kilometers per Liter (km/L)</option>
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
      <h3 className="text-lg font-semibold mb-4 text-center">Fuel Economy Comparison</h3>
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
      title="Fuel Economy Converter"
      description="Convert between MPG, L/100km, and km/L."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}


