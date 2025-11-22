'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultUnit = 'kg' | 't';

export default function CarbonFootprintCalculator() {
  // Inputs as strings to bind to Input components
  const [electricity, setElectricity] = useState<string>('500'); // kWh per month
  const [gas, setGas] = useState<string>('50'); // therms per month
  const [milesDriven, setMilesDriven] = useState<string>('1000'); // miles per month
  const [mpg, setMpg] = useState<string>('25'); // miles per gallon

  const [resultUnit, setResultUnit] = useState<ResultUnit>('kg');
  const [monthlyKgCO2, setMonthlyKgCO2] = useState<number | null>(null);
  const [annualKgCO2, setAnnualKgCO2] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{ name: string; value: number }[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  // Emission factors (kg CO2e)
  // Electricity: kg CO2 per kWh (example average)
  const ELECTRICITY_FACTOR = 0.453; // kg CO2 / kWh
  // Natural gas: kg CO2 per therm (approximate)
  const GAS_FACTOR = 5.3; // kg CO2 / therm
  // Gasoline: kg CO2 per gallon
  const GASOLINE_FACTOR = 8.887; // kg CO2 / gallon

  // Auto-calculate when inputs change
  useEffect(() => {
    const e = parseFloat(electricity);
    const g = parseFloat(gas);
    const miles = parseFloat(milesDriven);
    const m = parseFloat(mpg);

    if (
      !isNaN(e) && e >= 0 &&
      !isNaN(g) && g >= 0 &&
      !isNaN(miles) && miles >= 0 &&
      !isNaN(m) && m > 0
    ) {
      // Convert each input to kg CO2 per month (base unit: kg CO2)
      const elecKg = e * ELECTRICITY_FACTOR; // kWh * kg/kWh
      const gasKg = g * GAS_FACTOR; // therms * kg/therm
      const gallons = miles / m; // gallons per month
      const transportKg = gallons * GASOLINE_FACTOR; // gallons * kg/gallon

      const monthlyTotal = elecKg + gasKg + transportKg;
      const annualTotal = monthlyTotal * 12;

      setMonthlyKgCO2(parseFloat(monthlyTotal.toFixed(2)));
      setAnnualKgCO2(parseFloat(annualTotal.toFixed(2)));

      setBreakdown([
        { name: 'Electricity', value: parseFloat(elecKg.toFixed(2)) },
        { name: 'Gas', value: parseFloat(gasKg.toFixed(2)) },
        { name: 'Driving', value: parseFloat(transportKg.toFixed(2)) },
      ]);
    } else {
      setMonthlyKgCO2(null);
      setAnnualKgCO2(null);
      setBreakdown([]);
    }
  }, [electricity, gas, milesDriven, mpg]);

  const handleDownloadPDF = () => {
    if (monthlyKgCO2 === null || annualKgCO2 === null) return;

    const unitLabel = resultUnit === 'kg' ? 'kg CO₂e' : 't CO₂e';
    const monthlyValue = resultUnit === 'kg' ? monthlyKgCO2 : +(monthlyKgCO2 / 1000).toFixed(3);
    const annualValue = resultUnit === 'kg' ? annualKgCO2 : +(annualKgCO2 / 1000).toFixed(3);

    generateCalculatorPDF({
      title: 'Carbon Footprint Results',
      inputs: [
        { label: 'Monthly Electricity (kWh)', value: electricity },
        { label: 'Monthly Gas (therms)', value: gas },
        { label: 'Monthly Miles Driven', value: milesDriven },
        { label: 'Vehicle MPG', value: mpg },
        { label: 'Result Unit', value: unitLabel },
      ],
      results: [
        { label: 'Monthly Emissions', value: `${monthlyValue} ${unitLabel}` },
        { label: 'Annual Emissions', value: `${annualValue} ${unitLabel}` },
        ...breakdown.map(b => ({ label: `${b.name} (monthly)`, value: `${b.value} kg CO₂e` })),
      ],
    });
  };

  const chartData = breakdown.map(b => ({ name: b.name, value: b.value }));

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="electricity">Monthly Electricity (kWh)</Label>
          <Input
            id="electricity"
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gas">Monthly Gas (therms)</Label>
          <Input
            id="gas"
            type="number"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="milesDriven">Monthly Miles Driven</Label>
          <Input
            id="milesDriven"
            type="number"
            value={milesDriven}
            onChange={(e) => setMilesDriven(e.target.value)}
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mpg">Vehicle MPG</Label>
          <Input
            id="mpg"
            type="number"
            value={mpg}
            onChange={(e) => setMpg(e.target.value)}
            min="1"
            step="0.1"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="resultUnit">Result Unit</Label>
          <Select
            id="resultUnit"
            value={resultUnit}
            onChange={(e) => setResultUnit(e.target.value as ResultUnit)}
          >
            <option value="kg">Kilograms CO₂e (kg)</option>
            <option value="t">Tonnes CO₂e (t)</option>
          </Select>
        </div>

        <div className="text-sm text-gray-600">
          <div className="font-medium">Emission Factors (used)</div>
          <div>Electricity: {ELECTRICITY_FACTOR} kg CO₂/kWh</div>
          <div>Gas: {GAS_FACTOR} kg CO₂/therm</div>
          <div>Gasoline: {GASOLINE_FACTOR} kg CO₂/gallon</div>
        </div>
      </div>
    </>
  );

  const results = monthlyKgCO2 !== null && annualKgCO2 !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Emissions</div>
      <div className="text-4xl font-bold text-green-800 my-2">
        {resultUnit === 'kg' ? `${monthlyKgCO2.toLocaleString()} kg CO₂e/mo` : `${(monthlyKgCO2 / 1000).toFixed(3)} t CO₂e/mo`}
      </div>
      <div className="text-lg text-gray-700 mb-4">
        Annual: {resultUnit === 'kg' ? `${annualKgCO2.toLocaleString()} kg CO₂e/yr` : `${(annualKgCO2 / 1000).toFixed(3)} t CO₂e/yr`}
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {breakdown.map((b) => (
          <div key={b.name} className="p-3 bg-gray-50 rounded-md">
            <div className="text-sm text-gray-500">{b.name}</div>
            <div className="text-lg font-semibold text-gray-800">{b.value.toLocaleString()} kg</div>
            <div className="text-xs text-gray-400">per month</div>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  const charts = showCharts && breakdown.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Monthly Emissions Breakdown (kg CO₂e)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} kg CO₂e`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Carbon Footprint Calculator"
      description="Estimate your personal or household carbon footprint from electricity, gas, and driving (monthly and annual)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
