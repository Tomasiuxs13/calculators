'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PaintCalculator() {
  const [length, setLength] = useState<string>('5');
  const [width, setWidth] = useState<string>('4');
  const [height, setHeight] = useState<string>('2.5');
  const [coats, setCoats] = useState<string>('2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    const heightValue = parseFloat(height);
    const coatsValue = parseFloat(coats);

    if (!isNaN(lengthValue) && !isNaN(widthValue) && !isNaN(heightValue) && !isNaN(coatsValue) && lengthValue > 0 && widthValue > 0 && heightValue > 0 && coatsValue > 0) {
      const wallArea = 2 * (lengthValue * heightValue + widthValue * heightValue);
      const paintNeeded = (wallArea / 10) * coatsValue; // Assuming 10 square meters per liter
      setResult(parseFloat(paintNeeded.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [length, width, height, coats]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Paint Calculator Results',
      inputs: [
        { label: 'Room Length (m)', value: length },
        { label: 'Room Width (m)', value: width },
        { label: 'Room Height (m)', value: height },
        { label: 'Number of Coats', value: coats },
      ],
      results: [
        { label: 'Paint Needed (liters)', value: `${result} L` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="length">Room Length (m)</Label>
        <Input
          id="length"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="width">Room Width (m)</Label>
        <Input
          id="width"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="height">Room Height (m)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coats">Number of Coats</Label>
        <Input
          id="coats"
          type="number"
          value={coats}
          onChange={(e) => setCoats(e.target.value)}
          min="1"
          step="1"
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
      <div className="text-lg text-gray-700">liters</div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Paint Needed', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Paint Needed</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} L`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Paint Calculator"
      description="Calculate how much paint you need for a room based on dimensions."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
