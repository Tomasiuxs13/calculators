'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type LengthUnit = 'm' | 'ft';

const lengthToMeters: Record<LengthUnit, number> = {
  m: 1,
  ft: 0.3048,
};

export default function CarpetCalculator() {
  const [length, setLength] = useState<string>('5');
  const [width, setWidth] = useState<string>('4');
  const [wastePercent, setWastePercent] = useState<string>('10');
  const [unit, setUnit] = useState<LengthUnit>('m');

  const [area, setArea] = useState<number | null>(null); // area in square meters (base)
  const [totalArea, setTotalArea] = useState<number | null>(null); // area including waste (m²)
  const [wasteArea, setWasteArea] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate on input change
  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const waste = parseFloat(wastePercent);

    if (!isNaN(l) && !isNaN(w) && l >= 0 && w >= 0 && !isNaN(waste) && waste >= 0) {
      // Convert inputs to base unit (meters) first
      const lMeters = l * lengthToMeters[unit];
      const wMeters = w * lengthToMeters[unit];

      const computedArea = lMeters * wMeters; // m²
      const computedWasteArea = computedArea * (waste / 100);
      const computedTotal = computedArea + computedWasteArea;

      setArea(parseFloat(computedArea.toFixed(3)));
      setWasteArea(parseFloat(computedWasteArea.toFixed(3)));
      setTotalArea(parseFloat(computedTotal.toFixed(3)));
    } else {
      setArea(null);
      setWasteArea(null);
      setTotalArea(null);
    }
  }, [length, width, wastePercent, unit]);

  const handleDownloadPDF = () => {
    if (totalArea === null) return;

    generateCalculatorPDF({
      title: 'Carpet Calculator Results',
      inputs: [
        { label: 'Room Length', value: `${length} ${unit}` },
        { label: 'Room Width', value: `${width} ${unit}` },
        { label: 'Waste Percentage', value: `${wastePercent}%` },
      ],
      results: [
        { label: 'Area (m²)', value: area !== null ? `${area} m²` : '—' },
        { label: 'Waste Area (m²)', value: wasteArea !== null ? `${wasteArea} m²` : '—' },
        { label: 'Total Carpet Required (m²)', value: `${totalArea} m²` },
      ],
    });
  };

  const chartData = totalArea !== null && area !== null ? [
    { label: 'Base Area', value: area, unit: 'm²' },
    { label: 'With Waste', value: totalArea, unit: 'm²' },
  ] : [];

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
        <Label htmlFor="wastePercent">Waste Percentage (%)</Label>
        <Input
          id="wastePercent"
          type="number"
          value={wastePercent}
          onChange={(e) => setWastePercent(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Measurement Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as LengthUnit)}
        >
          <option value="m">Meters (m)</option>
          <option value="ft">Feet (ft)</option>
        </Select>
      </div>
    </>
  );

  const results = totalArea !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Total Carpet Required</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {totalArea.toLocaleString()} m²
      </div>
      <div className="text-lg text-gray-700">
        (Base: {area !== null ? `${area.toLocaleString()} m²` : '—'} • Waste: {wasteArea !== null ? `${wasteArea.toLocaleString()} m²` : '—'})
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Carpet Area Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} m²`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Carpet Calculator"
      description="Calculate the amount of carpet required for a room, including extra for waste and cutting. Supports meters and feet input with automatic conversion to square meters."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
