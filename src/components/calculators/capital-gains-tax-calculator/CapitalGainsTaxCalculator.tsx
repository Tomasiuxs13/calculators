'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Currency = 'USD';

export default function CapitalGainsTaxCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<string>('10000');
  const [salePrice, setSalePrice] = useState<string>('15000');
  const [holdingPeriod, setHoldingPeriod] = useState<string>('2');
  const [taxRate, setTaxRate] = useState<string>('15');

  const [capitalGain, setCapitalGain] = useState<number | null>(null);
  const [taxOwed, setTaxOwed] = useState<number | null>(null);
  const [afterTaxProceeds, setAfterTaxProceeds] = useState<number | null>(null);
  const [annualizedReturnPct, setAnnualizedReturnPct] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const purchase = parseFloat(purchasePrice);
    const sale = parseFloat(salePrice);
    const years = parseFloat(holdingPeriod);
    const rate = parseFloat(taxRate);

    if (
      !isNaN(purchase) &&
      !isNaN(sale) &&
      !isNaN(years) &&
      !isNaN(rate) &&
      purchase >= 0 &&
      sale >= 0 &&
      years >= 0 &&
      rate >= 0
    ) {
      const gain = sale - purchase;
      // Tax is applied only to gains (no negative tax for losses in this simple calculator)
      const taxableGain = Math.max(0, gain);
      const tax = (taxableGain * rate) / 100;
      const afterTax = sale - tax;

      let annualized = null;
      if (purchase > 0 && years > 0) {
        try {
          annualized = (Math.pow(sale / purchase, 1 / years) - 1) * 100;
        } catch (e) {
          annualized = null;
        }
      }

      setCapitalGain(parseFloat(gain.toFixed(2)));
      setTaxOwed(parseFloat(tax.toFixed(2)));
      setAfterTaxProceeds(parseFloat(afterTax.toFixed(2)));
      setAnnualizedReturnPct(annualized !== null ? parseFloat(annualized.toFixed(2)) : null);
    } else {
      setCapitalGain(null);
      setTaxOwed(null);
      setAfterTaxProceeds(null);
      setAnnualizedReturnPct(null);
    }
  }, [purchasePrice, salePrice, holdingPeriod, taxRate]);

  const handleDownloadPDF = () => {
    if (capitalGain === null || taxOwed === null || afterTaxProceeds === null) return;

    generateCalculatorPDF({
      title: 'Capital Gains Tax Calculator Results',
      inputs: [
        { label: 'Purchase Price', value: `$${parseFloat(purchasePrice).toLocaleString()}` },
        { label: 'Sale Price', value: `$${parseFloat(salePrice).toLocaleString()}` },
        { label: 'Holding Period (years)', value: holdingPeriod },
        { label: 'Capital Gains Tax Rate (%)', value: `${taxRate}%` },
      ],
      results: [
        { label: 'Capital Gain', value: `$${capitalGain.toLocaleString()}` },
        { label: 'Tax Owed', value: `$${taxOwed.toLocaleString()}` },
        { label: 'After-Tax Proceeds', value: `$${afterTaxProceeds.toLocaleString()}` },
        { label: 'Annualized Return (%)', value: annualizedReturnPct !== null ? `${annualizedReturnPct}%` : 'N/A' },
      ],
    });
  };

  const chartData = capitalGain !== null && taxOwed !== null && afterTaxProceeds !== null ? [
    { name: 'Purchase', value: parseFloat(purchasePrice) || 0, fill: '#94a3b8' },
    { name: 'Sale', value: parseFloat(salePrice) || 0, fill: '#3b82f6' },
    { name: 'Gain', value: capitalGain, fill: '#10b981' },
    { name: 'Tax', value: taxOwed, fill: '#ef4444' },
  ] : [];

  const inputs = (
    <>
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
        <Label htmlFor="salePrice">Sale Price</Label>
        <Input
          id="salePrice"
          type="number"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="holdingPeriod">Holding Period (years)</Label>
          <Input
            id="holdingPeriod"
            type="number"
            value={holdingPeriod}
            onChange={(e) => setHoldingPeriod(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxRate">Capital Gains Tax Rate (%)</Label>
          <Input
            id="taxRate"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </>
  );

  const results = capitalGain !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Summary</div>

      <div className="text-left bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-700">Capital Gain</div>
          <div className="font-semibold text-gray-900">${capitalGain.toLocaleString()}</div>
        </div>

        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-700">Tax Owed</div>
          <div className="font-semibold text-red-600">${taxOwed!.toLocaleString()}</div>
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-gray-700">After-Tax Proceeds</div>
          <div className="font-semibold text-green-700">${afterTaxProceeds!.toLocaleString()}</div>
        </div>

        {annualizedReturnPct !== null && (
          <div className="mt-3 text-center text-sm text-gray-600">
            Annualized Return: <span className="font-medium text-gray-900">{annualizedReturnPct}%</span>
          </div>
        )}
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Investment Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#3b82f6">
            {/* colors are set on data entries via fill */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Capital Gains Tax Calculator"
      description="Calculate capital gains tax on investments. Enter purchase price, sale price, holding period, and the capital gains tax rate to see tax owed and after-tax proceeds."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
