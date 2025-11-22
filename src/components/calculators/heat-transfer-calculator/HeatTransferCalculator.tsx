'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function HeatTransferCalculator() {
  const [mass, setMass] = useState<string>('1');
  const [specificHeat, setSpecificHeat] = useState<string>('4186');
  const [tempChange, setTempChange] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(mass);
    const c = parseFloat(specificHeat);
    const dT = parseFloat(tempChange);

    // mass and specific heat must be non-negative and numeric; temp change may be negative
    if (!isNaN(m) && !isNaN(c) && !isNaN(dT) && m >= 0 && c >= 0) {
      const q = m * c * dT; // Q = m * c * ΔT (in Joules if SI units)
      setResult(parseFloat(q.toFixed(6)));
    } else {
      setResult(null);
    }
  }, [mass, specificHeat, tempChange]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Heat Transfer Results',
      inputs: [
        { label: 'Mass (kg)', value: mass },
        { label: 'Specific Heat (J/kg·K)', value: specificHeat },
        { label: 'Temperature Change (K)', value: tempChange },
      ],
      results: [
        { label: 'Heat (Q)', value: `${result} J` },
      ],
    });
  };

  const chartData = (() => {
    if (result === null) return [];
    const m = parseFloat(mass);
    return [
      { label: 'Total Heat (J)', value: result, unit: 'J' },
      { label: 'Heat per kg (J/kg)', value: m > 0 ? result / m : 0, unit: 'J/kg' },
    ];
  })();

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mass">Mass (kg)</Label>
          <Input
            id="mass"
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            min="0"
            step="any"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specificHeat">Specific Heat (J/kg·K)</Label>
          <Input
            id="specificHeat"
            type="number"
            value={specificHeat}
            onChange={(e) => setSpecificHeat(e.target.value)}
            min="0"
            step="any"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tempChange">Temperature Change (K)</Label>
          <Input
            id="tempChange"
            type="number"
            value={tempChange}
            onChange={(e) => setTempChange(e.target.value)}
            step="any"
          />
        </div>
      </div>

      {/* Placeholder Select import usage to follow example patterns; not used for this calculator */}
      <div className="hidden">
        <Label htmlFor="placeholder">Placeholder Select</Label>
        <Select id="placeholder" value="" onChange={() => {}}>
          <option value="">None</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {Number.isFinite(result) ? result.toLocaleString() : '—'}
      </div>
      <div className="text-lg text-gray-700">J</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Heat Transfer Visualization</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Heat Transfer Calculator"
      description="Calculate heat transfer using Q = m·c·ΔT. Enter mass (kg), specific heat (J/kg·K), and temperature change (K) — the result updates automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
