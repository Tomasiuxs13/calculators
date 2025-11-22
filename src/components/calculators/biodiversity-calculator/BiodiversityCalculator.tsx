'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SimpsonVariant = '1-D' | 'D';

type SpeciesDatum = {
  name: string;
  value: number;
};

export default function BiodiversityCalculator() {
  const [speciesCounts, setSpeciesCounts] = useState<string>('10, 20, 15, 5');
  const [simpsonVariant, setSimpsonVariant] = useState<SimpsonVariant>('1-D');

  const [shannon, setShannon] = useState<number | null>(null);
  const [simpson, setSimpson] = useState<number | null>(null);
  const [richness, setRichness] = useState<number | null>(null);
  const [totalIndividuals, setTotalIndividuals] = useState<number | null>(null);
  const [chartData, setChartData] = useState<SpeciesDatum[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse species counts from comma-separated string
    const parts = speciesCounts.split(',').map((s) => s.trim()).filter((s) => s.length > 0);
    const values: number[] = parts.map((p) => parseFloat(p));

    // Validate parsed values
    if (values.length === 0) {
      setShannon(null);
      setSimpson(null);
      setRichness(null);
      setTotalIndividuals(null);
      setChartData([]);
      return;
    }

    if (values.some((v) => isNaN(v) || v < 0)) {
      // Invalid input: negative or non-number
      setShannon(null);
      setSimpson(null);
      setRichness(null);
      setTotalIndividuals(null);
      setChartData([]);
      return;
    }

    const total = values.reduce((a, b) => a + b, 0);
    if (total <= 0) {
      setShannon(null);
      setSimpson(null);
      setRichness(values.length);
      setTotalIndividuals(total);
      setChartData(values.map((v, i) => ({ name: `Species ${i + 1}`, value: v })));
      return;
    }

    // Calculate proportions
    const props = values.map((v) => v / total);

    // Shannon index H' = -sum p_i * ln(p_i)
    const shannonValue = -props.reduce((acc, p) => {
      return p > 0 ? acc + p * Math.log(p) : acc;
    }, 0);

    // Simpson's index D = sum p_i^2
    const simpsonD = props.reduce((acc, p) => acc + p * p, 0);
    const simpsonValue = simpsonVariant === '1-D' ? 1 - simpsonD : simpsonD;

    setShannon(parseFloat(shannonValue.toFixed(6)));
    setSimpson(parseFloat(simpsonValue.toFixed(6)));
    setRichness(values.length);
    setTotalIndividuals(total);
    setChartData(values.map((v, i) => ({ name: `Species ${i + 1}`, value: v })));
  }, [speciesCounts, simpsonVariant]);

  const handleDownloadPDF = () => {
    if (shannon === null || simpson === null || richness === null || totalIndividuals === null) return;

    generateCalculatorPDF({
      title: 'Biodiversity Calculator Results',
      inputs: [
        { label: 'Species Counts (comma-separated)', value: speciesCounts },
        { label: 'Simpson Variant', value: simpsonVariant },
      ],
      results: [
        { label: 'Species Richness (S)', value: String(richness) },
        { label: 'Total Individuals (N)', value: String(totalIndividuals) },
        { label: "Shannon's Index (H')", value: String(shannon) },
        { label: `Simpson's Index (${simpsonVariant})`, value: String(simpson) },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="speciesCounts">Species Counts (comma-separated)</Label>
        <Input
          id="speciesCounts"
          type="text"
          value={speciesCounts}
          onChange={(e) => setSpeciesCounts(e.target.value)}
          placeholder="e.g. 10, 20, 15, 5"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="simpsonVariant">Simpson Variant</Label>
          <Select
            id="simpsonVariant"
            value={simpsonVariant}
            onChange={(e) => setSimpsonVariant(e.target.value as SimpsonVariant)}
          >
            <option value="1-D">1 - D (Simpson's Diversity)</option>
            <option value="D">D (Simpson's Dominance)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="placeholder">Example</Label>
          <div className="p-2 bg-gray-50 rounded border border-gray-100 text-sm text-gray-700">10, 20, 15, 5</div>
        </div>
      </div>
    </>
  );

  const results = (shannon !== null && simpson !== null && richness !== null && totalIndividuals !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-xs text-gray-500">Species Richness (S)</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{richness}</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-xs text-gray-500">Total Individuals (N)</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{totalIndividuals.toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-sm">
        <div className="text-xs text-gray-500">Shannon's Index (H')</div>
        <div className="text-4xl font-bold text-blue-900 my-2">{shannon.toFixed(4)}</div>
        <div className="text-xs text-gray-600">Higher H' indicates greater diversity</div>
      </div>

      <div className="bg-white p-4 rounded shadow-sm mt-4">
        <div className="text-xs text-gray-500">Simpson's Index ({simpsonVariant})</div>
        <div className="text-4xl font-bold text-blue-900 my-2">{simpson.toFixed(4)}</div>
        <div className="text-xs text-gray-600">{simpsonVariant === '1-D' ? 'Higher values indicate greater diversity' : 'Higher values indicate dominance'}</div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid comma-separated species counts to see results.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Species Abundance</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Biodiversity Calculator"
      description="Calculate biodiversity indices including Shannon and Simpson from species counts."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
