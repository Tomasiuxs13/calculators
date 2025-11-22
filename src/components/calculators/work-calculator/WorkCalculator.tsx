'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AngleUnit = 'deg' | 'rad';

export default function WorkCalculator() {
  const [force, setForce] = useState<string>('50');
  const [distance, setDistance] = useState<string>('10');
  const [angle, setAngle] = useState<string>('0');
  const [angleUnit, setAngleUnit] = useState<AngleUnit>('deg');
  const [result, setResult] = useState<number | null>(null);
  const [forceComponent, setForceComponent] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const f = parseFloat(force);
    const d = parseFloat(distance);
    const a = parseFloat(angle);

    if (!isNaN(f) && !isNaN(d) && !isNaN(a) && d >= 0) {
      const aRad = angleUnit === 'deg' ? (a * Math.PI) / 180 : a;
      const fParallel = f * Math.cos(aRad); // component of force along displacement
      const w = fParallel * d;
      setForceComponent(parseFloat(fParallel.toFixed(6)));
      setResult(parseFloat(w.toFixed(6)));
    } else {
      setForceComponent(null);
      setResult(null);
    }
  }, [force, distance, angle, angleUnit]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Work Calculator Results',
      inputs: [
        { label: 'Force (N)', value: force },
        { label: 'Distance (m)', value: distance },
        { label: 'Angle', value: `${angle} ${angleUnit === 'deg' ? 'degrees' : 'radians'}` },
      ],
      results: [
        { label: 'Force component along displacement (N)', value: forceComponent !== null ? `${forceComponent} N` : 'N/A' },
        { label: 'Work (J)', value: `${result} J` },
      ],
    });
  };

  const chartData = result !== null && forceComponent !== null ? [
    { name: 'Force (N)', value: parseFloat(force) || 0, unit: 'N' },
    { name: 'Force ∥ (N)', value: forceComponent, unit: 'N' },
    { name: 'Distance (m)', value: parseFloat(distance) || 0, unit: 'm' },
    { name: 'Work (J)', value: result, unit: 'J' },
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
          step="0.01"
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
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="angle">Angle</Label>
          <Input
            id="angle"
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="angleUnit">Angle Unit</Label>
          <Select
            id="angleUnit"
            value={angleUnit}
            onChange={(e) => setAngleUnit(e.target.value as AngleUnit)}
          >
            <option value="deg">Degrees</option>
            <option value="rad">Radians</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()} {
          /* unit */
        }
      </div>
      <div className="text-lg text-gray-700">J (joules)</div>

      {forceComponent !== null && (
        <div className="mt-4 text-sm text-gray-600">
          Force component along displacement: <strong className="text-gray-900">{forceComponent.toLocaleString()} N</strong>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
        Formula: <code className="font-mono">W = F × d × cos(θ)</code>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Work Calculation Overview</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string) => {
            const item = chartData.find(d => d.value === value && d.name === name);
            const unit = item ? item.unit : '';
            return [`${value.toFixed(2)} ${unit}`, name];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Work Calculator"
      description="Calculate work done using W = F × d × cos(θ). Enter force (N), distance (m), and the angle between force and displacement."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
