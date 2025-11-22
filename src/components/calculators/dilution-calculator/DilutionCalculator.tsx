'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DilutionCalculator() {
  const [initialConcentration, setInitialConcentration] = useState<string>('1000');
  const [finalConcentration, setFinalConcentration] = useState<string>('100');
  const [volume, setVolume] = useState<string>('10');

  const [stockVolume, setStockVolume] = useState<number | null>(null); // V1 in mL
  const [diluentVolume, setDiluentVolume] = useState<number | null>(null); // V2 - V1
  const [dilutionFactor, setDilutionFactor] = useState<number | null>(null); // C1 / C2
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const c1 = parseFloat(initialConcentration);
    const c2 = parseFloat(finalConcentration);
    const v2 = parseFloat(volume);

    if (!isNaN(c1) && !isNaN(c2) && !isNaN(v2) && c1 > 0 && c2 > 0 && v2 > 0) {
      const v1Raw = (c2 * v2) / c1; // C1 * V1 = C2 * V2 => V1 = (C2 * V2) / C1
      const v1 = parseFloat(v1Raw.toFixed(6));
      const diluent = parseFloat((v2 - v1).toFixed(6));
      const factor = parseFloat((c1 / c2).toFixed(6));

      setStockVolume(Number.isFinite(v1) ? v1 : null);
      setDiluentVolume(Number.isFinite(diluent) ? diluent : null);
      setDilutionFactor(Number.isFinite(factor) ? factor : null);
    } else {
      setStockVolume(null);
      setDiluentVolume(null);
      setDilutionFactor(null);
    }
  }, [initialConcentration, finalConcentration, volume]);

  const handleDownloadPDF = () => {
    if (stockVolume === null || dilutionFactor === null) return;

    generateCalculatorPDF({
      title: 'Dilution Calculator Results',
      inputs: [
        { label: 'Initial Concentration', value: initialConcentration },
        { label: 'Final Concentration', value: finalConcentration },
        { label: 'Final Volume (mL)', value: volume },
      ],
      results: [
        { label: 'Stock Volume (mL)', value: `${stockVolume} mL` },
        { label: 'Diluent Volume (mL)', value: `${diluentVolume} mL` },
        { label: 'Dilution Factor (C1/C2)', value: `${dilutionFactor}×` },
        { label: 'Dilution Ratio (1 : X)', value: `1 : ${dilutionFactor}` },
      ],
    });
  };

  const chartData = (stockVolume !== null && diluentVolume !== null && dilutionFactor !== null) ? [
    { label: 'Initial Conc', value: parseFloat(initialConcentration) || 0, type: 'conc' },
    { label: 'Final Conc', value: parseFloat(finalConcentration) || 0, type: 'conc' },
    { label: 'Stock Vol (mL)', value: stockVolume, type: 'vol' },
    { label: 'Diluent Vol (mL)', value: Math.max(0, diluentVolume), type: 'vol' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="initialConcentration">Initial Concentration</Label>
        <Input
          id="initialConcentration"
          type="number"
          value={initialConcentration}
          onChange={(e) => setInitialConcentration(e.target.value)}
          min="0"
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalConcentration">Final Concentration</Label>
        <Input
          id="finalConcentration"
          type="number"
          value={finalConcentration}
          onChange={(e) => setFinalConcentration(e.target.value)}
          min="0"
          step="any"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="volume">Final Volume (mL)</Label>
        <Input
          id="volume"
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          min="0"
          step="any"
        />
      </div>
    </>
  );

  const results = (stockVolume !== null && dilutionFactor !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="text-3xl font-bold text-blue-900 my-2">
        {stockVolume.toLocaleString()} mL
      </div>
      <div className="text-sm text-gray-700 mb-4">Stock Volume (V1)</div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-500">Diluent Volume</div>
          <div className="text-xl font-semibold text-gray-900">{(diluentVolume !== null ? diluentVolume : 0).toLocaleString()} mL</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-xs text-gray-500">Dilution Factor (C1 / C2)</div>
          <div className="text-xl font-semibold text-gray-900">{dilutionFactor}×</div>
          <div className="text-sm text-gray-600 mt-1">Ratio: 1 : {dilutionFactor}</div>
        </div>
      </div>

      {stockVolume > parseFloat(volume) && (
        <div className="mt-4 text-sm text-red-700">
          Warning: Calculated stock volume exceeds the desired final volume. This indicates the requested final concentration is higher than the initial concentration (concentration increase required).
        </div>
      )}
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Dilution Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const label: string = props.payload.label || '';
            if (label.toLowerCase().includes('conc')) return `${value.toLocaleString()}`;
            return `${value.toLocaleString()} mL`;
          }} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Dilution Calculator"
      description="Calculate dilution ratios and concentrations using the C1V1 = C2V2 formula. Enter the initial concentration, desired final concentration, and final volume to get the required stock volume and diluent volume."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
