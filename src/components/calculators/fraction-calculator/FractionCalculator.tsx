'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculateResult(num1: number, den1: number, num2: number, den2: number, operation: Operation): { numerator: number, denominator: number } {
  switch (operation) {
    case 'add':
      return {
        numerator: num1 * den2 + num2 * den1,
        denominator: den1 * den2
      };
    case 'subtract':
      return {
        numerator: num1 * den2 - num2 * den1,
        denominator: den1 * den2
      };
    case 'multiply':
      return {
        numerator: num1 * num2,
        denominator: den1 * den2
      };
    case 'divide':
      return {
        numerator: num1 * den2,
        denominator: den1 * num2
      };
    default:
      return { numerator: 0, denominator: 1 };
  }
}

export default function FractionCalculator() {
  const [operation, setOperation] = useState<Operation>('add');
  const [num1, setNum1] = useState<string>('1');
  const [den1, setDen1] = useState<string>('2');
  const [num2, setNum2] = useState<string>('1');
  const [den2, setDen2] = useState<string>('4');
  const [showCharts, setShowCharts] = useState(false);
  const [result, setResult] = useState<{ numerator: number, denominator: number } | null>(null);

  useEffect(() => {
    const n1 = parseFloat(num1);
    const d1 = parseFloat(den1);
    const n2 = parseFloat(num2);
    const d2 = parseFloat(den2);
    if (!isNaN(n1) && !isNaN(d1) && !isNaN(n2) && !isNaN(d2) && d1 !== 0 && d2 !== 0) {
      setResult(calculateResult(n1, d1, n2, d2, operation));
    } else {
      setResult(null);
    }
  }, [num1, den1, num2, den2, operation]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Fraction Calculator Results',
      inputs: [
        { label: 'Operation', value: operation },
        { label: 'First Fraction', value: `${num1}/${den1}` },
        { label: 'Second Fraction', value: `${num2}/${den2}` }
      ],
      results: [
        { label: 'Result', value: `${result.numerator}/${result.denominator}` }
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'First Fraction', value: parseFloat(num1) / parseFloat(den1) },
    { name: 'Second Fraction', value: parseFloat(num2) / parseFloat(den2) },
    { name: 'Result', value: result.numerator / result.denominator }
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="operation">Operation</Label>
        <Select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value as Operation)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="num1">First Fraction Numerator</Label>
          <Input
            id="num1"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="den1">First Fraction Denominator</Label>
          <Input
            id="den1"
            type="number"
            value={den1}
            onChange={(e) => setDen1(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="num2">Second Fraction Numerator</Label>
          <Input
            id="num2"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="den2">Second Fraction Denominator</Label>
          <Input
            id="den2"
            type="number"
            value={den2}
            onChange={(e) => setDen2(e.target.value)}
          />
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`${result.numerator}/${result.denominator}`}
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Fraction Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Fraction Calculator"
      description="Add, subtract, multiply, and divide fractions with step-by-step solutions."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
