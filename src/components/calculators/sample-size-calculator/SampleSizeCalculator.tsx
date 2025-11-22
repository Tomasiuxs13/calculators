'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableNumber = number | null;

function getZScore(confidenceLevel: number): number {
  // Common Z-scores for typical confidence levels
  // If a non-standard percentage is provided, fall back to interpolation for common values
  const rounded = Math.round(confidenceLevel);
  if (rounded === 90) return 1.645;
  if (rounded === 95) return 1.96;
  if (rounded === 99) return 2.576;
  // For other values approximate using inverse error function is overkill here;
  // We'll provide a reasonable fallback by linear interpolation between 90-99
  if (confidenceLevel > 99) return 2.576;
  if (confidenceLevel < 90) return 1.645;
  // Linear interpolation between 90(1.645) and 99(2.576)
  const t = (confidenceLevel - 90) / (99 - 90);
  return 1.645 + t * (2.576 - 1.645);
}

export default function SampleSizeCalculator() {
  const [confidenceLevel, setConfidenceLevel] = useState<string>('95');
  const [marginOfError, setMarginOfError] = useState<string>('5');
  const [populationSize, setPopulationSize] = useState<string>('10000');
  const [result, setResult] = useState<NullableNumber>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const cl = parseFloat(confidenceLevel);
    const mePercent = parseFloat(marginOfError);
    const N = parseFloat(populationSize);

    if (isNaN(cl) || isNaN(mePercent) || isNaN(N) || cl <= 0 || mePercent <= 0 || N <= 0) {
      setResult(null);
      return;
    }

    // Convert margin of error percentage to decimal
    const E = mePercent / 100;
    const Z = getZScore(cl);
    // Use conservative estimate p = 0.5 for maximum variability
    const p = 0.5;

    // Calculate sample size for infinite population (n0)
    const n0 = (Z * Z * p * (1 - p)) / (E * E);

    // Apply finite population correction if population is finite
    const n = (N * n0) / (n0 + N - 1);

    // Round up to ensure sufficient sample
    const finalSample = Math.ceil(n);

    setResult(finalSample);
  }, [confidenceLevel, marginOfError, populationSize]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Sample Size Calculator Results',
      inputs: [
        { label: 'Confidence Level (%)', value: confidenceLevel },
        { label: 'Margin of Error (%)', value: marginOfError },
        { label: 'Population Size', value: populationSize },
      ],
      results: [
        { label: 'Required Sample Size', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Population', value: parseFloat(populationSize) || 0 },
    { label: 'Required Sample', value: result },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="confidenceLevel">Confidence Level (%)</Label>
        <Input
          id="confidenceLevel"
          type="number"
          value={confidenceLevel}
          onChange={(e) => setConfidenceLevel(e.target.value)}
          min="50"
          max="99.99"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="marginOfError">Margin of Error (%)</Label>
        <Input
          id="marginOfError"
          type="number"
          value={marginOfError}
          onChange={(e) => setMarginOfError(e.target.value)}
          min="0.1"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="populationSize">Population Size</Label>
        <Input
          id="populationSize"
          type="number"
          value={populationSize}
          onChange={(e) => setPopulationSize(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Required Sample Size</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">participants</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Sample Size vs Population</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Sample Size Calculator"
      description="Calculate the required sample size for statistical tests given a confidence level, margin of error, and population size. Uses a conservative proportion (p = 0.5) to ensure sufficient sample size."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
