'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Shape = 'sphere' | 'cylinder' | 'cone';

export default function VolumeCalculator() {
  const [shape, setShape] = useState<Shape>('sphere');
  const [radius, setRadius] = useState<string>('5');
  const [height, setHeight] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [chartData, setChartData] = useState<Array<{ label: string; value: number }>>([]);

  useEffect(() => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (isNaN(r) || r <= 0) {
      setResult(null);
      setChartData([]);
      return;
    }

    // Calculate volumes for each shape using base formulas
    const sphereVol = (4 / 3) * Math.PI * Math.pow(r, 3);
    const cylinderVol = Math.PI * Math.pow(r, 2) * (isNaN(h) || h <= 0 ? 0 : h);
    const coneVol = (1 / 3) * Math.PI * Math.pow(r, 2) * (isNaN(h) || h <= 0 ? 0 : h);

    // Determine selected shape result
    let computed: number | null = null;
    switch (shape) {
      case 'sphere':
        computed = sphereVol;
        break;
      case 'cylinder':
        computed = (isNaN(h) || h <= 0) ? null : cylinderVol;
        break;
      case 'cone':
        computed = (isNaN(h) || h <= 0) ? null : coneVol;
        break;
      default:
        computed = null;
    }

    setResult(computed !== null ? parseFloat(computed.toFixed(6)) : null);

    // Update chart data comparing volumes for given radius & height
    const data = [
      { label: 'Sphere', value: parseFloat(sphereVol.toFixed(6)) },
      { label: 'Cylinder', value: parseFloat(cylinderVol.toFixed(6)) },
      { label: 'Cone', value: parseFloat(coneVol.toFixed(6)) },
    ];

    setChartData(data);
  }, [shape, radius, height]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Volume Calculator Results',
      inputs: [
        { label: 'Shape', value: shape },
        { label: 'Radius', value: radius },
        { label: 'Height', value: height },
      ],
      results: [
        { label: 'Volume', value: `${result} units³` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="shape">Shape</Label>
        <Select
          id="shape"
          value={shape}
          onChange={(e) => setShape(e.target.value as Shape)}
        >
          <option value="sphere">Sphere</option>
          <option value="cylinder">Cylinder</option>
          <option value="cone">Cone</option>
        </Select>
      </div>

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

      <div className="space-y-2">
        <Label htmlFor="height">Height (for cylinder/cone)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Volume</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">units³ ({shape.charAt(0).toUpperCase() + shape.slice(1)})</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter a valid radius{shape !== 'sphere' ? ' and height' : ''} to see the volume.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Volume Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} units³`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Volume Calculator"
      description="Calculate the volume of common 3D shapes: sphere, cylinder, and cone. Enter radius and height (when applicable) to compute volume automatically." 
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
