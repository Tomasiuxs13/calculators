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

const activityFactors: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  "very-active": 1.9,
};

export default function TDEECalculator() {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [showCharts, setShowCharts] = useState(false);
  const [tdee, setTdee] = useState<number | null>(null);

  useEffect(() => {
    const numAge = parseFloat(age);
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);
    if (!isNaN(numAge) && !isNaN(numWeight) && !isNaN(numHeight) && numAge > 0 && numWeight > 0 && numHeight > 0) {
      const bmr = gender === 'male' ?
        88.362 + (13.397 * numWeight) + (4.799 * numHeight) - (5.677 * numAge) :
        447.593 + (9.247 * numWeight) + (3.098 * numHeight) - (4.330 * numAge);
      const calculatedTdee = bmr * activityFactors[activity];
      setTdee(parseFloat(calculatedTdee.toFixed(2)));
    } else {
      setTdee(null);
    }
  }, [age, gender, weight, height, activity]);

  const handleDownloadPDF = () => {
    if (tdee === null) return;

    generateCalculatorPDF({
      title: 'TDEE Calculator Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Weight (kg)', value: weight },
        { label: 'Height (cm)', value: height },
        { label: 'Activity Level', value: activity },
      ],
      results: [
        { label: 'TDEE (Total Daily Energy Expenditure)', value: `${tdee} calories/day` },
      ],
    });
  };

  const chartData = tdee !== null ? [
    { label: 'BMR', value: tdee / activityFactors[activity], unit: 'calories/day' },
    { label: 'TDEE', value: tdee, unit: 'calories/day' },
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
          <option value="sedentary">Sedentary (little/no exercise)</option>
          <option value="light">Light (exercise 1-3 days/week)</option>
          <option value="moderate">Moderate (exercise 3-5 days/week)</option>
          <option value="active">Active (exercise 6-7 days/week)</option>
          <option value="very-active">Very Active (physical job + exercise)</option>
        </Select>
      </div>
    </>
  );

  const results = tdee !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">TDEE (Total Daily Energy Expenditure)</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {tdee.toLocaleString()} calories/day
      </div>
    </div>
  ) : null;

  const charts = showCharts && tdee !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Energy Expenditure Overview</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Calculate your Total Daily Energy Expenditure (TDEE) - total calories burned per day."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
