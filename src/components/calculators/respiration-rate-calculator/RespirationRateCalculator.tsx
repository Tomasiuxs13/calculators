'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RespirationRateCalculator() {
  const [oxygenConsumed, setOxygenConsumed] = useState<string>('10');
  const [time, setTime] = useState<string>('5');
  const [weight, setWeight] = useState<string>('1');

  const [ratePerMin, setRatePerMin] = useState<number | null>(null);
  const [ratePerMinPerGram, setRatePerMinPerGram] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const o = parseFloat(oxygenConsumed);
    const t = parseFloat(time);
    const w = parseFloat(weight);

    if (!isNaN(o) && !isNaN(t) && !isNaN(w) && t > 0 && w > 0 && o >= 0) {
      const rpm = o / t; // mL per minute
      const rpg = rpm / w; // mL per minute per gram
      setRatePerMin(parseFloat(rpm.toFixed(6)));
      setRatePerMinPerGram(parseFloat(rpg.toFixed(6)));
    } else {
      setRatePerMin(null);
      setRatePerMinPerGram(null);
    }
  }, [oxygenConsumed, time, weight]);

  const handleDownloadPDF = () => {
    if (ratePerMin === null || ratePerMinPerGram === null) return;

    generateCalculatorPDF({
      title: 'Respiration Rate Calculator Results',
      inputs: [
        { label: 'Oxygen Consumed (mL)', value: oxygenConsumed },
        { label: 'Time (minutes)', value: time },
        { label: 'Sample Weight (g)', value: weight },
      ],
      results: [
        { label: 'Rate (mL/min)', value: `${ratePerMin} mL/min` },
        { label: 'Rate (mL/min/g)', value: `${ratePerMinPerGram} mL/(g·min)` },
      ],
    });
  };

  const chartData = ratePerMin !== null && ratePerMinPerGram !== null ? [
    { label: 'O2 Consumed (mL)', value: parseFloat(oxygenConsumed) || 0, unit: 'mL' },
    { label: 'Rate (mL/min)', value: ratePerMin, unit: 'mL/min' },
    { label: 'Rate (mL/min/g)', value: ratePerMinPerGram, unit: 'mL/(g·min)' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='oxygenConsumed'>Oxygen Consumed (mL)</Label>
        <Input
          id='oxygenConsumed'
          type='number'
          value={oxygenConsumed}
          onChange={(e) => setOxygenConsumed(e.target.value)}
          min='0'
          step='0.01'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='time'>Time (minutes)</Label>
          <Input
            id='time'
            type='number'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min='0.0001'
            step='0.01'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='weight'>Sample Weight (g)</Label>
          <Input
            id='weight'
            type='number'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min='0.0001'
            step='0.01'
          />
        </div>
      </div>

      {/* Imported Select to follow example patterns (kept for consistency) */}
      <div className='hidden'>
        <Select aria-hidden />
      </div>
    </>
  );

  const results = ratePerMin !== null && ratePerMinPerGram !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Results</div>

      <div className='text-base text-gray-700'>
        <div className='mb-1'>Rate</div>
        <div className='text-4xl font-bold text-blue-900 my-2'>
          {ratePerMin.toLocaleString()} <span className='text-lg font-medium'>mL/min</span>
        </div>
      </div>

      <div className='text-base text-gray-700 mt-4'>
        <div className='mb-1'>Rate per Gram</div>
        <div className='text-3xl font-semibold text-gray-900 my-2'>
          {ratePerMinPerGram.toLocaleString()} <span className='text-sm font-medium'>mL/(g·min)</span>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Respiration Rate Overview</h3>
      <ResponsiveContainer width='100%' height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} labelFormatter={(label) => label} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Respiration Rate Calculator'
      description='Calculate cellular respiration rates.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
