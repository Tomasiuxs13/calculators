'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Preference = 'auto' | 'iv' | 'i2r';

type PowerResult = {
  primaryPower: number | null;
  method: string | null;
  powerIV: number | null;
  powerI2R: number | null;
};

export default function ElectricPowerCalculator() {
  const [voltage, setVoltage] = useState<string>('12');
  const [current, setCurrent] = useState<string>('2');
  const [resistance, setResistance] = useState<string>('6');
  const [preference, setPreference] = useState<Preference>('auto');
  const [result, setResult] = useState<PowerResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);

    const validV = !isNaN(v);
    const validI = !isNaN(i);
    const validR = !isNaN(r) && r !== 0;

    // Compute possible power values when inputs allow
    let powerIV: number | null = null;
    let powerI2R: number | null = null;

    // If voltage and current available (or derivable), compute P = V * I
    if (validV && validI) {
      powerIV = v * i;
    }

    // If current and resistance available, compute P = I^2 * R
    if (validI && validR) {
      powerI2R = i * i * r;
    }

    // If voltage and resistance are available but current not provided, derive current = V / R
    // and compute both formulas (they will be equivalent mathematically)
    if (validV && validR && !validI) {
      const derivedI = v / r; // derived current
      powerIV = v * derivedI;
      powerI2R = derivedI * derivedI * r; // equals v^2 / r
    }

    // If we have voltage and current but resistance missing, we still have P = V * I.
    // Choose primary result based on preference and availability
    let primary: number | null = null;
    let method: string | null = null;

    if (preference === 'iv') {
      if (powerIV !== null) {
        primary = powerIV;
        method = 'P = V × I';
      } else if (powerI2R !== null) {
        primary = powerI2R;
        method = 'P = I² × R';
      }
    } else if (preference === 'i2r') {
      if (powerI2R !== null) {
        primary = powerI2R;
        method = 'P = I² × R';
      } else if (powerIV !== null) {
        primary = powerIV;
        method = 'P = V × I';
      }
    } else {
      // auto: prefer P = V * I when available, else P = I^2 * R
      if (powerIV !== null) {
        primary = powerIV;
        method = 'P = V × I';
      } else if (powerI2R !== null) {
        primary = powerI2R;
        method = 'P = I² × R';
      }
    }

    // Round to sensible precision
    const round = (n: number) => parseFloat(n.toFixed(6));

    setResult({
      primaryPower: primary !== null ? round(primary) : null,
      method: method,
      powerIV: powerIV !== null ? round(powerIV) : null,
      powerI2R: powerI2R !== null ? round(powerI2R) : null,
    });
  }, [voltage, current, resistance, preference]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Electric Power Calculator Results',
      inputs: [
        { label: 'Voltage (V)', value: voltage || '—' },
        { label: 'Current (A)', value: current || '—' },
        { label: 'Resistance (Ω)', value: resistance || '—' },
        { label: 'Preferred Method', value: preference === 'auto' ? 'Auto' : preference === 'iv' ? 'P = V×I' : 'P = I²R' },
      ],
      results: [
        { label: 'Primary Result', value: result.primaryPower !== null ? `${result.primaryPower} W (${result.method})` : 'Insufficient data' },
        ...(result.powerIV !== null ? [{ label: 'P = V × I', value: `${result.powerIV} W` }] : []),
        ...(result.powerI2R !== null ? [{ label: 'P = I² × R', value: `${result.powerI2R} W` }] : []),
      ],
    });
  };

  const chartData = result ? [
    { label: 'P = V×I', value: result.powerIV ?? 0, method: 'V×I' },
    { label: 'P = I²×R', value: result.powerI2R ?? 0, method: 'I²R' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="voltage">Voltage (V)</Label>
        <Input
          id="voltage"
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          step="0.01"
        />
        <div className="text-sm text-gray-500 mt-1">Optional: Enter voltage in volts.</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="current">Current (A)</Label>
          <Input
            id="current"
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            step="0.01"
          />
          <div className="text-sm text-gray-500 mt-1">Optional: Enter current in amperes.</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="resistance">Resistance (Ω)</Label>
          <Input
            id="resistance"
            type="number"
            value={resistance}
            onChange={(e) => setResistance(e.target.value)}
            step="0.01"
          />
          <div className="text-sm text-gray-500 mt-1">Optional: Enter resistance in ohms.</div>
        </div>
      </div>

      <div className="space-y-2 mt-4 w-48">
        <Label htmlFor="preference">Preferred Method</Label>
        <Select
          id="preference"
          value={preference}
          onChange={(e) => setPreference(e.target.value as Preference)}
        >
          <option value="auto">Auto (choose best available)</option>
          <option value="iv">P = V × I</option>
          <option value="i2r">P = I² × R</option>
        </Select>
        <div className="text-sm text-gray-500 mt-1">Select which formula to prioritize when multiple options are available.</div>
      </div>
    </>
  );

  const results = result && result.primaryPower !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.primaryPower.toLocaleString()}</div>
      <div className="text-lg text-gray-700 mb-2">W</div>
      <div className="text-sm text-gray-600">Computed using: <span className="font-medium text-gray-800">{result.method}</span></div>
      <div className="mt-3 text-sm text-gray-700 space-y-1">
        {result.powerIV !== null && (
          <div>P = V × I: <span className="font-medium">{result.powerIV} W</span></div>
        )}
        {result.powerI2R !== null && (
          <div>P = I² × R: <span className="font-medium">{result.powerI2R} W</span></div>
        )}
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Provide at least two of Voltage, Current, and Resistance (or Voltage and Current) to calculate power.</div>
  );

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Power Comparison (Watts)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} W`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Electric Power Calculator"
      description="Calculate electric power using P = V × I or P = I² × R. Provide voltage, current, and/or resistance; the calculator automatically computes power and shows comparisons."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
