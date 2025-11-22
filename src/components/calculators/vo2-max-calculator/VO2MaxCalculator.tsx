'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function VO2MaxCalculator() {
  const [age, setAge] = useState<string>('30');
  const [weight, setWeight] = useState<string>('70');
  const [restingHR, setRestingHR] = useState<string>('70');
  const [maxHR, setMaxHR] = useState<string>('190');

  const [vo2Relative, setVo2Relative] = useState<number | null>(null); // ml/kg/min
  const [vo2Absolute, setVo2Absolute] = useState<number | null>(null); // L/min
  const [ageNorm, setAgeNorm] = useState<number | null>(null); // ml/kg/min
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const rHR = parseFloat(restingHR);
    const mHR = parseFloat(maxHR);

    if ([a, w, rHR, mHR].some((v) => isNaN(v) || v <= 0)) {
      setVo2Relative(null);
      setVo2Absolute(null);
      setAgeNorm(null);
      return;
    }

    // VO2max estimation using Uth–Sørensen–Overgaard–Pedersen (Uth) formula approximation:
    // VO2max (ml/kg/min) ≈ 15.3 × (HRmax / HRrest)
    // This is a commonly cited estimation though not perfect for all individuals.
    const relative = 15.3 * (mHR / rHR);
    const absolute = (relative * w) / 1000; // convert ml/kg/min * kg -> ml/min then /1000 -> L/min

    // Simple age-based normative estimate (not clinical): baseline 45 at age 30, small decline with age
    const normative = Math.max(20, 45 - (a - 30) * 0.2);

    setVo2Relative(parseFloat(relative.toFixed(2)));
    setVo2Absolute(parseFloat(absolute.toFixed(3)));
    setAgeNorm(parseFloat(normative.toFixed(2)));
  }, [age, weight, restingHR, maxHR]);

  const handleDownloadPDF = () => {
    if (vo2Relative === null || vo2Absolute === null) return;

    generateCalculatorPDF({
      title: 'VO2 Max Estimation Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Weight (kg)', value: weight },
        { label: 'Resting Heart Rate (bpm)', value: restingHR },
        { label: 'Maximum Heart Rate (bpm)', value: maxHR },
      ],
      results: [
        { label: 'Estimated VO2 (relative)', value: `${vo2Relative} ml/kg/min` },
        { label: 'Estimated VO2 (absolute)', value: `${vo2Absolute} L/min` },
        { label: 'Age-normative VO2', value: `${ageNorm} ml/kg/min` },
      ],
    });
  };

  const chartData = vo2Relative !== null && ageNorm !== null ? [
    { label: 'You', value: vo2Relative, unit: 'ml/kg/min' },
    { label: `Avg (age ${age})`, value: ageNorm, unit: 'ml/kg/min' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
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
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="1"
            step="0.1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="restingHR">Resting Heart Rate (bpm)</Label>
          <Input
            id="restingHR"
            type="number"
            value={restingHR}
            onChange={(e) => setRestingHR(e.target.value)}
            min="1"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxHR">Maximum Heart Rate (bpm)</Label>
          <Input
            id="maxHR"
            type="number"
            value={maxHR}
            onChange={(e) => setMaxHR(e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>
    </>
  );

  const results = vo2Relative !== null && vo2Absolute !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated VO2 Max</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{vo2Relative.toLocaleString()} <span className="text-xl font-medium">ml/kg/min</span></div>
      <div className="text-lg text-gray-700 mb-3">Absolute: {vo2Absolute.toLocaleString()} L/min</div>
      {ageNorm !== null && (
        <div className="text-sm text-gray-600">Age-normative: <span className="font-semibold text-gray-800">{ageNorm} ml/kg/min</span></div>
      )}
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">VO2 Max Comparison</h3>
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
      title="VO2 Max Calculator"
      description="Estimate your VO2 max (maximum oxygen consumption) from heart rates and weight. This estimate uses a commonly cited formula and is intended for general guidance only."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
