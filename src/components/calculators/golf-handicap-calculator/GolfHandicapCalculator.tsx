'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DifferentialItem = {
  label: string;
  value: number;
  selected: boolean;
};

// Mapping for number of scores to number of lowest differentials to use (USGA/World Handicap System style)
const differentialsToUseMap: Record<number, number> = {
  5: 1,
  6: 1,
  7: 2,
  8: 2,
  9: 3,
  10: 3,
  11: 4,
  12: 4,
  13: 5,
  14: 6,
  15: 6,
  16: 7,
  17: 8,
  18: 8,
  19: 9,
  20: 10,
};

export default function GolfHandicapCalculator() {
  const [scoresInput, setScoresInput] = useState<string>('85, 88, 82, 90, 86');
  const [courseRating, setCourseRating] = useState<string>('72');
  const [slopeRating, setSlopeRating] = useState<string>('113');

  const [differentials, setDifferentials] = useState<DifferentialItem[]>([]);
  const [handicapIndex, setHandicapIndex] = useState<number | null>(null);
  const [usedCount, setUsedCount] = useState<number>(0);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsedScores = scoresInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n) && isFinite(n) && n > 0);

    const cr = parseFloat(courseRating);
    const sr = parseFloat(slopeRating);

    if (parsedScores.length === 0 || isNaN(cr) || isNaN(sr) || sr <= 0) {
      setDifferentials([]);
      setHandicapIndex(null);
      setUsedCount(0);
      return;
    }

    // Calculate differentials: (Adjusted Gross Score - Course Rating) * 113 / Slope Rating
    const diffs = parsedScores.map((score, idx) => {
      const raw = ((score - cr) * 113) / sr;
      const rounded = parseFloat(raw.toFixed(1));
      return {
        label: `Score ${idx + 1}`,
        value: rounded,
        selected: false,
      } as DifferentialItem;
    });

    // Determine how many lowest differentials to use
    const count = parsedScores.length >= 5 && parsedScores.length <= 20
      ? differentialsToUseMap[parsedScores.length]
      : parsedScores.length < 5
      ? parsedScores.length // if less than 5, use all
      : 10; // if more than 20, cap at 10

    // Sort by differential ascending and mark selected
    const sorted = [...diffs].sort((a, b) => a.value - b.value);
    const selectedLowest = sorted.slice(0, count);

    // Build final array preserving original order but marking selected
    const final = diffs.map((d) => ({
      ...d,
      selected: selectedLowest.some((s) => s.label === d.label && s.value === d.value),
    }));

    // Average the selected differentials
    const avg = selectedLowest.reduce((acc, cur) => acc + cur.value, 0) / selectedLowest.length;

    // Apply a 0.96 multiplier (bonus for excellence) - note: WHS rules may vary; included here as a common option
    const index = parseFloat((avg * 0.96).toFixed(1));

    setDifferentials(final);
    setHandicapIndex(isFinite(index) ? index : null);
    setUsedCount(selectedLowest.length);
  }, [scoresInput, courseRating, slopeRating]);

  const handleDownloadPDF = () => {
    if (handicapIndex === null) return;

    generateCalculatorPDF({
      title: 'Golf Handicap Calculator Results',
      inputs: [
        { label: 'Recent Scores', value: scoresInput },
        { label: 'Course Rating', value: courseRating },
        { label: 'Slope Rating', value: slopeRating },
      ],
      results: [
        { label: 'Handicap Index', value: `${handicapIndex}` },
        { label: 'Differentials Used', value: `${usedCount}` },
      ],
    });
  };

  const chartData = differentials.map((d) => ({ label: d.label, value: d.value, selected: d.selected }));

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="scores">Recent Scores (comma-separated)</Label>
        <Input
          id="scores"
          type="text"
          value={scoresInput}
          onChange={(e) => setScoresInput(e.target.value)}
          placeholder="e.g. 85, 88, 82, 90, 86"
        />
        <p className="text-sm text-gray-500 mt-1">Enter your most recent scores separated by commas. Minimum 1 score; recommended 5+ for a reliable index.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="courseRating">Course Rating</Label>
          <Input
            id="courseRating"
            type="number"
            value={courseRating}
            onChange={(e) => setCourseRating(e.target.value)}
            step="0.1"
            min="50"
            max="90"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slopeRating">Slope Rating</Label>
          <Input
            id="slopeRating"
            type="number"
            value={slopeRating}
            onChange={(e) => setSlopeRating(e.target.value)}
            step="1"
            min="55"
            max="155"
          />
        </div>
      </div>
    </>
  );

  const results = handicapIndex !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Handicap Index</div>
      <div className="text-5xl font-bold text-green-800 my-3">{handicapIndex.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Using {usedCount} differential{usedCount !== 1 ? 's' : ''}</div>
      <div className="mt-4 text-sm text-gray-600">
        Differentials are calculated as (Score - Course Rating) × 113 / Slope Rating. A 0.96 multiplier is applied.
      </div>
    </div>
  ) : null;

  const charts = showCharts && differentials.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Differential Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} differential`} />
          <Bar dataKey="value" fill="#10b981">
            {/* color selected bars differently via a custom fill accessor would be ideal; recharts supports payload prop, but keeping simple */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {differentials.map((d) => (
          <div key={d.label} className={`p-2 rounded border ${d.selected ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100'}`}>
            <div className="text-sm text-gray-600">{d.label}</div>
            <div className="text-lg font-medium text-gray-800">{d.value.toFixed(1)}</div>
            {d.selected && <div className="text-xs text-green-700">Selected</div>}
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Golf Handicap Calculator"
      description="Calculate your golf handicap index using recent scores, course rating, and slope rating."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
