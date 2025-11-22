'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Result = {
  costPerServing: number;
  profitPerServing: number;
  profitMarginPercent: number;
  totalCost: number;
};

export default function FoodCostCalculator() {
  const [ingredientCost, setIngredientCost] = useState<string>('20');
  const [servings, setServings] = useState<string>('4');
  const [sellingPrice, setSellingPrice] = useState<string>('8');
  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const cost = parseFloat(ingredientCost);
    const serves = parseFloat(servings);
    const sell = parseFloat(sellingPrice);

    if (!isNaN(cost) && !isNaN(serves) && serves > 0 && !isNaN(sell) && cost >= 0 && sell >= 0) {
      const totalCost = cost;
      const costPerServing = totalCost / serves;
      const profitPerServing = sell - costPerServing;
      const profitMarginPercent = sell > 0 ? (profitPerServing / sell) * 100 : 0;

      setResult({
        costPerServing: parseFloat(costPerServing.toFixed(2)),
        profitPerServing: parseFloat(profitPerServing.toFixed(2)),
        profitMarginPercent: parseFloat(profitMarginPercent.toFixed(2)),
        totalCost: parseFloat(totalCost.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [ingredientCost, servings, sellingPrice]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Food Cost Calculator Results',
      inputs: [
        { label: 'Total Ingredient Cost', value: ingredientCost },
        { label: 'Number of Servings', value: servings },
        { label: 'Selling Price per Serving', value: sellingPrice },
      ],
      results: [
        { label: 'Cost per Serving', value: `$${result.costPerServing.toFixed(2)}` },
        { label: 'Profit per Serving', value: `$${result.profitPerServing.toFixed(2)}` },
        { label: 'Profit Margin', value: `${result.profitMarginPercent.toFixed(2)}%` },
      ],
    });
  };

  const chartData = result
    ? [
        { name: 'Cost / Serving', value: result.costPerServing, label: 'Cost' },
        { name: 'Selling Price', value: parseFloat(sellingPrice) || 0, label: 'Price' },
        { name: 'Profit / Serving', value: result.profitPerServing, label: 'Profit' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="ingredientCost">Total Ingredient Cost</Label>
        <Input
          id="ingredientCost"
          type="number"
          value={ingredientCost}
          onChange={(e) => setIngredientCost(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
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

        <div className="space-y-2">
          <Label htmlFor="sellingPrice">Selling Price per Serving</Label>
          <Input
            id="sellingPrice"
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Cost & Profit Summary</div>
      <div className="text-3xl font-bold text-blue-900 my-2">${result.costPerServing.toLocaleString()}</div>
      <div className="text-sm text-gray-700 mb-4">Cost per Serving</div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-3 rounded shadow">
          <div className="text-xs text-gray-500">Selling Price</div>
          <div className="text-lg font-semibold text-gray-900">${parseFloat(sellingPrice || '0').toFixed(2)}</div>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <div className="text-xs text-gray-500">Profit / Serving</div>
          <div className="text-lg font-semibold text-gray-900">${result.profitPerServing.toFixed(2)}</div>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <div className="text-xs text-gray-500">Profit Margin</div>
          <div className="text-lg font-semibold text-gray-900">{result.profitMarginPercent.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cost vs Price vs Profit</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Food Cost Calculator"
      description="Calculate food cost per serving and profit margins."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
