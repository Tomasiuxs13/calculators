'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AreaUnit = 'm2' | 'ft2';

const areaConversions: Record<AreaUnit, number> = {
  // conversion factor from square meters to target unit
  m2: 1,
  ft2: 10.7639,
};

export default function LawnAreaCalculator() {
  const [length, setLength] = useState<string>('20');
  const [width, setWidth] = useState<string>('15');
  const [areaM2, setAreaM2] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<AreaUnit>('m2');
  const [convertedArea, setConvertedArea] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // auto-calculate on input change
  useEffect(() => {
    const L = parseFloat(length);
    const W = parseFloat(width);

    if (!isNaN(L) && !isNaN(W) && L >= 0 && W >= 0) {
      const area = L * W; // base unit: square meters
      setAreaM2(parseFloat(area.toFixed(4)));
    } else {
      setAreaM2(null);
    }
  }, [length, width]);

  // convert from base unit (m2) to selected unit
  useEffect(() => {
    if (areaM2 === null) {
      setConvertedArea(null);
      return;
    }

    const factor = areaConversions[selectedUnit] || 1;
    const converted = areaM2 * factor;
    setConvertedArea(parseFloat(converted.toFixed(4)));
  }, [areaM2, selectedUnit]);

  const handleDownloadPDF = () => {
    if (areaM2 === null || convertedArea === null) return;

    generateCalculatorPDF({
      title: 'Lawn Area Calculation Results',
      inputs: [
        { label: 'Length (m)', value: length },
        { label: 'Width (m)', value: width },
        { label: 'Output Unit', value: selectedUnit },
      ],
      results: [
        { label: 'Area (m²)', value: `${areaM2} m²` },
        { label: `Area (${selectedUnit === 'm2' ? 'm²' : 'ft²'})`, value: `${convertedArea} ${selectedUnit === 'm2' ? 'm²' : 'ft²'}` },
      ],
    });
  };

  const chartData = areaM2 !== null && convertedArea !== null ? [
    { label: 'Area (m²)', value: areaM2, unit: 'm²' },
    { label: `Area (${selectedUnit === 'm2' ? 'm²' : 'ft²'})`, value: convertedArea, unit: selectedUnit === 'm2' ? 'm²' : 'ft²' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="unit">Output Unit</Label>
          <Select
            id="unit"
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value as AreaUnit)}
          >
            <option value="m2">Square Meters (m²)</option>
            <option value="ft2">Square Feet (ft²)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Preview</Label>
          <div className="p-3 bg-gray-50 border border-gray-200 rounded">
            <div className="text-sm text-gray-600">Length × Width</div>
            <div className="text-2xl font-semibold text-gray-900">{length} m × {width} m</div>
          </div>
        </div>
      </div>
    </>
  );

  const results = convertedArea !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Lawn Area</div>
      <div className="text-5xl font-bold text-green-800 my-3">
        {convertedArea.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{selectedUnit === 'm2' ? 'm²' : 'ft²'}</div>
      <div className="mt-3 text-sm text-gray-600">({areaM2 !== null ? `${areaM2.toLocaleString()} m²` : '—'} base)</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Lawn Area Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            // find unit for value
            const item = chartData.find(d => d.value === value);
            const unit = item?.unit || (selectedUnit === 'm2' ? 'm²' : 'ft²');
            return [`${value.toFixed(2)} ${unit}`, 'Area'];
          }} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Lawn Area Calculator"
      description="Calculate your lawn area quickly to estimate seeding, sodding, or material needs. Enter length and width in meters — results update automatically." 
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
