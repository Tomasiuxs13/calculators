'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Result = {
  requiredAreaMm2: number; // required conductor cross-sectional area in mm^2
  chosenSizeMm2: number;   // chosen standard size mm^2
  chosenLabel: string;     // e.g. "4 mm² (AWG 12)"
  actualVoltageDropV: number;
  voltageDropPercent: number;
};

// Resistivity of copper (ohm meter)
const COPPER_RESISTIVITY = 1.724e-8;

// Standard conductor sizes (metric mm^2) with approximate AWG equivalents (informational)
const standardSizes: { mm2: number; label: string }[] = [
  { mm2: 0.5, label: '0.5 mm²' },
  { mm2: 0.75, label: '0.75 mm²' },
  { mm2: 1, label: '1 mm²' },
  { mm2: 1.5, label: '1.5 mm²' },
  { mm2: 2.5, label: '2.5 mm² (AWG 13)' },
  { mm2: 4, label: '4 mm² (AWG 11)' },
  { mm2: 6, label: '6 mm² (AWG 10)' },
  { mm2: 10, label: '10 mm² (AWG 8)' },
  { mm2: 16, label: '16 mm² (AWG 6)' },
  { mm2: 25, label: '25 mm² (AWG 4)' },
  { mm2: 35, label: '35 mm²' },
  { mm2: 50, label: '50 mm²' },
  { mm2: 70, label: '70 mm²' },
  { mm2: 95, label: '95 mm²' },
];

export default function WireSizeCalculator() {
  const [current, setCurrent] = useState<string>('20'); // A
  const [voltage, setVoltage] = useState<string>('240'); // V
  const [distance, setDistance] = useState<string>('30'); // m (one-way)
  const [allowedPercent, setAllowedPercent] = useState<string>('3'); // % voltage drop allowed (optional select)
  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const I = parseFloat(current);
    const V = parseFloat(voltage);
    const L = parseFloat(distance);
    const pct = parseFloat(allowedPercent);

    if (isNaN(I) || isNaN(V) || isNaN(L) || isNaN(pct) || I <= 0 || V <= 0 || L < 0 || pct <= 0) {
      setResult(null);
      return;
    }

    // Allowed voltage drop in volts (using percentage of supply voltage)
    const allowedVdrop = (pct / 100) * V;

    // Formula: Vdrop = 2 * I * rho * L / A  ->  A = 2 * rho * I * L / Vdrop
    // A in m^2. Convert to mm^2 by *1e6
    const requiredArea_m2 = (2 * COPPER_RESISTIVITY * I * L) / Math.max(allowedVdrop, 1e-12);
    const requiredArea_mm2 = requiredArea_m2 * 1e6;

    // choose the smallest standard size >= requiredArea_mm2, or largest if none
    let chosen = standardSizes.find(s => s.mm2 >= requiredArea_mm2);
    if (!chosen) chosen = standardSizes[standardSizes.length - 1];

    const chosenArea_m2 = chosen.mm2 / 1e6;

    const actualVdrop = (2 * I * COPPER_RESISTIVITY * L) / chosenArea_m2; // volts
    const vdropPercent = (actualVdrop / V) * 100;

    const r: Result = {
      requiredAreaMm2: parseFloat(requiredArea_mm2.toFixed(3)),
      chosenSizeMm2: chosen.mm2,
      chosenLabel: chosen.label,
      actualVoltageDropV: parseFloat(actualVdrop.toFixed(3)),
      voltageDropPercent: parseFloat(vdropPercent.toFixed(2)),
    };

    setResult(r);
  }, [current, voltage, distance, allowedPercent]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Wire Size Calculator Results',
      inputs: [
        { label: 'Current (A)', value: current },
        { label: 'Voltage (V)', value: voltage },
        { label: 'Distance (m)', value: distance },
        { label: 'Allowed Voltage Drop (%)', value: allowedPercent },
      ],
      results: [
        { label: 'Required Conductor Area', value: `${result.requiredAreaMm2} mm²` },
        { label: 'Recommended Size', value: `${result.chosenLabel} (${result.chosenSizeMm2} mm²)` },
        { label: 'Estimated Voltage Drop', value: `${result.actualVoltageDropV} V (${result.voltageDropPercent}%)` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Required (mm²)', value: result.requiredAreaMm2 },
    { label: 'Chosen (mm²)', value: result.chosenSizeMm2 },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="current">Current (A)</Label>
        <Input
          id="current"
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="voltage">Voltage (V)</Label>
        <Input
          id="voltage"
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Distance (m)</Label>
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
        <Label htmlFor="allowed">Allowed Voltage Drop (%)</Label>
        <Select
          id="allowed"
          value={allowedPercent}
          onChange={(e) => setAllowedPercent(e.target.value)}
        >
          <option value="1">1%</option>
          <option value="2">2%</option>
          <option value="3">3%</option>
          <option value="5">5%</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Conductor</div>
      <div className="text-4xl font-bold text-blue-900 my-2">{result.chosenLabel}</div>
      <div className="text-sm text-gray-700 mb-4">(Chosen to meet {allowedPercent}% voltage drop)</div>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Required Area</div>
          <div className="text-2xl font-semibold">{result.requiredAreaMm2} mm²</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Chosen Size</div>
          <div className="text-2xl font-semibold">{result.chosenSizeMm2} mm²</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">Estimated V drop</div>
          <div className="text-2xl font-semibold">{result.actualVoltageDropV} V</div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <div className="text-xs text-gray-500">V drop (%)</div>
          <div className="text-2xl font-semibold">{result.voltageDropPercent}%</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Required vs Chosen Conductor Area</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} mm²`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Wire Size Calculator"
      description="Calculate appropriate wire gauge (metric mm²) for electrical circuits based on current, system voltage, and one-way conductor distance. Uses copper resistivity and allowed voltage drop to recommend a standard conductor size."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
