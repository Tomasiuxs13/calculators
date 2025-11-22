'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type OvulationResult = {
  ovulationDate: string; // ISO date string
  fertileStart: string; // ISO date string
  fertileEnd: string; // ISO date string
  nextPeriodDate: string; // ISO date string
  cycleLength: number;
};

export default function OvulationCalculator() {
  // Default to today's date so results show immediately on load
  const today = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const isoToday = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  const [lastPeriod, setLastPeriod] = useState<string>(isoToday);
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [result, setResult] = useState<OvulationResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  const toDisplay = (date: Date) => date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  const toISO = (date: Date) => {
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    return `${y}-${m}-${d}`;
  };

  useEffect(() => {
    // Auto-calculate whenever inputs change
    if (!lastPeriod) {
      setResult(null);
      return;
    }

    const parsedCycle = parseInt(cycleLength, 10);
    if (isNaN(parsedCycle) || parsedCycle <= 0) {
      setResult(null);
      return;
    }

    // Parse date safely by forcing midnight to avoid timezone offset issues
    const parsedDate = new Date(`${lastPeriod}T00:00:00`);
    if (isNaN(parsedDate.getTime())) {
      setResult(null);
      return;
    }

    // Ovulation typically occurs ~14 days before next period
    const ovulationOffset = parsedCycle - 14; // days after first day of period
    const ovulationDate = addDays(parsedDate, ovulationOffset);

    // Fertile window: 5 days before ovulation through 1 day after ovulation (common clinical range)
    const fertileStart = addDays(ovulationDate, -5);
    const fertileEnd = addDays(ovulationDate, 1);

    const nextPeriodDate = addDays(parsedDate, parsedCycle);

    setResult({
      ovulationDate: toISO(ovulationDate),
      fertileStart: toISO(fertileStart),
      fertileEnd: toISO(fertileEnd),
      nextPeriodDate: toISO(nextPeriodDate),
      cycleLength: parsedCycle,
    });
  }, [lastPeriod, cycleLength]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Ovulation Calculator Results',
      inputs: [
        { label: 'First Day of Last Period', value: lastPeriod },
        { label: 'Average Cycle Length (days)', value: cycleLength },
      ],
      results: [
        { label: 'Estimated Ovulation Date', value: `${toDisplay(new Date(result.ovulationDate))}` },
        { label: 'Fertile Window', value: `${toDisplay(new Date(result.fertileStart))} – ${toDisplay(new Date(result.fertileEnd))}` },
        { label: 'Estimated Next Period', value: `${toDisplay(new Date(result.nextPeriodDate))}` },
      ],
    });
  };

  const fertileDaysCount = result
    ? (Math.round((new Date(result.fertileEnd).getTime() - new Date(result.fertileStart).getTime()) / (24 * 60 * 60 * 1000)) + 1)
    : 0;

  const chartData = result
    ? [
        { label: 'Fertile Window', days: fertileDaysCount, color: '#f97316' },
        { label: 'Ovulation', days: 1, color: '#ef4444' },
        { label: 'Other Cycle Days', days: Math.max(0, result.cycleLength - fertileDaysCount - 1), color: '#3b82f6' },
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
        <Label htmlFor="cycleLength">Average Cycle Length (days)</Label>
        <Input
          id="cycleLength"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          min="21"
          max="40"
          step="1"
        />
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Ovulation</div>
      <div className="text-3xl font-bold text-blue-900 my-2">{toDisplay(new Date(result.ovulationDate))}</div>

      <div className="text-sm text-gray-600 mt-3">Fertile Window</div>
      <div className="text-lg text-gray-700">{toDisplay(new Date(result.fertileStart))} – {toDisplay(new Date(result.fertileEnd))}</div>

      <div className="text-sm text-gray-600 mt-3">Estimated Next Period</div>
      <div className="text-lg text-gray-700">{toDisplay(new Date(result.nextPeriodDate))}</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter your last period date and average cycle length to see results.</div>
  );

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cycle Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            // Provide a helpful tooltip showing count of days and for fertile window show dates
            const entry = props && props.payload ? props.payload[0] : null;
            if (!entry) return `${value} days`;
            if (entry.payload.label === 'Fertile Window') {
              return [`${value} days`, `${toDisplay(new Date(result.fertileStart))} – ${toDisplay(new Date(result.fertileEnd))}`];
            }
            if (entry.payload.label === 'Ovulation') {
              return [`${value} day`, `${toDisplay(new Date(result.ovulationDate))}`];
            }
            return [`${value} days`, 'Other'];
          }} />
          <Bar dataKey="days" isAnimationActive={false} fill="#3b82f6">
            {/* We will not map custom colors per bar here to keep code simple; color emphasis is handled via Tooltip and labels */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Ovulation Calculator"
      description="Calculate ovulation dates and your fertile window based on the first day of your last period and your average cycle length."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
