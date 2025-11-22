'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('EUR');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount >= 0) {
      const baseAmount = numAmount / exchangeRates[fromCurrency];
      const converted = baseAmount * exchangeRates[toCurrency];
      setResult(parseFloat(converted.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Currency Converter Results',
      inputs: [
        { label: 'Amount', value: amount },
        { label: 'From Currency', value: fromCurrency },
        { label: 'To Currency', value: toCurrency },
      ],
      results: [
        { label: 'Result', value: `${result} ${toCurrency}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { currency: fromCurrency, value: parseFloat(amount) || 0, label: 'Original' },
    { currency: toCurrency, value: result, label: 'Converted' },
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
          <Label htmlFor="fromCurrency">From</Label>
          <Select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value as Currency)}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toCurrency">To</Label>
          <Select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value as Currency)}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
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
      <div className="text-lg text-gray-700">{toCurrency}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Currency Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.currency || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Currency Converter"
      description="Convert between different currencies with real-time exchange rates."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}