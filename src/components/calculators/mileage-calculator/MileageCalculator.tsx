'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartPoint = {
  label: string;
  value: number;
  unit?: string;
};

export default function MileageCalculator() {
  const [distance, setDistance] = useState<string>('100');
  const [fuelUsed, setFuelUsed] = useState<string>('5');
  const [fuelPrice, setFuelPrice] = useState<string>('3.50');

  const [mpg, setMpg] = useState<number | null>(null);
  const [costPerMile, setCostPerMile] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const d = parseFloat(distance);
    const f = parseFloat(fuelUsed);
    const p = parseFloat(fuelPrice);

    if (!isNaN(d) && !isNaN(f) && !isNaN(p) && d > 0 && f > 0) {
      const calculatedMpg = d / f;
      const calculatedTotalCost = p * f;
      const calculatedCostPerMile = calculatedTotalCost / d;

      setMpg(parseFloat(calculatedMpg.toFixed(2)));
      setTotalCost(parseFloat(calculatedTotalCost.toFixed(2)));
      setCostPerMile(parseFloat(calculatedCostPerMile.toFixed(4)));
    } else {
      setMpg(null);
      setTotalCost(null);
      setCostPerMile(null);
    }
  }, [distance, fuelUsed, fuelPrice]);

  const handleDownloadPDF = () => {
    if (mpg === null || costPerMile === null || totalCost === null) return;

    generateCalculatorPDF({
      title: 'Mileage Calculator Results',
      inputs: [
        { label: 'Distance (miles)', value: distance },
        { label: 'Fuel Used (gallons)', value: fuelUsed },
        { label: 'Fuel Price per Gallon', value: fuelPrice },
      ],
      results: [
        { label: 'Miles per Gallon (MPG)', value: `${mpg} mpg` },
        { label: 'Cost per Mile', value: `$${costPerMile} / mile` },
        { label: 'Total Fuel Cost', value: `$${totalCost}` },
      ],
    });
  };

  const chartData: ChartPoint[] = (mpg !== null && costPerMile !== null && totalCost !== null)
    ? [
        { label: 'MPG', value: mpg, unit: 'mpg' },
        { label: 'Cost / Mile', value: costPerMile, unit: '$/mi' },
        { label: 'Total Cost', value: totalCost, unit: '$' },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="distance">Distance (miles)</Label>
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
          <Label htmlFor="fuelUsed">Fuel Used (gallons)</Label>
          <Input
            id="fuelUsed"
            type="number"
            value={fuelUsed}
            onChange={(e) => setFuelUsed(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fuelPrice">Fuel Price per Gallon</Label>
          <Input
            id="fuelPrice"
            type="number"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>
    </>
  );

  const results = (mpg !== null && costPerMile !== null && totalCost !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center">
          <div className="text-xs text-gray-500">Miles per Gallon</div>
          <div className="text-4xl font-bold text-blue-900 my-2">{mpg.toLocaleString()}</div>
          <div className="text-sm text-gray-700">mpg</div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-500">Cost per Mile</div>
          <div className="text-4xl font-bold text-green-700 my-2">${costPerMile.toFixed(4)}</div>
          <div className="text-sm text-gray-700">per mile</div>
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-500">Total Fuel Cost</div>
          <div className="text-4xl font-bold text-indigo-700 my-2">${totalCost.toFixed(2)}</div>
          <div className="text-sm text-gray-700">total</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mileage & Cost Overview</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props.payload.unit || '';
            if (unit === '$' || unit === '$/mi') return `${Number(value).toFixed(2)} ${unit}`;
            return `${Number(value).toFixed(2)} ${unit}`;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Mileage Calculator"
      description="Calculate fuel mileage and cost per mile."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
