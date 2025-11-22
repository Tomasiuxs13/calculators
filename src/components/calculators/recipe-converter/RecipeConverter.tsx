'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'cups' | 'tbsp' | 'tsp';

// Convert everything to teaspoons as base unit
const volumeToTsp: Record<VolumeUnit, number> = {
  tsp: 1,
  tbsp: 3, // 1 tbsp = 3 tsp
  cups: 48, // 1 cup = 16 tbsp = 48 tsp
};

export default function RecipeConverter() {
  const [originalServings, setOriginalServings] = useState<string>('4');
  const [newServings, setNewServings] = useState<string>('8');
  const [ingredientAmount, setIngredientAmount] = useState<string>('2');
  const [unit, setUnit] = useState<VolumeUnit>('cups');

  const [scaledAmount, setScaledAmount] = useState<number | null>(null);
  const [equivalents, setEquivalents] = useState<Record<VolumeUnit, number> | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate on input change
  useEffect(() => {
    const orig = parseFloat(originalServings);
    const nw = parseFloat(newServings);
    const amt = parseFloat(ingredientAmount);

    if (isNaN(orig) || isNaN(nw) || isNaN(amt) || orig <= 0 || nw <= 0 || amt < 0) {
      setScaledAmount(null);
      setEquivalents(null);
      return;
    }

    // Scale by serving ratio
    const scaled = (amt * (nw / orig));

    // Convert scaled amount to base (tsp) for consistent equivalents
    const scaledInTsp = scaled * volumeToTsp[unit];

    const eq: Record<VolumeUnit, number> = {
      cups: parseFloat((scaledInTsp / volumeToTsp.cups).toFixed(6)),
      tbsp: parseFloat((scaledInTsp / volumeToTsp.tbsp).toFixed(6)),
      tsp: parseFloat((scaledInTsp / volumeToTsp.tsp).toFixed(6)),
    };

    setScaledAmount(parseFloat(scaled.toFixed(6)));
    setEquivalents(eq);
  }, [originalServings, newServings, ingredientAmount, unit]);

  const handleDownloadPDF = () => {
    if (scaledAmount === null || equivalents === null) return;

    generateCalculatorPDF({
      title: 'Recipe Conversion Results',
      inputs: [
        { label: 'Original Servings', value: originalServings },
        { label: 'New Servings', value: newServings },
        { label: 'Ingredient Amount', value: ingredientAmount },
        { label: 'Unit', value: unit },
      ],
      results: [
        { label: 'Scaled Amount', value: `${scaledAmount} ${unit}` },
        { label: 'Equivalent (cups)', value: `${equivalents.cups} cups` },
        { label: 'Equivalent (tbsp)', value: `${equivalents.tbsp} tbsp` },
        { label: 'Equivalent (tsp)', value: `${equivalents.tsp} tsp` },
      ],
    });
  };

  const chartData = scaledAmount !== null ? [
    { label: 'Original', value: parseFloat(ingredientAmount) || 0, unit },
    { label: 'Scaled', value: scaledAmount, unit },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 space-y-2">
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
            onChange={(e) => setUnit(e.target.value as VolumeUnit)}
          >
            <option value="cups">Cups</option>
            <option value="tbsp">Tablespoons</option>
            <option value="tsp">Teaspoons</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = scaledAmount !== null && equivalents !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Scaled Ingredient</div>
      <div className="text-5xl font-bold text-green-800 my-3">{scaledAmount.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-4">{unit}</div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Cups</div>
          <div className="text-lg font-medium">{equivalents.cups.toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Tablespoons</div>
          <div className="text-lg font-medium">{equivalents.tbsp.toLocaleString()}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Teaspoons</div>
          <div className="text-lg font-medium">{equivalents.tsp.toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && scaledAmount !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Ingredient Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Recipe Converter"
      description="Convert recipe measurements and serving sizes. Scale ingredient amounts and view equivalents across cups, tablespoons, and teaspoons."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
