'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Operation = 'add' | 'multiply';

function parseMatrix(text: string): number[][] | null {
  try {
    const rows = text
      .split(';')
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    if (rows.length === 0) return null;

    const matrix: number[][] = rows.map((row) => {
      const vals = row
        .split(',')
        .map((v) => v.trim())
        .filter((v) => v.length > 0)
        .map((v) => {
          const n = parseFloat(v);
          if (isNaN(n)) throw new Error('Invalid number');
          return n;
        });
      return vals;
    });

    const width = matrix[0].length;
    if (width === 0) return null;

    for (const r of matrix) {
      if (r.length !== width) return null; // non-rectangular
    }

    return matrix;
  } catch (e) {
    return null;
  }
}

function addMatrices(a: number[][], b: number[][]): number[][] | null {
  const rows = a.length;
  const cols = a[0].length;
  if (rows !== b.length || cols !== b[0].length) return null;
  const res: number[][] = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => a[i][j] + b[i][j])
  );
  return res;
}

function multiplyMatrices(a: number[][], b: number[][]): number[][] | null {
  const aRows = a.length;
  const aCols = a[0].length;
  const bRows = b.length;
  const bCols = b[0].length;
  if (aCols !== bRows) return null;
  const res: number[][] = Array.from({ length: aRows }, (_, i) =>
    Array.from({ length: bCols }, (_, j) => {
      let sum = 0;
      for (let k = 0; k < aCols; k++) {
        sum += a[i][k] * b[k][j];
      }
      return sum;
    })
  );
  return res;
}

function matrixToString(m: number[][]): string {
  return m.map((r) => r.map((v) => Number.isInteger(v) ? v.toString() : v.toFixed(4)).join(', ')).join('\n');
}

function sumOfElements(m: number[][]): number {
  return m.reduce((acc, r) => acc + r.reduce((s, v) => s + v, 0), 0);
}

export default function MatrixCalculator() {
  const [matrix1Text, setMatrix1Text] = useState<string>('1,2;3,4');
  const [matrix2Text, setMatrix2Text] = useState<string>('5,6;7,8');
  const [operation, setOperation] = useState<Operation>('add');
  const [resultMatrix, setResultMatrix] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    setError(null);
    const m1 = parseMatrix(matrix1Text);
    const m2 = parseMatrix(matrix2Text);

    if (!m1 || !m2) {
      setResultMatrix(null);
      setError('Invalid matrix format. Ensure rows are separated by ";" and values by "," and matrices are rectangular.');
      return;
    }

    let res: number[][] | null = null;

    if (operation === 'add') {
      res = addMatrices(m1, m2);
      if (res === null) setError('Addition requires both matrices to have the same dimensions.');
    } else if (operation === 'multiply') {
      res = multiplyMatrices(m1, m2);
      if (res === null) setError('Multiplication requires columns of Matrix 1 to equal rows of Matrix 2.');
    }

    setResultMatrix(res);
  }, [matrix1Text, matrix2Text, operation]);

  const handleDownloadPDF = () => {
    if (!resultMatrix && !error) return;

    generateCalculatorPDF({
      title: 'Matrix Calculator Results',
      inputs: [
        { label: 'Matrix 1', value: matrix1Text },
        { label: 'Matrix 2', value: matrix2Text },
        { label: 'Operation', value: operation },
      ],
      results: error
        ? [{ label: 'Error', value: error }]
        : [{ label: 'Result Matrix', value: matrixToString(resultMatrix as number[][]) }],
    });
  };

  const chartData = resultMatrix
    ? [
        { name: 'Matrix 1', value: sumOfElements(parseMatrix(matrix1Text) as number[][]) },
        { name: 'Matrix 2', value: sumOfElements(parseMatrix(matrix2Text) as number[][]) },
        { name: 'Result', value: sumOfElements(resultMatrix) },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="matrix1">Matrix 1 (rows separated by ;, values by ,)</Label>
        <Input
          id="matrix1"
          type="text"
          value={matrix1Text}
          onChange={(e) => setMatrix1Text(e.target.value)}
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="matrix2">Matrix 2</Label>
        <Input
          id="matrix2"
          type="text"
          value={matrix2Text}
          onChange={(e) => setMatrix2Text(e.target.value)}
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="operation">Operation</Label>
        <Select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value as Operation)}
        >
          <option value="add">Addition</option>
          <option value="multiply">Multiplication</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      {error ? (
        <div className="text-red-600 font-medium">{error}</div>
      ) : resultMatrix ? (
        <div>
          <div className="text-5xl font-bold text-blue-900 my-3 whitespace-pre-wrap font-mono">
            {matrixToString(resultMatrix)}
          </div>
          <div className="text-lg text-gray-700">
            {resultMatrix.length} × {resultMatrix[0].length}
          </div>
        </div>
      ) : (
        <div className="text-gray-500">No result</div>
      )}
    </div>
  );

  const charts = showCharts && resultMatrix ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Element Sums Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(2)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Matrix Calculator"
      description="Perform matrix operations (addition, multiplication, etc.)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
