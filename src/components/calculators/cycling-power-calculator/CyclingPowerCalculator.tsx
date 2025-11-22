'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type OutputUnit = 'W' | 'kW';

export default function CyclingPowerCalculator() {
  const [force, setForce] = useState<string>('200');
  const [velocity, setVelocity] = useState<string>('10');
  const [outputUnit, setOutputUnit] = useState<OutputUnit>('W');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const f = parseFloat(force);
    const v = parseFloat(velocity);

    if (!isNaN(f) && !isNaN(v)) {
      // Power in watts = Force (N) * Velocity (m/s)
      const powerW = f * v;
      const displayed = outputUnit === 'kW' ? powerW / 1000 : powerW;
      setResult(parseFloat(displayed.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [force, velocity, outputUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Cycling Power Calculator Results',
      inputs: [
        { label: 'Force (N)', value: force },
        { label: 'Velocity (m/s)', value: velocity },
        { label: 'Output Unit', value: outputUnit },
      ],
      results: [
        { label: 'Power', value: `${result} ${outputUnit}` },
      ],
    });
  };

  const fNum = parseFloat(force) || 0;
  const vNum = parseFloat(velocity) || 0;
  const powerW = fNum * vNum;

  const chartData = result !== null ? [
    { label: 'Force (N)', value: fNum, unit: 'N' },
    { label: 'Velocity (m/s)', value: vNum, unit: 'm/s' },
    { label: `Power (${outputUnit})`, value: outputUnit === 'kW' ? parseFloat((powerW / 1000).toFixed(2)) : parseFloat(powerW.toFixed(2)), unit: outputUnit },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="force">Force (N)</Label>
        <Input
          id="force"
          type="number"
          value={force}
          onChange={(e) => setForce(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="velocity">Velocity (m/s)</Label>
        <Input
          id="velocity"
          type="number"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="outputUnit">Output Unit</Label>
        <Select
          id="outputUnit"
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value as OutputUnit)}
        >
          <option value="W">Watts (W)</option>
          <option value="kW">Kilowatts (kW)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">{outputUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cycling Power Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props.payload?.unit || '';
            if (typeof value === 'number') return [`${value}`, unit];
            return [value, unit];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cycling Power Calculator"
      description="Calculate cycling power output from force and velocity. Power (W) = Force (N) × Velocity (m/s)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
