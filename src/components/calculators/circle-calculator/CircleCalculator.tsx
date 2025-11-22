'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CircleCalculator() {
  const [radius, setRadius] = useState<string>('5');
  const [area, setArea] = useState<number | null>(null);
  const [circumference, setCircumference] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numRadius = parseFloat(radius);
    if (!isNaN(numRadius) && numRadius >= 0) {
      const calculatedArea = Math.PI * Math.pow(numRadius, 2);
      const calculatedCircumference = 2 * Math.PI * numRadius;
      setArea(parseFloat(calculatedArea.toFixed(6)));
      setCircumference(parseFloat(calculatedCircumference.toFixed(6)));
    } else {
      setArea(null);
      setCircumference(null);
    }
  }, [radius]);

  const handleDownloadPDF = () => {
    if (area === null || circumference === null) return;

    generateCalculatorPDF({
      title: 'Circle Calculator Results',
      inputs: [
        { label: 'Radius', value: radius },
      ],
      results: [
        { label: 'Area', value: `${area} square units` },
        { label: 'Circumference', value: `${circumference} units` },
      ],
    });
  };

  const chartData = area !== null && circumference !== null ? [
    { label: 'Area', value: area },
    { label: 'Circumference', value: circumference },
  ] : [];

  const inputs = (
    <div className="space-y-2">
      <Label htmlFor="radius">Radius</Label>
      <Input
        id="radius"
        type="number"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        min="0"
        step="0.01"
      />
    </div>
  );

  const results = area !== null && circumference !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Area: {area.toLocaleString()} square units
      </div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Circumference: {circumference.toLocaleString()} units
      </div>
    </div>
  ) : null;

  const charts = showCharts && area !== null && circumference !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Circle Measurements</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Circle Calculator"
      description="Calculate circle area, circumference, radius, and diameter."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
