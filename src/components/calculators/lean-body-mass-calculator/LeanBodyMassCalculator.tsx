'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function LeanBodyMassCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [bodyFat, setBodyFat] = useState<string>('20');
  const [lbm, setLbm] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const weightValue = parseFloat(weight);
    const bodyFatValue = parseFloat(bodyFat);
    if (!isNaN(weightValue) && !isNaN(bodyFatValue) && weightValue > 0 && bodyFatValue >= 0) {
      const fatMass = (bodyFatValue / 100) * weightValue;
      const leanBodyMass = weightValue - fatMass;
      setLbm(parseFloat(leanBodyMass.toFixed(2)));
    } else {
      setLbm(null);
    }
  }, [weight, bodyFat]);

  const handleDownloadPDF = () => {
    if (lbm === null) return;

    generateCalculatorPDF({
      title: 'Lean Body Mass Calculator Results',
      inputs: [
        { label: 'Weight', value: weight },
        { label: 'Body Fat Percentage', value: bodyFat },
      ],
      results: [
        { label: 'Lean Body Mass', value: `${lbm} kg` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="weight">Weight (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bodyFat">Body Fat Percentage (%)</Label>
        <Input
          id="bodyFat"
          type="number"
          value={bodyFat}
          onChange={(e) => setBodyFat(e.target.value)}
          min="0"
          max="100"
          step="0.1"
        />
      </div>
    </>
  );

  const results = lbm !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {lbm.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">kg</div>
    </div>
  ) : null;

  const chartData = lbm !== null ? [
    { label: 'Lean Body Mass', value: lbm },
    { label: 'Fat Mass', value: parseFloat(weight) - lbm },
  ] : [];

  const charts = showCharts && lbm !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Body Composition</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Lean Body Mass Calculator"
      description="Calculate lean body mass (LBM) and fat-free mass."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
