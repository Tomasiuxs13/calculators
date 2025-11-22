'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function QuadraticCalculator() {
  const [a, setA] = useState<string>('1');
  const [b, setB] = useState<string>('-5');
  const [c, setC] = useState<string>('6');
  const [roots, setRoots] = useState<{ x1: number | string; x2: number | string }>({ x1: '', x2: '' });
  const [discriminant, setDiscriminant] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const A = parseFloat(a);
    const B = parseFloat(b);
    const C = parseFloat(c);
    
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      setRoots({ x1: 'Invalid', x2: 'Invalid' });
      setDiscriminant(null);
      return;
    }

    const D = B * B - 4 * A * C;
    setDiscriminant(D);
    
    if (D >= 0) {
      const x1 = (-B + Math.sqrt(D)) / (2 * A);
      const x2 = (-B - Math.sqrt(D)) / (2 * A);
      setRoots({ x1: x1.toFixed(2), x2: x2.toFixed(2) });
    } else {
      setRoots({ x1: 'Complex', x2: 'Complex' });
    }
  }, [a, b, c]);

  const handleDownloadPDF = () => {
    generateCalculatorPDF({
      title: 'Quadratic Equation Results',
      inputs: [
        { label: 'Coefficient a (x²)', value: a },
        { label: 'Coefficient b (x)', value: b },
        { label: 'Coefficient c (constant)', value: c },
      ],
      results: [
        { label: 'Root 1', value: `${roots.x1}` },
        { label: 'Root 2', value: `${roots.x2}` },
        { label: 'Discriminant', value: discriminant?.toString() || '' },
      ],
    });
  };

  const chartData = discriminant !== null ? [
    { name: 'Discriminant', value: discriminant },
    { name: 'Root 1', value: typeof roots.x1 === 'number' ? roots.x1 : parseFloat(String(roots.x1)) || 0 },
    { name: 'Root 2', value: typeof roots.x2 === 'number' ? roots.x2 : parseFloat(String(roots.x2)) || 0 },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="a">Coefficient a (x²)</Label>
        <Input id="a" type="number" value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="b">Coefficient b (x)</Label>
        <Input id="b" type="number" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="c">Coefficient c (constant)</Label>
        <Input id="c" type="number" value={c} onChange={(e) => setC(e.target.value)} />
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`Roots: ${roots.x1}, ${roots.x2}`}
      </div>
      <div className="text-lg text-gray-700">Discriminant: {discriminant?.toLocaleString() || 'N/A'}</div>
    </div>
  );

  const charts = discriminant !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Quadratic Equation Analysis</h3>
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
      title="Quadratic Calculator"
      description="Solve quadratic equations using the quadratic formula. Find roots and discriminant."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
