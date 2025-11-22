'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function StepsToMilesCalculator() {
  const [steps, setSteps] = useState<string>('10000');
  const [strideLength, setStrideLength] = useState<string>('70');
  const [resultMiles, setResultMiles] = useState<number | null>(null);
  const [resultKilometers, setResultKilometers] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numSteps = parseFloat(steps);
    const numStrideLength = parseFloat(strideLength);
    if (!isNaN(numSteps) && !isNaN(numStrideLength) && numSteps >= 0 && numStrideLength > 0) {
      const totalDistanceCm = numSteps * numStrideLength;
      const miles = totalDistanceCm / 160934.4;
      const kilometers = totalDistanceCm / 100000;
      setResultMiles(parseFloat(miles.toFixed(6)));
      setResultKilometers(parseFloat(kilometers.toFixed(6)));
    } else {
      setResultMiles(null);
      setResultKilometers(null);
    }
  }, [steps, strideLength]);

  const handleDownloadPDF = () => {
    if (resultMiles === null && resultKilometers === null) return;

    generateCalculatorPDF({
      title: 'Steps to Miles/Kilometers Converter Results',
      inputs: [
        { label: 'Number of Steps', value: steps },
        { label: 'Stride Length (cm)', value: strideLength },
      ],
      results: [
        { label: 'Result in Miles', value: resultMiles !== null ? `${resultMiles} miles` : 'N/A' },
        { label: 'Result in Kilometers', value: resultKilometers !== null ? `${resultKilometers} km` : 'N/A' },
      ],
    });
  };

  const chartData = [
    { unit: 'Miles', value: resultMiles || 0, label: 'Miles' },
    { unit: 'Kilometers', value: resultKilometers || 0, label: 'Kilometers' },
  ];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="steps">Number of Steps</Label>
        <Input
          id="steps"
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          min="0"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="strideLength">Stride Length (cm)</Label>
        <Input
          id="strideLength"
          type="number"
          value={strideLength}
          onChange={(e) => setStrideLength(e.target.value)}
          min="0"
        />
      </div>
    </>
  );

  const results = (resultMiles !== null || resultKilometers !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {resultMiles !== null ? `${resultMiles.toLocaleString()} miles` : 'N/A'}
      </div>
      <div className="text-lg text-gray-700">Miles</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {resultKilometers !== null ? `${resultKilometers.toLocaleString()} km` : 'N/A'}
      </div>
      <div className="text-lg text-gray-700">Kilometers</div>
    </div>
  ) : null;

  const charts = showCharts && (resultMiles !== null || resultKilometers !== null) ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Distance Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Steps to Miles/Kilometers Converter"
      description="Convert steps to miles or kilometers based on stride length."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
