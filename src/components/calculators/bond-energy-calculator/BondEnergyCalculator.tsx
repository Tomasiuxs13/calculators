'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type BondEnergyCalculatorState = {
  bondsBroken: string;
  bondsFormed: string;
};

export default function BondEnergyCalculator() {
  const [bondsBroken, setBondsBroken] = useState<string>('436, 498');
  const [bondsFormed, setBondsFormed] = useState<string>('463, 463');
  const [totalBroken, setTotalBroken] = useState<number | null>(null);
  const [totalFormed, setTotalFormed] = useState<number | null>(null);
  const [deltaH, setDeltaH] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);
  // optional unit selector included to satisfy import pattern and to show flexibility
  const [unit, setUnit] = useState<'kJ/mol' | 'J/mol'>('kJ/mol');

  useEffect(() => {
    // Parse comma-separated lists into number arrays
    const parseList = (input: string) =>
      input
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .map((s) => parseFloat(s))
        .filter((n) => !isNaN(n));

    const brokenArray = parseList(bondsBroken);
    const formedArray = parseList(bondsFormed);

    const sum = (arr: number[]) => arr.reduce((acc, v) => acc + v, 0);

    const brokenSum = brokenArray.length > 0 ? sum(brokenArray) : 0;
    const formedSum = formedArray.length > 0 ? sum(formedArray) : 0;

    // If unit is J/mol, convert to kJ/mol for display/consistency
    const toKJ = (value: number) => (unit === 'J/mol' ? value / 1000 : value);

    const brokenKJ = toKJ(brokenSum);
    const formedKJ = toKJ(formedSum);

    const computedDelta = parseFloat((brokenKJ - formedKJ).toFixed(2));

    setTotalBroken(parseFloat(brokenKJ.toFixed(2)));
    setTotalFormed(parseFloat(formedKJ.toFixed(2)));
    setDeltaH(isNaN(computedDelta) ? null : computedDelta);
  }, [bondsBroken, bondsFormed, unit]);

  const handleDownloadPDF = () => {
    if (totalBroken === null || totalFormed === null || deltaH === null) return;

    generateCalculatorPDF({
      title: 'Bond Energy & Enthalpy Calculation',
      inputs: [
        { label: 'Bonds Broken (inputs)', value: bondsBroken },
        { label: 'Bonds Formed (inputs)', value: bondsFormed },
        { label: 'Unit', value: unit },
      ],
      results: [
        { label: 'Total Energy of Bonds Broken', value: `${totalBroken} kJ/mol` },
        { label: 'Total Energy of Bonds Formed', value: `${totalFormed} kJ/mol` },
        { label: 'ΔH (Reaction Enthalpy)', value: `${deltaH} kJ/mol` },
      ],
    });
  };

  const chartData = deltaH !== null ? [
    { name: 'Bonds Broken', value: totalBroken || 0, label: 'Broken' },
    { name: 'Bonds Formed', value: totalFormed || 0, label: 'Formed' },
    { name: 'Net ΔH', value: deltaH, label: 'ΔH' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="bondsBroken">Bonds Broken (kJ/mol, comma-separated)</Label>
        <Input
          id="bondsBroken"
          type="text"
          value={bondsBroken}
          onChange={(e) => setBondsBroken(e.target.value)}
          placeholder="e.g. 436, 498"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bondsFormed">Bonds Formed (kJ/mol, comma-separated)</Label>
        <Input
          id="bondsFormed"
          type="text"
          value={bondsFormed}
          onChange={(e) => setBondsFormed(e.target.value)}
          placeholder="e.g. 463, 463"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as 'kJ/mol' | 'J/mol')}
        >
          <option value="kJ/mol">kJ/mol (recommended)</option>
          <option value="J/mol">J/mol (entered values will be converted)</option>
        </Select>
      </div>
    </>
  );

  const results = deltaH !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 items-center">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Total Bonds Broken</div>
          <div className="text-2xl font-bold text-red-600 mt-1">{(totalBroken ?? 0).toLocaleString()}</div>
          <div className="text-sm text-gray-700">kJ/mol</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-xs text-gray-500">Total Bonds Formed</div>
          <div className="text-2xl font-bold text-green-600 mt-1">{(totalFormed ?? 0).toLocaleString()}</div>
          <div className="text-sm text-gray-700">kJ/mol</div>
        </div>

        <div className="p-4 rounded-lg" style={{ backgroundColor: '#f7f9ff' }}>
          <div className="text-xs text-gray-500">ΔH (Reaction Enthalpy)</div>
          <div className={`text-2xl font-bold mt-1 ${deltaH > 0 ? 'text-red-700' : deltaH < 0 ? 'text-green-700' : 'text-gray-800'}`}>
            {deltaH.toLocaleString()} kJ/mol
          </div>
          <div className="text-sm text-gray-700">
            {deltaH > 0 ? 'Endothermic (net energy absorbed)' : deltaH < 0 ? 'Exothermic (net energy released)' : 'Thermoneutral'}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && deltaH !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Bond Energy Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kJ/mol`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Bond Energy Calculator"
      description="Calculate bond energy totals and reaction enthalpy (ΔH) from lists of bonds broken and formed. Enter bond energies as comma-separated values (kJ/mol)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
