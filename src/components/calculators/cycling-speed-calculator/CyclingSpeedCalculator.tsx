'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CyclingSpeedCalculator() {
  const [cadence, setCadence] = useState<string>('90');
  const [wheelCircumference, setWheelCircumference] = useState<string>('2.1');
  const [gearRatio, setGearRatio] = useState<string>('3');
  const [speedKmh, setSpeedKmh] = useState<number | null>(null);
  const [speedMs, setSpeedMs] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Formula:
  // wheel_revs_per_min = cadence (rpm) * gearRatio
  // distance_per_min_m = wheel_revs_per_min * wheelCircumference
  // speed_m_per_s = distance_per_min_m / 60
  // speed_km_per_h = speed_m_per_s * 3.6  (or cadence * gearRatio * wheelCircumference * 0.06)

  useEffect(() => {
    const c = parseFloat(cadence);
    const w = parseFloat(wheelCircumference);
    const g = parseFloat(gearRatio);

    if (!isNaN(c) && !isNaN(w) && !isNaN(g) && c >= 0 && w > 0 && g > 0) {
      const wheelRevsPerMin = c * g;
      const distancePerMinM = wheelRevsPerMin * w;
      const mPerS = distancePerMinM / 60;
      const kmPerH = mPerS * 3.6;

      setSpeedMs(parseFloat(mPerS.toFixed(4)));
      setSpeedKmh(parseFloat(kmPerH.toFixed(2)));
    } else {
      setSpeedMs(null);
      setSpeedKmh(null);
    }
  }, [cadence, wheelCircumference, gearRatio]);

  const handleDownloadPDF = () => {
    if (speedKmh === null || speedMs === null) return;

    generateCalculatorPDF({
      title: 'Cycling Speed Calculator Results',
      inputs: [
        { label: 'Cadence (rpm)', value: cadence },
        { label: 'Wheel Circumference (m)', value: wheelCircumference },
        { label: 'Gear Ratio', value: gearRatio },
      ],
      results: [
        { label: 'Speed', value: `${speedKmh} km/h (${speedMs} m/s)` },
      ],
    });
  };

  const chartData = speedKmh !== null ? [
    { label: 'Speed (km/h)', value: speedKmh, unit: 'km/h' },
    { label: 'Wheel Circumference (m)', value: parseFloat(wheelCircumference) || 0, unit: 'm' },
    { label: 'Gear Ratio', value: parseFloat(gearRatio) || 0, unit: '' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="cadence">Cadence (rpm)</Label>
        <Input
          id="cadence"
          type="number"
          value={cadence}
          onChange={(e) => setCadence(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="wheelCircumference">Wheel Circumference (m)</Label>
        <Input
          id="wheelCircumference"
          type="number"
          value={wheelCircumference}
          onChange={(e) => setWheelCircumference(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gearRatio">Gear Ratio</Label>
        <Input
          id="gearRatio"
          type="number"
          value={gearRatio}
          onChange={(e) => setGearRatio(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>
    </>
  );

  const results = speedKmh !== null && speedMs !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Speed</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {speedKmh.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">km/h</div>
      <div className="mt-2 text-sm text-gray-600">({speedMs} m/s)</div>
    </div>
  ) : null;

  const charts = showCharts && speedKmh !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cycling Speed Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, _: string, payload: any) => {
            const unit = payload && payload.payload ? payload.payload.unit : '';
            if (typeof value === 'number') return [`${value.toFixed(unit === 'km/h' ? 2 : 2)} ${unit}`,'Value'];
            return [value, 'Value'];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cycling Speed Calculator"
      description="Calculate cycling speed from cadence, gear ratio, and wheel circumference. Useful for cyclists to estimate speed from cadence and gearing choices."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
