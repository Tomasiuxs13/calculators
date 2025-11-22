'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
type Goal = 'lose' | 'maintain' | 'gain';

const activityFactors: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  "very-active": 1.9,
};

const goalFactors: Record<Goal, number> = {
  lose: 0.9,
  maintain: 1,
  gain: 1.1,
};

export default function CalorieCalculator() {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numAge = parseFloat(age);
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);
    if (!isNaN(numAge) && !isNaN(numWeight) && !isNaN(numHeight) && numAge > 0 && numWeight > 0 && numHeight > 0) {
      const bmr = gender === 'male'
        ? 10 * numWeight + 6.25 * numHeight - 5 * numAge + 5
        : 10 * numWeight + 6.25 * numHeight - 5 * numAge - 161;
      const maintenanceCalories = bmr * activityFactors[activity];
      const goalCalories = maintenanceCalories * goalFactors[goal];
      setResult(parseFloat(goalCalories.toFixed(0)));
    } else {
      setResult(null);
    }
  }, [age, gender, weight, height, activity, goal]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Calorie Calculator Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Weight (kg)', value: weight },
        { label: 'Height (cm)', value: height },
        { label: 'Activity Level', value: activity },
        { label: 'Goal', value: goal },
      ],
      results: [
        { label: 'Daily Calorie Needs', value: `${result} kcal` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Maintenance', value: result / goalFactors[goal], unit: 'kcal' },
    { label: 'Goal', value: result, unit: 'kcal' },
  ] : [];

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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
          />
        </div>

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
            <option value="very-active">Very Active</option>
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

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Calorie Needs</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()} kcal
      </div>
    </div>
  ) : null;

  const [showCharts, setShowCharts] = useState(false);

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Calorie Needs Over Time</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Calorie Calculator"
      description="Calculate daily calorie needs for weight loss, maintenance, or weight gain."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
