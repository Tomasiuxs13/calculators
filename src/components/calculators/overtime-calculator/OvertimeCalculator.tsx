'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableNumber = number | null;

export default function OvertimeCalculator() {
  const [regularHours, setRegularHours] = useState<string>('40');
  const [overtimeHours, setOvertimeHours] = useState<string>('5');
  const [hourlyRate, setHourlyRate] = useState<string>('25');
  const [overtimeMultiplier, setOvertimeMultiplier] = useState<string>('1.5');

  const [regularPay, setRegularPay] = useState<NullableNumber>(null);
  const [overtimePay, setOvertimePay] = useState<NullableNumber>(null);
  const [totalPay, setTotalPay] = useState<NullableNumber>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const rH = parseFloat(regularHours);
    const oH = parseFloat(overtimeHours);
    const rate = parseFloat(hourlyRate);
    const mult = parseFloat(overtimeMultiplier);

    if (
      !isNaN(rH) && rH >= 0 &&
      !isNaN(oH) && oH >= 0 &&
      !isNaN(rate) && rate >= 0 &&
      !isNaN(mult) && mult >= 0
    ) {
      const regPay = rH * rate;
      const otPay = oH * rate * mult;
      const totPay = regPay + otPay;

      setRegularPay(parseFloat(regPay.toFixed(2)));
      setOvertimePay(parseFloat(otPay.toFixed(2)));
      setTotalPay(parseFloat(totPay.toFixed(2)));
    } else {
      setRegularPay(null);
      setOvertimePay(null);
      setTotalPay(null);
    }
  }, [regularHours, overtimeHours, hourlyRate, overtimeMultiplier]);

  const handleDownloadPDF = () => {
    if (totalPay === null || regularPay === null || overtimePay === null) return;

    generateCalculatorPDF({
      title: 'Overtime Pay Calculator Results',
      inputs: [
        { label: 'Regular Hours', value: regularHours },
        { label: 'Overtime Hours', value: overtimeHours },
        { label: 'Hourly Rate', value: `$${hourlyRate}` },
        { label: 'Overtime Multiplier', value: overtimeMultiplier },
      ],
      results: [
        { label: 'Regular Pay', value: `$${regularPay.toFixed(2)}` },
        { label: 'Overtime Pay', value: `$${overtimePay.toFixed(2)}` },
        { label: 'Total Pay', value: `$${totalPay.toFixed(2)}` },
      ],
    });
  };

  const chartData = totalPay !== null && regularPay !== null && overtimePay !== null ? [
    { label: 'Regular Pay', value: regularPay },
    { label: 'Overtime Pay', value: overtimePay },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="regularHours">Regular Hours</Label>
          <Input
            id="regularHours"
            type="number"
            value={regularHours}
            onChange={(e) => setRegularHours(e.target.value)}
            min="0"
            step="0.25"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="overtimeHours">Overtime Hours</Label>
          <Input
            id="overtimeHours"
            type="number"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
            min="0"
            step="0.25"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Hourly Rate</Label>
          <Input
            id="hourlyRate"
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="overtimeMultiplier">Overtime Multiplier</Label>
          <Input
            id="overtimeMultiplier"
            type="number"
            value={overtimeMultiplier}
            onChange={(e) => setOvertimeMultiplier(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm text-gray-600">Note</div>
        <div className="text-xs text-gray-500 mt-1">Regular pay is computed as Regular Hours × Hourly Rate. Overtime pay is Overtime Hours × Hourly Rate × Overtime Multiplier. Results update automatically when inputs change.</div>
      </div>
    </>
  );

  const results = totalPay !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Total Overtime Pay</div>
      <div className="text-5xl font-bold text-blue-900 my-3">${totalPay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Regular Pay</div>
          <div className="text-xl font-semibold mt-2">${regularPay!.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600">Overtime Pay</div>
          <div className="text-xl font-semibold mt-2">${overtimePay!.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && totalPay !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Pay Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
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
      title="Overtime Calculator"
      description="Calculate overtime pay based on hours worked."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
