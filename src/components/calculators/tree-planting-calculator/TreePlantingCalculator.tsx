'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type TreeType = 'oak' | 'pine' | 'maple';

// Average sequestration rate estimates (kg CO2 per tree per year) by tree type
const sequestrationRates: Record<TreeType, number> = {
  oak: 21,   // kg CO2 / year
  pine: 15,
  maple: 18,
};

type Result = {
  perTree: number; // kg CO2 per tree over the period
  totalKg: number; // total kg CO2 for all trees
  totalTonnes: number; // total metric tonnes CO2
} | null;

export default function TreePlantingCalculator() {
  const [treesPlanted, setTreesPlanted] = useState<string>('10');
  const [treeAge, setTreeAge] = useState<string>('10');
  const [treeType, setTreeType] = useState<TreeType>('oak');
  const [result, setResult] = useState<Result>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse inputs
    const treesNum = parseFloat(treesPlanted);
    const ageNum = parseFloat(treeAge);

    if (isNaN(treesNum) || isNaN(ageNum) || treesNum < 0 || ageNum < 0) {
      setResult(null);
      return;
    }

    // Use simple model: total sequestration per tree = annual rate * age
    // (This is a simplified estimate for demonstration purposes.)
    const annualRate = sequestrationRates[treeType];
    const perTree = parseFloat((annualRate * ageNum).toFixed(3));
    const totalKg = parseFloat((perTree * treesNum).toFixed(3));
    const totalTonnes = parseFloat((totalKg / 1000).toFixed(6));

    setResult({ perTree, totalKg, totalTonnes });
  }, [treesPlanted, treeAge, treeType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Tree Planting Carbon Offset Results',
      inputs: [
        { label: 'Number of Trees Planted', value: treesPlanted },
        { label: 'Tree Age (years)', value: treeAge },
        { label: 'Tree Type', value: treeType },
      ],
      results: [
        { label: 'Per Tree (kg CO₂)', value: `${result.perTree} kg CO₂` },
        { label: 'Total (kg CO₂)', value: `${result.totalKg} kg CO₂` },
        { label: 'Total (t CO₂)', value: `${result.totalTonnes} t CO₂` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Per Tree (kg)', value: result.perTree },
    { label: 'Total (kg)', value: result.totalKg },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="treesPlanted">Number of Trees Planted</Label>
        <Input
          id="treesPlanted"
          type="number"
          value={treesPlanted}
          onChange={(e) => setTreesPlanted(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="treeAge">Tree Age (years)</Label>
        <Input
          id="treeAge"
          type="number"
          value={treeAge}
          onChange={(e) => setTreeAge(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="treeType">Tree Type</Label>
        <Select
          id="treeType"
          value={treeType}
          onChange={(e) => setTreeType(e.target.value as TreeType)}
        >
          <option value="oak">Oak</option>
          <option value="pine">Pine</option>
          <option value="maple">Maple</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Carbon Sequestration</div>
      <div className="text-3xl font-bold text-green-800 my-2">
        {result.totalKg.toLocaleString()} kg CO₂
      </div>
      <div className="text-lg text-gray-700 mb-4">(~{result.totalTonnes} t CO₂)</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <div className="text-xs text-gray-500">Per Tree (total)</div>
          <div className="text-xl font-semibold text-gray-900">{result.perTree.toLocaleString()} kg CO₂</div>
        </div>

        <div className="bg-gray-50 p-4 rounded shadow-sm">
          <div className="text-xs text-gray-500">Trees Planted</div>
          <div className="text-xl font-semibold text-gray-900">{parseFloat(treesPlanted || '0').toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Carbon Sequestration Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg CO₂`} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tree Planting Carbon Offset Calculator"
      description="Calculate estimated carbon offset (kg / tonnes CO₂) from planting trees by type and age."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
