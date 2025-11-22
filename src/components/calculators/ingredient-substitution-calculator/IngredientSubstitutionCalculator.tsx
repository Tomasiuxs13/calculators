'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type IngredientKey = 'butter' | 'eggs' | 'flour';
type VolumeUnit = 'cup' | 'tbsp' | 'tsp';

type Substitute = {
  name: string;
  ratio: number; // multiplier to apply to original amount (in base unit)
  note?: string;
};

const unitConversions: Record<VolumeUnit, number> = {
  // conversions to base unit: teaspoon (tsp)
  cup: 48, // 1 cup = 16 tbsp = 48 tsp
  tbsp: 3, // 1 tbsp = 3 tsp
  tsp: 1,
};

const substitutions: Record<IngredientKey, Substitute[]> = {
  butter: [
    { name: 'Vegetable Oil', ratio: 0.75, note: 'Use 3/4 the amount of oil as a direct swap.' },
    { name: 'Applesauce', ratio: 0.5, note: 'Use half the amount for moisture; best for baking.' },
  ],
  eggs: [
    { name: 'Flaxseed Meal + Water', ratio: 3, note: '1 egg ≈ 1 tbsp flax + 3 tbsp water (measured in tbsp).' },
    { name: 'Mashed Banana', ratio: 3, note: 'Use ~3 tbsp mashed banana per egg (adds sweetness).' },
  ],
  flour: [
    { name: 'Almond Flour', ratio: 0.75, note: 'Use 75% of wheat flour by volume; adjust liquids.' },
    { name: 'Coconut Flour', ratio: 0.25, note: 'Start with 25% and increase liquids — highly absorbent.' },
  ],
};

export default function IngredientSubstitutionCalculator() {
  const [ingredient, setIngredient] = useState<IngredientKey>('butter');
  const [amount, setAmount] = useState<string>('1');
  const [unit, setUnit] = useState<VolumeUnit>('cup');
  const [results, setResults] = useState<{
    name: string;
    amountInUnit: number;
    note?: string;
  }[] | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [originalAmountInUnit, setOriginalAmountInUnit] = useState<number | null>(null);

  useEffect(() => {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) {
      setResults(null);
      setOriginalAmountInUnit(null);
      return;
    }

    // Convert original amount to base unit (tsp)
    const baseTsp = num * unitConversions[unit];

    const subs = substitutions[ingredient];

    const computed = subs.map((s) => {
      const substitutedBaseTsp = baseTsp * s.ratio; // convert using ratio in base unit
      const substitutedInUnit = substitutedBaseTsp / unitConversions[unit];
      return {
        name: s.name,
        amountInUnit: parseFloat(substitutedInUnit.toFixed(4)),
        note: s.note,
      };
    });

    setOriginalAmountInUnit(parseFloat(num.toFixed(4)));
    setResults(computed);
  }, [ingredient, amount, unit]);

  const handleDownloadPDF = () => {
    if (results === null || originalAmountInUnit === null) return;

    generateCalculatorPDF({
      title: 'Ingredient Substitution Results',
      inputs: [
        { label: 'Ingredient', value: ingredient },
        { label: 'Amount', value: amount },
        { label: 'Unit', value: unit },
      ],
      results: results.map((r) => ({ label: r.name, value: `${r.amountInUnit} ${unit}`, note: r.note })),
    });
  };

  const chartData = results
    ? [
        { label: 'Original', value: originalAmountInUnit || 0, name: 'Original' },
        ...results.map((r) => ({ label: r.name, value: r.amountInUnit, name: r.name })),
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="ingredient">Ingredient</Label>
        <Select
          id="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value as IngredientKey)}
        >
          <option value="butter">Butter</option>
          <option value="eggs">Eggs</option>
          <option value="flour">Flour</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Unit</Label>
        <Select id="unit" value={unit} onChange={(e) => setUnit(e.target.value as VolumeUnit)}>
          <option value="cup">Cup</option>
          <option value="tbsp">Tablespoon</option>
          <option value="tsp">Teaspoon</option>
        </Select>
      </div>
    </>
  );

  const resultsDisplay = results ? (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Original</div>
        <div className="text-4xl font-bold text-blue-900 my-2">
          {originalAmountInUnit?.toLocaleString()} {unit}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((r) => (
          <div key={r.name} className="p-4 border rounded-lg bg-white">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm text-gray-600">Substitute</div>
                <div className="text-xl font-semibold text-gray-900">{r.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Amount</div>
                <div className="text-2xl font-bold text-blue-800">{r.amountInUnit.toLocaleString()} {unit}</div>
              </div>
            </div>
            {r.note && <div className="mt-3 text-sm text-gray-700">{r.note}</div>}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter a valid amount to see substitutions.</div>
  );

  const charts = showCharts && results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Substitution Comparison ({unit})</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${unit}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Ingredient Substitution Calculator"
      description="Find ingredient substitutions and conversion ratios. Supports common swaps and gives approximate amounts in your chosen unit."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
