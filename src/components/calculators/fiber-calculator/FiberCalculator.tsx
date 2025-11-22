'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';

export default function FiberCalculator() {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<Gender>('male');
  const [calories, setCalories] = useState<string>('2000');
  const [calorieBasedRecommendation, setCalorieBasedRecommendation] = useState<number | null>(null);
  const [ageGenderRecommendation, setAgeGenderRecommendation] = useState<number | null>(null);
  const [finalRecommendation, setFinalRecommendation] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Age & gender based reference values (grams/day)
  // Common adult recommendations used for reference: men (<=50:38, >50:30), women (<=50:25, >50:21)
  const ageGenderTable = (ageNum: number, g: Gender) => {
    if (g === 'male') {
      return ageNum > 50 ? 30 : 38;
    }
    return ageNum > 50 ? 21 : 25;
  };

  useEffect(() => {
    const ageNum = parseInt(age, 10);
    const calNum = parseFloat(calories);

    if (!isNaN(calNum) && calNum > 0) {
      // Institute of Medicine guideline: 14g of fiber per 1000 kcal
      const calc = (calNum / 1000) * 14;
      setCalorieBasedRecommendation(parseFloat(calc.toFixed(2)));
    } else {
      setCalorieBasedRecommendation(null);
    }

    if (!isNaN(ageNum) && ageNum >= 0) {
      const ageRec = ageGenderTable(ageNum, gender);
      setAgeGenderRecommendation(ageRec);
    } else {
      setAgeGenderRecommendation(null);
    }

    // Final recommendation: choose the higher of calorie-based and age/gender reference to be conservative
    if (!isNaN(calNum) && calNum > 0 && !isNaN(ageNum) && ageNum >= 0) {
      const calc = (calNum / 1000) * 14;
      const ageRec = ageGenderTable(ageNum, gender);
      const finalVal = Math.max(calc, ageRec);
      setFinalRecommendation(parseFloat(finalVal.toFixed(2)));
    } else {
      setFinalRecommendation(null);
    }
  }, [age, gender, calories]);

  const handleDownloadPDF = () => {
    if (finalRecommendation === null) return;

    generateCalculatorPDF({
      title: 'Daily Fiber Needs',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Daily Calorie Intake', value: calories },
      ],
      results: [
        { label: 'Calorie-based Recommendation', value: calorieBasedRecommendation !== null ? `${calorieBasedRecommendation} g` : 'N/A' },
        { label: 'Age & Gender Reference', value: ageGenderRecommendation !== null ? `${ageGenderRecommendation} g` : 'N/A' },
        { label: 'Final Recommended Fiber', value: `${finalRecommendation} g` },
      ],
    });
  };

  const chartData = finalRecommendation !== null && calorieBasedRecommendation !== null && ageGenderRecommendation !== null ? [
    { label: 'Calories (14g/1000 kcal)', value: calorieBasedRecommendation },
    { label: 'Age/Gender Reference', value: ageGenderRecommendation },
    { label: 'Final Recommendation', value: finalRecommendation },
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
          step="1"
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
        <Label htmlFor="calories">Daily Calorie Intake</Label>
        <Input
          id="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min="0"
          step="50"
        />
      </div>
    </>
  );

  const results = finalRecommendation !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Daily Fiber</div>
      <div className="text-5xl font-bold text-green-800 my-3">{finalRecommendation.toLocaleString()} g</div>
      <div className="text-sm text-gray-700">
        Based on {calorieBasedRecommendation !== null ? `${calorieBasedRecommendation} g (calorie-based)` : 'calorie data'} and {ageGenderRecommendation !== null ? `${ageGenderRecommendation} g (age & gender reference)` : 'age/gender data'}
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Fiber Recommendations Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} g`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Fiber Calculator"
      description="Calculate daily fiber needs based on age, gender, and calorie intake. Uses IOM guideline of 14g per 1000 kcal and common age/gender reference values to provide a conservative recommendation."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
