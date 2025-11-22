'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type UnitSystem = 'imperial' | 'metric';

const convertFuelCost = (distance: number, fuelPrice: number, mpg: number, unit: UnitSystem): number => {
  if (unit === 'imperial') {
    return (distance / mpg) * fuelPrice;
  } else {
    // Convert L/100km to km/L then calculate
    const kmL = 100 / mpg;
    return (distance * kmL) * fuelPrice;
  }
};

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [fuelPrice, setFuelPrice] = useState<string>('3.50');
  const [mpg, setMpg] = useState<string>('25');
  const [unit, setUnit] = useState<UnitSystem>('imperial');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numDistance = parseFloat(distance);
    const numFuelPrice = parseFloat(fuelPrice);
    const numMpg = parseFloat(mpg);
    if (!isNaN(numDistance) && !isNaN(numFuelPrice) && !isNaN(numMpg) && numDistance > 0 && numFuelPrice > 0 && numMpg > 0) {
      const calculatedResult = convertFuelCost(numDistance, numFuelPrice, numMpg, unit);
      setResult(parseFloat(calculatedResult.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [distance, fuelPrice, mpg, unit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Fuel Cost Calculator Results',
      inputs: [
        { label: 'Distance', value: distance },
        { label: 'Fuel Price per unit', value: fuelPrice },
        { label: 'Fuel Efficiency', value: mpg },
        { label: 'Unit System', value: unit }
      ],
      results: [
        { label: 'Fuel Cost', value: `$${result}` }
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Cost', value: result }
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="distance">Distance (miles or km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fuelPrice">Fuel Price per unit</Label>
        <Input
          id="fuelPrice"
          type="number"
          value={fuelPrice}
          onChange={(e) => setFuelPrice(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mpg">Fuel Efficiency (MPG or L/100km)</Label>
        <Input
          id="mpg"
          type="number"
          value={mpg}
          onChange={(e) => setMpg(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Unit System</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as UnitSystem)}
        >
          <option value="imperial">Imperial (miles, MPG)</option>
          <option value="metric">Metric (km, L/100km)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Fuel Cost</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${result.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Fuel Cost Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Fuel Cost Calculator"
      description="Calculate fuel cost for a trip based on distance, fuel price, and vehicle efficiency."
      inputs={inputs}
      results={results}
      showCharts={true}
      onToggleCharts={() => {}}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
