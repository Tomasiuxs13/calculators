'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ProgressiveOverloadCalculator() {
  const [currentWeight, setCurrentWeight] = useState<string>('80');
  const [incrementPercent, setIncrementPercent] = useState<string>('5');
  const [newWeight, setNewWeight] = useState<number | null>(null);
  const [increaseAmount, setIncreaseAmount] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const w = parseFloat(currentWeight);
    const p = parseFloat(incrementPercent);

    if (!isNaN(w) && w >= 0 && !isNaN(p)) {
      const increase = (w * p) / 100;
      const updated = w + increase;
      setIncreaseAmount(parseFloat(increase.toFixed(2)));
      setNewWeight(parseFloat(updated.toFixed(2)));
    } else {
      setIncreaseAmount(null);
      setNewWeight(null);
    }
  }, [currentWeight, incrementPercent]);

  const handleDownloadPDF = () => {
    if (newWeight === null || increaseAmount === null) return;

    generateCalculatorPDF({
      title: 'Progressive Overload Calculator Results',
      inputs: [
        { label: 'Current Weight (kg)', value: currentWeight },
        { label: 'Increment Percentage (%)', value: incrementPercent },
      ],
      results: [
        { label: 'Increase Amount (kg)', value: `${increaseAmount} kg` },
        { label: 'New Weight (kg)', value: `${newWeight} kg` },
      ],
    });
  };

  const chartData = newWeight !== null && increaseAmount !== null ? [
    { label: 'Current', value: parseFloat(currentWeight) || 0, unit: 'kg' },
    { label: 'Increase', value: increaseAmount, unit: 'kg' },
    { label: 'New', value: newWeight, unit: 'kg' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentWeight">Current Weight (kg)</Label>
        <Input
          id="currentWeight"
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          min="0"
          step="0.5"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="incrementPercent">Increment Percentage (%)</Label>
        <Input
          id="incrementPercent"
          type="number"
          value={incrementPercent}
          onChange={(e) => setIncrementPercent(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>
    </>
  );

  const results = newWeight !== null && increaseAmount !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Progressive Overload Result</div>
      <div className="text-4xl font-bold text-green-700 my-2">
        {newWeight.toLocaleString()} kg
      </div>
      <div className="text-lg text-gray-700">+{increaseAmount.toLocaleString()} kg ({incrementPercent}% increase)</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Progressive Overload Visualization</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Progressive Overload Calculator"
      description="Calculate progressive overload increments. Enter your current working weight and desired increment percentage to see the new target weight."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
