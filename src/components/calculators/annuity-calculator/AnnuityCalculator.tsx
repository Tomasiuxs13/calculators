'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function AnnuityCalculator() {
  const [payment, setPayment] = useState<string>('1000');
  const [rate, setRate] = useState<string>('5.0');
  const [years, setYears] = useState<string>('20');
  const [paymentType, setPaymentType] = useState<'ordinary' | 'due'>('ordinary');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const paymentAmount = parseFloat(payment);
    const interestRate = parseFloat(rate) / 100;
    const numberOfYears = parseInt(years);

    if (!isNaN(paymentAmount) && !isNaN(interestRate) && !isNaN(numberOfYears) && paymentAmount >= 0 && numberOfYears > 0) {
      let futureValue = 0;
      if (paymentType === 'ordinary') {
        futureValue = paymentAmount * ((Math.pow(1 + interestRate, numberOfYears) - 1) / interestRate);
      } else {
        futureValue = paymentAmount * ((Math.pow(1 + interestRate, numberOfYears) - 1) / interestRate) * (1 + interestRate);
      }
      setResult(parseFloat(futureValue.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [payment, rate, years, paymentType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Annuity Calculator Results',
      inputs: [
        { label: 'Payment Amount', value: payment },
        { label: 'Interest Rate (%)', value: rate },
        { label: 'Number of Years', value: years },
        { label: 'Payment Type', value: paymentType },
      ],
      results: [
        { label: 'Future Value', value: `${result}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="payment">Payment Amount</Label>
        <Input
          id="payment"
          type="number"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          min="0"
          step="0.01"
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
        <Label htmlFor="years">Number of Years</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="paymentType">Payment Type</Label>
        <Select
          id="paymentType"
          value={paymentType}
          onChange={(e) => setPaymentType(e.target.value as 'ordinary' | 'due')}
        >
          <option value="ordinary">Ordinary Annuity (end of period)</option>
          <option value="due">Annuity Due (beginning of period)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Future Value</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Annuity Calculator"
      description="Calculate annuity payments, present value, or future value of annuities."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
