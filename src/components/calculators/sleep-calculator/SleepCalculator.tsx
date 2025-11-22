'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SleepCycleResult = {
  cycle: number;
  cumulativeMinutes: number;
  label: string;
};

export default function SleepCalculator() {
  const [wakeTime, setWakeTime] = useState<string>('07:00');
  const [sleepCycles, setSleepCycles] = useState<string>('5');
  const [bedtime, setBedtime] = useState<string | null>(null);
  const [totalMinutes, setTotalMinutes] = useState<number | null>(null);
  const [cycleData, setCycleData] = useState<SleepCycleResult[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  // Helper to format minutes to HH:MM (24-hour)
  const formatTime = (date: Date) => {
    const hrs = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    return `${hrs}:${mins}`;
  };

  useEffect(() => {
    // Each sleep cycle is 90 minutes
    const cycles = parseInt(sleepCycles, 10);
    if (isNaN(cycles) || cycles <= 0) {
      setBedtime(null);
      setTotalMinutes(null);
      setCycleData([]);
      return;
    }

    // Calculate total sleep minutes
    const minutes = cycles * 90;
    setTotalMinutes(minutes);

    // Parse wakeTime (expected format HH:MM)
    const [wakeHStr, wakeMStr] = wakeTime.split(':');
    const wakeH = parseInt(wakeHStr ?? '0', 10);
    const wakeM = parseInt(wakeMStr ?? '0', 10);
    if (isNaN(wakeH) || isNaN(wakeM)) {
      setBedtime(null);
      setCycleData([]);
      return;
    }

    // Create a date object for today at wake time and subtract minutes
    const now = new Date();
    const wakeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), wakeH, wakeM, 0, 0);
    const bedtimeDate = new Date(wakeDate.getTime());
    bedtimeDate.setMinutes(bedtimeDate.getMinutes() - minutes);

    setBedtime(formatTime(bedtimeDate));

    // Build chart data: cumulative minutes per cycle
    const data: SleepCycleResult[] = [];
    for (let i = 1; i <= cycles; i++) {
      data.push({
        cycle: i,
        cumulativeMinutes: i * 90,
        label: `${i} cycle${i > 1 ? 's' : ''}`,
      });
    }
    setCycleData(data);
  }, [wakeTime, sleepCycles]);

  const handleDownloadPDF = () => {
    if (bedtime === null || totalMinutes === null) return;

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    generateCalculatorPDF({
      title: 'Sleep Calculator Results',
      inputs: [
        { label: 'Wake Time', value: wakeTime },
        { label: 'Number of Sleep Cycles', value: `${sleepCycles} (90 min each)` },
      ],
      results: [
        { label: 'Recommended Bedtime', value: bedtime },
        { label: 'Total Sleep Time', value: `${hours}h ${minutes}m (${totalMinutes} minutes)` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="wakeTime">Wake Time</Label>
        <Input
          id="wakeTime"
          type="time"
          value={wakeTime}
          onChange={(e) => setWakeTime(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sleepCycles">Number of Sleep Cycles (90 min each)</Label>
        <Input
          id="sleepCycles"
          type="number"
          value={sleepCycles}
          onChange={(e) => setSleepCycles(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = (totalMinutes !== null && bedtime !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Bedtime</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{bedtime}</div>
      <div className="text-lg text-gray-700 mb-3">Wake at {wakeTime}</div>
      <div className="text-sm text-gray-600">Total Sleep</div>
      <div className="text-2xl font-semibold text-gray-800 mt-1">
        {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
      </div>
    </div>
  ) : null;

  const charts = showCharts && cycleData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Sleep Cycles - Cumulative Minutes</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={cycleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} min`} />
          <Bar dataKey="cumulativeMinutes" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Sleep Calculator"
      description="Calculate optimal sleep times based on sleep cycles. Each sleep cycle is approximately 90 minutes."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
