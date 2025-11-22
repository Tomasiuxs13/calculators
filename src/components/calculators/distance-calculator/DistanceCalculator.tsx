'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DistanceCalculator() {
  const [x1, setX1] = useState<number>(0);
  const [y1, setY1] = useState<number>(0);
  const [x2, setX2] = useState<number>(3);
  const [y2, setY2] = useState<number>(4);
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    setResult(parseFloat(distance.toFixed(6)));
  }, [x1, y1, x2, y2]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Distance Calculator Results',
      inputs: [
        { label: 'Point 1 (X, Y)', value: `(${x1}, ${y1})` },
        { label: 'Point 2 (X, Y)', value: `(${x2}, ${y2})` },
      ],
      results: [
        { label: 'Distance', value: `${result} units` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Distance', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="x1">Point 1 X</Label>
        <Input
          id="x1"
          type="number"
          value={x1}
          onChange={handleInputChange(setX1)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="y1">Point 1 Y</Label>
        <Input
          id="y1"
          type="number"
          value={y1}
          onChange={handleInputChange(setY1)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="x2">Point 2 X</Label>
        <Input
          id="x2"
          type="number"
          value={x2}
          onChange={handleInputChange(setX2)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="y2">Point 2 Y</Label>
        <Input
          id="y2"
          type="number"
          value={y2}
          onChange={handleInputChange(setY2)}
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">units</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Distance Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} units`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Distance Calculator"
      description="Calculate distance between two points in 2D or 3D space."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
