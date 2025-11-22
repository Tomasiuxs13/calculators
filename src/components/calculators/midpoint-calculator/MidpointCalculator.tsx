'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Point = {
  x: number;
  y: number;
};

export default function MidpointCalculator() {
  const [x1, setX1] = useState<string>('1');
  const [y1, setY1] = useState<string>('2');
  const [x2, setX2] = useState<string>('5');
  const [y2, setY2] = useState<string>('6');
  const [midpoint, setMidpoint] = useState<Point | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const nx1 = parseFloat(x1);
    const ny1 = parseFloat(y1);
    const nx2 = parseFloat(x2);
    const ny2 = parseFloat(y2);

    if (
      !isNaN(nx1) &&
      !isNaN(ny1) &&
      !isNaN(nx2) &&
      !isNaN(ny2)
    ) {
      const mx = (nx1 + nx2) / 2;
      const my = (ny1 + ny2) / 2;
      setMidpoint({ x: parseFloat(mx.toFixed(6)), y: parseFloat(my.toFixed(6)) });
    } else {
      setMidpoint(null);
    }
  }, [x1, y1, x2, y2]);

  const handleDownloadPDF = () => {
    if (!midpoint) return;

    generateCalculatorPDF({
      title: 'Midpoint Calculator Results',
      inputs: [
        { label: 'Point 1 X', value: x1 },
        { label: 'Point 1 Y', value: y1 },
        { label: 'Point 2 X', value: x2 },
        { label: 'Point 2 Y', value: y2 },
      ],
      results: [
        { label: 'Midpoint X', value: midpoint.x.toString() },
        { label: 'Midpoint Y', value: midpoint.y.toString() },
      ],
    });
  };

  const chartData = midpoint
    ? [
        { id: 'Point 1', x: parseFloat(x1) || 0, y: parseFloat(y1) || 0, color: '#ef4444' },
        { id: 'Point 2', x: parseFloat(x2) || 0, y: parseFloat(y2) || 0, color: '#3b82f6' },
        { id: 'Midpoint', x: midpoint.x, y: midpoint.y, color: '#10b981' },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="x1">Point 1 X</Label>
          <Input
            id="x1"
            type="number"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="y1">Point 1 Y</Label>
          <Input
            id="y1"
            type="number"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            step="0.01"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="x2">Point 2 X</Label>
          <Input
            id="x2"
            type="number"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="y2">Point 2 Y</Label>
          <Input
            id="y2"
            type="number"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const results = midpoint ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Midpoint</div>
      <div className="text-3xl font-bold text-blue-900 my-2">
        ({midpoint.x.toLocaleString()}, {midpoint.y.toLocaleString()})
      </div>
      <div className="text-sm text-gray-700">Calculated as ((x1 + x2) / 2, (y1 + y2) / 2)</div>
    </div>
  ) : null;

  const charts = showCharts && midpoint ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Points & Midpoint</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            formatter={(value: any, name: any, props: any) => {
              // Tooltip shows x or y value; we present the coordinate pair when possible
              return value;
            }}
            labelFormatter={(label) => `Coordinate: ${label}`}
          />
          <Legend />

          {/* Render each point individually so we can color them differently in the legend */}
          <Scatter name="Point 1" data={chartData.filter(d => d.id === 'Point 1')} fill="#ef4444" />
          <Scatter name="Point 2" data={chartData.filter(d => d.id === 'Point 2')} fill="#3b82f6" />
          <Scatter name="Midpoint" data={chartData.filter(d => d.id === 'Midpoint')} fill="#10b981" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Midpoint Calculator"
      description="Calculate the midpoint between two points in 2D space. Enter coordinates for Point 1 and Point 2 and the midpoint will be calculated automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
