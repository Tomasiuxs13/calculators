'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NumberString = string;

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState<NumberString>('35');
  const [retirementAge, setRetirementAge] = useState<NumberString>('65');
  const [currentSavings, setCurrentSavings] = useState<NumberString>('50000');
  const [monthlyContribution, setMonthlyContribution] = useState<NumberString>('500');
  const [expectedReturn, setExpectedReturn] = useState<NumberString>('7');

  const [projectedSavings, setProjectedSavings] = useState<number | null>(null);
  const [fvCurrentSavings, setFvCurrentSavings] = useState<number>(0);
  const [fvContributions, setFvContributions] = useState<number>(0);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const ageNum = parseFloat(currentAge);
    const retireNum = parseFloat(retirementAge);
    const currSaveNum = parseFloat(currentSavings);
    const monthlyNum = parseFloat(monthlyContribution);
    const annualReturnNum = parseFloat(expectedReturn);

    if (
      isNaN(ageNum) ||
      isNaN(retireNum) ||
      isNaN(currSaveNum) ||
      isNaN(monthlyNum) ||
      isNaN(annualReturnNum)
    ) {
      setProjectedSavings(null);
      setFvCurrentSavings(0);
      setFvContributions(0);
      return;
    }

    const years = retireNum - ageNum;
    if (years <= 0) {
      setProjectedSavings(null);
      setFvCurrentSavings(0);
      setFvContributions(0);
      return;
    }

    const r = annualReturnNum / 100; // annual rate as decimal
    const n = Math.round(years * 12); // months
    const monthlyRate = r / 12;

    // Future value of current savings compounded annually but we'll compound monthly for consistency
    const fvCurrent = currSaveNum * Math.pow(1 + monthlyRate, n);

    // Future value of a series of monthly contributions (ordinary annuity)
    let fvContrib = 0;
    if (monthlyRate === 0) {
      fvContrib = monthlyNum * n;
    } else {
      fvContrib = monthlyNum * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate);
    }

    const total = fvCurrent + fvContrib;

    setFvCurrentSavings(parseFloat(fvCurrent.toFixed(2)));
    setFvContributions(parseFloat(fvContrib.toFixed(2)));
    setProjectedSavings(parseFloat(total.toFixed(2)));
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn]);

  const handleDownloadPDF = () => {
    if (projectedSavings === null) return;

    generateCalculatorPDF({
      title: 'Retirement Savings Projection',
      inputs: [
        { label: 'Current Age', value: currentAge },
        { label: 'Retirement Age', value: retirementAge },
        { label: 'Current Retirement Savings', value: `$${parseFloat(currentSavings || '0').toLocaleString()}` },
        { label: 'Monthly Contribution', value: `$${parseFloat(monthlyContribution || '0').toLocaleString()}` },
        { label: 'Expected Annual Return (%)', value: `${expectedReturn}%` },
      ],
      results: [
        { label: 'Projected Savings at Retirement', value: `$${projectedSavings.toLocaleString()}` },
        { label: 'Future Value of Current Savings', value: `$${fvCurrentSavings.toLocaleString()}` },
        { label: 'Future Value of Contributions', value: `$${fvContributions.toLocaleString()}` },
      ],
    });
  };

  const chartData = projectedSavings !== null ? [
    { label: 'Current Savings (FV)', value: fvCurrentSavings, category: 'Current' },
    { label: 'Contributions (FV)', value: fvContributions, category: 'Contributions' },
    { label: 'Total', value: projectedSavings, category: 'Total' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
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

        <div className="space-y-2">
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
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="currentSavings">Current Retirement Savings</Label>
          <Input
            id="currentSavings"
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            min="0"
            step="100"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
          <Input
            id="monthlyContribution"
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            min="0"
            step="10"
          />
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
        <Input
          id="expectedReturn"
          type="number"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      {/* Select imported to follow pattern - not used for this calculator but kept for consistency */}
      <div className="mt-4">
        <Label htmlFor="dummySelect">Planning Horizon</Label>
        <Select id="dummySelect" value="default" onChange={() => {}}>
          <option value="default">Standard</option>
        </Select>
      </div>
    </>
  );

  const results = projectedSavings !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Projected Savings at Retirement</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{`$${projectedSavings.toLocaleString()}`}</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Future Value of Current Savings</div>
          <div className="text-2xl font-semibold mt-2">{`$${fvCurrentSavings.toLocaleString()}`}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Future Value of Contributions</div>
          <div className="text-2xl font-semibold mt-2">{`$${fvContributions.toLocaleString()}`}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid ages (retirement age must be greater than current age) and numeric inputs to see a projection.</div>
  );

  const charts = showCharts && projectedSavings !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Savings Breakdown</h3>
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
      title="Retirement Calculator"
      description="Calculate how much you need to save for retirement by projecting your current savings and monthly contributions using an expected annual return."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
