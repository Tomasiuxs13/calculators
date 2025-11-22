'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type PensionInputs = {
  yearsOfService: string;
  finalSalary: string;
  pensionMultiplier: string; // percentage value (e.g., "2" for 2%)
};

export default function PensionCalculator() {
  const [yearsOfService, setYearsOfService] = useState<string>('30');
  const [finalSalary, setFinalSalary] = useState<string>('80000');
  const [pensionMultiplier, setPensionMultiplier] = useState<string>('2');

  const [annualPension, setAnnualPension] = useState<number | null>(null);
  const [replacementRate, setReplacementRate] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const years = parseFloat(yearsOfService);
    const salary = parseFloat(finalSalary);
    const multiplierPercent = parseFloat(pensionMultiplier);

    if (!isNaN(years) && years >= 0 && !isNaN(salary) && salary >= 0 && !isNaN(multiplierPercent) && multiplierPercent >= 0) {
      // Convert percentage to decimal first (analogous to convert-to-base then convert-to-target)
      const multiplierDecimal = multiplierPercent / 100;
      // Pension formula: Annual Pension = Years of Service * Accrual Rate (per year) * Final Average Salary
      const pension = years * multiplierDecimal * salary;
      const replacement = salary > 0 ? (pension / salary) * 100 : 0;

      setAnnualPension(parseFloat(pension.toFixed(2)));
      setReplacementRate(parseFloat(replacement.toFixed(2)));
    } else {
      setAnnualPension(null);
      setReplacementRate(null);
    }
  }, [yearsOfService, finalSalary, pensionMultiplier]);

  const handleDownloadPDF = () => {
    if (annualPension === null || replacementRate === null) return;

    generateCalculatorPDF({
      title: 'Pension Calculator Results',
      inputs: [
        { label: 'Years of Service', value: yearsOfService },
        { label: 'Final Average Salary', value: finalSalary },
        { label: 'Pension Multiplier (%)', value: pensionMultiplier },
      ],
      results: [
        { label: 'Annual Pension', value: `${annualPension.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}` },
        { label: 'Replacement Rate', value: `${replacementRate}%` },
      ],
    });
  };

  const chartData = annualPension !== null ? [
    { label: 'Annual Pension', value: annualPension, unit: 'USD' },
    { label: 'Final Salary', value: parseFloat(finalSalary) || 0, unit: 'USD' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="yearsOfService">Years of Service</Label>
        <Input
          id="yearsOfService"
          type="number"
          value={yearsOfService}
          onChange={(e) => setYearsOfService(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalSalary">Final Average Salary</Label>
        <Input
          id="finalSalary"
          type="number"
          value={finalSalary}
          onChange={(e) => setFinalSalary(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="pensionMultiplier">Pension Multiplier (%)</Label>
        <Input
          id="pensionMultiplier"
          type="number"
          value={pensionMultiplier}
          onChange={(e) => setPensionMultiplier(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>
    </>
  );

  const results = annualPension !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Pension</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {annualPension.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
      </div>
      <div className="text-lg text-gray-700">Replacement Rate: {replacementRate?.toFixed(2)}%</div>
    </div>
  ) : null;

  const charts = showCharts && annualPension !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Pension vs Final Salary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pension Calculator"
      description="Calculate pension benefits based on years of service and final average salary. Uses a pension multiplier (accrual rate) to estimate annual pension and replacement rate."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
