'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function HomeEquityLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('50000');
  const [rate, setRate] = useState<string>('6.0');
  const [term, setTerm] = useState<string>('15');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const principal = parseFloat(loanAmount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(term) * 12;

    if (!isNaN(principal) && !isNaN(interestRate) && !isNaN(numberOfPayments) && principal > 0 && interestRate > 0) {
      const monthly = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -numberOfPayments));
      const total = monthly * numberOfPayments;
      const interest = total - principal;
      setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      setTotalInterest(parseFloat(interest.toFixed(2)));
    } else {
      setMonthlyPayment(null);
      setTotalInterest(null);
    }
  }, [loanAmount, rate, term]);

  const handleDownloadPDF = () => {
    if (monthlyPayment === null || totalInterest === null) return;

    generateCalculatorPDF({
      title: 'Home Equity Loan Calculator Results',
      inputs: [
        { label: 'Loan Amount', value: loanAmount },
        { label: 'Interest Rate', value: rate },
        { label: 'Loan Term', value: term },
      ],
      results: [
        { label: 'Monthly Payment', value: `$${monthlyPayment}` },
        { label: 'Total Interest', value: `$${totalInterest}` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="loanAmount">Loan Amount</Label>
        <Input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="term">Loan Term (years)</Label>
        <Input
          id="term"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = monthlyPayment !== null && totalInterest !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Monthly Payment: ${monthlyPayment}
      </div>
      <div className="text-lg text-gray-700">Total Interest: ${totalInterest}</div>
    </div>
  ) : null;

  const chartData = monthlyPayment !== null && totalInterest !== null ? [
    { label: 'Monthly Payment', value: monthlyPayment },
    { label: 'Total Interest', value: totalInterest },
  ] : [];

  const charts = showCharts && monthlyPayment !== null && totalInterest !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Loan Payment Comparison</h3>
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
      title="Home Equity Loan Calculator"
      description="Calculate monthly payments and interest for a home equity loan."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
