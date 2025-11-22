'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Base = '2' | '8' | '10' | '16';

const baseLabels: Record<Base, string> = {
  '2': 'Binary (2)',
  '8': 'Octal (8)',
  '10': 'Decimal (10)',
  '16': 'Hexadecimal (16)',
};

function isValidForBase(value: string, base: Base) {
  if (value.trim() === '') return false;
  const v = value.trim();
  const signOptional = v.startsWith('-') || v.startsWith('+');
  const core = signOptional ? v.slice(1) : v;
  if (core === '') return false;

  switch (base) {
    case '2':
      return /^[0-1]+$/i.test(core);
    case '8':
      return /^[0-7]+$/i.test(core);
    case '10':
      return /^[0-9]+$/i.test(core);
    case '16':
      return /^[0-9a-f]+$/i.test(core.toLowerCase());
    default:
      return false;
  }
}

export default function NumberBaseConverter() {
  const [numberInput, setNumberInput] = useState<string>('255');
  const [fromBase, setFromBase] = useState<Base>('10');
  const [toBase, setToBase] = useState<Base>('16');
  const [result, setResult] = useState<string | null>(null);
  const [decimalValue, setDecimalValue] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const val = numberInput.trim();
    if (!isValidForBase(val, fromBase)) {
      setResult(null);
      setDecimalValue(null);
      return;
    }

    // Parse to decimal (base 10) as the canonical base, then convert to target base
    try {
      const sign = val.startsWith('-') ? -1 : 1;
      const core = val.startsWith('-') || val.startsWith('+') ? val.slice(1) : val;
      const parsed = parseInt(core, parseInt(fromBase, 10));
      if (isNaN(parsed)) {
        setResult(null);
        setDecimalValue(null);
        return;
      }
      const decimal = parsed * sign;
      setDecimalValue(decimal);

      // Convert decimal to target base string
      const targetBase = parseInt(toBase, 10);
      const converted = (decimal < 0 ? '-' : '') + Math.abs(decimal).toString(targetBase);
      setResult(converted.toUpperCase());
    } catch (e) {
      setResult(null);
      setDecimalValue(null);
    }
  }, [numberInput, fromBase, toBase]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Number Base Converter Results',
      inputs: [
        { label: 'Number', value: numberInput },
        { label: 'From Base', value: baseLabels[fromBase] || fromBase },
        { label: 'To Base', value: baseLabels[toBase] || toBase },
      ],
      results: [
        { label: 'Converted Result', value: `${result} (base ${toBase})` },
        { label: 'Decimal Value', value: decimalValue !== null ? String(decimalValue) : 'N/A' },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Input Digits', value: (numberInput.startsWith('-') || numberInput.startsWith('+')) ? numberInput.length - 1 : numberInput.length, detail: numberInput },
    { label: 'Output Digits', value: (result.startsWith('-')) ? result.length - 1 : result.length, detail: result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="text"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          placeholder="Enter number e.g. 255 or FF"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fromBase">From</Label>
          <Select
            id="fromBase"
            value={fromBase}
            onChange={(e) => setFromBase(e.target.value as Base)}
          >
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hexadecimal (16)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toBase">To</Label>
          <Select
            id="toBase"
            value={toBase}
            onChange={(e) => setToBase(e.target.value as Base)}
          >
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hexadecimal (16)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result}
      </div>
      <div className="text-lg text-gray-700">Base {toBase}</div>
      {decimalValue !== null && (
        <div className="text-sm text-gray-600 mt-2">Decimal: <span className="font-medium text-gray-800">{decimalValue.toLocaleString()}</span></div>
      )}
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">Invalid input for base {fromBase}</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Digit Length Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number) => `${value} digits`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Number Base Converter"
      description="Convert numbers between binary, octal, decimal, and hexadecimal."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
