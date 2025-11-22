'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DividendCalculator() {
  const [sharePrice, setSharePrice] = useState<string>('100');
  const [dividendPerShare, setDividendPerShare] = useState<string>('3');
  const [shares, setShares] = useState<string>('100');

  const [dividendYield, setDividendYield] = useState<number | null>(null);
  const [annualIncome, setAnnualIncome] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const sp = parseFloat(sharePrice);
    const dps = parseFloat(dividendPerShare);
    const sh = parseFloat(shares);

    // Validate inputs: share price must be > 0, others >= 0
    if (!isNaN(sp) && sp > 0 && !isNaN(dps) && dps >= 0 && !isNaN(sh) && sh >= 0) {
      const income = dps * sh; // annual dividend income
      const yieldPct = (dps / sp) * 100; // dividend yield in percent

      setAnnualIncome(parseFloat(income.toFixed(2)));
      setDividendYield(parseFloat(yieldPct.toFixed(2)));
    } else {
      setAnnualIncome(null);
      setDividendYield(null);
    }
  }, [sharePrice, dividendPerShare, shares]);

  const handleDownloadPDF = () => {
    if (dividendYield === null || annualIncome === null) return;

    generateCalculatorPDF({
      title: 'Dividend Calculator Results',
      inputs: [
        { label: 'Share Price', value: sharePrice },
        { label: 'Annual Dividend per Share', value: dividendPerShare },
        { label: 'Number of Shares', value: shares },
      ],
      results: [
        { label: 'Dividend Yield', value: `${dividendYield} %` },
        { label: 'Annual Dividend Income', value: `$${annualIncome}` },
      ],
    });
  };

  const chartData = (dividendYield !== null && annualIncome !== null) ? [
    { label: 'Yield', value: dividendYield, unit: '%' },
    { label: 'Income', value: annualIncome, unit: '$' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="sharePrice">Share Price</Label>
        <Input
          id="sharePrice"
          type="number"
          value={sharePrice}
          onChange={(e) => setSharePrice(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dividendPerShare">Annual Dividend per Share</Label>
        <Input
          id="dividendPerShare"
          type="number"
          value={dividendPerShare}
          onChange={(e) => setDividendPerShare(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="shares">Number of Shares</Label>
        <Input
          id="shares"
          type="number"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
          min="0"
          step="1"
        />
      </div>
    </>
  );

  const results = (dividendYield !== null && annualIncome !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Dividend Yield</div>
      <div className="text-4xl font-bold text-blue-900 my-1">{dividendYield.toLocaleString()}%</div>
      <div className="text-sm text-gray-600 mb-4">Annual Dividend Income</div>
      <div className="text-3xl font-semibold text-green-700">${annualIncome.toLocaleString()}</div>
    </div>
  ) : null;

  const charts = showCharts && dividendYield !== null && annualIncome !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Dividend Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const item = chartData.find(d => d.value === value);
            if (!item) return value;
            if (item.unit === '%') return [`${value.toFixed(2)}%`, 'Yield'];
            return [`$${value.toFixed(2)}`, 'Income'];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Dividend Calculator"
      description="Calculate dividend yield and annual dividend income."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
