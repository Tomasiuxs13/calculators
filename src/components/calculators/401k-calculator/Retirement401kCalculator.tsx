'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function Retirement401kCalculator() {
  const [currentBalance, setCurrentBalance] = useState<number>(50000);
  const [annualSalary, setAnnualSalary] = useState<number>(60000);
  const [contributionPercent, setContributionPercent] = useState<number>(6);
  const [employerMatch, setEmployerMatch] = useState<number>(3);
  const [rate, setRate] = useState<number>(7.0);
  const [years, setYears] = useState<number>(30);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  useEffect(() => {
    const annualContribution = (annualSalary * (contributionPercent / 100)) + (annualSalary * (employerMatch / 100));
    const totalYears = years;
    const futureValueCalculation = currentBalance * Math.pow(1 + (rate / 100), totalYears) + annualContribution * ((Math.pow(1 + (rate / 100), totalYears) - 1) / (rate / 100));
    setFutureValue(parseFloat(futureValueCalculation.toFixed(2)));
  }, [currentBalance, annualSalary, contributionPercent, employerMatch, rate, years]);

  const handleDownloadPDF = () => {
    if (futureValue === null) return;

    generateCalculatorPDF({
      title: '401(k) Retirement Savings Results',
      inputs: [
        { label: 'Current 401(k) Balance', value: currentBalance },
        { label: 'Annual Salary', value: annualSalary },
        { label: 'Your Contribution (%)', value: contributionPercent },
        { label: 'Employer Match (%)', value: employerMatch },
        { label: 'Expected Return (%)', value: rate },
        { label: 'Years Until Retirement', value: years },
      ],
      results: [
        { label: 'Future Value', value: `$${futureValue}` },
      ],
    });
  };

  const results = futureValue !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Future Value</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${futureValue.toLocaleString()}
      </div>
    </div>
  ) : null;

  const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    const parsedValue = parseFloat(value);
    setter(isNaN(parsedValue) ? 0 : parsedValue);
  };

  return (
    <CalculatorLayout
      title="401(k) Retirement Calculator"
      description="Calculate 401(k) retirement savings and employer match contributions."
      inputs={(
        <>
          <div className="space-y-2">
            <Label htmlFor="currentBalance">Current 401(k) Balance</Label>
            <Input
              id="currentBalance"
              type="number"
              value={currentBalance}
              onChange={(e) => handleChange(setCurrentBalance, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="annualSalary">Annual Salary</Label>
            <Input
              id="annualSalary"
              type="number"
              value={annualSalary}
              onChange={(e) => handleChange(setAnnualSalary, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contributionPercent">Your Contribution (%)</Label>
            <Input
              id="contributionPercent"
              type="number"
              value={contributionPercent}
              onChange={(e) => handleChange(setContributionPercent, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employerMatch">Employer Match (%)</Label>
            <Input
              id="employerMatch"
              type="number"
              value={employerMatch}
              onChange={(e) => handleChange(setEmployerMatch, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate">Expected Return (%)</Label>
            <Input
              id="rate"
              type="number"
              value={rate}
              onChange={(e) => handleChange(setRate, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years">Years Until Retirement</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => handleChange(setYears, e.target.value)}
            />
          </div>
          <button
            onClick={handleDownloadPDF}
            disabled={futureValue === null}
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded"
          >
            Download PDF
          </button>
        </>
      )}
      results={results}
    />
  );
}
