'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultType = {
  totalDoseMg: number;
  volumeMl: number;
} | null;

export default function DrugDosageCalculator() {
  const [weight, setWeight] = useState<string>('70');
  const [dosePerKg, setDosePerKg] = useState<string>('10');
  const [concentration, setConcentration] = useState<string>('100');
  const [result, setResult] = useState<ResultType>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const w = parseFloat(weight);
    const d = parseFloat(dosePerKg);
    const c = parseFloat(concentration);

    if (!isNaN(w) && w >= 0 && !isNaN(d) && d >= 0 && !isNaN(c) && c > 0) {
      const totalDoseMg = w * d; // mg
      const volumeMl = totalDoseMg / c; // mL since concentration is mg/mL

      setResult({
        totalDoseMg: parseFloat(totalDoseMg.toFixed(2)),
        volumeMl: parseFloat(volumeMl.toFixed(4)),
      });
    } else {
      setResult(null);
    }
  }, [weight, dosePerKg, concentration]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Drug Dosage Calculator Results',
      inputs: [
        { label: 'Weight (kg)', value: weight },
        { label: 'Dose per kg (mg/kg)', value: dosePerKg },
        { label: 'Medication Concentration (mg/mL)', value: concentration },
      ],
      results: [
        { label: 'Total Dose (mg)', value: `${result.totalDoseMg} mg` },
        { label: 'Volume to Administer (mL)', value: `${result.volumeMl} mL` },
      ],
    });
  };

  const chartData = result !== null ? [
    { name: 'Total Dose', value: result.totalDoseMg, unit: 'mg' },
    { name: 'Volume', value: result.volumeMl, unit: 'mL' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="weight">Weight (kg)</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="dosePerKg">Dose per kg (mg/kg)</Label>
        <Input
          id="dosePerKg"
          type="number"
          value={dosePerKg}
          onChange={(e) => setDosePerKg(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="concentration">Medication Concentration (mg/mL)</Label>
        <Input
          id="concentration"
          type="number"
          value={concentration}
          onChange={(e) => setConcentration(e.target.value)}
          min="0.0001"
          step="0.1"
        />
      </div>

      {/* Select is imported to follow project patterns even if not used in this simple calculator */}
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-3xl font-bold text-blue-900 my-2">
        {result.totalDoseMg.toLocaleString(undefined, { maximumFractionDigits: 2 })} mg
      </div>
      <div className="text-lg text-gray-700 mb-3">Total Dose</div>

      <div className="text-3xl font-bold text-blue-900 my-2">
        {result.volumeMl.toLocaleString(undefined, { maximumFractionDigits: 4 })} mL
      </div>
      <div className="text-lg text-gray-700">Volume to Administer</div>

      <div className="text-sm text-red-600 mt-4">
        Medical Disclaimer: This calculator provides an estimate only. Consult a qualified healthcare professional before administering medication.
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Dosage Visualization</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => Math.abs(d.value - value) < 1e-6)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Drug Dosage Calculator"
      description="Calculate medication dosage based on weight and concentration. Medical disclaimer included."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
