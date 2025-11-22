'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableNumber = number | null;

export default function RetirementSavingsGoalCalculator() {
  const [retirementGoal, setRetirementGoal] = useState<string>('1000000');
  const [currentSavings, setCurrentSavings] = useState<string>('50000');
  const [yearsToRetirement, setYearsToRetirement] = useState<string>('30');
  const [expectedReturn, setExpectedReturn] = useState<string>('7');

  const [monthlySavings, setMonthlySavings] = useState<NullableNumber>(null);
  const [fvCurrentSavings, setFvCurrentSavings] = useState<NullableNumber>(null);
  const [shortfallAtRetirement, setShortfallAtRetirement] = useState<NullableNumber>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const goal = parseFloat(retirementGoal);
    const current = parseFloat(currentSavings);
    const years = parseFloat(yearsToRetirement);
    const annualReturn = parseFloat(expectedReturn);

    if (isNaN(goal) || isNaN(current) || isNaN(years) || isNaN(annualReturn) || years <= 0) {
      setMonthlySavings(null);
      setFvCurrentSavings(null);
      setShortfallAtRetirement(null);
      return;
    }

    const r = annualReturn / 100; // annual rate
    const n = Math.max(0, Math.floor(years * 12)); // months
    const monthlyRate = r / 12;

    // Future value of current savings
    const fvCurrent = current * Math.pow(1 + monthlyRate, n);

    // If already meet or exceed goal at retirement from current savings alone
    const shortfall = Math.max(0, goal - fvCurrent);

    let requiredMonthly = 0;

    if (shortfall <= 0) {
      requiredMonthly = 0;
    } else if (monthlyRate === 0) {
      // No return
      requiredMonthly = shortfall / n;
    } else {
      const factor = Math.pow(1 + monthlyRate, n) - 1;
      if (factor === 0) {
        requiredMonthly = shortfall / n;
      } else {
        requiredMonthly = (shortfall * monthlyRate) / factor;
      }
    }

    setFvCurrentSavings(parseFloat(fvCurrent.toFixed(2)));
    setShortfallAtRetirement(parseFloat(shortfall.toFixed(2)));
    setMonthlySavings(parseFloat(requiredMonthly.toFixed(2)));
  }, [retirementGoal, currentSavings, yearsToRetirement, expectedReturn]);

  const handleDownloadPDF = () => {
    if (monthlySavings === null || fvCurrentSavings === null || shortfallAtRetirement === null) return;

    generateCalculatorPDF({
      title: 'Retirement Savings Goal Results',
      inputs: [
        { label: 'Retirement Savings Goal', value: `${retirementGoal}` },
        { label: 'Current Savings', value: `${currentSavings}` },
        { label: 'Years Until Retirement', value: `${yearsToRetirement}` },
        { label: 'Expected Annual Return (%)', value: `${expectedReturn}` },
      ],
      results: [
        { label: 'Monthly Savings Required', value: `$${monthlySavings.toLocaleString()}` },
        { label: 'Future Value of Current Savings', value: `$${fvCurrentSavings.toLocaleString()}` },
        { label: 'Shortfall at Retirement', value: `$${shortfallAtRetirement.toLocaleString()}` },
      ],
    });
  };

  const chartData = (monthlySavings !== null && fvCurrentSavings !== null && shortfallAtRetirement !== null) ? [
    { label: 'Future Value of Current', value: fvCurrentSavings },
    { label: 'Shortfall (Needed)', value: shortfallAtRetirement },
    { label: 'Goal', value: parseFloat(retirementGoal) },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='retirementGoal'>Retirement Savings Goal</Label>
        <Input
          id='retirementGoal'
          type='number'
          value={retirementGoal}
          onChange={(e) => setRetirementGoal(e.target.value)}
          min='0'
          step='1000'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='currentSavings'>Current Savings</Label>
        <Input
          id='currentSavings'
          type='number'
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
          min='0'
          step='100'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='yearsToRetirement'>Years Until Retirement</Label>
          <Input
            id='yearsToRetirement'
            type='number'
            value={yearsToRetirement}
            onChange={(e) => setYearsToRetirement(e.target.value)}
            min='0'
            step='1'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='expectedReturn'>Expected Annual Return (%)</Label>
          <Input
            id='expectedReturn'
            type='number'
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            min='0'
            step='0.01'
          />
        </div>
      </div>
    </>
  );

  const results = (monthlySavings !== null) ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Monthly Savings Required</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        ${monthlySavings.toLocaleString()}
      </div>
      <div className='text-sm text-gray-700'>
        Based on an expected annual return of {expectedReturn}% over {yearsToRetirement} years
      </div>

      <div className='mt-4 text-left'>
        <div className='text-sm text-gray-600'>Future Value of Current Savings</div>
        <div className='text-2xl font-semibold text-gray-900'>
          ${fvCurrentSavings?.toLocaleString()}
        </div>

        <div className='text-sm text-gray-600 mt-3'>Shortfall at Retirement</div>
        <div className='text-2xl font-semibold text-red-600'>
          ${shortfallAtRetirement?.toLocaleString()}
        </div>
      </div>
    </div>
  ) : null;

  const charts = (showCharts && chartData.length > 0) ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Retirement Goal Breakdown</h3>
      <ResponsiveContainer width='100%' height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => '$' + value.toLocaleString(undefined, { maximumFractionDigits: 2 })} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Retirement Savings Goal Calculator'
      description='Calculate how much you need to save monthly to reach your retirement goal.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
