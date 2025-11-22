'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ExerciseType = 'strength' | 'hypertrophy' | 'endurance';

const baseRestSeconds: Record<ExerciseType, number> = {
  strength: 180, // 3 minutes
  hypertrophy: 75, // ~1.25 minutes
  endurance: 45, // 45 seconds
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatSeconds(seconds: number) {
  const s = Math.round(seconds);
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  if (mm > 0) return `${mm}m ${ss.toString().padStart(2, '0')}s`;
  return `${ss}s`;
}

export default function RestPeriodCalculator() {
  const [exerciseType, setExerciseType] = useState<ExerciseType>('strength');
  const [intensity, setIntensity] = useState<string>('85');
  const [recommended, setRecommended] = useState<number | null>(null); // seconds
  const [range, setRange] = useState<[number, number] | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const intensityNum = parseFloat(intensity);
    if (!isNaN(intensityNum) && intensityNum > 0) {
      // Convert to a base factor first (base = value at ~85% 1RM)
      const base = baseRestSeconds[exerciseType];
      // Scale relative to a reference intensity (85% used as typical reference for strength work)
      const scale = intensityNum / 85;
      // Derive recommended rest (clamped to reasonable bounds)
      const raw = base * scale;
      const adjusted = clamp(raw, 20, 600); // between 20s and 10min
      const lower = Math.round(clamp(adjusted * 0.8, 10, 600));
      const upper = Math.round(clamp(adjusted * 1.2, 10, 600));
      setRecommended(Math.round(adjusted));
      setRange([lower, upper]);
    } else {
      setRecommended(null);
      setRange(null);
    }
  }, [exerciseType, intensity]);

  const handleDownloadPDF = () => {
    if (recommended === null || range === null) return;

    generateCalculatorPDF({
      title: 'Rest Period Calculator Results',
      inputs: [
        { label: 'Exercise Type', value: exerciseType },
        { label: 'Intensity (% of 1RM)', value: `${intensity}%` },
      ],
      results: [
        { label: 'Recommended Rest', value: `${formatSeconds(recommended)} (${recommended}s)` },
        { label: 'Suggested Range', value: `${formatSeconds(range[0])} - ${formatSeconds(range[1])}` },
      ],
    });
  };

  const chartData = recommended !== null && range !== null ? [
    { label: 'Lower Bound', value: range[0], name: 'Lower' },
    { label: 'Recommended', value: recommended, name: 'Recommended' },
    { label: 'Upper Bound', value: range[1], name: 'Upper' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="exerciseType">Exercise Type</Label>
        <Select
          id="exerciseType"
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value as ExerciseType)}
        >
          <option value="strength">Strength (1-5 reps)</option>
          <option value="hypertrophy">Hypertrophy (6-12 reps)</option>
          <option value="endurance">Endurance (13+ reps)</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="intensity">Intensity (% of 1RM)</Label>
        <Input
          id="intensity"
          type="number"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          min="1"
          max="200"
          step="1"
        />
        <p className="text-sm text-gray-500">Enter the working intensity as a percentage of your one-rep max (1RM).</p>
      </div>
    </>
  );

  const results = recommended !== null && range !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Rest</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{formatSeconds(recommended)}</div>
      <div className="text-lg text-gray-700 mb-2">({recommended}s)</div>
      <div className="text-sm text-gray-600">Suggested range: <span className="font-medium text-gray-800">{formatSeconds(range[0])} - {formatSeconds(range[1])}</span></div>
      <div className="mt-3 text-sm text-gray-500">Based on exercise type and intensity (% of 1RM).</div>
    </div>
  ) : null;

  const charts = showCharts && recommended !== null && range !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Rest Period Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${formatSeconds(value)} (${value}s)`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Rest Period Calculator"
      description="Calculate optimal rest periods between sets based on exercise type and intensity (% of 1RM)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
