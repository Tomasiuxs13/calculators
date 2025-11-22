'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ExpenseKey = 'housing' | 'food' | 'transportation' | 'utilities' | 'entertainment' | 'other';

type ExpenseRecord = Record<ExpenseKey, number>;

const DEFAULTS: Record<ExpenseKey, string> = {
  housing: '1500',
  food: '500',
  transportation: '400',
  utilities: '200',
  entertainment: '300',
  other: '200',
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

export default function ExpenseTrackerCalculator() {
  const [housing, setHousing] = useState<string>(DEFAULTS.housing);
  const [food, setFood] = useState<string>(DEFAULTS.food);
  const [transportation, setTransportation] = useState<string>(DEFAULTS.transportation);
  const [utilities, setUtilities] = useState<string>(DEFAULTS.utilities);
  const [entertainment, setEntertainment] = useState<string>(DEFAULTS.entertainment);
  const [other, setOther] = useState<string>(DEFAULTS.other);
  const [currency, setCurrency] = useState<string>('USD');

  const [total, setTotal] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<Array<{ key: ExpenseKey; label: string; value: number; percent: number }>>([]);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const values: ExpenseRecord = {
      housing: parseFloat(housing) || 0,
      food: parseFloat(food) || 0,
      transportation: parseFloat(transportation) || 0,
      utilities: parseFloat(utilities) || 0,
      entertainment: parseFloat(entertainment) || 0,
      other: parseFloat(other) || 0,
    };

    if (Object.values(values).some(isNaN)) {
      setTotal(null);
      setBreakdown([]);
      return;
    }

    const sum = Object.values(values).reduce((acc, v) => acc + (isFinite(v) && v >= 0 ? v : 0), 0);

    if (!isFinite(sum) || sum <= 0) {
      setTotal(null);
      setBreakdown([]);
      return;
    }

    setTotal(parseFloat(sum.toFixed(2)));

    const bd = (Object.keys(values) as ExpenseKey[]).map((k) => {
      const val = values[k];
      const pct = sum > 0 ? parseFloat(((val / sum) * 100).toFixed(2)) : 0;
      const labelMap: Record<ExpenseKey, string> = {
        housing: 'Housing',
        food: 'Food',
        transportation: 'Transportation',
        utilities: 'Utilities',
        entertainment: 'Entertainment',
        other: 'Other',
      };
      return { key: k, label: labelMap[k], value: parseFloat(val.toFixed(2)), percent: pct };
    });

    setBreakdown(bd);
  }, [housing, food, transportation, utilities, entertainment, other]);

  const handleDownloadPDF = () => {
    if (total === null) return;

    const inputsForPdf = [
      { label: 'Housing', value: housing },
      { label: 'Food', value: food },
      { label: 'Transportation', value: transportation },
      { label: 'Utilities', value: utilities },
      { label: 'Entertainment', value: entertainment },
      { label: 'Other', value: other },
      { label: 'Currency', value: currency },
    ];

    const resultsForPdf = [
      { label: 'Total Monthly Expenses', value: `${total} ${currency}` },
      ...breakdown.map((b) => ({ label: `${b.label} (${b.percent}%)`, value: `${b.value} ${currency}` })),
    ];

    generateCalculatorPDF({
      title: 'Expense Tracker Results',
      inputs: inputsForPdf,
      results: resultsForPdf,
    });
  };

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="housing">Housing</Label>
          <Input
            id="housing"
            type="number"
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="food">Food</Label>
          <Input
            id="food"
            type="number"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="transportation">Transportation</Label>
          <Input
            id="transportation"
            type="number"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utilities">Utilities</Label>
          <Input
            id="utilities"
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="entertainment">Entertainment</Label>
          <Input
            id="entertainment"
            type="number"
            value={entertainment}
            onChange={(e) => setEntertainment(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="other">Other</Label>
          <Input
            id="other"
            type="number"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </>
  );

  return (
    <CalculatorLayout title="Expense Tracker Calculator">
      {inputs}
      {showCharts && total !== null && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={breakdown}>
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </CalculatorLayout>
  );
}
