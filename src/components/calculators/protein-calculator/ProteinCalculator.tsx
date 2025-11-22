'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const activityMultipliers: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  'very-active': 1.9,
};

const proteinNeeds: Record<string, number> = {
  lose: 1.2,
  maintain: 1.6,
  gain: 2.2,
};

export default function ProteinCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [activity, setActivity] = useState<string>('moderate');
  const [goal, setGoal] = useState<string>('maintain');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numWeight = parseFloat(weight);
    if (!isNaN(numWeight) && numWeight > 0) {
      const proteinRequirement = numWeight * activityMultipliers[activity] * proteinNeeds[goal];
      setResult(parseFloat(proteinRequirement.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [weight, activity, goal]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Protein Calculator Results',
      inputs: [
        { label: 'Weight', value: weight },
        { label: 'Activity Level', value: activity },
        { label: 'Goal', value: goal },
      ],
      results: [
        { label: 'Daily Protein Needs', value: `${result} g` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Daily Protein Needs', value: result },
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
          min="0"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="activity">Activity Level</Label>
          <Select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very-active">Very Active</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="goal">Goal</Label>
          <Select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Muscle</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Protein Needs</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()} g
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Protein Needs</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} g`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Protein Calculator"
      description="Calculate daily protein needs based on weight, activity level, and goals."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
