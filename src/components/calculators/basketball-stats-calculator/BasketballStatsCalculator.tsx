'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BasketballStatsCalculator() {
  const [fieldGoalsMade, setFieldGoalsMade] = useState<string>('300');
  const [fieldGoalsAttempted, setFieldGoalsAttempted] = useState<string>('600');
  const [fgPercentage, setFgPercentage] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const made = parseFloat(fieldGoalsMade);
    const attempted = parseFloat(fieldGoalsAttempted);

    // Validate inputs: non-negative numbers and attempted > 0 and made <= attempted
    if (!isNaN(made) && !isNaN(attempted) && made >= 0 && attempted > 0 && made <= attempted) {
      const percent = (made / attempted) * 100;
      setFgPercentage(parseFloat(percent.toFixed(2)));
    } else {
      setFgPercentage(null);
    }
  }, [fieldGoalsMade, fieldGoalsAttempted]);

  const handleDownloadPDF = () => {
    if (fgPercentage === null) return;

    generateCalculatorPDF({
      title: 'Basketball Stats Calculator Results',
      inputs: [
        { label: 'Field Goals Made', value: fieldGoalsMade },
        { label: 'Field Goals Attempted', value: fieldGoalsAttempted },
      ],
      results: [
        { label: 'Field Goal Percentage', value: `${fgPercentage}%` },
        { label: 'Missed Field Goals', value: `${Math.max(0, parseFloat(fieldGoalsAttempted) - parseFloat(fieldGoalsMade))}` },
      ],
    });
  };

  const madeValue = parseFloat(fieldGoalsMade) || 0;
  const attemptedValue = parseFloat(fieldGoalsAttempted) || 0;
  const missedValue = Math.max(0, attemptedValue - madeValue);

  const chartData = fgPercentage !== null ? [
    { label: 'Made', value: madeValue },
    { label: 'Missed', value: missedValue },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="fieldGoalsMade">Field Goals Made</Label>
        <Input
          id="fieldGoalsMade"
          type="number"
          value={fieldGoalsMade}
          onChange={(e) => setFieldGoalsMade(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fieldGoalsAttempted">Field Goals Attempted</Label>
        <Input
          id="fieldGoalsAttempted"
          type="number"
          value={fieldGoalsAttempted}
          onChange={(e) => setFieldGoalsAttempted(e.target.value)}
          min="0"
          step="1"
        />
      </div>
    </>
  );

  const results = fgPercentage !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Field Goal Percentage</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{fgPercentage.toLocaleString()}%</div>

      <div className="flex justify-center gap-6 mt-2 text-gray-700">
        <div className="text-center">
          <div className="text-sm text-gray-500">Made</div>
          <div className="text-xl font-semibold">{madeValue.toLocaleString()}</div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-500">Attempted</div>
          <div className="text-xl font-semibold">{attemptedValue.toLocaleString()}</div>
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-500">Missed</div>
          <div className="text-xl font-semibold">{missedValue.toLocaleString()}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">Please enter valid non-negative numbers. Made must be less than or equal to Attempted and Attempted must be &gt; 0.</div>
  );

  const charts = showCharts && fgPercentage !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Made vs Missed</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Basketball Stats Calculator"
      description="Calculate field goal percentage based on field goals made and attempted. Useful for coaches and players tracking shooting efficiency."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
