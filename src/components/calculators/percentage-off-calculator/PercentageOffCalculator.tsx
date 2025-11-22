'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PercentageOffCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>('100');
  const [discountPercent, setDiscountPercent] = useState<string>('20');
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [savings, setSavings] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const price = parseFloat(originalPrice);
    const percent = parseFloat(discountPercent);

    if (!isNaN(price) && !isNaN(percent) && price >= 0 && percent >= 0) {
      const discount = price * (percent / 100);
      const finalVal = price - discount;
      setSavings(parseFloat(discount.toFixed(2)));
      setFinalPrice(parseFloat(finalVal.toFixed(2)));
    } else {
      setSavings(null);
      setFinalPrice(null);
    }
  }, [originalPrice, discountPercent]);

  const handleDownloadPDF = () => {
    if (finalPrice === null || savings === null) return;

    generateCalculatorPDF({
      title: 'Percentage Off Calculator Results',
      inputs: [
        { label: 'Original Price', value: originalPrice },
        { label: 'Discount (%)', value: discountPercent },
      ],
      results: [
        { label: 'Final Price', value: `$${finalPrice.toFixed(2)}` },
        { label: 'Savings', value: `$${savings.toFixed(2)}` },
      ],
    });
  };

  const chartData = finalPrice !== null && savings !== null ? [
    { label: 'Original', value: parseFloat(originalPrice) || 0, color: '#3b82f6' },
    { label: 'Final', value: finalPrice, color: '#10b981' },
    { label: 'Savings', value: savings, color: '#ef4444' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="originalPrice">Original Price</Label>
        <Input
          id="originalPrice"
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="discountPercent">Discount (%)</Label>
        <Input
          id="discountPercent"
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          min="0"
          max="100"
          step="0.01"
        />
      </div>
    </>
  );

  const results = finalPrice !== null && savings !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Final Price</div>
      <div className="text-5xl font-bold text-blue-900 my-3">${finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      <div className="text-lg text-gray-700 mb-2">You saved ${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      <div className="text-sm text-gray-500">Discount Applied: {parseFloat(discountPercent || '0').toFixed(2)}%</div>
    </div>
  ) : null;

  const charts = showCharts && finalPrice !== null && savings !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Price Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Percentage Off Calculator"
      description="Calculate the final price after applying a percentage discount to the original price. Great for shopping and budgeting."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
