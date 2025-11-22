'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Split = {
  segment: string;
  time: number; // seconds
};

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds <= 0) return '0:00';
  const s = Math.round(seconds);
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  if (hrs > 0) return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

export default function SwimmingPaceCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [time, setTime] = useState<string>('60');
  const [pacePer100m, setPacePer100m] = useState<number | null>(null); // seconds per 100m
  const [splits, setSplits] = useState<Split[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (!isNaN(d) && !isNaN(t) && d > 0 && t > 0) {
      // calculate base pace (seconds per meter) first, then convert to per 100m
      const secondsPerMeter = t / d; // base unit: seconds per meter
      const pace100 = secondsPerMeter * 100; // seconds per 100m
      setPacePer100m(parseFloat(pace100.toFixed(2)));

      // build splits for 50m segments (convert distance into segments)
      const interval = 50; // fixed 50m splits for typical swimming analysis
      const segments = Math.ceil(d / interval);
      const newSplits: Split[] = [];
      let remaining = d;

      for (let i = 0; i < segments; i++) {
        const segDist = Math.min(interval, remaining);
        const segTime = parseFloat((secondsPerMeter * segDist).toFixed(2));
        newSplits.push({ segment: `${segDist}m #${i + 1}`, time: segTime });
        remaining -= segDist;
      }

      setSplits(newSplits);
    } else {
      setPacePer100m(null);
      setSplits([]);
    }
  }, [distance, time]);

  const handleDownloadPDF = () => {
    if (pacePer100m === null) return;

    generateCalculatorPDF({
      title: 'Swimming Pace Calculator Results',
      inputs: [
        { label: 'Distance (m)', value: distance },
        { label: 'Time (seconds)', value: time },
      ],
      results: [
        { label: 'Pace (per 100m)', value: `${formatTime(pacePer100m)} (mm:ss)` },
        { label: 'Total Time', value: `${formatTime(parseFloat(time || '0'))}` },
        ...splits.map((s, idx) => ({ label: `Split ${idx + 1}`, value: `${s.segment} — ${formatTime(s.time)}` })),
      ],
    });
  };

  const chartData = splits.map((s) => ({ segment: s.segment, time: s.time }));

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (m)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="time">Time (seconds)</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="1"
          step="0.01"
        />
      </div>
    </>
  );

  const results = pacePer100m !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Pace per 100m</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{formatTime(pacePer100m)}</div>
      <div className="text-lg text-gray-700 mb-4">mm:ss per 100m</div>

      <div className="text-sm text-gray-600">Total Time</div>
      <div className="text-2xl font-semibold text-gray-800">{formatTime(parseFloat(time || '0'))}</div>

      <div className="mt-4 text-left">
        <div className="text-sm text-gray-600 mb-2">Splits</div>
        <ul className="divide-y divide-gray-100 rounded border">
          {splits.map((s, i) => (
            <li key={i} className="flex justify-between px-4 py-2">
              <span className="text-gray-700">{s.segment}</span>
              <span className="font-medium text-gray-900">{formatTime(s.time)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Split Times</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(value) => formatTime(value)} />
          <Tooltip formatter={(value: number) => formatTime(value)} />
          <Bar dataKey="time" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Swimming Pace Calculator"
      description="Calculate swimming pace per 100m and view split times for standard 50m segments. Enter the distance (meters) and total time (seconds) to auto-calculate your pace and splits."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
