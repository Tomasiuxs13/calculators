'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultType = {
  predictedTimeMin: number; // total minutes for predicted 5K
  predictedPaceMinPerKm: number; // min per km
  trainingTotalTimeMin: number; // total minutes for training distance
};

export default function FiveKTimeCalculator() {
  const [currentPace, setCurrentPace] = useState<string>('5');
  const [distance, setDistance] = useState<string>('10');
  const [result, setResult] = useState<ResultType | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Riegel exponent commonly used for race time prediction
  const RIEGEL_EXP = 1.06;

  useEffect(() => {
    const pace = parseFloat(currentPace); // minutes per km
    const dist = parseFloat(distance); // km

    if (!isNaN(pace) && pace > 0 && !isNaN(dist) && dist > 0) {
      // Training total time in minutes
      const trainingTotal = pace * dist; // minutes

      // Predict 5K time using Riegel: T2 = T1 * (D2/D1)^1.06
      // where T1 is trainingTotal (time for distance D1)
      const predictedTime = trainingTotal * Math.pow(5 / dist, RIEGEL_EXP);
      const predictedPace = predictedTime / 5; // min per km

      setResult({
        predictedTimeMin: parseFloat(predictedTime.toFixed(4)),
        predictedPaceMinPerKm: parseFloat(predictedPace.toFixed(4)),
        trainingTotalTimeMin: parseFloat(trainingTotal.toFixed(4)),
      });
    } else {
      setResult(null);
    }
  }, [currentPace, distance]);

  const formatMinutesToMMSS = (minutes: number) => {
    if (!isFinite(minutes) || minutes <= 0) return '0:00';
    const totalSeconds = Math.round(minutes * 60);
    const mm = Math.floor(totalSeconds / 60);
    const ss = totalSeconds % 60;
    return `${mm}:${ss.toString().padStart(2, '0')}`;
  };

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: '5K Time Prediction Results',
      inputs: [
        { label: 'Current Pace (min/km)', value: `${currentPace} min/km` },
        { label: 'Training Distance (km)', value: `${distance} km` },
      ],
      results: [
        { label: 'Predicted 5K Time', value: `${formatMinutesToMMSS(result.predictedTimeMin)} (${result.predictedTimeMin.toFixed(2)} min)` },
        { label: 'Predicted Pace', value: `${result.predictedPaceMinPerKm.toFixed(2)} min/km` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Training Time', value: result.trainingTotalTimeMin, display: formatMinutesToMMSS(result.trainingTotalTimeMin) },
    { label: 'Predicted 5K', value: result.predictedTimeMin, display: formatMinutesToMMSS(result.predictedTimeMin) },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="currentPace">Current Pace (min/km)</Label>
        <Input
          id="currentPace"
          type="number"
          value={currentPace}
          onChange={(e) => setCurrentPace(e.target.value)}
          min="0.1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="distance">Training Distance (km)</Label>
        <Input
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0.1"
          step="0.1"
        />
      </div>

      {/* Imported Select to follow patterns from examples (not required for this calculator) */}
      <div className="hidden">
        <Label htmlFor="placeholderSelect">Placeholder</Label>
        <Select id="placeholderSelect" value={''} onChange={() => {}}>
          <option value="">None</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Predicted 5K Time</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{formatMinutesToMMSS(result.predictedTimeMin)}</div>
      <div className="text-lg text-gray-700">{result.predictedPaceMinPerKm.toFixed(2)} min/km</div>
      <div className="mt-3 text-sm text-gray-600">Based on {parseFloat(distance).toFixed(2)} km at {parseFloat(currentPace).toFixed(2)} min/km (Riegel)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Time Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${formatMinutesToMMSS(value)} (${value.toFixed(2)} min)`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="5K Time Calculator"
      description="Calculate a predicted 5K race time using your current pace and a recent training distance. Uses the Riegel formula for reliable extrapolation."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
