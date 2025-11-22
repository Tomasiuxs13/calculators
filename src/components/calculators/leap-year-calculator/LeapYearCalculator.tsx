'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function LeapYearCalculator() {
  const [year, setYear] = useState<string>('2024');
  const [isLeap, setIsLeap] = useState<boolean | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsed = parseInt(year, 10);
    if (!isNaN(parsed)) {
      // Gregorian leap year rule:
      // divisible by 4 -> leap
      // except divisible by 100 -> not leap
      // unless divisible by 400 -> leap
      const leap = parsed % 4 === 0 && (parsed % 100 !== 0 || parsed % 400 === 0);
      setIsLeap(leap);
    } else {
      setIsLeap(null);
    }
  }, [year]);

  const handleDownloadPDF = () => {
    if (isLeap === null) return;

    const parsed = parseInt(year, 10);
    const explanation = isLeap
      ? `${parsed} is a leap year because it meets the Gregorian calendar rules.`
      : `${parsed} is not a leap year according to the Gregorian calendar rules.`;

    generateCalculatorPDF({
      title: 'Leap Year Checker Results',
      inputs: [
        { label: 'Year', value: year },
      ],
      results: [
        { label: 'Is Leap Year', value: isLeap ? 'Yes' : 'No' },
        { label: 'Explanation', value: explanation },
      ],
    });
  };

  const parsedYear = parseInt(year, 10);
  const chartData = isLeap !== null && !isNaN(parsedYear) ? [
    { label: `${parsedYear}`, value: isLeap ? 1 : 0, status: isLeap ? 'Leap' : 'Not Leap' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="year">Year</Label>
        <Input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          step="1"
        />
      </div>
    </>
  );

  const results = isLeap !== null && !isNaN(parsedYear) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className={`text-5xl font-bold my-3 ${isLeap ? 'text-green-700' : 'text-red-700'}`}>
        {isLeap ? 'Yes' : 'No'}
      </div>
      <div className="text-lg text-gray-700 mb-2">{isLeap ? 'Leap Year' : 'Not a Leap Year'}</div>
      <div className="text-sm text-gray-600">{parsedYear % 4 === 0 ? (
        parsedYear % 100 === 0 ? (
          parsedYear % 400 === 0 ? 'Divisible by 400 — leap year.' : 'Divisible by 100 but not 400 — not a leap year.'
        ) : 'Divisible by 4 and not by 100 — leap year.'
      ) : 'Not divisible by 4 — not a leap year.'}</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Leap Year Visualization</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis ticks={[0, 1]} domain={[0, 1]} />
          <Tooltip formatter={(value: number) => (value === 1 ? 'Leap Year' : 'Not a Leap Year')} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Leap Year Calculator"
      description="Check if a year is a leap year using the Gregorian calendar rules."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
