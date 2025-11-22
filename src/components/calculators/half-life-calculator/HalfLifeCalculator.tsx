'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function HalfLifeCalculator() {
  const [initialAmount, setInitialAmount] = useState<string>('100');
  const [finalAmount, setFinalAmount] = useState<string>('50');
  const [time, setTime] = useState<string>('10');
  const [halfLife, setHalfLife] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Auto-calculate on input change
    const A0 = parseFloat(initialAmount);
    const A = parseFloat(finalAmount);
    const t = parseFloat(time);

    if (
      !isNaN(A0) && A0 > 0 &&
      !isNaN(A) && A > 0 &&
      !isNaN(t) && t > 0 &&
      A < A0
    ) {
      // For first-order (exponential) decay: A = A0 * 2^(-t / t_half)
      // Solve for t_half: t_half = -t * ln(2) / ln(A / A0)
      const ln2 = Math.log(2);
      const ratio = A / A0;
      // ratio is between 0 and 1 if decay; ln(ratio) < 0
      const calculated = -t * ln2 / Math.log(ratio);
      if (isFinite(calculated) && calculated > 0) {
        setHalfLife(parseFloat(calculated.toFixed(6)));
      } else {
        setHalfLife(null);
      }
    } else {
      setHalfLife(null);
    }
  }, [initialAmount, finalAmount, time]);

  const handleDownloadPDF = () => {
    if (halfLife === null) return;

    generateCalculatorPDF({
      title: 'Half-Life Calculator Results',
      inputs: [
        { label: 'Initial Amount', value: initialAmount },
        { label: 'Final Amount', value: finalAmount },
        { label: 'Time Period', value: time },
      ],
      results: [
        { label: 'Half-Life', value: `${halfLife} (same units as Time)` },
      ],
    });
  };

  // Prepare chart data: simulate exponential decay from t=0 to t=input time
  const chartData = (() => {
    const A0 = parseFloat(initialAmount);
    const t = parseFloat(time);
    if (isNaN(A0) || A0 <= 0 || isNaN(t) || t <= 0) return [] as { time: number; amount: number }[];

    const points = 30; // resolution
    const data: { time: number; amount: number }[] = [];
    for (let i = 0; i <= points; i++) {
      const currentT = (t * i) / points;
      if (halfLife === null) {
        // If half-life not yet calculated, still show theoretical decay using final vs initial ratio
        // We can attempt to compute based on current inputs if valid
        const A = parseFloat(finalAmount);
        if (isNaN(A) || A <= 0) {
          data.push({ time: currentT, amount: 0 });
        } else {
          // estimate decay constant if possible
          if (A < A0) {
            const ln2 = Math.log(2);
            const ratio = A / A0;
            const estimatedHalf = -t * ln2 / Math.log(ratio);
            const amount = A0 * Math.pow(0.5, currentT / estimatedHalf);
            data.push({ time: parseFloat(currentT.toFixed(4)), amount: parseFloat(amount.toFixed(6)) });
          } else {
            data.push({ time: parseFloat(currentT.toFixed(4)), amount: parseFloat(A0.toFixed(6)) });
          }
        }
      } else {
        const amount = A0 * Math.pow(0.5, currentT / halfLife);
        data.push({ time: parseFloat(currentT.toFixed(4)), amount: parseFloat(amount.toFixed(6)) });
      }
    }
    return data;
  })();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="initialAmount">Initial Amount</Label>
        <Input
          id="initialAmount"
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalAmount">Final Amount</Label>
        <Input
          id="finalAmount"
          type="number"
          value={finalAmount}
          onChange={(e) => setFinalAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Time Period</Label>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min="0"
            step="0.01"
          />

          {/* Include a Select for time units if desired later; kept to match imports/patterns */}
          <div className="space-y-2">
            <Label htmlFor="timeUnit">Time Unit</Label>
            <Select id="timeUnit" value="units" onChange={() => {}}>
              <option value="units">Units (e.g., seconds, minutes)</option>
            </Select>
          </div>
        </div>
      </div>
    </>
  );

  const results = halfLife !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Calculated Half-Life</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{halfLife.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Same units as Time Period</div>
    </div>
  ) : (
    <div className="text-center text-sm text-gray-600">
      Provide valid inputs: Initial & Final amounts must be &gt; 0, Final &lt; Initial, and Time &gt; 0.
    </div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Exponential Decay Over Time</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Time', position: 'insideBottomRight', offset: -5 }} />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(6)}`} />
          <Line type="monotone" dataKey="amount" stroke="#10b981" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Half-Life Calculator"
      description="Calculate the half-life for biological processes using initial and final amounts over a given time period."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
