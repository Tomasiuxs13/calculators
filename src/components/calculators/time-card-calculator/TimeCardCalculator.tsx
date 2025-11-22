'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function TimeCardCalculator() {
  const [clockIn, setClockIn] = useState<string>('09:00');
  const [clockOut, setClockOut] = useState<string>('17:00');
  const [lunchBreak, setLunchBreak] = useState<string>('30'); // minutes
  const [totalMinutes, setTotalMinutes] = useState<number | null>(null);
  const [totalHours, setTotalHours] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  const parseTimeToMinutes = (time: string): number => {
    // time expected in HH:MM (24-hour)
    const parts = time.split(':');
    if (parts.length !== 2) return NaN;
    const hh = parseInt(parts[0], 10);
    const mm = parseInt(parts[1], 10);
    if (isNaN(hh) || isNaN(mm)) return NaN;
    return hh * 60 + mm;
  };

  useEffect(() => {
    const start = parseTimeToMinutes(clockIn);
    const end = parseTimeToMinutes(clockOut);
    const breakMinutes = parseInt(lunchBreak, 10);

    if (isNaN(start) || isNaN(end) || isNaN(breakMinutes) || breakMinutes < 0) {
      setTotalMinutes(null);
      setTotalHours(null);
      return;
    }

    // If clock out is before clock in, assume worked past midnight
    let adjustedEnd = end;
    if (end < start) adjustedEnd = end + 24 * 60;

    let worked = adjustedEnd - start - breakMinutes;
    if (worked < 0) worked = 0;

    setTotalMinutes(worked);
    setTotalHours(parseFloat((worked / 60).toFixed(2)));
  }, [clockIn, clockOut, lunchBreak]);

  const formatHoursMinutes = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };

  const handleDownloadPDF = () => {
    if (totalMinutes === null || totalHours === null) return;

    generateCalculatorPDF({
      title: 'Time Card Calculation Results',
      inputs: [
        { label: 'Clock In', value: clockIn },
        { label: 'Clock Out', value: clockOut },
        { label: 'Lunch Break (minutes)', value: lunchBreak },
      ],
      results: [
        { label: 'Total Minutes Worked', value: `${totalMinutes} minutes` },
        { label: 'Total Hours Worked', value: `${totalHours} hours` },
      ],
    });
  };

  const chartData = totalMinutes !== null ? [
    { name: 'Worked Hours', value: totalMinutes / 60, label: 'Worked' },
    { name: 'Lunch Break', value: (parseInt(lunchBreak || '0', 10) || 0) / 60, label: 'Break' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="clockIn">Clock In Time</Label>
        <Input
          id="clockIn"
          type="time"
          value={clockIn}
          onChange={(e) => setClockIn(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="clockOut">Clock Out Time</Label>
        <Input
          id="clockOut"
          type="time"
          value={clockOut}
          onChange={(e) => setClockOut(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lunchBreak">Lunch Break (minutes)</Label>
        <Input
          id="lunchBreak"
          type="number"
          value={lunchBreak}
          onChange={(e) => setLunchBreak(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      {/* Included Select import to follow example patterns even if not needed */}
      <div className="hidden">
        <Label htmlFor="placeholder">Placeholder Select</Label>
        <Select id="placeholder" value="" onChange={() => {}}>
          <option value="">-</option>
        </Select>
      </div>
    </>
  );

  const results = totalMinutes !== null && totalHours !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Total Time Worked</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {totalHours.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
      <div className="text-lg text-gray-700">hours</div>
      <div className="text-sm text-gray-600 mt-2">{formatHoursMinutes(totalMinutes)}</div>
    </div>
  ) : null;

  const charts = showCharts && totalMinutes !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Time Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} hrs`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Time Card Calculator"
      description="Calculate total hours worked from time card entries. Handles overnight shifts and subtracts break time." 
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
