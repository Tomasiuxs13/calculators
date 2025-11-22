'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ScheduleEntry = {
  month: number;
  payment: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
};

export default function AmortizationScheduleGenerator() {
  const [principal, setPrincipal] = useState<string>('200000');
  const [rate, setRate] = useState<string>('4.5');
  const [term, setTerm] = useState<string>('30');
  // Payment frequency (payments per year). Default monthly = 12.
  const [paymentsPerYear, setPaymentsPerYear] = useState<number>(12);

  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<ScheduleEntry[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const years = parseFloat(term);

    if (isNaN(P) || P <= 0 || isNaN(annualRate) || isNaN(years) || years <= 0) {
      setMonthlyPayment(null);
      setTotalInterest(null);
      setTotalPayment(null);
      setSchedule([]);
      return;
    }

    // Convert to per-period rate based on paymentsPerYear (e.g., monthly = 12)
    const r = annualRate / 100 / paymentsPerYear; // periodic interest rate
    const n = Math.round(years * paymentsPerYear); // total number of payments

    // If interest rate is 0, payment is simply principal / n
    let payment = 0;
    if (r === 0) {
      payment = P / n;
    } else {
      const factor = Math.pow(1 + r, n);
      payment = (P * r * factor) / (factor - 1);
    }

    // Generate amortization schedule
    const newSchedule: ScheduleEntry[] = [];
    let balance = P;
    let totalInterestAcc = 0;

    for (let i = 1; i <= n; i++) {
      const interestPayment = balance * r;
      const principalPayment = Math.min(payment - interestPayment, balance);
      balance = parseFloat((balance - principalPayment).toFixed(10));
      totalInterestAcc += interestPayment;

      newSchedule.push({
        month: i,
        payment: parseFloat(payment.toFixed(10)),
        principalPaid: parseFloat(principalPayment.toFixed(10)),
        interestPaid: parseFloat(interestPayment.toFixed(10)),
        balance: parseFloat(Math.max(balance, 0).toFixed(10)),
      });

      // Guard against rounding leaving a tiny negative balance
      if (balance <= 0) break;
    }

    const totalPaymentCalc = payment * newSchedule.length;

    setMonthlyPayment(parseFloat(payment.toFixed(2)));
    setTotalInterest(parseFloat(totalInterestAcc.toFixed(2)));
    setTotalPayment(parseFloat(totalPaymentCalc.toFixed(2)));
    setSchedule(newSchedule);
  }, [principal, rate, term, paymentsPerYear]);

  const handleDownloadPDF = () => {
    if (monthlyPayment === null || totalPayment === null || totalInterest === null) return;

    generateCalculatorPDF({
      title: 'Amortization Schedule',
      inputs: [
        { label: 'Loan Amount', value: `$${parseFloat(principal || '0').toLocaleString()}` },
        { label: 'Interest Rate (%)', value: `${rate}%` },
        { label: 'Loan Term (years)', value: `${term}` },
        { label: 'Payments Per Year', value: `${paymentsPerYear}` },
      ],
      results: [
        { label: 'Periodic Payment', value: `$${monthlyPayment.toLocaleString()}` },
        { label: 'Total Interest', value: `$${totalInterest.toLocaleString()}` },
        { label: 'Total Payment', value: `$${totalPayment.toLocaleString()}` },
      ],
      table: {
        headers: ['#', 'Payment', 'Principal', 'Interest', 'Balance'],
        rows: schedule.slice(0, 200).map((s) => ([
          s.month.toString(),
          `$${s.payment.toFixed(2)}`,
          `$${s.principalPaid.toFixed(2)}`,
          `$${s.interestPaid.toFixed(2)}`,
          `$${s.balance.toFixed(2)}`,
        ])),
      },
    });
  };

  // Chart: show balance at each year (aggregate every paymentsPerYear periods)
  const chartData = (() => {
    if (!schedule.length) return [] as { label: string; balance: number }[];
    const data: { label: string; balance: number }[] = [];
    for (let i = paymentsPerYear; i <= schedule[schedule.length - 1].month; i += paymentsPerYear) {
      const entry = schedule[i - 1];
      const year = Math.ceil(i / paymentsPerYear);
      data.push({ label: `Year ${year}`, balance: parseFloat(entry.balance.toFixed(2)) });
    }
    // ensure final balance point present
    const last = schedule[schedule.length - 1];
    if (!data.length || data[data.length - 1].label !== `Year ${Math.ceil(last.month / paymentsPerYear)}`) {
      data.push({ label: `End`, balance: parseFloat(last.balance.toFixed(2)) });
    }
    return data;
  })();

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
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="term">Loan Term (years)</Label>
        <Input
          id="term"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="freq">Payment Frequency</Label>
        <Select
          id="freq"
          value={paymentsPerYear.toString()}
          onChange={(e) => setPaymentsPerYear(parseInt(e.target.value, 10))}
        >
          <option value="12">Monthly (12)</option>
          <option value="6">Bi-Monthly (6)</option>
          <option value="4">Quarterly (4)</option>
          <option value="26">Biweekly (26)</option>
          <option value="52">Weekly (52)</option>
        </Select>
      </div>
    </>
  );

  const results = monthlyPayment !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Periodic Payment</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total Interest</div>
          <div className="text-xl font-semibold text-gray-900">${(totalInterest ?? 0).toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total Paid</div>
          <div className="text-xl font-semibold text-gray-900">${(totalPayment ?? 0).toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-4 text-left">
        <h4 className="text-lg font-semibold mb-2">Sample Schedule (first 12 payments)</h4>
        <div className="text-sm text-gray-700 overflow-auto max-h-56 border rounded-lg p-2 bg-white">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-600">
                <th className="pr-2">#</th>
                <th className="pr-2">Payment</th>
                <th className="pr-2">Principal</th>
                <th className="pr-2">Interest</th>
                <th className="pr-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.slice(0, 12).map((s) => (
                <tr key={s.month} className="border-t">
                  <td className="py-1">{s.month}</td>
                  <td className="py-1">${s.payment.toFixed(2)}</td>
                  <td className="py-1">${s.principalPaid.toFixed(2)}</td>
                  <td className="py-1">${s.interestPaid.toFixed(2)}</td>
                  <td className="py-1">${s.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Remaining Balance Over Time</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${(value || 0).toLocaleString()}`} />
          <Line type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={2} dot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Amortization Schedule Generator"
      description="Generate a complete amortization schedule for a loan, view periodic payments, total interest, and a visual balance decline over time."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
