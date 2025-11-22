'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartDataItem = {
  label: string;
  value: number;
  unit?: string;
};

export default function EntropyCalculator() {
  const [heat, setHeat] = useState<string>('1000');
  const [temperature, setTemperature] = useState<string>('298');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const q = parseFloat(heat);
    const t = parseFloat(temperature);

    if (!isNaN(q) && !isNaN(t) && t > 0) {
      const deltaS = q / t; // ΔS = Q_rev / T (J/K)
      setResult(parseFloat(deltaS.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [heat, temperature]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Entropy Change Results',
      inputs: [
        { label: 'Heat (J)', value: heat },
        { label: 'Temperature (K)', value: temperature },
      ],
      results: [
        { label: 'Entropy Change (ΔS)', value: `${result} J/K` },
      ],
    });
  };

  const parsedHeat = parseFloat(heat) || 0;
  const chartData: ChartDataItem[] = result !== null ? [
    { label: 'Heat (J)', value: parsedHeat, unit: 'J' },
    { label: 'Entropy (J/K)', value: result, unit: 'J/K' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="heat">Heat (J)</Label>
        <Input
          id="heat"
          type="number"
          value={heat}
          onChange={(e) => setHeat(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="temperature">Temperature (K)</Label>
        <Input
          id="temperature"
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          min="0.01"
          step="0.1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Entropy Change (ΔS)</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">J / K</div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">Enter valid heat and temperature (T &gt; 0).</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Entropy Visualization</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = (props.payload && props.payload.unit) || '';
            return `${Number(value).toFixed(4)} ${unit}`;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Entropy Calculator"
      description="Calculate the entropy change (ΔS = Q_rev / T) given heat in joules and temperature in kelvin."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
