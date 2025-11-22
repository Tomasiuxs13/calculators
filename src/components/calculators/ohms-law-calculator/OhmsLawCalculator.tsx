'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState<string>('');
  const [current, setCurrent] = useState<string>('2');
  const [resistance, setResistance] = useState<string>('10');
  const [result, setResult] = useState<{ voltage: number | null; current: number | null; resistance: number | null }>({ voltage: null, current: null, resistance: null });

  useEffect(() => {
    const v = voltage ? parseFloat(voltage) : null;
    const i = current ? parseFloat(current) : null;
    const r = resistance ? parseFloat(resistance) : null;

    if ((v === null || isNaN(v)) && (i === null || isNaN(i)) && (r === null || isNaN(r))) {
      setResult({ voltage: null, current: null, resistance: null });
      return;
    }

    if (v !== null && !isNaN(v) && i !== null && !isNaN(i)) {
      setResult({ voltage: v, current: i, resistance: v / i });
    } else if (v !== null && !isNaN(v) && r !== null && !isNaN(r)) {
      setResult({ voltage: v, current: v / r, resistance: r });
    } else if (i !== null && !isNaN(i) && r !== null && !isNaN(r)) {
      setResult({ voltage: i * r, current: i, resistance: r });
    } else {
      setResult({ voltage: null, current: null, resistance: null });
    }
  }, [voltage, current, resistance]);

  const handleDownloadPDF = () => {
    generateCalculatorPDF({
      title: 'Ohm’s Law Calculator Results',
      inputs: [
        { label: 'Voltage (V)', value: voltage },
        { label: 'Current (A)', value: current },
        { label: 'Resistance (Ω)', value: resistance },
      ],
      results: [
        { label: 'Calculated Voltage (V)', value: `${result.voltage !== null ? result.voltage.toFixed(2) : 'N/A'}` },
        { label: 'Calculated Current (A)', value: `${result.current !== null ? result.current.toFixed(2) : 'N/A'}` },
        { label: 'Calculated Resistance (Ω)', value: `${result.resistance !== null ? result.resistance.toFixed(2) : 'N/A'}` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="voltage">Voltage (V) - leave empty to calculate</Label>
        <Input
          id="voltage"
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="current">Current (A) - leave empty to calculate</Label>
        <Input
          id="current"
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resistance">Resistance (Ω) - leave empty to calculate</Label>
        <Input
          id="resistance"
          type="number"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          step="0.01"
        />
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.voltage !== null ? `Voltage: ${result.voltage.toFixed(2)} V` : 'N/A'}
      </div>
      <div className="text-lg text-gray-700">Current: {result.current !== null ? `${result.current.toFixed(2)} A` : 'N/A'}</div>
      <div className="text-lg text-gray-700">Resistance: {result.resistance !== null ? `${result.resistance.toFixed(2)} Ω` : 'N/A'}</div>
    </div>
  );

  return (
    <CalculatorLayout
      title="Ohm’s Law Calculator"
      description="Calculate voltage, current, or resistance using Ohm's Law (V = IR)."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
