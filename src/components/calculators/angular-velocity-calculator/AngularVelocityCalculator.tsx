'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type OutputUnit = 'rad/s' | 'rpm';

export default function AngularVelocityCalculator() {
  const [angularDisplacement, setAngularDisplacement] = useState<string>('6.28');
  const [time, setTime] = useState<string>('1');
  const [outputUnit, setOutputUnit] = useState<OutputUnit>('rad/s');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const theta = parseFloat(angularDisplacement);
    const t = parseFloat(time);

    if (!isNaN(theta) && !isNaN(t) && t > 0) {
      // Base calculation: angular velocity in rad/s
      const omegaRadPerSec = theta / t;

      let final = omegaRadPerSec;
      if (outputUnit === 'rpm') {
        // Convert rad/s to revolutions per minute: rpm = (rad/s) * 60 / (2π)
        final = (omegaRadPerSec * 60) / (2 * Math.PI);
      }

      setResult(parseFloat(final.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [angularDisplacement, time, outputUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Angular Velocity Calculator Results',
      inputs: [
        { label: 'Angular Displacement (rad)', value: angularDisplacement },
        { label: 'Time (s)', value: time },
        { label: 'Output Unit', value: outputUnit },
      ],
      results: [
        { label: 'Angular Velocity', value: `${result} ${outputUnit}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Displacement', value: parseFloat(angularDisplacement) || 0, unit: 'rad', label: 'Angular Displacement (rad)' },
    { name: 'Angular Velocity', value: result, unit: outputUnit, label: `Angular Velocity (${outputUnit})` },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="angularDisplacement">Angular Displacement (rad)</Label>
        <Input
          id="angularDisplacement"
          type="number"
          value={angularDisplacement}
          onChange={(e) => setAngularDisplacement(e.target.value)}
          step="0.0001"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="time">Time (s)</Label>
          <Input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min="0"
            step="0.0001"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="outputUnit">Output Unit</Label>
          <Select
            id="outputUnit"
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value as OutputUnit)}
          >
            <option value="rad/s">Radians per second (rad/s)</option>
            <option value="rpm">Revolutions per minute (RPM)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">{outputUnit}</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Angular Motion Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(4)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Angular Velocity Calculator"
      description="Calculate angular velocity from rotational motion. Provide the angular displacement (in radians) and the time (in seconds) to compute angular velocity in rad/s or RPM."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
