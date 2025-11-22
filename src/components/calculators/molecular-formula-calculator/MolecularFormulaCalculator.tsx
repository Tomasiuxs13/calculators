'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ElementCounts = Record<string, number>;

// Partial atomic mass table for common elements (g/mol)
const ATOMIC_MASSES: Record<string, number> = {
  H: 1.00794,
  He: 4.002602,
  Li: 6.941,
  Be: 9.012182,
  B: 10.811,
  C: 12.0107,
  N: 14.0067,
  O: 15.9994,
  F: 18.9984032,
  Ne: 20.1797,
  Na: 22.98976928,
  Mg: 24.3050,
  Al: 26.9815386,
  Si: 28.0855,
  P: 30.973762,
  S: 32.065,
  Cl: 35.453,
  Ar: 39.948,
  K: 39.0983,
  Ca: 40.078,
  Fe: 55.845,
  Cu: 63.546,
  Zn: 65.38,
  Br: 79.904,
  Ag: 107.8682,
  I: 126.90447,
  Au: 196.966569,
  Pb: 207.2,
};

function parseFormula(formula: string): ElementCounts | null {
  // Matches elements like C, Cl, Ca, followed by optional digits
  const regex = /([A-Z][a-z]?)(\d*)/g;
  const counts: ElementCounts = {};
  let match: RegExpExecArray | null;
  let matchedSomething = false;

  while ((match = regex.exec(formula)) !== null) {
    matchedSomething = true;
    const element = match[1];
    const countStr = match[2];
    const count = countStr === '' ? 1 : parseInt(countStr, 10);
    if (Number.isNaN(count) || count <= 0) return null;
    counts[element] = (counts[element] || 0) + count;
  }

  if (!matchedSomething) return null;
  return counts;
}

function calculateMassFromCounts(counts: ElementCounts): number | null {
  let mass = 0;
  for (const el of Object.keys(counts)) {
    const atomic = ATOMIC_MASSES[el];
    if (atomic === undefined) return null; // unknown element
    mass += atomic * counts[el];
  }
  return mass;
}

function buildFormulaFromCounts(counts: ElementCounts): string {
  // Sort elements alphabetically except keep C, H first by convention (optional)
  const order = Object.keys(counts).sort((a, b) => {
    if (a === 'C' && b !== 'C') return -1;
    if (b === 'C' && a !== 'C') return 1;
    if (a === 'H' && b !== 'H') return -1;
    if (b === 'H' && a !== 'H') return 1;
    return a.localeCompare(b);
  });
  return order.map((el) => `${el}${counts[el] > 1 ? counts[el] : ''}`).join('');
}

export default function MolecularFormulaCalculator() {
  const [empiricalFormula, setEmpiricalFormula] = useState<string>('CH2O');
  const [molecularMass, setMolecularMass] = useState<string>('180');
  const [empiricalCounts, setEmpiricalCounts] = useState<ElementCounts | null>(null);
  const [empiricalMass, setEmpiricalMass] = useState<number | null>(null);
  const [multiplier, setMultiplier] = useState<number | null>(null);
  const [roundedMultiplier, setRoundedMultiplier] = useState<number | null>(null);
  const [molecularCounts, setMolecularCounts] = useState<ElementCounts | null>(null);
  const [molecularFormula, setMolecularFormula] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    setError(null);

    const parsed = parseFormula(empiricalFormula.replace(/\s+/g, ''));
    if (!parsed) {
      setEmpiricalCounts(null);
      setEmpiricalMass(null);
      setMultiplier(null);
      setRoundedMultiplier(null);
      setMolecularCounts(null);
      setMolecularFormula(null);
      setError('Invalid empirical formula format. Use element symbols with optional counts, e.g., C6H12O6 or CH2O.');
      return;
    }

    setEmpiricalCounts(parsed);

    const mass = calculateMassFromCounts(parsed);
    if (mass === null) {
      setEmpiricalMass(null);
      setMultiplier(null);
      setRoundedMultiplier(null);
      setMolecularCounts(null);
      setMolecularFormula(null);
      setError('Empirical formula contains unknown element(s). See supported elements list.');
      return;
    }

    setEmpiricalMass(parseFloat(mass.toFixed(6)));

    const molMassNum = parseFloat(molecularMass);
    if (Number.isNaN(molMassNum) || molMassNum <= 0) {
      setMultiplier(null);
      setRoundedMultiplier(null);
      setMolecularCounts(null);
      setMolecularFormula(null);
      setError('Enter a valid positive molecular mass in g/mol.');
      return;
    }

    const exactMultiplier = molMassNum / mass;
    const rounded = Math.max(1, Math.round(exactMultiplier));

    setMultiplier(parseFloat(exactMultiplier.toFixed(6)));
    setRoundedMultiplier(rounded);

    // Build molecular counts by multiplying empirical counts
    const molCounts: ElementCounts = {};
    for (const el of Object.keys(parsed)) {
      molCounts[el] = parsed[el] * rounded;
    }

    setMolecularCounts(molCounts);
    setMolecularFormula(buildFormulaFromCounts(molCounts));

    // Informative error if multiplier deviates strongly from integer
    const deviation = Math.abs(exactMultiplier - rounded);
    if (deviation > 0.15) {
      setError('Calculated multiplier deviates significantly from an integer — double-check empirical formula or molecular mass.');
    } else {
      // keep only other errors
      // if any previous error existed, we already set above
    }
  }, [empiricalFormula, molecularMass]);

  const handleDownloadPDF = () => {
    if (!empiricalCounts || empiricalMass === null || multiplier === null || molecularFormula === null) return;

    const inputs = [
      { label: 'Empirical Formula', value: empiricalFormula },
      { label: 'Molecular Mass (g/mol)', value: molecularMass },
    ];

    const results = [
      { label: 'Empirical Mass (g/mol)', value: `${empiricalMass} g/mol` },
      { label: 'Multiplier (exact)', value: `${multiplier}` },
      { label: 'Multiplier (rounded)', value: `${roundedMultiplier}` },
      { label: 'Molecular Formula', value: `${molecularFormula}` },
    ];

    // Add element breakdown
    const breakdown = Object.keys(molecularCounts || {}).map((el) => ({ label: `${el} (molecules)`, value: `${molecularCounts![el]}` }));

    generateCalculatorPDF({
      title: 'Molecular Formula Results',
      inputs,
      results: [...results, ...breakdown],
    });
  };

  const chartData = empiricalCounts && molecularCounts ? Object.keys(empiricalCounts).map((el) => ({
    element: el,
    empirical: empiricalCounts[el],
    molecular: molecularCounts[el] ?? 0,
  })) : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="empiricalFormula">Empirical Formula</Label>
        <Input
          id="empiricalFormula"
          type="text"
          value={empiricalFormula}
          onChange={(e) => setEmpiricalFormula(e.target.value)}
          placeholder="e.g., CH2O"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="molecularMass">Molecular Mass (g/mol)</Label>
        <Input
          id="molecularMass"
          type="number"
          value={molecularMass}
          onChange={(e) => setMolecularMass(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      {/* Imported Select to follow example patterns (not used for inputs) */}
      <div className="hidden">
        <Select>
          <option>Placeholder</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      {error ? (
        <div className="text-sm text-red-600 mb-2">{error}</div>
      ) : null}

      <div className="text-sm text-gray-600 mb-2">Empirical Mass</div>
      <div className="text-3xl font-bold text-blue-900 my-2">{empiricalMass !== null ? empiricalMass.toLocaleString() : '—'} g/mol</div>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <div className="text-sm text-gray-600">Multiplier (exact)</div>
          <div className="text-2xl font-semibold">{multiplier !== null ? multiplier.toFixed(4) : '—'}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Multiplier (rounded)</div>
          <div className="text-2xl font-semibold">{roundedMultiplier !== null ? roundedMultiplier : '—'}</div>
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-2">Molecular Formula</div>
      <div className="text-4xl font-bold text-green-800 my-3">{molecularFormula ?? '—'}</div>

      {molecularCounts ? (
        <div className="text-sm text-gray-700">
          Element breakdown: {Object.keys(molecularCounts).map((el) => `${el}${molecularCounts[el]}`).join(', ')}
        </div>
      ) : null}
    </div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Element Counts: Empirical vs Molecular</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="element" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Legend />
          <Bar dataKey="empirical" name="Empirical Count" fill="#60a5fa" />
          <Bar dataKey="molecular" name="Molecular Count" fill="#34d399" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Molecular Formula Calculator"
      description="Calculate the molecular formula from an empirical formula and the molecular mass. Enter an empirical formula (e.g., CH2O) and the molecular mass in g/mol to determine the molecular formula and element breakdown."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
