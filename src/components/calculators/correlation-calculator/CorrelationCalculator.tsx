'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CorrelationCalculator() {
  const [xValues, setXValues] = useState<string>('1, 2, 3, 4, 5');
  const [yValues, setYValues] = useState<string>('2, 4, 6, 8, 10');
  const [rValue, setRValue] = useState<number | null>(null);
  const [rSquared, setRSquared] = useState<number | null>(null);
  const [nPairs, setNPairs] = useState<number>(0);
  const [showCharts, setShowCharts] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Parse comma-separated values
    const parseList = (s: string): number[] =>
      s
        .split(',')
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
        .map((v) => Number(v));

    const xs = parseList(xValues);
    const ys = parseList(yValues);

    if (xs.length === 0 || ys.length === 0) {
      setError('Both X and Y must contain at least one numeric value.');
      setRValue(null);
      setRSquared(null);
      setNPairs(0);
      return;
    }

    if (xs.length !== ys.length) {
      setError('X and Y must have the same number of values.');
      setRValue(null);
      setRSquared(null);
      setNPairs(0);
      return;
    }

    if (xs.some(isNaN) || ys.some(isNaN)) {
      setError('All entries must be valid numbers.');
      setRValue(null);
      setRSquared(null);
      setNPairs(0);
      return;
    }

    if (xs.length < 2) {
      setError('At least two pairs are required to compute correlation.');
      setRValue(null);
      setRSquared(null);
      setNPairs(xs.length);
      return;
    }

    setError(null);

    const n = xs.length;
    setNPairs(n);

    const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    const meanX = mean(xs);
    const meanY = mean(ys);

    let cov = 0;
    let ssx = 0;
    let ssy = 0;

    for (let i = 0; i < n; i++) {
      const dx = xs[i] - meanX;
      const dy = ys[i] - meanY;
      cov += dx * dy;
      ssx += dx * dx;
      ssy += dy * dy;
    }

    // Use sample covariance denominator (n - 1) if n > 1 for unbiased estimate
    const denominator = Math.sqrt(ssx * ssy);

    if (denominator === 0) {
      setRValue(null);
      setRSquared(null);
      return;
    }

    // Pearson correlation coefficient (using population denominator for covariance normalized by sqrt),
    // Since we used sum((xi-meanx)*(yi-meany)), using denom sqrt(ssx*ss y) is consistent for r.
    const r = cov / denominator;
    const roundedR = parseFloat(r.toFixed(6));

    setRValue(roundedR);
    setRSquared(parseFloat((roundedR * roundedR).toFixed(6)));
  }, [xValues, yValues]);

  const handleDownloadPDF = () => {
    if (rValue === null) return;

    generateCalculatorPDF({
      title: 'Correlation Calculator Results',
      inputs: [
        { label: 'X Values', value: xValues },
        { label: 'Y Values', value: yValues },
      ],
      results: [
        { label: 'Correlation Coefficient (r)', value: rValue.toString() },
        { label: "Coefficient of Determination (r²)", value: rSquared !== null ? rSquared.toString() : 'N/A' },
        { label: 'Number of Pairs', value: nPairs.toString() },
      ],
    });
  };

  const chartData = rValue !== null
    ? xValues
        .split(',')
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
        .map((v, i) => ({ x: Number(v), y: Number(yValues.split(',')[i]) }))
    : [];

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
    </>
  );

  const results = (
    <div className="text-center">
      {error ? (
        <div className="text-sm text-red-600">{error}</div>
      ) : rValue === null ? (
        <div className="text-sm text-gray-600">Insufficient data to compute correlation.</div>
      ) : (
        <>
          <div className="text-sm text-gray-600 mb-2">Correlation (Pearson r)</div>
          <div className="text-5xl font-bold text-blue-900 my-3">{rValue.toLocaleString()}</div>
          <div className="text-lg text-gray-700 mb-2">r</div>

          <div className="text-sm text-gray-600 mt-4">Coefficient of Determination (r²)</div>
          <div className="text-2xl font-semibold text-gray-800 my-2">{rSquared !== null ? rSquared.toLocaleString() : 'N/A'}</div>

          <div className="text-sm text-gray-600">Number of pairs: {nPairs}</div>
        </>
      )}
    </div>
  );

  const charts = showCharts && rValue !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Scatter Plot of X vs Y</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            formatter={(value: number, name: string, props: any) => {
              // tooltip shows coordinate
              return [value, name];
            }}
            labelFormatter={(label) => `Point`}
          />
          <Scatter data={chartData} fill="#3b82f6" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Correlation Calculator"
      description="Calculate the Pearson correlation coefficient between two variables. Provide comma-separated X and Y values of equal length."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
