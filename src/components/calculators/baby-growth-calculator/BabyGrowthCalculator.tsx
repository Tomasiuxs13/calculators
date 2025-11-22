'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Result = {
  expectedWeight: number; // grams
  difference: number; // grams (babyWeight - expectedWeight)
  percentDifference: number; // percent relative to expected
  classification: 'Below average' | 'Average' | 'Above average';
};

export default function BabyGrowthCalculator() {
  const [weeksPregnant, setWeeksPregnant] = useState<string>('20');
  const [babyWeight, setBabyWeight] = useState<string>('300');
  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Approximate average fetal weight (grams) by week using a simple linear model
  // 0-20 weeks: very small; use linear approx from 0 -> 20 weeks to avoid negative
  // From 20 to 40 weeks: 300g at week 20 to 3500g at week 40 (approx)
  const averageWeightAtWeek = (week: number) => {
    if (isNaN(week) || week <= 0) return 0;
    if (week <= 20) {
      // linear from 0g at week 0 to 300g at week 20
      return (300 / 20) * week;
    }
    if (week <= 40) {
      // linear from 300g at 20 to 3500g at 40
      return 300 + ((3500 - 300) / (40 - 20)) * (week - 20);
    }
    // beyond 40 weeks, cap near 3500-4000g; simple linear taper
    return 3500 + Math.min((week - 40) * 50, 500); // cap additional growth
  };

  useEffect(() => {
    const w = parseFloat(weeksPregnant);
    const bw = parseFloat(babyWeight);

    if (!isNaN(w) && !isNaN(bw) && w > 0 && bw >= 0) {
      const expected = averageWeightAtWeek(w);
      const difference = bw - expected;
      const percentDiff = expected === 0 ? 0 : (difference / expected) * 100;
      let classification: Result['classification'] = 'Average';
      const absPercent = Math.abs(percentDiff);
      if (absPercent <= 10) classification = 'Average';
      else if (percentDiff < -10) classification = 'Below average';
      else classification = 'Above average';

      setResult({
        expectedWeight: parseFloat(expected.toFixed(1)),
        difference: parseFloat(difference.toFixed(1)),
        percentDifference: parseFloat(percentDiff.toFixed(1)),
        classification,
      });
    } else {
      setResult(null);
    }
  }, [weeksPregnant, babyWeight]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Baby Growth Calculator Results',
      inputs: [
        { label: 'Weeks Pregnant', value: weeksPregnant },
        { label: 'Baby Weight (g)', value: babyWeight },
      ],
      results: [
        { label: 'Expected Weight (g)', value: `${result.expectedWeight} g` },
        { label: 'Difference (g)', value: `${result.difference} g` },
        { label: 'Percent Difference', value: `${result.percentDifference}%` },
        { label: 'Classification', value: result.classification },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Observed', value: parseFloat(babyWeight) || 0, unit: 'g' },
    { label: 'Expected', value: result.expectedWeight, unit: 'g' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="weeksPregnant">Weeks Pregnant</Label>
        <Input
          id="weeksPregnant"
          type="number"
          value={weeksPregnant}
          onChange={(e) => setWeeksPregnant(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="babyWeight">Baby Weight (g)</Label>
        <Input
          id="babyWeight"
          type="number"
          value={babyWeight}
          onChange={(e) => setBabyWeight(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      {/* Example of importing Select as pattern requires; not used for core calculation but available for future unit selection */}
      <div className="mt-2 text-sm text-gray-500">Weight unit is grams (g).</div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Results</div>
      <div className="text-3xl font-bold text-blue-900 my-2">
        {result.expectedWeight.toLocaleString()} g
      </div>
      <div className="text-sm text-gray-700 mb-4">Expected weight at {parseFloat(weeksPregnant).toFixed(1)} weeks</div>

      <div className="grid grid-cols-3 gap-4 items-center">
        <div>
          <div className="text-xs text-gray-500">Observed</div>
          <div className="text-lg font-semibold">{parseFloat(babyWeight).toLocaleString()} g</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Difference</div>
          <div className="text-lg font-semibold">{result.difference >= 0 ? '+' : ''}{result.difference} g</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Percent</div>
          <div className="text-lg font-semibold">{result.percentDifference}%</div>
        </div>
      </div>

      <div className="mt-4 text-sm font-medium text-gray-800">Classification: <span className="font-bold text-blue-700">{result.classification}</span></div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Observed vs Expected Weight</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} g`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Baby Growth Calculator"
      description="Track baby's growth during pregnancy. Enter weeks pregnant and observed fetal weight to compare against an estimated expected weight."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
