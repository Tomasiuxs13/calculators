'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type MatrixParseResult = {
  matrix: number[][] | null;
  error?: string;
};

function parseMatrix(input: string): MatrixParseResult {
  const rows = input.split(';').map((r) => r.trim()).filter(Boolean);
  if (rows.length === 0) return { matrix: null, error: 'Matrix is empty' };

  const matrix: number[][] = [];
  let cols = -1;

  for (let i = 0; i < rows.length; i++) {
    const parts = rows[i].split(',').map((c) => c.trim()).filter(Boolean);
    if (cols === -1) cols = parts.length;
    if (parts.length !== cols) return { matrix: null, error: `Row ${i + 1} has ${parts.length} columns, expected ${cols}` };

    const rowNums: number[] = parts.map((p) => {
      const n = parseFloat(p);
      return isNaN(n) ? NaN : n;
    });

    if (rowNums.some((n) => isNaN(n))) return { matrix: null, error: `Non-numeric value in row ${i + 1}` };
    matrix.push(rowNums);
  }

  return { matrix };
}

function determinant(matrix: number[][]): number {
  const n = matrix.length;
  if (n === 0) return 1; // determinant of empty matrix, not used
  // Make a copy to avoid mutating original
  const a: number[][] = matrix.map((r) => r.slice());
  let detSign = 1;

  for (let i = 0; i < n; i++) {
    // Find pivot
    let maxRow = i;
    let maxVal = Math.abs(a[i][i]);
    for (let r = i + 1; r < n; r++) {
      const absVal = Math.abs(a[r][i]);
      if (absVal > maxVal) {
        maxVal = absVal;
        maxRow = r;
      }
    }

    if (Math.abs(maxVal) < 1e-12) {
      // Column is zero -> determinant is zero
      return 0;
    }

    if (maxRow !== i) {
      const tmp = a[i];
      a[i] = a[maxRow];
      a[maxRow] = tmp;
      detSign *= -1;
    }

    // Eliminate below
    const pivot = a[i][i];
    for (let r = i + 1; r < n; r++) {
      const factor = a[r][i] / pivot;
      for (let c = i; c < n; c++) {
        a[r][c] -= factor * a[i][c];
      }
    }
  }

  // Product of diagonal
  let prod = detSign;
  for (let i = 0; i < n; i++) prod *= a[i][i];
  return prod;
}

export default function DeterminantCalculator() {
  const [matrixInput, setMatrixInput] = useState<string>('1,2,3;4,5,6;7,8,9');
  const [precision, setPrecision] = useState<number>(6);
  const [determinantResult, setDeterminantResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsed = parseMatrix(matrixInput);
    if (!parsed.matrix) {
      setDeterminantResult(null);
      setError(parsed.error || 'Invalid matrix');
      return;
    }

    const mat = parsed.matrix;
    if (mat.length !== mat[0].length) {
      setDeterminantResult(null);
      setError('Matrix must be square');
      return;
    }

    try {
      const det = determinant(mat);
      if (!isFinite(det) || isNaN(det)) {
        setDeterminantResult(null);
        setError('Unable to compute determinant');
      } else {
        setDeterminantResult(det);
        setError(null);
      }
    } catch (e) {
      setDeterminantResult(null);
      setError('An error occurred while computing the determinant');
    }
  }, [matrixInput, precision]);

  const handleDownloadPDF = () => {
    if (determinantResult === null) return;

    generateCalculatorPDF({
      title: 'Determinant Calculator Results',
      inputs: [
        { label: 'Matrix', value: matrixInput },
        { label: 'Precision', value: precision.toString() },
      ],
      results: [
        { label: 'Determinant', value: determinantResult.toFixed(precision) },
      ],
    });
  };

  const chartData = (() => {
    const parsed = parseMatrix(matrixInput);
    if (!parsed.matrix || determinantResult === null) return [];
    const rows = parsed.matrix;
    return rows.map((r, i) => ({
      label: `Row ${i + 1}`,
      value: r.reduce((s, v) => s + Math.abs(v), 0),
    }));
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="matrix">Matrix (rows separated by ;, values by ,)</Label>
        <Input
          id="matrix"
          type="text"
          value={matrixInput}
          onChange={(e) => setMatrixInput(e.target.value)}
          placeholder="e.g. 1,2,3;4,5,6;7,8,9"
        />
        <p className="text-sm text-gray-500">Enter a square matrix. Example: 1,2;3,4</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="precision">Precision (decimals)</Label>
          <Select
            id="precision"
            value={precision.toString()}
            onChange={(e) => setPrecision(parseInt(e.target.value, 10))}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Select>
        </div>

        <div className="space-y-2" />
      </div>
    </>
  );

  const results = determinantResult !== null && error === null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Determinant</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {Number(determinantResult.toFixed(precision)).toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">(rounded to {precision} decimal{precision === 1 ? '' : 's'})</div>
    </div>
  ) : error ? (
    <div className="text-center text-red-600">{error}</div>
  ) : null;

  const charts = showCharts && determinantResult !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Row Absolute Sum Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Determinant Calculator"
      description="Calculate the determinant of a square matrix. Enter rows separated by ';' and values separated by ','."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
