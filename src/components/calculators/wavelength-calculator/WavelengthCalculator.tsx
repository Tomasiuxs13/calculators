'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function WavelengthCalculator() {
  const [frequency, setFrequency] = useState<string>('1000');
  const [waveSpeed, setWaveSpeed] = useState<string>('343');
  const [wavelength, setWavelength] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const f = parseFloat(frequency);
    const v = parseFloat(waveSpeed);

    if (!isNaN(f) && f > 0 && !isNaN(v) && v >= 0) {
      const lambda = v / f; // wavelength in meters
      setWavelength(parseFloat(lambda.toFixed(6)));
    } else {
      setWavelength(null);
    }
  }, [frequency, waveSpeed]);

  const handleDownloadPDF = () => {
    if (wavelength === null) return;

    generateCalculatorPDF({
      title: 'Wavelength Calculation Results',
      inputs: [
        { label: 'Frequency (Hz)', value: frequency },
        { label: 'Wave Speed (m/s)', value: waveSpeed },
      ],
      results: [
        { label: 'Wavelength (m)', value: `${wavelength} m` },
      ],
    });
  };

  const chartData = wavelength !== null ? [
    { label: 'Frequency (Hz)', value: parseFloat(frequency) || 0, unit: 'Hz' },
    { label: 'Wavelength (m)', value: wavelength, unit: 'm' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='frequency'>Frequency (Hz)</Label>
        <Input
          id='frequency'
          type='number'
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          min='0'
          step='0.01'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='waveSpeed'>Wave Speed (m/s)</Label>
        <Input
          id='waveSpeed'
          type='number'
          value={waveSpeed}
          onChange={e => setWaveSpeed(e.target.value)}
          min='0'
          step='0.01'
        />
      </div>
    </>
  );

  const results = wavelength !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {wavelength.toLocaleString()}
      </div>
      <div className='text-lg text-gray-700'>m</div>
    </div>
  ) : null;

  const charts = showCharts && wavelength !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Wavelength vs Frequency</h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey='value' fill='#3b82f6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Wavelength Calculator'
      description='Calculate wavelength from frequency and wave speed using the relation λ = v / f.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
