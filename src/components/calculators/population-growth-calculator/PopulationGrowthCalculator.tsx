'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ModelType = 'exponential' | 'logistic';

export default function PopulationGrowthCalculator() {
  const [initialPopulation, setInitialPopulation] = useState<string>('1000');
  const [growthRate, setGrowthRate] = useState<string>('0.05');
  const [time, setTime] = useState<string>('10');
  const [model, setModel] = useState<ModelType>('exponential');
  const [carryingCapacity, setCarryingCapacity] = useState<string>('5000');

  const [result, setResult] = useState<number | null>(null);
  const [series, setSeries] = useState<Array<{ t: number; population: number }>>([]);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const P0 = parseFloat(initialPopulation);
    const r = parseFloat(growthRate);
    const t = parseFloat(time);
    const K = parseFloat(carryingCapacity);

    if (isNaN(P0) || isNaN(r) || isNaN(t) || P0 < 0 || t < 0) {
      setResult(null);
      setSeries([]);
      return;
    }

    if (model === 'logistic' && (isNaN(K) || K <= 0)) {
      setResult(null);
      setSeries([]);
      return;
    }

    // compute final population at time t and generate time series
    let finalPop = 0;
    const points: Array<{ t: number; population: number }> = [];

    // decide number of points for the chart (at least 2, up to 100)
    const steps = Math.max(2, Math.min(100, Math.ceil(Math.abs(t) + 1)));
    // generate points evenly spaced from 0 to t
    for (let i = 0; i <= steps; i++) {
      const frac = i / steps;
      const currentT = t * frac;
      let popAtT = 0;
      if (model === 'exponential') {
        // exponential growth: P(t) = P0 * e^(r * t)
        popAtT = P0 * Math.exp(r * currentT);
      } else {
        // logistic growth: P(t) = K / (1 + ((K - P0)/P0) * e^(-r * t))
        const denom = 1 + ((K - P0) / P0) * Math.exp(-r * currentT);
        popAtT = K / denom;
      }
      points.push({ t: Number(currentT.toFixed(3)), population: Number(popAtT) });
    }

    // final population is last point
    finalPop = points[points.length - 1].population;

    setResult(Number(finalPop.toFixed(6)));
    setSeries(points);
  }, [initialPopulation, growthRate, time, model, carryingCapacity]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Population Growth Calculator Results',
      inputs: [
        { label: 'Initial Population', value: initialPopulation },
        { label: 'Growth Rate (r)', value: growthRate },
        { label: 'Time Period', value: time },
        { label: 'Model', value: model },
        ...(model === 'logistic' ? [{ label: 'Carrying Capacity (K)', value: carryingCapacity }] : []),
      ],
      results: [{ label: 'Population at t', value: String(result) }],
    });
  };

  const chartData = series.map((p) => ({ time: p.t, population: p.population }));

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='initialPopulation'>Initial Population</Label>
        <Input
          id='initialPopulation'
          type='number'
          value={initialPopulation}
          onChange={(e) => setInitialPopulation(e.target.value)}
          min='0'
          step='1'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='growthRate'>Growth Rate (r)</Label>
          <Input
            id='growthRate'
            type='number'
            value={growthRate}
            onChange={(e) => setGrowthRate(e.target.value)}
            step='0.001'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='time'>Time Period</Label>
          <Input
            id='time'
            type='number'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min='0'
            step='0.1'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className='space-y-2'>
          <Label htmlFor='model'>Model</Label>
          <Select id='model' value={model} onChange={(e) => setModel(e.target.value as ModelType)}>
            <option value='exponential'>Exponential</option>
            <option value='logistic'>Logistic</option>
          </Select>
        </div>

        {model === 'logistic' ? (
          <div className='space-y-2'>
            <Label htmlFor='carryingCapacity'>Carrying Capacity (K)</Label>
            <Input
              id='carryingCapacity'
              type='number'
              value={carryingCapacity}
              onChange={(e) => setCarryingCapacity(e.target.value)}
              min='1'
              step='1'
            />
          </div>
        ) : (
          <div className='space-y-2'>
            <Label htmlFor='placeholder'>&nbsp;</Label>
            <div className='text-sm text-gray-500 py-2 px-3 border rounded'>
              Using exponential model
            </div>
          </div>
        )}
      </div>
    </>
  );

  const results = result !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Estimated Population</div>
      <div className='text-5xl font-bold text-green-800 my-3'>
        {Number(result).toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div className='text-lg text-gray-700'>
        Model: {model === 'exponential' ? 'Exponential' : 'Logistic'}
        {model === 'logistic' ? ` • K = ${Number(carryingCapacity).toLocaleString()}` : ''}
      </div>
    </div>
  ) : (
    <div className='text-center text-sm text-red-600'>Please enter valid inputs</div>
  );

  const charts = showCharts && series.length > 0 ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Population Over Time</h3>
      <ResponsiveContainer width='100%' height={240}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='time' label={{ value: 'Time', position: 'insideBottomRight', offset: -5 }} />
          <YAxis />
          <Tooltip formatter={(value: number) => `${Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}`} />
          <Line type='monotone' dataKey='population' stroke='#10b981' dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Population Growth Calculator'
      description='Calculate population growth using exponential or logistic models.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
