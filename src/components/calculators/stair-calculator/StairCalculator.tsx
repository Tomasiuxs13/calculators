'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type StairResult = {
  steps: number;
  adjustedRiseCm: number; // cm
  totalRunM: number; // meters
  runPerStepCm: number; // cm (as provided)
  risePerStepDesiredCm: number; // cm (as provided)
};

export default function StairCalculator() {
  const [totalRise, setTotalRise] = useState<string>('3'); // meters
  const [run, setRun] = useState<string>('30'); // cm per step
  const [rise, setRise] = useState<string>('18'); // cm per step
  const [result, setResult] = useState<StairResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const totalRiseNum = parseFloat(totalRise);
    const runCm = parseFloat(run);
    const riseCm = parseFloat(rise);

    if (
      !isNaN(totalRiseNum) && totalRiseNum >= 0 &&
      !isNaN(runCm) && runCm > 0 &&
      !isNaN(riseCm) && riseCm > 0
    ) {
      // Convert cm to meters (base unit) then compute
      const riseMeters = riseCm * 0.01; // cm -> m
      const runMeters = runCm * 0.01; // cm -> m

      // Number of steps: use Math.ceil to ensure total rise is covered
      const rawSteps = totalRiseNum / riseMeters;
      const steps = Math.max(1, Math.ceil(rawSteps));

      // Adjusted rise per step to evenly divide the total rise
      const adjustedRiseMeters = totalRiseNum / steps;
      const adjustedRiseCm = parseFloat((adjustedRiseMeters * 100).toFixed(2));

      // Total run in meters
      const totalRunM = parseFloat((steps * runMeters).toFixed(3));

      setResult({
        steps,
        adjustedRiseCm,
        totalRunM,
        runPerStepCm: parseFloat(runCm.toFixed(2)),
        risePerStepDesiredCm: parseFloat(riseCm.toFixed(2)),
      });
    } else {
      setResult(null);
    }
  }, [totalRise, run, rise]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Stair Calculator Results',
      inputs: [
        { label: 'Total Rise (m)', value: totalRise },
        { label: 'Run per Step (cm)', value: run },
        { label: 'Rise per Step (cm)', value: rise },
      ],
      results: [
        { label: 'Number of Steps', value: String(result.steps) },
        { label: 'Adjusted Rise per Step (cm)', value: `${result.adjustedRiseCm} cm` },
        { label: 'Total Run (m)', value: `${result.totalRunM} m` },
      ],
    });
  };

  const chartData = result !== null ? [
    {
      label: 'Rise (cm)',
      Desired: result.risePerStepDesiredCm,
      Actual: result.adjustedRiseCm,
    },
    {
      label: 'Run (cm)',
      Desired: result.runPerStepCm,
      Actual: result.runPerStepCm, // run per step typically unchanged
    },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="totalRise">Total Rise (m)</Label>
        <Input
          id="totalRise"
          type="number"
          value={totalRise}
          onChange={(e) => setTotalRise(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="run">Run per Step (cm)</Label>
          <Input
            id="run"
            type="number"
            value={run}
            onChange={(e) => setRun(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rise">Rise per Step (cm)</Label>
          <Input
            id="rise"
            type="number"
            value={rise}
            onChange={(e) => setRise(e.target.value)}
            min="0"
            step="0.1"
          />
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.steps}</div>
      <div className="text-lg text-gray-700 mb-2">Number of Steps (risers)</div>

      <div className="mt-4">
        <div className="text-sm text-gray-600">Adjusted Rise per Step</div>
        <div className="text-2xl font-semibold text-gray-800">{result.adjustedRiseCm.toLocaleString()} cm</div>
      </div>

      <div className="mt-4">
        <div className="text-sm text-gray-600">Total Run</div>
        <div className="text-2xl font-semibold text-gray-800">{result.totalRunM.toLocaleString()} m</div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Please enter valid positive numbers to see results.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Stair Dimension Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} cm`} />
          <Bar dataKey="Desired" fill="#60a5fa" />
          <Bar dataKey="Actual" fill="#1e40af" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Stair Calculator"
      description="Calculate stair dimensions and number of steps. Enter the total rise (in meters), desired run per step and rise per step (in centimeters) and get the number of risers, adjusted rise per step, and total run."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
