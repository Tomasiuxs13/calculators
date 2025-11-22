'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function WaistToHipRatioCalculator() {
  const [waist, setWaist] = useState<string>('85');
  const [hip, setHip] = useState<string>('95');
  const [ratio, setRatio] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const waistValue = parseFloat(waist);
    const hipValue = parseFloat(hip);
    if (!isNaN(waistValue) && !isNaN(hipValue) && hipValue > 0) {
      setRatio(parseFloat((waistValue / hipValue).toFixed(2)));
    } else {
      setRatio(null);
    }
  }, [waist, hip]);

  const handleDownloadPDF = () => {
    if (ratio === null) return;

    generateCalculatorPDF({
      title: 'Waist to Hip Ratio Results',
      inputs: [
        { label: 'Waist Circumference', value: waist },
        { label: 'Hip Circumference', value: hip },
      ],
      results: [
        { label: 'Waist to Hip Ratio', value: ratio.toString() },
      ],
    });
  };

  const chartData = ratio !== null ? [
    { label: 'Waist to Hip Ratio', value: ratio },
  ] : [];

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="waist">Waist Circumference (cm)</Label>
        <Input
          id="waist"
          type="number"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hip">Hip Circumference (cm)</Label>
        <Input
          id="hip"
          type="number"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = ratio !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {ratio.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Waist to Hip Ratio</div>
    </div>
  ) : null;

  const charts = showCharts && ratio !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Waist to Hip Ratio Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Waist to Hip Ratio Calculator"
      description="Calculate waist-to-hip ratio (WHR) to assess health risks."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
