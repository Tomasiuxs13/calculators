'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type GroupInputKey = 'group1' | 'group2' | 'group3';

function parseGroupInput(input: string): number[] {
  return input
    .split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => parseFloat(s))
    .filter(n => !isNaN(n));
}

function mean(arr: number[]): number {
  if (arr.length === 0) return NaN;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function sumOfSquaresAroundMean(arr: number[], m: number): number {
  return arr.reduce((acc, val) => acc + Math.pow(val - m, 2), 0);
}

// Lanczos approximation for logGamma
function logGamma(xx: number): number {
  const cof = [76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.001208650973866179, -0.000005395239384953];
  let x = xx - 1.0;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;
  for (let j = 0; j < cof.length; j++) {
    x += 1;
    ser += cof[j] / x;
  }
  return -tmp + Math.log(2.5066282746310005 * ser);
}

// Continued fraction for incomplete beta (from Numerical Recipes)
function betacf(x: number, a: number, b: number): number {
  const MAX_ITER = 200;
  const EPS = 3.0e-7;
  const FPMIN = 1e-30;

  let qab = a + b;
  let qap = a + 1.0;
  let qam = a - 1.0;
  let c = 1.0;
  let d = 1.0 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1.0 / d;
  let h = d;

  for (let m = 1; m <= MAX_ITER; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1.0 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1.0 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1.0 / d;
    h *= d * c;
    aa = -((a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1.0 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1.0 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1.0 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1.0) < EPS) break;
  }
  return h;
}

function regularizedIncompleteBeta(x: number, a: number, b: number): number {
  if (x < 0 || x > 1) return NaN;
  const lnBeta = logGamma(a) + logGamma(b) - logGamma(a + b);
  if (x === 0 || x === 1) return x;
  // Use symmetry
  let bt = Math.exp((Math.log(x) * a + Math.log(1 - x) * b) - lnBeta) / a;
  if (x < (a + 1) / (a + b + 2)) {
    return bt * betacf(x, a, b);
  } else {
    return 1 - bt * betacf(1 - x, b, a);
  }
}

function fCdf(x: number, d1: number, d2: number): number {
  if (x < 0) return 0;
  const num = (d1 * x) / (d1 * x + d2);
  const a = d1 / 2;
  const b = d2 / 2;
  return regularizedIncompleteBeta(num, a, b);
}

export default function ANOVACalculator() {
  const [group1, setGroup1] = useState<string>('10, 12, 14');
  const [group2, setGroup2] = useState<string>('15, 17, 19');
  const [group3, setGroup3] = useState<string>('20, 22, 24');
  const [precision, setPrecision] = useState<number>(4);

  const [ssb, setSsb] = useState<number | null>(null);
  const [ssw, setSsw] = useState<number | null>(null);
  const [msb, setMsb] = useState<number | null>(null);
  const [msw, setMsw] = useState<number | null>(null);
  const [fStatistic, setFStatistic] = useState<number | null>(null);
  const [pValue, setPValue] = useState<number | null>(null);
  const [df1, setDf1] = useState<number | null>(null);
  const [df2, setDf2] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const g1 = parseGroupInput(group1);
    const g2 = parseGroupInput(group2);
    const g3 = parseGroupInput(group3);
    const groups = [g1, g2, g3].filter(g => g.length > 0);

    // If any group empty or total N < number of groups, can't compute
    if (groups.length < 2 || groups.reduce((s, g) => s + g.length, 0) < 2) {
      setSsb(null);
      setSsw(null);
      setMsb(null);
      setMsw(null);
      setFStatistic(null);
      setPValue(null);
      setDf1(null);
      setDf2(null);
      return;
    }

    const k = groups.length;
    const ns = groups.map(g => g.length);
    const means = groups.map(g => mean(g));
    const N = ns.reduce((a, b) => a + b, 0);
    const grandMean = groups.reduce((acc, g) => acc + g.reduce((s, v) => s + v, 0), 0) / N;

    // Between-group sum of squares
    const ssBetween = groups.reduce((acc, g, idx) => acc + g.length * Math.pow(means[idx] - grandMean, 2), 0);
    // Within-group sum of squares
    const ssWithin = groups.reduce((acc, g, idx) => acc + sumOfSquaresAroundMean(g, means[idx]), 0);

    const dfBetween = k - 1;
    const dfWithin = N - k;

    const msBetween = ssBetween / dfBetween;
    const msWithin = ssWithin / dfWithin;

    const F = msWithin === 0 ? Infinity : msBetween / msWithin;

    // p-value using F-distribution CDF
    const p = 1 - fCdf(F, dfBetween, dfWithin);

    setSsb(parseFloat(ssBetween.toFixed(6)));
    setSsw(parseFloat(ssWithin.toFixed(6)));
    setMsb(parseFloat(msBetween.toFixed(6)));
    setMsw(parseFloat(msWithin.toFixed(6)));
    setFStatistic(parseFloat(F.toFixed(6)));
    setPValue(isNaN(p) ? null : parseFloat(p.toFixed(6)));
    setDf1(dfBetween);
    setDf2(dfWithin);
  }, [group1, group2, group3]);

  const handleDownloadPDF = () => {
    if (fStatistic === null || pValue === null) return;

    generateCalculatorPDF({
      title: 'ANOVA Test Results',
      inputs: [
        { label: 'Group 1', value: group1 },
        { label: 'Group 2', value: group2 },
        { label: 'Group 3', value: group3 },
      ],
      results: [
        { label: 'SSB (Between)', value: ssb?.toString() ?? 'N/A' },
        { label: 'SSW (Within)', value: ssw?.toString() ?? 'N/A' },
        { label: 'MSB', value: msb?.toString() ?? 'N/A' },
        { label: 'MSW', value: msw?.toString() ?? 'N/A' },
        { label: 'F Statistic', value: fStatistic?.toString() ?? 'N/A' },
        { label: 'p-value', value: pValue?.toString() ?? 'N/A' },
      ],
    });
  };

  const chartData = (() => {
    const g1 = parseGroupInput(group1);
    const g2 = parseGroupInput(group2);
    const g3 = parseGroupInput(group3);
    const groups = [g1, g2, g3];
    return groups.map((g, i) => ({ name: `Group ${i + 1}`, mean: isNaN(mean(g)) ? 0 : parseFloat(mean(g).toFixed(6)), n: g.length }));
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="group1">Group 1 (comma-separated)</Label>
        <Input
          id="group1"
          type="text"
          value={group1}
          onChange={(e) => setGroup1(e.target.value)}
          placeholder="e.g. 10, 12, 14"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="group2">Group 2 (comma-separated)</Label>
        <Input
          id="group2"
          type="text"
          value={group2}
          onChange={(e) => setGroup2(e.target.value)}
          placeholder="e.g. 15, 17, 19"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="group3">Group 3 (comma-separated)</Label>
        <Input
          id="group3"
          type="text"
          value={group3}
          onChange={(e) => setGroup3(e.target.value)}
          placeholder="e.g. 20, 22, 24"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="space-y-2">
          <Label htmlFor="precision">Display Precision</Label>
          <Select
            id="precision"
            value={precision}
            onChange={(e) => setPrecision(parseInt(e.target.value, 10))}
          >
            <option value={2}>2 decimals</option>
            <option value={3}>3 decimals</option>
            <option value={4}>4 decimals</option>
            <option value={6}>6 decimals</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = (fStatistic !== null && pValue !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">ANOVA Results</div>
      <div className="text-2xl font-bold text-blue-900 my-3">F = {fStatistic.toFixed(precision)}</div>
      <div className="text-lg text-gray-700">p-value = {pValue < 0.000001 ? '< 0.000001' : pValue.toFixed(precision)}</div>

      <div className="mt-4 text-left max-w-md mx-auto text-sm text-gray-800">
        <div>SSB (Between): <span className="font-semibold">{ssb?.toFixed(precision)}</span></div>
        <div>SSW (Within): <span className="font-semibold">{ssw?.toFixed(precision)}</span></div>
        <div>MSB: <span className="font-semibold">{msb?.toFixed(precision)}</span></div>
        <div>MSW: <span className="font-semibold">{msw?.toFixed(precision)}</span></div>
        <div>df1: <span className="font-semibold">{df1}</span> &nbsp; df2: <span className="font-semibold">{df2}</span></div>
        <div className="mt-2">Interpretation: <span className="font-semibold">{pValue < 0.05 ? 'Reject null hypothesis (significant)' : 'Fail to reject null hypothesis (not significant)'}</span></div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Group Means</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => value} />
          <Bar dataKey="mean" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="ANOVA Calculator"
      description="Perform Analysis of Variance (ANOVA) test. Enter numeric observations for each group (comma-separated)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
