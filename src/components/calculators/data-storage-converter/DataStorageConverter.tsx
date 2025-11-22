'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DataUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB';

const dataConversions: Record<DataUnit, number> = {
  B: 1,
  KB: 1024,
  MB: 1048576,
  GB: 1073741824,
  TB: 1099511627776,
  PB: 1125899906842624,
};

export default function DataStorageConverter() {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<DataUnit>('GB');
  const [toUnit, setToUnit] = useState<DataUnit>('MB');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      const bytes = numValue * dataConversions[fromUnit];
      const converted = bytes / dataConversions[toUnit];
      setResult(parseFloat(converted.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, fromUnit, toUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;
    generateCalculatorPDF({
      title: 'Data Storage Converter Results',
      inputs: [{ label: 'Value', value: value }, { label: 'From Unit', value: fromUnit }, { label: 'To Unit', value: toUnit }],
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
        <Label htmlFor="value">Data Size</Label>
        <Input id="value" type="number" value={value} onChange={(e) => setValue(e.target.value)} min="0" step="0.01" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromUnit">From</Label>
          <Select id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value as DataUnit)}>
            <option value="B">Bytes (B)</option>
            <option value="KB">Kilobytes (KB)</option>
            <option value="MB">Megabytes (MB)</option>
            <option value="GB">Gigabytes (GB)</option>
            <option value="TB">Terabytes (TB)</option>
            <option value="PB">Petabytes (PB)</option>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="toUnit">To</Label>
          <Select id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value as DataUnit)}>
            <option value="B">Bytes (B)</option>
            <option value="KB">Kilobytes (KB)</option>
            <option value="MB">Megabytes (MB)</option>
            <option value="GB">Gigabytes (GB)</option>
            <option value="TB">Terabytes (TB)</option>
            <option value="PB">Petabytes (PB)</option>
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
      <div className="text-lg text-gray-700">{toUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Data Size Comparison</h3>
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
      title="Data Storage Converter"
      description="Convert between bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

