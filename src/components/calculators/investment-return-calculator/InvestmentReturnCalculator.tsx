'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function InvestmentReturnCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<string>('10000');
  const [currentValue, setCurrentValue] = useState<string>('15000');
  const [timePeriod, setTimePeriod] = useState<string>('5');
  const [roi, setRoi] = useState<number | null>(null);
  const [annualizedReturn, setAnnualizedReturn] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const initial = parseFloat(initialInvestment);
    const current = parseFloat(currentValue);
    const time = parseFloat(timePeriod);

    if (!isNaN(initial) && !isNaN(current) && !isNaN(time) && initial > 0 && time > 0) {
      const calculatedRoi = ((current - initial) / initial) * 100;
      setRoi(parseFloat(calculatedRoi.toFixed(2)));

      const annualized = Math.pow((current / initial), (1 / time)) - 1;
      setAnnualizedReturn(parseFloat((annualized * 100).toFixed(2)));
    } else {
      setRoi(null);
      setAnnualizedReturn(null);
    }
  }, [initialInvestment, currentValue, timePeriod]);

  const handleDownloadPDF = () => {
    if (roi === null || annualizedReturn === null) return;

    generateCalculatorPDF({
      title: 'Investment Return Calculator Results',
      inputs: [
        { label: 'Initial Investment', value: initialInvestment },
        { label: 'Current Value', value: currentValue },
        { label: 'Time Period (years)', value: timePeriod },
      ],
      results: [
        { label: 'ROI (%)', value: `${roi} %` },
        { label: 'Annualized Return (%)', value: `${annualizedReturn} %` },
      ],
    });
  };

  const chartData = roi !== null && annualizedReturn !== null ? [
    { label: 'ROI', value: roi },
    { label: 'Annualized Return', value: annualizedReturn },
  ] : [];

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="initialInvestment">Initial Investment</Label>
        <Input
          id="initialInvestment"
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentValue">Current Value</Label>
        <Input
          id="currentValue"
          type="number"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timePeriod">Time Period (years)</Label>
        <Input
          id="timePeriod"
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = (roi !== null && annualizedReturn !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        ROI: {roi.toLocaleString()} %
      </div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Annualized Return: {annualizedReturn.toLocaleString()} %
      </div>
    </div>
  ) : null;

  const charts = showCharts && roi !== null && annualizedReturn !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Investment Returns Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} %`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Investment Return Calculator"
      description="Calculate return on investment (ROI) and annualized returns."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
