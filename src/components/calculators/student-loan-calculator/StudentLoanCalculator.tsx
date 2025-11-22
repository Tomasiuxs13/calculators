'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function StudentLoanCalculator() {
  const [principal, setPrincipal] = useState<string>('30000');
  const [rate, setRate] = useState<string>('5.0');
  const [term, setTerm] = useState<string>('10');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const principalVal = parseFloat(principal);
    const rateVal = parseFloat(rate) / 100 / 12;
    const termVal = parseFloat(term) * 12;

    if (!isNaN(principalVal) && !isNaN(rateVal) && !isNaN(termVal) && rateVal !== 0) {
      const monthly = (principalVal * rateVal) / (1 - Math.pow(1 + rateVal, -termVal));
      const totalPay = monthly * termVal;
      const totalInt = totalPay - principalVal;

      setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      setTotalInterest(parseFloat(totalInt.toFixed(2)));
      setTotalPayment(parseFloat(totalPay.toFixed(2)));
    } else {
      setMonthlyPayment(null);
      setTotalInterest(null);
      setTotalPayment(null);
    }
  }, [principal, rate, term]);

  const handleDownloadPDF = () => {
    if (monthlyPayment === null || totalInterest === null || totalPayment === null) return;

    generateCalculatorPDF({
      title: 'Student Loan Calculation Results',
      inputs: [
        { label: 'Loan Amount', value: principal },
        { label: 'Annual Interest Rate (%)', value: rate },
        { label: 'Repayment Term (years)', value: term },
      ],
      results: [
        { label: 'Monthly Payment', value: `$${monthlyPayment.toLocaleString()}` },
        { label: 'Total Interest', value: `$${totalInterest.toLocaleString()}` },
        { label: 'Total Payment', value: `$${totalPayment.toLocaleString()}` },
      ],
    });
  };

  const chartData = monthlyPayment !== null ? [
    { name: 'Principal', value: parseFloat(principal) },
    { name: 'Total Interest', value: totalInterest },
    { name: 'Total Payment', value: totalPayment },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="principal">Loan Amount</Label>
        <Input
          id="principal"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          min="0"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
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
          <Label htmlFor="term">Repayment Term (years)</Label>
          <Input
            id="term"
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            min="1"
          />
        </div>
      </div>
    </>
  );

  const results = monthlyPayment !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Calculation Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${monthlyPayment.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">per month</div>
    </div>
  ) : null;

  const charts = showCharts && monthlyPayment !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Student Loan Calculator"
      description="Calculate monthly payments, total interest, and payoff schedule for student loans."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
