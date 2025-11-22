'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CircuitType = 'series' | 'parallel';

export default function SeriesParallelResistorCalculator() {
  const [resistors, setResistors] = useState<string>('10, 20, 30');
  const [circuitType, setCircuitType] = useState<CircuitType>('series');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Parse resistor string into numeric array
  const parseResistorValues = (input: string): number[] => {
    return input
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n));
  };

  useEffect(() => {
    const values = parseResistorValues(resistors);

    if (values.length === 0) {
      setResult(null);
      return;
    }

    if (circuitType === 'series') {
      // Series: sum of resistances
      const sum = values.reduce((acc, v) => acc + v, 0);
      setResult(parseFloat(sum.toFixed(6)));
    } else {
      // Parallel: reciprocal of sum of reciprocals
      // Special case: if any resistor is 0Ω, equivalent is 0Ω
      if (values.some((v) => v === 0)) {
        setResult(0);
        return;
      }

      const sumRecip = values.reduce((acc, v) => {
        // ignore negative or zero handled above
        return acc + (v !== 0 ? 1 / v : 0);
      }, 0);

      if (sumRecip === 0) {
        setResult(null);
        return;
      }

      const eq = 1 / sumRecip;
      setResult(parseFloat(eq.toFixed(6)));
    }
  }, [resistors, circuitType]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Series & Parallel Resistor Calculator Results',
      inputs: [
        { label: 'Resistor Values', value: resistors },
        { label: 'Circuit Type', value: circuitType },
      ],
      results: [
        { label: 'Equivalent Resistance', value: `${result} Ω` },
      ],
    });
  };

  const parsedValues = parseResistorValues(resistors);

  const chartData = result !== null && parsedValues.length > 0 ? [
    ...parsedValues.map((v, i) => ({ name: `R${i + 1}`, value: v, label: `R${i + 1}` })),
    { name: 'Req', value: result, label: 'Equivalent' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="resistors">Resistor Values (Ω, comma-separated)</Label>
        <Input
          id="resistors"
          type="text"
          value={resistors}
          onChange={(e) => setResistors(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">Example: 10, 20, 30</p>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="circuitType">Circuit Type</Label>
        <Select
          id="circuitType"
          value={circuitType}
          onChange={(e) => setCircuitType(e.target.value as CircuitType)}
        >
          <option value="series">Series</option>
          <option value="parallel">Parallel</option>
        </Select>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Equivalent Resistance</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Ω</div>
      <div className="mt-3 text-sm text-gray-500">
        Computed for {parsedValues.length} resistor{parsedValues.length !== 1 ? 's' : ''} ({circuitType})
      </div>
    </div>
  ) : null;

  const charts = showCharts && result !== null && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Resistor Values Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} Ω`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Series & Parallel Resistor Calculator"
      description="Calculate equivalent resistance for series and parallel resistor circuits. Enter resistor values separated by commas and choose the circuit configuration to compute the equivalent resistance."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
