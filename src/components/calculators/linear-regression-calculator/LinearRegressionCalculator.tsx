'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ComposedChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type RegressionResult = {
  slope: number;
  intercept: number;
  r: number;
  r2: number;
  n: number;
} | null;

export default function LinearRegressionCalculator() {
  const [xValues, setXValues] = useState<string>('1, 2, 3, 4, 5');
  const [yValues, setYValues] = useState<string>('2, 4, 5, 4, 5');
  const [result, setResult] = useState<RegressionResult>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  // Helper: parse comma-separated values into number[]
  const parseValues = (input: string): number[] => {
    return input
      .split(/[,\s]+/) // split by comma or whitespace
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n));
  };

  useEffect(() => {
    const xs = parseValues(xValues);
    const ys = parseValues(yValues);

    if (xs.length === 0 || ys.length === 0) {
      setResult(null);
      setError('Please provide numeric X and Y values.');
      return;
    }

    if (xs.length !== ys.length) {
      setResult(null);
      setError('X and Y must have the same number of values.');
      return;
    }

    const n = xs.length;
    if (n < 2) {
      setResult(null);
      setError('At least two data points are required.');
      return;
    }

    setError(null);

    // compute means
    const meanX = xs.reduce((a, b) => a + b, 0) / n;
    const meanY = ys.reduce((a, b) => a + b, 0) / n;

    // compute covariance and variances
    let cov = 0;
    let varX = 0;
    let varY = 0;

    for (let i = 0; i < n; i++) {
      const dx = xs[i] - meanX;
      const dy = ys[i] - meanY;
      cov += dx * dy;
      varX += dx * dx;
      varY += dy * dy;
    }

    // Use population denominators (n) for slope and correlation consistency
    // but since both cov and var are computed without dividing by n, ratio is correct
    const slope = varX === 0 ? 0 : cov / varX; // m = covariance / variance_x
    const intercept = meanY - slope * meanX; // b = meanY - m * meanX

    // correlation coefficient r
    const denom = Math.sqrt(varX * varY);
    const r = denom === 0 ? 0 : cov / denom;
    const r2 = r * r;

    setResult({
      slope: parseFloat(slope.toFixed(6)),
      intercept: parseFloat(intercept.toFixed(6)),
      r: parseFloat(r.toFixed(6)),
      r2: parseFloat(r2.toFixed(6)),
      n,
    });
  }, [xValues, yValues]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Linear Regression Results',
      inputs: [
        { label: 'X Values', value: xValues },
        { label: 'Y Values', value: yValues },
      ],
      results: [
        { label: 'Slope (m)', value: result.slope.toString() },
        { label: 'Intercept (b)', value: result.intercept.toString() },
        { label: 'Correlation Coefficient (r)', value: result.r.toString() },
        { label: 'R²', value: result.r2.toString() },
        { label: 'Data Points (n)', value: result.n.toString() },
      ],
    });
  };

  // Prepare chart data
  const dataPoints = (() => {
    const xs = xValues ? xValues.split(/[,\s]+/).map((s) => parseFloat(s)).filter((n) => !isNaN(n)) : [];
    const ys = yValues ? yValues.split(/[,\s]+/).map((s) => parseFloat(s)).filter((n) => !isNaN(n)) : [];
    if (xs.length !== ys.length) return [];
    return xs.map((x, i) => ({ x, y: ys[i] }));
  })();

  const regressionLineData = (() => {
    if (!result || dataPoints.length === 0) return [];
    const xs = dataPoints.map((d) => d.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const y1 = result.slope * minX + result.intercept;
    const y2 = result.slope * maxX + result.intercept;
    return [
      { x: minX, y: y1, label: 'line-start' },
      { x: maxX, y: y2, label: 'line-end' },
    ];
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="xValues">X Values (comma-separated)</Label>
        <Input
          id="xValues"
          type="text"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yValues">Y Values (comma-separated)</Label>
        <Input
          id="yValues"
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
        />
      </div>

      {/* Keep Select import aligned with example patterns even if not used here */}
      <div className="hidden">
        <Label htmlFor="placeholderSelect">Placeholder</Label>
        <Select id="placeholderSelect" value="">
          <option value="">-</option>
        </Select>
      </div>
    </>
  );

  const results = result && !error ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Linear Regression Results</div>
      <div className="text-2xl font-semibold text-gray-800">y = m x + b</div>
      <div className="text-3xl font-bold text-blue-900 my-3">
        m = {result.slope.toLocaleString()} , b = {result.intercept.toLocaleString()}
      </div>
      <div className="text-sm text-gray-700">r = {result.r.toLocaleString()} • R² = {result.r2.toLocaleString()}</div>
      <div className="text-sm text-gray-500 mt-2">n = {result.n}</div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">{error || 'Enter values to see results.'}</div>
  );

  const charts = showCharts && result && dataPoints.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Data & Regression Line</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={dataPoints} margin={{ top: 10, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip formatter={(value: number) => Number(value).toFixed(4)} />
          <Scatter data={dataPoints} fill="#2563eb" />
          <Line
            type="linear"
            data={regressionLineData}
            dataKey="y"
            stroke="#ef4444"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Linear Regression Calculator"
      description="Calculate the linear regression line (slope and intercept) and the Pearson correlation coefficient for paired data."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
