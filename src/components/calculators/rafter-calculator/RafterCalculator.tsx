'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type RafterResult = {
  rafterLength: number; // meters
  run: number; // meters (half span)
  rise: number; // meters
  spacingMeters: number; // meters
  raftersCount: number;
};

export default function RafterCalculator() {
  const [span, setSpan] = useState<string>('8');
  const [pitch, setPitch] = useState<string>('30'); // degrees
  const [spacing, setSpacing] = useState<string>('60'); // cm
  const [result, setResult] = useState<RafterResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const spanNum = parseFloat(span);
    const pitchNum = parseFloat(pitch);
    const spacingNum = parseFloat(spacing);

    if (
      !isNaN(spanNum) && spanNum > 0 &&
      !isNaN(pitchNum) && pitchNum > 0 && pitchNum < 90 &&
      !isNaN(spacingNum) && spacingNum > 0
    ) {
      // Convert spacing from cm to meters
      const spacingMeters = spacingNum / 100;

      // run is half the span (distance horizontally from wall to ridge)
      const run = spanNum / 2;

      // pitch is provided in degrees (angle between rafter and horizontal)
      const pitchRadians = (pitchNum * Math.PI) / 180;

      // rafter length (hypotenuse) = run / cos(pitch)
      const rafterLength = run / Math.cos(pitchRadians);

      // rise = run * tan(pitch)
      const rise = run * Math.tan(pitchRadians);

      // number of rafters across the span based on spacing
      // We take floor(span / spacing) + 1 to include both edge rafters
      const raftersCount = Math.max(1, Math.floor(spanNum / spacingMeters) + 1);

      setResult({
        rafterLength: parseFloat(rafterLength.toFixed(3)),
        run: parseFloat(run.toFixed(3)),
        rise: parseFloat(rise.toFixed(3)),
        spacingMeters: parseFloat(spacingMeters.toFixed(3)),
        raftersCount,
      });
    } else {
      setResult(null);
    }
  }, [span, pitch, spacing]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Rafter Calculator Results',
      inputs: [
        { label: 'Roof Span (m)', value: span },
        { label: 'Roof Pitch (degrees)', value: pitch },
        { label: 'Rafter Spacing (cm)', value: spacing },
      ],
      results: [
        { label: 'Rafter Length (m)', value: `${result.rafterLength} m` },
        { label: 'Run (m)', value: `${result.run} m` },
        { label: 'Rise (m)', value: `${result.rise} m` },
        { label: 'Spacing (m)', value: `${result.spacingMeters} m` },
        { label: 'Estimated Number of Rafters', value: `${result.raftersCount}` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Rafter Length', value: result.rafterLength, unit: 'm' },
        { label: 'Rise', value: result.rise, unit: 'm' },
        { label: 'Spacing', value: result.spacingMeters, unit: 'm' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="span">Roof Span (m)</Label>
        <Input
          id="span"
          type="number"
          value={span}
          onChange={(e) => setSpan(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pitch">Roof Pitch (degrees)</Label>
          <Input
            id="pitch"
            type="number"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            min="0"
            max="89"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="spacing">Rafter Spacing (cm)</Label>
          <Input
            id="spacing"
            type="number"
            value={spacing}
            onChange={(e) => setSpacing(e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>

      {/* Included to match example pattern even if not used here */}
      <div className="hidden">
        <Label htmlFor="dummySelect">Dummy Select</Label>
        <Select id="dummySelect" value="" onChange={() => {}}>
          <option value="">--</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-3xl font-bold text-blue-900 my-2">{result.rafterLength.toLocaleString()} m</div>
      <div className="text-sm text-gray-700">Rafter Length</div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Run</div>
          <div className="text-xl font-semibold">{result.run.toLocaleString()} m</div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Rise</div>
          <div className="text-xl font-semibold">{result.rise.toLocaleString()} m</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Spacing</div>
          <div className="text-xl font-semibold">{result.spacingMeters.toLocaleString()} m</div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Estimated Rafters</div>
          <div className="text-xl font-semibold">{result.raftersCount}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Rafter Dimensions</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} m`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Rafter Calculator"
      description="Calculate rafter length, rise, run, and estimated number of rafters based on roof span, pitch, and spacing."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
