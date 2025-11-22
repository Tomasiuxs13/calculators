'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type RegressionResult = {
  slope: number;
  intercept: number;
  rSquared: number;
  predicted: number[];
};

export default function RSquaredCalculator() {
  const [xValues, setXValues] = useState<string>('1, 2, 3, 4, 5');
  const [yValues, setYValues] = useState<string>('2, 4, 6, 8, 10');
  const [result, setResult] = useState<RegressionResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse input strings into numeric arrays
    const parseList = (s: string) =>
      s
        .split(',')
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
        .map((v) => parseFloat(v));

    const xs = parseList(xValues);
    const ys = parseList(yValues);

    // Basic validation: same length and at least 2 points and no NaNs
    if (
      xs.length >= 2 &&
      ys.length === xs.length &&
      xs.every((n) => !isNaN(n)) &&
      ys.every((n) => !isNaN(n))
    ) {
      const n = xs.length;
      const xMean = xs.reduce((a, b) => a + b, 0) / n;
      const yMean = ys.reduce((a, b) => a + b, 0) / n;

      // Compute slope (b) and intercept (a) for linear regression: y = a + b*x
      let numerator = 0;
      let denominator = 0;
      for (let i = 0; i < n; i++) {
        numerator += (xs[i] - xMean) * (ys[i] - yMean);
        denominator += (xs[i] - xMean) * (xs[i] - xMean);
      }

      // If denominator is 0 (all x equal), linear regression slope is undefined
      if (denominator === 0) {
        setResult(null);
        return;
      }

      const slope = numerator / denominator;
      const intercept = yMean - slope * xMean;

      // Predicted values
      const predicted = xs.map((x) => intercept + slope * x);

      // Compute R-squared: 1 - SS_res / SS_tot
      let ssRes = 0;
      let ssTot = 0;
      for (let i = 0; i < n; i++) {
        ssRes += Math.pow(ys[i] - predicted[i], 2);
        ssTot += Math.pow(ys[i] - yMean, 2);
      }

      // Handle the case when ssTot is 0 (y constant). If ssRes also 0 => perfect fit (R^2 = 1), else R^2 = 0
      let rSquared: number;
      if (ssTot === 0) {
        rSquared = ssRes === 0 ? 1 : 0;
      } else {
        rSquared = 1 - ssRes / ssTot;
      }

      setResult({
        slope: parseFloat(slope.toFixed(6)),
        intercept: parseFloat(intercept.toFixed(6)),
        rSquared: parseFloat(rSquared.toFixed(6)),
        predicted: predicted.map((p) => parseFloat(p.toFixed(6))),
      });
    } else {
      setResult(null);
    }
  }, [xValues, yValues]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'R-squared (Coefficient of Determination) Results',
      inputs: [
        { label: 'X Values', value: xValues },
        { label: 'Y Values', value: yValues },
      ],
      results: [
        { label: 'Slope (b)', value: `${result.slope}` },
        { label: 'Intercept (a)', value: `${result.intercept}` },
        { label: 'R-squared', value: `${result.rSquared}` },
      ],
    });
  };

  const chartData =
    result !== null
      ? result.predicted.map((pred, i) => ({
          index: i + 1,
          x: (xValues.split(',').map((v) => v.trim()).filter(Boolean).map(Number)[i]) ?? i + 1,
          actual: parseFloat(
            (yValues.split(',').map((v) => v.trim()).filter(Boolean).map(Number)[i] ?? 0).toFixed(6)
          ),
          predicted: pred,
          label: `x=${(xValues.split(',').map((v) => v.trim()).filter(Boolean).map(Number)[i]) ?? i + 1}`,
        }))
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
          placeholder="e.g. 1, 2, 3"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="yValues">Y Values (comma-separated)</Label>
        <Input
          id="yValues"
          type="text"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="e.g. 2, 4, 6"
        />
      </div>

      {/* Example Select included to follow example import patterns (not used for calculation) */}
      <div className="mt-4">
        <Label htmlFor="exampleSelect">Example Dataset</Label>
        <Select
          id="exampleSelect"
          onChange={(e) => {
            const val = e.target.value;
            if (val === 'linear') {
              setXValues('1, 2, 3, 4, 5');
              setYValues('2, 4, 6, 8, 10');
            } else if (val === 'noisy') {
              setXValues('1, 2, 3, 4, 5');
              setYValues('2.1, 3.9, 6.2, 7.8, 10.3');
            } else if (val === 'constant') {
              setXValues('1, 2, 3, 4, 5');
              setYValues('5, 5, 5, 5, 5');
            }
          }}
        >
          <option value="linear">Perfect linear (y = 2x)</option>
          <option value="noisy">Noisy linear</option>
          <option value="constant">Constant Y (edge case)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Regression Results</div>

      <div className="text-2xl font-medium text-gray-800">
        Slope (b): <span className="font-bold text-blue-900">{result.slope}</span>
      </div>

      <div className="text-2xl font-medium text-gray-800 mt-2">
        Intercept (a): <span className="font-bold text-blue-900">{result.intercept}</span>
      </div>

      <div className="text-5xl font-bold text-blue-900 my-4">{result.rSquared.toLocaleString()}</div>
      <div className="text-lg text-gray-700">R-squared (Coefficient of Determination)</div>
    </div>
  ) : (
    <div className="text-center text-sm text-gray-500">Enter at least two matching X and Y values to compute R-squared.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Actual vs Predicted</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(6)} />
          <Legend />
          <Bar dataKey="actual" fill="#10b981" name="Actual Y" />
          <Bar dataKey="predicted" fill="#3b82f6" name="Predicted Y" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="R-squared Calculator"
      description="Calculate R-squared (coefficient of determination) for a simple linear regression model given comma-separated X and Y values."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
