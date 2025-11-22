'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function LoanCalculator() {
  const [currency, setCurrency] = useState('$');
  const [principal, setPrincipal] = useState('100000');
  const [rate, setRate] = useState('5.5');
  const [term, setTerm] = useState('30');
  const [result, setResult] = useState<{
    monthlyPayment: string;
    totalPayment: string;
    totalInterest: string;
  } | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (p > 0 && r > 0 && n > 0) {
      // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
      const monthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = monthly * n;
      const interest = total - p;

      setResult({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: total.toFixed(2),
        totalInterest: interest.toFixed(2),
      });
    } else if (p > 0 && n > 0 && parseFloat(rate) === 0) {
      // 0% interest case
      const monthly = p / n;
      setResult({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: p.toFixed(2),
        totalInterest: '0.00',
      });
    } else {
      setResult(null);
    }
  }, [principal, rate, term]);

  const handleDownloadPDF = () => {
    if (!result) return;

    const inputs = [
      { label: 'Currency', value: currency },
      { label: 'Loan Amount', value: `${currency}${parseFloat(principal).toLocaleString()}` },
      { label: 'Annual Interest Rate', value: `${rate}%` },
      { label: 'Loan Term', value: `${term} years` },
    ];

    const results = [
      { label: 'Monthly Payment', value: `${currency}${result.monthlyPayment}` },
      { label: 'Total Payment', value: `${currency}${result.totalPayment}` },
      { label: 'Total Interest', value: `${currency}${result.totalInterest}` },
    ];

    generateCalculatorPDF({
      title: 'Loan Calculator Results',
      inputs,
      results,
    });
  };

  // Amortization schedule data (first 12 months)
  const amortizationData = result ? (() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    const monthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const data = [];
    let balance = p;

    for (let month = 1; month <= Math.min(12, n); month++) {
      const interest = balance * r;
      const principalPayment = monthly - interest;
      balance -= principalPayment;
      data.push({
        month: `Month ${month}`,
        principal: parseFloat(principalPayment.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
      });
    }
    return data;
  })() : [];

  // Payment breakdown pie chart data
  const paymentBreakdown = result ? [
    { name: 'Principal', value: parseFloat(principal), color: '#3b82f6' },
    { name: 'Interest', value: parseFloat(result.totalInterest), color: '#ef4444' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label>Currency</Label>
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="$">USD ($)</option>
          <option value="€">EUR (€)</option>
          <option value="£">GBP (£)</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="principal">Loan Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-500">{currency}</span>
          <Input
            id="principal"
            type="number"
            placeholder="10000"
            className="pl-8"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
        <Input
          id="rate"
          type="number"
          step="0.1"
          placeholder="5.5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="term">Loan Term (Years)</Label>
        <Input
          id="term"
          type="number"
          placeholder="5"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
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
          <span className="text-sm text-gray-700">Total Payment</span>
          <span className="font-semibold text-gray-900">{currency}{parseFloat(result.totalPayment).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Total Interest</span>
          <span className="font-semibold text-red-600">{currency}{parseFloat(result.totalInterest).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">Principal</span>
          <span className="font-semibold text-gray-900">{currency}{parseFloat(principal).toLocaleString()}</span>
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
            <Pie
              data={paymentBreakdown}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => percent ? `${name}: ${(percent * 100).toFixed(0)}%` : name}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {paymentBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${currency}${typeof value === 'number' ? value.toLocaleString() : value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {amortizationData.length > 0 && (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">Amortization Schedule (First 12 Months)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={amortizationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip formatter={(value) => `${currency}${typeof value === 'number' ? value.toFixed(2) : value}`} />
              <Legend />
              <Line type="monotone" dataKey="principal" stroke="#3b82f6" name="Principal" />
              <Line type="monotone" dataKey="interest" stroke="#ef4444" name="Interest" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  ) : null;

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Estimate your monthly loan payments"
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
