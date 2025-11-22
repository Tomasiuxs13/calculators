'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RunningPaceCalculator() {
  const [distance, setDistance] = useState<string>('5');
  const [time, setTime] = useState<string>('25');
  const [pace, setPace] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const distanceValue = parseFloat(distance);
    const timeValue = parseFloat(time);
    if (!isNaN(distanceValue) && distanceValue > 0 && !isNaN(timeValue) && timeValue > 0) {
      const paceInMinutes = timeValue / distanceValue;
      const speedInKmH = distanceValue / (timeValue / 60);
      setPace(parseFloat(paceInMinutes.toFixed(2)));
      setSpeed(parseFloat(speedInKmH.toFixed(2)));
    } else {
      setPace(null);
      setSpeed(null);
    }
  }, [distance, time]);

  const handleDownloadPDF = () => {
    if (pace === null || speed === null) return;

    generateCalculatorPDF({
      title: 'Running Pace Calculator Results',
      inputs: [
        { label: 'Distance (km)', value: distance },
        { label: 'Time (minutes)', value: time },
      ],
      results: [
        { label: 'Pace (min/km)', value: `${pace}` },
        { label: 'Speed (km/h)', value: `${speed}` },
      ],
    });
  };

  const chartData = pace !== null && speed !== null ? [
    { label: 'Pace', value: pace, unit: 'min/km' },
    { label: 'Speed', value: speed, unit: 'km/h' },
  ] : [];

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Time (minutes)</Label>
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

  const results = (pace !== null && speed !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {pace} min/km
      </div>
      <div className="text-lg text-gray-700">Speed: {speed} km/h</div>
    </div>
  ) : null;

  const charts = showCharts && pace !== null && speed !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Pace and Speed Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Running Pace Calculator"
      description="Calculate running pace, speed, and time for various distances."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
