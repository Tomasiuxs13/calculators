'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const taxBrackets = {
  single: [
    { threshold: 10275, rate: 0.1 },
    { threshold: 41775, rate: 0.12 },
    { threshold: 89075, rate: 0.22 },
    { threshold: 170050, rate: 0.24 },
    { threshold: 215950, rate: 0.32 },
    { threshold: 539900, rate: 0.35 },
    { threshold: Infinity, rate: 0.37 },
  ],
  'married-joint': [
    { threshold: 20550, rate: 0.1 },
    { threshold: 83550, rate: 0.12 },
    { threshold: 178150, rate: 0.22 },
    { threshold: 340100, rate: 0.24 },
    { threshold: 431900, rate: 0.32 },
    { threshold: 647850, rate: 0.35 },
    { threshold: Infinity, rate: 0.37 },
  ],
  'married-separate': [
    { threshold: 10275, rate: 0.1 },
    { threshold: 41775, rate: 0.12 },
    { threshold: 89075, rate: 0.22 },
    { threshold: 170050, rate: 0.24 },
    { threshold: 215950, rate: 0.32 },
    { threshold: 539900, rate: 0.35 },
    { threshold: Infinity, rate: 0.37 },
  ],
  head: [
    { threshold: 14600, rate: 0.1 },
    { threshold: 55900, rate: 0.12 },
    { threshold: 89075, rate: 0.22 },
    { threshold: 170050, rate: 0.24 },
    { threshold: 215950, rate: 0.32 },
    { threshold: 539900, rate: 0.35 },
    { threshold: Infinity, rate: 0.37 },
  ],
};

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState<string>('75000');
  const [filingStatus, setFilingStatus] = useState<'single' | 'married-joint' | 'married-separate' | 'head'>('single');
  const [deductions, setDeductions] = useState<string>('13850');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const incomeValue = parseFloat(income);
    const deductionsValue = parseFloat(deductions);
    if (!isNaN(incomeValue) && incomeValue >= 0 && !isNaN(deductionsValue)) {
      const taxableIncome = incomeValue - deductionsValue;
      let tax = 0;
      let previousThreshold = 0;

      for (const bracket of taxBrackets[filingStatus]) {
        if (taxableIncome > previousThreshold) {
          const taxableAmount = Math.min(taxableIncome, bracket.threshold) - previousThreshold;
          tax += taxableAmount * bracket.rate;
          previousThreshold = bracket.threshold;
        }
      }
      setResult(parseFloat(tax.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [income, filingStatus, deductions]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Income Tax Calculator Results',
      inputs: [
        { label: 'Annual Income', value: income },
        { label: 'Filing Status', value: filingStatus },
        { label: 'Standard Deduction', value: deductions },
      ],
      results: [
        { label: 'Estimated Tax', value: `$${result}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="income">Annual Income</Label>
        <Input
          id="income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="filingStatus">Filing Status</Label>
        <Select
          id="filingStatus"
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value as any)}
        >
          <option value="single">Single</option>
          <option value="married-joint">Married Filing Jointly</option>
          <option value="married-separate">Married Filing Separately</option>
          <option value="head">Head of Household</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="deductions">Standard Deduction</Label>
        <Input
          id="deductions"
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Tax</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${result.toLocaleString()}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Income Tax Calculator"
      description="Estimate your federal income tax based on filing status and income."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
