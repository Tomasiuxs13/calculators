'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function AutoLoanCalculator() {
  const [currency, setCurrency] = useState('$');
  const [principal, setPrincipal] = useState('25000');
  const [rate, setRate] = useState('4.5');
  const [term, setTerm] = useState('5');
  const [downPayment, setDownPayment] = useState('5000');
  const [result, setResult] = useState<{
    monthlyPayment: string;
    totalPayment: string;
    totalInterest: string;
    loanAmount: string;
  } | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const price = parseFloat(principal);
    const down = parseFloat(downPayment);
    const loanAmount = price - down;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (loanAmount > 0 && r > 0 && n > 0) {
      const monthly = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = monthly * n;
      const interest = total - loanAmount;

      setResult({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: total.toFixed(2),
        totalInterest: interest.toFixed(2),
        loanAmount: loanAmount.toFixed(2),
      });
    } else if (loanAmount > 0 && n > 0 && parseFloat(rate) === 0) {
      const monthly = loanAmount / n;
      setResult({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: loanAmount.toFixed(2),
        totalInterest: '0.00',
        loanAmount: loanAmount.toFixed(2),
      });
    } else {
      setResult(null);
    }
  }, [principal, rate, term, downPayment]);

  const handleDownloadPDF = () => {
    if (!result) return;
    generateCalculatorPDF({
      title: 'Auto Loan Calculator Results',
      inputs: [
        { label: 'Currency', value: currency },
        { label: 'Vehicle Price', value: `${currency}${parseFloat(principal).toLocaleString()}` },
        { label: 'Down Payment', value: `${currency}${parseFloat(downPayment).toLocaleString()}` },
        { label: 'Loan Amount', value: `${currency}${result.loanAmount}` },
        { label: 'Annual Interest Rate', value: `${rate}%` },
        { label: 'Loan Term', value: `${term} years` },
      ],
      results: [
        { label: 'Monthly Payment', value: `${currency}${result.monthlyPayment}` },
        { label: 'Total Payment', value: `${currency}${result.totalPayment}` },
        { label: 'Total Interest', value: `${currency}${result.totalInterest}` },
      ],
    });
  };

  const paymentBreakdownData = result ? [
    { name: 'Principal', value: parseFloat(result.loanAmount), color: '#3b82f6' },
    { name: 'Interest', value: parseFloat(result.totalInterest), color: '#ef4444' },
  ] : [];

  const amortizationData = result ? (() => {
    const loanAmount = parseFloat(result.loanAmount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    const monthly = parseFloat(result.monthlyPayment);
    const data = [];
    let balance = loanAmount;
    for (let i = 1; i <= Math.min(12, n); i++) {
      const interest = balance * r;
      const principal = monthly - interest;
      balance -= principal;
      data.push({ month: i, principal, interest, balance: Math.max(0, balance) });
    }
    return data;
  })() : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currency">Currency</Label>
        <Select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="$">USD ($)</option>
          <option value="€">EUR (€)</option>
          <option value="£">GBP (£)</option>
          <option value="¥">JPY (¥)</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="principal">Vehicle Price</Label>
        <Input id="principal" type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} min="0" step="100" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="downPayment">Down Payment</Label>
        <Input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} min="0" step="100" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input id="rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} min="0" max="100" step="0.1" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="term">Loan Term (years)</Label>
        <Input id="term" type="number" value={term} onChange={(e) => setTerm(e.target.value)} min="1" max="10" step="1" />
      </div>
    </>
  );

  const results = result ? (
    <div className="space-y-4">
      <div className="text-center pb-4 border-b border-blue-200">
        <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
        <div className="text-4xl font-bold text-blue-900">{currency}{parseFloat(result.monthlyPayment).toLocaleString()}</div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Loan Amount</span>
          <span className="font-semibold text-gray-900">{currency}{parseFloat(result.loanAmount).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Total Interest</span>
          <span className="font-semibold text-red-600">{currency}{parseFloat(result.totalInterest).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Total Payment</span>
          <span className="font-semibold text-gray-900">{currency}{parseFloat(result.totalPayment).toLocaleString()}</span>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <>
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={paymentBreakdownData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={(entry) => `${entry.name}: ${currency}${Number(entry.value).toLocaleString()}`}>
              {paymentBreakdownData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            <Tooltip formatter={(value: number) => `${currency}${Number(value).toFixed(2)}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">Amortization Schedule (First Year)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={amortizationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${currency}${Number(value).toFixed(2)}`} />
            <Line type="monotone" dataKey="principal" stroke="#3b82f6" name="Principal" />
            <Line type="monotone" dataKey="interest" stroke="#ef4444" name="Interest" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  ) : null;

  return (
    <CalculatorLayout
      title="Auto Loan Calculator"
      description="Calculate monthly payments, total interest, and payment schedule for your auto loan."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

