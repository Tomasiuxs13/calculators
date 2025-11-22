'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DebtConsolidationCalculator() {
  const [totalDebt, setTotalDebt] = useState<string>('25000');
  const [currentRate, setCurrentRate] = useState<string>('18.0');
  const [consolidationRate, setConsolidationRate] = useState<string>('8.0');
  const [term, setTerm] = useState<string>('5');
  const [savings, setSavings] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const debt = parseFloat(totalDebt);
    const current = parseFloat(currentRate) / 100;
    const consolidation = parseFloat(consolidationRate) / 100;
    const years = parseFloat(term);

    if (!isNaN(debt) && !isNaN(current) && !isNaN(consolidation) && !isNaN(years) && debt > 0 && current > 0 && consolidation > 0 && years > 0) {
      const currentTotalInterest = debt * current * years;
      const newTotalInterest = debt * consolidation * years;
      const potentialSavings = currentTotalInterest - newTotalInterest;
      setSavings(parseFloat(potentialSavings.toFixed(2)));
    } else {
      setSavings(null);
    }
  }, [totalDebt, currentRate, consolidationRate, term]);

  const handleDownloadPDF = () => {
    if (savings === null) return;

    generateCalculatorPDF({
      title: 'Debt Consolidation Calculator Results',
      inputs: [
        { label: 'Total Debt Amount', value: totalDebt },
        { label: 'Average Current Rate (%)', value: currentRate },
        { label: 'Consolidation Rate (%)', value: consolidationRate },
        { label: 'New Term (years)', value: term },
      ],
      results: [
        { label: 'Potential Savings', value: `$${savings}` },
      ],
    });
  };

  const chartData = savings !== null ? [
    { label: 'Current Total Interest', value: parseFloat((parseFloat(totalDebt) * (parseFloat(currentRate) / 100) * parseFloat(term)).toFixed(2)), unit: 'USD' },
    { label: 'New Total Interest', value: parseFloat((parseFloat(totalDebt) * (parseFloat(consolidationRate) / 100) * parseFloat(term)).toFixed(2)), unit: 'USD' },
    { label: 'Potential Savings', value: savings, unit: 'USD' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="totalDebt">Total Debt Amount</Label>
        <Input
          id="totalDebt"
          type="number"
          value={totalDebt}
          onChange={(e) => setTotalDebt(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentRate">Average Current Rate (%)</Label>
        <Input
          id="currentRate"
          type="number"
          value={currentRate}
          onChange={(e) => setCurrentRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="consolidationRate">Consolidation Rate (%)</Label>
        <Input
          id="consolidationRate"
          type="number"
          value={consolidationRate}
          onChange={(e) => setConsolidationRate(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="term">New Term (years)</Label>
        <Input
          id="term"
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = savings !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Potential Savings</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${savings.toLocaleString()}
      </div>
    </div>
  ) : null;

  const charts = showCharts && savings !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Debt Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Debt Consolidation Calculator"
      description="Calculate potential savings from consolidating multiple debts into one loan."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
