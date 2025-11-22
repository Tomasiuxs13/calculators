'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function TileCalculator() {
  const [area, setArea] = useState<string>('20');
  const [tileSize, setTileSize] = useState<string>('30');
  const [wastePercent, setWastePercent] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const areaValue = parseFloat(area);
    const tileSizeValue = parseFloat(tileSize) / 100; // Convert cm to m
    const wasteValue = parseFloat(wastePercent) / 100;

    if (!isNaN(areaValue) && !isNaN(tileSizeValue) && !isNaN(wasteValue) && areaValue > 0 && tileSizeValue > 0) {
      const totalTiles = Math.ceil(areaValue / (tileSizeValue * tileSizeValue));
      const totalWithWaste = Math.ceil(totalTiles * (1 + wasteValue));
      setResult(totalWithWaste);
    } else {
      setResult(null);
    }
  }, [area, tileSize, wastePercent]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Tile Calculator Results',
      inputs: [
        { label: 'Area (m²)', value: area },
        { label: 'Tile Size (cm)', value: tileSize },
        { label: 'Waste Percentage (%)', value: wastePercent },
      ],
      results: [
        { label: 'Total Tiles Needed', value: `${result}` },
      ],
    });
  };

  const inputs = (
    <>  
      <div className="space-y-2">
        <Label htmlFor="area">Area (m²)</Label>
        <Input
          id="area"
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tileSize">Tile Size (cm)</Label>
        <Input
          id="tileSize"
          type="number"
          value={tileSize}
          onChange={(e) => setTileSize(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="wastePercent">Waste Percentage (%)</Label>
        <Input
          id="wastePercent"
          type="number"
          value={wastePercent}
          onChange={(e) => setWastePercent(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Total Tiles Needed</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result.toLocaleString()}
      </div>
    </div>
  ) : null;

  const chartData = result !== null ? [
    { label: 'Total Tiles Needed', value: result },
  ] : [];

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Tiles Needed</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tile Calculator"
      description="Calculate number of tiles needed for a floor or wall area."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
