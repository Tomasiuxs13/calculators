'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Period = 'weekly' | 'monthly' | 'annual';

export default function RecyclingCalculator() {
  // Inputs (defaults per specification)
  const [wastePerWeek, setWastePerWeek] = useState<string>('10'); // kg per week
  const [recyclingRate, setRecyclingRate] = useState<string>('50'); // %

  // Additional UI state
  const [displayPeriod, setDisplayPeriod] = useState<Period>('annual');
  const [recycledPerWeek, setRecycledPerWeek] = useState<number | null>(null);
  const [annualRecycled, setAnnualRecycled] = useState<number | null>(null);
  const [annualLandfill, setAnnualLandfill] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Assumed conversion/impact factor (this is an illustrative estimate)
  // kg CO2 saved per kg of material recycled (approximate average)
  const CO2_SAVED_PER_KG = 1.5;
  const [annualCO2Saved, setAnnualCO2Saved] = useState<number | null>(null);

  useEffect(() => {
    const wp = parseFloat(wastePerWeek);
    const rr = parseFloat(recyclingRate);

    // Validate inputs
    if (!isNaN(wp) && wp >= 0 && !isNaN(rr) && rr >= 0 && rr <= 100) {
      // Calculate recycled amount per week (kg)
      const recycledWeek = wp * (rr / 100);
      const landfillWeek = wp - recycledWeek;

      // Annualize (52 weeks)
      const recycledYear = recycledWeek * 52;
      const landfillYear = landfillWeek * 52;

      setRecycledPerWeek(parseFloat(recycledWeek.toFixed(3)));
      setAnnualRecycled(parseFloat(recycledYear.toFixed(2)));
      setAnnualLandfill(parseFloat(landfillYear.toFixed(2)));

      // CO2 savings estimate
      setAnnualCO2Saved(parseFloat((recycledYear * CO2_SAVED_PER_KG).toFixed(2)));
    } else {
      setRecycledPerWeek(null);
      setAnnualRecycled(null);
      setAnnualLandfill(null);
      setAnnualCO2Saved(null);
    }
  }, [wastePerWeek, recyclingRate]);

  const handleDownloadPDF = () => {
    if (annualRecycled === null || annualLandfill === null) return;

    generateCalculatorPDF({
      title: 'Recycling Impact Results',
      inputs: [
        { label: 'Waste per Week (kg)', value: wastePerWeek },
        { label: 'Recycling Rate (%)', value: recyclingRate },
      ],
      results: [
        { label: 'Recycled per Week (kg)', value: recycledPerWeek?.toString() ?? '-' },
        { label: 'Recycled per Year (kg)', value: `${annualRecycled} kg` },
        { label: 'Landfill per Year (kg)', value: `${annualLandfill} kg` },
        { label: 'Estimated CO2 Saved per Year (kg CO2)', value: `${annualCO2Saved} kg CO2` },
      ],
    });
  };

  const chartData = (annualRecycled !== null && annualLandfill !== null) ? [
    { label: 'Recycled (kg/yr)', value: annualRecycled, color: '#10b981' },
    { label: 'Landfill (kg/yr)', value: annualLandfill, color: '#ef4444' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="wastePerWeek">Waste per Week (kg)</Label>
        <Input
          id="wastePerWeek"
          type="number"
          value={wastePerWeek}
          onChange={(e) => setWastePerWeek(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="recyclingRate">Recycling Rate (%)</Label>
          <Input
            id="recyclingRate"
            type="number"
            value={recyclingRate}
            onChange={(e) => setRecyclingRate(e.target.value)}
            min="0"
            max="100"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="displayPeriod">Display Period</Label>
          <Select
            id="displayPeriod"
            value={displayPeriod}
            onChange={(e) => setDisplayPeriod(e.target.value as Period)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = (annualRecycled !== null && annualLandfill !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Impact</div>
      <div className="text-4xl font-bold text-green-700 my-2">
        {annualRecycled.toLocaleString()} kg recycled / yr
      </div>
      <div className="text-lg text-gray-700">{annualLandfill.toLocaleString()} kg to landfill / yr</div>

      {annualCO2Saved !== null && (
        <div className="mt-4 text-sm text-gray-600">
          Estimated CO2 saved: <span className="font-semibold">{annualCO2Saved.toLocaleString()} kg CO2/yr</span>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-100 rounded-lg p-3">
          <div className="text-xs text-gray-600">Recycled per Week</div>
          <div className="text-2xl font-bold text-green-700">{recycledPerWeek?.toLocaleString() ?? '-'} kg</div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-3">
          <div className="text-xs text-gray-600">Landfill per Week</div>
          <div className="text-2xl font-bold text-red-600">{( (parseFloat(wastePerWeek) || 0) - (recycledPerWeek || 0) ).toFixed(2)} kg</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Annual Recycling vs Landfill</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} kg`} />
          <Bar dataKey="value" fill="#3b82f6">
            {/* colors are handled via a single color; for more complex coloring a Cell map could be used */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Recycling Impact Calculator"
      description="Calculate recycling impact and annual waste reduction based on weekly waste generation and your recycling rate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
