'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CalorieDensityCalculator() {
  const [calories, setCalories] = useState<string>('200');
  const [weight, setWeight] = useState<string>('100');
  const [density, setDensity] = useState<number | null>(null); // kcal per gram
  const [per100g, setPer100g] = useState<number | null>(null); // kcal per 100g
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const cal = parseFloat(calories);
    const wt = parseFloat(weight);

    // Validate inputs and calculate automatically
    if (!isNaN(cal) && !isNaN(wt) && wt > 0 && cal >= 0) {
      // Convert to base unit first (grams). Weight input is already grams.
      const grams = wt;
      const calPerGram = cal / grams; // kcal per gram
      const calPer100 = calPerGram * 100; // kcal per 100g

      setDensity(parseFloat(calPerGram.toFixed(4)));
      setPer100g(parseFloat(calPer100.toFixed(2)));
    } else {
      setDensity(null);
      setPer100g(null);
    }
  }, [calories, weight]);

  const handleDownloadPDF = () => {
    if (density === null || per100g === null) return;

    generateCalculatorPDF({
      title: 'Calorie Density Results',
      inputs: [
        { label: 'Calories', value: calories },
        { label: 'Weight (g)', value: weight },
      ],
      results: [
        { label: 'Calories per gram', value: String(density) + ' kcal/g' },
        { label: 'Calories per 100g', value: String(per100g) + ' kcal/100g' },
      ],
    });
  };

  const chartData = density !== null ? [
    { label: 'Calories', value: parseFloat(calories) || 0, unit: 'kcal' },
    { label: 'Weight (g)', value: parseFloat(weight) || 0, unit: 'g' },
    { label: 'kcal/g', value: density, unit: 'kcal/g' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='calories'>Calories</Label>
        <Input
          id='calories'
          type='number'
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min='0'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='weight'>Weight (g)</Label>
        <Input
          id='weight'
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min='0.1'
          step='0.1'
        />
      </div>
    </>
  );

  const results = density !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Calorie Density</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>{density.toLocaleString()}</div>
      <div className='text-lg text-gray-700'>kcal/g</div>
      <div className='mt-2 text-sm text-gray-600'>
        Equivalent to {per100g !== null ? per100g.toLocaleString() + ' kcal/100g' : ''}
      </div>
    </div>
  ) : null;

  const charts = showCharts && density !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Calorie Density Overview</h3>
      <ResponsiveContainer width='100%' height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => String(value) + ' ' + (chartData.find((d) => d.value === value)?.unit || '')} />
          <Bar dataKey='value' fill='#f97316' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Calorie Density Calculator'
      description='Calculate the calorie density of a food item expressed as kilocalories per gram and per 100 grams.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
