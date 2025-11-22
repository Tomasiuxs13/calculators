'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import React from 'react';

type NDResult = {
  pdf: number;
  cdf: number;
  z: number;
};

export default function NormalDistributionCalculator() {
  const [mean, setMean] = useState<string>('0');
  const [stdDev, setStdDev] = useState<string>('1');
  const [value, setValue] = useState<string>('1');
  const [result, setResult] = useState<NDResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [chartData, setChartData] = useState<Array<{ x: number; pdf: number }>>([]);

  // Error function approximation (Abramowitz and Stegun)
  const erf = (x: number): number => {
    // Save the sign of x
    const sign = x >= 0 ? 1 : -1;
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const absX = Math.abs(x);
    const t = 1 / (1 + p * absX);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
    return sign * y;
  };

  const normalPdf = (x: number, mu: number, sigma: number) => {
    const z = (x - mu) / sigma;
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
  };

  const normalCdf = (x: number, mu: number, sigma: number) => {
    const z = (x - mu) / sigma;
    return 0.5 * (1 + erf(z / Math.SQRT2));
  };

  useEffect(() => {
    const mu = parseFloat(mean);
    const sigma = parseFloat(stdDev);
    const x = parseFloat(value);

    if (isNaN(mu) || isNaN(sigma) || isNaN(x) || sigma <= 0) {
      setResult(null);
      setChartData([]);
      return;
    }

    const z = (x - mu) / sigma;
    const pdf = normalPdf(x, mu, sigma);
    const cdf = normalCdf(x, mu, sigma);

    setResult({ pdf: parseFloat(pdf.toFixed(8)), cdf: parseFloat(cdf.toFixed(8)), z: parseFloat(z.toFixed(8)) });

    // Generate chart data over mu +/- 4 sigma
    const points = 120;
    const start = mu - 4 * sigma;
    const end = mu + 4 * sigma;
    const step = (end - start) / (points - 1);
    const data: Array<{ x: number; pdf: number }> = [];
    for (let i = 0; i < points; i++) {
      const xi = start + i * step;
      data.push({ x: parseFloat(xi.toFixed(6)), pdf: parseFloat(normalPdf(xi, mu, sigma).toFixed(12)) });
    }
    setChartData(data);
  }, [mean, stdDev, value]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Normal Distribution Results',
      inputs: [
        { label: 'Mean (μ)', value: mean },
        { label: 'Standard Deviation (σ)', value: stdDev },
        { label: 'Value (x)', value: value },
      ],
      results: [
        { label: 'Z-score (z)', value: `${result.z}` },
        { label: 'PDF', value: `${result.pdf}` },
        { label: 'CDF (P(X ≤ x))', value: `${result.cdf}` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="mean">Mean (μ)</Label>
        <Input
          id="mean"
          type="number"
          value={mean}
          onChange={(e) => setMean(e.target.value)}
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="stdDev">Standard Deviation (σ)</Label>
        <Input
          id="stdDev"
          type="number"
          value={stdDev}
          onChange={(e) => setStdDev(e.target.value)}
          min="0.000001"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="value">Value (x)</Label>
        <Input
          id="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-3xl font-bold text-blue-900 my-2">Z = {result.z}</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">PDF</div>
          <div className="text-2xl font-semibold text-gray-900">{result.pdf.toLocaleString()}</div>
          <div className="text-xs text-gray-600 mt-1">f(x) = Probability density at x</div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="text-sm text-gray-500">CDF</div>
          <div className="text-2xl font-semibold text-gray-900">{(result.cdf * 100).toFixed(4)}%</div>
          <div className="text-xs text-gray-600 mt-1">P(X ≤ x) = Cumulative probability</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Normal Distribution (PDF)</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tickFormatter={(val) => parseFloat(String(val)).toFixed(2)} />
          <YAxis />
          <Tooltip
            formatter={(value: number) => (typeof value === 'number' ? value.toExponential(6) : value)}
            labelFormatter={(label) => `x = ${label}`}
          />
          <Area type="monotone" dataKey="pdf" stroke="#3b82f6" fill="#bfdbfe" />
          <Line type="monotone" dataKey="pdf" stroke="#1e40af" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Normal Distribution Calculator"
      description="Calculate PDF and CDF probabilities for a normal (Gaussian) distribution given mean (μ), standard deviation (σ), and value (x)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
