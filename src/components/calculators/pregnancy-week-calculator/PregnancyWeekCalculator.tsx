'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type PregnancyResult = {
  weeks: number;
  days: number;
  trimester: 'First' | 'Second' | 'Third';
  estimatedDueDate: string;
  totalDays: number;
  progressWeeks: number;
};

function formatDateISO(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function PregnancyWeekCalculator() {
  const today = new Date();
  const defaultCurrent = formatDateISO(today);
  const eightWeeksAgo = new Date(today.getTime() - 8 * 7 * 24 * 60 * 60 * 1000);
  const defaultLastPeriod = formatDateISO(eightWeeksAgo);

  const [lastPeriod, setLastPeriod] = useState<string>(defaultLastPeriod);
  const [currentDate, setCurrentDate] = useState<string>(defaultCurrent);
  const [result, setResult] = useState<PregnancyResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const lp = new Date(lastPeriod + 'T00:00:00');
    const cur = new Date(currentDate + 'T00:00:00');

    // validate dates
    if (isNaN(lp.getTime()) || isNaN(cur.getTime())) {
      setResult(null);
      return;
    }

    // calculate difference in days
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs = cur.getTime() - lp.getTime();
    const totalDays = Math.floor(diffMs / msPerDay);

    if (totalDays < 0) {
      setResult(null);
      return;
    }

    const weeksCompleted = Math.floor(totalDays / 7) + 1;
    const daysIntoWeek = totalDays % 7;

    let trimester: PregnancyResult['trimester'] = 'First';
    if (weeksCompleted >= 14 && weeksCompleted <= 27) {
      trimester = 'Second';
    } else if (weeksCompleted >= 28) {
      trimester = 'Third';
    }

    const dueDate = new Date(lp.getTime() + 280 * msPerDay);
    const estimatedDueDate = formatDateISO(dueDate);
    const progressWeeks = parseFloat((totalDays / 7).toFixed(2));

    setResult({
      weeks: weeksCompleted,
      days: daysIntoWeek,
      trimester,
      estimatedDueDate,
      totalDays,
      progressWeeks,
    });
  }, [lastPeriod, currentDate]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Pregnancy Week Calculator Results',
      inputs: [
        { label: 'First Day of Last Period', value: lastPeriod },
        { label: 'Current Date', value: currentDate },
      ],
      results: [
        { label: 'Gestational Age', value: `${result.weeks} weeks ${result.days} days` },
        { label: 'Trimester', value: `${result.trimester} trimester` },
        { label: 'Estimated Due Date', value: result.estimatedDueDate },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Elapsed (weeks)', value: Number(result.progressWeeks.toFixed(2)) },
        { label: 'Remaining (weeks)', value: Number(Math.max(0, 40 - result.progressWeeks).toFixed(2)) },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="lastPeriod">First Day of Last Period</Label>
        <Input
          id="lastPeriod"
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
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
      <button onClick={handleDownloadPDF} className="btn">
        Download PDF
      </button>
    </>
  );

  return (
    <CalculatorLayout title="Pregnancy Week Calculator" category="health">
      {inputs}
      {result && (
        <div className="results">
          <h2>Results</h2>
          <p>Gestational Age: {result.weeks} weeks {result.days} days</p>
          <p>Trimester: {result.trimester} trimester</p>
          <p>Estimated Due Date: {result.estimatedDueDate}</p>
          {showCharts && (
            <ResponsiveContainer width="100%" height={400}>
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
      <button onClick={() => setShowCharts(prev => !prev)} className="btn">
        Toggle Charts
      </button>
    </CalculatorLayout>
  );
}
