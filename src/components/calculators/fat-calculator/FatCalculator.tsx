'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultUnit = 'g' | 'kcal';

export default function FatCalculator() {
  const [dailyCalories, setDailyCalories] = useState<string>('2000');
  const [fatPercent, setFatPercent] = useState<string>('30');
  const [resultCalories, setResultCalories] = useState<number | null>(null);
  const [resultGrams, setResultGrams] = useState<number | null>(null);
  const [otherCalories, setOtherCalories] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [resultUnit, setResultUnit] = useState<ResultUnit>('g');

  useEffect(() => {
    const cal = parseFloat(dailyCalories);
    const pct = parseFloat(fatPercent);

    if (!isNaN(cal) && cal >= 0 && !isNaN(pct) && pct >= 0 && pct <= 100) {
      const fatCals = (cal * pct) / 100;
      const grams = fatCals / 9; // 9 kcal per gram of fat
      const otherCals = Math.max(0, cal - fatCals);

      setResultCalories(parseFloat(fatCals.toFixed(2)));
      setResultGrams(parseFloat(grams.toFixed(2)));
      setOtherCalories(parseFloat(otherCals.toFixed(2)));
    } else {
      setResultCalories(null);
      setResultGrams(null);
      setOtherCalories(null);
    }
  }, [dailyCalories, fatPercent]);

  const handleDownloadPDF = () => {
    if (resultCalories === null || resultGrams === null) return;

    generateCalculatorPDF({
      title: 'Daily Fat Intake Calculation',
      inputs: [
        { label: 'Daily Calorie Intake', value: `${dailyCalories} kcal` },
        { label: 'Fat Percentage of Diet', value: `${fatPercent} %` },
      ],
      results: [
        { label: 'Calories from Fat', value: `${resultCalories} kcal` },
        { label: 'Fat in Grams', value: `${resultGrams} g` },
      ],
    });
  };

  const chartData = resultCalories !== null && otherCalories !== null ? [
    { name: 'Fat Calories', value: resultCalories },
    { name: 'Other Calories', value: otherCalories },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="dailyCalories">Daily Calorie Intake</Label>
        <Input
          id="dailyCalories"
          type="number"
          value={dailyCalories}
          onChange={(e) => setDailyCalories(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fatPercent">Fat Percentage of Diet (%)</Label>
          <Input
            id="fatPercent"
            type="number"
            value={fatPercent}
            onChange={(e) => setFatPercent(e.target.value)}
            min="0"
            max="100"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultUnit">Display As</Label>
          <Select
            id="resultUnit"
            value={resultUnit}
            onChange={(e) => setResultUnit(e.target.value as ResultUnit)}
          >
            <option value="g">Fat (grams)</option>
            <option value="kcal">Fat (kcal)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = resultCalories !== null && resultGrams !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Daily Fat</div>

      {resultUnit === 'g' ? (
        <>
          <div className="text-5xl font-bold text-blue-900 my-3">{resultGrams.toLocaleString()} g</div>
          <div className="text-lg text-gray-700">({resultCalories.toLocaleString()} kcal from fat)</div>
        </>
      ) : (
        <>
          <div className="text-5xl font-bold text-blue-900 my-3">{resultCalories.toLocaleString()} kcal</div>
          <div className="text-lg text-gray-700">({resultGrams.toLocaleString()} g of fat)</div>
        </>
      )}

      <div className="mt-3 text-sm text-gray-600">Based on {dailyCalories} kcal at {fatPercent}% fat</div>
    </div>
  ) : (
    <div className="text-center text-sm text-gray-600">Enter valid inputs to see results</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Calories Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kcal`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Fat Calculator"
      description="Calculate daily fat intake needs. Enter your daily calorie intake and the percentage of calories from fat to get estimated grams of fat per day."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
