'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultSet = {
  volume: number | null;
  surfaceArea: number | null;
  lateralArea: number | null;
};

export default function CylinderCalculator() {
  const [radius, setRadius] = useState<string>('5');
  const [height, setHeight] = useState<string>('10');
  const [results, setResults] = useState<ResultSet>({ volume: null, surfaceArea: null, lateralArea: null });
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (!isNaN(r) && !isNaN(h) && r >= 0 && h >= 0) {
      const volume = Math.PI * r * r * h; // π r^2 h
      const lateralArea = 2 * Math.PI * r * h; // 2π r h
      const surfaceArea = 2 * Math.PI * r * (r + h); // 2π r (r + h)

      setResults({
        volume: parseFloat(volume.toFixed(6)),
        lateralArea: parseFloat(lateralArea.toFixed(6)),
        surfaceArea: parseFloat(surfaceArea.toFixed(6)),
      });
    } else {
      setResults({ volume: null, surfaceArea: null, lateralArea: null });
    }
  }, [radius, height]);

  const handleDownloadPDF = () => {
    if (results.volume === null || results.surfaceArea === null || results.lateralArea === null) return;

    generateCalculatorPDF({
      title: 'Cylinder Calculator Results',
      inputs: [
        { label: 'Radius', value: radius },
        { label: 'Height', value: height },
      ],
      results: [
        { label: 'Volume', value: `${results.volume} (cubic units)` },
        { label: 'Lateral Area', value: `${results.lateralArea} (square units)` },
        { label: 'Surface Area', value: `${results.surfaceArea} (square units)` },
      ],
    });
  };

  const chartData = results.volume !== null ? [
    { label: 'Volume', value: results.volume },
    { label: 'Lateral Area', value: results.lateralArea || 0 },
    { label: 'Surface Area', value: results.surfaceArea || 0 },
  ] : [];

  const inputs = (
    <>
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

      <div className="space-y-2 mt-4">
        <Label htmlFor="height">Height</Label>
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

  const resultsDisplay = (results.volume !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <div className="text-xs text-gray-500">Volume</div>
          <div className="text-3xl font-bold text-blue-900 mt-2">{results.volume?.toLocaleString()}</div>
          <div className="text-sm text-gray-700">cubic units</div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <div className="text-xs text-gray-500">Lateral Area</div>
          <div className="text-2xl font-semibold text-blue-900 mt-2">{results.lateralArea?.toLocaleString()}</div>
          <div className="text-sm text-gray-700">square units</div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <div className="text-xs text-gray-500">Surface Area (Total)</div>
          <div className="text-2xl font-semibold text-blue-900 mt-2">{results.surfaceArea?.toLocaleString()}</div>
          <div className="text-sm text-gray-700">square units</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && results.volume !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cylinder Metrics Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cylinder Calculator"
      description="Calculate volume, lateral area, and total surface area of a cylinder given its radius and height."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
