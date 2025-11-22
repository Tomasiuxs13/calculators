'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Unit = 'cups' | 'tbsp' | 'tsp';

// Convert every unit to teaspoons (tsp) as the base unit
const unitToTsp: Record<Unit, number> = {
  cups: 48, // 1 cup = 16 tbsp * 3 tsp = 48 tsp
  tbsp: 3,  // 1 tablespoon = 3 teaspoons
  tsp: 1,
};

export default function RecipeScalingCalculator() {
  const [originalServings, setOriginalServings] = useState<string>('4');
  const [newServings, setNewServings] = useState<string>('8');
  const [ingredientAmount, setIngredientAmount] = useState<string>('2');
  const [unit, setUnit] = useState<Unit>('cups');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const orig = parseFloat(originalServings);
    const neu = parseFloat(newServings);
    const amt = parseFloat(ingredientAmount);

    if (isNaN(orig) || isNaN(neu) || isNaN(amt) || orig <= 0) {
      setResult(null);
      return;
    }

    // Convert input amount in selected unit to base unit (tsp)
    const amountInTsp = amt * unitToTsp[unit];

    // Scale by ratio (new / original)
    const scaleFactor = neu / orig;
    const scaledTsp = amountInTsp * scaleFactor;

    // Convert back to the selected unit
    const scaledInSelectedUnit = scaledTsp / unitToTsp[unit];

    setResult(parseFloat(scaledInSelectedUnit.toFixed(4)));
  }, [originalServings, newServings, ingredientAmount, unit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Recipe Scaling Results',
      inputs: [
        { label: 'Original Servings', value: originalServings },
        { label: 'New Servings', value: newServings },
        { label: 'Ingredient Amount', value: ingredientAmount },
        { label: 'Unit', value: unit },
      ],
      results: [
        { label: 'Scaled Amount', value: `${result} ${unit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Original', value: parseFloat(ingredientAmount) || 0, unit },
    { label: 'Scaled', value: result, unit },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="originalServings">Original Servings</Label>
          <Input
            id="originalServings"
            type="number"
            value={originalServings}
            onChange={(e) => setOriginalServings(e.target.value)}
            min="1"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newServings">New Servings</Label>
          <Input
            id="newServings"
            type="number"
            value={newServings}
            onChange={(e) => setNewServings(e.target.value)}
            min="1"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ingredientAmount">Ingredient Amount</Label>
          <Input
            id="ingredientAmount"
            type="number"
            value={ingredientAmount}
            onChange={(e) => setIngredientAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
          >
            <option value="cups">Cups</option>
            <option value="tbsp">Tablespoons</option>
            <option value="tsp">Teaspoons</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Scaled Amount</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">{unit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Ingredient Scaling Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Recipe Scaling Calculator"
      description="Scale recipe ingredients up or down based on serving size. Enter the original servings, your desired servings, and the ingredient amount to get the scaled quantity instantly."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
