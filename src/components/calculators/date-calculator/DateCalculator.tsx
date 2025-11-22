'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DateCalculator() {
  const [startDate, setStartDate] = useState<string>('2023-01-01');
  const [endDate, setEndDate] = useState<string>('2023-01-02');
  const [result, setResult] = useState<number>(0);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 0;
        setResult(diffDays);
      } else {
        setResult(0);
      }
    } else {
      setResult(0);
    }
  }, [startDate, endDate]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Date Calculator Results',
      inputs: [
        { label: 'Start Date', value: startDate },
        { label: 'End Date', value: endDate },
      ],
      results: [
        { label: 'Difference', value: `${result} days` },
      ],
    });
  };

  const chartData = result >= 0 ? [
    { label: 'Start Date', value: 0 },
    { label: 'End Date', value: result },
  ] : [];

  return (
    <CalculatorLayout
      title="Date Calculator"
      description="Calculate the number of days, weeks, months, or years between two dates."
      inputs={(
        <>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </>
      )}
      results={result !== null ? (
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Difference</div>
          <div className="text-5xl font-bold text-blue-900 my-3">
            {result.toLocaleString()} days
          </div>
        </div>
      ) : null}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={showCharts && result >= 0 ? (
        <div className="w-full">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : null}
    />
  );
}
