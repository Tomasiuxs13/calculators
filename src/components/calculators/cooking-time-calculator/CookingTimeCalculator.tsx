'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FoodType = 'chicken' | 'beef' | 'pork';
type CookingMethod = 'roast' | 'grill' | 'bake';

// Base times in minutes per kilogram for each food type and cooking method
const timePerKg: Record<FoodType, Record<CookingMethod, number>> = {
  chicken: {
    roast: 45, // minutes per kg
    grill: 30,
    bake: 40,
  },
  beef: {
    roast: 60,
    grill: 35,
    bake: 70,
  },
  pork: {
    roast: 55,
    grill: 40,
    bake: 60,
  },
};

export default function CookingTimeCalculator() {
  const [foodType, setFoodType] = useState<FoodType>('chicken');
  const [weight, setWeight] = useState<string>('1');
  const [cookingMethod, setCookingMethod] = useState<CookingMethod>('roast');
  const [timePerKgValue, setTimePerKgValue] = useState<number>(timePerKg['chicken']['roast']);
  const [totalMinutes, setTotalMinutes] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate whenever inputs change
  useEffect(() => {
    const kg = parseFloat(weight);
    const perKg = timePerKg[foodType][cookingMethod];
    setTimePerKgValue(perKg);

    if (!isNaN(kg) && kg > 0) {
      const total = perKg * kg; // convert base (min/kg) -> total minutes
      setTotalMinutes(parseFloat(total.toFixed(1)));
    } else {
      setTotalMinutes(null);
    }
  }, [foodType, weight, cookingMethod]);

  const handleDownloadPDF = () => {
    if (totalMinutes === null) return;

    const hours = Math.floor(totalMinutes / 60);
    const mins = Math.round(totalMinutes % 60);

    generateCalculatorPDF({
      title: 'Cooking Time Calculator Results',
      inputs: [
        { label: 'Food Type', value: foodType },
        { label: 'Weight (kg)', value: weight },
        { label: 'Cooking Method', value: cookingMethod },
      ],
      results: [
        { label: 'Time per kg', value: `${timePerKgValue} min/kg` },
        { label: 'Total Time', value: `${totalMinutes} min (${hours}h ${mins}m)` },
      ],
    });
  };

  const chartData = totalMinutes !== null ? [
    { label: 'Per kg', value: timePerKgValue, unit: 'min/kg' },
    { label: 'Total', value: totalMinutes, unit: 'min' },
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
          <option value="chicken">Chicken</option>
          <option value="beef">Beef</option>
          <option value="pork">Pork</option>
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
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cookingMethod">Cooking Method</Label>
        <Select
          id="cookingMethod"
          value={cookingMethod}
          onChange={(e) => setCookingMethod(e.target.value as CookingMethod)}
        >
          <option value="roast">Roast</option>
          <option value="grill">Grill</option>
          <option value="bake">Bake</option>
        </Select>
      </div>
    </>
  );

  const results = totalMinutes !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Cooking Time</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {totalMinutes.toLocaleString()} <span className="text-2xl">min</span>
      </div>
      <div className="text-lg text-gray-700">
        {Math.floor(totalMinutes / 60) > 0 ? (
          <span>{Math.floor(totalMinutes / 60)}h {Math.round(totalMinutes % 60)}m</span>
        ) : (
          <span>{Math.round(totalMinutes % 60)}m</span>
        )}
      </div>
      <div className="text-sm text-gray-500 mt-3">{timePerKgValue} min per kg for {foodType} ({cookingMethod})</div>
    </div>
  ) : null;

  const charts = showCharts && totalMinutes !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cooking Time Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} ${chartData.find(d => d.value === value)?.unit || 'min'}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cooking Time Calculator"
      description="Calculate cooking times based on food type and weight. Supports chicken, beef, and pork with common cooking methods."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
