'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Result = number | null; // minutes

export default function TenKTimeCalculator() {
  const [currentPace, setCurrentPace] = useState<string>('5'); // minutes per km
  const [distance, setDistance] = useState<string>('10'); // km (training distance)
  const [result, setResult] = useState<Result>(null); // predicted 10k time in minutes
  const [predictedPace, setPredictedPace] = useState<Result>(null); // min/km for predicted 10k
  const [showCharts, setShowCharts] = useState(false);

  // Helper: format minutes (float) to HH:MM:SS or MM:SS
  const formatMinutesToTime = (minutes: number) => {
    if (!Number.isFinite(minutes) || minutes <= 0) return '—';
    const totalSeconds = Math.round(minutes * 60);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    const pace = parseFloat(currentPace);
    const d = parseFloat(distance);

    if (isNaN(pace) || isNaN(d) || pace <= 0 || d <= 0) {
      setResult(null);
      setPredictedPace(null);
      return;
    }

    // Training time T1 in minutes
    const T1 = pace * d;

    // Use Riegel's formula to predict time for 10 km
    // T2 = T1 * (D2 / D1) ^ 1.06  where D2 = 10
    const exponent = 1.06;
    const D2 = 10;

    const predicted = T1 * Math.pow(D2 / d, exponent);
    const predictedPaceFor10k = predicted / D2;

    setResult(parseFloat(predicted.toFixed(2)));
    setPredictedPace(parseFloat(predictedPaceFor10k.toFixed(3)));
  }, [currentPace, distance]);

  const handleDownloadPDF = () => {
    if (result === null || predictedPace === null) return;

    generateCalculatorPDF({
      title: '10K Time Prediction Results',
      inputs: [
        { label: 'Current Pace (min/km)', value: currentPace },
        { label: 'Training Distance (km)', value: distance },
      ],
      results: [
        { label: 'Predicted 10K Time', value: formatMinutesToTime(result) },
        { label: 'Predicted Pace (min/km)', value: `${predictedPace} min/km` },
      ],
    });
  };

  const chartData = result !== null ? [
    {
      label: 'Training Time',
      value: (() => {
        const pace = parseFloat(currentPace);
        const d = parseFloat(distance);
        return Number.isFinite(pace) && Number.isFinite(d) ? pace * d : 0;
      })(),
    },
    { label: 'Predicted 10K Time', value: result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentPace">Current Pace (min/km)</Label>
        <Input
          id="currentPace"
          type="number"
          value={currentPace}
          onChange={(e) => setCurrentPace(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Training Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      {/* Imported Select is available if future unit options are added; kept to follow project patterns */}
    </>
  );

  const results = result !== null && predictedPace !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Predicted 10K Finish Time</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{formatMinutesToTime(result)}</div>
      <div className="text-lg text-gray-700">Predicted Pace: {predictedPace.toFixed(2)} min/km</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Training vs Predicted 10K Time</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${formatMinutesToTime(value)} (${value.toFixed(1)} min)`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-sm text-gray-600 mt-3 text-center">Times shown in minutes (and HH:MM:SS in tooltip)</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="10K Time Calculator"
      description="Calculate a predicted 10K race time from your current pace and a training distance using a Riegel-based prediction."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
