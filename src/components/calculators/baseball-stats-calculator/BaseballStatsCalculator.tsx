'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BaseballStatsCalculator() {
  const [hits, setHits] = useState<string>('150');
  const [atBats, setAtBats] = useState<string>('500');
  const [battingAverage, setBattingAverage] = useState<number | null>(null);
  const [hitsPer100, setHitsPer100] = useState<number | null>(null);
  const [projectedHits600, setProjectedHits600] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const h = parseFloat(hits);
    const ab = parseFloat(atBats);

    if (!isNaN(h) && !isNaN(ab) && ab > 0 && h >= 0) {
      const avg = h / ab; // batting average = hits / at-bats
      const per100 = (h / ab) * 100; // hits per 100 at-bats
      const proj600 = (h / ab) * 600; // projected hits over 600 at-bats (common season projection)

      setBattingAverage(parseFloat(avg.toFixed(3)));
      setHitsPer100(parseFloat(per100.toFixed(2)));
      setProjectedHits600(parseFloat(proj600.toFixed(0)));
    } else {
      setBattingAverage(null);
      setHitsPer100(null);
      setProjectedHits600(null);
    }
  }, [hits, atBats]);

  const handleDownloadPDF = () => {
    if (battingAverage === null) return;

    generateCalculatorPDF({
      title: 'Baseball Stats Calculator Results',
      inputs: [
        { label: 'Hits', value: hits },
        { label: 'At Bats', value: atBats },
      ],
      results: [
        { label: 'Batting Average', value: battingAverage !== null ? battingAverage.toFixed(3) : '—' },
        { label: 'Hits per 100 AB', value: hitsPer100 !== null ? `${hitsPer100} / 100` : '—' },
        { label: 'Projected Hits (600 AB)', value: projectedHits600 !== null ? `${projectedHits600} hits` : '—' },
      ],
    });
  };

  const chartData = battingAverage !== null && projectedHits600 !== null ? [
    { label: 'Actual Hits', value: parseFloat(hits) || 0 },
    { label: 'Projected (600 AB)', value: projectedHits600, },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="hits">Hits</Label>
        <Input
          id="hits"
          type="number"
          value={hits}
          onChange={(e) => setHits(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="atBats">At Bats</Label>
        <Input
          id="atBats"
          type="number"
          value={atBats}
          onChange={(e) => setAtBats(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      {/* Select is imported to follow example patterns and project conventions, not used here */}
      <div className="hidden">
        <Label htmlFor="placeholderSelect">Placeholder</Label>
        <Select id="placeholderSelect" value="" onChange={() => {}}>
          <option value="">N/A</option>
        </Select>
      </div>
    </>
  );

  const results = battingAverage !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Batting Average</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {battingAverage >= 0 && battingAverage < 1
          ? battingAverage.toFixed(3).replace(/^0/, '') // show .300 instead of 0.300
          : battingAverage.toFixed(3)}
      </div>
      <div className="text-lg text-gray-700 mb-4">AVG</div>

      <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
        <div className="bg-gray-50 border rounded p-3">
          <div className="text-sm text-gray-500">Hits per 100 AB</div>
          <div className="text-xl font-medium text-gray-800">{hitsPer100 !== null ? `${hitsPer100} / 100` : '—'}</div>
        </div>

        <div className="bg-gray-50 border rounded p-3">
          <div className="text-sm text-gray-500">Projected Hits (600 AB)</div>
          <div className="text-xl font-medium text-gray-800">{projectedHits600 !== null ? `${projectedHits600} hits` : '—'}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Hits Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Baseball Stats Calculator"
      description="Calculate essential baseball hitting statistics such as batting average, hits per 100 at-bats, and projected hits over a 600 AB season."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
