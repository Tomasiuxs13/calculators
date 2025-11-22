'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Unit = 'm';

export default function FlooringCalculator() {
  const [length, setLength] = useState<string>('5');
  const [width, setWidth] = useState<string>('4');
  const [wastePercent, setWastePercent] = useState<string>('10');
  const [area, setArea] = useState<number | null>(null);
  const [totalArea, setTotalArea] = useState<number | null>(null);
  const [wasteArea, setWasteArea] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [unit, setUnit] = useState<Unit>('m');

  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const waste = parseFloat(wastePercent);

    if (!isNaN(l) && !isNaN(w) && l >= 0 && w >= 0 && !isNaN(waste) && waste >= 0) {
      const computedArea = l * w; // base area in square meters
      const factor = 1 + waste / 100;
      const computedTotal = computedArea * factor;
      const computedWaste = computedTotal - computedArea;

      setArea(parseFloat(computedArea.toFixed(4)));
      setTotalArea(parseFloat(computedTotal.toFixed(4)));
      setWasteArea(parseFloat(computedWaste.toFixed(4)));
    } else {
      setArea(null);
      setTotalArea(null);
      setWasteArea(null);
    }
  }, [length, width, wastePercent]);

  const handleDownloadPDF = () => {
    if (area === null || totalArea === null || wasteArea === null) return;

    generateCalculatorPDF({
      title: 'Flooring Calculator Results',
      inputs: [
        { label: 'Room Length (m)', value: length },
        { label: 'Room Width (m)', value: width },
        { label: 'Waste Percentage (%)', value: wastePercent },
      ],
      results: [
        { label: 'Area (m²)', value: `${area} m²` },
        { label: 'Waste Area (m²)', value: `${wasteArea} m²` },
        { label: 'Total Area with Waste (m²)', value: `${totalArea} m²` },
      ],
    });
  };

  const chartData = area !== null && totalArea !== null ? [
    { label: 'Base Area', value: area, unit: unit },
    { label: 'With Waste', value: totalArea, unit: unit },
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

      {/* Unit selector included to follow project patterns - default is meters (m) */}
      <div className="space-y-2">
        <Label htmlFor="unit">Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as Unit)}
        >
          <option value="m">Meters (m)</option>
        </Select>
      </div>
    </>
  );

  const results = area !== null && totalArea !== null && wasteArea !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-sm text-gray-600">Area</div>
          <div className="text-3xl font-bold text-blue-900">{area.toLocaleString()} m²</div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-sm text-gray-600">Waste</div>
          <div className="text-3xl font-bold text-red-600">{wasteArea.toLocaleString()} m² ({wastePercent}%)</div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-sm text-gray-600">Total Area (including waste)</div>
          <div className="text-3xl font-bold text-green-700">{totalArea.toLocaleString()} m²</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Flooring Area Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${unit === 'm' ? 'm²' : ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Flooring Calculator"
      description="Calculate flooring materials needed including waste."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
