'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Results = {
  wasteKg: number;
  wastePercent: number;
  wasteCost: number;
  savedKgScenario: number;
  savedCostScenario: number;
} | null;

export default function FoodWasteCalculator() {
  const [foodPurchased, setFoodPurchased] = useState<string>('100');
  const [foodWasted, setFoodWasted] = useState<string>('20');
  const [costPerKg, setCostPerKg] = useState<string>('5');
  // Select to choose a reduction scenario (not part of the required inputs list but used in UI)
  const [reductionScenario, setReductionScenario] = useState<'0' | '25' | '50' | '75' | '100'>('50');
  const [result, setResult] = useState<Results>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const purchased = parseFloat(foodPurchased);
    const wasted = parseFloat(foodWasted);
    const cost = parseFloat(costPerKg);
    const reductionPercent = parseFloat(reductionScenario);

    if (
      !isNaN(purchased) && !isNaN(wasted) && !isNaN(cost) &&
      purchased >= 0 && wasted >= 0 && cost >= 0 && purchased >= wasted
    ) {
      const wasteKg = wasted;
      const wastePercent = purchased === 0 ? 0 : (wasteKg / purchased) * 100;
      const wasteCost = wasteKg * cost;
      const savedKgScenario = (reductionPercent / 100) * wasteKg; // kg saved under selected reduction scenario
      const savedCostScenario = savedKgScenario * cost;

      setResult({
        wasteKg: parseFloat(wasteKg.toFixed(3)),
        wastePercent: parseFloat(wastePercent.toFixed(2)),
        wasteCost: parseFloat(wasteCost.toFixed(2)),
        savedKgScenario: parseFloat(savedKgScenario.toFixed(3)),
        savedCostScenario: parseFloat(savedCostScenario.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [foodPurchased, foodWasted, costPerKg, reductionScenario]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Food Waste Calculator Results',
      inputs: [
        { label: 'Food Purchased (kg)', value: foodPurchased },
        { label: 'Food Wasted (kg)', value: foodWasted },
        { label: 'Cost per kg', value: costPerKg },
        { label: 'Reduction Scenario', value: `${reductionScenario}%` },
      ],
      results: [
        { label: 'Wasted (kg)', value: `${result.wasteKg} kg` },
        { label: 'Wasted (%)', value: `${result.wastePercent} %` },
        { label: 'Wasted Cost', value: `$${result.wasteCost}` },
        { label: `Saved (${reductionScenario}%) (kg)`, value: `${result.savedKgScenario} kg` },
        { label: `Saved (${reductionScenario}%) (cost)`, value: `$${result.savedCostScenario}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Purchased', value: parseFloat(foodPurchased) || 0, color: '#3b82f6' },
    { label: 'Wasted', value: result.wasteKg, color: '#ef4444' },
    { label: `Saved (${reductionScenario}%)`, value: result.savedKgScenario, color: '#10b981' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="foodPurchased">Food Purchased (kg)</Label>
        <Input
          id="foodPurchased"
          type="number"
          value={foodPurchased}
          onChange={(e) => setFoodPurchased(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="foodWasted">Food Wasted (kg)</Label>
        <Input
          id="foodWasted"
          type="number"
          value={foodWasted}
          onChange={(e) => setFoodWasted(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="costPerKg">Cost per kg</Label>
        <Input
          id="costPerKg"
          type="number"
          value={costPerKg}
          onChange={(e) => setCostPerKg(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reductionScenario">Reduction Scenario</Label>
        <Select
          id="reductionScenario"
          value={reductionScenario}
          onChange={(e) => setReductionScenario(e.target.value as '0' | '25' | '50' | '75' | '100')}
        >
          <option value="0">0% (no change)</option>
          <option value="25">25% reduction</option>
          <option value="50">50% reduction</option>
          <option value="75">75% reduction</option>
          <option value="100">100% reduction (eliminate waste)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Summary</div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Wasted</div>
          <div className="text-2xl font-bold text-red-600 mt-2">{result.wasteKg.toLocaleString()} kg</div>
          <div className="text-sm text-gray-600">{result.wastePercent}% of purchased</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Wasted Cost</div>
          <div className="text-2xl font-bold text-blue-900 mt-2">${result.wasteCost.toLocaleString()}</div>
          <div className="text-sm text-gray-600">At ${parseFloat(costPerKg).toFixed(2)} per kg</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Potential Savings ({reductionScenario}%)</div>
          <div className="text-2xl font-bold text-green-600 mt-2">${result.savedCostScenario.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Saves {result.savedKgScenario} kg</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid non-negative numbers. Purchased should be greater than or equal to wasted.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Food Waste Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${Number(value).toLocaleString()} kg`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Food Waste Calculator"
      description="Calculate food waste, wasted cost, and potential cost savings from reduction scenarios."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
