'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FormulaResults = {
  epley: number;
  brzycki: number;
  lombardi: number;
  chosen: number; // primary displayed 1RM
};

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState<string>('80');
  const [reps, setReps] = useState<string>('5');
  const [results, setResults] = useState<FormulaResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate whenever inputs change
  useEffect(() => {
    const w = parseFloat(weight);
    const r = parseInt(reps || '0', 10);

    if (!isNaN(w) && w > 0 && !isNaN(r) && r > 0) {
      // Compute common 1RM estimates
      // Epley: 1RM = weight * (1 + reps/30)
      const epley = w * (1 + r / 30);
      // Brzycki: 1RM = weight * (36 / (37 - reps))
      const brzycki = w * (36 / (37 - r));
      // Lombardi: 1RM = weight * reps^0.1
      const lombardi = w * Math.pow(r, 0.1);

      // Use Epley as the primary displayed value (rounded)
      const chosen = parseFloat(epley.toFixed(2));

      setResults({
        epley: parseFloat(epley.toFixed(2)),
        brzycki: parseFloat(brzycki.toFixed(2)),
        lombardi: parseFloat(lombardi.toFixed(2)),
        chosen,
      });
    } else {
      setResults(null);
    }
  }, [weight, reps]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'One-Rep Max Results',
      inputs: [
        { label: 'Weight Lifted (kg)', value: weight },
        { label: 'Number of Reps', value: reps },
      ],
      results: [
        { label: 'Epley 1RM', value: `${results.epley} kg` },
        { label: 'Brzycki 1RM', value: `${results.brzycki} kg` },
        { label: 'Lombardi 1RM', value: `${results.lombardi} kg` },
        { label: 'Selected 1RM (Epley)', value: `${results.chosen} kg` },
      ],
    });
  };

  const chartData = results
    ? [
        { label: 'Lifted', value: parseFloat(weight) || 0 },
        { label: 'Estimated 1RM', value: results.chosen },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="weight">Weight Lifted (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          step="0.5"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reps">Number of Reps</Label>
        <Input
          id="reps"
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const resultsDisplay = results !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated One-Rep Maximum</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{results.chosen.toLocaleString()}</div>
      <div className="text-lg text-gray-700">kg</div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <div>
          <strong className="text-gray-800">Epley:</strong> {results.epley} kg
        </div>
        <div>
          <strong className="text-gray-800">Brzycki:</strong> {results.brzycki} kg
        </div>
        <div>
          <strong className="text-gray-800">Lombardi:</strong> {results.lombardi} kg
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && results !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">1RM Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} kg`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="One-Rep Max Calculator"
      description="Calculate your one-rep maximum (1RM) for strength training using common formulas like Epley, Brzycki, and Lombardi."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
