'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function VelocityCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [time, setTime] = useState<string>('10');
  const [velocity, setVelocity] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (!isNaN(d) && !isNaN(t) && t > 0) {
      const v = d / t; // meters per second (m/s)
      setVelocity(parseFloat(v.toFixed(6)));
    } else {
      setVelocity(null);
    }
  }, [distance, time]);

  const handleDownloadPDF = () => {
    if (velocity === null) return;

    generateCalculatorPDF({
      title: 'Velocity Calculator Results',
      inputs: [
        { label: 'Distance (m)', value: distance },
        { label: 'Time (s)', value: time },
      ],
      results: [
        { label: 'Velocity', value: `${velocity} m/s` },
      ],
    });
  };

  const chartData = velocity !== null ? [
    { label: 'Distance', value: parseFloat(distance) || 0, unit: 'm' },
    { label: 'Velocity', value: velocity, unit: 'm/s' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (m)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="time">Time (s)</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = velocity !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {velocity.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">m/s</div>
    </div>
  ) : (
    <div className="text-center text-sm text-gray-500">Enter valid distance and time (time &gt; 0) to see velocity.</div>
  );

  const charts = showCharts && velocity !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Distance vs Velocity</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Velocity Calculator"
      description="Calculate velocity from distance (meters) and time (seconds)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
