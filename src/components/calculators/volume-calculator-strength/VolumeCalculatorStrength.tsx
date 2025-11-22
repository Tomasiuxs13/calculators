'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function VolumeCalculatorStrength() {
  const [sets, setSets] = useState<string>('3');
  const [reps, setReps] = useState<string>('10');
  const [weight, setWeight] = useState<string>('80');
  const [totalReps, setTotalReps] = useState<number | null>(null);
  const [volumeKg, setVolumeKg] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const s = parseInt(sets, 10);
    const r = parseInt(reps, 10);
    const w = parseFloat(weight);

    if (!isNaN(s) && !isNaN(r) && !isNaN(w) && s >= 0 && r >= 0 && w >= 0) {
      const total = s * r;
      const volume = total * w; // volume in kg
      setTotalReps(total);
      setVolumeKg(parseFloat(volume.toFixed(2)));
    } else {
      setTotalReps(null);
      setVolumeKg(null);
    }
  }, [sets, reps, weight]);

  const handleDownloadPDF = () => {
    if (volumeKg === null || totalReps === null) return;

    generateCalculatorPDF({
      title: 'Strength Training Volume Results',
      inputs: [
        { label: 'Number of Sets', value: sets },
        { label: 'Reps per Set', value: reps },
        { label: 'Weight (kg)', value: weight },
      ],
      results: [
        { label: 'Total Reps', value: String(totalReps) },
        { label: 'Training Volume (kg)', value: `${volumeKg} kg` },
      ],
    });
  };

  const chartData = volumeKg !== null && totalReps !== null ? [
    { label: 'Total Reps', value: totalReps, unit: 'reps' },
    { label: 'Volume (kg)', value: volumeKg, unit: 'kg' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='sets'>Number of Sets</Label>
        <Input
          id='sets'
          type='number'
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          min='0'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='reps'>Reps per Set</Label>
        <Input
          id='reps'
          type='number'
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          min='0'
          step='1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='weight'>Weight (kg)</Label>
        <Input
          id='weight'
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min='0'
          step='0.5'
        />
      </div>
    </>
  );

  const results = volumeKg !== null && totalReps !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {volumeKg.toLocaleString()} kg
      </div>
      <div className='text-lg text-gray-700 mb-2'>Total Reps: {totalReps.toLocaleString()}</div>
      <div className='text-sm text-gray-600'>Training Volume = sets × reps × weight</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Training Volume Overview</h3>
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
      title='Strength Training Volume'
      description='Calculate training volume for strength training.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
