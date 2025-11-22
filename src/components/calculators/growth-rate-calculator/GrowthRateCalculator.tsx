'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type GrowthResults = {
  continuousRate: number; // per time unit (r), ln(Nt/N0)/t
  continuousRatePercent: number; // r * 100
  cagr: number; // compound growth rate per period (decimal)
  cagrPercent: number; // cagr * 100
  absoluteChange: number; // Nt - N0
};

export default function GrowthRateCalculator() {
  const [initialPopulation, setInitialPopulation] = useState<string>('1000');
  const [finalPopulation, setFinalPopulation] = useState<string>('1500');
  const [time, setTime] = useState<string>('10');

  const [results, setResults] = useState<GrowthResults | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const N0 = parseFloat(initialPopulation);
    const Nt = parseFloat(finalPopulation);
    const t = parseFloat(time);

    if (!isNaN(N0) && !isNaN(Nt) && !isNaN(t) && N0 > 0 && Nt > 0 && t > 0) {
      const continuousRate = Math.log(Nt / N0) / t; // r
      const cagr = Math.pow(Nt / N0, 1 / t) - 1; // discrete per period
      const absoluteChange = Nt - N0;

      setResults({
        continuousRate: parseFloat(continuousRate.toFixed(6)),
        continuousRatePercent: parseFloat((continuousRate * 100).toFixed(4)),
        cagr: parseFloat(cagr.toFixed(6)),
        cagrPercent: parseFloat((cagr * 100).toFixed(4)),
        absoluteChange: parseFloat(absoluteChange.toFixed(2)),
      });
    } else {
      setResults(null);
    }
  }, [initialPopulation, finalPopulation, time]);

  const handleDownloadPDF = () => {
    if (!results) return;

    generateCalculatorPDF({
      title: 'Population Growth Rate Results',
      inputs: [
        { label: 'Initial Population', value: initialPopulation },
        { label: 'Final Population', value: finalPopulation },
        { label: 'Time Period', value: time },
      ],
      results: [
        { label: 'Continuous Growth Rate (r)', value: `${results.continuousRate} per unit time` },
        { label: 'Continuous Growth Rate (%)', value: `${results.continuousRatePercent}%` },
        { label: 'Compound Growth Rate (CAGR)', value: `${results.cagr} (decimal)` },
        { label: 'Compound Growth Rate (%)', value: `${results.cagrPercent}%` },
        { label: 'Absolute Change', value: `${results.absoluteChange}` },
      ],
    });
  };

  const chartData = results
    ? [
        { label: 'Initial', population: parseFloat(initialPopulation) || 0 },
        { label: 'Final', population: parseFloat(finalPopulation) || 0 },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="initialPopulation">Initial Population</Label>
        <Input
          id="initialPopulation"
          type="number"
          value={initialPopulation}
          onChange={(e) => setInitialPopulation(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="finalPopulation">Final Population</Label>
        <Input
          id="finalPopulation"
          type="number"
          value={finalPopulation}
          onChange={(e) => setFinalPopulation(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Time Period</Label>
        <Input
          id="time"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="0.000001"
          step="0.01"
        />
      </div>

      {/* Select imported to follow pattern, not used for this calculator */}
      <div className="hidden">
        <Label htmlFor="unusedSelect">Unused</Label>
        <Select id="unusedSelect" value="" onChange={() => {}}>
          <option value="">-</option>
        </Select>
      </div>
    </>
  );

  const resultsDisplay = results ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Continuous Growth Rate (r)</div>
          <div className="text-3xl font-bold text-blue-900 my-2">
            {results.continuousRate.toLocaleString()}
          </div>
          <div className="text-sm text-gray-700">per unit time ({results.continuousRatePercent}% per unit time)</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Compound Annual Growth Rate (CAGR)</div>
          <div className="text-3xl font-bold text-green-700 my-2">
            {(results.cagr * 100).toFixed(3)}%
          </div>
          <div className="text-sm text-gray-700">Equivalent discrete growth per period ({results.cagr.toLocaleString()})</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-xs text-gray-500">Absolute Change</div>
          <div className="text-2xl font-semibold text-gray-900 my-2">{results.absoluteChange.toLocaleString()}</div>
          <div className="text-sm text-gray-700">Final - Initial</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-sm text-gray-500">Enter valid positive values for all inputs to see results.</div>
  );

  const charts = showCharts && results ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Population Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} individuals`} />
          <Bar dataKey="population" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Growth Rate Calculator"
      description="Calculate population growth rate using continuous (ln) and compound methods. Useful for ecology and population studies."
      inputs={inputs}
      results={resultsDisplay}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
