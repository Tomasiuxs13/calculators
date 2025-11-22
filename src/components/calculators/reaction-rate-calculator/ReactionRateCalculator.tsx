'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function ReactionRateCalculator() {
  const [concentrationChange, setConcentrationChange] = useState<string>('0.1');
  const [timeChange, setTimeChange] = useState<string>('10');
  const [rate, setRate] = useState<number | null>(null); // M/s
  const [rateConstant, setRateConstant] = useState<number | null>(null); // s^-1 (pseudo-first-order assuming [A]0 = 1 M)
  const [halfLife, setHalfLife] = useState<number | null>(null); // s, for first-order assumption
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const dC = parseFloat(concentrationChange);
    const dt = parseFloat(timeChange);

    if (!isNaN(dC) && !isNaN(dt) && dt > 0) {
      // Average reaction rate (M/s)
      const computedRate = dC / dt;
      // For demonstration, compute a pseudo-first-order rate constant assuming [A]_0 = 1.0 M
      const kPseudoFirst = computedRate; // units 1/s when [A]_0 = 1 M

      // Half-life for first-order: t1/2 = ln(2) / k
      const tHalf = kPseudoFirst > 0 ? Math.log(2) / kPseudoFirst : null;

      setRate(parseFloat(computedRate.toFixed(6)));
      setRateConstant(parseFloat(kPseudoFirst.toFixed(6)));
      setHalfLife(tHalf === null ? null : parseFloat(tHalf.toFixed(6)));
    } else {
      setRate(null);
      setRateConstant(null);
      setHalfLife(null);
    }
  }, [concentrationChange, timeChange]);

  const handleDownloadPDF = () => {
    if (rate === null) return;

    generateCalculatorPDF({
      title: 'Reaction Rate Calculator Results',
      inputs: [
        { label: 'Concentration Change (Δ[A]) (M)', value: concentrationChange },
        { label: 'Time Change (Δt) (s)', value: timeChange },
      ],
      results: [
        { label: 'Average Reaction Rate (M/s)', value: `${rate} M/s` },
        { label: 'Pseudo First-Order Rate Constant (1/s)', value: `${rateConstant} s⁻¹` },
        { label: 'First-Order Half-Life (s)', value: halfLife !== null ? `${halfLife} s` : 'N/A' },
      ],
    });
  };

  const chartData = rate !== null ? [
    { label: 'Δ[A] (M)', value: parseFloat(concentrationChange) || 0, unit: 'M' },
    { label: 'Rate (M/s)', value: rate, unit: 'M/s' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="concentrationChange">Concentration Change (M)</Label>
        <Input
          id="concentrationChange"
          type="number"
          value={concentrationChange}
          onChange={(e) => setConcentrationChange(e.target.value)}
          step="0.000001"
          min="-1000000"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeChange">Time Change (s)</Label>
        <Input
          id="timeChange"
          type="number"
          value={timeChange}
          onChange={(e) => setTimeChange(e.target.value)}
          step="0.001"
          min="0.000001"
        />
      </div>
    </>
  );

  const results = rate !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Average Reaction Rate</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{rate.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-4">M / s</div>

      <div className="text-sm text-gray-600 mb-2">Pseudo First-Order Rate Constant (assumes [A]₀ = 1 M)</div>
      <div className="text-2xl font-semibold text-gray-800 my-2">{rateConstant !== null ? rateConstant.toLocaleString() : '—'}</div>
      <div className="text-sm text-gray-700 mb-4">s⁻¹</div>

      {halfLife !== null ? (
        <>
          <div className="text-sm text-gray-600 mb-2">First-Order Half-Life (s)</div>
          <div className="text-lg text-gray-800 font-medium">{halfLife.toLocaleString()} s</div>
        </>
      ) : null}
    </div>
  ) : null;

  const charts = showCharts && rate !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Reaction Rate Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => value.toFixed(6)} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-3 text-sm text-gray-600 text-center">
        Bars show concentration change (M) and average rate (M/s). Units differ between bars.
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Reaction Rate Calculator"
      description="Calculate average reaction rates (Δ[A]/Δt) and a pseudo first-order rate constant assuming an initial concentration of 1.0 M."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
