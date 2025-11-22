'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TimeRemaining = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function endOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

function formatTwo(n: number) {
  return n.toString().padStart(2, '0');
}

export default function CountdownTimerCalculator() {
  // Default values: show an immediate result on load
  const today = new Date();
  const defaultCurrentDate = today.toISOString().slice(0, 10); // YYYY-MM-DD
  // Default target: 7 days from now
  const defaultTarget = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const [targetDate, setTargetDate] = useState<string>(defaultTarget);
  const [currentDate, setCurrentDate] = useState<string>(defaultCurrentDate);
  const [result, setResult] = useState<TimeRemaining | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse dates from inputs
    if (!targetDate || !currentDate) {
      setResult(null);
      return;
    }

    try {
      const parsedCurrent = new Date(currentDate);
      const parsedTarget = new Date(targetDate);

      // Validate parsed dates
      if (isNaN(parsedCurrent.getTime()) || isNaN(parsedTarget.getTime())) {
        setResult(null);
        return;
      }

      // For usability, treat currentDate as the current time if it's today; otherwise start of day
      const now = new Date();
      let current: Date;
      const currentIsToday = parsedCurrent.getFullYear() === now.getFullYear() && parsedCurrent.getMonth() === now.getMonth() && parsedCurrent.getDate() === now.getDate();
      if (currentIsToday) {
        current = now;
      } else {
        current = startOfDay(parsedCurrent);
      }

      // Treat target date as end of day so the whole day counts
      const target = endOfDay(parsedTarget);

      const totalMs = target.getTime() - current.getTime();
      const expired = totalMs < 0;
      const absMs = Math.abs(totalMs);

      // Compute days/hours/minutes/seconds
      const days = Math.floor(absMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor((absMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((absMs % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((absMs % (60 * 1000)) / 1000);

      setResult({
        totalMs,
        days,
        hours,
        minutes,
        seconds,
        expired,
      });
    } catch (e) {
      setResult(null);
    }
  }, [targetDate, currentDate]);

  useEffect(() => {
    // Set results immediately on load for default values
    if (!result && targetDate && currentDate) {
      const now = new Date();
      const target = endOfDay(new Date(targetDate));
      const totalMs = target.getTime() - now.getTime();
      const expired = totalMs < 0;
      const absMs = Math.abs(totalMs);

      if (totalMs >= 0) {
        const days = Math.floor(absMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((absMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((absMs % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absMs % (60 * 1000)) / 1000);
        setResult({
          totalMs,
          days,
          hours,
          minutes,
          seconds,
          expired,
        });
      } else {
        setResult({
          totalMs,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
      }
    }
  }, [result, targetDate, currentDate]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Countdown Timer Results',
      inputs: [
        { label: 'Target Date', value: targetDate },
        { label: 'Current Date', value: currentDate },
      ],
      results: [
        { label: result.expired ? 'Time Since Target' : 'Time Remaining', value: `${result.days} days, ${formatTwo(result.hours)}:${formatTwo(result.minutes)}:${formatTwo(result.seconds)}` },
      ],
    });
  };

  const chartData = result ? [
    { label: 'Days', value: result.days },
    { label: 'Hours', value: result.hours },
    { label: 'Minutes', value: result.minutes },
    { label: 'Seconds', value: result.seconds },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="targetDate">Target Date</Label>
        <Input
          id="targetDate"
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
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
    <CalculatorLayout title="Countdown Timer" category="everyday-life">
      {inputs}
      {result && (
        <div>
          <h2>
            {result.expired ? 'Time Since Target' : 'Time Remaining'}: {result.days} days, {formatTwo(result.hours)}:{formatTwo(result.minutes)}:{formatTwo(result.seconds)}
          </h2>
          <button onClick={handleDownloadPDF}>Download PDF</button>
          {showCharts && (
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
        </div>
      )}
    </CalculatorLayout>
  );
}
