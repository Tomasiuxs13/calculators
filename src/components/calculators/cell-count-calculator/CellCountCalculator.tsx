'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ChartPoint = {
  label: string;
  value: number;
  unit?: string;
};

export default function CellCountCalculator() {
  const [cellsCounted, setCellsCounted] = useState<string>('50');
  const [dilutionFactor, setDilutionFactor] = useState<string>('1000');
  const [volume, setVolume] = useState<string>('0.1'); // in mL
  const [resultPerMl, setResultPerMl] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const counted = parseFloat(cellsCounted);
    const dilution = parseFloat(dilutionFactor);
    const vol = parseFloat(volume);

    if (!isNaN(counted) && !isNaN(dilution) && !isNaN(vol) && vol > 0 && counted >= 0 && dilution > 0) {
      // Cells per mL = (cells counted * dilution factor) / volume(mL)
      const perMl = (counted * dilution) / vol;
      setResultPerMl(parseFloat(perMl.toFixed(2)));
    } else {
      setResultPerMl(null);
    }
  }, [cellsCounted, dilutionFactor, volume]);

  const handleDownloadPDF = () => {
    if (resultPerMl === null) return;

    const perL = resultPerMl * 1000;

    generateCalculatorPDF({
      title: 'Cell Concentration Calculation',
      inputs: [
        { label: 'Cells Counted', value: cellsCounted },
        { label: 'Dilution Factor', value: dilutionFactor },
        { label: 'Volume Counted (mL)', value: volume },
      ],
      results: [
        { label: 'Cells per mL', value: `${resultPerMl.toLocaleString()} cells/mL` },
        { label: 'Cells per L', value: `${perL.toLocaleString()} cells/L` },
      ],
    });
  };

  const chartData: ChartPoint[] = resultPerMl !== null ? [
    { label: 'Cells Counted', value: parseFloat(cellsCounted) || 0, unit: 'cells' },
    { label: 'Cells per mL', value: resultPerMl, unit: 'cells/mL' },
    { label: 'Cells per L', value: resultPerMl * 1000, unit: 'cells/L' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="cellsCounted">Cells Counted</Label>
        <Input
          id="cellsCounted"
          type="number"
          value={cellsCounted}
          onChange={(e) => setCellsCounted(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dilutionFactor">Dilution Factor</Label>
        <Input
          id="dilutionFactor"
          type="number"
          value={dilutionFactor}
          onChange={(e) => setDilutionFactor(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="volume">Volume Counted (mL)</Label>
        <Input
          id="volume"
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          min="0.0001"
          step="0.01"
        />
      </div>
    </>
  );

  const results = resultPerMl !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {resultPerMl.toLocaleString()} <span className="text-2xl font-medium">cells/mL</span>
      </div>
      <div className="text-lg text-gray-700">{(resultPerMl * 1000).toLocaleString()} cells/L</div>
    </div>
  ) : (
    <div className="text-center text-gray-500">Enter valid inputs to see results</div>
  );

  const charts = showCharts && resultPerMl !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Cell Concentration Overview</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => {
            const point = chartData.find((d) => d.value === value);
            const unit = point?.unit ? ` ${point.unit}` : '';
            // use toLocaleString for readability
            return `${(value).toLocaleString()}${unit}`;
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Cell Count Calculator"
      description="Calculate cell concentration (cells/mL and cells/L) from a dilution series: Cells per mL = (Cells Counted × Dilution Factor) / Volume (mL)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
