'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FilingStatus = 'single' | 'married-joint' | 'married-separate' | 'head';

type Bracket = {
  rate: number; // decimal, e.g. 0.22
  threshold: number; // upper bound for this bracket (inclusive lower bound is previous threshold)
};

// 2023 U.S. federal tax brackets (approximate) used for demonstration
const TAX_BRACKETS: Record<FilingStatus, Bracket[]> = {
  single: [
    { rate: 0.10, threshold: 11000 },
    { rate: 0.12, threshold: 44725 },
    { rate: 0.22, threshold: 95375 },
    { rate: 0.24, threshold: 182100 },
    { rate: 0.32, threshold: 231250 },
    { rate: 0.35, threshold: 578125 },
    { rate: 0.37, threshold: Number.POSITIVE_INFINITY },
  ],
  'married-joint': [
    { rate: 0.10, threshold: 22000 },
    { rate: 0.12, threshold: 89450 },
    { rate: 0.22, threshold: 190750 },
    { rate: 0.24, threshold: 364200 },
    { rate: 0.32, threshold: 462500 },
    { rate: 0.35, threshold: 693750 },
    { rate: 0.37, threshold: Number.POSITIVE_INFINITY },
  ],
  'married-separate': [
    // For simplicity we'll approximate married filing separately similar to single
    { rate: 0.10, threshold: 11000 },
    { rate: 0.12, threshold: 44725 },
    { rate: 0.22, threshold: 95375 },
    { rate: 0.24, threshold: 182100 },
    { rate: 0.32, threshold: 231250 },
    { rate: 0.35, threshold: 346875 },
    { rate: 0.37, threshold: Number.POSITIVE_INFINITY },
  ],
  head: [
    { rate: 0.10, threshold: 15700 },
    { rate: 0.12, threshold: 59850 },
    { rate: 0.22, threshold: 95350 },
    { rate: 0.24, threshold: 182100 },
    { rate: 0.32, threshold: 231250 },
    { rate: 0.35, threshold: 578100 },
    { rate: 0.37, threshold: Number.POSITIVE_INFINITY },
  ],
};

type TaxResult = {
  taxOwed: number;
  effectiveRate: number; // decimal
  marginalRate: number; // decimal
  bracketLabel: string;
};

function calculateProgressiveTax(income: number, brackets: Bracket[]): TaxResult {
  let remaining = income;
  let tax = 0;
  let lower = 0;
  let marginalRate = 0;
  let marginalUpper = 0;

  for (let i = 0; i < brackets.length; i++) {
    const { rate, threshold } = brackets[i];
    const upper = threshold;
    const taxableInBracket = Math.max(0, Math.min(income, upper) - lower);
    tax += taxableInBracket * rate;

    if (income > lower && income <= upper) {
      marginalRate = rate;
      marginalUpper = upper === Number.POSITIVE_INFINITY ? Infinity : upper;
      break;
    }

    lower = upper;
  }

  // If income exceeds all finite thresholds, marginal rate is last bracket rate
  if (marginalRate === 0 && brackets.length > 0) {
    marginalRate = brackets[brackets.length - 1].rate;
    marginalUpper = Infinity;
  }

  const effectiveRate = income > 0 ? tax / income : 0;

  const bracketLabel = marginalUpper === Infinity
    ? `${(marginalRate * 100).toFixed(0)}% (Over ${formatCurrency(brackets[brackets.length - 2]?.threshold || 0)})`
    : `${(marginalRate * 100).toFixed(0)}% (${formatCurrency(Math.max(0, marginalUpper - (brackets.findIndex(b => b.threshold === marginalUpper) > 0 ? brackets[brackets.findIndex(b => b.threshold === marginalUpper) - 1].threshold : 0)))} up to ${formatCurrency(marginalUpper)})`;

  return {
    taxOwed: parseFloat(tax.toFixed(2)),
    effectiveRate: parseFloat(effectiveRate.toFixed(4)),
    marginalRate: marginalRate,
    bracketLabel,
  };
}

function formatCurrency(value: number) {
  return value === Infinity ? '∞' : `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export default function TaxBracketCalculator() {
  const [income, setIncome] = useState<string>('75000');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [result, setResult] = useState<TaxResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numIncome = parseFloat(income);
    if (!isNaN(numIncome) && numIncome > 0) {
      const brackets = TAX_BRACKETS[filingStatus];
      const calc = calculateProgressiveTax(numIncome, brackets);
      setResult(calc);
    } else {
      setResult(null);
    }
  }, [income, filingStatus]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Tax Bracket Calculator Results',
      inputs: [
        { label: 'Annual Income', value: `$${parseFloat(income || '0').toLocaleString()}` },
        { label: 'Filing Status', value: filingStatus },
      ],
      results: [
        { label: 'Estimated Tax Owed', value: `$${result.taxOwed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
        { label: 'Marginal Tax Rate', value: `${(result.marginalRate * 100).toFixed(0)}%` },
        { label: 'Effective Tax Rate', value: `${(result.effectiveRate * 100).toFixed(2)}%` },
        { label: 'Bracket', value: result.bracketLabel },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Income', value: parseFloat(income) || 0, label: 'Income' },
    { name: 'Estimated Tax', value: result.taxOwed, label: 'Tax Owed' },
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

      <div className="space-y-2 mt-4">
        <Label htmlFor="filingStatus">Filing Status</Label>
        <Select
          id="filingStatus"
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
        >
          <option value="single">Single</option>
          <option value="married-joint">Married Filing Jointly</option>
          <option value="married-separate">Married Filing Separately</option>
          <option value="head">Head of Household</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Tax Owed</div>
      <div className="text-4xl font-bold text-green-800 my-3">
        ${result.taxOwed.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <div className="text-lg text-gray-700 mb-2">Marginal Rate: {(result.marginalRate * 100).toFixed(0)}%</div>
      <div className="text-sm text-gray-600">Effective Rate: {(result.effectiveRate * 100).toFixed(2)}%</div>
      <div className="text-sm text-gray-500 mt-2">Bracket: {result.bracketLabel}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Income vs Estimated Tax</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string) => {
            if (name === 'Income' || name === 'Estimated Tax') {
              return [`$${(value as number).toLocaleString(undefined, { maximumFractionDigits: 2 })}`, name];
            }
            return [value, name];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 text-sm text-gray-600 text-center">
        The chart visualizes your annual income compared to the estimated tax owed based on federal brackets.
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tax Bracket Calculator"
      description="Determine your tax bracket and estimate federal tax owed based on annual income and filing status."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
