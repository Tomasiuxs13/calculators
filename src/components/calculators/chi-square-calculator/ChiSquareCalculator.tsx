'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Matrix = number[][];

type ResultState = {
  chiSquare: number | null;
  degreesOfFreedom: number | null;
  pValue: number | null;
  valid: boolean;
  error?: string | null;
};

function parseMatrix(text: string): Matrix | null {
  try {
    if (!text || !text.trim()) return null;
    const rows = text.split(';').map((r) => r.trim()).filter(Boolean);
    const matrix: Matrix = rows.map((r) =>
      r
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean)
        .map((v) => {
          const n = parseFloat(v);
          return isNaN(n) ? NaN : n;
        })
    );

    // validate rectangular and numeric
    const colCount = matrix[0]?.length ?? 0;
    if (colCount === 0) return null;
    for (const row of matrix) {
      if (row.length !== colCount) return null;
      for (const v of row) {
        if (!isFinite(v) || isNaN(v) || v < 0) return null;
      }
    }

    return matrix;
  } catch (e) {
    return null;
  }
}

function computeExpectedFromObserved(obs: Matrix): Matrix {
  const rows = obs.length;
  const cols = obs[0].length;
  const rowTotals = obs.map((r) => r.reduce((a, b) => a + b, 0));
  const colTotals: number[] = Array(cols).fill(0);
  let total = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      colTotals[j] += obs[i][j];
      total += obs[i][j];
    }
  }
  const expected: Matrix = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => (rowTotals[i] * colTotals[j]) / (total || 1))
  );
  return expected;
}

// Lanczos approximation for log gamma
function gammaln(xx: number): number {
  const cof = [76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
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

// Regularized lower incomplete gamma P(a,x)
function gammaincP(a: number, x: number): number {
  if (x < 0 || a <= 0) return NaN;
  if (x === 0) return 0;
  if (x < a + 1) {
    // series representation
    let ap = a;
    let del = 1.0 / a;
    let sum = del;
    for (let n = 1; n <= 100; n++) {
      ap += 1;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 1e-12) {
        const result = sum * Math.exp(-x + a * Math.log(x) - gammaln(a));
        return Math.min(Math.max(result, 0), 1);
      }
    }
    return Math.min(Math.max(sum * Math.exp(-x + a * Math.log(x) - gammaln(a)), 0), 1);
  } else {
    // continued fraction representation for Q, then 1 - Q
    let b = x + 1 - a;
    let c = 1.0 / 1.0e-30;
    let d = 1.0 / b;
    let h = d;
    for (let i = 1; i <= 100; i++) {
      const an = -i * (i - a);
      b += 2;
      d = an * d + b;
      if (Math.abs(d) < 1.0e-30) d = 1.0e-30;
      c = b + an / c;
      if (Math.abs(c) < 1.0e-30) c = 1.0e-30;
      d = 1.0 / d;
      const delta = d * c;
      h *= delta;
      if (Math.abs(delta - 1.0) < 1e-12) break;
    }
    const q = Math.exp(-x + a * Math.log(x) - gammaln(a)) * h;
    const p = 1 - q;
    return Math.min(Math.max(p, 0), 1);
  }
}

function chiSquarePValue(chi2: number, df: number): number {
  // p-value = 1 - P(k/2, x/2) where P is regularized lower incomplete gamma
  if (chi2 < 0 || df <= 0) return NaN;
  const k = df;
  const x = chi2;
  const pLower = gammaincP(k / 2, x / 2);
  const pValue = 1 - pLower;
  return Math.min(Math.max(pValue, 0), 1);
}

export default function ChiSquareCalculator() {
  const [observedText, setObservedText] = useState<string>('10,20;15,25');
  const [expectedText, setExpectedText] = useState<string>('12,18;13,22');
  const [expectedMode, setExpectedMode] = useState<'provided' | 'computed'>('provided');
  const [result, setResult] = useState<ResultState>({
    chiSquare: null,
    degreesOfFreedom: null,
    pValue: null,
    valid: false,
    error: null,
  });
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Auto-calculate whenever inputs change
    const obs = parseMatrix(observedText);
    const expProvided = parseMatrix(expectedText);

    if (!obs) {
      setResult({ chiSquare: null, degreesOfFreedom: null, pValue: null, valid: false, error: 'Invalid observed matrix format.' });
      return;
    }

    const rows = obs.length;
    const cols = obs[0].length;

    let exp: Matrix | null = null;

    if (expectedMode === 'provided') {
      if (!expProvided) {
        // Fallback to computed expected if provided text is invalid
        exp = computeExpectedFromObserved(obs);
      } else {
        // Ensure shapes match
        if (expProvided.length !== rows || expProvided[0].length !== cols) {
          // fallback
          exp = computeExpectedFromObserved(obs);
        } else {
          exp = expProvided;
        }
      }
    } else {
      exp = computeExpectedFromObserved(obs);
    }

    // Validate expected matrix
    if (!exp) {
      setResult({ chiSquare: null, degreesOfFreedom: null, pValue: null, valid: false, error: 'Unable to determine expected frequencies.' });
      return;
    }

    // Check for zeros in expected where observed > 0
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (exp[i][j] === 0 && obs[i][j] > 0) {
          setResult({ chiSquare: null, degreesOfFreedom: null, pValue: null, valid: false, error: 'Expected frequency equals zero for a cell with positive observed count. Calculation invalid.' });
          return;
        }
      }
    }

    // Compute chi-square statistic
    let chi2 = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const o = obs[i][j];
        const e = exp[i][j];
        // If both zero, contribution is zero
        if (e === 0 && o === 0) continue;
        // e should never be zero here unless both zero
        const diff = o - e;
        chi2 += (diff * diff) / (e || 1);
      }
    }

    const df = (rows - 1) * (cols - 1);
    const p = df > 0 ? chiSquarePValue(chi2, df) : NaN;

    setResult({ chiSquare: parseFloat(chi2.toFixed(6)), degreesOfFreedom: df, pValue: Number.isFinite(p) ? parseFloat(p.toFixed(6)) : null, valid: true, error: null });
  }, [observedText, expectedText, expectedMode]);

  const handleDownloadPDF = () => {
    if (!result.valid || result.chiSquare === null) return;

    generateCalculatorPDF({
      title: 'Chi-Square Test for Independence Results',
      inputs: [
        { label: 'Observed Frequencies', value: observedText },
        { label: 'Expected Frequencies (mode)', value: expectedMode === 'provided' ? expectedText : 'Computed from observed' },
      ],
      results: [
        { label: 'Chi-Square', value: String(result.chiSquare) },
        { label: 'Degrees of Freedom', value: String(result.degreesOfFreedom) },
        { label: 'P-Value', value: result.pValue !== null ? String(result.pValue) : 'N/A' },
      ],
    });
  };

  const chartData = (() => {
    if (!result.valid) return [] as any[];
    const obs = parseMatrix(observedText);
    const expProvided = parseMatrix(expectedText);
    if (!obs) return [] as any[];
    const exp = expectedMode === 'provided' && expProvided && expProvided.length === obs.length && expProvided[0].length === obs[0].length ? expProvided : computeExpectedFromObserved(obs);

    const data: any[] = [];
    let idx = 1;
    for (let i = 0; i < obs.length; i++) {
      for (let j = 0; j < obs[0].length; j++) {
        data.push({
          name: `R${i + 1}C${j + 1}`,
          observed: obs[i][j],
          expected: exp[i][j],
          label: `R${i + 1}C${j + 1}`,
          idx: idx++,
        });
      }
    }
    return data;
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="observed">Observed Frequencies (matrix)</Label>
        <Input
          id="observed"
          type="text"
          value={observedText}
          onChange={(e) => setObservedText(e.target.value)}
          placeholder="e.g. 10,20;15,25"
        />
        <p className="text-sm text-gray-500">Use commas for columns and semicolons for rows. Example: 10,20;15,25</p>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="expectedMode">Expected Frequencies</Label>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <Select id="expectedMode" value={expectedMode} onChange={(e) => setExpectedMode(e.target.value as 'provided' | 'computed')}>
              <option value="provided">Use provided expected matrix</option>
              <option value="computed">Compute expected from observed</option>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expected">Expected Frequencies (matrix)</Label>
            <Input
              id="expected"
              type="text"
              value={expectedText}
              onChange={(e) => setExpectedText(e.target.value)}
              placeholder="e.g. 12,18;13,22"
              disabled={expectedMode === 'computed'}
            />
            <p className="text-sm text-gray-500">If computing expected frequencies, this field is ignored.</p>
          </div>
        </div>
      </div>
    </>
  );

  const results = result.valid ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Chi-Square Test for Independence</div>
      <div className="text-4xl font-bold text-blue-900 my-2">{result.chiSquare?.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-2">χ², df = {result.degreesOfFreedom}</div>
      <div className="text-sm text-gray-600">P-value</div>
      <div className="text-2xl font-semibold text-gray-800">{result.pValue !== null ? result.pValue.toLocaleString() : 'N/A'}</div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">{result.error || 'Invalid input'}</div>
  );

  const charts = showCharts && result.valid && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Observed vs Expected (by cell)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(2)} />
          <Legend />
          <Bar dataKey="observed" fill="#3b82f6" />
          <Bar dataKey="expected" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Chi-Square Test for Independence"
      description="Perform a chi-square test for independence on a contingency table. Enter observed frequencies (as a matrix) and optionally expected frequencies."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
