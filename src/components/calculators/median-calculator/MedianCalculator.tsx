'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function MedianCalculator() {
  const [numbers, setNumbers] = useState<string>('10, 20, 30, 40, 50');
  const [median, setMedian] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numArray = numbers.split(',').map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
    const mid = Math.floor(numArray.length / 2);
    setMedian(numArray.length % 2 !== 0 ? numArray[mid] : (numArray[mid - 1] + numArray[mid]) / 2);
  }, [numbers]);

  const handleDownloadPDF = () => {
    if (median === null) return;

    generateCalculatorPDF({
      title: 'Median Calculation Results',
      inputs: [
        { label: 'Numbers', value: numbers }
      ],
      results: [
        { label: 'Median', value: `${median}` }
      ],
    });
  };

  return (
    <CalculatorLayout
      title="Median Calculator"
      description="Calculate the median (middle value) of a set of numbers."
      inputs={(
        <>
          <Label htmlFor="numbers">Numbers (comma-separated)</Label>
          <Input
            id="numbers"
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
        </>
      )}
      results={median !== null ? (
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Median</div>
          <div className="text-5xl font-bold text-blue-900 my-3">
            {median.toLocaleString()}
          </div>
        </div>
      ) : null}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={null}
    />
  );
}
