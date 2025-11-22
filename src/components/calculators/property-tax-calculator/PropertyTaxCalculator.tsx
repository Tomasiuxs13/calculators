'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PropertyTaxCalculator() {
  const [assessedValue, setAssessedValue] = useState<string>('300000');
  const [taxRate, setTaxRate] = useState<string>('1.2');
  const [annualTax, setAnnualTax] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const value = parseFloat(assessedValue);
    const rate = parseFloat(taxRate);

    if (!isNaN(value) && value >= 0 && !isNaN(rate) && rate >= 0) {
      const tax = value * (rate / 100);
      setAnnualTax(parseFloat(tax.toFixed(2)));
    } else {
      setAnnualTax(null);
    }
  }, [assessedValue, taxRate]);

  const handleDownloadPDF = () => {
    if (annualTax === null) return;

    generateCalculatorPDF({
      title: 'Property Tax Calculator Results',
      inputs: [
        { label: 'Assessed Property Value', value: assessedValue },
        { label: 'Property Tax Rate (%)', value: taxRate },
      ],
      results: [
        { label: 'Annual Property Tax', value: `${annualTax}` },
      ],
    });
  };

  const chartData = annualTax !== null ? [
    { label: 'Assessed Value', value: parseFloat(assessedValue) || 0 },
    { label: 'Annual Tax', value: annualTax },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="assessedValue">Assessed Property Value</Label>
        <Input
          id="assessedValue"
          type="number"
          value={assessedValue}
          onChange={(e) => setAssessedValue(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="taxRate">Property Tax Rate (%)</Label>
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

  const results = annualTax !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Property Tax</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {annualTax.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
      </div>
      <div className="text-lg text-gray-700">Based on an assessed value of {parseFloat(assessedValue || '0').toLocaleString(undefined, { style: 'currency', currency: 'USD' })} at {parseFloat(taxRate || '0').toFixed(2)}%</div>
    </div>
  ) : null;

  const charts = showCharts && annualTax !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Assessed Value vs Annual Tax</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Property Tax Calculator"
      description="Calculate annual property tax based on assessed value and tax rate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
