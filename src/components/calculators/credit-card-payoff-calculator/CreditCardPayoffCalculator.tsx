'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState<string>('5000');
  const [rate, setRate] = useState<string>('18.0');
  const [payment, setPayment] = useState<string>('200');
  const [months, setMonths] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  useEffect(() => {
    const b = parseFloat(balance);
    const r = parseFloat(rate) / 100 / 12;
    const p = parseFloat(payment);

    if (!isNaN(b) && !isNaN(r) && !isNaN(p) && b > 0 && r > 0 && p > 0) {
      const x = Math.log(p) - Math.log(p - b * r);
      const y = Math.log(1 + r);
      const calculatedMonths = Math.ceil(x / y);
      const calculatedInterest = p * calculatedMonths - b;

      setMonths(calculatedMonths);
      setTotalInterest(calculatedInterest);
    } else {
      setMonths(null);
      setTotalInterest(null);
    }
  }, [balance, rate, payment]);

  const handleDownloadPDF = () => {
    if (months === null || totalInterest === null) return;

    generateCalculatorPDF({
      title: 'Credit Card Payoff Results',
      inputs: [
        { label: 'Current Balance', value: balance },
        { label: 'Annual Interest Rate (%)', value: rate },
        { label: 'Monthly Payment', value: payment },
      ],
      results: [
        { label: 'Months to Pay Off', value: `${months} months` },
        { label: 'Total Interest Paid', value: `$${totalInterest.toFixed(2)}` },
      ],
    });
  };

  const chartData = [
    { name: 'Principal', value: parseFloat(balance) || 0 },
    { name: 'Total Interest', value: totalInterest || 0 },
  ];

  const COLORS = ['#0088FE', '#FFBB28'];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="balance">Current Balance</Label>
        <Input
          id="balance"
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Annual Interest Rate (%)</Label>
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
        <Label htmlFor="payment">Monthly Payment</Label>
        <Input
          id="payment"
          type="number"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          min="0"
        />
      </div>
    </>
  );

  const results = months !== null && totalInterest !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {months} months
      </div>
      <div className="text-lg text-gray-700">
        Total Interest: ${totalInterest.toFixed(2)}
      </div>
    </div>
  ) : null;

  const charts = (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <CalculatorLayout>
      <h2 className="text-2xl font-semibold mb-4">Credit Card Payoff Calculator</h2>
      {inputs}
      <button onClick={handleDownloadPDF} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Download PDF
      </button>
      {results}
      {charts}
    </CalculatorLayout>
  );
}
