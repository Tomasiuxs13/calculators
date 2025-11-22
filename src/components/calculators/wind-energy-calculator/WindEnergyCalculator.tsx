'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type WindResults = {
  area: number; // m^2
  powerAvailable: number; // W
  powerExtracted: number; // W
  annualEnergyKWh: number; // kWh/year
};

export default function WindEnergyCalculator() {
  const [windSpeed, setWindSpeed] = useState<string>('8');
  const [turbineDiameter, setTurbineDiameter] = useState<string>('50');
  const [efficiency, setEfficiency] = useState<string>('40');
  const [result, setResult] = useState<WindResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Constant base value: air density in kg/m^3 (base unit for calculations)
  const AIR_DENSITY = 1.225;

  useEffect(() => {
    const v = parseFloat(windSpeed);
    const D = parseFloat(turbineDiameter);
    const etaPct = parseFloat(efficiency);

    if (
      !isNaN(v) && !isNaN(D) && !isNaN(etaPct) &&
      v >= 0 && D > 0 && etaPct >= 0 && etaPct <= 100
    ) {
      // Convert inputs to base units if necessary (they already are in SI):
      // windSpeed in m/s (base), diameter in m (base), efficiency as fraction
      const eta = etaPct / 100;

      // Rotor swept area (m^2): A = π * (D/2)^2
      const area = Math.PI * Math.pow(D / 2, 2);

      // Available power in the wind (W): P = 0.5 * rho * A * v^3
      const powerAvailable = 0.5 * AIR_DENSITY * area * Math.pow(v, 3);

      // Extracted power (W) = available * efficiency
      const powerExtracted = powerAvailable * eta;

      // Annual energy assuming continuous operation at average speed (kWh/year)
      const powerExtractedKW = powerExtracted / 1000;
      const annualEnergyKWh = powerExtractedKW * 24 * 365;

      setResult({
        area: parseFloat(area.toFixed(3)),
        powerAvailable: parseFloat(powerAvailable.toFixed(2)),
        powerExtracted: parseFloat(powerExtracted.toFixed(2)),
        annualEnergyKWh: parseFloat(annualEnergyKWh.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [windSpeed, turbineDiameter, efficiency]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Wind Energy Calculator Results',
      inputs: [
        { label: 'Average Wind Speed (m/s)', value: windSpeed },
        { label: 'Turbine Diameter (m)', value: turbineDiameter },
        { label: 'Turbine Efficiency (%)', value: efficiency },
      ],
      results: [
        { label: 'Rotor Swept Area (m²)', value: `${result.area} m²` },
        { label: 'Available Power (W)', value: `${result.powerAvailable} W` },
        { label: 'Extracted Power (W)', value: `${result.powerExtracted} W` },
        { label: 'Estimated Annual Energy (kWh)', value: `${result.annualEnergyKWh} kWh` },
      ],
    });
  };

  const chartData = result
    ? [
        { name: 'Available', value: parseFloat((result.powerAvailable / 1000).toFixed(2)), unit: 'kW' },
        { name: 'Extracted', value: parseFloat((result.powerExtracted / 1000).toFixed(2)), unit: 'kW' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="windSpeed">Average Wind Speed (m/s)</Label>
        <Input
          id="windSpeed"
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="turbineDiameter">Turbine Diameter (m)</Label>
          <Input
            id="turbineDiameter"
            type="number"
            value={turbineDiameter}
            onChange={(e) => setTurbineDiameter(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="efficiency">Turbine Efficiency (%)</Label>
          <Input
            id="efficiency"
            type="number"
            value={efficiency}
            onChange={(e) => setEfficiency(e.target.value)}
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Extracted Power</div>
      <div className="text-5xl font-bold text-green-800 my-3">{(result.powerExtracted / 1000).toLocaleString()} kW</div>
      <div className="text-sm text-gray-700">({result.powerExtracted.toLocaleString()} W)</div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Rotor Swept Area</div>
          <div className="text-xl font-semibold">{result.area.toLocaleString()} m²</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Available Power</div>
          <div className="text-xl font-semibold">{(result.powerAvailable / 1000).toLocaleString()} kW</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Estimated Annual Energy</div>
          <div className="text-xl font-semibold">{result.annualEnergyKWh.toLocaleString()} kWh/yr</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Power Comparison (kW)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kW`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Wind Energy Calculator"
      description="Calculate wind energy potential and generation based on average wind speed, turbine diameter, and turbine efficiency."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
