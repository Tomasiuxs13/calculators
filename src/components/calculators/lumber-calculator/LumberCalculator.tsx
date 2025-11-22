'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type BoardSize = '2x4' | '2x6' | '4x4';

// Nominal board width in inches (common actual widths used for calculation)
const boardWidthInches: Record<BoardSize, number> = {
  '2x4': 3.5,
  '2x6': 5.5,
  '4x4': 3.5,
};

type Result = {
  boardsNeeded: number;
  totalLinearMeters: number;
  totalBoardArea: number; // m^2
};

export default function LumberCalculator() {
  const [length, setLength] = useState<string>('5');
  const [width, setWidth] = useState<string>('3');
  const [boardSize, setBoardSize] = useState<BoardSize>('2x4');
  const [result, setResult] = useState<Result | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const len = parseFloat(length);
    const wid = parseFloat(width);

    if (!isNaN(len) && !isNaN(wid) && len > 0 && wid > 0) {
      // Convert board width from inches to meters
      const widthMeters = boardWidthInches[boardSize] * 0.0254;

      // Number of boards needed to span the width (boards placed side-by-side across the width)
      const boards = Math.ceil(wid / widthMeters);

      // Total linear meters of board needed
      const totalLinear = parseFloat((boards * len).toFixed(3));

      // Total board area covered (approx) in square meters
      const totalArea = parseFloat((boards * widthMeters * len).toFixed(3));

      setResult({
        boardsNeeded: boards,
        totalLinearMeters: totalLinear,
        totalBoardArea: totalArea,
      });
    } else {
      setResult(null);
    }
  }, [length, width, boardSize]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Lumber Calculator Results',
      inputs: [
        { label: 'Length (m)', value: length },
        { label: 'Width (m)', value: width },
        { label: 'Board Size', value: boardSize },
      ],
      results: [
        { label: 'Boards Needed', value: String(result.boardsNeeded) },
        { label: 'Total Linear Meters', value: `${result.totalLinearMeters} m` },
        { label: 'Total Board Area', value: `${result.totalBoardArea} m²` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Board Area (m²)', value: result.totalBoardArea, unit: 'm²' },
        { label: 'Linear (m)', value: result.totalLinearMeters, unit: 'm' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="length">Length (m)</Label>
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
        <Label htmlFor="width">Width (m)</Label>
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
        <Label htmlFor="boardSize">Board Size (inches)</Label>
        <Select
          id="boardSize"
          value={boardSize}
          onChange={(e) => setBoardSize(e.target.value as BoardSize)}
        >
          <option value="2x4">2x4</option>
          <option value="2x6">2x6</option>
          <option value="4x4">4x4</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Lumber Requirements</div>

      <div className="text-3xl font-bold text-blue-900 my-2">{result.boardsNeeded.toLocaleString()}</div>
      <div className="text-sm text-gray-700 mb-3">Boards Needed</div>

      <div className="text-xl font-semibold text-gray-800">{result.totalLinearMeters.toLocaleString()} m</div>
      <div className="text-sm text-gray-600">Total Linear Meters</div>

      <div className="text-lg font-medium text-gray-800 mt-3">{result.totalBoardArea.toLocaleString()} m²</div>
      <div className="text-sm text-gray-600">Approx. Board Area</div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Lumber Summary</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => {
              // find unit by value—fallback to empty
              const found = chartData.find((d) => d.value === value);
              return `${typeof value === 'number' ? value.toFixed(2) : value} ${found?.unit || ''}`;
            }}
          />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Lumber Calculator"
      description="Calculate lumber needed for construction projects. Estimate the number of boards, total linear meters, and approximate board area based on project dimensions and selected board size."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
