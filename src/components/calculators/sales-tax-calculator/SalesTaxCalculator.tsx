'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function SalesTaxCalculator() {
  const [amount, setAmount] = useState<string>('100');
  const [taxRate, setTaxRate] = useState<string>('8.5');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    const numTaxRate = parseFloat(taxRate);
    if (!isNaN(numAmount) && !isNaN(numTaxRate) && numAmount >= 0 && numTaxRate >= 0) {
      const taxAmount = (numAmount * numTaxRate) / 100;
      setResult(parseFloat(taxAmount.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [amount, taxRate]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Sales Tax Calculator Results',
      inputs: [
        { label: 'Purchase Amount', value: amount },
        { label: 'Sales Tax Rate (%)', value: taxRate },
      ],
      results: [
        { label: 'Sales Tax Amount', value: `${result} USD` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="amount">Purchase Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="taxRate">Sales Tax Rate (%)</Label>
        <Input
          id="taxRate"
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Sales Tax Amount</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">USD</div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Sales Tax Amount', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Sales Tax Breakdown</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} USD`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Sales Tax Calculator"
      description="Calculate sales tax on purchases based on tax rate and amount."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
