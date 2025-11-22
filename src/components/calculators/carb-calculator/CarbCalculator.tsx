'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active';
type Goal = 'lose' | 'maintain' | 'gain';

// Base carbohydrate recommendations (grams per kg bodyweight) by activity level
const carbsPerKgByActivity: Record<ActivityLevel, number> = {
  sedentary: 3,   // light daily activities
  light: 4,       // light exercise a few times/week
  moderate: 5,    // regular exercise
  active: 6,      // high volume/intensity training
};

// Goal adjustment multipliers
const goalMultipliers: Record<Goal, number> = {
  lose: 0.8,      // reduce carbs by ~20% for weight loss
  maintain: 1.0,  // maintain baseline
  gain: 1.15,     // increase carbs by ~15% for weight gain
};

export default function CarbCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [carbsPerKg, setCarbsPerKg] = useState<number | null>(null);
  const [totalCarbs, setTotalCarbs] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const w = parseFloat(weight);
    if (!isNaN(w) && w > 0) {
      // Convert to base: get grams per kg for activity, then apply goal multiplier
      const basePerKg = carbsPerKgByActivity[activity];
      const adjustedPerKg = basePerKg * goalMultipliers[goal];
      const total = adjustedPerKg * w;

      setCarbsPerKg(parseFloat(adjustedPerKg.toFixed(2)));
      setTotalCarbs(parseFloat(total.toFixed(0)));
    } else {
      setCarbsPerKg(null);
      setTotalCarbs(null);
    }
  }, [weight, activity, goal]);

  const handleDownloadPDF = () => {
    if (carbsPerKg === null || totalCarbs === null) return;

    generateCalculatorPDF({
      title: 'Daily Carbohydrate Needs',
      inputs: [
        { label: 'Weight (kg)', value: weight },
        { label: 'Activity Level', value: activity },
        { label: 'Goal', value: goal },
      ],
      results: [
        { label: 'Carbs per kg (g/kg)', value: `${carbsPerKg} g/kg` },
        { label: 'Total Carbohydrates (g/day)', value: `${totalCarbs} g/day` },
      ],
    });
  };

  const chartData = (carbsPerKg !== null && totalCarbs !== null) ? [
    { label: 'Per kg', value: carbsPerKg, unit: 'g/kg' },
    { label: 'Total', value: totalCarbs, unit: 'g' },
  ] : [];

  const inputs = (
    <>
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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <Select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value as ActivityLevel)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="goal">Goal</Label>
          <Select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value as Goal)}
          >
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = (carbsPerKg !== null && totalCarbs !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Carbohydrate Recommendation</div>
      <div className="text-3xl font-bold text-blue-900 my-2">{totalCarbs.toLocaleString()} g/day</div>
      <div className="text-lg text-gray-700">{carbsPerKg} g per kg bodyweight</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Carbohydrate Recommendation</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}` + (chartData.find(d => d.value === value)?.unit ? ` ${chartData.find(d => d.value === value)?.unit}` : '')} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Carb Calculator"
      description="Calculate daily carbohydrate needs based on goals and activity level."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
