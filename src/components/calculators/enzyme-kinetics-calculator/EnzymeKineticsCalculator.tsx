'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function EnzymeKineticsCalculator() {
  // Inputs are stored as strings to keep Input component controlled
  const [substrateConcentration, setSubstrateConcentration] = useState<string>('0.1');
  const [reactionRate, setReactionRate] = useState<string>('0.5');
  const [vmax, setVmax] = useState<string>('1');

  // Km result in same concentration units as substrate (M). null when invalid
  const [km, setKm] = useState<number | null>(null);
  // optional: predicted velocity computed from estimated Km for the given substrate
  const [predictedRate, setPredictedRate] = useState<number | null>(null);

  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const S = parseFloat(substrateConcentration);
    const v = parseFloat(reactionRate);
    const Vmax = parseFloat(vmax);

    // Validate inputs
    if (isNaN(S) || isNaN(v) || isNaN(Vmax)) {
      setKm(null);
      setPredictedRate(null);
      return;
    }

    // Km calculation derived from Michaelis-Menten equation v = (Vmax * [S])/(Km + [S])
    // Rearranged: Km = (Vmax * [S] / v) - [S]
    // Requirements: v > 0 and v < Vmax for a positive Km
    if (v <= 0 || Vmax <= 0 || v >= Vmax) {
      setKm(null);
      setPredictedRate(null);
      return;
    }

    const computedKm = (Vmax * S) / v - S;
    // Km must be non-negative; if numerical issues produce negative tiny values clamp to 0
    const finalKm = computedKm < 0 && computedKm > -1e-12 ? 0 : computedKm;

    if (finalKm < 0 || !isFinite(finalKm)) {
      setKm(null);
      setPredictedRate(null);
      return;
    }

    setKm(parseFloat(finalKm.toFixed(6)));

    // Calculate predicted velocity using the computed Km to show consistency
    const predicted = (Vmax * S) / (finalKm + S);
    setPredictedRate(parseFloat(predicted.toFixed(6)));
  }, [substrateConcentration, reactionRate, vmax]);

  const handleDownloadPDF = () => {
    if (km === null) return;

    generateCalculatorPDF({
      title: 'Enzyme Kinetics — Km Calculation',
      inputs: [
        { label: 'Substrate Concentration (M)', value: substrateConcentration },
        { label: 'Observed Reaction Rate', value: reactionRate },
        { label: 'Vmax', value: vmax },
      ],
      results: [
        { label: 'Estimated Km (M)', value: `${km}` },
        { label: 'Predicted Rate at [S]', value: predictedRate !== null ? `${predictedRate}` : 'N/A' },
      ],
    });
  };

  // Generate chart data for Michaelis-Menten curve using the estimated Km (if available)
  const chartData = km !== null
    ? (() => {
        const S = parseFloat(substrateConcentration);
        const Vmax = parseFloat(vmax);
        // choose a max substrate concentration for plotting: max(5*S, S + 1e-6) to visualize curve
        const maxS = Math.max(S * 5, S + 1e-6, 1e-6);
        const points = 50;
        const data: { substrate: number; velocity: number }[] = [];
        for (let i = 0; i <= points; i++) {
          const s = (i / points) * maxS;
          const v = (Vmax * s) / (km + s);
          data.push({ substrate: parseFloat(s.toFixed(6)), velocity: parseFloat(v.toFixed(6)) });
        }
        return data;
      })()
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="substrate">Substrate Concentration (M)</Label>
        <Input
          id="substrate"
          type="number"
          value={substrateConcentration}
          onChange={(e) => setSubstrateConcentration(e.target.value)}
          min="0"
          step="0.000001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reactionRate">Reaction Rate</Label>
        <Input
          id="reactionRate"
          type="number"
          value={reactionRate}
          onChange={(e) => setReactionRate(e.target.value)}
          min="0"
          step="0.000001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vmax">Vmax</Label>
        <Input
          id="vmax"
          type="number"
          value={vmax}
          onChange={(e) => setVmax(e.target.value)}
          min="0"
          step="0.000001"
        />
      </div>

      {/* Select imported to follow pattern; not required for this calculator but kept for structural parity */}
      <div className="hidden">
        <Label htmlFor="unusedSelect">Unused Select</Label>
        <Select id="unusedSelect" value={""} onChange={() => {}}>
          <option value="">N/A</option>
        </Select>
      </div>
    </>
  );

  const results = km !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Km</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{km.toLocaleString()}</div>
      <div className="text-lg text-gray-700">M</div>

      <div className="mt-4 text-sm text-gray-600">Predicted velocity at given [S]</div>
      <div className="text-2xl font-semibold text-gray-800 mt-1">{predictedRate !== null ? predictedRate.toLocaleString() : 'N/A'}</div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">Enter valid inputs: 0 &lt; reaction rate &lt; Vmax and positive values.</div>
  );

  const charts = showCharts && km !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Michaelis-Menten Curve</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="substrate"
            tickFormatter={(v) => `${v}`}
            label={{ value: 'Substrate [S] (M)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            tickFormatter={(v) => `${v}`}
            label={{ value: 'Velocity (same units as reaction rate)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Line type="monotone" dataKey="velocity" stroke="#10b981" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Enzyme Kinetics Calculator"
      description="Calculate estimated Km from observed reaction rate and Vmax using the Michaelis-Menten equation."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
