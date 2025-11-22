'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function CarryingCapacityCalculator() {
  const [currentPopulation, setCurrentPopulation] = useState<string>('1000');
  const [growthRate, setGrowthRate] = useState<string>('0.05');
  const [resources, setResources] = useState<string>('5000');
  const [carryingCapacity, setCarryingCapacity] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Assumption: average resource requirement per individual (resource units / individual)
  // For this simple model we assume a constant per-individual requirement. This value is
  // chosen for demonstration and is documented in the content component.
  const PER_INDIVIDUAL_RESOURCE = 5; // resource units per individual

  useEffect(() => {
    const pop = parseFloat(currentPopulation);
    const r = parseFloat(growthRate);
    const res = parseFloat(resources);

    // Validate inputs: must be finite numbers and non-negative (growth rate may be zero or positive)
    if (!isNaN(pop) && isFinite(pop) && pop >= 0 && !isNaN(r) && isFinite(r) && r >= 0 && !isNaN(res) && isFinite(res) && res >= 0) {
      // Convert to base units if needed: here resources are base resource units, population is count
      // Carrying capacity K = total available resources / per-individual requirement
      const K = Math.floor(res / PER_INDIVIDUAL_RESOURCE);
      setCarryingCapacity(K);
    } else {
      setCarryingCapacity(null);
    }
  }, [currentPopulation, growthRate, resources]);

  const handleDownloadPDF = () => {
    if (carryingCapacity === null) return;

    generateCalculatorPDF({
      title: 'Carrying Capacity Results',
      inputs: [
        { label: 'Current Population', value: currentPopulation },
        { label: 'Growth Rate', value: growthRate },
        { label: 'Available Resources', value: resources },
        { label: 'Assumed Resource / Individual', value: `${PER_INDIVIDUAL_RESOURCE}` },
      ],
      results: [
        { label: 'Carrying Capacity (K)', value: `${carryingCapacity}` },
        { label: 'Population as % of K', value: `${carryingCapacity ? ((parseFloat(currentPopulation) / carryingCapacity) * 100).toFixed(2) : 'N/A'}%` },
      ],
    });
  };

  const chartData = carryingCapacity !== null ? [
    { label: 'Current Population', value: parseFloat(currentPopulation) || 0, unit: 'individuals' },
    { label: 'Carrying Capacity', value: carryingCapacity, unit: 'individuals' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentPopulation">Current Population</Label>
        <Input
          id="currentPopulation"
          type="number"
          value={currentPopulation}
          onChange={(e) => setCurrentPopulation(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="growthRate">Growth Rate (r)</Label>
        <Input
          id="growthRate"
          type="number"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resources">Available Resources</Label>
        <Input
          id="resources"
          type="number"
          value={resources}
          onChange={(e) => setResources(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      {/* Imported Select to follow project patterns (not used for this simple calculator) */}
      <div className="hidden">
        <Label htmlFor="placeholderSelect">Placeholder</Label>
        <Select id="placeholderSelect" value="unused" onChange={() => {}}>
          <option value="unused">Unused</option>
        </Select>
      </div>
    </>
  );

  const results = carryingCapacity !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Carrying Capacity</div>
      <div className="text-5xl font-bold text-green-800 my-3">{carryingCapacity.toLocaleString()}</div>
      <div className="text-lg text-gray-700">
        {`Population is ${carryingCapacity ? ((parseFloat(currentPopulation) / carryingCapacity) * 100).toFixed(2) : 'N/A'}% of K`}
      </div>
    </div>
  ) : null;

  const charts = showCharts && carryingCapacity !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Population vs Carrying Capacity</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} individuals`} />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Carrying Capacity Calculator"
      description="Calculate the carrying capacity (K) for a population based on available resources and a simple per-individual resource requirement assumption."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
