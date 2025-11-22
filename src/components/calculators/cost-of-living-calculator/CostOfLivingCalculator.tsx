'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CityKey = string;

// Cost of living index relative to a base (New York = 100)
const cityCostIndices: Record<CityKey, number> = {
  'new york': 100,
  'los angeles': 92,
  'san francisco': 120,
  'chicago': 78,
  'seattle': 105,
  'boston': 110,
  'miami': 85,
  'denver': 88,
  'austin': 80,
  'houston': 74,
};

function normalizeCityName(name: string) {
  return name.trim().toLowerCase();
}

function getIndexForCity(city: string): number {
  const key = normalizeCityName(city);
  if (cityCostIndices[key] !== undefined) return cityCostIndices[key];

  // Try to find close match by startsWith
  const found = Object.keys(cityCostIndices).find((k) => k.startsWith(key) || key.startsWith(k));
  if (found) return cityCostIndices[found];

  // Unknown city fallback: assume 100 (neutral)
  return 100;
}

export default function CostOfLivingCalculator() {
  const [currentCity, setCurrentCity] = useState<string>('New York');
  const [targetCity, setTargetCity] = useState<string>('Los Angeles');
  const [currentSalary, setCurrentSalary] = useState<string>('75000');
  const [adjustedSalary, setAdjustedSalary] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(getIndexForCity('New York'));
  const [targetIndex, setTargetIndex] = useState<number>(getIndexForCity('Los Angeles'));
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const salaryNum = parseFloat(currentSalary);
    const cIndex = getIndexForCity(currentCity);
    const tIndex = getIndexForCity(targetCity);
    setCurrentIndex(cIndex);
    setTargetIndex(tIndex);

    if (!isNaN(salaryNum) && salaryNum >= 0) {
      // Convert by index: adjusted = salary * (targetIndex / currentIndex)
      const converted = salaryNum * (tIndex / cIndex);
      setAdjustedSalary(parseFloat(converted.toFixed(2)));
    } else {
      setAdjustedSalary(null);
    }
  }, [currentCity, targetCity, currentSalary]);

  const handleDownloadPDF = () => {
    if (adjustedSalary === null) return;

    generateCalculatorPDF({
      title: 'Cost of Living Comparison Results',
      inputs: [
        { label: 'Current City', value: currentCity },
        { label: 'Target City', value: targetCity },
        { label: 'Current Salary', value: `$${parseFloat(currentSalary || '0').toLocaleString()}` },
      ],
      results: [
        { label: 'Current City Index', value: `${currentIndex}` },
        { label: 'Target City Index', value: `${targetIndex}` },
        { label: 'Equivalent Salary in Target City', value: `$${adjustedSalary.toLocaleString()}` },
      ],
    });
  };

  const chartData = adjustedSalary !== null ? [
    { label: 'Original Salary', value: parseFloat(currentSalary) || 0, color: '#3b82f6' },
    { label: 'Equivalent Salary', value: adjustedSalary, color: '#10b981' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentCity">Current City</Label>
        <Input
          id="currentCity"
          type="text"
          value={currentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetCity">Target City</Label>
        <Input
          id="targetCity"
          type="text"
          value={targetCity}
          onChange={(e) => setTargetCity(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentSalary">Current Salary (annual)</Label>
        <Input
          id="currentSalary"
          type="number"
          value={currentSalary}
          onChange={(e) => setCurrentSalary(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      {/* Example of using Select: choose display rounding preference (kept for pattern compatibility) */}
      <div className="space-y-2">
        <Label htmlFor="rounding">Rounding</Label>
        <Select
          id="rounding"
          value="2"
          onChange={() => { /* no-op: placeholder to follow pattern */ }}
        >
          <option value="0">0 decimals</option>
          <option value="1">1 decimal</option>
          <option value="2">2 decimals</option>
        </Select>
      </div>
    </>
  );

  const results = adjustedSalary !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Equivalent Salary in {targetCity}</div>
      <div className="text-5xl font-bold text-blue-900 my-3">${adjustedSalary.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Based on indices: {currentCity} ({currentIndex}) → {targetCity} ({targetIndex})</div>
      {normalizeCityName(currentCity) !== normalizeCityName(currentCity) && null}
    </div>
  ) : null;

  const charts = showCharts && adjustedSalary !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Salary Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${Number(value).toLocaleString()}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cost of Living Calculator"
      description="Compare cost of living between different cities and estimate the equivalent salary you would need in a target city to match your current standard of living."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
