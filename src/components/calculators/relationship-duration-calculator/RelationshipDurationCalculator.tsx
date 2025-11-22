'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DurationResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  negative: boolean;
};

function daysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function computeDuration(startDate: Date, endDate: Date): DurationResult | null {
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return null;

  let negative = false;
  let start = new Date(startDate);
  let end = new Date(endDate);

  if (start.getTime() > end.getTime()) {
    negative = true;
    const tmp = start;
    start = end;
    end = tmp;
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = (end.getMonth() - 1 + 12) % 12;
    const prevMonthYear = prevMonth === 11 ? end.getFullYear() - 1 : end.getFullYear();
    days += daysInMonth(prevMonthYear, prevMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
    negative,
  };
}

export default function RelationshipDurationCalculator() {
  const today = new Date();
  const isoToday = today.toISOString().slice(0, 10);
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const isoOneYearAgo = oneYearAgo.toISOString().slice(0, 10);

  const [startDate, setStartDate] = useState<string>(isoOneYearAgo);
  const [currentDate, setCurrentDate] = useState<string>(isoToday);
  const [result, setResult] = useState<DurationResult | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const s = startDate ? new Date(startDate + 'T00:00:00') : new Date();
    const c = currentDate ? new Date(currentDate + 'T00:00:00') : new Date();

    const computed = computeDuration(s, c);
    setResult(computed);
  }, [startDate, currentDate]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Relationship Duration Results',
      inputs: [
        { label: 'Relationship Start Date', value: startDate || '—' },
        { label: 'Current Date', value: currentDate || '—' },
      ],
      results: [
        {
          label: 'Duration',
          value: result.negative
            ? `Start date is after current date` 
            : `${result.years} years, ${result.months} months, ${result.days} days`,
        },
        { label: 'Total Days', value: result.totalDays.toString() },
      ],
    });
  };

  const chartData = result && !result.negative ? [
    { label: 'Years', value: parseFloat((result.years + result.months / 12 + result.days / 365).toFixed(2)) },
    { label: 'Months', value: parseFloat((result.months + result.days / 30).toFixed(2)) },
    { label: 'Days', value: result.totalDays },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="startDate">Relationship Start Date</Label>
        <Input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentDate">Current Date</Label>
        <Input
          id="currentDate"
          type="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
        />
      </div>
    </>
  );

  return (
    <CalculatorLayout>
      <h1>Relationship Duration Calculator</h1>
      {inputs}
      <button onClick={handleDownloadPDF}>Download PDF</button>
      {showCharts && result && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </CalculatorLayout>
  );
}
