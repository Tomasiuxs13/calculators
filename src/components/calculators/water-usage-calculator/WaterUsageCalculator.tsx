'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'L' | 'gal';

// Conversion factors to liters (base unit)
const volumeConversions: Record<VolumeUnit, number> = {
  L: 1, // liters
  gal: 3.78541, // liters per gallon
};

// Assumed usage rates (in liters)
const SHOWER_FLOW_RATE_L_PER_MIN = 9; // liters per minute (typical low/average)
const LAUNDRY_PER_LOAD_L = 70; // liters per load
const DISHWASHER_PER_RUN_L = 12; // liters per run

export default function WaterUsageCalculator() {
  const [showers, setShowers] = useState<string>('7');
  const [showerLength, setShowerLength] = useState<string>('10');
  const [laundryLoads, setLaundryLoads] = useState<string>('3');
  const [dishwasherRuns, setDishwasherRuns] = useState<string>('5');
  const [unit, setUnit] = useState<VolumeUnit>('L');

  const [dailyTotal, setDailyTotal] = useState<number | null>(null);
  const [annualTotal, setAnnualTotal] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{
    showers: number;
    laundry: number;
    dishwasher: number;
  } | null>(null);

  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate whenever inputs or selected unit change
  useEffect(() => {
    const showersNum = parseFloat(showers);
    const showerLengthNum = parseFloat(showerLength);
    const laundryNum = parseFloat(laundryLoads);
    const dishwasherNum = parseFloat(dishwasherRuns);

    const inputsValid = [showersNum, showerLengthNum, laundryNum, dishwasherNum].every(
      (n) => !isNaN(n) && n >= 0
    );

    if (!inputsValid) {
      setDailyTotal(null);
      setAnnualTotal(null);
      setBreakdown(null);
      return;
    }

    // Calculate weekly usage in liters (base unit)
    const weeklyShowersL = showersNum * showerLengthNum * SHOWER_FLOW_RATE_L_PER_MIN;
    const weeklyLaundryL = laundryNum * LAUNDRY_PER_LOAD_L;
    const weeklyDishwasherL = dishwasherNum * DISHWASHER_PER_RUN_L;

    const weeklyTotalL = weeklyShowersL + weeklyLaundryL + weeklyDishwasherL;

    // Daily and annual in liters
    const dailyTotalL = weeklyTotalL / 7;
    const annualTotalL = weeklyTotalL * 52;

    // Convert to selected unit
    const litersPerUnit = volumeConversions[unit];
    const dailyConverted = parseFloat((dailyTotalL / litersPerUnit).toFixed(3));
    const annualConverted = parseFloat((annualTotalL / litersPerUnit).toFixed(2));

    const breakdownConverted = {
      showers: parseFloat((dailyShowersLToUnit(weeklyShowersL, litersPerUnit) / 1).toFixed(3)),
      laundry: parseFloat((dailyLaundryLToUnit(weeklyLaundryL, litersPerUnit) / 1).toFixed(3)),
      dishwasher: parseFloat((dailyDishwasherLToUnit(weeklyDishwasherL, litersPerUnit) / 1).toFixed(3)),
    };

    setDailyTotal(dailyConverted);
    setAnnualTotal(annualConverted);
    setBreakdown(breakdownConverted);

    function dailyShowersLToUnit(weeklyL: number, litersPerUnit: number) {
      return (weeklyL / 7) / litersPerUnit;
    }

    function dailyLaundryLToUnit(weeklyL: number, litersPerUnit: number) {
      return (weeklyL / 7) / litersPerUnit;
    }

    function dailyDishwasherLToUnit(weeklyL: number, litersPerUnit: number) {
      return (weeklyL / 7) / litersPerUnit;
    }
  }, [showers, showerLength, laundryLoads, dishwasherRuns, unit]);

  const handleDownloadPDF = () => {
    if (dailyTotal === null || annualTotal === null || breakdown === null) return;

    generateCalculatorPDF({
      title: 'Water Usage Calculator Results',
      inputs: [
        { label: 'Showers per Week', value: showers },
        { label: 'Shower Length (minutes)', value: showerLength },
        { label: 'Laundry Loads per Week', value: laundryLoads },
        { label: 'Dishwasher Runs per Week', value: dishwasherRuns },
        { label: 'Display Unit', value: unit },
      ],
      results: [
        { label: `Daily Water Use (${unit})`, value: `${dailyTotal} ${unit}` },
        { label: `Annual Water Use (${unit})`, value: `${annualTotal} ${unit}` },
        { label: `Daily from Showers (${unit})`, value: `${breakdown.showers} ${unit}` },
        { label: `Daily from Laundry (${unit})`, value: `${breakdown.laundry} ${unit}` },
        { label: `Daily from Dishwasher (${unit})`, value: `${breakdown.dishwasher} ${unit}` },
        { label: 'Notes', value: 'Calculations use typical average usage rates (liters). Converted to selected unit.' },
      ],
    });
  };

  const chartData = breakdown && dailyTotal !== null ? [
    { name: 'Showers', value: breakdown.showers },
    { name: 'Laundry', value: breakdown.laundry },
    { name: 'Dishwasher', value: breakdown.dishwasher },
    { name: 'Total', value: dailyTotal },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="showers">Showers per Week</Label>
          <Input
            id="showers"
            type="number"
            value={showers}
            onChange={(e) => setShowers(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="showerLength">Shower Length (minutes)</Label>
          <Input
            id="showerLength"
            type="number"
            value={showerLength}
            onChange={(e) => setShowerLength(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="unit">Display Unit</Label>
          <Select id="unit" value={unit} onChange={(e) => setUnit(e.target.value as VolumeUnit)}>
            <option value="L">Liters (L)</option>
            <option value="gal">Gallons (gal)</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="laundryLoads">Laundry Loads per Week</Label>
          <Input
            id="laundryLoads"
            type="number"
            value={laundryLoads}
            onChange={(e) => setLaundryLoads(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dishwasherRuns">Dishwasher Runs per Week</Label>
          <Input
            id="dishwasherRuns"
            type="number"
            value={dishwasherRuns}
            onChange={(e) => setDishwasherRuns(e.target.value)}
            min="0"
            step="1"
          />
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <div>Assumed averages used:</div>
        <ul className="list-disc ml-5">
          <li>Shower flow: {SHOWER_FLOW_RATE_L_PER_MIN} L/min</li>
          <li>Laundry: {LAUNDRY_PER_LOAD_L} L/load</li>
          <li>Dishwasher: {DISHWASHER_PER_RUN_L} L/run</li>
        </ul>
      </div>
    </>
  );

  const results = dailyTotal !== null && annualTotal !== null && breakdown !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Water Use</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Daily Average</div>
          <div className="text-4xl font-bold text-blue-900 my-2">{dailyTotal.toLocaleString()}</div>
          <div className="text-sm text-gray-700">{unit} per day</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Annual Estimate</div>
          <div className="text-4xl font-bold text-blue-900 my-2">{annualTotal.toLocaleString()}</div>
          <div className="text-sm text-gray-700">{unit} per year</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">From Showers</div>
          <div className="text-2xl font-semibold text-gray-800 mt-1">{breakdown.showers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">{unit} / day</div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">From Laundry</div>
          <div className="text-2xl font-semibold text-gray-800 mt-1">{breakdown.laundry.toLocaleString()}</div>
          <div className="text-sm text-gray-600">{unit} / day</div>
        </div>

        <div className="p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-500">From Dishwasher</div>
          <div className="text-2xl font-semibold text-gray-800 mt-1">{breakdown.dishwasher.toLocaleString()}</div>
          <div className="text-sm text-gray-600">{unit} / day</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && breakdown && dailyTotal !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Daily Water Use Breakdown ({unit})</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${unit}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Water Usage Calculator"
      description="Calculate your estimated daily and annual water usage from showers, laundry, and dishwasher runs. Adjust usage rates to see potential savings and conservation opportunities."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
