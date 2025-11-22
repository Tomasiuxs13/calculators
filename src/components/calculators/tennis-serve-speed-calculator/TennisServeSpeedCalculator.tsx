'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SpeedUnit = 'm/s' | 'km/h';

const speedConversions: Record<SpeedUnit, number> = {
  'm/s': 1, // base unit
  'km/h': 3.6, // 1 m/s = 3.6 km/h
};

export default function TennisServeSpeedCalculator() {
  const [distance, setDistance] = useState<string>('18');
  const [time, setTime] = useState<string>('0.5');
  const [unit, setUnit] = useState<SpeedUnit>('km/h');
  const [baseSpeed, setBaseSpeed] = useState<number | null>(null); // m/s
  const [result, setResult] = useState<number | null>(null); // in selected unit
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (!isNaN(d) && !isNaN(t) && t > 0 && d >= 0) {
      // Convert inputs to base units first (meters and seconds) then compute
      // Base speed in m/s
      const base = d / t;
      setBaseSpeed(parseFloat(base.toFixed(6)));

      // Convert base speed to selected unit
      const converted = base * speedConversions[unit];
      setResult(parseFloat(converted.toFixed(2)));
    } else {
      setBaseSpeed(null);
      setResult(null);
    }
  }, [distance, time, unit]);

  const handleDownloadPDF = () => {
    if (result === null || baseSpeed === null) return;

    generateCalculatorPDF({
      title: 'Tennis Serve Speed Calculator Results',
      inputs: [
        { label: 'Distance (m)', value: distance },
        { label: 'Time (s)', value: time },
        { label: 'Display Unit', value: unit },
      ],
      results: [
        { label: `Speed (${unit})`, value: `${result} ${unit}` },
        { label: 'Base Speed (m/s)', value: `${baseSpeed} m/s` },
      ],
    });
  };

  const chartData = result !== null && baseSpeed !== null ? [
    { label: 'Base (m/s)', value: baseSpeed, unit: 'm/s' },
    { label: `Speed (${unit})`, value: result, unit },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (m)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Time (s)</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="0.001"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Display Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as SpeedUnit)}
        >
          <option value="m/s">Meters per second (m/s)</option>
          <option value="km/h">Kilometers per hour (km/h)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Calculated Serve Speed</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-2">{unit}</div>
      {baseSpeed !== null && (
        <div className="text-sm text-gray-500">Base: {baseSpeed.toLocaleString()} m/s</div>
      )}
    </div>
  ) : null;

  const charts = showCharts && result !== null && baseSpeed !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Serve Speed Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}` } />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tennis Serve Speed Calculator"
      description="Calculate tennis serve speed from distance (m) and time (s). Results auto-update as you change inputs and can be downloaded as a PDF."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
