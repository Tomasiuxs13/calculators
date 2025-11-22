'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableSolution = { x: number; y: number } | null;

export default function SystemOfEquationsSolver() {
  const [a1, setA1] = useState<string>('2');
  const [b1, setB1] = useState<string>('3');
  const [c1, setC1] = useState<string>('7');
  const [a2, setA2] = useState<string>('1');
  const [b2, setB2] = useState<string>('-1');
  const [c2, setC2] = useState<string>('1');

  const [result, setResult] = useState<NullableSolution>({ x: 1, y: 1 });
  const [noUniqueSolution, setNoUniqueSolution] = useState<boolean>(false);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const na1 = parseFloat(a1);
    const nb1 = parseFloat(b1);
    const nc1 = parseFloat(c1);
    const na2 = parseFloat(a2);
    const nb2 = parseFloat(b2);
    const nc2 = parseFloat(c2);

    if ([na1, nb1, nc1, na2, nb2, nc2].some((v) => isNaN(v))) {
      setResult(null);
      setNoUniqueSolution(false);
      return;
    }

    // Compute determinant (base step)
    const det = na1 * nb2 - na2 * nb1;

    if (Math.abs(det) < Number.EPSILON) {
      // No unique solution (either infinite or none)
      setResult(null);
      setNoUniqueSolution(true);
      return;
    }

    // Cramer's Rule: x = det_x / det, y = det_y / det
    const detX = nc1 * nb2 - nc2 * nb1;
    const detY = na1 * nc2 - na2 * nc1;

    const x = parseFloat((detX / det).toFixed(6));
    const y = parseFloat((detY / det).toFixed(6));

    setResult({ x, y });
    setNoUniqueSolution(false);
  }, [a1, b1, c1, a2, b2, c2]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'System of Equations Solver Results',
      inputs: [
        { label: 'Equation 1: a', value: a1 },
        { label: 'Equation 1: b', value: b1 },
        { label: 'Equation 1: c', value: c1 },
        { label: 'Equation 2: a', value: a2 },
        { label: 'Equation 2: b', value: b2 },
        { label: 'Equation 2: c', value: c2 },
      ],
      results: [
        { label: 'x', value: result ? result.x.toString() : '' },
        { label: 'y', value: result ? result.y.toString() : '' },
      ],
    });
  };

  const chartData = result !== null ? [
    { variable: 'x', value: result.x, label: 'x' },
    { variable: 'y', value: result.y, label: 'y' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="a1">Equation 1: a</Label>
          <Input id="a1" type="number" value={a1} onChange={(e) => setA1(e.target.value)} step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="b1">Equation 1: b</Label>
          <Input id="b1" type="number" value={b1} onChange={(e) => setB1(e.target.value)} step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="c1">Equation 1: c</Label>
          <Input id="c1" type="number" value={c1} onChange={(e) => setC1(e.target.value)} step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="a2">Equation 2: a</Label>
          <Input id="a2" type="number" value={a2} onChange={(e) => setA2(e.target.value)} step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="b2">Equation 2: b</Label>
          <Input id="b2" type="number" value={b2} onChange={(e) => setB2(e.target.value)} step="0.01" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="c2">Equation 2: c</Label>
          <Input id="c2" type="number" value={c2} onChange={(e) => setC2(e.target.value)} step="0.01" />
        </div>
      </div>

      {/* A Select is imported to match example patterns even though not required here */}
      <div className="mt-4">
        <Label htmlFor="method">Method (informational)</Label>
        <Select id="method" value="cramer" onChange={() => {}}>
          <option value="cramer">Cramer's Rule</option>
          <option value="gauss">Gaussian Elimination (not implemented)</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Solution</div>
      <div className="text-4xl font-bold text-blue-900 my-3">
        x = {result.x.toLocaleString()} , y = {result.y.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Unique solution using Cramer's Rule</div>
    </div>
  ) : noUniqueSolution ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Solution</div>
      <div className="text-2xl font-semibold text-red-600 my-3">No unique solution</div>
      <div className="text-base text-gray-700">The system has no unique solution (determinant is zero).</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Solution Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(6)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="System of Equations Solver"
      description="Solve systems of linear equations. Enter coefficients for two linear equations (a1 x + b1 y = c1, a2 x + b2 y = c2) and get the unique solution when it exists."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
