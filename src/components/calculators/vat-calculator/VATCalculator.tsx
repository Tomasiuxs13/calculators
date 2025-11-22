'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CalcState = {
  amount: string; // amount excluding VAT
  vatRate: string; // percentage
};

type VATResult = {
  vatAmount: number;
  total: number;
};

export default function VATCalculator() {
  const [amount, setAmount] = useState<string>('100');
  const [vatRate, setVatRate] = useState<string>('20');
  const [result, setResult] = useState<VATResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsedAmount = parseFloat(amount);
    const parsedRate = parseFloat(vatRate);

    if (!isNaN(parsedAmount) && !isNaN(parsedRate) && parsedAmount >= 0) {
      const vatAmount = parsedAmount * (parsedRate / 100);
      const total = parsedAmount + vatAmount;
      setResult({
        vatAmount: parseFloat(vatAmount.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [amount, vatRate]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'VAT Calculator Results',
      inputs: [
        { label: 'Amount (excluding VAT)', value: amount },
        { label: 'VAT Rate (%)', value: vatRate },
      ],
      results: [
        { label: 'VAT Amount', value: `${result.vatAmount} (same currency as input)` },
        { label: 'Total (including VAT)', value: `${result.total} (same currency as input)` },
      ],
    });
  };

  const chartData = result
    ? [
        { name: 'Original', value: parseFloat(amount) || 0, label: 'Excl. VAT' },
        { name: 'VAT', value: result.vatAmount, label: 'VAT' },
        { name: 'Total', value: result.total, label: 'Incl. VAT' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (excluding VAT)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="vatRate">VAT Rate (%)</Label>
        <Input
          id="vatRate"
          type="number"
          value={vatRate}
          onChange={(e) => setVatRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      {/* Imported to follow pattern - not used for this calculator type, but kept for consistency */}
      <div className="hidden">
        <Select>
          <option>Placeholder</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-xs text-gray-500">VAT Amount</div>
          <div className="text-3xl font-bold text-green-700 mt-1">{result.vatAmount.toLocaleString()}</div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-xs text-gray-500">Total (including VAT)</div>
          <div className="text-4xl font-bold text-blue-900 mt-1">{result.total.toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Amount Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="VAT Calculator"
      description="Calculate Value Added Tax (VAT) on purchases. Enter an amount excluding VAT and a VAT rate to see the VAT amount and the total including VAT."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
