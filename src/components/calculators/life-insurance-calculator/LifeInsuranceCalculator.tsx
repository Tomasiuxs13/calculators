'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NumberString = string;

export default function LifeInsuranceCalculator() {
  const [annualIncome, setAnnualIncome] = useState<NumberString>('75000');
  const [debts, setDebts] = useState<NumberString>('200000');
  const [savings, setSavings] = useState<NumberString>('50000');
  const [yearsOfCoverage, setYearsOfCoverage] = useState<NumberString>('20');

  const [incomeReplacement, setIncomeReplacement] = useState<number | null>(null);
  const [recommendedCoverage, setRecommendedCoverage] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const ai = parseFloat(annualIncome);
    const db = parseFloat(debts);
    const sv = parseFloat(savings);
    const yrs = parseFloat(yearsOfCoverage);

    if ([ai, db, sv, yrs].some((v) => isNaN(v) || v < 0)) {
      setIncomeReplacement(null);
      setRecommendedCoverage(null);
      return;
    }

    const replacement = ai * yrs; // base: income replacement over desired years
    const recommended = Math.max(replacement + db - sv, 0); // ensure non-negative

    setIncomeReplacement(parseFloat(replacement.toFixed(2)));
    setRecommendedCoverage(parseFloat(recommended.toFixed(2)));
  }, [annualIncome, debts, savings, yearsOfCoverage]);

  useEffect(() => {
    // Initialize default values on first render
    setAnnualIncome('75000');
    setDebts('200000');
    setSavings('50000');
    setYearsOfCoverage('20');
  }, []);

  const handleDownloadPDF = () => {
    if (recommendedCoverage === null || incomeReplacement === null) return;

    generateCalculatorPDF({
      title: 'Life Insurance Coverage Estimate',
      inputs: [
        { label: 'Annual Income', value: `$${parseFloat(annualIncome).toLocaleString()}` },
        { label: 'Total Debts', value: `$${parseFloat(debts).toLocaleString()}` },
        { label: 'Current Savings', value: `$${parseFloat(savings).toLocaleString()}` },
        { label: 'Years of Coverage Needed', value: `${yearsOfCoverage}` },
      ],
      results: [
        { label: 'Income Replacement (Income × Years)', value: `$${incomeReplacement.toLocaleString()}` },
        { label: 'Recommended Coverage', value: `$${recommendedCoverage.toLocaleString()}` },
      ],
    });
  };

  const chartData = (incomeReplacement !== null && recommendedCoverage !== null) ? [
    { name: 'Income Replacement', value: incomeReplacement },
    { name: 'Debts', value: parseFloat(debts) || 0 },
    { name: 'Savings (deduction)', value: parseFloat(savings) || 0 },
    { name: 'Recommended', value: recommendedCoverage },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="annualIncome">Annual Income</Label>
          <Input
            id="annualIncome"
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            min="0"
            step="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="debts">Total Debts</Label>
          <Input
            id="debts"
            type="number"
            value={debts}
            onChange={(e) => setDebts(e.target.value)}
            min="0"
            step="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="savings">Current Savings</Label>
          <Input
            id="savings"
            type="number"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            min="0"
            step="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearsOfCoverage">Years of Coverage Needed</Label>
          <Input
            id="yearsOfCoverage"
            type="number"
            value={yearsOfCoverage}
            onChange={(e) => setYearsOfCoverage(e.target.value)}
            min="0"
            step="1"
          />
        </div>
        
        <button onClick={handleDownloadPDF} className="mt-4">Download PDF</button>
      </div>
      
      {showCharts && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );

  return (
    <CalculatorLayout>
      <h1>Life Insurance Calculator</h1>
      {inputs}
    </CalculatorLayout>
  );
}
