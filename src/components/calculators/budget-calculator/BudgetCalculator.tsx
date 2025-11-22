'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<string>('5000');
  const [housing, setHousing] = useState<string>('1500');
  const [food, setFood] = useState<string>('500');
  const [transportation, setTransportation] = useState<string>('400');
  const [utilities, setUtilities] = useState<string>('200');
  const [other, setOther] = useState<string>('300');
  const [totalExpenses, setTotalExpenses] = useState<number | null>(null);
  const [remainingBudget, setRemainingBudget] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const income = parseFloat(monthlyIncome);
    const housingExp = parseFloat(housing);
    const foodExp = parseFloat(food);
    const transportExp = parseFloat(transportation);
    const utilitiesExp = parseFloat(utilities);
    const otherExp = parseFloat(other);

    if (!isNaN(income) && income >= 0) {
      const total = housingExp + foodExp + transportExp + utilitiesExp + otherExp;
      setTotalExpenses(total);
      setRemainingBudget(income - total);
    } else {
      setTotalExpenses(null);
      setRemainingBudget(null);
    }
  }, [monthlyIncome, housing, food, transportation, utilities, other]);

  const handleDownloadPDF = () => {
    if (totalExpenses === null || remainingBudget === null) return;

    generateCalculatorPDF({
      title: 'Budget Calculator Results',
      inputs: [
        { label: 'Monthly Income', value: monthlyIncome },
        { label: 'Housing Expenses', value: housing },
        { label: 'Food Expenses', value: food },
        { label: 'Transportation', value: transportation },
        { label: 'Utilities', value: utilities },
        { label: 'Other Expenses', value: other },
      ],
      results: [
        { label: 'Total Expenses', value: totalExpenses.toLocaleString() },
        { label: 'Remaining Budget', value: remainingBudget.toLocaleString() },
      ],
    });
  };

  const chartData = totalExpenses !== null && remainingBudget !== null ? [
    { category: 'Total Expenses', value: totalExpenses },
    { category: 'Remaining Budget', value: remainingBudget },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="monthlyIncome">Monthly Income</Label>
        <Input
          id="monthlyIncome"
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="housing">Housing Expenses</Label>
          <Input
            id="housing"
            type="number"
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="food">Food Expenses</Label>
          <Input
            id="food"
            type="number"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="transportation">Transportation</Label>
          <Input
            id="transportation"
            type="number"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="utilities">Utilities</Label>
          <Input
            id="utilities"
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="other">Other Expenses</Label>
          <Input
            id="other"
            type="number"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const results = totalExpenses !== null && remainingBudget !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Total Expenses: {totalExpenses.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Remaining Budget: {remainingBudget.toLocaleString()}</div>
    </div>
  ) : null;

  const charts = showCharts && totalExpenses !== null && remainingBudget !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Budget Overview</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toLocaleString()} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Budget Calculator"
      description="Create and manage a monthly budget with income and expenses."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
