'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ModeResult = {
  modes: number[];
  frequency: number;
  totalCount: number;
};

export default function ModeCalculator() {
  const [numbers, setNumbers] = useState<string>('1, 2, 2, 3, 4, 4, 4, 5');
  const [result, setResult] = useState<ModeResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse input into numbers array
    const parts = numbers
      .split(',')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    const values: number[] = [];
    for (const part of parts) {
      const parsed = parseFloat(part);
      if (!isNaN(parsed)) {
        values.push(parsed);
      }
    }

    if (values.length === 0) {
      setResult(null);
      return;
    }

    // Frequency map (use numeric keys)
    const freqMap = new Map<number, number>();
    for (const v of values) {
      const count = freqMap.get(v) || 0;
      freqMap.set(v, count + 1);
    }

    // Determine max frequency
    let maxFreq = 0;
    for (const [, count] of freqMap.entries()) {
      if (count > maxFreq) maxFreq = count;
    }

    // Gather modes (all values with max frequency)
    const modes: number[] = [];
    for (const [value, count] of freqMap.entries()) {
      if (count === maxFreq) modes.push(value);
    }

    // Sort modes numerically for consistent display
    modes.sort((a, b) => a - b);

    setResult({ modes, frequency: maxFreq, totalCount: values.length });
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (!result) return;

    const modesLabel = result.modes.length === 1 ? `${result.modes[0]}` : result.modes.join(', ');

    generateCalculatorPDF({
      title: 'Mode Calculator Results',
      inputs: [
        { label: 'Numbers (comma-separated)', value: numbers },
      ],
      results: [
        { label: 'Mode', value: modesLabel },
        { label: 'Frequency', value: `${result.frequency}` },
        { label: 'Total Count', value: `${result.totalCount}` },
      ],
    });
  };

  const chartData = result
    ? Array.from(new Set(
        numbers
          .split(',')
          .map((p) => p.trim())
          .filter((p) => p.length > 0)
      ))
        .map((s) => {
          const parsed = parseFloat(s);
          return isNaN(parsed) ? null : parsed;
        })
        .filter((v): v is number => v !== null)
        // To ensure unique sorted values for chart, create a sorted set
        .reduce<number[]>((acc, cur) => {
          if (!acc.includes(cur)) acc.push(cur);
          return acc;
        }, [])
        .sort((a, b) => a - b)
        .map((val) => ({ label: String(val), value: ((): number => {
          const parts = numbers
            .split(',')
            .map((p) => p.trim())
            .filter((p) => p.length > 0);
          let count = 0;
          for (const p of parts) {
            const parsed = parseFloat(p);
            if (!isNaN(parsed) && parsed === val) count++;
          }
          return count;
        })() }))
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="numbers">Numbers (comma-separated)</Label>
        <Input
          id="numbers"
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">Example: 1, 2, 2, 3, 4, 4, 4, 5</p>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Mode Result</div>
      <div className="text-4xl font-bold text-blue-900 my-3">
        {result.modes.length === 1 ? (
          <>
            <span>{result.modes[0].toLocaleString()}</span>
            <div className="text-lg text-gray-700 mt-1">(occurred {result.frequency} times)</div>
          </>
        ) : (
          <>
            <span className="block">{result.modes.map((m) => m.toLocaleString()).join(', ')}</span>
            <div className="text-lg text-gray-700 mt-1">(each occurred {result.frequency} times)</div>
          </>
        )}
      </div>
      <div className="text-sm text-gray-600">Total values: {result.totalCount}</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter a comma-separated list of numbers to see the mode.</div>
  );

  const charts = showCharts && result && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Frequency Distribution</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number) => `${value} occurrence${value === 1 ? '' : 's'}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Mode Calculator"
      description="Calculate the mode (most frequently occurring value) of a dataset. Enter numbers separated by commas to get the mode and a frequency distribution chart."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
