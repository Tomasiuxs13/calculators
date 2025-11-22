'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartDatum = {
  name: string;
  value: number;
  unit: string;
};

export default function WaterFlowCalculator() {
  const [pipeDiameter, setPipeDiameter] = useState<string>('5'); // cm
  const [velocity, setVelocity] = useState<string>('2'); // m/s

  const [flowM3s, setFlowM3s] = useState<number | null>(null);
  const [flowLps, setFlowLps] = useState<number | null>(null);
  const [flowM3h, setFlowM3h] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const d = parseFloat(pipeDiameter);
    const v = parseFloat(velocity);

    if (!isNaN(d) && !isNaN(v) && d > 0 && v >= 0) {
      // Convert diameter from cm to meters (base unit)
      const dMeters = d * 0.01;
      const radius = dMeters / 2;
      const area = Math.PI * radius * radius; // m^2
      const q = area * v; // m^3/s

      setFlowM3s(parseFloat(q.toFixed(6)));
      setFlowLps(parseFloat((q * 1000).toFixed(3))); // liters per second
      setFlowM3h(parseFloat((q * 3600).toFixed(4))); // cubic meters per hour
    } else {
      setFlowM3s(null);
      setFlowLps(null);
      setFlowM3h(null);
    }
  }, [pipeDiameter, velocity]);

  const handleDownloadPDF = () => {
    if (flowM3s === null || flowLps === null || flowM3h === null) return;

    generateCalculatorPDF({
      title: 'Water Flow Calculator Results',
      inputs: [
        { label: 'Pipe Diameter (cm)', value: pipeDiameter },
        { label: 'Water Velocity (m/s)', value: velocity },
      ],
      results: [
        { label: 'Flow (m³/s)', value: `${flowM3s} m³/s` },
        { label: 'Flow (L/s)', value: `${flowLps} L/s` },
        { label: 'Flow (m³/h)', value: `${flowM3h} m³/h` },
      ],
    });
  };

  const chartData: ChartDatum[] =
    flowLps !== null && flowM3h !== null
      ? [
          { name: 'Flow (L/s)', value: flowLps, unit: 'L/s' },
          { name: 'Flow (m³/h)', value: flowM3h, unit: 'm³/h' },
        ]
      : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="pipeDiameter">Pipe Diameter (cm)</Label>
        <Input
          id="pipeDiameter"
          type="number"
          value={pipeDiameter}
          onChange={(e) => setPipeDiameter(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="velocity">Water Velocity (m/s)</Label>
        <Input
          id="velocity"
          type="number"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = flowLps !== null && flowM3s !== null && flowM3h !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Flow Rate</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{flowLps.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Liters per second (L/s)</div>

      <div className="mt-4 text-sm text-gray-600">Other Units</div>
      <div className="mt-2 text-base text-gray-800">{flowM3s} m³/s</div>
      <div className="mt-1 text-base text-gray-800">{flowM3h} m³/h</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Flow Rate Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(3)} ${chartData.find((d) => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#059669" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Water Flow Calculator"
      description="Calculate water flow rate through pipes."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
