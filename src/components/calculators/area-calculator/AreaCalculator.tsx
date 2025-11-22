'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Shape = 'circle' | 'rectangle' | 'triangle';

export default function AreaCalculator() {
  const [shape, setShape] = useState<Shape>('circle');
  const [radius, setRadius] = useState<string>('5');
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('5');
  const [baseVal, setBaseVal] = useState<string>('10');
  const [height, setHeight] = useState<string>('8');

  const [area, setArea] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [chartData, setChartData] = useState<Array<{ name: string; value: number }>>([]);

  useEffect(() => {
    // Parse inputs
    const r = parseFloat(radius);
    const l = parseFloat(length);
    const w = parseFloat(width);
    const b = parseFloat(baseVal);
    const h = parseFloat(height);

    const safeNumber = (n: number) => (isNaN(n) || n < 0 ? 0 : n);

    const rr = safeNumber(r);
    const ll = safeNumber(l);
    const ww = safeNumber(w);
    const bb = safeNumber(b);
    const hh = safeNumber(h);

    // Calculate area based on selected shape
    let calculated: number | null = null;
    if (shape === 'circle') {
      calculated = Math.PI * rr * rr; // πr^2
    } else if (shape === 'rectangle') {
      calculated = ll * ww; // length * width
    } else if (shape === 'triangle') {
      calculated = 0.5 * bb * hh; // 1/2 * base * height
    }

    if (calculated !== null && !isNaN(calculated)) {
      setArea(parseFloat(calculated.toFixed(6)));
    } else {
      setArea(null);
    }

    // Prepare chart data: area for each shape using the current inputs (or defaults)
    const circleArea = Math.PI * rr * rr;
    const rectangleArea = ll * ww;
    const triangleArea = 0.5 * bb * hh;

    setChartData([
      { name: 'Circle', value: parseFloat(circleArea.toFixed(6)) },
      { name: 'Rectangle', value: parseFloat(rectangleArea.toFixed(6)) },
      { name: 'Triangle', value: parseFloat(triangleArea.toFixed(6)) },
    ]);
  }, [shape, radius, length, width, baseVal, height]);

  const handleDownloadPDF = () => {
    if (area === null) return;

    generateCalculatorPDF({
      title: 'Area Calculator Results',
      inputs: [
        { label: 'Shape', value: shape },
        { label: 'Radius', value: radius },
        { label: 'Length', value: length },
        { label: 'Width', value: width },
        { label: 'Base', value: baseVal },
        { label: 'Height', value: height },
      ],
      results: [
        { label: 'Area', value: `${area} sq units` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="shape">Shape</Label>
        <Select id="shape" value={shape} onChange={(e) => setShape(e.target.value as Shape)}>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="radius">Radius (for circle)</Label>
          <Input
            id="radius"
            type="number"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="length">Length (for rectangle)</Label>
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
          <Label htmlFor="width">Width (for rectangle)</Label>
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
          <Label htmlFor="base">Base (for triangle)</Label>
          <Input
            id="base"
            type="number"
            value={baseVal}
            onChange={(e) => setBaseVal(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height (for triangle)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const results = area !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Area</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{area.toLocaleString()}</div>
      <div className="text-lg text-gray-700">square units</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Area Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} sq units`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Area Calculator"
      description="Calculate the area of common shapes: circle, rectangle, and triangle. Enter dimensions and the area updates automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
