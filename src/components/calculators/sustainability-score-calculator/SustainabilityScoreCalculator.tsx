'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Preset = 'balanced' | 'energy' | 'water' | 'waste' | 'transportation';

type Scores = {
  energy: number;
  water: number;
  waste: number;
  transportation: number;
};

const presetWeights: Record<Preset, Scores> = {
  balanced: { energy: 0.3, water: 0.25, waste: 0.25, transportation: 0.2 },
  energy: { energy: 0.5, water: 0.2, waste: 0.15, transportation: 0.15 },
  water: { energy: 0.2, water: 0.5, waste: 0.15, transportation: 0.15 },
  waste: { energy: 0.2, water: 0.2, waste: 0.5, transportation: 0.1 },
  transportation: { energy: 0.2, water: 0.2, waste: 0.1, transportation: 0.5 },
};

export default function SustainabilityScoreCalculator() {
  const [energyScore, setEnergyScore] = useState<string>('7');
  const [waterScore, setWaterScore] = useState<string>('6');
  const [wasteScore, setWasteScore] = useState<string>('8');
  const [transportationScore, setTransportationScore] = useState<string>('5');
  const [preset, setPreset] = useState<Preset>('balanced');
  const [result, setResult] = useState<number | null>(null);
  const [contributions, setContributions] = useState<Scores | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse inputs and clamp between 1 and 10
    const parseAndClamp = (s: string) => {
      const n = parseFloat(s);
      if (isNaN(n)) return 0;
      if (n < 1) return 1;
      if (n > 10) return 10;
      return n;
    };

    const e = parseAndClamp(energyScore);
    const w = parseAndClamp(waterScore);
    const wa = parseAndClamp(wasteScore);
    const t = parseAndClamp(transportationScore);

    const weights = presetWeights[preset];

    const energyContribution = parseFloat((e * weights.energy).toFixed(3));
    const waterContribution = parseFloat((w * weights.water).toFixed(3));
    const wasteContribution = parseFloat((wa * weights.waste).toFixed(3));
    const transportationContribution = parseFloat((t * weights.transportation).toFixed(3));

    const total = energyContribution + waterContribution + wasteContribution + transportationContribution;

    // Result is on the same 1-10 scale because weights sum to 1
    setContributions({
      energy: energyContribution,
      water: waterContribution,
      waste: wasteContribution,
      transportation: transportationContribution,
    });

    setResult(parseFloat(total.toFixed(2)));
  }, [energyScore, waterScore, wasteScore, transportationScore, preset]);

  const handleDownloadPDF = () => {
    if (result === null || contributions === null) return;

    generateCalculatorPDF({
      title: 'Sustainability Score Results',
      inputs: [
        { label: 'Energy Efficiency Score (1-10)', value: energyScore },
        { label: 'Water Conservation Score (1-10)', value: waterScore },
        { label: 'Waste Reduction Score (1-10)', value: wasteScore },
        { label: 'Transportation Score (1-10)', value: transportationScore },
        { label: 'Weight Preset', value: preset },
      ],
      results: [
        { label: 'Overall Sustainability Score', value: `${result} / 10` },
        { label: 'Energy Contribution', value: `${contributions.energy.toFixed(2)} pts` },
        { label: 'Water Contribution', value: `${contributions.water.toFixed(2)} pts` },
        { label: 'Waste Contribution', value: `${contributions.waste.toFixed(2)} pts` },
        { label: 'Transport Contribution', value: `${contributions.transportation.toFixed(2)} pts` },
      ],
    });
  };

  const chartData = contributions && result !== null ? [
    { label: 'Energy', score: parseFloat(energyScore) || 0, contribution: contributions.energy },
    { label: 'Water', score: parseFloat(waterScore) || 0, contribution: contributions.water },
    { label: 'Waste', score: parseFloat(wasteScore) || 0, contribution: contributions.waste },
    { label: 'Transport', score: parseFloat(transportationScore) || 0, contribution: contributions.transportation },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="energyScore">Energy Efficiency Score (1-10)</Label>
          <Input
            id="energyScore"
            type="number"
            value={energyScore}
            onChange={(e) => setEnergyScore(e.target.value)}
            min="1"
            max="10"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="waterScore">Water Conservation Score (1-10)</Label>
          <Input
            id="waterScore"
            type="number"
            value={waterScore}
            onChange={(e) => setWaterScore(e.target.value)}
            min="1"
            max="10"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="wasteScore">Waste Reduction Score (1-10)</Label>
          <Input
            id="wasteScore"
            type="number"
            value={wasteScore}
            onChange={(e) => setWasteScore(e.target.value)}
            min="1"
            max="10"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="transportationScore">Transportation Score (1-10)</Label>
          <Input
            id="transportationScore"
            type="number"
            value={transportationScore}
            onChange={(e) => setTransportationScore(e.target.value)}
            min="1"
            max="10"
            step="0.1"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="preset">Weight Preset</Label>
        <Select
          id="preset"
          value={preset}
          onChange={(e) => setPreset(e.target.value as Preset)}
        >
          <option value="balanced">Balanced (default)</option>
          <option value="energy">Energy Focused</option>
          <option value="water">Water Focused</option>
          <option value="waste">Waste Focused</option>
          <option value="transportation">Transportation Focused</option>
        </Select>
        <p className="text-sm text-gray-500 mt-1">Presets adjust the weighting of each category for the overall score.</p>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Overall Sustainability Score</div>
      <div className="text-5xl font-bold text-green-800 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-2">out of 10</div>
      <div className="text-sm text-gray-600">(Higher is better)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Scores & Weighted Contributions</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string) => {
            if (name === 'score') return [`${value.toFixed(2)} / 10`, 'Score'];
            return [`${value.toFixed(2)} pts`, 'Contribution'];
          }} />
          <Legend />
          <Bar dataKey="score" fill="#10b981" name="Score (/10)" />
          <Bar dataKey="contribution" fill="#3b82f6" name="Weighted Contribution" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Sustainability Score Calculator"
      description="Calculate an overall sustainability score (1-10) based on energy efficiency, water conservation, waste reduction, and transportation. Use presets to adjust weighting emphasis."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
