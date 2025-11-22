'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function InsulationCalculator() {
  const [area, setArea] = useState<string>('100'); // m²
  const [thickness, setThickness] = useState<string>('15'); // cm
  const [rValue, setRValue] = useState<string>('3.5'); // R per inch

  const [volume, setVolume] = useState<number | null>(null); // m³
  const [totalR, setTotalR] = useState<number | null>(null); // R-value total
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const a = parseFloat(area);
    const t = parseFloat(thickness);
    const r = parseFloat(rValue);

    if (!isNaN(a) && a >= 0 && !isNaN(t) && t >= 0 && !isNaN(r) && r >= 0) {
      // Convert thickness from cm to meters for volume
      const thicknessMeters = t / 100; // cm -> m
      const calculatedVolume = a * thicknessMeters; // m² * m = m³

      // Convert thickness cm to inches for R calculation
      const thicknessInches = t / 2.54;
      const calculatedTotalR = thicknessInches * r;

      setVolume(parseFloat(calculatedVolume.toFixed(4)));
      setTotalR(parseFloat(calculatedTotalR.toFixed(2)));
    } else {
      setVolume(null);
      setTotalR(null);
    }
  }, [area, thickness, rValue]);

  const handleDownloadPDF = () => {
    if (volume === null || totalR === null) return;

    generateCalculatorPDF({
      title: 'Insulation Calculator Results',
      inputs: [
        { label: 'Area (m²)', value: area },
        { label: 'Insulation Thickness (cm)', value: thickness },
        { label: 'R-Value per inch', value: rValue },
      ],
      results: [
        { label: 'Volume (m³)', value: `${volume} m³` },
        { label: 'Total R-Value', value: `${totalR}` },
      ],
    });
  };

  const chartData =
    volume !== null && totalR !== null
      ? [
          { label: 'Volume (m³)', value: volume, unit: 'm³' },
          { label: 'Total R', value: totalR, unit: 'R' },
        ]
      : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="area">Area (m²)</Label>
        <Input
          id="area"
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="thickness">Insulation Thickness (cm)</Label>
          <Input
            id="thickness"
            type="number"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rValue">R-Value per inch</Label>
          <Input
            id="rValue"
            type="number"
            value={rValue}
            onChange={(e) => setRValue(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </>
  );

  const results = volume !== null && totalR !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Volume</div>
          <div className="text-3xl font-bold text-blue-900 my-2">{volume.toLocaleString()}</div>
          <div className="text-sm text-gray-700">m³</div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Estimated Total R-Value</div>
          <div className="text-3xl font-bold text-blue-900 my-2">{totalR}</div>
          <div className="text-sm text-gray-700">R</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Insulation Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Insulation Calculator"
      description="Calculate insulation needed for walls and attics. Enter the area, insulation thickness, and material R-value per inch to estimate volume and total R-value."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
