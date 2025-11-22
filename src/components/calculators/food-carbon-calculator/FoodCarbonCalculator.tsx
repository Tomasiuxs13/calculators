'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FoodType = 'beef' | 'chicken' | 'vegetables';

// Emission factors in kg CO2e per kg of product (base unit = kg)
const emissionFactors: Record<FoodType, number> = {
  beef: 27.0, // approximate average kg CO2e per kg beef
  chicken: 6.9, // approximate average kg CO2e per kg chicken
  vegetables: 2.0, // approximate average kg CO2e per kg vegetables
};

export default function FoodCarbonCalculator() {
  const [foodType, setFoodType] = useState<FoodType>('beef');
  const [amount, setAmount] = useState<string>('1'); // amount in kg
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const kg = parseFloat(amount);
    if (!isNaN(kg) && kg >= 0) {
      // convert to base unit (kg) first, then multiply by emission factor
      const emissions = kg * emissionFactors[foodType];
      setResult(parseFloat(emissions.toFixed(3)));
    } else {
      setResult(null);
    }
  }, [amount, foodType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Food Carbon Calculator Results',
      inputs: [
        { label: 'Food Type', value: foodType },
        { label: 'Amount (kg)', value: amount },
      ],
      results: [
        { label: 'Estimated Emissions', value: `${result} kg CO2e` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Amount (kg)', value: parseFloat(amount) || 0, unit: 'kg' },
    { label: 'Emissions', value: result, unit: 'kg CO2e' },
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
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="vegetables">Vegetables</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount (kg)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Emissions</div>
      <div className="text-5xl font-bold text-green-800 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">kg CO2e</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Food Carbon Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            const found = chartData.find(d => d.value === value);
            return found ? `${value.toFixed(2)} ${found.unit}` : `${value}`;
          }} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-3 text-sm text-center text-gray-600">Left bar = amount (kg), right bar = estimated emissions (kg CO2e)</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Food Carbon Calculator"
      description="Estimate the carbon footprint of food choices by selecting a food type and entering the amount in kilograms."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
