'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

// GeneticDistanceCalculator
// Uses Nei's genetic identity for a biallelic locus:
// I = sqrt(p1 * p2) + sqrt((1 - p1) * (1 - p2))
// D = -ln(I)

export default function GeneticDistanceCalculator() {
  const [alleleFreq1, setAlleleFreq1] = useState<string>('0.5');
  const [alleleFreq2, setAlleleFreq2] = useState<string>('0.3');
  const [geneticIdentity, setGeneticIdentity] = useState<number | null>(null);
  const [geneticDistance, setGeneticDistance] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p1 = parseFloat(alleleFreq1);
    const p2 = parseFloat(alleleFreq2);

    // Validate: frequencies must be numbers between 0 and 1
    if (
      !isNaN(p1) && !isNaN(p2) &&
      p1 >= 0 && p1 <= 1 &&
      p2 >= 0 && p2 <= 1
    ) {
      // Nei's genetic identity for two-allele locus
      const term1 = Math.sqrt(p1 * p2);
      const term2 = Math.sqrt((1 - p1) * (1 - p2));
      const I = term1 + term2;

      // numeric safety
      const safeI = I > 0 ? I : 0;

      const D = safeI > 0 ? -Math.log(safeI) : Infinity;

      setGeneticIdentity(parseFloat(safeI.toFixed(6)));
      setGeneticDistance(isFinite(D) ? parseFloat(D.toFixed(6)) : null);
    } else {
      setGeneticIdentity(null);
      setGeneticDistance(null);
    }
  }, [alleleFreq1, alleleFreq2]);

  const handleDownloadPDF = () => {
    if (geneticIdentity === null || geneticDistance === null) return;

    generateCalculatorPDF({
      title: 'Genetic Distance Calculator Results',
      inputs: [
        { label: 'Allele Frequency Population 1', value: alleleFreq1 },
        { label: 'Allele Frequency Population 2', value: alleleFreq2 },
      ],
      results: [
        { label: 'Genetic Identity (I)', value: `${geneticIdentity}` },
        { label: 'Genetic Distance (D = -ln(I))', value: `${geneticDistance}` },
      ],
    });
  };

  const chartData = (geneticIdentity !== null) ? [
    { label: 'Population 1', value: parseFloat(alleleFreq1) || 0, type: 'p1' },
    { label: 'Population 2', value: parseFloat(alleleFreq2) || 0, type: 'p2' },
    { label: 'Identity (I)', value: geneticIdentity, type: 'identity' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="alleleFreq1">Allele Frequency Population 1</Label>
        <Input
          id="alleleFreq1"
          type="number"
          value={alleleFreq1}
          onChange={(e) => setAlleleFreq1(e.target.value)}
          min="0"
          max="1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="alleleFreq2">Allele Frequency Population 2</Label>
        <Input
          id="alleleFreq2"
          type="number"
          value={alleleFreq2}
          onChange={(e) => setAlleleFreq2(e.target.value)}
          min="0"
          max="1"
          step="0.01"
        />
      </div>

      {/* Example Select included to follow example imports/patterns even if not required */}
      <div className="space-y-2">
        <Label htmlFor="alleleType">Allele Type (informational)</Label>
        <Select id="alleleType" value="biallelic" onChange={() => {}}>
          <option value="biallelic">Biallelic (A / a)</option>
          <option value="multi">Multi-allelic (not used)</option>
        </Select>
      </div>
    </>
  );

  const results = (geneticIdentity !== null && geneticDistance !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-2xl font-semibold text-gray-800">Genetic Identity (I)</div>
      <div className="text-4xl font-bold text-blue-900 my-2">{geneticIdentity?.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-4">Genetic Distance (D = -ln(I))</div>
      <div className="text-3xl font-bold text-red-700">{geneticDistance?.toLocaleString()}</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter allele frequencies between 0 and 1 to see results.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Allele Frequencies & Identity</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis domain={[0, 1]} />
          <Tooltip formatter={(value: number) => {
            // Show as proportion or raw depending on type
            return (typeof value === 'number') ? value.toFixed(4) : value;
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Genetic Distance Calculator"
      description="Calculate Nei's genetic distance between two populations for a biallelic locus using allele frequencies."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
