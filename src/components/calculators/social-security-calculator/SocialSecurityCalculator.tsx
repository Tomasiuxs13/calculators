'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function SocialSecurityCalculator() {
  const [currentAge, setCurrentAge] = useState<string>('35');
  const [retirementAge, setRetirementAge] = useState<string>('67');
  const [averageAnnualIncome, setAverageAnnualIncome] = useState<string>('75000');

  const [monthlyBenefit, setMonthlyBenefit] = useState<number | null>(null);
  const [annualBenefit, setAnnualBenefit] = useState<number | null>(null);
  const [yearsUntilRetirement, setYearsUntilRetirement] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const age = parseFloat(currentAge);
    const retire = parseFloat(retirementAge);
    const income = parseFloat(averageAnnualIncome);

    if (isNaN(age) || isNaN(retire) || isNaN(income) || age < 0 || retire < 0 || income < 0) {
      setMonthlyBenefit(null);
      setAnnualBenefit(null);
      setYearsUntilRetirement(null);
      return;
    }

    // Years until retirement (can be negative if already past retirementAge)
    const yearsToRetire = retire - age;
    setYearsUntilRetirement(parseFloat(yearsToRetire.toFixed(2)));

    // Simple model to estimate Social Security benefit:
    // - Base replacement rate: 40% of average annual income (simplified approximation)
    // - Adjustment for age relative to full retirement age (FRA = 67):
    //     * Early retirement (<67): reduce ~6% per year before FRA
    //     * Delayed retirement (>67): increase ~8% per year after FRA
    const FRA = 67;
    const baseAnnualBenefit = income * 0.4; // simplified replacement

    let adjustmentFactor = 1;
    if (retire < FRA) {
      const yearsEarly = FRA - retire;
      adjustmentFactor = 1 - yearsEarly * 0.06; // reduce 6% per year early
    } else if (retire > FRA) {
      const yearsDelayed = retire - FRA;
      adjustmentFactor = 1 + yearsDelayed * 0.08; // increase 8% per year delayed
    }

    // Ensure factor isn't negative
    if (adjustmentFactor < 0) adjustmentFactor = 0;

    const estimatedAnnual = baseAnnualBenefit * adjustmentFactor;
    const estimatedMonthly = estimatedAnnual / 12;

    setAnnualBenefit(parseFloat(estimatedAnnual.toFixed(2)));
    setMonthlyBenefit(parseFloat(estimatedMonthly.toFixed(2)));
  }, [currentAge, retirementAge, averageAnnualIncome]);

  const handleDownloadPDF = () => {
    if (monthlyBenefit === null || annualBenefit === null || yearsUntilRetirement === null) return;

    generateCalculatorPDF({
      title: 'Social Security Estimate',
      inputs: [
        { label: 'Current Age', value: currentAge },
        { label: 'Retirement Age', value: retirementAge },
        { label: 'Average Annual Income', value: `$${parseFloat(averageAnnualIncome || '0').toLocaleString()}` },
      ],
      results: [
        { label: 'Estimated Monthly Benefit', value: `$${monthlyBenefit.toLocaleString()}` },
        { label: 'Estimated Annual Benefit', value: `$${annualBenefit.toLocaleString()}` },
        { label: 'Years Until Retirement', value: `${yearsUntilRetirement}` },
      ],
    });
  };

  const chartData = (annualBenefit !== null) ? [
    { label: 'Average Annual Income', value: parseFloat(averageAnnualIncome) || 0 },
    { label: 'Estimated Annual Benefit', value: annualBenefit },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentAge">Current Age</Label>
        <Input
          id="currentAge"
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="retirementAge">Retirement Age</Label>
        <Input
          id="retirementAge"
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="averageAnnualIncome">Average Annual Income</Label>
        <Input
          id="averageAnnualIncome"
          type="number"
          value={averageAnnualIncome}
          onChange={(e) => setAverageAnnualIncome(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      {/* Included Select import to follow patterns; provide a simple option for display currency (non-essential) */}
      <div className="space-y-2 mt-4">
        <Label htmlFor="currency">Currency</Label>
        <Select id="currency" defaultValue="usd" onChange={() => {}}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </Select>
      </div>
    </>
  );

  const results = (monthlyBenefit !== null && annualBenefit !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Monthly Benefit</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${monthlyBenefit.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700 mb-2">per month</div>

      <div className="text-sm text-gray-600">Estimated Annual Benefit</div>
      <div className="text-2xl font-semibold text-gray-800 my-2">${annualBenefit.toLocaleString()}</div>

      {yearsUntilRetirement !== null && (
        <div className="text-sm text-gray-600">Years until retirement</div>
      )}
      {yearsUntilRetirement !== null && (
        <div className="text-lg font-medium text-gray-700">{yearsUntilRetirement}</div>
      )}
    </div>
  ) : null;

  const charts = showCharts && annualBenefit !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Income vs Estimated Benefit</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Social Security Calculator"
      description="Estimate your Social Security benefits using a simplified model based on your average income and planned retirement age. This tool provides a quick approximation to help with retirement planning."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
