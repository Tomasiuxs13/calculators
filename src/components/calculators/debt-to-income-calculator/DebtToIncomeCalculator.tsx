'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DebtToIncomeCalculator() {
  const [monthlyDebt, setMonthlyDebt] = useState<string>('1500');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('6000');
  const [debtToIncomeRatio, setDebtToIncomeRatio] = useState<number | null>(null);

  useEffect(() => {
    const debt = parseFloat(monthlyDebt);
    const income = parseFloat(monthlyIncome);
    if (!isNaN(debt) && !isNaN(income) && income > 0) {
      const ratio = (debt / income) * 100;
      setDebtToIncomeRatio(parseFloat(ratio.toFixed(2)));
    } else {
      setDebtToIncomeRatio(null);
    }
  }, [monthlyDebt, monthlyIncome]);

  const handleDownloadPDF = () => {
    if (debtToIncomeRatio === null) return;

    generateCalculatorPDF({
      title: 'Debt to Income Ratio Results',
      inputs: [
        { label: 'Monthly Debt Payments', value: monthlyDebt },
        { label: 'Monthly Gross Income', value: monthlyIncome },
      ],
      results: [
        { label: 'Debt to Income Ratio', value: `${debtToIncomeRatio}%` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="monthlyDebt">Monthly Debt Payments</Label>
        <Input
          id="monthlyDebt"
          type="number"
          value={monthlyDebt}
          onChange={(e) => setMonthlyDebt(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyIncome">Monthly Gross Income</Label>
        <Input
          id="monthlyIncome"
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = debtToIncomeRatio !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Debt to Income Ratio</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {debtToIncomeRatio.toLocaleString()}%
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Debt to Income Calculator"
      description="Calculate your debt-to-income ratio to assess financial health."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
