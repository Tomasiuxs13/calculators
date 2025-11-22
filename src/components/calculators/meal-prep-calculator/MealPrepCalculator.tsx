'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type MacroResults = {
  proteinTotal: number;
  carbsTotal: number;
  fatTotal: number;
  calories: number;
};

export default function MealPrepCalculator() {
  const [servings, setServings] = useState<string>('4');
  const [proteinPerServing, setProteinPerServing] = useState<string>('30');
  const [carbsPerServing, setCarbsPerServing] = useState<string>('40');
  const [fatPerServing, setFatPerServing] = useState<string>('15');
  const [result, setResult] = useState<MacroResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const s = parseFloat(servings);
    const p = parseFloat(proteinPerServing);
    const c = parseFloat(carbsPerServing);
    const f = parseFloat(fatPerServing);

    if (!isNaN(s) && s > 0 && !isNaN(p) && p >= 0 && !isNaN(c) && c >= 0 && !isNaN(f) && f >= 0) {
      const proteinTotal = parseFloat((p * s).toFixed(2));
      const carbsTotal = parseFloat((c * s).toFixed(2));
      const fatTotal = parseFloat((f * s).toFixed(2));
      const calories = parseFloat((proteinTotal * 4 + carbsTotal * 4 + fatTotal * 9).toFixed(2));

      setResult({ proteinTotal, carbsTotal, fatTotal, calories });
    } else {
      setResult(null);
    }
  }, [servings, proteinPerServing, carbsPerServing, fatPerServing]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Meal Prep Calculator Results',
      inputs: [
        { label: 'Number of Servings', value: servings },
        { label: 'Protein per Serving (g)', value: proteinPerServing },
        { label: 'Carbs per Serving (g)', value: carbsPerServing },
        { label: 'Fat per Serving (g)', value: fatPerServing },
      ],
      results: [
        { label: 'Total Protein (g)', value: `${result.proteinTotal} g` },
        { label: 'Total Carbs (g)', value: `${result.carbsTotal} g` },
        { label: 'Total Fat (g)', value: `${result.fatTotal} g` },
        { label: 'Estimated Calories', value: `${result.calories} kcal` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Protein', value: result.proteinTotal, color: '#ef4444' },
    { name: 'Carbs', value: result.carbsTotal, color: '#3b82f6' },
    { name: 'Fat', value: result.fatTotal, color: '#f59e0b' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="servings">Number of Servings</Label>
        <Input
          id="servings"
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="proteinPerServing">Protein per Serving (g)</Label>
          <Input
            id="proteinPerServing"
            type="number"
            value={proteinPerServing}
            onChange={(e) => setProteinPerServing(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="carbsPerServing">Carbs per Serving (g)</Label>
          <Input
            id="carbsPerServing"
            type="number"
            value={carbsPerServing}
            onChange={(e) => setCarbsPerServing(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fatPerServing">Fat per Serving (g)</Label>
          <Input
            id="fatPerServing"
            type="number"
            value={fatPerServing}
            onChange={(e) => setFatPerServing(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center space-y-4">
      <div className="text-sm text-gray-600">Totals for {servings} serving{parseFloat(servings) === 1 ? '' : 's'}</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Protein</div>
          <div className="text-3xl font-bold text-rose-600 mt-2">{result.proteinTotal.toLocaleString()} g</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Carbs</div>
          <div className="text-3xl font-bold text-sky-600 mt-2">{result.carbsTotal.toLocaleString()} g</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Fat</div>
          <div className="text-3xl font-bold text-yellow-600 mt-2">{result.fatTotal.toLocaleString()} g</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Estimated Calories</div>
          <div className="text-3xl font-bold text-blue-900 mt-2">{result.calories.toLocaleString()} kcal</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Macros Needed</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} g`} />
          <Bar dataKey="value" fill="#3b82f6">
            {/* colors are specified in data; recharts Bar will use fill for all - keep consistent */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Meal Prep Calculator"
      description="Calculate ingredients needed for meal prep based on servings. Enter servings and per-serving macros to get total grams and estimated calories."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
