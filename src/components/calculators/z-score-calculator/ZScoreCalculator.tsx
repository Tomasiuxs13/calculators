'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ZScoreCalculator() {
  const [value, setValue] = useState<string>('85');
  const [mean, setMean] = useState<string>('75');
  const [stdDev, setStdDev] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numValue = parseFloat(value);
    const numMean = parseFloat(mean);
    const numStdDev = parseFloat(stdDev);
    if (!isNaN(numValue) && !isNaN(numMean) && !isNaN(numStdDev) && numStdDev > 0) {
      const zScore = (numValue - numMean) / numStdDev;
      setResult(parseFloat(zScore.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [value, mean, stdDev]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Z-Score Calculator Results',
      inputs: [
        { label: 'Data Value', value: value },
        { label: 'Mean', value: mean },
        { label: 'Standard Deviation', value: stdDev },
      ],
      results: [
        { label: 'Z-Score', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Z-Score', value: result },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="value">Data Value</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mean">Mean</Label>
        <Input
          id="mean"
          type="number"
          value={mean}
          onChange={(e) => setMean(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="stdDev">Standard Deviation</Label>
        <Input
          id="stdDev"
          type="number"
          value={stdDev}
          onChange={(e) => setStdDev(e.target.value)}
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
      <div className="text-lg text-gray-700">Z-Score</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Z-Score Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Z-Score Calculator"
      description="Calculate z-score (standard score) for a data point."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
