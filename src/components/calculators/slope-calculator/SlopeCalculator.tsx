'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type SlopeResult = number | 'vertical' | null;

export default function SlopeCalculator() {
  const [x1, setX1] = useState<string>('1');
  const [y1, setY1] = useState<string>('2');
  const [x2, setX2] = useState<string>('3');
  const [y2, setY2] = useState<string>('4');
  const [slope, setSlope] = useState<SlopeResult>(null);
  const [deltaX, setDeltaX] = useState<number | null>(null);
  const [deltaY, setDeltaY] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const x1Num = parseFloat(x1);
    const y1Num = parseFloat(y1);
    const x2Num = parseFloat(x2);
    const y2Num = parseFloat(y2);

    if ([x1Num, y1Num, x2Num, y2Num].some((n) => isNaN(n))) {
      setSlope(null);
      setDeltaX(null);
      setDeltaY(null);
      return;
    }

    const dx = x2Num - x1Num;
    const dy = y2Num - y1Num;

    setDeltaX(dx);
    setDeltaY(dy);

    if (dx === 0) {
      setSlope('vertical');
    } else {
      const s = dy / dx;
      setSlope(parseFloat(s.toFixed(6)));
    }
  }, [x1, y1, x2, y2]);

  const handleDownloadPDF = () => {
    if (slope === null || deltaX === null || deltaY === null) return;

    generateCalculatorPDF({
      title: 'Slope Calculator Results',
      inputs: [
        { label: 'Point 1 X', value: x1 },
        { label: 'Point 1 Y', value: y1 },
        { label: 'Point 2 X', value: x2 },
        { label: 'Point 2 Y', value: y2 },
      ],
      results: [
        { label: 'Delta X (x2 - x1)', value: `${deltaX}` },
        { label: 'Delta Y (y2 - y1)', value: `${deltaY}` },
        { label: 'Slope', value: slope === 'vertical' ? 'Undefined (vertical line)' : `${slope}` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="x1">Point 1 X</Label>
          <Input
            id="x1"
            type="number"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="y1">Point 1 Y</Label>
          <Input
            id="y1"
            type="number"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            step="0.01"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="x2">Point 2 X</Label>
          <Input
            id="x2"
            type="number"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="y2">Point 2 Y</Label>
          <Input
            id="y2"
            type="number"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
            step="0.01"
          />
        </div>
      </div>

      {/* keeping Select import in code to match pattern even if unused here */}
      <div className="sr-only">
        <Label htmlFor="unused-select">Unused Select</Label>
        <Select id="unused-select" value="unused" onChange={() => {}}>
          <option value="unused">Unused</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {slope === null ? '—' : slope === 'vertical' ? 'Undefined' : slope.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">
        {slope === 'vertical' ? 'Vertical line (slope undefined)' : 'Slope (Δy / Δx)'}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <div>Δx: {deltaX === null ? '—' : deltaX}</div>
        <div>Δy: {deltaY === null ? '—' : deltaY}</div>
      </div>
    </div>
  );

  const chartData = (() => {
    const x1Num = parseFloat(x1);
    const y1Num = parseFloat(y1);
    const x2Num = parseFloat(x2);
    const y2Num = parseFloat(y2);

    if ([x1Num, y1Num, x2Num, y2Num].some((n) => isNaN(n))) return [];

    return [
      { x: x1Num, y: y1Num, label: 'P1' },
      { x: x2Num, y: y2Num, label: 'P2' },
    ];
  })();

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Line through Points</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" domain={["dataMin - 1", "dataMax + 1"]} />
          <YAxis dataKey="y" type="number" domain={["dataMin - 1", "dataMax + 1"]} />
          <Tooltip formatter={(value: number, name: string) => [value, name === 'y' ? 'Y' : name]} />
          {/* Line connects the two points */}
          <Line type="linear" dataKey="y" stroke="#3b82f6" dot={{ stroke: '#1e3a8a', strokeWidth: 2 }} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Slope Calculator"
      description="Calculate the slope of a line from two points. Enter coordinates for Point 1 and Point 2 and the slope will be calculated automatically."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
