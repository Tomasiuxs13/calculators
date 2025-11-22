'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CalcState = {
  n: string;
  p: string;
  k: string;
};

type ChartPoint = {
  x: number;
  probability: number;
  label: string;
};

function binomialCoefficient(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  k = Math.min(k, n - k);
  let c = 1;
  for (let i = 0; i < k; i++) {
    c = (c * (n - i)) / (i + 1);
  }
  return c;
}

function binomialPMF(n: number, p: number, k: number): number {
  const coeff = binomialCoefficient(n, k);
  return coeff * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

export default function BinomialDistributionCalculator() {
  const [state, setState] = useState<CalcState>({ n: '10', p: '0.5', k: '5' });
  const [pmf, setPmf] = useState<number | null>(null);
  const [cdf, setCdf] = useState<number | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  
  useEffect(() => {
    const n = parseInt(state.n, 10);
    const p = parseFloat(state.p);
    const k = parseInt(state.k, 10);

    // Validate inputs
    if (
      Number.isInteger(n) && n >= 0 &&
      !isNaN(p) && p >= 0 && p <= 1 &&
      Number.isInteger(k) && k >= 0 && k <= n
    ) {
      // compute pmf
      const pmfValue = binomialPMF(n, p, k);
      setPmf(parseFloat(pmfValue.toFixed(12)));

      // compute cdf P(X <= k)
      let cumulative = 0;
      const points: ChartPoint[] = [];
      // Limit chart size to reasonable number (e.g., 0..n but if n large, cap at 200)
      const maxPoints = Math.min(n, 200);
      for (let i = 0; i <= n; i++) {
        const prob = binomialPMF(n, p, i);
        if (i <= k) cumulative += prob;
        if (i <= maxPoints) {
          points.push({ x: i, probability: parseFloat(prob.toFixed(12)), label: i.toString() });
        }
      }
      setCdf(parseFloat(cumulative.toFixed(12)));
      setChartData(points);
    } else {
      setPmf(null);
      setCdf(null);
      setChartData([]);
    }
  }, [state]);

  const handleDownloadPDF = () => {
    if (pmf === null || cdf === null) return;

    generateCalculatorPDF({
      title: 'Binomial Distribution Results',
      inputs: [
        { label: 'Number of Trials (n)', value: state.n },
        { label: 'Probability of Success (p)', value: state.p },
        { label: 'Number of Successes (k)', value: state.k },
      ],
      results: [
        { label: `P(X = ${state.k})`, value: pmf.toString() },
        { label: `P(X \u2264 ${state.k})`, value: cdf.toString() },
      ],
    });
  };

  useEffect(() => {
    // Trigger initial calculation on load
    const initialN = parseInt(state.n, 10);
    const initialP = parseFloat(state.p);
    const initialK = parseInt(state.k, 10);
    if (initialN && !isNaN(initialP) && initialP >= 0 && initialP <= 1 && initialK >= 0 && initialK <= initialN) {
      setState(prev => ({ ...prev, n: prev.n, p: prev.p, k: prev.k }));
    }
  }, []);

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="n">Number of Trials (n)</Label>
        <Input
          id="n"
          type="number"
          value={state.n}
          onChange={(e) => setState((s) => ({ ...s, n: e.target.value }))}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="p">Probability of Success (p)</Label>
        <Input
          id="p"
          type="number"
          value={state.p}
          onChange={(e) => setState((s) => ({ ...s, p: e.target.value }))}
          min="0"
          max="1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="k">Number of Successes (k)</Label>
        <Input
          id="k"
          type="number"
          value={state.k}
          onChange={(e) => setState((s) => ({ ...s, k: e.target.value }))}
          min="0"
          step="1"
        />
      </div>
    </>
  );

  const results = pmf !== null && cdf !== null ? (
    <div>
      <h3>Results</h3>
      <p>{`P(X = ${state.k}): ${pmf}`}</p>
      <p>{`P(X ≤ ${state.k}): ${cdf}`}</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout title="Binomial Distribution Calculator">
      {inputs}
      <button onClick={handleDownloadPDF} disabled={pmf === null || cdf === null}>
        Download Results as PDF
      </button>
      {results}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="probability" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CalculatorLayout>
  );
}
