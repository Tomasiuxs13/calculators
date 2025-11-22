'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const compoundingFrequencies = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  annually: 1,
};

export default function FutureValueCalculator() {
  const [presentValue, setPresentValue] = useState<string>('10000');
  const [rate, setRate] = useState<string>('7.0');
  const [years, setYears] = useState<string>('10');
  const [compounding, setCompounding] = useState<'daily' | 'monthly' | 'quarterly' | 'annually'>('monthly');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const pv = parseFloat(presentValue);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = compoundingFrequencies[compounding];

    if (!isNaN(pv) && !isNaN(r) && !isNaN(t) && pv >= 0 && r >= 0 && t >= 0) {
      const futureValue = pv * Math.pow(1 + r / n, n * t);
      setResult(parseFloat(futureValue.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [presentValue, rate, years, compounding]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Future Value Calculator Results',
      inputs: [
        { label: 'Present Value', value: presentValue },
        { label: 'Annual Interest Rate', value: rate },
        { label: 'Number of Years', value: years },
        { label: 'Compounding Frequency', value: compounding },
      ],
      results: [
        { label: 'Future Value', value: `${result}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="presentValue">Present Value</Label>
        <Input
          id="presentValue"
          type="number"
          value={presentValue}
          onChange={(e) => setPresentValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years">Number of Years</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="compounding">Compounding Frequency</Label>
        <Select
          id="compounding"
          value={compounding}
          onChange={(e) => setCompounding(e.target.value as 'daily' | 'monthly' | 'quarterly' | 'annually')}
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Future Value</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Future Value', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Future Value Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Future Value Calculator"
      description="Calculate the future value of an investment with compound interest."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
