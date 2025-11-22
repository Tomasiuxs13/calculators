'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'L' | 'mL' | 'uL';

const volumeConversions: Record<VolumeUnit, number> = {
  L: 1,
  mL: 0.001,
  uL: 0.000001,
};

export default function MolarityCalculator() {
  const [moles, setMoles] = useState<string>('0.5');
  const [volume, setVolume] = useState<string>('1');
  const [volumeUnit, setVolumeUnit] = useState<VolumeUnit>('L');
  const [molarity, setMolarity] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const molesNum = parseFloat(moles);
    const volumeNum = parseFloat(volume);

    if (!isNaN(molesNum) && !isNaN(volumeNum) && volumeNum > 0 && molesNum >= 0) {
      // Convert provided volume to base unit (liters) first
      const volumeInLiters = volumeNum * volumeConversions[volumeUnit];

      if (volumeInLiters > 0) {
        const calc = molesNum / volumeInLiters; // molarity in mol/L
        setMolarity(parseFloat(calc.toFixed(6)));
      } else {
        setMolarity(null);
      }
    } else {
      setMolarity(null);
    }
  }, [moles, volume, volumeUnit]);

  const handleDownloadPDF = () => {
    if (molarity === null) return;

    generateCalculatorPDF({
      title: 'Molarity Calculator Results',
      inputs: [
        { label: 'Moles of Solute', value: moles },
        { label: 'Volume of Solution', value: `${volume} ${volumeUnit}` },
      ],
      results: [
        { label: 'Molarity', value: `${molarity} mol/L` },
      ],
    });
  };

  const molesNum = parseFloat(moles) || 0;

  const chartData = molarity !== null ? [
    { label: 'Moles', value: molesNum, unit: 'mol' },
    { label: 'Molarity (mol/L)', value: molarity, unit: 'mol/L' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='moles'>Moles of Solute</Label>
        <Input
          id='moles'
          type='number'
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
          min='0'
          step='0.0001'
        />
      </div>

      <div className='grid grid-cols-3 gap-4 items-end'>
        <div className='col-span-2 space-y-2'>
          <Label htmlFor='volume'>Volume of Solution</Label>
          <Input
            id='volume'
            type='number'
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            min='0'
            step='0.001'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='volumeUnit'>Unit</Label>
          <Select
            id='volumeUnit'
            value={volumeUnit}
            onChange={(e) => setVolumeUnit(e.target.value as VolumeUnit)}
          >
            <option value='L'>Liters (L)</option>
            <option value='mL'>Milliliters (mL)</option>
            <option value='uL'>Microliters (µL)</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = molarity !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Result</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        {molarity.toLocaleString()}
      </div>
      <div className='text-lg text-gray-700'>mol/L</div>
      <div className='mt-3 text-sm text-gray-600'>
        Based on {molesNum.toLocaleString()} mol and {parseFloat(volume).toLocaleString()} {volumeUnit}
      </div>
    </div>
  ) : null;

  const charts = showCharts && molarity !== null ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Moles vs Molarity</h3>
      <ResponsiveContainer width='100%' height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(4)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Molarity Calculator'
      description='Calculate molarity (concentration) of solutions.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
