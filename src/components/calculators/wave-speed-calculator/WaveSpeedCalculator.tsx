'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function WaveSpeedCalculator() {
  const [wavelength, setWavelength] = useState<string>('0.343');
  const [frequency, setFrequency] = useState<string>('1000');
  const [speed, setSpeed] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const wl = parseFloat(wavelength);
    const f = parseFloat(frequency);

    if (!isNaN(wl) && !isNaN(f) && wl >= 0 && f >= 0) {
      const v = f * wl; // v = f * lambda
      setSpeed(parseFloat(v.toFixed(6)));
    } else {
      setSpeed(null);
    }
  }, [wavelength, frequency]);

  const handleDownloadPDF = () => {
    if (speed === null) return;

    generateCalculatorPDF({
      title: 'Wave Speed Results',
      inputs: [
        { label: 'Wavelength (m)', value: wavelength },
        { label: 'Frequency (Hz)', value: frequency },
      ],
      results: [
        { label: 'Wave Speed (m/s)', value: `${speed} m/s` },
      ],
    });
  };

  const chartData = speed !== null ? [
    { label: 'Wavelength', value: parseFloat(wavelength) || 0, unit: 'm' },
    { label: 'Frequency', value: parseFloat(frequency) || 0, unit: 'Hz' },
    { label: 'Speed', value: speed, unit: 'm/s' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="wavelength">Wavelength (m)</Label>
        <Input
          id="wavelength"
          type="number"
          value={wavelength}
          onChange={(e) => setWavelength(e.target.value)}
          min="0"
          step="0.000001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="frequency">Frequency (Hz)</Label>
        <Input
          id="frequency"
          type="number"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      {/* Pattern-matching example: keep Select imported per project patterns even if not used here */}
      <div className="hidden">
        <Label>Hidden Select (placeholder)</Label>
        <Select>
          <option>Placeholder</option>
        </Select>
      </div>
    </>
  );

  const results = speed !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Wave Speed</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{speed.toLocaleString()}</div>
      <div className="text-lg text-gray-700">m/s</div>
    </div>
  ) : null;

  const charts = showCharts && speed !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Wave Parameters Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            const found = chartData.find((d) => d.value === value);
            return `${Number(value).toLocaleString()} ${found?.unit || ''}`;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Wave Speed Calculator"
      description="Calculate wave speed from wavelength and frequency. Uses v = f × λ and updates automatically when inputs change."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
