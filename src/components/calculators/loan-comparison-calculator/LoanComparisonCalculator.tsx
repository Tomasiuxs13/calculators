'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Results = {
  monthly1: number;
  total1: number;
  interest1: number;
  monthly2: number;
  total2: number;
  interest2: number;
};

export default function LoanComparisonCalculator() {
  const [loan1Amount, setLoan1Amount] = useState<string>('200000');
  const [loan1Rate, setLoan1Rate] = useState<string>('4.5');
  const [loan1Term, setLoan1Term] = useState<string>('30');

  const [loan2Amount, setLoan2Amount] = useState<string>('200000');
  const [loan2Rate, setLoan2Rate] = useState<string>('3.8');
  const [loan2Term, setLoan2Term] = useState<string>('30');

  const [results, setResults] = useState<Results | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse inputs
    const P1 = parseFloat(loan1Amount);
    const annualR1 = parseFloat(loan1Rate);
    const years1 = parseFloat(loan1Term);

    const P2 = parseFloat(loan2Amount);
    const annualR2 = parseFloat(loan2Rate);
    const years2 = parseFloat(loan2Term);

    // Validate
    const valid1 = !isNaN(P1) && P1 >= 0 && !isNaN(years1) && years1 > 0 && !isNaN(annualR1) && annualR1 >= 0;
    const valid2 = !isNaN(P2) && P2 >= 0 && !isNaN(years2) && years2 > 0 && !isNaN(annualR2) && annualR2 >= 0;

    if (!valid1 || !valid2) {
      setResults(null);
      return;
    }

    // Helper to compute monthly payment
    const computeLoan = (principal: number, annualRate: number, years: number) => {
      const n = Math.round(years * 12);
      const r = annualRate / 100 / 12; // monthly interest rate

      let monthly = 0;
      if (r === 0) {
        monthly = principal / n;
      } else {
        const factor = Math.pow(1 + r, n);
        monthly = (principal * r * factor) / (factor - 1);
      }

      const total = monthly * n;
      const interest = total - principal;

      return {
        monthly: parseFloat(monthly.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
      };
    };

    const l1 = computeLoan(P1, annualR1, years1);
    const l2 = computeLoan(P2, annualR2, years2);

    setResults({
      monthly1: l1.monthly,
      total1: l1.total,
      interest1: l1.interest,
      monthly2: l2.monthly,
      total2: l2.total,
      interest2: l2.interest,
    });
  }, [loan1Amount, loan1Rate, loan1Term, loan2Amount, loan2Rate, loan2Term]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'Loan Comparison Results',
      inputs: [
        { label: 'Loan 1 Amount', value: loan1Amount },
        { label: 'Loan 1 Rate (%)', value: loan1Rate },
        { label: 'Loan 1 Term (years)', value: loan1Term },
        { label: 'Loan 2 Amount', value: loan2Amount },
        { label: 'Loan 2 Rate (%)', value: loan2Rate },
        { label: 'Loan 2 Term (years)', value: loan2Term },
      ],
      results: [
        { label: 'Loan 1 Monthly Payment', value: `$${results.monthly1.toLocaleString()}` },
        { label: 'Loan 1 Total Payment', value: `$${results.total1.toLocaleString()}` },
        { label: 'Loan 1 Total Interest', value: `$${results.interest1.toLocaleString()}` },
        { label: 'Loan 2 Monthly Payment', value: `$${results.monthly2.toLocaleString()}` },
        { label: 'Loan 2 Total Payment', value: `$${results.total2.toLocaleString()}` },
        { label: 'Loan 2 Total Interest', value: `$${results.interest2.toLocaleString()}` },
      ],
    });
  };

  const chartData = results
    ? [
        { name: 'Loan 1', monthly: results.monthly1, interest: results.interest1 },
        { name: 'Loan 2', monthly: results.monthly2, interest: results.interest2 },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold">Loan 1</h3>

          <div className="space-y-2">
            <Label htmlFor="loan1Amount">Loan 1 Amount</Label>
            <Input
              id="loan1Amount"
              type="number"
              value={loan1Amount}
              onChange={(e) => setLoan1Amount(e.target.value)}
              min="0"
              step="100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan1Rate">Loan 1 Rate (%)</Label>
            <Input
              id="loan1Rate"
              type="number"
              value={loan1Rate}
              onChange={(e) => setLoan1Rate(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan1Term">Loan 1 Term (years)</Label>
            <Input
              id="loan1Term"
              type="number"
              value={loan1Term}
              onChange={(e) => setLoan1Term(e.target.value)}
              min="1"
              step="1"
            />
          </div>
        </div>

        <div className="space-y-4 p-4 border rounded-lg bg-white">
          <h3 className="text-lg font-semibold">Loan 2</h3>

          <div className="space-y-2">
            <Label htmlFor="loan2Amount">Loan 2 Amount</Label>
            <Input
              id="loan2Amount"
              type="number"
              value={loan2Amount}
              onChange={(e) => setLoan2Amount(e.target.value)}
              min="0"
              step="100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan2Rate">Loan 2 Rate (%)</Label>
            <Input
              id="loan2Rate"
              type="number"
              value={loan2Rate}
              onChange={(e) => setLoan2Rate(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan2Term">Loan 2 Term (years)</Label>
            <Input
              id="loan2Term"
              type="number"
              value={loan2Term}
              onChange={(e) => setLoan2Term(e.target.value)}
              min="1"
              step="1"
            />
          </div>
        </div>
      </div>

      {/* Placeholder Select imported to follow pattern */}
      <div className="mt-4 hidden">
        <Label htmlFor="placeholder">Placeholder Select</Label>
        <Select id="placeholder" value="" onChange={() => {}}>
          <option value="">--</option>
        </Select>
      </div>
    </>
  );

  const resultsView = results ? (
    <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg border">
          <div className="text-sm text-gray-600">Loan 1</div>
          <div className="text-3xl font-bold text-blue-900 my-2">{results.monthly1.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
          <div className="text-sm text-gray-700">Monthly Payment</div>
          <div className="mt-3 text-sm text-gray-600">Total Payment: <span className="font-medium">{results.total1.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</span></div>
          <div className="text-sm text-gray-600">Total Interest: <span className="font-medium">{results.interest1.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</span></div>
        </div>

        <div className="p-4 bg-white rounded-lg border">
          <div className="text-sm text-gray-600">Loan 2</div>
          <div className="text-3xl font-bold text-blue-900 my-2">{results.monthly2.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
          <div className="text-sm text-gray-700">Monthly Payment</div>
          <div className="mt-3 text-sm text-gray-600">Total Payment: <span className="font-medium">{results.total2.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</span></div>
          <div className="text-sm text-gray-600">Total Interest: <span className="font-medium">{results.interest2.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</span></div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Loan Comparison</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="monthly" name="Monthly Payment" fill="#3b82f6" />
          <Bar dataKey="interest" name="Total Interest" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Loan Comparison"
      description="Compare multiple loan options side by side. Enter amounts, APRs, and terms to see monthly payments, total payments, and total interest for each loan."
      inputs={inputs}
      results={resultsView}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
