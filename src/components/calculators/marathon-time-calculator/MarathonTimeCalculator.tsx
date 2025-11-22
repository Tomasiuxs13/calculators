'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

// MarathonTimeCalculator
// Estimates marathon time from a shorter race using Riegel's formula

export default function MarathonTimeCalculator() {
  const [distance, setDistance] = useState<string>('10'); // km
  const [time, setTime] = useState<string>('40'); // minutes
  const [predictedMinutes, setPredictedMinutes] = useState<number | null>(null);
  const [originalPace, setOriginalPace] = useState<number | null>(null); // minutes per km
  const [predictedPace, setPredictedPace] = useState<number | null>(null); // minutes per km
  const [showCharts, setShowCharts] = useState(false);

  // Constants
  const marathonDistanceKm = 42.195;
  const riegelExponent = 1.06; // common exponent used in Riegel's formula

  useEffect(() => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (!isNaN(d) && !isNaN(t) && d > 0 && t > 0) {
      // Convert to base unit (kilometers) first — pattern followed from example
      const baseDistanceKm = d; // input is already in km per spec

      // Original pace (min per km)
      const pace = t / baseDistanceKm;

      // Riegel formula: T2 = T1 * (D2 / D1) ^ exponent
      const predicted = t * Math.pow(marathonDistanceKm / baseDistanceKm, riegelExponent);

      setOriginalPace(parseFloat(pace.toFixed(4)));
      setPredictedMinutes(parseFloat(predicted.toFixed(2)));
      setPredictedPace(parseFloat((predicted / marathonDistanceKm).toFixed(4)));
    } else {
      setOriginalPace(null);
      setPredictedMinutes(null);
      setPredictedPace(null);
    }
  }, [distance, time]);

  const formatMinutesToHMS = (minutes: number) => {
    const totalSeconds = Math.round(minutes * 60);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const handleDownloadPDF = () => {
    if (predictedMinutes === null || originalPace === null || predictedPace === null) return;

    generateCalculatorPDF({
      title: 'Marathon Time Estimate',
      inputs: [
        { label: 'Race Distance (km)', value: distance },
        { label: 'Race Time (minutes)', value: time },
      ],
      results: [
        { label: 'Predicted Marathon Time', value: `${formatMinutesToHMS(predictedMinutes)} (${predictedMinutes.toFixed(2)} min)` },
        { label: 'Original Pace', value: `${originalPace.toFixed(2)} min/km` },
        { label: 'Predicted Marathon Pace', value: `${predictedPace.toFixed(2)} min/km` },
      ],
    });
  };

  const chartData = predictedMinutes !== null && originalPace !== null ? [
    { label: 'Original Race (min)', value: parseFloat(time) || 0 },
    { label: 'Predicted Marathon (min)', value: predictedMinutes },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Race Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0.1"
          step="0.1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="time">Race Time (minutes)</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      {/* Select is imported to follow example patterns (kept for potential future unit extensions) */}
      <div className="hidden">
        <Label htmlFor="dummy">Unit</Label>
        <Select id="dummy" value="km" onChange={() => {}}>
          <option value="km">Kilometers (km)</option>
        </Select>
      </div>
    </>
  );

  const results = predictedMinutes !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Predicted Marathon Time</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{formatMinutesToHMS(predictedMinutes)}</div>
      <div className="text-lg text-gray-700 mb-3">{predictedMinutes.toFixed(2)} minutes</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600">Original Pace</div>
          <div className="text-2xl font-semibold text-gray-900">{originalPace?.toFixed(2)} min/km</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600">Predicted Pace</div>
          <div className="text-2xl font-semibold text-gray-900">{predictedPace?.toFixed(2)} min/km</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && predictedMinutes !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Time Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} min`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Marathon Time Calculator"
      description="Calculate an estimated marathon finish time from a shorter race using Riegel's formula. Enter a race distance and time to see your projected marathon result and pace."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
