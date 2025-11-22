'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DisplayUnit = 'kJ/mol' | 'J/mol';

export default function GibbsFreeEnergyCalculator() {
  const [enthalpy, setEnthalpy] = useState<string>('-100'); // kJ/mol
  const [entropy, setEntropy] = useState<string>('50'); // J/mol·K
  const [temperature, setTemperature] = useState<string>('298'); // K
  const [displayUnit, setDisplayUnit] = useState<DisplayUnit>('kJ/mol');

  const [tDeltaS_kJ, setTDeltaS_kJ] = useState<number | null>(null);
  const [deltaG_kJ, setDeltaG_kJ] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const h = parseFloat(enthalpy);
    const s = parseFloat(entropy);
    const t = parseFloat(temperature);

    if (!isNaN(h) && !isNaN(s) && !isNaN(t)) {
      // Convert entropy (J/mol·K) * T (K) => J/mol, then to kJ/mol by dividing by 1000
      const tds_kj = (s * t) / 1000;
      const dg_kj = h - tds_kj;
      setTDeltaS_kJ(parseFloat(tds_kj.toFixed(6)));
      setDeltaG_kJ(parseFloat(dg_kj.toFixed(6)));
    } else {
      setTDeltaS_kJ(null);
      setDeltaG_kJ(null);
    }
  }, [enthalpy, entropy, temperature]);

  const handleDownloadPDF = () => {
    if (deltaG_kJ === null || tDeltaS_kJ === null) return;

    const dgDisplay = displayUnit === 'kJ/mol' ? `${deltaG_kJ} kJ/mol` : `${(deltaG_kJ * 1000).toFixed(6)} J/mol`;
    const tdsDisplay = displayUnit === 'kJ/mol' ? `${tDeltaS_kJ} kJ/mol` : `${(tDeltaS_kJ * 1000).toFixed(6)} J/mol`;

    generateCalculatorPDF({
      title: 'Gibbs Free Energy Calculation Results',
      inputs: [
        { label: 'Enthalpy Change (ΔH)', value: `${enthalpy} kJ/mol` },
        { label: 'Entropy Change (ΔS)', value: `${entropy} J/mol·K` },
        { label: 'Temperature (T)', value: `${temperature} K` },
        { label: 'Display Unit', value: displayUnit },
      ],
      results: [
        { label: 'TΔS', value: tdsDisplay },
        { label: 'ΔG', value: dgDisplay },
      ],
    });
  };

  const chartData = deltaG_kJ !== null && tDeltaS_kJ !== null ? [
    { name: 'ΔH', value: displayUnit === 'kJ/mol' ? parseFloat(enthalpy) || 0 : (parseFloat(enthalpy) || 0) * 1000, label: 'Enthalpy' },
    { name: 'TΔS', value: displayUnit === 'kJ/mol' ? tDeltaS_kJ : tDeltaS_kJ * 1000, label: 'TΔS' },
    { name: 'ΔG', value: displayUnit === 'kJ/mol' ? deltaG_kJ : deltaG_kJ * 1000, label: 'ΔG' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="enthalpy">Enthalpy Change (kJ/mol)</Label>
        <Input
          id="enthalpy"
          type="number"
          value={enthalpy}
          onChange={(e) => setEnthalpy(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="entropy">Entropy Change (J/mol·K)</Label>
        <Input
          id="entropy"
          type="number"
          value={entropy}
          onChange={(e) => setEntropy(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="temperature">Temperature (K)</Label>
        <Input
          id="temperature"
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="displayUnit">Result Display Unit</Label>
        <Select
          id="displayUnit"
          value={displayUnit}
          onChange={(e) => setDisplayUnit(e.target.value as DisplayUnit)}
        >
          <option value="kJ/mol">kJ/mol</option>
          <option value="J/mol">J/mol</option>
        </Select>
      </div>
    </>
  );

  const results = deltaG_kJ !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Gibbs Free Energy (ΔG)</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {displayUnit === 'kJ/mol'
          ? deltaG_kJ.toLocaleString(undefined, { maximumFractionDigits: 6 })
          : (deltaG_kJ * 1000).toLocaleString(undefined, { maximumFractionDigits: 6 })}
      </div>
      <div className="text-lg text-gray-700">{displayUnit}</div>

      <div className="mt-4 text-sm text-gray-600">
        <div>TΔS = {displayUnit === 'kJ/mol' ? `${tDeltaS_kJ?.toLocaleString(undefined, { maximumFractionDigits: 6 })} kJ/mol` : `${(tDeltaS_kJ! * 1000).toLocaleString(undefined, { maximumFractionDigits: 6 })} J/mol`}</div>
        <div className="mt-2 text-gray-700">Formula: ΔG = ΔH - TΔS</div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && deltaG_kJ !== null && tDeltaS_kJ !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Energy Terms Comparison ({displayUnit})</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            const formatted = displayUnit === 'kJ/mol' ? `${value.toFixed(3)} kJ/mol` : `${value.toFixed(3)} J/mol`;
            return formatted;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Gibbs Free Energy Calculator"
      description="Calculate Gibbs free energy using ΔG = ΔH - TΔS. Enter enthalpy (kJ/mol), entropy (J/mol·K), and temperature (K)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
