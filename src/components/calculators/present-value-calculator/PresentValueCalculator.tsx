'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PresentValueCalculator() {
  const [futureValue, setFutureValue] = useState<string>('20000');
  const [rate, setRate] = useState<string>('5.0');
  const [years, setYears] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const fv = parseFloat(futureValue);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(years);
    if (!isNaN(fv) && !isNaN(r) && !isNaN(n) && n > 0) {
      const presentValue = fv / Math.pow(1 + r, n);
      setResult(parseFloat(presentValue.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [futureValue, rate, years]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Present Value Calculator Results',
      inputs: [
        { label: 'Future Value', value: futureValue },
        { label: 'Discount Rate', value: rate },
        { label: 'Number of Years', value: years },
      ],
      results: [
        { label: 'Present Value', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Future Value', value: parseFloat(futureValue) || 0 },
    { label: 'Present Value', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="futureValue">Future Value</Label>
        <Input
          id="futureValue"
          type="number"
          value={futureValue}
          onChange={(e) => setFutureValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Discount Rate (%)</Label>
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
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Present Value</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Value Comparison</h3>
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
      title="Present Value Calculator"
      description="Calculate the present value of a future amount (discounting)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
