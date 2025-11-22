'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function VoltageDropCalculator() {
  const [current, setCurrent] = useState<string>('20');
  const [resistance, setResistance] = useState<string>('0.1');
  const [distance, setDistance] = useState<string>('30');

  const [voltageDrop, setVoltageDrop] = useState<number | null>(null);
  const [remainingVoltage, setRemainingVoltage] = useState<number | null>(null);
  const [percentDrop, setPercentDrop] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Assumed system supply voltage for percentage calculations
  const SUPPLY_VOLTAGE = 230; // Volts

  useEffect(() => {
    const i = parseFloat(current);
    const rPerMeter = parseFloat(resistance);
    const d = parseFloat(distance);

    if (!isNaN(i) && !isNaN(rPerMeter) && !isNaN(d) && i >= 0 && rPerMeter >= 0 && d >= 0) {
      // Convert inputs to base units (meters already), compute total conductor resistance
      // Assuming the provided resistance is resistance per meter (Ω/m) and distance is one-way.
      // Total conductor length (round-trip) = distance * 2
      const totalLength = d * 2;
      const totalResistance = rPerMeter * totalLength; // Ω
      const vDrop = i * totalResistance; // V
      const remaining = SUPPLY_VOLTAGE - vDrop;
      const pct = (vDrop / SUPPLY_VOLTAGE) * 100;

      setVoltageDrop(parseFloat(vDrop.toFixed(4)));
      setRemainingVoltage(parseFloat(Math.max(remaining, 0).toFixed(4)));
      setPercentDrop(parseFloat(pct.toFixed(2)));
    } else {
      setVoltageDrop(null);
      setRemainingVoltage(null);
      setPercentDrop(null);
    }
  }, [current, resistance, distance]);

  const handleDownloadPDF = () => {
    if (voltageDrop === null || percentDrop === null || remainingVoltage === null) return;

    generateCalculatorPDF({
      title: 'Voltage Drop Calculation Results',
      inputs: [
        { label: 'Current (A)', value: current },
        { label: 'Resistance (Ω/m)', value: resistance },
        { label: 'Distance (m)', value: distance },
      ],
      results: [
        { label: 'Voltage Drop (V)', value: `${voltageDrop} V` },
        { label: 'Remaining Voltage (V)', value: `${remainingVoltage} V` },
        { label: 'Percent Drop (%)', value: `${percentDrop} %` },
      ],
    });
  };

  const chartData = voltageDrop !== null && remainingVoltage !== null ? [
    { label: 'Voltage Drop', value: voltageDrop, unit: 'V' },
    { label: 'Remaining Voltage', value: remainingVoltage, unit: 'V' },
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
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resistance">Resistance (Ω/m)</Label>
        <Input
          id="resistance"
          type="number"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          min="0"
          step="0.0001"
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
    </>
  );

  const results = voltageDrop !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Voltage Drop</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {voltageDrop.toLocaleString()} V
      </div>
      <div className="text-lg text-gray-700 mb-2">Remaining: {remainingVoltage?.toLocaleString()} V</div>
      <div className="text-sm text-gray-600">Drop: {percentDrop}% of {SUPPLY_VOLTAGE} V</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Voltage Drop Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} V`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Voltage Drop Calculator"
      description="Calculate voltage drop in electrical circuits. Enter current, resistance per meter, and distance to estimate voltage loss over the conductor (round-trip)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
