'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ConcentrationUnit = 'M' | 'g/L' | '% w/v' | 'ppm';

type Results = {
  moles: number | null;
  molarity: number | null; // mol/L
  gPerL: number | null; // g/L
  percentWv: number | null; // g per 100 mL
  ppm: number | null; // approximated as mg/L
};

export default function SolutionConcentrationCalculator() {
  // Inputs as strings to preserve user typing behavior
  const [soluteMass, setSoluteMass] = useState<string>('10');
  const [solutionVolume, setSolutionVolume] = useState<string>('1');
  const [molarMass, setMolarMass] = useState<string>('58.5');

  // Which unit to highlight in the main result area
  const [displayUnit, setDisplayUnit] = useState<ConcentrationUnit>('M');

  const [results, setResults] = useState<Results>({
    moles: null,
    molarity: null,
    gPerL: null,
    percentWv: null,
    ppm: null,
  });

  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const mass = parseFloat(soluteMass);
    const volume = parseFloat(solutionVolume); // liters
    const mm = parseFloat(molarMass); // g/mol

    // Validate inputs: non-negative numbers and volume > 0 and molar mass > 0
    if ([mass, volume, mm].some((n) => Number.isNaN(n) || n < 0) || volume === 0 || mm === 0) {
      setResults({ moles: null, molarity: null, gPerL: null, percentWv: null, ppm: null });
      return;
    }

    // Calculations
    const moles = mass / mm; // mol
    const molarity = moles / volume; // mol/L
    const gPerL = mass / volume; // g/L
    const percentWv = gPerL * 0.1; // g per 100 mL (i.e., % w/v value)
    const ppm = gPerL * 1000; // mg/L approximated as ppm for dilute aqueous solutions

    setResults({
      moles: parseFloat(moles.toFixed(6)),
      molarity: parseFloat(molarity.toFixed(6)),
      gPerL: parseFloat(gPerL.toFixed(6)),
      percentWv: parseFloat(percentWv.toFixed(6)),
      ppm: parseFloat(ppm.toFixed(3)),
    });
  }, [soluteMass, solutionVolume, molarMass]);

  const handleDownloadPDF = () => {
    if (results.molarity === null) return;

    generateCalculatorPDF({
      title: 'Solution Concentration Results',
      inputs: [
        { label: 'Solute Mass (g)', value: soluteMass },
        { label: 'Solution Volume (L)', value: solutionVolume },
        { label: 'Molar Mass (g/mol)', value: molarMass },
        { label: 'Displayed Unit', value: displayUnit },
      ],
      results: [
        { label: 'Moles (mol)', value: results.moles?.toString() ?? '—' },
        { label: 'Molarity (mol/L)', value: results.molarity !== null ? `${results.molarity} M` : '—' },
        { label: 'Mass Concentration (g/L)', value: results.gPerL !== null ? `${results.gPerL} g/L` : '—' },
        { label: '% (w/v)', value: results.percentWv !== null ? `${results.percentWv} g/100 mL` : '—' },
        { label: 'Approx. ppm', value: results.ppm !== null ? `${results.ppm} ppm` : '—' },
      ],
    });
  };

  const chartData = results.molarity !== null ? [
    { label: 'Molarity (mol/L)', value: results.molarity },
    { label: 'g/L', value: results.gPerL ?? 0 },
    { label: 'ppm', value: results.ppm ?? 0 },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="soluteMass">Solute Mass (g)</Label>
        <Input
          id="soluteMass"
          type="number"
          value={soluteMass}
          onChange={(e) => setSoluteMass(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="solutionVolume">Solution Volume (L)</Label>
        <Input
          id="solutionVolume"
          type="number"
          value={solutionVolume}
          onChange={(e) => setSolutionVolume(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="molarMass">Molar Mass (g/mol)</Label>
        <Input
          id="molarMass"
          type="number"
          value={molarMass}
          onChange={(e) => setMolarMass(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="displayUnit">Display Unit</Label>
        <Select
          id="displayUnit"
          value={displayUnit}
          onChange={(e) => setDisplayUnit(e.target.value as ConcentrationUnit)}
        >
          <option value="M">M (mol/L)</option>
          <option value="g/L">g/L</option>
          <option value="% w/v">% (w/v)</option>
          <option value="ppm">ppm</option>
        </Select>
      </div>
    </>
  );

  const resultsDisplay = results.molarity !== null ? (() => {
    let mainValue: string = '—';
    let mainLabel: string = '';

    switch (displayUnit) {
      case 'M':
        mainValue = results.molarity!.toLocaleString();
        mainLabel = 'mol/L (M)';
        break;
      case 'g/L':
        mainValue = results.gPerL!.toLocaleString();
        mainLabel = 'g/L';
        break;
      case '% w/v':
        mainValue = results.percentWv!.toLocaleString();
        mainLabel = 'g per 100 mL (% w/v)';
        break;
      case 'ppm':
        mainValue = results.ppm!.toLocaleString();
        mainLabel = 'ppm (approx)';
        break;
    }

    return (
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Result</div>
        <div className="text-5xl font-bold text-blue-900 my-3">{mainValue}</div>
        <div className="text-lg text-gray-700">{mainLabel}</div>

        <div className="mt-6 text-left max-w-md mx-auto text-sm text-gray-600">
          <div className="mb-2"><strong>Moles:</strong> {results.moles} mol</div>
          <div className="mb-2"><strong>Mass concentration:</strong> {results.gPerL} g/L</div>
          <div className="mb-2"><strong>% (w/v):</strong> {results.percentWv} g/100 mL</div>
          <div className="mb-2"><strong>Approx. ppm:</strong> {results.ppm} ppm</div>
        </div>
      </div>
    );
  })() : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Concentration Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Solution Concentration Calculator"
      description="Calculate solution concentration expressed as molarity (M), mass concentration (g/L), % (w/v), and approximate ppm. Enter solute mass, solution volume, and molar mass — results update automatically."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
