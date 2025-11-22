'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Goal = 'balanced' | 'high-protein' | 'low-carb' | 'high-carb';

const goalRatios: Record<Goal, [number, number, number]> = {
  balanced: [40, 30, 30],
  'high-protein': [40, 30, 30],
  'low-carb': [25, 5, 70],
  'high-carb': [50, 30, 20],
};

export default function MacroCalculator() {
  const [calories, setCalories] = useState<string>('2000');
  const [goal, setGoal] = useState<Goal>('balanced');
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fats: number } | null>(null);

  useEffect(() => {
    const numCalories = parseFloat(calories);
    if (!isNaN(numCalories) && numCalories > 0) {
      const [proteinPct, carbsPct, fatsPct] = goalRatios[goal];
      const protein = (numCalories * proteinPct) / 400;
      const carbs = (numCalories * carbsPct) / 400;
      const fats = (numCalories * fatsPct) / 900;
      setMacros({ protein: parseFloat(protein.toFixed(2)), carbs: parseFloat(carbs.toFixed(2)), fats: parseFloat(fats.toFixed(2)) });
    } else {
      setMacros(null);
    }
  }, [calories, goal]);

  const handleDownloadPDF = () => {
    if (macros === null) return;

    generateCalculatorPDF({
      title: 'Macro Calculator Results',
      inputs: [
        { label: 'Daily Calories', value: calories },
        { label: 'Goal', value: goal },
      ],
      results: [
        { label: 'Protein (g)', value: `${macros.protein} g` },
        { label: 'Carbs (g)', value: `${macros.carbs} g` },
        { label: 'Fats (g)', value: `${macros.fats} g` },
      ],
    });
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const chartData = macros !== null ? [
    { name: 'Protein', value: macros.protein },
    { name: 'Carbs', value: macros.carbs },
    { name: 'Fats', value: macros.fats },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="calories">Daily Calories</Label>
        <Input
          id="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal">Goal</Label>
        <Select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value as Goal)}
        >
          <option value="balanced">Balanced (40/30/30)</option>
          <option value="high-protein">High Protein (40/30/30)</option>
          <option value="low-carb">Low Carb (25/5/70)</option>
          <option value="high-carb">High Carb (50/30/20)</option>
        </Select>
      </div>
    </>
  );

  const results = macros !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Macronutrients</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`${macros.protein}g P | ${macros.carbs}g C | ${macros.fats}g F`}
      </div>
    </div>
  ) : null;

  const charts = macros !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Macronutrient Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => percent ? `${name}: ${(percent * 100).toFixed(0)}%` : ''}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}g`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Macro Calculator"
      description="Calculate daily macronutrient needs (protein, carbs, fats) based on your goals."
      inputs={inputs}
      results={results}
      showCharts={true}
      onToggleCharts={() => {}}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
