'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const activityFactors: Record<string, number> = {
  sedentary: 0.033,
  light: 0.04,
  moderate: 0.045,
  active: 0.05,
};

const climateFactors: Record<string, number> = {
  temperate: 1,
  hot: 1.2,
  cold: 0.8,
};

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [activity, setActivity] = useState<string>('moderate');
  const [climate, setClimate] = useState<string>('temperate');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numWeight = parseFloat(weight);
    if (!isNaN(numWeight) && numWeight > 0) {
      const baseIntake = numWeight * activityFactors[activity];
      const adjustedIntake = baseIntake * climateFactors[climate];
      setResult(parseFloat(adjustedIntake.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [weight, activity, climate]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Water Intake Calculator Results',
      inputs: [
        { label: 'Weight', value: weight },
        { label: 'Activity Level', value: activity },
        { label: 'Climate', value: climate },
      ],
      results: [
        { label: 'Daily Water Intake', value: `${result} liters` },
      ],
    });
  };

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
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="climate">Climate</Label>
          <Select
            id="climate"
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
          >
            <option value="temperate">Temperate</option>
            <option value="hot">Hot/Humid</option>
            <option value="cold">Cold</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Water Intake</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">liters</div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Daily Water Intake', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Water Intake Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} liters`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Water Intake Calculator"
      description="Calculate daily water intake needs based on weight, activity, and climate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
