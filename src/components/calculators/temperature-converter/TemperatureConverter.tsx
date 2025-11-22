'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TempUnit = 'C' | 'F' | 'K';

export default function TemperatureConverter() {
  const [value, setValue] = useState<string>('20');
  const [fromUnit, setFromUnit] = useState<TempUnit>('C');
  const [toUnit, setToUnit] = useState<TempUnit>('F');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      let celsius = 0;
      
      // Convert to Celsius first
      if (fromUnit === 'C') celsius = numValue;
      else if (fromUnit === 'F') celsius = (numValue - 32) * 5/9;
      else if (fromUnit === 'K') celsius = numValue - 273.15;
      
      // Convert from Celsius to target unit
      let converted = 0;
      if (toUnit === 'C') converted = celsius;
      else if (toUnit === 'F') converted = (celsius * 9/5) + 32;
      else if (toUnit === 'K') converted = celsius + 273.15;
      
      setResult(parseFloat(converted.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Temperature Converter Results',
      inputs: [
        { label: 'Value', value: value },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result}°${toUnit}` },
      ],
    });
  };

  // Generate comparison chart data
  const chartData = [];
  const startTemp = fromUnit === 'C' ? -10 : fromUnit === 'F' ? 14 : 263;
  const endTemp = fromUnit === 'C' ? 40 : fromUnit === 'F' ? 104 : 313;
  
  for (let i = startTemp; i <= endTemp; i += 5) {
    let celsius = 0;
    if (fromUnit === 'C') celsius = i;
    else if (fromUnit === 'F') celsius = (i - 32) * 5/9;
    else if (fromUnit === 'K') celsius = i - 273.15;
    
    let converted = 0;
    if (toUnit === 'C') converted = celsius;
    else if (toUnit === 'F') converted = (celsius * 9/5) + 32;
    else if (toUnit === 'K') converted = celsius + 273.15;
    
    chartData.push({
      original: i,
      converted: parseFloat(converted.toFixed(1)),
    });
  }

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="value">Temperature</Label>
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
            onChange={(e) => setFromUnit(e.target.value as TempUnit)}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as TempUnit)}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result}°{toUnit}
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Temperature Conversion Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="original" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="converted" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Temperature Converter"
      description="Convert between Celsius, Fahrenheit, and Kelvin."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

