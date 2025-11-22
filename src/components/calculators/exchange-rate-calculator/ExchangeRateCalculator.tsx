'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Currency = 'USD' | 'EUR' | 'GBP';

// Base rates expressed as "1 USD equals X of that currency"
const baseRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
};

export default function ExchangeRateCalculator() {
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('EUR');
  // exchangeRate is an optional override rate (From -> To)
  const [exchangeRate, setExchangeRate] = useState<string>('0.85');

  const [result, setResult] = useState<number | null>(null);
  const [effectiveRate, setEffectiveRate] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    const parsedRate = parseFloat(exchangeRate);

    if (isNaN(numAmount) || numAmount < 0) {
      setResult(null);
      setEffectiveRate(null);
      return;
    }

    const baseFrom = baseRates[fromCurrency];
    const baseTo = baseRates[toCurrency];

    // default conversion rate computed via USD as base unit
    // defaultRate = (1 USD in TO) / (1 USD in FROM)
    const defaultRate = baseTo / baseFrom;

    // If user provided a positive exchangeRate, use it as override
    const usedRate = !isNaN(parsedRate) && parsedRate > 0 ? parsedRate : defaultRate;

    const converted = numAmount * usedRate;

    setResult(parseFloat(converted.toFixed(6)));
    setEffectiveRate(parseFloat(usedRate.toFixed(6)));
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  const handleDownloadPDF = () => {
    if (result === null || effectiveRate === null) return;

    // Compute implied fee (difference between default and effective rate)
    const defaultRate = baseRates[toCurrency] / baseRates[fromCurrency];
    const feePercent = defaultRate === 0 ? 0 : ((defaultRate - effectiveRate) / defaultRate) * 100;

    generateCalculatorPDF({
      title: 'Exchange Rate Calculator Results',
      inputs: [
        { label: 'Amount', value: amount },
        { label: 'From Currency', value: fromCurrency },
        { label: 'To Currency', value: toCurrency },
        { label: 'Exchange Rate (override)', value: exchangeRate },
      ],
      results: [
        { label: 'Converted Amount', value: `${result} ${toCurrency}` },
        { label: 'Effective Rate', value: `${effectiveRate} ${toCurrency}/${fromCurrency}` },
        { label: 'Implied Fee (%)', value: `${feePercent.toFixed(4)}%` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: `${fromCurrency} (Original)`, value: parseFloat(amount) || 0, unit: fromCurrency },
    { label: `${toCurrency} (Converted)`, value: result, unit: toCurrency },
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
          <Label htmlFor="fromCurrency">From Currency</Label>
          <Select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value as Currency)}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toCurrency">To Currency</Label>
          <Select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value as Currency)}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
          </Select>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="exchangeRate">Exchange Rate (From → To)</Label>
        <Input
          id="exchangeRate"
          type="number"
          value={exchangeRate}
          onChange={(e) => setExchangeRate(e.target.value)}
          min="0"
          step="0.0001"
        />
        <p className="text-sm text-gray-500">Provide a custom rate to override the default market rate computed via USD. Leave blank or set to 0 to use the default rate.</p>
      </div>
    </>
  );

  const results = result !== null && effectiveRate !== null ? (() => {
    const defaultRate = baseRates[toCurrency] / baseRates[fromCurrency];
    const feePercent = defaultRate === 0 ? 0 : ((defaultRate - effectiveRate) / defaultRate) * 100;

    return (
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Converted Amount</div>
        <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
        <div className="text-lg text-gray-700 mb-2">{toCurrency}</div>

        <div className="mt-3 text-sm text-gray-600">Effective Rate</div>
        <div className="text-lg font-medium text-gray-800">{effectiveRate} {toCurrency}/{fromCurrency}</div>

        <div className="mt-3 text-sm text-gray-600">Implied Fee</div>
        <div className="text-sm text-gray-700">{feePercent.toFixed(4)}% {feePercent > 0 ? '(worse than default)' : feePercent < 0 ? '(better than default)' : '(matches default)'}</div>
      </div>
    );
  })() : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Currency Conversion Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props.payload?.unit || '';
            return [`${(value).toLocaleString()}`, unit];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Exchange Rate Calculator"
      description="Calculate exchange rates and conversion fees. Convert between USD, EUR, and GBP using default market rates or provide your own exchange rate to see the converted amount and implied fee."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
