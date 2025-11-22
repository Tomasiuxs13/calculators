'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type PetType = 'dog' | 'cat';
type ActivityLevel = 'low' | 'moderate' | 'high';

type Result = {
  kcal: number;
  grams: number;
};

// Activity multipliers by pet type (multipliers applied to RER)
const activityMultipliers: Record<PetType, Record<ActivityLevel, number>> = {
  dog: {
    low: 1.2,
    moderate: 1.6,
    high: 2.0,
  },
  cat: {
    low: 1.0,
    moderate: 1.2,
    high: 1.4,
  },
};

// Typical energy density (kcal per gram) assumptions
const kcalPerGram: Record<PetType, number> = {
  dog: 3.5, // 3.5 kcal/g (3500 kcal/kg) typical kibble
  cat: 4.0, // 4.0 kcal/g (4000 kcal/kg) typical cat food
};

export default function PetFoodCalculator() {
  const [petType, setPetType] = useState<PetType>('dog');
  const [weight, setWeight] = useState<string>('10'); // kg
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const w = parseFloat(weight);
    if (isNaN(w) || w <= 0) {
      setResult(null);
      return;
    }

    // Resting Energy Requirement (RER)
    // RER = 70 * (weight_kg ^ 0.75)
    const rer = 70 * Math.pow(w, 0.75);

    const multiplier = activityMultipliers[petType][activity];
    const kcal = rer * multiplier;

    const grams = kcal / kcalPerGram[petType];

    setResult({
      kcal: parseFloat(kcal.toFixed(1)),
      grams: parseFloat(grams.toFixed(0)),
    });
  }, [petType, weight, activity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Pet Food Calculator Results',
      inputs: [
        { label: 'Pet Type', value: petType },
        { label: 'Pet Weight (kg)', value: weight },
        { label: 'Activity Level', value: activity },
      ],
      results: [
        { label: 'Daily Energy (kcal/day)', value: `${result.kcal} kcal` },
        { label: 'Approx. Food (g/day)', value: `${result.grams} g` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Calories (kcal)', value: result.kcal, unit: 'kcal' },
    { label: 'Food (g)', value: result.grams, unit: 'g' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="petType">Pet Type</Label>
        <Select
          id="petType"
          value={petType}
          onChange={(e) => setPetType(e.target.value as PetType)}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="weight">Pet Weight (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="activity">Activity Level</Label>
        <Select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value as ActivityLevel)}
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Requirements</div>
      <div className="text-3xl font-bold text-blue-900 my-2">
        {result.kcal.toLocaleString()} kcal / day
      </div>
      <div className="text-lg text-gray-700 mb-3">Approx. {result.grams.toLocaleString()} g of food / day</div>
      <div className="text-sm text-gray-600">(Based on RER = 70 × weight^0.75 and activity multiplier)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Daily Food Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pet Food Calculator"
      description="Calculate daily food requirements for dogs and cats based on weight and activity level."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
