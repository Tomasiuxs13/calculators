'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';
type Frame = 'small' | 'medium' | 'large';

const idealWeightRanges: Record<Gender, Record<Frame, [number, number]>> = {
  male: {
    small: [56, 65],
    medium: [65, 75],
    large: [75, 85],
  },
  female: {
    small: [49, 59],
    medium: [59, 68],
    large: [68, 77],
  },
};

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState<string>('175');
  const [gender, setGender] = useState<Gender>('male');
  const [frame, setFrame] = useState<Frame>('medium');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const heightValue = parseFloat(height);
    if (!isNaN(heightValue) && heightValue > 0) {
      const [minWeight, maxWeight] = idealWeightRanges[gender][frame];
      setResult((minWeight + maxWeight) / 2);
    } else {
      setResult(null);
    }
  }, [height, gender, frame]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Ideal Weight Calculator Results',
      inputs: [
        { label: 'Height', value: height },
        { label: 'Gender', value: gender },
        { label: 'Body Frame', value: frame },
      ],
      results: [
        { label: 'Ideal Weight', value: `${result} kg` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Ideal Weight', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="height">Height (cm)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="frame">Body Frame</Label>
          <Select
            id="frame"
            value={frame}
            onChange={(e) => setFrame(e.target.value as Frame)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Ideal Weight</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">kg</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Ideal Weight Chart</h3>
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
      title="Ideal Weight Calculator"
      description="Calculate your ideal body weight based on height, gender, and body frame."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
