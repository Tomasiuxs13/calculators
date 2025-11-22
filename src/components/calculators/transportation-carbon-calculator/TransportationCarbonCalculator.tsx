'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type FuelType = 'gasoline' | 'diesel' | 'electric';

// Emission factors
// kg CO2 per gallon for liquid fuels (EPA-ish approximations)
const emissionFactorPerGallon: Record<Exclude<FuelType, 'electric'>, number> = {
  gasoline: 8.887, // kg CO2 per gallon
  diesel: 10.16, // kg CO2 per gallon
};

// Electric assumptions
const defaultKwhPerMile = 0.3; // kWh per mile (typical EV consumption)
const defaultGridKgPerKwh = 0.45; // kg CO2 per kWh (grid average, can vary)

export default function TransportationCarbonCalculator() {
  const [milesDriven, setMilesDriven] = useState<string>('12000');
  const [mpg, setMpg] = useState<string>('25');
  const [fuelType, setFuelType] = useState<FuelType>('gasoline');
  const [result, setResult] = useState<{
    kgPerYear: number;
    kgPerMile: number;
    tonnesPerYear: number;
  } | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const miles = parseFloat(milesDriven);
    const mpgNum = parseFloat(mpg);

    if (isNaN(miles) || miles < 0) {
      setResult(null);
      return;
    }

    if (fuelType === 'electric') {
      // Electric vehicle calculation: kg CO2 = miles * kWh/mile * grid kg CO2/kWh
      const kgPerYear = miles * defaultKwhPerMile * defaultGridKgPerKwh;
      const kgPerMile = defaultKwhPerMile * defaultGridKgPerKwh;
      const tonnesPerYear = kgPerYear / 1000;

      setResult({
        kgPerYear: parseFloat(kgPerYear.toFixed(3)),
        kgPerMile: parseFloat(kgPerMile.toFixed(4)),
        tonnesPerYear: parseFloat(tonnesPerYear.toFixed(3)),
      });
      return;
    }

    // For gasoline and diesel: convert miles -> gallons -> kg CO2
    if (isNaN(mpgNum) || mpgNum <= 0) {
      setResult(null);
      return;
    }

    const gallons = miles / mpgNum; // gallons per year
    const factor = emissionFactorPerGallon[fuelType as Exclude<FuelType, 'electric'>];
    const kgPerYear = gallons * factor;
    const kgPerMile = kgPerYear / miles || 0;
    const tonnesPerYear = kgPerYear / 1000;

    setResult({
      kgPerYear: parseFloat(kgPerYear.toFixed(3)),
      kgPerMile: parseFloat(kgPerMile.toFixed(4)),
      tonnesPerYear: parseFloat(tonnesPerYear.toFixed(3)),
    });
  }, [milesDriven, mpg, fuelType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Transportation Carbon Emissions Results',
      inputs: [
        { label: 'Miles Driven per Year', value: milesDriven },
        { label: 'Vehicle MPG', value: mpg },
        { label: 'Fuel Type', value: fuelType },
      ],
      results: [
        { label: 'Annual Emissions', value: `${result.kgPerYear} kg CO2 (${result.tonnesPerYear} t CO2)` },
        { label: 'Emissions per Mile', value: `${result.kgPerMile} kg CO2/mile` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Annual (kg CO2)', value: result.kgPerYear },
    { label: 'Per Mile (kg CO2)', value: result.kgPerMile },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="milesDriven">Miles Driven per Year</Label>
        <Input
          id="milesDriven"
          type="number"
          value={milesDriven}
          onChange={(e) => setMilesDriven(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mpg">Vehicle MPG</Label>
          <Input
            id="mpg"
            type="number"
            value={mpg}
            onChange={(e) => setMpg(e.target.value)}
            min="0"
            step="0.1"
            disabled={fuelType === 'electric'}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select
            id="fuelType"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value as FuelType)}
          >
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Emissions</div>
      <div className="text-4xl font-bold text-green-800 my-2">{result.tonnesPerYear.toLocaleString()} t CO2</div>
      <div className="text-sm text-gray-600 mb-2">({result.kgPerYear.toLocaleString()} kg CO2 per year)</div>
      <div className="text-lg text-gray-700">{result.kgPerMile} kg CO2 per mile</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Emissions Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(3)} kg CO2`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Transportation Carbon Calculator"
      description="Calculate carbon emissions from driving based on miles driven, vehicle fuel efficiency, and fuel type. Supports gasoline, diesel, and electric vehicles."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
