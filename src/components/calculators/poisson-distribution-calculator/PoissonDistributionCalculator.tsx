'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ProbType = 'pmf' | 'cdf_le' | 'cdf_ge';

export default function PoissonDistributionCalculator() {
  const [lambda, setLambda] = useState<string>('3');
  const [k, setK] = useState<string>('2');
  const [probType, setProbType] = useState<ProbType>('pmf');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  const [chartData, setChartData] = useState<Array<{ n: number; value: number; label: string }>>([]);

  // Helper: compute PMF iteratively to avoid large factorials
  const computePMF = (lam: number, n: number) => {
    if (lam < 0 || n < 0) return 0;
    // p0 = e^{-lam}; p_{i+1} = p_i * lam/(i+1)
    let p = Math.exp(-lam);
    for (let i = 1; i <= n; i++) {
      p = p * (lam / i);
    }
    return p;
  };

  useEffect(() => {
    const lam = parseFloat(lambda);
    const kNum = parseInt(k, 10);

    if (isNaN(lam) || lam < 0 || isNaN(kNum) || kNum < 0) {
      setResult(null);
      setChartData([]);
      return;
    }

    // Calculate PMF for k
    const pmfAtK = computePMF(lam, kNum);

    // Calculate CDF P(X <= k)
    let cdfLE = 0;
    // We'll compute iteratively to build chart as well
    const maxByRule = Math.ceil(lam + 4 * Math.sqrt(Math.max(1, lam)));
    const maxN = Math.min(50, Math.max(kNum + 5, maxByRule));

    const data: Array<{ n: number; value: number; label: string }> = [];
    let p = Math.exp(-lam); // p(0)
    cdfLE += p;
    data.push({ n: 0, value: p, label: '0' });

    for (let i = 1; i <= maxN; i++) {
      p = p * (lam / i);
      data.push({ n: i, value: p, label: String(i) });
      if (i <= kNum) cdfLE += p;
    }

    setChartData(data);

    const cdfGE = 1 - (kNum > 0 ? cdfLE - computePMF(lam, kNum) : 1 - pmfAtK);
    // cdfGE is P(X >= k) = 1 - P(X <= k-1)
    const cdfGE_correct = 1 - (kNum <= 0 ? 0 : data.slice(0, kNum).reduce((s, d) => s + d.value, 0));

    let out: number;
    if (probType === 'pmf') out = pmfAtK;
    else if (probType === 'cdf_le') out = cdfLE;
    else out = cdfGE_correct;

    setResult(Number(out.toFixed(10)));
  }, [lambda, k, probType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Poisson Distribution Results',
      inputs: [
        { label: 'Lambda (λ) - Average Rate', value: lambda },
        { label: 'Number of Events (k)', value: k },
        { label: 'Probability Type', value: probType },
      ],
      results: [
        { label: 'Result', value: `${result}` },
        { label: 'As Percentage', value: `${(result * 100).toFixed(4)} %` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="lambda">Lambda (λ) - Average Rate</Label>
        <Input
          id="lambda"
          type="number"
          value={lambda}
          onChange={(e) => setLambda(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="k">Number of Events (k)</Label>
        <Input
          id="k"
          type="number"
          value={k}
          onChange={(e) => setK(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="probType">Probability Type</Label>
        <Select
          id="probType"
          value={probType}
          onChange={(e) => setProbType(e.target.value as ProbType)}
        >
          <option value="pmf">P(X = k) — PMF</option>
          <option value="cdf_le">P(X  k) — P(X ≤ k) (CDF)</option>
          <option value="cdf_ge">P(X ≥ k) — Upper Tail</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString(undefined, { maximumFractionDigits: 10 })}
      </div>
      <div className="text-lg text-gray-700">{(result * 100).toFixed(4)}%</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Poisson Distribution (PMF)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" label={{ value: 'k (events)', position: 'bottom', offset: 0 }} />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(6)} (${(value * 100).toFixed(4)}%)`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Poisson Distribution Calculator"
      description="Calculate Poisson distribution probabilities. Compute P(X = k), P(X \\u2264 k), or P(X \\u2265 k) given the average rate \u03BB (lambda)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
