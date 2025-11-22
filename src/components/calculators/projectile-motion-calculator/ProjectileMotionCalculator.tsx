'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

// Standard gravity in m/s^2
const g = 9.80665;

type ProjectileResults = {
  range: number;
  maxHeight: number;
  timeOfFlight: number;
  timeToPeak: number;
} | null;

export default function ProjectileMotionCalculator() {
  const [initialVelocity, setInitialVelocity] = useState<string>('20');
  const [angle, setAngle] = useState<string>('45');
  const [height, setHeight] = useState<string>('0');
  const [results, setResults] = useState<ProjectileResults>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const v0 = parseFloat(initialVelocity);
    const thetaDeg = parseFloat(angle);
    const h0 = parseFloat(height);

    if (!isNaN(v0) && !isNaN(thetaDeg) && !isNaN(h0) && v0 >= 0) {
      // Convert angle to radians
      const theta = (thetaDeg * Math.PI) / 180;
      // Vertical and horizontal components
      const vy = v0 * Math.sin(theta);
      const vx = v0 * Math.cos(theta);

      // Solve quadratic for time when y(t) = 0: h0 + vy*t - 0.5*g*t^2 = 0
      // t = (vy + sqrt(vy^2 + 2*g*h0)) / g  (positive root)
      const discriminant = vy * vy + 2 * g * h0;

      if (discriminant < 0) {
        setResults(null);
        return;
      }

      const tFlight = (vy + Math.sqrt(discriminant)) / g;
      const tPeak = Math.max(vy / g, 0);
      const maxH = h0 + (vy * vy) / (2 * g);
      const range = vx * tFlight;

      setResults({
        range: parseFloat(range.toFixed(6)),
        maxHeight: parseFloat(maxH.toFixed(6)),
        timeOfFlight: parseFloat(tFlight.toFixed(6)),
        timeToPeak: parseFloat(tPeak.toFixed(6)),
      });
    } else {
      setResults(null);
    }
  }, [initialVelocity, angle, height]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'Projectile Motion Results',
      inputs: [
        { label: 'Initial Velocity (m/s)', value: initialVelocity },
        { label: 'Launch Angle (degrees)', value: angle },
        { label: 'Initial Height (m)', value: height },
      ],
      results: [
        { label: 'Range', value: `${results.range} m` },
        { label: 'Max Height', value: `${results.maxHeight} m` },
        { label: 'Time of Flight', value: `${results.timeOfFlight} s` },
        { label: 'Time to Peak', value: `${results.timeToPeak} s` },
      ],
    });
  };

  const chartData = results
    ? [
        { label: 'Range', value: results.range, unit: 'm' },
        { label: 'Max Height', value: results.maxHeight, unit: 'm' },
        { label: 'Time of Flight', value: results.timeOfFlight, unit: 's' },
      ]
    : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='initialVelocity'>Initial Velocity (m/s)</Label>
        <Input
          id='initialVelocity'
          type='number'
          value={initialVelocity}
          onChange={(e) => setInitialVelocity(e.target.value)}
          min='0'
          step='0.1'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='angle'>Launch Angle (degrees)</Label>
          <Input
            id='angle'
            type='number'
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            min='0'
            max='90'
            step='0.1'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='height'>Initial Height (m)</Label>
          <Input
            id='height'
            type='number'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step='0.01'
          />
        </div>
      </div>
    </>
  );

  const resultsDisplay = results ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='grid grid-cols-1 gap-2'>
        <div className='text-lg text-gray-700'>Range</div>
        <div className='text-4xl font-bold text-blue-900 my-1'>{results.range.toLocaleString()} m</div>

        <div className='text-lg text-gray-700'>Maximum Height</div>
        <div className='text-3xl font-bold text-blue-900 my-1'>{results.maxHeight.toLocaleString()} m</div>

        <div className='text-lg text-gray-700'>Time of Flight</div>
        <div className='text-3xl font-bold text-blue-900 my-1'>{results.timeOfFlight.toLocaleString()} s</div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && results ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Projectile Motion Comparison</h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number, name: any, props: any) => `${Number(value).toFixed(3)} ${props.payload.unit || ''}`} />
          <Bar dataKey='value' fill='#3b82f6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Projectile Motion Calculator'
      description='Calculate projectile motion parameters such as range, maximum height, and time of flight for a projectile launched with an initial velocity, angle, and initial height.'
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
