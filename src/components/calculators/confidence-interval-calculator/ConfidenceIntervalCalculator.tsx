'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CIResult = {
  lower: number;
  upper: number;
  margin: number;
  standardError: number;
  zScore: number;
};

function inverseStandardNormal(p: number): number {
  // Approximation by Peter John Acklam, adapted for TypeScript
  if (p <= 0 || p >= 1) {
    throw new Error('p must be in (0,1)');
  }

  const a1 = -39.6968302866538;
  const a2 = 220.946098424521;
  const a3 = -275.928510446969;
  const a4 = 138.357751867269;
  const a5 = -30.6647980661472;
  const a6 = 2.50662827745924;

  const b1 = -54.4760987982241;
  const b2 = 161.585836858041;
  const b3 = -155.698979859887;
  const b4 = 66.8013118877197;
  const b5 = -13.2806815528857;

  const c1 = -0.00778489400243029;
  const c2 = -0.322396458041136;
  const c3 = -2.40075827716184;
  const c4 = -2.54973253934373;
  const c5 = 4.37466414146497;
  const c6 = 2.93816398269878;

  const d1 = 0.00778469570904146;
  const d2 = 0.32246712907004;
  const d3 = 2.445134137143;
  const d4 = 3.75440866190742;

  // Define break-points.
  const plow = 0.02425;
  const phigh = 1 - plow;
  let q, r;
  let result = 0;

  if (p < plow) {
    // Rational approximation for lower region
    q = Math.sqrt(-2 * Math.log(p));
    result = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
  } else if (p <= phigh) {
    // Rational approximation for central region
    q = p - 0.5;
    r = q * q;
    result = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q /
      (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
  } else {
    // Rational approximation for upper region
    q = Math.sqrt(-2 * Math.log(1 - p));
    result = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
  }

  return result;
}

export default function ConfidenceIntervalCalculator() {
  const [sampleMean, setSampleMean] = useState<string>('50');
  const [stdDev, setStdDev] = useState<string>('10');
  const [sampleSize, setSampleSize] = useState<string>('100');
  const [confidenceLevel, setConfidenceLevel] = useState<string>('95');
  const [result, setResult] = useState<CIResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const mean = parseFloat(sampleMean);
    const sd = parseFloat(stdDev);
    const n = parseFloat(sampleSize);
    const conf = parseFloat(confidenceLevel);

    if (
      !isNaN(mean) &&
      !isNaN(sd) && sd >= 0 &&
      !isNaN(n) && n > 0 &&
      !isNaN(conf) && conf > 0 && conf < 100
    ) {
      // two-tailed z for given confidence level
      const alpha = 1 - conf / 100;
      const z = inverseStandardNormal(1 - alpha / 2);
      const se = sd / Math.sqrt(n);
      const margin = z * se;
      const lower = mean - margin;
      const upper = mean + margin;

      setResult({
        lower: parseFloat(lower.toFixed(6)),
        upper: parseFloat(upper.toFixed(6)),
        margin: parseFloat(margin.toFixed(6)),
        standardError: parseFloat(se.toFixed(6)),
        zScore: parseFloat(z.toFixed(6)),
      });
    } else {
      setResult(null);
    }
  }, [sampleMean, stdDev, sampleSize, confidenceLevel]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Confidence Interval Results',
      inputs: [
        { label: 'Sample Mean', value: sampleMean },
        { label: 'Standard Deviation', value: stdDev },
        { label: 'Sample Size', value: sampleSize },
        { label: 'Confidence Level (%)', value: confidenceLevel },
      ],
      results: [
        { label: 'Lower Bound', value: `${result.lower}` },
        { label: 'Upper Bound', value: `${result.upper}` },
        { label: 'Margin of Error', value: `${result.margin}` },
        { label: 'Standard Error', value: `${result.standardError}` },
        { label: 'Z-Score', value: `${result.zScore}` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Lower', value: result.lower },
        { label: 'Mean', value: parseFloat(sampleMean) || 0 },
        { label: 'Upper', value: result.upper },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sampleMean">Sample Mean</Label>
          <Input
            id="sampleMean"
            type="number"
            value={sampleMean}
            onChange={(e) => setSampleMean(e.target.value)}
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

        <div className="space-y-2">
          <Label htmlFor="sampleSize">Sample Size</Label>
          <Input
            id="sampleSize"
            type="number"
            value={sampleSize}
            onChange={(e) => setSampleSize(e.target.value)}
            min="1"
            step="1"
          />
        </div>

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
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Confidence Interval</div>
      <div className="text-4xl font-bold text-blue-900 my-3">
        {result.lower.toLocaleString()} — {result.upper.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700 mb-2">Margin of Error: {result.margin}</div>
      <div className="text-sm text-gray-600">Standard Error: {result.standardError} • Z-score: {result.zScore}</div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Mean and Confidence Bounds</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(4)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Confidence Interval Calculator"
      description="Calculate the confidence interval for a population mean given a sample mean, standard deviation, sample size, and confidence level."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
