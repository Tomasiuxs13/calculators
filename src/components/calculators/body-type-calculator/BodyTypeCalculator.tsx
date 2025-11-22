'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';

export default function BodyTypeCalculator() {
  const [wrist, setWrist] = useState<string>('17');
  const [height, setHeight] = useState<string>('175');
  const [gender, setGender] = useState<Gender>('male');
  const [ratio, setRatio] = useState<number | null>(null);
  const [bodyType, setBodyType] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Calculate on input change automatically
  useEffect(() => {
    const w = parseFloat(wrist);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setRatio(null);
      setBodyType(null);
      return;
    }

    // Use a simple frame index: height divided by wrist circumference
    // Commonly used approximate thresholds are applied separately for male and female
    const idx = parseFloat((h / w).toFixed(2));
    setRatio(idx);

    let type: string;

    if (gender === 'male') {
      // Approximate thresholds for males
      // > 10.4 => slender/ectomorph, 9.6 - 10.4 => medium/mesomorph, < 9.6 => large/endomorph
      if (idx > 10.4) {
        type = 'Ectomorph';
      } else if (idx >= 9.6) {
        type = 'Mesomorph';
      } else {
        type = 'Endomorph';
      }
    } else {
      // Approximate thresholds for females
      // > 11 => slender/ectomorph, 10 - 11 => medium/mesomorph, < 10 => large/endomorph
      if (idx > 11) {
        type = 'Ectomorph';
      } else if (idx >= 10) {
        type = 'Mesomorph';
      } else {
        type = 'Endomorph';
      }
    }

    setBodyType(type);
  }, [wrist, height, gender]);

  const handleDownloadPDF = () => {
    if (ratio === null || bodyType === null) return;

    generateCalculatorPDF({
      title: 'Body Type Calculator Results',
      inputs: [
        { label: 'Wrist Circumference (cm)', value: wrist },
        { label: 'Height (cm)', value: height },
        { label: 'Gender', value: gender },
      ],
      results: [
        { label: 'Frame Index (height / wrist)', value: String(ratio) },
        { label: 'Predicted Body Type', value: bodyType },
      ],
    });
  };

  const chartData = ratio !== null ? [
    { label: 'Your Index', value: ratio, color: '#2563eb' },
    { label: 'Ectomorph Threshold', value: gender === 'male' ? 10.4 : 11, color: '#9ca3af' },
    { label: 'Mesomorph Threshold', value: gender === 'male' ? 9.6 : 10, color: '#d1d5db' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='wrist'>Wrist Circumference (cm)</Label>
        <Input
          id='wrist'
          type='number'
          value={wrist}
          onChange={(e) => setWrist(e.target.value)}
          min='0'
          step='0.1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='height'>Height (cm)</Label>
        <Input
          id='height'
          type='number'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min='0'
          step='0.1'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='gender'>Gender</Label>
        <Select
          id='gender'
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </Select>
      </div>
    </>
  );

  const results = ratio !== null && bodyType !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {bodyType}
      </div>
      <div className='text-lg text-gray-700'>
        Frame Index: {ratio.toLocaleString()} (height / wrist)
      </div>
    </div>
  ) : null;

  const charts = showCharts && ratio !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Body Type Index Comparison</h3>
      <ResponsiveContainer width='100%' height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => String(value)} />
          <Bar dataKey='value' name='Value' fill='#3b82f6' />
        </BarChart>
      </ResponsiveContainer>
      <div className='text-sm text-gray-600 mt-3 text-center'>
        Note: Higher frame index indicates a slimmer frame for a given wrist circumference
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Body Type Calculator'
      description='Determine your body type based on wrist circumference and height to identify if you are likely an Ectomorph, Mesomorph, or Endomorph.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
