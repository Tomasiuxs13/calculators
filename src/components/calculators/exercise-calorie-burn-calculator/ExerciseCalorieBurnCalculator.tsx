'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const activityCalories: Record<string, number> = {
  running: 10,
  walking: 3.5,
  cycling: 8,
  swimming: 7,
};

const intensityMultipliers: Record<string, number> = {
  light: 0.5,
  moderate: 1,
  vigorous: 1.5,
};

export default function ExerciseCalorieBurnCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [activity, setActivity] = useState<string>('running');
  const [duration, setDuration] = useState<string>('30');
  const [intensity, setIntensity] = useState<string>('moderate');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const weightValue = parseFloat(weight);
    const durationValue = parseFloat(duration);
    if (!isNaN(weightValue) && !isNaN(durationValue) && weightValue > 0 && durationValue > 0) {
      const caloriesBurned = (activityCalories[activity] * weightValue * durationValue * intensityMultipliers[intensity]) / 60;
      setResult(parseFloat(caloriesBurned.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [weight, activity, duration, intensity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Exercise Calorie Burn Calculator Results',
      inputs: [
        { label: 'Weight', value: weight },
        { label: 'Activity', value: activity },
        { label: 'Duration', value: duration },
        { label: 'Intensity', value: intensity },
      ],
      results: [
        { label: 'Calories Burned', value: `${result} kcal` },
      ],
    });
  };

  const chartData = result !== null ? [{ activity, value: result, label: 'Calories Burned' }] : [];

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

      <div className="space-y-2">
        <Label htmlFor="activity">Activity</Label>
        <Select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="running">Running</option>
          <option value="walking">Walking</option>
          <option value="cycling">Cycling</option>
          <option value="swimming">Swimming</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="intensity">Intensity</Label>
        <Select
          id="intensity"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="vigorous">Vigorous</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Calories Burned</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">kcal</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Calories Burned Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kcal`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Exercise Calorie Burn Calculator"
      description="Calculate calories burned during various exercises and activities."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
