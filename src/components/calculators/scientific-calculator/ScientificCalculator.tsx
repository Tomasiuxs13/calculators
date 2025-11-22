'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AngleMode = 'deg' | 'rad';

export default function ScientificCalculator() {
  const [expression, setExpression] = useState<string>('sin(30) + log(100)');
  const [angleMode, setAngleMode] = useState<AngleMode>('deg');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);
  const [chartData, setChartData] = useState<Array<Record<string, number | string>>>([]);

  const evaluatorNames = [
    'sin',
    'cos',
    'tan',
    'asin',
    'acos',
    'atan',
    'sqrt',
    'pow',
    'abs',
    'floor',
    'ceil',
    'round',
    'exp',
    'ln',
    'log',
    'max',
    'min',
    'pi',
    'e',
    'x',
  ];

  function evaluateExpression(expr: string, mode: AngleMode, xValue?: number): number {
    const unsafePattern = /[^0-9a-zA-Z+\-*/^()., _%]/;
    if (unsafePattern.test(expr)) {
      throw new Error('Expression contains invalid characters');
    }

    const sanitized = expr.replace(/\^/g, '**');

    const sin = (v: number) => (mode === 'deg' ? Math.sin((v * Math.PI) / 180) : Math.sin(v));
    const cos = (v: number) => (mode === 'deg' ? Math.cos((v * Math.PI) / 180) : Math.cos(v));
    const tan = (v: number) => (mode === 'deg' ? Math.tan((v * Math.PI) / 180) : Math.tan(v));
    const asin = (v: number) => (mode === 'deg' ? (Math.asin(v) * 180) / Math.PI : Math.asin(v));
    const acos = (v: number) => (mode === 'deg' ? (Math.acos(v) * 180) / Math.PI : Math.acos(v));
    const atan = (v: number) => (mode === 'deg' ? (Math.atan(v) * 180) / Math.PI : Math.atan(v));
    const sqrt = Math.sqrt;
    const pow = Math.pow;
    const abs = Math.abs;
    const floor = Math.floor;
    const ceil = Math.ceil;
    const round = Math.round;
    const exp = Math.exp;
    const ln = Math.log;
    const log = (v: number) => Math.log10(v);
    const max = Math.max;
    const min = Math.min;
    const pi = Math.PI;
    const e = Math.E;
    const x = typeof xValue === 'number' ? xValue : 0;

    const values = [
      sin,
      cos,
      tan,
      asin,
      acos,
      atan,
      sqrt,
      pow,
      abs,
      floor,
      ceil,
      round,
      exp,
      ln,
      log,
      max,
      min,
      pi,
      e,
      x,
    ];

    // eslint-disable-next-line no-new-func
    const fn = new Function(...evaluatorNames, `return (${sanitized});`);
    const res = fn(...values);

    if (typeof res !== 'number' || !isFinite(res) || isNaN(res)) {
      throw new Error('Expression did not evaluate to a valid number');
    }

    return res;
  }

  useEffect(() => {
    const calculateResult = () => {
      try {
        const evaluatedResult = evaluateExpression(expression, angleMode);
        setResult(evaluatedResult);
        setError(null);
      } catch (err) {
        setResult(null);
        setError((err as Error).message);
      }
    };

    calculateResult();
  }, [expression, angleMode]);

  return (
    <CalculatorLayout title="Scientific Calculator" category="math">
      <div>
        <Label htmlFor="expression">Expression</Label>
        <Input
          id="expression"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />

        <Label htmlFor="angleMode">Angle Mode</Label>
        <Select
          id="angleMode"
          value={angleMode}
          onChange={(e) => setAngleMode(e.target.value as AngleMode)}
        >
          <option value="deg">Degrees</option>
          <option value="rad">Radians</option>
        </Select>

        <div>
          <h3>Result: {result !== null ? result : 'Invalid expression'}</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        {showCharts && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </CalculatorLayout>
  );
}
