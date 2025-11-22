'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ForceCalculator() {
  const [mass, setMass] = useState<string>('10');
  const [acceleration, setAcceleration] = useState<string>('9.8');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const massValue = parseFloat(mass);
    const accelerationValue = parseFloat(acceleration);
    if (!isNaN(massValue) && !isNaN(accelerationValue) && massValue >= 0 && accelerationValue >= 0) {
      const force = massValue * accelerationValue;
      setResult(parseFloat(force.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [mass, acceleration]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Force Calculator Results',
      inputs: [
        { label: 'Mass (kg)', value: mass },
        { label: 'Acceleration (m/s²)', value: acceleration },
      ],
      results: [
        { label: 'Result (Force)', value: `${result} N` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="mass">Mass (kg)</Label>
        <Input
          id="mass"
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="acceleration">Acceleration (m/s²)</Label>
        <Input
          id="acceleration"
          type="number"
          value={acceleration}
          onChange={(e) => setAcceleration(e.target.value)}
          min="0"
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
      <div className="text-lg text-gray-700">N</div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Force', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Force Calculation</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} N`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Force Calculator"
      description="Calculate force using F = ma (Newton's second law)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
