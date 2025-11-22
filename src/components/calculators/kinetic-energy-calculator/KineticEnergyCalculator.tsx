'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function KineticEnergyCalculator() {
  const [mass, setMass] = useState<string>('10');
  const [velocity, setVelocity] = useState<string>('5');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numMass = parseFloat(mass);
    const numVelocity = parseFloat(velocity);
    if (!isNaN(numMass) && !isNaN(numVelocity) && numMass >= 0 && numVelocity >= 0) {
      const kineticEnergy = 0.5 * numMass * Math.pow(numVelocity, 2);
      setResult(parseFloat(kineticEnergy.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [mass, velocity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Kinetic Energy Calculator Results',
      inputs: [
        { label: 'Mass', value: mass },
        { label: 'Velocity', value: velocity },
      ],
      results: [
        { label: 'Result', value: `${result} J` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Kinetic Energy', value: result },
  ] : [];

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
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">J</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Kinetic Energy Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} J`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Kinetic Energy Calculator"
      description="Calculate kinetic energy using KE = ½mv²."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
