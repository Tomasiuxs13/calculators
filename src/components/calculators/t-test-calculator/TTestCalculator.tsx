'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TTestResult = {
  mean1: number;
  mean2: number;
  var1: number;
  var2: number;
  n1: number;
  n2: number;
  t: number;
  df: number;
  pValue: number;
};

function parseSample(input: string): number[] {
  return input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => Number(s))
    .filter((n) => !isNaN(n));
}

function mean(arr: number[]): number {
  if (arr.length === 0) return NaN;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function sampleVariance(arr: number[]): number {
  const n = arr.length;
  if (n < 2) return NaN;
  const m = mean(arr);
  return arr.reduce((s, x) => s + Math.pow(x - m, 2), 0) / (n - 1);
}

// Lanczos approximation for gamma function
function logGamma(z: number): number {
  const cof = [
    76.18009172947146,
    -86.50532032941677,
    24.01409824083091,
    -1.231739572450155,
    0.001208650973866179,
    -0.000005395239384953,
  ];
  let x = z;
  let y = z;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (let j = 0; j < cof.length; j++) {
    y += 1;
    ser += cof[j] / y;
  }
  return -tmp + Math.log(2.5066282746310005 * ser / x);
}

function gamma(z: number): number {
  return Math.exp(logGamma(z));
}

function tPdf(x: number, v: number): number {
  const numer = gamma((v + 1) / 2);
  const denom = Math.sqrt(v * Math.PI) * gamma(v / 2);
  return (numer / denom) * Math.pow(1 + (x * x) / v, -(v + 1) / 2);
}

// Simple numerical integration using adaptive Simpson's composite rule
function integrateSimpson(f: (x: number) => number, a: number, b: number, n = 1024): number {
  // n must be even
  if (n % 2 === 1) n += 1;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    s += f(x) * (i % 2 === 0 ? 2 : 4);
  }
  return (h / 3) * s;
}

function tCdf(t: number, v: number): number {
  // CDF of Student's t distribution using numerical integration of PDF from 0..t and symmetry
  if (isNaN(t) || isNaN(v) || v <= 0) return NaN;
  if (!isFinite(t)) return t > 0 ? 1 : 0;
  if (t === 0) return 0.5;
  const absT = Math.abs(t);
  // Integrate from 0 to absT
  const integrand = (x: number) => tPdf(x, v);
  // Choose number of intervals based on magnitude
  const n = Math.min(2000, Math.max(200, Math.floor(50 + absT * 50)));
  const integral = integrateSimpson(integrand, 0, absT, n);
  const cdf = 0.5 + (t > 0 ? integral : -integral);
  return Math.max(0, Math.min(1, cdf));
}

export default function TTestCalculator() {
  const [sample1, setSample1] = useState<string>('10, 12, 14, 16, 18');
  const [sample2, setSample2] = useState<string>('15, 17, 19, 21, 23');
  const [result, setResult] = useState<TTestResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const s1 = parseSample(sample1);
    const s2 = parseSample(sample2);

    if (s1.length < 2 || s2.length < 2) {
      setResult(null);
      return;
    }

    const m1 = mean(s1);
    const m2 = mean(s2);
    const v1 = sampleVariance(s1);
    const v2 = sampleVariance(s2);
    const n1 = s1.length;
    const n2 = s2.length;

    const denom = Math.sqrt(v1 / n1 + v2 / n2);
    if (denom === 0 || isNaN(denom)) {
      setResult(null);
      return;
    }

    const t = (m1 - m2) / denom;

    // Welch-Satterthwaite degrees of freedom
    const numerator = Math.pow(v1 / n1 + v2 / n2, 2);
    const denominator =
      (Math.pow(v1 / n1, 2) / (n1 - 1)) + (Math.pow(v2 / n2, 2) / (n2 - 1));
    const df = denominator === 0 ? NaN : numerator / denominator;

    let pValue = NaN;
    if (!isNaN(df)) {
      const cdf = tCdf(Math.abs(t), df);
      // two-tailed p-value = 2*(1 - cdf(|t|)) if cdf is for positive t
      // but our tCdf computes full cdf, so for positive t: 1 - (cdf - 0.5) ? Simpler: use survival
      // compute tail: 1 - CDF(|t|)
      const tail = 1 - tCdf(Math.abs(t), df);
      pValue = Math.min(1, 2 * tail);
    }

    setResult({
      mean1: parseFloat(m1.toFixed(6)),
      mean2: parseFloat(m2.toFixed(6)),
      var1: parseFloat(v1.toFixed(6)),
      var2: parseFloat(v2.toFixed(6)),
      n1,
      n2,
      t: parseFloat(t.toFixed(6)),
      df: isNaN(df) ? NaN : parseFloat(df.toFixed(6)),
      pValue: isNaN(pValue) ? NaN : parseFloat(pValue.toFixed(6)),
    });
  }, [sample1, sample2]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'T-Test Results',
      inputs: [
        { label: 'Sample 1', value: sample1 },
        { label: 'Sample 2', value: sample2 },
      ],
      results: [
        { label: 'Mean (Sample 1)', value: String(result.mean1) },
        { label: 'Mean (Sample 2)', value: String(result.mean2) },
        { label: 'Variance (Sample 1)', value: String(result.var1) },
        { label: 'Variance (Sample 2)', value: String(result.var2) },
        { label: 'n (Sample 1)', value: String(result.n1) },
        { label: 'n (Sample 2)', value: String(result.n2) },
        { label: 't statistic', value: String(result.t) },
        { label: 'Degrees of freedom', value: String(result.df) },
        { label: 'p-value (two-tailed)', value: String(result.pValue) },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Sample 1', mean: result.mean1, n: result.n1 },
        { label: 'Sample 2', mean: result.mean2, n: result.n2 },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="sample1">Sample 1 (comma-separated)</Label>
        <Input
          id="sample1"
          type="text"
          value={sample1}
          onChange={(e) => setSample1(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sample2">Sample 2 (comma-separated)</Label>
        <Input
          id="sample2"
          type="text"
          value={sample2}
          onChange={(e) => setSample2(e.target.value)}
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">T-Test Results</div>
      <div className="grid grid-cols-2 gap-4 text-left text-sm text-gray-700 mb-4">
        <div>
          <div className="text-xs text-gray-500">Mean (Sample 1)</div>
          <div className="text-lg font-semibold text-gray-900">{result.mean1}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Mean (Sample 2)</div>
          <div className="text-lg font-semibold text-gray-900">{result.mean2}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Variance (Sample 1)</div>
          <div className="text-lg font-semibold text-gray-900">{result.var1}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Variance (Sample 2)</div>
          <div className="text-lg font-semibold text-gray-900">{result.var2}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">n (Sample 1)</div>
          <div className="text-lg font-semibold text-gray-900">{result.n1}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">n (Sample 2)</div>
          <div className="text-lg font-semibold text-gray-900">{result.n2}</div>
        </div>
      </div>

      <div className="bg-gray-50 border rounded-lg p-4 inline-block">
        <div className="text-xs text-gray-500">t statistic</div>
        <div className="text-3xl font-bold text-blue-900 my-2">{result.t}</div>
        <div className="text-sm text-gray-700">df = {isNaN(result.df) ? '—' : result.df}</div>
        <div className="text-sm text-gray-700 mt-1">p-value (two-tailed) = {isNaN(result.pValue) ? '—' : result.pValue}</div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter two samples (comma-separated) with at least 2 values each to see results.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Sample Means Comparison</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => `${value}`} />
          <Bar dataKey="mean" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 text-center mt-3">Bars show sample means; use the inputs to update samples and recompute automatically.</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="T-Test Calculator"
      description="Perform Welch's t-test to compare means of two independent samples. Enter comma-separated sample values. Results update automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
