'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type PipeResult = {
  diameterMm: number;
  areaM2: number;
};

export default function PipeSizeCalculator() {
  const [flowRate, setFlowRate] = useState<string>('20'); // L/min
  const [velocity, setVelocity] = useState<string>('2'); // m/s
  const [result, setResult] = useState<PipeResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Convert flow rate from L/min to m^3/s
    const qLmin = parseFloat(flowRate);
    const v = parseFloat(velocity);

    if (!isNaN(qLmin) && qLmin >= 0 && !isNaN(v) && v > 0) {
      const qM3s = (qLmin * 0.001) / 60; // L to m^3, per minute to per second
      const area = qM3s / v; // m^2
      const diameterM = Math.sqrt((4 * area) / Math.PI);
      const diameterMm = diameterM * 1000;

      setResult({
        diameterMm: parseFloat(diameterMm.toFixed(2)),
        areaM2: parseFloat(area.toFixed(6)),
      });
    } else {
      setResult(null);
    }
  }, [flowRate, velocity]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Pipe Size Calculator Results',
      inputs: [
        { label: 'Flow Rate (L/min)', value: flowRate },
        { label: 'Water Velocity (m/s)', value: velocity },
      ],
      results: [
        { label: 'Required Diameter', value: `${result.diameterMm} mm` },
        { label: 'Cross-Sectional Area', value: `${result.areaM2} m²` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Flow Rate (L/min)', value: parseFloat(flowRate) || 0, unit: 'L/min' },
        { label: 'Diameter (mm)', value: result.diameterMm, unit: 'mm' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="flowRate">Flow Rate (L/min)</Label>
        <Input
          id="flowRate"
          type="number"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="velocity">Water Velocity (m/s)</Label>
        <Input
          id="velocity"
          type="number"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
          min="0.01"
          step="0.01"
        />
      </div>

      {/* Imported to follow the project pattern even if not used here */}
      <div className="hidden">
        <Label htmlFor="dummySelect">Unit (hidden)</Label>
        <Select id="dummySelect" value="m/s" onChange={() => {}}>
          <option value="m/s">m/s</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="text-3xl font-semibold text-gray-900 my-2">
        {result.diameterMm.toLocaleString()} <span className="text-lg font-medium text-gray-600">mm</span>
      </div>

      <div className="text-sm text-gray-700">Required Pipe Diameter</div>

      <div className="mt-4 text-center">
        <div className="text-xs text-gray-500">Cross-sectional area</div>
        <div className="text-xl font-medium text-gray-800">{result.areaM2} m²</div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter valid flow rate and velocity to see results</div>
  );

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Calculation Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              const unit = props.payload.unit || '';
              return [`${value}`, `${unit}`];
            }}
          />
          <Bar dataKey="value" fill="#059669" />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-3 text-sm text-gray-600 text-center">Bar chart compares input flow rate to the calculated diameter (different units).</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pipe Size Calculator"
      description="Calculate the pipe diameter required for a given water flow rate and target velocity. Ideal for plumbing and hydraulic planning."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
