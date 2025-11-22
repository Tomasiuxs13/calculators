'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PersonalLoanCalculator() {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('8.5');
  const [term, setTerm] = useState<string>('5');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [paymentSchedule, setPaymentSchedule] = useState<Array<{ month: number; payment: number; interest: number; balance: number; }>>([]);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const principalVal = parseFloat(principal);
    const rateVal = parseFloat(rate) / 100 / 12;
    const termVal = parseFloat(term) * 12;

    if (!isNaN(principalVal) && !isNaN(rateVal) && !isNaN(termVal) && principalVal > 0 && rateVal >= 0 && termVal > 0) {
      const monthly = principalVal * rateVal / (1 - Math.pow(1 + rateVal, -termVal));
      setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      const totalPay = monthly * termVal;
      setTotalPayment(parseFloat(totalPay.toFixed(2)));
      setTotalInterest(parseFloat((totalPay - principalVal).toFixed(2)));

      const schedule = [];
      let balance = principalVal;
      for (let month = 1; month <= termVal; month++) {
        const interest = balance * rateVal;
        const payment = monthly - interest;
        balance -= payment;
        schedule.push({ month, payment: parseFloat(payment.toFixed(2)), interest: parseFloat(interest.toFixed(2)), balance: parseFloat(balance.toFixed(2)) });
      }
      setPaymentSchedule(schedule);
    } else {
      setMonthlyPayment(null);
      setTotalInterest(null);
      setTotalPayment(null);
      setPaymentSchedule([]);
    }
  }, [principal, rate, term]);

  const handleDownloadPDF = () => {
    if (monthlyPayment === null || totalInterest === null || totalPayment === null) return;

    generateCalculatorPDF({
      title: 'Personal Loan Calculator Results',
      inputs: [
        { label: 'Loan Amount', value: principal },
        { label: 'Annual Interest Rate (%)', value: rate },
        { label: 'Loan Term (years)', value: term },
      ],
      results: [
        { label: 'Monthly Payment', value: `${monthlyPayment}` },
        { label: 'Total Interest', value: `${totalInterest}` },
        { label: 'Total Payment', value: `${totalPayment}` },
      ],
    });
  };

  const chartData = paymentSchedule.map((item, index) => ({
    name: `Month ${index + 1}`,
    Payment: item.payment,
    Interest: item.interest,
    Balance: item.balance,
  }));

  return (
    <CalculatorLayout
      title="Personal Loan Calculator"
      description="Calculate monthly payments, total interest, and payment schedule for personal loans."
      inputs={(
        <>
          <Label htmlFor="principal">Loan Amount</Label>
          <Input id="principal" type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
          <Label htmlFor="rate">Annual Interest Rate (%)</Label>
          <Input id="rate" type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
          <Label htmlFor="term">Loan Term (years)</Label>
          <Input id="term" type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
        </>
      )}
      results={(
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Monthly Payment</div>
          <div className="text-5xl font-bold text-blue-900 my-3">
            {monthlyPayment?.toLocaleString()}
          </div>
          <div className="text-lg text-gray-700">Total Interest: {totalInterest?.toLocaleString()}</div>
          <div className="text-lg text-gray-700">Total Payment: {totalPayment?.toLocaleString()}</div>
        </div>
      )}
      charts={showCharts && monthlyPayment !== null ? (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Payment" fill="#8884d8" />
              <Bar dataKey="Interest" fill="#82ca9d" />
              <Bar dataKey="Balance" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : null}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
