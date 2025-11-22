'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TempUnit = 'C' | 'F' | 'gas';

// Reference gas mark to Celsius mapping (approximate typical values)
const gasToCelsiusMap: Record<number, number> = {
  1: 135,
  2: 149,
  3: 163,
  4: 177,
  5: 190,
  6: 204,
  7: 218,
  8: 232,
  9: 246,
};

function gasToCelsius(gas: number): number {
  if (Number.isNaN(gas)) return NaN;
  if (gas <= 1) return gasToCelsiusMap[1];
  if (gas >= 9) return gasToCelsiusMap[9];

  const lower = Math.floor(gas);
  const upper = Math.ceil(gas);
  const lowerC = gasToCelsiusMap[lower];
  const upperC = gasToCelsiusMap[upper];
  if (lower === upper) return lowerC;
  const t = gas - lower;
  return lowerC + t * (upperC - lowerC);
}

function celsiusToGas(c: number): number {
  if (Number.isNaN(c)) return NaN;
  const marks = Object.keys(gasToCelsiusMap).map(k => Number(k)).sort((a, b) => a - b);
  if (c <= gasToCelsiusMap[marks[0]]) return marks[0];
  if (c >= gasToCelsiusMap[marks[marks.length - 1]]) return marks[marks.length - 1];

  // find interval
  for (let i = 0; i < marks.length - 1; i++) {
    const lowMark = marks[i];
    const highMark = marks[i + 1];
    const lowC = gasToCelsiusMap[lowMark];
    const highC = gasToCelsiusMap[highMark];
    if (c >= lowC && c <= highC) {
      const t = (c - lowC) / (highC - lowC);
      return lowMark + t * (highMark - lowMark);
    }
  }
  return NaN;
}

export default function OvenTemperatureConverter() {
  const [temperature, setTemperature] = useState<string>('180');
  const [fromUnit, setFromUnit] = useState<TempUnit>('C');
  const [toUnit, setToUnit] = useState<TempUnit>('F');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const num = parseFloat(temperature);
    if (Number.isNaN(num)) {
      setResult(null);
      return;
    }

    // Convert input to Celsius (base unit)
    let celsius: number;
    if (fromUnit === 'C') {
      celsius = num;
    } else if (fromUnit === 'F') {
      celsius = (num - 32) * (5 / 9);
    } else {
      // from 'gas'
      celsius = gasToCelsius(num);
    }

    // Convert Celsius to target unit
    let converted: number;
    if (toUnit === 'C') {
      converted = celsius;
    } else if (toUnit === 'F') {
      converted = celsius * (9 / 5) + 32;
    } else {
      converted = celsiusToGas(celsius);
    }

    if (Number.isFinite(converted)) {
      // round sensibly: two decimals for temperatures and gas mark
      setResult(parseFloat(converted.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [temperature, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Oven Temperature Converter Results',
      inputs: [
        { label: 'Temperature', value: temperature },
        { label: 'From Unit', value: fromUnit },
        { label: 'To Unit', value: toUnit },
      ],
      results: [
        { label: 'Result', value: `${result} ${toUnit === 'gas' ? 'Gas Mark' : toUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { unit: fromUnit, value: parseFloat(temperature) || 0, label: 'Original' },
    { unit: toUnit, value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='temperature'>Temperature</Label>
        <Input
          id='temperature'
          type='number'
          value={temperature}
          onChange={e => setTemperature(e.target.value)}
          min='0'
          step='0.1'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='fromUnit'>From</Label>
          <Select
            id='fromUnit'
            value={fromUnit}
            onChange={e => setFromUnit(e.target.value as TempUnit)}
          >
            <option value='C'>Celsius</option>
            <option value='F'>Fahrenheit</option>
            <option value='gas'>Gas Mark</option>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='toUnit'>To</Label>
          <Select
            id='toUnit'
            value={toUnit}
            onChange={e => setToUnit(e.target.value as TempUnit)}
          >
            <option value='C'>Celsius</option>
            <option value='F'>Fahrenheit</option>
            <option value='gas'>Gas Mark</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {result.toLocaleString()}
      </div>
      <div className='text-lg text-gray-700'>{toUnit === 'gas' ? 'Gas Mark' : `${toUnit} degrees`}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Temperature Comparison</h3>
      <ResponsiveContainer width='100%' height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit === 'gas' ? 'Gas Mark' : (chartData.find(d => d.value === value)?.unit || '')}`} />
          <Bar dataKey='value' fill='#f97316' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Oven Temperature Converter'
      description='Convert oven temperatures between Celsius, Fahrenheit, and gas marks.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
