'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ProbabilityCalculator() {
  const [favorable, setFavorable] = useState<string>('3');
  const [total, setTotal] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const favorableValue = parseFloat(favorable);
    const totalValue = parseFloat(total);
    if (!isNaN(favorableValue) && !isNaN(totalValue) && totalValue > 0) {
      const probability = favorableValue / totalValue;
      setResult(parseFloat(probability.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [favorable, total]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Probability Calculator Results',
      inputs: [
        { label: 'Favorable Outcomes', value: favorable },
        { label: 'Total Outcomes', value: total },
      ],
      results: [
        { label: 'Probability', value: `${(result * 100).toFixed(2)}%` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Favorable Outcomes', value: parseFloat(favorable) || 0 },
    { label: 'Total Outcomes', value: parseFloat(total) || 0 },
    { label: 'Probability', value: result * 100 },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="favorable">Favorable Outcomes</Label>
        <Input
          id="favorable"
          type="number"
          value={favorable}
          onChange={(e) => setFavorable(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="total">Total Outcomes</Label>
        <Input
          id="total"
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Probability</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {(result * 100).toLocaleString()}%
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Probability Visualization</h3>
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
      title="Probability Calculator"
      description="Calculate probability of events and combinations."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
