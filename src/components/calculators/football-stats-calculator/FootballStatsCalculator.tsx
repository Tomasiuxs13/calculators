'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DisplayMode = 'percent' | 'decimal';

export default function FootballStatsCalculator() {
  const [completions, setCompletions] = useState<string>('250');
  const [attempts, setAttempts] = useState<string>('400');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('percent');
  const [completionPercentage, setCompletionPercentage] = useState<number | null>(null);
  const [completionDecimal, setCompletionDecimal] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const c = parseFloat(completions);
    const a = parseFloat(attempts);

    if (!isNaN(c) && !isNaN(a) && a > 0 && c >= 0) {
      const decimal = c / a; // base calculation: completions per attempt
      const percent = decimal * 100;
      setCompletionDecimal(parseFloat(decimal.toFixed(4)));
      setCompletionPercentage(parseFloat(percent.toFixed(2)));
    } else {
      setCompletionDecimal(null);
      setCompletionPercentage(null);
    }
  }, [completions, attempts]);

  const handleDownloadPDF = () => {
    if (completionDecimal === null || completionPercentage === null) return;

    generateCalculatorPDF({
      title: 'Football Stats Calculator Results',
      inputs: [
        { label: 'Completions', value: completions },
        { label: 'Pass Attempts', value: attempts },
        { label: 'Display Mode', value: displayMode },
      ],
      results: [
        { label: 'Completion Percentage', value: `${completionPercentage} %` },
        { label: 'Completion Decimal', value: `${completionDecimal}` },
      ],
    });
  };

  const chartData = completionDecimal !== null ? [
    { label: 'Completions', value: parseFloat(completions) || 0 },
    { label: 'Attempts', value: parseFloat(attempts) || 0 },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='completions'>Completions</Label>
        <Input
          id='completions'
          type='number'
          value={completions}
          onChange={(e) => setCompletions(e.target.value)}
          min='0'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='attempts'>Pass Attempts</Label>
        <Input
          id='attempts'
          type='number'
          value={attempts}
          onChange={(e) => setAttempts(e.target.value)}
          min='1'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='displayMode'>Display As</Label>
        <Select
          id='displayMode'
          value={displayMode}
          onChange={(e) => setDisplayMode(e.target.value as DisplayMode)}
        >
          <option value='percent'>Percentage (eg. 62.50%)</option>
          <option value='decimal'>Decimal (eg. 0.6250)</option>
        </Select>
      </div>
    </>
  );

  const results = completionDecimal !== null && completionPercentage !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {displayMode === 'percent' ? `${completionPercentage.toLocaleString()}%` : completionDecimal.toLocaleString()}
      </div>
      <div className='text-lg text-gray-700'>
        {displayMode === 'percent' ? 'Completion Percentage' : 'Completion Decimal (Completions per Attempt)'}
      </div>
      <div className='mt-3 text-sm text-gray-600'>
        {`Based on ${completions} completions and ${attempts} attempts`}
      </div>
    </div>
  ) : (
    <div className='text-center text-sm text-red-600'>Please enter valid numbers. Attempts must be greater than 0.</div>
  );

  const charts = showCharts && completionDecimal !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Completions vs Attempts</h3>
      <ResponsiveContainer width='100%' height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Football Stats Calculator'
      description='Calculate completion percentage and completion decimal based on completions and pass attempts.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
