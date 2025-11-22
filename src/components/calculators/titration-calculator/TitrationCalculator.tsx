'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type VolumeUnit = 'mL' | 'L';

export default function TitrationCalculator() {
  const [acidConcentration, setAcidConcentration] = useState<string>('0.1');
  const [acidVolume, setAcidVolume] = useState<string>('25');
  const [acidVolumeUnit, setAcidVolumeUnit] = useState<VolumeUnit>('mL');
  const [baseConcentration, setBaseConcentration] = useState<string>('0.1');

  const [molesAcid, setMolesAcid] = useState<number | null>(null);
  const [equivalenceVolumeBase_mL, setEquivalenceVolumeBase_mL] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const Ca = parseFloat(acidConcentration);
    const Va = parseFloat(acidVolume);
    const Cb = parseFloat(baseConcentration);

    if (isNaN(Ca) || isNaN(Va) || isNaN(Cb) || Ca < 0 || Va < 0 || Cb <= 0) {
      setMolesAcid(null);
      setEquivalenceVolumeBase_mL(null);
      return;
    }

    // Convert acid volume to liters (base calculation pattern: convert to base unit first)
    const Va_L = acidVolumeUnit === 'mL' ? Va / 1000 : Va;

    // Moles of acid = concentration (mol/L) * volume (L)
    const moles = Ca * Va_L;

    // Equivalence volume of base in liters = moles acid / base concentration
    const Ve_base_L = moles / Cb;

    // Convert equivalence volume to mL for display
    const Ve_base_mL = Ve_base_L * 1000;

    setMolesAcid(parseFloat(moles.toFixed(6)));
    setEquivalenceVolumeBase_mL(parseFloat(Ve_base_mL.toFixed(4)));
  }, [acidConcentration, acidVolume, acidVolumeUnit, baseConcentration]);

  const handleDownloadPDF = () => {
    if (molesAcid === null || equivalenceVolumeBase_mL === null) return;

    generateCalculatorPDF({
      title: 'Titration Calculator Results',
      inputs: [
        { label: 'Acid Concentration (M)', value: acidConcentration },
        { label: `Acid Volume (${acidVolumeUnit})`, value: acidVolume },
        { label: 'Base Concentration (M)', value: baseConcentration },
      ],
      results: [
        { label: 'Moles of Acid (mol)', value: `${molesAcid} mol` },
        { label: 'Equivalence Volume of Base', value: `${equivalenceVolumeBase_mL} mL` },
      ],
    });
  };

  const chartData = molesAcid !== null && equivalenceVolumeBase_mL !== null ? [
    { label: 'Acid (mol)', value: molesAcid, unit: 'mol' },
    // moles of base required at equivalence = molesAcid
    { label: 'Base Required (mol)', value: molesAcid, unit: 'mol' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="acidConcentration">Acid Concentration (M)</Label>
        <Input
          id="acidConcentration"
          type="number"
          value={acidConcentration}
          onChange={(e) => setAcidConcentration(e.target.value)}
          min="0"
          step="0.0001"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-2">
          <Label htmlFor="acidVolume">Acid Volume</Label>
          <Input
            id="acidVolume"
            type="number"
            value={acidVolume}
            onChange={(e) => setAcidVolume(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="acidVolumeUnit">Unit</Label>
          <Select
            id="acidVolumeUnit"
            value={acidVolumeUnit}
            onChange={(e) => setAcidVolumeUnit(e.target.value as VolumeUnit)}
          >
            <option value="mL">mL</option>
            <option value="L">L</option>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="baseConcentration">Base Concentration (M)</Label>
        <Input
          id="baseConcentration"
          type="number"
          value={baseConcentration}
          onChange={(e) => setBaseConcentration(e.target.value)}
          min="0"
          step="0.0001"
        />
      </div>
    </>
  );

  const results = molesAcid !== null && equivalenceVolumeBase_mL !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Equivalence Point</div>
      <div className="text-4xl font-bold text-blue-900 my-3">
        {equivalenceVolumeBase_mL.toLocaleString()} mL
      </div>
      <div className="text-sm text-gray-700 mb-4">Volume of base required to neutralize the acid</div>

      <div className="text-sm text-gray-600 mb-2">Moles of Acid</div>
      <div className="text-2xl font-semibold text-gray-800">{molesAcid.toLocaleString()} mol</div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter valid positive values to see results.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Titration Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(6)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Titration Calculator"
      description="Calculate titration volumes and equivalence points. Enter the acid concentration, acid volume, and base concentration to compute the moles of acid and the volume of base required for neutralization."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
