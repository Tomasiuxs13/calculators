'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type MatrixResult = {
  inverse: number[][];
  determinant: number;
};

function parseMatrix(input: string): number[][] | null {
  const rows = input.split(';').map(r => r.trim()).filter(r => r.length > 0);
  if (rows.length === 0) return null;
  const matrix: number[][] = rows.map(r => r.split(',').map(v => parseFloat(v.trim())));
  // Validate rectangular
  const cols = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length !== cols || matrix[i].some(v => Number.isNaN(v))) return null;
  }
  return matrix;
}

function invertMatrix(matrix: number[][]): MatrixResult | null {
  const n = matrix.length;
  if (n === 0) return null;
  // Ensure square
  for (let i = 0; i < n; i++) {
    if (matrix[i].length !== n) return null;
  }

  // Create augmented matrix [A | I]
  const aug: number[][] = new Array(n).fill(0).map((_, i) => new Array(2 * n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      aug[i][j] = matrix[i][j];
    }
    aug[i][n + i] = 1;
  }

  // Perform Gauss-Jordan elimination
  let det = 1;
  for (let col = 0; col < n; col++) {
    // Find pivot
    let pivotRow = col;
    let maxAbs = Math.abs(aug[pivotRow][col]);
    for (let r = col + 1; r < n; r++) {
      const val = Math.abs(aug[r][col]);
      if (val > maxAbs) {
        maxAbs = val;
        pivotRow = r;
      }
    }

    if (Math.abs(aug[pivotRow][col]) < 1e-12) {
      // Singular
      return null;
    }

    // Swap if needed
    if (pivotRow !== col) {
      const tmp = aug[col];
      aug[col] = aug[pivotRow];
      aug[pivotRow] = tmp;
      det = -det; // swap changes sign
    }

    const pivot = aug[col][col];
    det *= pivot;
    // Normalize pivot row
    for (let j = 0; j < 2 * n; j++) {
      aug[col][j] = aug[col][j] / pivot;
    }

    // Eliminate other rows
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = aug[r][col];
      if (Math.abs(factor) < 1e-15) continue;
      for (let j = 0; j < 2 * n; j++) {
        aug[r][j] -= factor * aug[col][j];
      }
    }
  }

  // Extract inverse
  const inverse: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      inverse[i][j] = aug[i][n + j];
    }
  }

  return { inverse, determinant: det };
}

export default function InverseMatrixCalculator() {
  const [matrix, setMatrix] = useState<string>('1,2;3,4');
  const [result, setResult] = useState<number[][] | null>(null);
  const [determinant, setDeterminant] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsed = parseMatrix(matrix);
    if (!parsed) {
      setResult(null);
      setDeterminant(null);
      setError('Invalid matrix format. Ensure rows are separated by \';\' and values by \',\'');
      return;
    }

    // Must be square
    if (parsed.length !== parsed[0].length) {
      setResult(null);
      setDeterminant(null);
      setError('Matrix must be square to compute an inverse.');
      return;
    }

    const inv = invertMatrix(parsed);
    if (!inv) {
      setResult(null);
      setDeterminant(null);
      setError('Matrix is singular (non-invertible).');
      return;
    }

    // Round results for display
    const rounded = inv.inverse.map(row => row.map(v => parseFloat(v.toFixed(6))));
    setResult(rounded);
    setDeterminant(parseFloat(inv.determinant.toFixed(6)));
    setError(null);
  }, [matrix]);

  const handleDownloadPDF = () => {
    if (result === null || determinant === null) return;

    const matrixDisplay = matrix;
    const inverseDisplay = result.map(r => r.join(', ')).join('\n');

    generateCalculatorPDF({
      title: 'Inverse Matrix Results',
      inputs: [
        { label: 'Matrix', value: matrixDisplay },
      ],
      results: [
        { label: 'Determinant', value: determinant.toString() },
        { label: 'Inverse', value: inverseDisplay },
      ],
    });
  };

  const chartData = result ? result.flatMap((row, i) => row.map((val, j) => ({ label: `r${i}c${j}`, value: Math.abs(val), raw: val }))) : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="matrix">Matrix (rows separated by ;, values by ,)</Label>
        <Input
          id="matrix"
          type="text"
          value={matrix}
          onChange={(e) => setMatrix((e.target as HTMLInputElement).value)}
        />
        <div className="text-sm text-gray-500 mt-1">Example: '1,2;3,4' for a 2x2 matrix.</div>
      </div>

      {/* Placeholder Select import usage to follow example pattern (not used in this calculator) */}
      <div className="hidden">
        <Label htmlFor="placeholder">Placeholder</Label>
        <Select id="placeholder" value="dummy" onChange={() => {}}>
          <option value="dummy">Dummy</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      {error ? (
        <div className="text-red-600 font-medium">{error}</div>
      ) : result ? (
        <>
          <div className="text-sm text-gray-600 mb-2">Determinant</div>
          <div className="text-3xl font-bold text-blue-900 my-2">{determinant?.toLocaleString()}</div>

          <div className="text-sm text-gray-600 mb-2 mt-4">Inverse Matrix</div>
          <div className="inline-block bg-white border rounded-lg p-4">
            {result.map((row, i) => (
              <div key={i} className="text-lg font-mono text-gray-800">
                [ {row.map((v, j) => (
                  <span key={j} className="inline-block px-2">{v}</span>
                ))} ]
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-gray-600">Enter a matrix to see the inverse.</div>
      )}
    </div>
  );

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Inverse Matrix Entry Magnitudes</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => `${(props && props.payload && props.payload.raw != null) ? props.payload.raw.toFixed(6) : value}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Inverse Matrix Calculator"
      description="Calculate the inverse of a square matrix. Enter rows separated by ';' and values separated by ','."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
