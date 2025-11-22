'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TargetZone = 'fat-burn' | 'cardio' | 'peak';

const zoneRanges: Record<TargetZone, [number, number]> = {
  'fat-burn': [50, 60],
  'cardio': [60, 70],
  'peak': [80, 90],
};

export default function HeartRateCalculator() {
  const [age, setAge] = useState<string>('30');
  const [restingHR, setRestingHR] = useState<string>('70');
  const [zone, setZone] = useState<TargetZone>('cardio');
  const [maxHR, setMaxHR] = useState<number | null>(null);
  const [targetHR, setTargetHR] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const ageValue = parseInt(age);
    const restingHRValue = parseInt(restingHR);
    if (!isNaN(ageValue) && !isNaN(restingHRValue)) {
      const calculatedMaxHR = 220 - ageValue;
      setMaxHR(calculatedMaxHR);
      const [lower, upper] = zoneRanges[zone];
      const calculatedTargetHR = restingHRValue + (calculatedMaxHR - restingHRValue) * (lower / 100);
      setTargetHR(parseFloat(calculatedTargetHR.toFixed(2)));
    } else {
      setMaxHR(null);
      setTargetHR(null);
    }
  }, [age, restingHR, zone]);

  const handleDownloadPDF = () => {
    if (maxHR === null || targetHR === null) return;

    generateCalculatorPDF({
      title: 'Heart Rate Calculator Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Resting Heart Rate', value: restingHR },
        { label: 'Target Zone', value: zone },
      ],
      results: [
        { label: 'Maximum Heart Rate', value: `${maxHR} bpm` },
        { label: 'Target Heart Rate', value: `${targetHR} bpm` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
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
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zone">Target Zone</Label>
        <Select
          id="zone"
          value={zone}
          onChange={(e) => setZone(e.target.value as TargetZone)}
        >
          <option value="fat-burn">Fat Burn (50-60%)</option>
          <option value="cardio">Cardio (60-70%)</option>
          <option value="peak">Peak (80-90%)</option>
        </Select>
      </div>
    </>
  );

  const results = (maxHR !== null && targetHR !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Max HR: {maxHR} bpm
      </div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Target HR: {targetHR} bpm
      </div>
    </div>
  ) : null;

  const chartData = maxHR !== null && targetHR !== null ? [
    { label: 'Max Heart Rate', value: maxHR },
    { label: 'Target Heart Rate', value: targetHR },
  ] : [];

  const charts = showCharts && maxHR !== null && targetHR !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Heart Rate Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} bpm`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Heart Rate Calculator"
      description="Calculate target heart rate zones, maximum heart rate, and resting heart rate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
