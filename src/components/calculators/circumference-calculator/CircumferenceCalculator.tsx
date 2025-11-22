'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Unit = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft';

const unitToMeter: Record<Unit, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
};

export default function CircumferenceCalculator() {
  const [radius, setRadius] = useState<string>('5');
  const [radiusUnit, setRadiusUnit] = useState<Unit>('m');
  const [resultUnit, setResultUnit] = useState<Unit>('m');
  const [circumference, setCircumference] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const r = parseFloat(radius);
    if (!isNaN(r) && r >= 0) {
      // Convert radius to meters (base unit)
      const radiusMeters = r * unitToMeter[radiusUnit];
      // Circumference in meters: C = 2 * pi * r
      const circumferenceMeters = 2 * Math.PI * radiusMeters;
      // Convert circumference from meters to desired result unit
      const converted = circumferenceMeters / unitToMeter[resultUnit];
      setCircumference(parseFloat(converted.toFixed(6)));
    } else {
      setCircumference(null);
    }
  }, [radius, radiusUnit, resultUnit]);

  const handleDownloadPDF = () => {
    if (circumference === null) return;

    generateCalculatorPDF({
      title: 'Circumference Calculator Results',
      inputs: [
        { label: 'Radius', value: radius },
        { label: 'Radius Unit', value: radiusUnit },
        { label: 'Result Unit', value: resultUnit },
      ],
      results: [
        { label: 'Circumference', value: `${circumference} ${resultUnit}` },
      ],
    });
  };

  const radiusConvertedToResultUnit = (() => {
    const r = parseFloat(radius);
    if (isNaN(r)) return 0;
    const meters = r * unitToMeter[radiusUnit];
    return parseFloat((meters / unitToMeter[resultUnit]).toFixed(6));
  })();

  const chartData = circumference !== null ? [
    { label: 'Radius', value: radiusConvertedToResultUnit, unit: resultUnit },
    { label: 'Circumference', value: circumference, unit: resultUnit },
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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="radiusUnit">Radius Unit</Label>
          <Select
            id="radiusUnit"
            value={radiusUnit}
            onChange={(e) => setRadiusUnit(e.target.value as Unit)}
          >
            <option value="mm">Millimeters (mm)</option>
            <option value="cm">Centimeters (cm)</option>
            <option value="m">Meters (m)</option>
            <option value="km">Kilometers (km)</option>
            <option value="in">Inches (in)</option>
            <option value="ft">Feet (ft)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="resultUnit">Result Unit</Label>
          <Select
            id="resultUnit"
            value={resultUnit}
            onChange={(e) => setResultUnit(e.target.value as Unit)}
          >
            <option value="mm">Millimeters (mm)</option>
            <option value="cm">Centimeters (cm)</option>
            <option value="m">Meters (m)</option>
            <option value="km">Kilometers (km)</option>
            <option value="in">Inches (in)</option>
            <option value="ft">Feet (ft)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = circumference !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Circumference</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {circumference.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{resultUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && circumference !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Radius vs Circumference ({resultUnit})</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(4)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Circumference Calculator"
      description="Calculate the circumference of a circle from its radius. Supports multiple units and instantly updates as you change inputs."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
