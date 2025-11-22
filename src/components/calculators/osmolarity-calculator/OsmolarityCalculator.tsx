'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function OsmolarityCalculator() {
  const [molarity, setMolarity] = useState<string>('0.1');
  const [particles, setParticles] = useState<string>('2');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const m = parseFloat(molarity);
    const p = parseFloat(particles);

    if (!isNaN(m) && !isNaN(p) && m >= 0 && p >= 0) {
      // Osmolarity (Osm/L) = molarity (mol/L) * particles (osmoles per mole)
      const osm = m * p;
      setResult(parseFloat(osm.toFixed(6))); // keep precision consistent
    } else {
      setResult(null);
    }
  }, [molarity, particles]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Osmolarity Calculator Results',
      inputs: [
        { label: 'Molarity (M)', value: molarity },
        { label: 'Particles per Molecule', value: particles },
      ],
      results: [
        { label: 'Osmolarity', value: `${result} Osm/L` },
        { label: 'Osmolarity (mOsm/L)', value: `${(result * 1000).toFixed(3)} mOsm/L` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Molarity', value: parseFloat(molarity) || 0, unit: 'M' },
    { label: 'Osmolarity', value: result, unit: 'Osm/L' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="molarity">Molarity (M)</Label>
        <Input
          id="molarity"
          type="number"
          value={molarity}
          onChange={(e) => setMolarity(e.target.value)}
          min="0"
          step="0.000001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="particles">Number of Particles per Molecule</Label>
        <Input
          id="particles"
          type="number"
          value={particles}
          onChange={(e) => setParticles(e.target.value)}
          min="0"
          step="1"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Osm/L</div>
      <div className="mt-2 text-sm text-gray-600">({(result * 1000).toFixed(3)} mOsm/L)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Osmolarity Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = chartData.find(d => d.value === value)?.unit || '';
            // show more readable formatting for small molarity values
            if (unit === 'M') return [`${(value).toPrecision(6)} ${unit}`, name];
            return [`${value.toFixed(6)} ${unit}`, name];
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Osmolarity Calculator"
      description="Calculate the osmolarity of solutions from molarity and number of particles (osmoles per mole). Useful for microbiology and laboratory preparations."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
