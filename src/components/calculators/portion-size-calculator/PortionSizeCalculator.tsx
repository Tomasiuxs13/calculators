'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FoodType = 'protein' | 'carbs' | 'vegetables';

// kcal per gram for each food type (base unit: kcal -> convert to grams)
const kcalPerGram: Record<FoodType, number> = {
  protein: 4, // 4 kcal per gram
  carbs: 4,   // 4 kcal per gram
  vegetables: 0.5, // approximate 0.5 kcal per gram for many non-starchy vegetables
};

// Recommended daily proportion of total calories coming from each type (simple guideline)
const calorieProportion: Record<FoodType, number> = {
  protein: 0.3,
  carbs: 0.45,
  vegetables: 0.25,
};

export default function PortionSizeCalculator() {
  const [foodType, setFoodType] = useState<FoodType>('protein');
  const [dailyCalories, setDailyCalories] = useState<string>('2000');
  const [mealsPerDay, setMealsPerDay] = useState<string>('3');
  const [resultGramsPerMeal, setResultGramsPerMeal] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const kcal = parseFloat(dailyCalories);
    const meals = parseFloat(mealsPerDay);

    if (!isNaN(kcal) && kcal > 0 && !isNaN(meals) && meals > 0) {
      // Convert to base unit (calories allocated to this food type per day)
      const proportion = calorieProportion[foodType];
      const caloriesForTypePerDay = kcal * proportion; // base unit: kcal

      // Convert calories to grams using kcal per gram for the selected food type
      const gramsTotalPerDay = caloriesForTypePerDay / kcalPerGram[foodType];

      // Divide into meals
      const gramsPerMeal = gramsTotalPerDay / meals;

      setResultGramsPerMeal(parseFloat(gramsPerMeal.toFixed(2)));
    } else {
      setResultGramsPerMeal(null);
    }
  }, [foodType, dailyCalories, mealsPerDay]);

  const handleDownloadPDF = () => {
    if (resultGramsPerMeal === null) return;

    generateCalculatorPDF({
      title: 'Portion Size Calculator Results',
      inputs: [
        { label: 'Food Type', value: foodType },
        { label: 'Daily Calorie Goal', value: dailyCalories },
        { label: 'Meals per Day', value: mealsPerDay },
      ],
      results: [
        { label: 'Recommended Portion (grams per meal)', value: `${resultGramsPerMeal} g` },
      ],
    });
  };

  // Prepare chart data by recalculating same values (so charts reflect current state immediately)
  const parseKcal = parseFloat(dailyCalories);
  const parseMeals = parseFloat(mealsPerDay);
  const proportion = calorieProportion[foodType];

  const caloriesForTypePerDay = (!isNaN(parseKcal) && parseKcal > 0) ? parseKcal * proportion : 0;
  const gramsPerMeal = (caloriesForTypePerDay > 0 && !isNaN(parseMeals) && parseMeals > 0)
    ? parseFloat(((caloriesForTypePerDay / kcalPerGram[foodType]) / parseMeals).toFixed(2))
    : 0;

  const chartData = resultGramsPerMeal !== null ? [
    { label: 'Calories / Day', value: parseFloat(caloriesForTypePerDay.toFixed(0)), unit: 'kcal' },
    { label: 'Grams / Meal', value: gramsPerMeal, unit: 'g' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="foodType">Food Type</Label>
        <Select
          id="foodType"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value as FoodType)}
        >
          <option value="protein">Protein</option>
          <option value="carbs">Carbohydrates</option>
          <option value="vegetables">Vegetables</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dailyCalories">Daily Calorie Goal</Label>
        <Input
          id="dailyCalories"
          type="number"
          value={dailyCalories}
          onChange={(e) => setDailyCalories(e.target.value)}
          min="0"
          step="50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mealsPerDay">Meals per Day</Label>
        <Input
          id="mealsPerDay"
          type="number"
          value={mealsPerDay}
          onChange={(e) => setMealsPerDay(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = resultGramsPerMeal !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Portion</div>
      <div className="text-5xl font-bold text-green-800 my-3">
        {resultGramsPerMeal.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">grams per meal</div>
      <div className="text-sm text-gray-500 mt-3">({Math.round(caloriesForTypePerDay)} kcal allocated per day to {foodType})</div>
    </div>
  ) : null;

  const charts = showCharts && resultGramsPerMeal !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Portion Size Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => `${value.toFixed(2)} ${props && props.payload ? props.payload.unit : ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Portion Size Calculator"
      description="Calculate appropriate portion sizes based on your goals. Estimates portions (grams per meal) for proteins, carbohydrates, or vegetables given your daily calorie target and meals per day."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
