'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CalculateMode = 'auto' | 'pressure' | 'volume' | 'moles' | 'temperature';

export default function IdealGasLawCalculator() {
  // Input states as strings to mirror the example pattern
  const [pressure, setPressure] = useState<string>('101325'); // Pa
  const [volume, setVolume] = useState<string>('1'); // m^3
  const [moles, setMoles] = useState<string>('1'); // mol
  const [temperature, setTemperature] = useState<string>('273'); // K

  const [calculateMode, setCalculateMode] = useState<CalculateMode>('auto');
  const [resultValue, setResultValue] = useState<number | null>(null);
  const [resultLabel, setResultLabel] = useState<string>('');
  const [resultNote, setResultNote] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Universal gas constant in J/(mol*K)
  const R = 8.31446261815324;

  useEffect(() => {
    // Parse inputs
    const p = parseFloat(pressure);
    const V = parseFloat(volume);
    const n = parseFloat(moles);
    const T = parseFloat(temperature);

    const pValid = !isNaN(p);
    const VValid = !isNaN(V) && V !== 0;
    const nValid = !isNaN(n) && n !== 0;
    const TValid = !isNaN(T) && T !== 0;

    // Helper to set result
    const setComputed = (label: string, value: number | null, note: string | null = null) => {
      if (value === null || isNaN(value) || !isFinite(value)) {
        setResultValue(null);
        setResultLabel('');
        setResultNote(null);
      } else {
        setResultValue(parseFloat(value.toFixed(6)));
        setResultLabel(label);
        setResultNote(note);
      }
    };

    // Calculation based on mode
    if (calculateMode === 'pressure') {
      if (nValid && TValid && VValid) {
        const calculatedP = (n * R * T) / V;
        setComputed('Calculated Pressure (Pa)', calculatedP, 'Computed using P = nRT / V');
      } else {
        setComputed('', null, 'Insufficient data to compute pressure');
      }
      return;
    }

    if (calculateMode === 'volume') {
      if (nValid && TValid && pValid && p !== 0) {
        const calculatedV = (n * R * T) / p;
        setComputed('Calculated Volume (m³)', calculatedV, 'Computed using V = nRT / P');
      } else {
        setComputed('', null, 'Insufficient data to compute volume');
      }
      return;
    }

    if (calculateMode === 'moles') {
      if (pValid && VValid && TValid) {
        const calculatedN = (p * V) / (R * T);
        setComputed('Calculated Moles (mol)', calculatedN, 'Computed using n = PV / (RT)');
      } else {
        setComputed('', null, 'Insufficient data to compute moles');
      }
      return;
    }

    if (calculateMode === 'temperature') {
      if (pValid && VValid && nValid) {
        const calculatedT = (p * V) / (n * R);
        setComputed('Calculated Temperature (K)', calculatedT, 'Computed using T = PV / (nR)');
      } else {
        setComputed('', null, 'Insufficient data to compute temperature');
      }
      return;
    }

    // Auto mode: if exactly one input is missing, compute that one; otherwise compute pressure from others as a consistency check
    const missing = [] as string[];
    if (!pValid) missing.push('pressure');
    if (!VValid) missing.push('volume');
    if (!nValid) missing.push('moles');
    if (!TValid) missing.push('temperature');

    if (missing.length === 1) {
      const miss = missing[0];
      if (miss === 'pressure') {
        if (nValid && TValid && VValid) {
          const calculatedP = (n * R * T) / V;
          setComputed('Calculated Pressure (Pa)', calculatedP, 'Automatically computed missing pressure');
        } else {
          setComputed('', null, 'Insufficient data');
        }
      } else if (miss === 'volume') {
        if (nValid && TValid && pValid && p !== 0) {
          const calculatedV = (n * R * T) / p;
          setComputed('Calculated Volume (m³)', calculatedV, 'Automatically computed missing volume');
        } else {
          setComputed('', null, 'Insufficient data');
        }
      } else if (miss === 'moles') {
        if (pValid && VValid && TValid) {
          const calculatedN = (p * V) / (R * T);
          setComputed('Calculated Moles (mol)', calculatedN, 'Automatically computed missing moles');
        } else {
          setComputed('', null, 'Insufficient data');
        }
      } else if (miss === 'temperature') {
        if (pValid && VValid && nValid) {
          const calculatedT = (p * V) / (n * R);
          setComputed('Calculated Temperature (K)', calculatedT, 'Automatically computed missing temperature');
        } else {
          setComputed('', null, 'Insufficient data');
        }
      }
    } else if (missing.length === 0) {
      // All provided: compute pressure from n, R, T, V and show comparison with provided pressure
      if (V === 0) {
        setComputed('', null, 'Volume cannot be zero');
        return;
      }
      const calculatedP = (n * R * T) / V;
      const note = pValid ? `Computed pressure vs provided pressure. Difference: ${((calculatedP - p) / (p || 1) * 100).toFixed(3)}%` : null;
      setComputed('Calculated Pressure (Pa)', calculatedP, note);
    } else {
      // More than one missing: not enough data
      setComputed('', null, 'Provide at least three of the four properties, or select a specific property to compute.');
    }
  }, [pressure, volume, moles, temperature, calculateMode]);

  const handleDownloadPDF = () => {
    if (resultValue === null) return;

    const inputs = [
      { label: 'Pressure (Pa)', value: pressure },
      { label: 'Volume (m³)', value: volume },
      { label: 'Number of Moles', value: moles },
      { label: 'Temperature (K)', value: temperature },
      { label: 'Mode', value: calculateMode },
    ];

    const results = [
      { label: resultLabel || 'Result', value: `${resultValue} ${resultLabel.includes('Pressure') ? 'Pa' : resultLabel.includes('Volume') ? 'm³' : resultLabel.includes('Moles') ? 'mol' : resultLabel.includes('Temperature') ? 'K' : ''}` },
    ];

    if (resultNote) results.push({ label: 'Note', value: resultNote });

    generateCalculatorPDF({
      title: 'Ideal Gas Law Calculator Results',
      inputs,
      results,
    });
  };

  const chartData = [
    { label: 'Pressure', value: (() => { const v = parseFloat(pressure); return isNaN(v) ? 0 : v; })(), unit: 'Pa' },
    { label: 'Volume', value: (() => { const v = parseFloat(volume); return isNaN(v) ? 0 : v; })(), unit: 'm³' },
    { label: 'Moles', value: (() => { const v = parseFloat(moles); return isNaN(v) ? 0 : v; })(), unit: 'mol' },
    { label: 'Temp', value: (() => { const v = parseFloat(temperature); return isNaN(v) ? 0 : v; })(), unit: 'K' },
  ];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="pressure">Pressure (Pa)</Label>
        <Input
          id="pressure"
          type="number"
          value={pressure}
          onChange={(e) => setPressure(e.target.value)}
          placeholder="Optional - leave empty to compute"
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="volume">Volume (m³)</Label>
        <Input
          id="volume"
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="Optional - leave empty to compute"
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="moles">Number of Moles</Label>
        <Input
          id="moles"
          type="number"
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
          placeholder="Optional - leave empty to compute"
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="temperature">Temperature (K)</Label>
        <Input
          id="temperature"
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mode">Compute</Label>
        <Select
          id="mode"
          value={calculateMode}
          onChange={(e) => setCalculateMode(e.target.value as CalculateMode)}
        >
          <option value="auto">Auto (compute missing or check consistency)</option>
          <option value="pressure">Pressure (compute P)</option>
          <option value="volume">Volume (compute V)</option>
          <option value="moles">Moles (compute n)</option>
          <option value="temperature">Temperature (compute T)</option>
        </Select>
      </div>
    </>
  );

  const results = resultValue !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">{resultLabel}</div>
      <div className="text-4xl font-bold text-blue-900 my-3">{resultValue.toLocaleString()}</div>
      <div className="text-sm text-gray-700">{resultLabel.includes('Pressure') ? 'Pa' : resultLabel.includes('Volume') ? 'm³' : resultLabel.includes('Moles') ? 'mol' : resultLabel.includes('Temperature') ? 'K' : ''}</div>
      {resultNote ? <div className="mt-2 text-xs text-gray-500">{resultNote}</div> : null}
    </div>
  ) : (
    <div className="text-center text-sm text-gray-500">Provide sufficient inputs to see a result.</div>
  );

  const charts = showCharts && resultValue !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Gas Properties Overview</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Ideal Gas Law Calculator"
      description="Calculate gas properties using PV = nRT. Provide three of four properties to compute the fourth, or use auto mode to check consistency."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
