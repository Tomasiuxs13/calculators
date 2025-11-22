'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Activity = 'flight' | 'driving' | 'electricity';

// Emission factors (kg CO2 per km) for distance-based activities
const emissionFactorsPerKm: Record<Activity, number> = {
  flight: 0.115, // kg CO2 per passenger-km (approximate)
  driving: 0.192, // kg CO2 per km (average car)
  electricity: 0, // electricity is not distance-based
};

export default function CarbonOffsetCalculator() {
  const [activity, setActivity] = useState<Activity>('flight');
  const [distance, setDistance] = useState<string>('1000'); // optional, km
  const [emissions, setEmissions] = useState<string>('200'); // kg CO2
  const [result, setResult] = useState<number | null>(null); // offset needed in kg CO2
  const [baseEmissions, setBaseEmissions] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate on input change (no calculate button)
  useEffect(() => {
    // Determine base emissions in kg CO2
    const parsedEmissions = parseFloat(emissions);
    const parsedDistance = parseFloat(distance);

    let calculatedEmissions: number | null = null;

    // If a direct emissions value is provided and valid, prefer it
    if (!isNaN(parsedEmissions) && parsedEmissions >= 0) {
      calculatedEmissions = parsedEmissions;
    } else {
      // Otherwise, if distance is provided and the activity supports distance, compute
      if (!isNaN(parsedDistance) && parsedDistance >= 0 && emissionFactorsPerKm[activity] > 0) {
        calculatedEmissions = parsedDistance * emissionFactorsPerKm[activity];
      }
    }

    if (calculatedEmissions !== null) {
      // For a carbon offset calculator, offset needed equals emissions to be neutralized
      // We'll round to 2 decimal places for display and PDF
      const rounded = parseFloat(calculatedEmissions.toFixed(2));
      setBaseEmissions(rounded);
      setResult(rounded);
    } else {
      setBaseEmissions(null);
      setResult(null);
    }
  }, [activity, distance, emissions]);

  const handleDownloadPDF = () => {
    if (result === null || baseEmissions === null) return;

    generateCalculatorPDF({
      title: 'Carbon Offset Calculator Results',
      inputs: [
        { label: 'Activity', value: activity },
        { label: 'Distance (km)', value: distance || '—' },
        { label: 'Emissions (kg CO2)', value: emissions },
      ],
      results: [
        { label: 'Emissions (kg CO2)', value: `${baseEmissions} kg CO2` },
        { label: 'Offset Needed (kg CO2)', value: `${result} kg CO2` },
        { label: 'Offset Needed (tonnes CO2)', value: `${(result / 1000).toFixed(3)} t CO2` },
      ],
    });
  };

  const chartData = result !== null && baseEmissions !== null ? [
    { label: 'Emissions', value: baseEmissions },
    { label: 'Offset Needed', value: result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="activity">Activity</Label>
        <Select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value as Activity)}
        >
          <option value="flight">Flight</option>
          <option value="driving">Driving</option>
          <option value="electricity">Electricity</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
          step="1"
          placeholder="Optional — used for flight or driving"
        />
        <p className="text-sm text-gray-500">Optional. Used to estimate emissions when you don't have a direct emissions value.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="emissions">Emissions (kg CO2)</Label>
        <Input
          id="emissions"
          type="number"
          value={emissions}
          onChange={(e) => setEmissions(e.target.value)}
          min="0"
          step="0.01"
        />
        <p className="text-sm text-gray-500">If you have a measured emissions value, enter it here. Otherwise leave blank to use distance-based estimate where applicable.</p>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Offset Needed</div>
      <div className="text-5xl font-bold text-green-800 my-3">{result.toLocaleString()} kg</div>
      <div className="text-lg text-gray-700">({(result / 1000).toFixed(3)} tonnes CO2)</div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter values to calculate offset needed.</div>
  );

  const charts = showCharts && result !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Emissions vs Offset</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg CO2`} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Carbon Offset Calculator"
      description="Calculate the carbon offset (kg CO2) needed for common activities like flights, driving, and electricity usage."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
