'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type RectangleResults = {
  area: number;
  perimeter: number;
  diagonal: number;
};

export default function RectangleCalculator() {
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('5');
  const [results, setResults] = useState<RectangleResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (!isNaN(l) && !isNaN(w) && l >= 0 && w >= 0) {
      const area = parseFloat((l * w).toFixed(6));
      const perimeter = parseFloat((2 * (l + w)).toFixed(6));
      const diagonal = parseFloat(Math.sqrt(l * l + w * w).toFixed(6));

      setResults({ area, perimeter, diagonal });
    } else {
      setResults(null);
    }
  }, [length, width]);

  const handleDownloadPDF = () => {
    if (results === null) return;

    generateCalculatorPDF({
      title: 'Rectangle Calculator Results',
      inputs: [
        { label: 'Length', value: length },
        { label: 'Width', value: width },
      ],
      results: [
        { label: 'Area', value: `${results.area} (units²)` },
        { label: 'Perimeter', value: `${results.perimeter} (units)` },
        { label: 'Diagonal', value: `${results.diagonal} (units)` },
      ],
    });
  };

  const chartData =
    results !== null
      ? [
          { label: 'Area', value: results.area, unit: 'units²' },
          { label: 'Perimeter', value: results.perimeter, unit: 'units' },
          { label: 'Diagonal', value: results.diagonal, unit: 'units' },
        ]
      : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="length">Length</Label>
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
      </div>
    </>
  );

  const resultsDisplay =
    results !== null ? (
      <div className="text-center space-y-4">
        <div className="text-sm text-gray-600">Results</div>

        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500">Area</div>
            <div className="text-2xl font-bold text-blue-900">{results.area.toLocaleString()}</div>
            <div className="text-sm text-gray-700">units²</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500">Perimeter</div>
            <div className="text-2xl font-bold text-blue-900">{results.perimeter.toLocaleString()}</div>
            <div className="text-sm text-gray-700">units</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500">Diagonal</div>
            <div className="text-2xl font-bold text-blue-900">{results.diagonal.toLocaleString()}</div>
            <div className="text-sm text-gray-700">units</div>
          </div>
        </div>
      </div>
    ) : null;

  const charts = showCharts && results !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Rectangle Metrics Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = chartData.find((d) => d.value === value)?.unit || '';
            return [`${value}`, unit];
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Rectangle Calculator"
      description="Calculate area, perimeter, and diagonal of a rectangle."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
