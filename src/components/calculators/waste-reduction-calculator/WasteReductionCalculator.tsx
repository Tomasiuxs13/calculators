'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function WasteReductionCalculator() {
  const [currentWaste, setCurrentWaste] = useState<string>('10');
  const [reductionPercent, setReductionPercent] = useState<string>('30');

  const [weeklyReduced, setWeeklyReduced] = useState<number | null>(null);
  const [weeklySaved, setWeeklySaved] = useState<number | null>(null);
  const [annualSaved, setAnnualSaved] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const cw = parseFloat(currentWaste);
    const rp = parseFloat(reductionPercent);

    if (!isNaN(cw) && cw >= 0 && !isNaN(rp) && rp >= 0 && rp <= 100) {
      const reduced = cw * (1 - rp / 100);
      const saved = cw - reduced;
      const annual = saved * 52; // 52 weeks in a year

      setWeeklyReduced(parseFloat(reduced.toFixed(3)));
      setWeeklySaved(parseFloat(saved.toFixed(3)));
      setAnnualSaved(parseFloat(annual.toFixed(3)));
    } else {
      setWeeklyReduced(null);
      setWeeklySaved(null);
      setAnnualSaved(null);
    }
  }, [currentWaste, reductionPercent]);

  const handleDownloadPDF = () => {
    if (weeklyReduced === null || weeklySaved === null || annualSaved === null) return;

    generateCalculatorPDF({
      title: 'Waste Reduction Results',
      inputs: [
        { label: 'Current Waste per Week (kg)', value: currentWaste },
        { label: 'Reduction Percentage (%)', value: reductionPercent },
      ],
      results: [
        { label: 'Weekly Waste After Reduction (kg)', value: `${weeklyReduced} kg` },
        { label: 'Weekly Waste Saved (kg)', value: `${weeklySaved} kg` },
        { label: 'Annual Waste Saved (kg)', value: `${annualSaved} kg` },
      ],
    });
  };

  const chartData = weeklyReduced !== null && weeklySaved !== null ? [
    { label: 'Current', value: parseFloat(currentWaste) || 0 },
    { label: 'After Reduction', value: weeklyReduced },
    { label: 'Saved', value: weeklySaved },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2 mb-4">
        <Label htmlFor="currentWaste">Current Waste per Week (kg)</Label>
        <Input
          id="currentWaste"
          type="number"
          value={currentWaste}
          onChange={(e) => setCurrentWaste(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reductionPercent">Reduction Percentage (%)</Label>
        <Input
          id="reductionPercent"
          type="number"
          value={reductionPercent}
          onChange={(e) => setReductionPercent(e.target.value)}
          min="0"
          max="100"
          step="0.1"
        />
      </div>
    </>
  );

  const results = weeklyReduced !== null && weeklySaved !== null && annualSaved !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-3xl font-bold text-green-800 my-3">Weekly After Reduction</div>
      <div className="text-4xl font-extrabold text-gray-900">{weeklyReduced.toLocaleString()} kg</div>

      <div className="mt-6 text-lg text-gray-700">You save <span className="font-semibold">{weeklySaved.toLocaleString()} kg</span> per week</div>
      <div className="mt-2 text-lg text-gray-700">Estimated annual savings: <span className="font-semibold">{annualSaved.toLocaleString()} kg</span></div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Waste Reduction Comparison (kg per week)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Waste Reduction Calculator"
      description="Calculate how much waste you can reduce and how much you save per week and per year by reducing waste by a percentage."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
