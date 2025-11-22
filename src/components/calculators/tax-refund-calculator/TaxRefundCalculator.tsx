'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FilingStatus = 'single' | 'married-joint';

export default function TaxRefundCalculator() {
  const [income, setIncome] = useState<string>('75000');
  const [withholdings, setWithholdings] = useState<string>('12000');
  const [deductions, setDeductions] = useState<string>('15000');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');

  const [taxLiability, setTaxLiability] = useState<number | null>(null);
  const [refund, setRefund] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Simple progressive tax brackets (illustrative). Values in USD.
  // Brackets based on two filing statuses. These are example brackets—not legal tax advice.
  const taxBrackets: Record<FilingStatus, { rate: number; threshold: number }[]> = {
    single: [
      { threshold: 0, rate: 0.10 },
      { threshold: 11000, rate: 0.12 },
      { threshold: 44725, rate: 0.22 },
      { threshold: 95375, rate: 0.24 },
      { threshold: 182100, rate: 0.32 },
    ],
    'married-joint': [
      { threshold: 0, rate: 0.10 },
      { threshold: 22000, rate: 0.12 },
      { threshold: 89450, rate: 0.22 },
      { threshold: 190750, rate: 0.24 },
      { threshold: 364200, rate: 0.32 },
    ],
  };

  const calculateProgressiveTax = (taxableIncome: number, status: FilingStatus) => {
    if (taxableIncome <= 0) return 0;
    const brackets = taxBrackets[status];
    // We'll compute tax by iterating brackets up to next threshold.
    let tax = 0;

    for (let i = 0; i < brackets.length; i++) {
      const current = brackets[i];
      const next = brackets[i + 1];
      const lower = current.threshold;
      const upper = next ? next.threshold : Infinity;
      if (taxableIncome > lower) {
        const taxableAtThisRate = Math.min(taxableIncome, upper) - lower;
        tax += taxableAtThisRate * current.rate;
      } else {
        break;
      }
    }

    return tax;
  };

  useEffect(() => {
    const inc = parseFloat(income);
    const withh = parseFloat(withholdings);
    const ded = parseFloat(deductions);

    if ([inc, withh, ded].some((v) => isNaN(v) || v < 0)) {
      setTaxLiability(null);
      setRefund(null);
      return;
    }

    // Taxable income = income - deductions (user-supplied). Minimum 0.
    const taxableIncome = Math.max(0, inc - ded);

    const tax = calculateProgressiveTax(taxableIncome, filingStatus);

    const estimatedRefund = withh - tax; // Positive = refund, Negative = owed

    setTaxLiability(parseFloat(tax.toFixed(2)));
    setRefund(parseFloat(estimatedRefund.toFixed(2)));
  }, [income, withholdings, deductions, filingStatus]);

  const handleDownloadPDF = () => {
    if (taxLiability === null || refund === null) return;

    generateCalculatorPDF({
      title: 'Tax Refund Estimate',
      inputs: [
        { label: 'Annual Income', value: income },
        { label: 'Total Withholdings', value: withholdings },
        { label: 'Total Deductions', value: deductions },
        { label: 'Filing Status', value: filingStatus },
      ],
      results: [
        { label: 'Estimated Tax Liability', value: `${taxLiability.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}` },
        { label: 'Estimated Refund (Withholdings - Tax)', value: `${refund.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}` },
      ],
    });
  };

  const chartData = taxLiability !== null && refund !== null ? [
    { name: 'Tax Liability', value: Math.abs(taxLiability), label: 'Tax' },
    { name: 'Withholdings', value: Math.abs(parseFloat(withholdings) || 0), label: 'Withheld' },
    { name: refund >= 0 ? 'Refund' : 'Amount Owed', value: Math.abs(refund), label: refund >= 0 ? 'Refund' : 'Owed' },
  ] : [];

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
          step="100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="withholdings">Total Withholdings</Label>
        <Input
          id="withholdings"
          type="number"
          value={withholdings}
          onChange={(e) => setWithholdings(e.target.value)}
          min="0"
          step="50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deductions">Total Deductions</Label>
        <Input
          id="deductions"
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="filingStatus">Filing Status</Label>
        <Select
          id="filingStatus"
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
        >
          <option value="single">Single</option>
          <option value="married-joint">Married Filing Jointly</option>
        </Select>
      </div>
    </>
  );

  const results = taxLiability !== null && refund !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Refund</div>
      <div className="text-5xl font-bold text-green-700 my-3">
        {refund >= 0
          ? refund.toLocaleString(undefined, { style: 'currency', currency: 'USD' })
          : `-${Math.abs(refund).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`}
      </div>
      <div className="text-lg text-gray-700 mb-2">
        {refund >= 0 ? 'You are likely to receive a refund.' : 'You may owe additional tax.'}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div>Estimated Tax Liability: <strong>{taxLiability.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</strong></div>
        <div>Withholdings: <strong>{parseFloat(withholdings || '0').toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</strong></div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && taxLiability !== null && refund !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Withholdings vs Tax Liability</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })} />
          <Legend />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tax Refund Calculator"
      description="Estimate your tax refund based on withholdings and deductions."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
