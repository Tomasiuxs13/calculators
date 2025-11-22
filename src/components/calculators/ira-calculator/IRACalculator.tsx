'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function IRACalculator() {
  const [currentBalance, setCurrentBalance] = useState<string>('25000');
  const [annualContribution, setAnnualContribution] = useState<string>('6000');
  const [rate, setRate] = useState<string>('7.0');
  const [years, setYears] = useState<string>('25');
  const [accountType, setAccountType] = useState<string>('traditional');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const balance = parseFloat(currentBalance);
    const contribution = parseFloat(annualContribution);
    const interestRate = parseFloat(rate) / 100;
    const yearsToRetirement = parseInt(years);

    if (!isNaN(balance) && !isNaN(contribution) && !isNaN(interestRate) && !isNaN(yearsToRetirement)) {
      let futureValue = balance;
      for (let i = 0; i < yearsToRetirement; i++) {
        futureValue = futureValue * (1 + interestRate) + contribution;
      }
      setResult(parseFloat(futureValue.toFixed(2)));
    } else {
      setResult(null);
    }
  }, [currentBalance, annualContribution, rate, years]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'IRA Calculator Results',
      inputs: [
        { label: 'Current IRA Balance', value: currentBalance },
        { label: 'Annual Contribution', value: annualContribution },
        { label: 'Expected Return (%)', value: rate },
        { label: 'Years Until Retirement', value: years },
        { label: 'Account Type', value: accountType },
      ],
      results: [
        { label: 'Future Value', value: `$${result}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="currentBalance">Current IRA Balance</Label>
        <Input
          id="currentBalance"
          type="number"
          value={currentBalance}
          onChange={(e) => setCurrentBalance(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="annualContribution">Annual Contribution</Label>
        <Input
          id="annualContribution"
          type="number"
          value={annualContribution}
          onChange={(e) => setAnnualContribution(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rate">Expected Return (%)</Label>
        <Input
          id="rate"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years">Years Until Retirement</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountType">Account Type</Label>
        <Select
          id="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="traditional">Traditional IRA</option>
          <option value="roth">Roth IRA</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Future Value</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ${result.toLocaleString()}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="IRA Calculator"
      description="Calculate IRA contributions, growth, and retirement savings."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
