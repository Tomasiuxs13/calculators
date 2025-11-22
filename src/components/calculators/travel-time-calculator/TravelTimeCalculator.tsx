'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TimeUnit = 'hours' | 'minutes' | 'seconds';

export default function TravelTimeCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [averageSpeed, setAverageSpeed] = useState<string>('80');
  const [displayUnit, setDisplayUnit] = useState<TimeUnit>('hours');
  const [resultHours, setResultHours] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const distKm = parseFloat(distance);
    const speedKmh = parseFloat(averageSpeed);

    if (!isNaN(distKm) && distKm >= 0 && !isNaN(speedKmh) && speedKmh > 0) {
      // Convert to base units first: kilometers -> meters, km/h -> m/s
      const meters = distKm * 1000; // base distance in meters
      const metersPerSecond = speedKmh / 3.6; // convert km/h to m/s

      // Time in seconds = distance (m) / speed (m/s)
      const timeSeconds = meters / metersPerSecond;
      const timeHours = timeSeconds / 3600;

      setResultHours(parseFloat(timeHours.toFixed(6)));
    } else {
      setResultHours(null);
    }
  }, [distance, averageSpeed]);

  const formatTime = (hours: number) => {
    const totalSeconds = Math.round(hours * 3600);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleDownloadPDF = () => {
    if (resultHours === null) return;

    generateCalculatorPDF({
      title: 'Travel Time Results',
      inputs: [
        { label: 'Distance (km)', value: distance },
        { label: 'Average Speed (km/h)', value: averageSpeed },
        { label: 'Display Unit', value: displayUnit },
      ],
      results: [
        { label: 'Time (hours)', value: `${resultHours}` },
        { label: 'Formatted Time', value: formatTime(resultHours) },
      ],
    });
  };

  const chartData = resultHours !== null ? [
    { label: 'Hours', value: resultHours, unit: 'h' },
    { label: 'Minutes', value: resultHours * 60, unit: 'min' },
    { label: 'Seconds', value: resultHours * 3600, unit: 's' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="averageSpeed">Average Speed (km/h)</Label>
        <Input
          id="averageSpeed"
          type="number"
          value={averageSpeed}
          onChange={(e) => setAverageSpeed(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="displayUnit">Display Unit</Label>
        <Select
          id="displayUnit"
          value={displayUnit}
          onChange={(e) => setDisplayUnit(e.target.value as TimeUnit)}
        >
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
          <option value="seconds">Seconds</option>
        </Select>
      </div>
    </>
  );

  const results = resultHours !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Travel Time</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {displayUnit === 'hours'
          ? resultHours.toLocaleString(undefined, { maximumFractionDigits: 4 })
          : displayUnit === 'minutes'
          ? (resultHours * 60).toLocaleString(undefined, { maximumFractionDigits: 2 })
          : Math.round(resultHours * 3600).toLocaleString()}
      </div>
      <div className="text-lg text-gray-700 mb-2">{displayUnit}</div>
      <div className="text-sm text-gray-600">{formatTime(resultHours)}</div>
    </div>
  ) : null;

  const charts = showCharts && resultHours !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Travel Time Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const item = props && props.payload ? props.payload[0] : null;
            const unit = item && item.unit ? item.unit : '';
            if (typeof value === 'number') {
              if (unit === 'h') return `${value.toFixed(2)} h`;
              if (unit === 'min') return `${value.toFixed(1)} min`;
              return `${Math.round(value)} s`;
            }
            return value;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Travel Time Calculator"
      description="Calculate travel time based on distance and average speed (distance in km, speed in km/h)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
