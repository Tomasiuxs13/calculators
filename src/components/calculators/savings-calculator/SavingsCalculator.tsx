'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function SavingsCalculator() {
  const [initial, setInitial] = useState<string>('1000');
  const [monthly, setMonthly] = useState<string>('200');
  const [rate, setRate] = useState<string>('3.5');
  const [years, setYears] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const initialAmount = parseFloat(initial);
    const monthlyDeposit = parseFloat(monthly);
    const annualRate = parseFloat(rate) / 100;
    const timePeriod = parseFloat(years);

    if (!isNaN(initialAmount) && !isNaN(monthlyDeposit) && !isNaN(annualRate) && !isNaN(timePeriod) && timePeriod > 0) {
      const totalMonths = timePeriod * 12;
      let futureValue = initialAmount;

      for (let month = 1; month <= totalMonths; month++) {
        futureValue += monthlyDeposit;
        futureValue *= (1 + annualRate / 12);
      }

      setResult(parseFloat(futureValue.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [initial, monthly, rate, years]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Savings Calculator Results',
      inputs: [
        { label: 'Initial Amount', value: initial },
        { label: 'Monthly Deposit', value: monthly },
        { label: 'Annual Interest Rate (%)', value: rate },
        { label: 'Time Period (years)', value: years },
      ],
      results: [
        { label: 'Future Savings', value: `${result.toLocaleString()} USD` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Initial', value: parseFloat(initial) || 0 },
    { name: 'Future Savings', value: result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="initial">Initial Amount</Label>
        <Input
          id="initial"
          type="number"
          value={initial}
          onChange={(e) => setInitial(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthly">Monthly Deposit</Label>
        <Input
          id="monthly"
          type="number"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years">Time Period (years)</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          min="1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Future Savings</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">USD</div>
    </div>
  ) : null;

  const charts = (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Savings Growth Over Time</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} USD`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <CalculatorLayout
      title="Savings Calculator"
      description="Calculate future savings based on regular deposits and interest."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
