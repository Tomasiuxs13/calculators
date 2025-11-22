'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Results = {
  totalInvestment: number;
  capitalGain: number;
  dividends: number;
  totalReturnAbsolute: number;
  totalReturnPercent: number;
};

export default function StockReturnCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>('100');
  const [currentPrice, setCurrentPrice] = useState<string>('120');
  const [shares, setShares] = useState<string>('100');
  const [dividends, setDividends] = useState<string>('500');

  const [results, setResults] = useState<Results | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p = parseFloat(purchasePrice);
    const c = parseFloat(currentPrice);
    const s = parseFloat(shares);
    const d = parseFloat(dividends);

    if ([p, c, s, d].some((v) => isNaN(v)) || s < 0 || p < 0 || c < 0 || d < 0) {
      setResults(null);
      return;
    }

    const totalInvestment = parseFloat((p * s).toFixed(2));
    const capitalGain = parseFloat(((c - p) * s).toFixed(2));
    const totalReturnAbsolute = parseFloat((capitalGain + d).toFixed(2));
    const totalReturnPercent = totalInvestment === 0 ? 0 : parseFloat(((totalReturnAbsolute / totalInvestment) * 100).toFixed(2));

    setResults({
      totalInvestment,
      capitalGain,
      dividends: parseFloat(d.toFixed(2)),
      totalReturnAbsolute,
      totalReturnPercent,
    });
  }, [purchasePrice, currentPrice, shares, dividends]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'Stock Return Calculator Results',
      inputs: [
        { label: 'Purchase Price', value: `$${parseFloat(purchasePrice || '0').toLocaleString()}` },
        { label: 'Current Price', value: `$${parseFloat(currentPrice || '0').toLocaleString()}` },
        { label: 'Number of Shares', value: `${parseFloat(shares || '0').toLocaleString()}` },
        { label: 'Total Dividends Received', value: `$${parseFloat(dividends || '0').toLocaleString()}` },
      ],
      results: [
        { label: 'Total Investment', value: `$${results.totalInvestment.toLocaleString()}` },
        { label: 'Capital Gain (Absolute)', value: `$${results.capitalGain.toLocaleString()}` },
        { label: 'Total Dividends', value: `$${results.dividends.toLocaleString()}` },
        { label: 'Total Return (Absolute)', value: `$${results.totalReturnAbsolute.toLocaleString()}` },
        { label: 'Total Return (%)', value: `${results.totalReturnPercent}%` },
      ],
    });
  };

  const chartData = results
    ? [
        { name: 'Initial Value', value: results.totalInvestment, color: '#60a5fa' },
        { name: 'Current Value', value: parseFloat((parseFloat(currentPrice) * parseFloat(shares)).toFixed(2)), color: '#10b981' },
        { name: 'Dividends', value: results.dividends, color: '#f59e0b' },
        { name: 'Total Return', value: results.totalReturnAbsolute, color: '#3b82f6' },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="purchasePrice">Purchase Price</Label>
          <Input
            id="purchasePrice"
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentPrice">Current Price</Label>
          <Input
            id="currentPrice"
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
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

        <div className="space-y-2">
          <Label htmlFor="dividends">Total Dividends Received</Label>
          <Input
            id="dividends"
            type="number"
            value={dividends}
            onChange={(e) => setDividends(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const resultsDisplay = results ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-2xl font-semibold text-gray-800">Total Investment</div>
      <div className="text-3xl font-bold text-blue-900 my-2">${results.totalInvestment.toLocaleString()}</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Capital Gain</div>
          <div className="text-xl font-bold text-green-700">${results.capitalGain.toLocaleString()}</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Dividends</div>
          <div className="text-xl font-bold text-yellow-600">${results.dividends.toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <div className="text-sm text-gray-600">Total Return (Absolute)</div>
        <div className="text-2xl font-bold text-blue-900">${results.totalReturnAbsolute.toLocaleString()}</div>
        <div className="text-sm text-gray-700 mt-1">{results.totalReturnPercent}% of investment</div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Return Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#3b82f6">
            {/* colors specified per item via payload are not applied automatically in simple Bar usage; keeping single fill for clarity */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Stock Return Calculator"
      description="Calculate stock returns including dividends and capital gains. Enter purchase price, current price, number of shares, and total dividends to see absolute and percentage returns."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
