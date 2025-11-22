'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Shape = 'rectangle' | 'square' | 'triangle';

export default function PerimeterCalculator() {
  const [shape, setShape] = useState<Shape>('rectangle');
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('5');
  const [side2, setSide2] = useState<string>('6');
  const [side3, setSide3] = useState<string>('7');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const a = parseFloat(length);
    const b = parseFloat(width);
    const c = parseFloat(side2);
    const d = parseFloat(side3);

    let perimeter: number | null = null;

    if (shape === 'rectangle') {
      if (!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0) {
        perimeter = 2 * (a + b);
      }
    } else if (shape === 'square') {
      if (!isNaN(a) && a >= 0) {
        perimeter = 4 * a;
      }
    } else if (shape === 'triangle') {
      if (!isNaN(a) && !isNaN(c) && !isNaN(d) && a >= 0 && c >= 0 && d >= 0) {
        perimeter = a + c + d;
      }
    }

    if (perimeter !== null) {
      setResult(parseFloat(perimeter.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [shape, length, width, side2, side3]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    const inputsForPdf = [
      { label: 'Shape', value: shape },
      { label: 'Length', value: length },
    ];

    if (shape === 'rectangle') {
      inputsForPdf.push({ label: 'Width', value: width });
    }

    if (shape === 'triangle') {
      inputsForPdf.push({ label: 'Side 2', value: side2 });
      inputsForPdf.push({ label: 'Side 3', value: side3 });
    }

    generateCalculatorPDF({
      title: 'Perimeter Calculator Results',
      inputs: inputsForPdf,
      results: [
        { label: 'Perimeter', value: `${result} units` },
      ],
    });
  };

  const chartData = result !== null ? (
    shape === 'rectangle' ? [
      { label: 'Length', value: parseFloat(length) || 0, unit: 'units' },
      { label: 'Width', value: parseFloat(width) || 0, unit: 'units' },
      { label: 'Perimeter', value: result, unit: 'units' },
    ] : shape === 'square' ? [
      { label: 'Side', value: parseFloat(length) || 0, unit: 'units' },
      { label: 'Perimeter', value: result, unit: 'units' },
    ] : [
      { label: 'Side 1', value: parseFloat(length) || 0, unit: 'units' },
      { label: 'Side 2', value: parseFloat(side2) || 0, unit: 'units' },
      { label: 'Side 3', value: parseFloat(side3) || 0, unit: 'units' },
      { label: 'Perimeter', value: result, unit: 'units' },
    ]
  ) : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="shape">Shape</Label>
        <Select
          id="shape"
          value={shape}
          onChange={(e) => setShape(e.target.value as Shape)}
        >
          <option value="rectangle">Rectangle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="length">Length {shape === 'square' ? '(side)' : ''}</Label>
          <Input
            id="length"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        {shape === 'rectangle' && (
          <div className="space-y-2">
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
        )}

        {shape === 'triangle' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="side2">Side 2 (for triangle)</Label>
              <Input
                id="side2"
                type="number"
                value={side2}
                onChange={(e) => setSide2(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="side3">Side 3 (for triangle)</Label>
              <Input
                id="side3"
                type="number"
                value={side3}
                onChange={(e) => setSide3(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
          </>
        )}
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Perimeter</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">units</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Perimeter Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} units`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Perimeter Calculator"
      description="Calculate the perimeter of rectangles, squares, and triangles quickly. Enter the shape and dimensions and results update automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
