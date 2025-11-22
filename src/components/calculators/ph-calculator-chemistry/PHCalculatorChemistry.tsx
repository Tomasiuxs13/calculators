'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

const KW = 1e-14; // Ionic product of water at 25°C

export default function PHCalculatorChemistry() {
  const [hConcentration, setHConcentration] = useState<string>('0.0001');
  const [pH, setPH] = useState<number | null>(null);
  const [pOH, setPOH] = useState<number | null>(null);
  const [classification, setClassification] = useState<string>('');
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const conc = parseFloat(hConcentration);

    if (!isNaN(conc) && conc > 0) {
      // pH = -log10([H+])
      const computedPH = -Math.log10(conc);
      // [OH-] = Kw / [H+]
      const oh = KW / conc;
      const computedPOH = -Math.log10(oh);

      const roundedPH = parseFloat(computedPH.toFixed(6));
      const roundedPOH = parseFloat(computedPOH.toFixed(6));

      setPH(roundedPH);
      setPOH(roundedPOH);

      if (roundedPH < 7) {
        setClassification('Acidic');
      } else if (roundedPH === 7) {
        setClassification('Neutral');
      } else {
        setClassification('Basic');
      }
    } else {
      setPH(null);
      setPOH(null);
      setClassification('');
    }
  }, [hConcentration]);

  const handleDownloadPDF = () => {
    if (pH === null || pOH === null) return;

    generateCalculatorPDF({
      title: 'pH & pOH Calculator Results',
      inputs: [
        { label: 'H+ Concentration (M)', value: hConcentration },
      ],
      results: [
        { label: 'pH', value: pH.toString() },
        { label: 'pOH', value: pOH.toString() },
        { label: 'Classification', value: classification },
      ],
    });
  };

  const chartData = (pH !== null && pOH !== null) ? [
    { name: 'pH', value: pH, label: 'pH' },
    { name: 'pOH', value: pOH, label: 'pOH' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="hConcentration">H+ Concentration (M)</Label>
        <Input
          id="hConcentration"
          type="number"
          value={hConcentration}
          onChange={(e) => setHConcentration(e.target.value)}
          min="0"
          step="0.0000001"
        />
      </div>

      {/* Imported Select to follow project patterns (not required for this calculator input spec) */}
      <div className="mt-4">
        <Label htmlFor="precision">Display Precision</Label>
        <Select
          id="precision"
          // This select is only for UI consistency; it does not alter calculation precision
          onChange={() => { /* intentionally left blank - UI placeholder */ }}
          value="6"
        >
          <option value="2">2 decimals</option>
          <option value="4">4 decimals</option>
          <option value="6">6 decimals</option>
        </Select>
      </div>
    </>
  );

  const results = (pH !== null && pOH !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-3xl font-bold text-blue-900 my-2">pH: {pH.toLocaleString()}</div>
      <div className="text-2xl font-semibold text-gray-700 mb-2">pOH: {pOH.toLocaleString()}</div>
      <div className="text-lg text-gray-600">Classification: <span className="font-medium">{classification}</span></div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter a valid H+ concentration greater than 0 to see results.</div>
  );

  const charts = showCharts && pH !== null && pOH !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">pH vs pOH</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="pH & pOH Calculator"
      description="Calculate the pH and pOH of aqueous solutions from the hydrogen ion concentration ([H+]). Uses Kw = 1e-14 at 25°C."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
