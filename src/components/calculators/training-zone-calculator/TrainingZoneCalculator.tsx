'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ZoneKey = 'fat-burn' | 'cardio' | 'peak';

const zoneRanges: Record<ZoneKey, { label: string; min: number; max: number }> = {
  'fat-burn': { label: 'Fat Burn (50-60%)', min: 0.5, max: 0.6 },
  'cardio': { label: 'Cardio (60-70%)', min: 0.6, max: 0.7 },
  'peak': { label: 'Peak (80-90%)', min: 0.8, max: 0.9 },
};

export default function TrainingZoneCalculator() {
  const [age, setAge] = useState<string>('30');
  const [restingHR, setRestingHR] = useState<string>('70');
  const [zone, setZone] = useState<ZoneKey>('fat-burn');
  const [result, setResult] = useState<
    | {
        hrMax: number;
        hrReserve: number;
        lowerHR: number;
        upperHR: number;
        lowerPct: number;
        upperPct: number;
      }
    | null
  >(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsedAge = parseInt(age, 10);
    const parsedRHR = parseInt(restingHR, 10);

    if (!isNaN(parsedAge) && parsedAge > 0 && !isNaN(parsedRHR) && parsedRHR >= 0) {
      // Use Karvonen formula: TargetHR = ((HRmax - RHR) * intensity) + RHR
      const hrMax = 220 - parsedAge;
      const hrReserve = hrMax - parsedRHR;
      const range = zoneRanges[zone];
      const lower = Math.round(hrReserve * range.min + parsedRHR);
      const upper = Math.round(hrReserve * range.max + parsedRHR);

      setResult({
        hrMax: Math.round(hrMax),
        hrReserve: Math.max(0, Math.round(hrReserve)),
        lowerHR: lower,
        upperHR: upper,
        lowerPct: range.min,
        upperPct: range.max,
      });
    } else {
      setResult(null);
    }
  }, [age, restingHR, zone]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Training Zone Calculator Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Resting Heart Rate (bpm)', value: restingHR },
        { label: 'Selected Zone', value: zoneRanges[zone].label },
      ],
      results: [
        { label: 'Estimated Max HR', value: `${result.hrMax} bpm` },
        { label: 'Heart Rate Reserve', value: `${result.hrReserve} bpm` },
        { label: 'Target Zone', value: `${result.lowerHR} - ${result.upperHR} bpm (${Math.round(result.lowerPct * 100)}-${Math.round(result.upperPct * 100)}%)` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Resting HR', value: parseInt(restingHR, 10) || 0, color: '#60a5fa' },
        { label: 'HR Max', value: result.hrMax, color: '#ef4444' },
        { label: 'Target Lower', value: result.lowerHR, color: '#34d399' },
        { label: 'Target Upper', value: result.upperHR, color: '#06b6d4' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="restingHR">Resting Heart Rate (bpm)</Label>
        <Input
          id="restingHR"
          type="number"
          value={restingHR}
          onChange={(e) => setRestingHR(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zone">Training Zone</Label>
        <Select id="zone" value={zone} onChange={(e) => setZone(e.target.value as ZoneKey)}>
          <option value="fat-burn">Fat Burn (50-60%)</option>
          <option value="cardio">Cardio (60-70%)</option>
          <option value="peak">Peak (80-90%)</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Target Heart Rate</div>
      <div className="text-4xl font-bold text-red-700 my-2">{result.lowerHR} - {result.upperHR} bpm</div>
      <div className="text-sm text-gray-600 mb-4">
        ({Math.round(result.lowerPct * 100)}% - {Math.round(result.upperPct * 100)}% of HR reserve)
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4 text-sm text-gray-700">
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Max HR</div>
          <div className="text-lg font-semibold">{result.hrMax} bpm</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Resting HR</div>
          <div className="text-lg font-semibold">{parseInt(restingHR, 10) || 0} bpm</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">HR Reserve</div>
          <div className="text-lg font-semibold">{result.hrReserve} bpm</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Heart Rate Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} bpm`} />
          <Bar dataKey="value" fill="#3b82f6">{
            chartData.map((d, i) => (
              // Recharts accepts fill on Bar only; per example keep single Bar
              null
            ))
          }</Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-gray-500 mt-2">Resting HR vs Max HR and your target zone bounds.</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Training Zone Calculator"
      description="Calculate your heart rate training zones using the Karvonen method to optimize workouts across fat burn, cardio, and peak intensities."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
