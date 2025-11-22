'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartPoint = { label: string; value: number };

export default function CyclingCalorieBurnCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [duration, setDuration] = useState<string>('60');
  const [speed, setSpeed] = useState<string>('20');
  const [calories, setCalories] = useState<number | null>(null);
  const [calPerHour, setCalPerHour] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    const s = parseFloat(speed);

    if (isNaN(w) || isNaN(d) || isNaN(s) || w <= 0 || d <= 0 || s < 0) {
      setCalories(null);
      setCalPerHour(null);
      return;
    }

    const met = getMETForSpeed(s);
    // Calories per minute = (MET * 3.5 * weight_kg) / 200
    const caloriesPerMinute = (met * 3.5 * w) / 200;
    const total = caloriesPerMinute * d;
    const perHour = d > 0 ? total / (d / 60) : 0;

    setCalories(parseFloat(total.toFixed(2)));
    setCalPerHour(parseFloat(perHour.toFixed(2)));
  }, [weight, duration, speed]);

  function getMETForSpeed(speedKmh: number): number {
    // Approximate MET values by speed ranges (km/h)
    // <15 km/h: leisurely
    // 15-18.9: light to moderate
    // 19-21.9: moderate
    // 22-24.9: vigorous
    // 25-29.9: very vigorous
    // >=30: racing/very intense
    if (speedKmh < 0) return 0;
    if (speedKmh < 15) return 4;
    if (speedKmh < 19) return 6.8;
    if (speedKmh < 22) return 8;
    if (speedKmh < 25) return 10;
    if (speedKmh < 30) return 12;
    return 16;
  }

  const handleDownloadPDF = () => {
    if (calories === null || calPerHour === null) return;

    generateCalculatorPDF({
      title: 'Cycling Calorie Burn Results',
      inputs: [
        { label: 'Weight (kg)', value: weight },
        { label: 'Duration (minutes)', value: duration },
        { label: 'Average Speed (km/h)', value: speed },
      ],
      results: [
        { label: 'Total Calories Burned', value: `${calories} kcal` },
        { label: 'Calories per Hour', value: `${calPerHour} kcal/hr` },
      ],
    });
  };

  const chartData: ChartPoint[] = calories !== null && calPerHour !== null ? [
    { label: 'Total', value: calories },
    { label: 'Per Hour', value: calPerHour },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='weight'>Weight (kg)</Label>
        <Input
          id='weight'
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min='1'
          step='0.1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='duration'>Duration (minutes)</Label>
        <Input
          id='duration'
          type='number'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min='1'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='speed'>Average Speed (km/h)</Label>
        <Input
          id='speed'
          type='number'
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          min='0'
          step='0.1'
        />
      </div>
    </>
  );

  const results = calories !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Estimated Calories Burned</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>{calories.toLocaleString()}</div>
      <div className='text-lg text-gray-700'>kcal</div>
      <div className='mt-2 text-sm text-gray-600'>~ {calPerHour?.toLocaleString()} kcal/hr</div>
    </div>
  ) : null;

  const charts = showCharts && calories !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Calorie Burn Overview</h3>
      <ResponsiveContainer width='100%' height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kcal`} />
          <Bar dataKey='value' fill='#3b82f6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Cycling Calorie Burn Calculator'
      description='Calculate calories burned during cycling based on weight, duration, and average speed.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
