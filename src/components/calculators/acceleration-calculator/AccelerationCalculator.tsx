'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function AccelerationCalculator() {
  const [initialVelocity, setInitialVelocity] = useState<string>('0');
  const [finalVelocity, setFinalVelocity] = useState<string>('20');
  const [time, setTime] = useState<string>('5');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const initial = parseFloat(initialVelocity);
    const final = parseFloat(finalVelocity);
    const t = parseFloat(time);
    if (!isNaN(initial) && !isNaN(final) && !isNaN(t) && t > 0) {
      const acceleration = (final - initial) / t;
      setResult(parseFloat(acceleration.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [initialVelocity, finalVelocity, time]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Acceleration Calculator Results',
      inputs: [
        { label: 'Initial Velocity', value: initialVelocity },
        { label: 'Final Velocity', value: finalVelocity },
        { label: 'Time', value: time },
      ],
      results: [
        { label: 'Result', value: `${result} m/s²` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Acceleration', value: result },
  ] : [];

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="initialVelocity">Initial Velocity (m/s)</Label>
        <Input
          id="initialVelocity"
          type="number"
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalVelocity">Final Velocity (m/s)</Label>
        <Input
          id="finalVelocity"
          type="number"
          value={finalVelocity}
          onChange={(e) => setFinalVelocity(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Time (s)</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">m/s²</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Acceleration Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} m/s²`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Acceleration Calculator"
      description="Calculate acceleration from initial and final velocity over time."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
