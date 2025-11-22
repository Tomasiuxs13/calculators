'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Results = {
  totalWatts: number;
  dailyKWh: number;
  monthlyKWh: number;
  annualKWh: number;
  dailyCost: number;
  monthlyCost: number;
  annualCost: number;
} | null;

export default function EnergyConsumptionCalculator() {
  const [appliances, setAppliances] = useState<string>('10');
  const [averageWattage, setAverageWattage] = useState<string>('1500');
  const [hoursPerDay, setHoursPerDay] = useState<string>('4');
  const [electricityRate, setElectricityRate] = useState<string>('0.12');
  const [result, setResult] = useState<Results>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const nAppliances = parseFloat(appliances);
    const nWattage = parseFloat(averageWattage);
    const nHours = parseFloat(hoursPerDay);
    const nRate = parseFloat(electricityRate);

    if ([nAppliances, nWattage, nHours, nRate].some((v) => isNaN(v) || v < 0)) {
      setResult(null);
      return;
    }

    // Convert to base unit (kW) by dividing watts by 1000
    const totalWatts = nAppliances * nWattage; // watts
    const dailyKWh = (totalWatts * nHours) / 1000; // kWh per day
    const monthlyKWh = dailyKWh * 30; // approximate
    const annualKWh = dailyKWh * 365;

    const dailyCost = parseFloat((dailyKWh * nRate).toFixed(4));
    const monthlyCost = parseFloat((monthlyKWh * nRate).toFixed(2));
    const annualCost = parseFloat((annualKWh * nRate).toFixed(2));

    setResult({
      totalWatts: parseFloat(totalWatts.toFixed(2)),
      dailyKWh: parseFloat(dailyKWh.toFixed(4)),
      monthlyKWh: parseFloat(monthlyKWh.toFixed(3)),
      annualKWh: parseFloat(annualKWh.toFixed(2)),
      dailyCost,
      monthlyCost,
      annualCost,
    });
  }, [appliances, averageWattage, hoursPerDay, electricityRate]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Household Energy Consumption Results',
      inputs: [
        { label: 'Number of Appliances', value: appliances },
        { label: 'Average Wattage (W)', value: averageWattage },
        { label: 'Hours per Day', value: hoursPerDay },
        { label: 'Electricity Rate ($/kWh)', value: electricityRate },
      ],
      results: [
        { label: 'Total Watts', value: `${result.totalWatts} W` },
        { label: 'Daily Energy', value: `${result.dailyKWh} kWh` },
        { label: 'Monthly Energy', value: `${result.monthlyKWh} kWh` },
        { label: 'Annual Energy', value: `${result.annualKWh} kWh` },
        { label: 'Daily Cost', value: `$${result.dailyCost}` },
        { label: 'Monthly Cost', value: `$${result.monthlyCost}` },
        { label: 'Annual Cost', value: `$${result.annualCost}` },
      ],
    });
  };

  const chartData = result
    ? [
        { period: 'Daily', kwh: result.dailyKWh, cost: result.dailyCost },
        { period: 'Monthly', kwh: result.monthlyKWh, cost: result.monthlyCost },
        { period: 'Annual', kwh: result.annualKWh, cost: result.annualCost },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="appliances">Number of Appliances</Label>
        <Input
          id="appliances"
          type="number"
          value={appliances}
          onChange={(e) => setAppliances(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="averageWattage">Average Wattage (W)</Label>
        <Input
          id="averageWattage"
          type="number"
          value={averageWattage}
          onChange={(e) => setAverageWattage(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hoursPerDay">Hours per Day</Label>
        <Input
          id="hoursPerDay"
          type="number"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="electricityRate">Electricity Rate ($/kWh)</Label>
        <Input
          id="electricityRate"
          type="number"
          value={electricityRate}
          onChange={(e) => setElectricityRate(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      {/* placeholder Select import used to mirror example patterns */}
      <div className="mt-2">
        <Label htmlFor="unitHint">Note</Label>
        <Select id="unitHint" value="kWh" onChange={() => {}}>
          <option value="kWh">Results shown in kWh and $</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Daily Energy & Cost</div>
      <div className="text-5xl font-bold text-emerald-700 my-3">
        {result.dailyKWh.toLocaleString()} kWh
      </div>
      <div className="text-lg text-gray-700 mb-3">Daily Cost: ${result.dailyCost.toLocaleString()}</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Monthly</div>
          <div className="text-2xl font-semibold text-gray-800">{result.monthlyKWh.toLocaleString()} kWh</div>
          <div className="text-sm text-gray-600">${result.monthlyCost.toLocaleString()}</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Annual</div>
          <div className="text-2xl font-semibold text-gray-800">{result.annualKWh.toLocaleString()} kWh</div>
          <div className="text-sm text-gray-600">${result.annualCost.toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Energy & Cost Overview</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string) => {
            if (name === 'kwh') return [`${value.toFixed(2)} kWh`, 'Energy'];
            if (name === 'cost') return [`$${value.toFixed(2)}`, 'Cost'];
            return [value, name];
          }} />
          <Legend />
          <Bar dataKey="kwh" fill="#10b981" name="kWh" />
          <Bar dataKey="cost" fill="#3b82f6" name="Cost ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Energy Consumption Calculator"
      description="Calculate household energy consumption and approximate costs based on number of appliances, average wattage, usage hours, and electricity rate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
