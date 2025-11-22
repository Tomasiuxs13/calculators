'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SalaryType = 'hourly' | 'weekly' | 'monthly' | 'annually';

const salaryConversions: Record<SalaryType, number> = {
  hourly: 1 / 168, // 1 hour = 1/168 of a week
  weekly: 1 / 4.33, // 1 week = 1/4.33 of a month
  monthly: 1 / 12, // 1 month = 1/12 of a year
  annually: 1,
};

export default function SalaryCalculator() {
  const [amount, setAmount] = useState<string>('25');
  const [fromType, setFromType] = useState<SalaryType>('hourly');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount >= 0) {
      const baseSalary = numAmount * salaryConversions[fromType];
      setResult(parseFloat((baseSalary * salaryConversions['annually']).toFixed(2)));
    } else {
      setResult(null);
    }
  }, [amount, fromType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Salary Calculator Results',
      inputs: [
        { label: 'Amount', value: amount },
        { label: 'From Type', value: fromType },
      ],
      results: [
        { label: 'Annual Salary', value: `${result} annually` },
      ],
    });
  };

  const chartData = result !== null ? [
    { type: fromType, value: parseFloat(amount) || 0, label: 'Original' },
    { type: 'annually', value: result, label: 'Converted' },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
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
        <Label htmlFor="fromType">From</Label>
        <Select
          id="fromType"
          value={fromType}
          onChange={(e) => setFromType(e.target.value as SalaryType)}
        >
          <option value="hourly">Hourly</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Annually</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Salary Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.type || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Salary Calculator"
      description="Convert between hourly, weekly, monthly, and annual salary."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
