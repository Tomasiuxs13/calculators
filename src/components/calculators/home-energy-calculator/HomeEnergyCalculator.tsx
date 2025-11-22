'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type HeatingType = 'gas' | 'electric' | 'oil';
type InsulationQuality = 'poor' | 'average' | 'good';

export default function HomeEnergyCalculator() {
  const [squareFootage, setSquareFootage] = useState<string>('2000');
  const [heatingType, setHeatingType] = useState<HeatingType>('gas');
  const [insulation, setInsulation] = useState<InsulationQuality>('good');

  const [annualKWh, setAnnualKWh] = useState<number | null>(null);
  const [annualCost, setAnnualCost] = useState<number | null>(null);
  const [efficiencyLabel, setEfficiencyLabel] = useState<string>('');
  const [showCharts, setShowCharts] = useState(false);

  // Baseline energy intensity (kWh per sqft per year) - represents a simple baseline for heating energy
  const BASE_KWH_PER_SQFT = 5; // example baseline

  // Multipliers to convert baseline depending on heating type (we normalize to kWh-equivalents)
  const heatingMultipliers: Record<HeatingType, number> = {
    gas: 0.85, // gas tends to use less delivered electric-equivalent kWh when normalized
    electric: 1.0,
    oil: 0.9,
  };

  // Cost per kWh equivalent by heating type (USD per kWh equivalent)
  const costPerKWhByType: Record<HeatingType, number> = {
    gas: 0.06,
    electric: 0.13,
    oil: 0.09,
  };

  // Insulation quality modifiers
  const insulationModifiers: Record<InsulationQuality, number> = {
    poor: 1.3,
    average: 1.0,
    good: 0.8,
  };

  useEffect(() => {
    const sqft = parseFloat(squareFootage);
    if (!isNaN(sqft) && sqft > 0) {
      // Convert to a common base (kWh) first, then apply heating & insulation modifiers
      const baseKWh = sqft * BASE_KWH_PER_SQFT; // base kWh for the home size
      const heatingFactor = heatingMultipliers[heatingType];
      const insulationFactor = insulationModifiers[insulation];

      const calculatedKWh = baseKWh * heatingFactor * insulationFactor;
      const costPerKWh = costPerKWhByType[heatingType];
      const calculatedCost = calculatedKWh * costPerKWh;

      setAnnualKWh(parseFloat(calculatedKWh.toFixed(2)));
      setAnnualCost(parseFloat(calculatedCost.toFixed(2)));

      // Efficiency label based on kWh per sqft
      const kWhPerSqft = calculatedKWh / sqft;
      if (kWhPerSqft <= 3) {
        setEfficiencyLabel('Excellent');
      } else if (kWhPerSqft <= 5) {
        setEfficiencyLabel('Good');
      } else if (kWhPerSqft <= 7) {
        setEfficiencyLabel('Average');
      } else {
        setEfficiencyLabel('Poor');
      }
    } else {
      setAnnualKWh(null);
      setAnnualCost(null);
      setEfficiencyLabel('');
    }
  }, [squareFootage, heatingType, insulation]);

  const handleDownloadPDF = () => {
    if (annualKWh === null || annualCost === null) return;

    generateCalculatorPDF({
      title: 'Home Energy Calculator Results',
      inputs: [
        { label: 'Home Square Footage', value: `${squareFootage} sqft` },
        { label: 'Heating Type', value: heatingType },
        { label: 'Insulation Quality', value: insulation },
      ],
      results: [
        { label: 'Estimated Annual Energy Use', value: `${annualKWh} kWh` },
        { label: 'Estimated Annual Cost', value: `$${annualCost}` },
        { label: 'Efficiency Rating', value: efficiencyLabel },
      ],
    });
  };

  const chartData = annualKWh !== null ? [
    { label: 'Baseline', value: parseFloat((parseFloat(squareFootage || '0') * BASE_KWH_PER_SQFT).toFixed(2)), unit: 'kWh' },
    { label: 'Estimated', value: annualKWh, unit: 'kWh' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="squareFootage">Home Square Footage</Label>
        <Input
          id="squareFootage"
          type="number"
          value={squareFootage}
          onChange={(e) => setSquareFootage(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="heatingType">Heating Type</Label>
          <Select
            id="heatingType"
            value={heatingType}
            onChange={(e) => setHeatingType(e.target.value as HeatingType)}
          >
            <option value="gas">Natural Gas</option>
            <option value="electric">Electric</option>
            <option value="oil">Oil</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="insulation">Insulation Quality</Label>
          <Select
            id="insulation"
            value={insulation}
            onChange={(e) => setInsulation(e.target.value as InsulationQuality)}
          >
            <option value="poor">Poor</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = annualKWh !== null && annualCost !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Energy Use</div>
      <div className="text-4xl font-bold text-green-800 my-2">{annualKWh.toLocaleString()} kWh</div>

      <div className="text-sm text-gray-600 mt-2">Estimated Annual Cost</div>
      <div className="text-2xl font-semibold text-gray-800 my-2">${annualCost.toLocaleString()}</div>

      <div className="text-sm text-gray-600 mt-2">Efficiency Rating</div>
      <div className="text-lg font-medium text-gray-700">{efficiencyLabel}</div>
    </div>
  ) : null;

  const charts = showCharts && annualKWh !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Energy Use Comparison (kWh/year)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kWh`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Home Energy Calculator"
      description="Calculate home energy usage and efficiency." 
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
