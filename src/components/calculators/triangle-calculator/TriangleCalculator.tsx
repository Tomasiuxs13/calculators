'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function TriangleCalculator() {
  const [sideA, setSideA] = useState<string>('3');
  const [sideB, setSideB] = useState<string>('4');
  const [sideC, setSideC] = useState<string>('5');
  const [area, setArea] = useState<number | null>(null);
  const [perimeter, setPerimeter] = useState<number | null>(null);
  const [angles, setAngles] = useState<{ A: number; B: number; C: number } | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a + b > c && a + c > b && b + c > a) {
      const s = (a + b + c) / 2;
      const calculatedArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      const calculatedPerimeter = a + b + c;
      const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI);
      const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI);
      const angleC = 180 - angleA - angleB;

      setArea(parseFloat(calculatedArea.toFixed(2)));
      setPerimeter(calculatedPerimeter);
      setAngles({ A: parseFloat(angleA.toFixed(2)), B: parseFloat(angleB.toFixed(2)), C: parseFloat(angleC.toFixed(2)) });
    } else {
      setArea(null);
      setPerimeter(null);
      setAngles(null);
    }
  }, [sideA, sideB, sideC]);

  const handleDownloadPDF = () => {
    if (area === null || perimeter === null || angles === null) return;

    generateCalculatorPDF({
      title: 'Triangle Calculator Results',
      inputs: [
        { label: 'Side A', value: sideA },
        { label: 'Side B', value: sideB },
        { label: 'Side C', value: sideC },
      ],
      results: [
        { label: 'Area', value: `${area} square units` },
        { label: 'Perimeter', value: `${perimeter} units` },
        { label: 'Angle A', value: `${angles.A}°` },
        { label: 'Angle B', value: `${angles.B}°` },
        { label: 'Angle C', value: `${angles.C}°` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="sideA">Side A</Label>
        <Input
          id="sideA"
          type="number"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sideB">Side B</Label>
        <Input
          id="sideB"
          type="number"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sideC">Side C</Label>
        <Input
          id="sideC"
          type="number"
          value={sideC}
          onChange={(e) => setSideC(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = area !== null && perimeter !== null && angles !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">Area: {area} square units</div>
      <div className="text-5xl font-bold text-blue-900 my-3">Perimeter: {perimeter} units</div>
      <div className="text-lg text-gray-700">Angles: A: {angles.A}°, B: {angles.B}°, C: {angles.C}°</div>
    </div>
  ) : null;

  const chartData = area !== null && perimeter !== null && angles !== null ? [
    { label: 'Area', value: area },
    { label: 'Perimeter', value: perimeter },
  ] : [];

  const charts = showCharts && area !== null && perimeter !== null && angles !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Triangle Metrics Comparison</h3>
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
      title="Triangle Calculator"
      description="Calculate triangle area, perimeter, and angles given sides."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
