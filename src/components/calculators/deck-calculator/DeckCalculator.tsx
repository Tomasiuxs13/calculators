'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Result = {
  area: number; // m^2
  joistCount: number;
  totalJoistLength: number; // m
  boardsNeeded: number;
  screwsNeeded: number;
};

export default function DeckCalculator() {
  // Inputs with defaults from specification
  const [length, setLength] = useState<string>('6'); // meters
  const [width, setWidth] = useState<string>('4'); // meters
  const [joistSpacing, setJoistSpacing] = useState<string>('40'); // cm

  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Constants / assumptions
  const BOARD_WIDTH_M = 0.14; // typical decking board width in meters (140 mm)
  const SCREWS_PER_M2 = 30; // typical screws per square meter (estimate)

  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const spacingCm = parseFloat(joistSpacing);

    if (isNaN(l) || isNaN(w) || isNaN(spacingCm) || l <= 0 || w <= 0 || spacingCm <= 0) {
      setResult(null);
      return;
    }

    // Convert spacing from cm to meters (convert to base unit first)
    const spacingM = spacingCm / 100; // requirement: convert to base unit then compute

    // Calculate area
    const area = parseFloat((l * w).toFixed(2));

    // Number of joists: typically spacing across width; include end joists -> +1
    // e.g., if width / spacing = 3.2 -> need 4 spaces -> 5 joists. We'll do Math.ceil(width/spacingM) + 1
    const joistCount = Math.max(1, Math.ceil(w / spacingM) + 1);

    // Total joist length = each joist runs along deck length
    const totalJoistLength = parseFloat((joistCount * l).toFixed(2));

    // Deck boards needed across width (boards run lengthwise): number of boards = ceil(width / boardWidth)
    const boardsNeeded = Math.max(0, Math.ceil(w / BOARD_WIDTH_M));

    // Fasteners / screws estimate
    const screwsNeeded = Math.max(0, Math.ceil(area * SCREWS_PER_M2));

    setResult({
      area,
      joistCount,
      totalJoistLength,
      boardsNeeded,
      screwsNeeded,
    });
  }, [length, width, joistSpacing]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Deck Calculator Results',
      inputs: [
        { label: 'Deck Length (m)', value: length },
        { label: 'Deck Width (m)', value: width },
        { label: 'Joist Spacing (cm)', value: joistSpacing },
      ],
      results: [
        { label: 'Area (m²)', value: `${result.area} m²` },
        { label: 'Joist Count', value: `${result.joistCount}` },
        { label: 'Total Joist Length (m)', value: `${result.totalJoistLength} m` },
        { label: 'Boards Needed', value: `${result.boardsNeeded}` },
        { label: 'Screws Needed (est.)', value: `${result.screwsNeeded}` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Area (m²)', value: result.area, unit: 'm²' },
        { label: 'Joists', value: result.joistCount, unit: 'pieces' },
        { label: 'Boards', value: result.boardsNeeded, unit: 'pieces' },
        { label: 'Screws', value: result.screwsNeeded, unit: 'pcs' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="length">Deck Length (m)</Label>
        <Input
          id="length"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="width">Deck Width (m)</Label>
        <Input
          id="width"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="joistSpacing">Joist Spacing (cm)</Label>
        <Input
          id="joistSpacing"
          type="number"
          value={joistSpacing}
          onChange={(e) => setJoistSpacing(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      {/* Placeholder import usage to match example pattern (Select imported but not required here) */}
      <div className="hidden">
        <Select aria-hidden />
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Materials</div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <div className="text-xs text-gray-500">Area</div>
          <div className="text-3xl font-bold text-blue-900">{result.area.toLocaleString()} m²</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white shadow-sm rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500">Joists</div>
            <div className="text-2xl font-bold text-blue-900">{result.joistCount}</div>
            <div className="text-sm text-gray-600">Total length: {result.totalJoistLength} m</div>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500">Deck Boards</div>
            <div className="text-2xl font-bold text-blue-900">{result.boardsNeeded}</div>
            <div className="text-sm text-gray-600">(approx. {BOARD_WIDTH_M * 100} cm per board)</div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4 text-center">
          <div className="text-xs text-gray-500">Screws (estimate)</div>
          <div className="text-2xl font-bold text-blue-900">{result.screwsNeeded}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Materials Summary</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData as any}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props.payload.unit || '';
            if (typeof value === 'number') return [`${value}`, unit];
            return [value, unit];
          }} />
          <Bar dataKey="value" fill="#059669" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Deck Calculator"
      description="Calculate materials needed for deck construction: area, joists, decking boards, and an estimate of fasteners."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
