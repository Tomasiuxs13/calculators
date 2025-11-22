'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState<string>('200000');
  const [currentRate, setCurrentRate] = useState<string>('4.5');
  const [newRate, setNewRate] = useState<string>('3.5');
  const [remainingTerm, setRemainingTerm] = useState<string>('25');
  const [newTerm, setNewTerm] = useState<string>('30');
  const [closingCosts, setClosingCosts] = useState<string>('3000');
  const [monthlySavings, setMonthlySavings] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const balance = parseFloat(currentBalance);
    const oldRate = parseFloat(currentRate) / 100 / 12;
    const newRateValue = parseFloat(newRate) / 100 / 12;
    const remainingMonths = parseInt(remainingTerm) * 12;
    const newMonths = parseInt(newTerm) * 12;

    if (!isNaN(balance) && !isNaN(oldRate) && !isNaN(newRateValue) && remainingMonths > 0 && newMonths > 0) {
      const oldMonthlyPayment = (balance * oldRate) / (1 - Math.pow(1 + oldRate, -remainingMonths));
      const newMonthlyPayment = (balance * newRateValue) / (1 - Math.pow(1 + newRateValue, -newMonths));
      const savings = oldMonthlyPayment - newMonthlyPayment;
      setMonthlySavings(parseFloat(savings.toFixed(2)));
    } else {
      setMonthlySavings(null);
    }
  }, [currentBalance, currentRate, newRate, remainingTerm, newTerm]);

  const handleDownloadPDF = () => {
    if (monthlySavings === null) return;

    generateCalculatorPDF({
      title: 'Refinance Calculator Results',
      inputs: [
        { label: 'Current Loan Balance', value: currentBalance },
        { label: 'Current Interest Rate (%)', value: currentRate },
        { label: 'New Interest Rate (%)', value: newRate },
        { label: 'Remaining Term (years)', value: remainingTerm },
        { label: 'New Term (years)', value: newTerm },
        { label: 'Closing Costs', value: closingCosts },
      ],
      results: [
        { label: 'Monthly Savings', value: `$${monthlySavings}` },
      ],
    });
  };

  const chartData = monthlySavings !== null ? [
    { label: 'Monthly Savings', value: monthlySavings },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="currentBalance">Current Loan Balance</Label>
        <Input
          id="currentBalance"
          type="number"
          value={currentBalance}
          onChange={(e) => setCurrentBalance(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentRate">Current Interest Rate (%)</Label>
        <Input
          id="currentRate"
          type="number"
          value={currentRate}
          onChange={(e) => setCurrentRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newRate">New Interest Rate (%)</Label>
        <Input
          id="newRate"
          type="number"
          value={newRate}
          onChange={(e) => setNewRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="remainingTerm">Remaining Term (years)</Label>
        <Input
          id="remainingTerm"
          type="number"
          value={remainingTerm}
          onChange={(e) => setRemainingTerm(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newTerm">New Term (years)</Label>
        <Input
          id="newTerm"
          type="number"
          value={newTerm}
          onChange={(e) => setNewTerm(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="closingCosts">Closing Costs</Label>
        <Input
          id="closingCosts"
          type="number"
          value={closingCosts}
          onChange={(e) => setClosingCosts(e.target.value)}
          min="0"
        />
      </div>
    </>
  );

  const results = monthlySavings !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Monthly Savings</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${monthlySavings.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = showCharts && monthlySavings !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Savings Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
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
      title="Refinance Calculator"
      description="Calculate potential savings from refinancing your mortgage or loan."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
