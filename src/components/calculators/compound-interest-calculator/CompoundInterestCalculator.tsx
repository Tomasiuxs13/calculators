'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CompoundingFrequency = 'daily' | 'monthly' | 'quarterly' | 'annually';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('5.0');
  const [time, setTime] = useState<string>('10');
  const [compounding, setCompounding] = useState<CompoundingFrequency>('monthly');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    let n = 0;

    if (isNaN(p) || isNaN(r) || isNaN(t) || t < 0) {
      setResult(null);
      return;
    }

    switch (compounding) {
      case 'daily':
        n = 365;
        break;
      case 'monthly':
        n = 12;
        break;
      case 'quarterly':
        n = 4;
        break;
      case 'annually':
        n = 1;
        break;
    }
    
    const compoundInterest = p * (Math.pow((1 + r / n), n * t)) - p;
    setResult(parseFloat(compoundInterest.toFixed(2)));
  }, [principal, rate, time, compounding]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Compound Interest Results',
      inputs: [
        { label: 'Initial Amount', value: principal },
        { label: 'Annual Interest Rate (%)', value: rate },
        { label: 'Time Period (years)', value: time },
        { label: 'Compounding Frequency', value: compounding },
      ],
      results: [
        { label: 'Compound Interest', value: `${result.toLocaleString()} (after ${time} years)` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Principal', value: parseFloat(principal) || 0 },
    { name: 'Total', value: parseFloat(principal) + result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="principal">Initial Amount</Label>
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
          <Label htmlFor="time">Time Period (years)</Label>
          <Input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="compounding">Compounding Frequency</Label>
        <Select
          id="compounding"
          value={compounding}
          onChange={(e) => setCompounding(e.target.value as CompoundingFrequency)}
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Compound Interest</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">after {time} years</div>
    </div>
  ) : null;

  const charts = result !== null ? (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  ) : null;

  return (
    <CalculatorLayout title="Compound Interest Calculator" category="finance">
      {inputs}
      {results}
      {charts}
      <div className="text-center mt-4">
        <button onClick={handleDownloadPDF} className="btn">Download PDF</button>
      </div>
    </CalculatorLayout>
  );
}
