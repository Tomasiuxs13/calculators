'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ConcreteCalculator() {
  const [length, setLength] = useState<string>('5');
  const [width, setWidth] = useState<string>('3');
  const [depth, setDepth] = useState<string>('0.1');
  const [volume, setVolume] = useState<number | null>(null); // cubic meters
  const [liters, setLiters] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if ([l, w, d].every((v) => !isNaN(v) && v >= 0)) {
      // volume in cubic meters (m^3) = length × width × depth
      const vol = l * w * d;
      const roundedVol = parseFloat(vol.toFixed(4));
      setVolume(roundedVol);
      setLiters(parseFloat((vol * 1000).toFixed(1))); // liters
    } else {
      setVolume(null);
      setLiters(null);
    }
  }, [length, width, depth]);

  const handleDownloadPDF = () => {
    if (volume === null) return;

    generateCalculatorPDF({
      title: 'Concrete Calculator Results',
      inputs: [
        { label: 'Length (m)', value: length },
        { label: 'Width (m)', value: width },
        { label: 'Depth (m)', value: depth },
      ],
      results: [
        { label: 'Volume (m³)', value: `${volume} m³` },
        { label: 'Volume (L)', value: `${liters} L` },
      ],
    });
  };

  const chartData = volume !== null ? [
    { label: 'Length (m)', value: parseFloat(length) || 0, unit: 'm' },
    { label: 'Width (m)', value: parseFloat(width) || 0, unit: 'm' },
    { label: 'Depth (m)', value: parseFloat(depth) || 0, unit: 'm' },
    { label: 'Volume (m³)', value: volume, unit: 'm³' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="length">Length (m)</Label>
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
          <Label htmlFor="width">Width (m)</Label>
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
          <Label htmlFor="depth">Depth (m)</Label>
          <Input
            id="depth"
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            min="0"
            step="0.001"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Note: Depth is in meters (e.g. 0.1 m = 100 mm). The calculator auto-updates as you type.
      </div>
    </>
  );

  const results = volume !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Concrete Required</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{volume.toLocaleString()}</div>
      <div className="text-lg text-gray-700">m³</div>
      <div className="mt-3 text-sm text-gray-600">{liters?.toLocaleString()} liters</div>
    </div>
  ) : null;

  const charts = showCharts && volume !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Dimensions & Volume</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Concrete Calculator"
      description="Calculate the amount of concrete needed for a project by entering length, width, and depth in meters. Results update automatically." 
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
