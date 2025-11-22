'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Results = {
  weeklyCompost: number;
  annualCompost: number;
  totalWaste: number;
  compostYieldPercent: number;
  annualCO2SavedKg: number;
};

export default function CompostCalculator() {
  const [foodWaste, setFoodWaste] = useState<string>('5');
  const [yardWaste, setYardWaste] = useState<string>('3');
  const [result, setResult] = useState<Results | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Composting yield: fraction of input mass that remains as finished compost
  const COMPOST_YIELD = 0.6; // 60% typical
  // Emission factor: estimated kg CO2e avoided per kg of material diverted to compost (simple estimate)
  const CO2E_PER_KG = 0.5;

  useEffect(() => {
    const fw = parseFloat(foodWaste);
    const yw = parseFloat(yardWaste);

    if (!isNaN(fw) && !isNaN(yw) && fw >= 0 && yw >= 0) {
      const totalWaste = fw + yw; // kg per week
      const weeklyCompost = totalWaste * COMPOST_YIELD;
      const annualCompost = weeklyCompost * 52;
      const compostYieldPercent = totalWaste > 0 ? (weeklyCompost / totalWaste) * 100 : 0;
      const annualCO2SavedKg = annualCompost * CO2E_PER_KG;

      setResult({
        weeklyCompost: parseFloat(weeklyCompost.toFixed(3)),
        annualCompost: parseFloat(annualCompost.toFixed(2)),
        totalWaste: parseFloat(totalWaste.toFixed(3)),
        compostYieldPercent: parseFloat(compostYieldPercent.toFixed(1)),
        annualCO2SavedKg: parseFloat(annualCO2SavedKg.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [foodWaste, yardWaste]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Compost Calculator Results',
      inputs: [
        { label: 'Food Waste per Week (kg)', value: foodWaste },
        { label: 'Yard Waste per Week (kg)', value: yardWaste },
      ],
      results: [
        { label: 'Total Waste (kg/week)', value: `${result.totalWaste} kg/week` },
        { label: 'Estimated Compost Produced (kg/week)', value: `${result.weeklyCompost} kg/week` },
        { label: 'Estimated Compost Produced (kg/year)', value: `${result.annualCompost} kg/year` },
        { label: 'Estimated Annual GHG Reduction (kg CO2e/year)', value: `${result.annualCO2SavedKg} kg CO2e/year` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Food Waste', value: parseFloat(foodWaste) || 0, color: '#10b981' },
    { label: 'Yard Waste', value: parseFloat(yardWaste) || 0, color: '#60a5fa' },
    { label: 'Compost (week)', value: result.weeklyCompost, color: '#f59e0b' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="foodWaste">Food Waste per Week (kg)</Label>
        <Input
          id="foodWaste"
          type="number"
          value={foodWaste}
          onChange={(e) => setFoodWaste(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yardWaste">Yard Waste per Week (kg)</Label>
        <Input
          id="yardWaste"
          type="number"
          value={yardWaste}
          onChange={(e) => setYardWaste(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      {/* Included Select import to follow project patterns; hidden so it doesn't change calculator inputs
          (keeps primary inputs exactly as specified). */}
      <div className="hidden">
        <Label htmlFor="units">Units</Label>
        <Select id="units" value="kg" onChange={() => {}}>
          <option value="kg">Kilograms (kg)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Compost Output (Weekly)</div>
      <div className="text-5xl font-bold text-green-800 my-3">{result.weeklyCompost.toLocaleString()} kg</div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-500">Total Waste</div>
          <div className="text-2xl font-semibold text-gray-900">{result.totalWaste.toLocaleString()} kg/week</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-500">Compost Yield</div>
          <div className="text-2xl font-semibold text-gray-900">{result.compostYieldPercent}%</div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600">Estimated Annual Compost</div>
      <div className="text-xl font-medium text-gray-800">{result.annualCompost.toLocaleString()} kg / year</div>

      <div className="mt-4 text-sm text-gray-600">Estimated Annual GHG Reduction</div>
      <div className="text-lg font-medium text-gray-800">{result.annualCO2SavedKg.toLocaleString()} kg CO2e / year</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Weekly Waste vs. Compost Produced</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg`} />
          <Bar dataKey="value" fill="#34d399" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Compost Calculator"
      description="Estimate how much compost you can produce from food and yard waste, and the potential greenhouse gas reductions from diverting organics from landfill."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
