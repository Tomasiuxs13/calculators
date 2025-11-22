'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type RoofingInputs = {
  length: string; // meters
  width: string; // meters
  pitch: string; // degrees
};

export default function RoofingCalculator() {
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('8');
  const [pitch, setPitch] = useState<string>('30');

  // Optional: sheet size selection (m2) - included to demonstrate Select usage
  const [sheetArea, setSheetArea] = useState<number>(2); // default 2 m² per sheet

  const [roofArea, setRoofArea] = useState<number | null>(null);
  const [planArea, setPlanArea] = useState<number | null>(null);
  const [totalWithWaste, setTotalWithWaste] = useState<number | null>(null);
  const [sheetsRequired, setSheetsRequired] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Constants
  const WASTE_FACTOR = 0.1; // 10% waste

  useEffect(() => {
    const L = parseFloat(length);
    const W = parseFloat(width);
    const P = parseFloat(pitch);

    if (isNaN(L) || isNaN(W) || isNaN(P) || L <= 0 || W <= 0 || P < 0 || P >= 90) {
      setRoofArea(null);
      setPlanArea(null);
      setTotalWithWaste(null);
      setSheetsRequired(null);
      return;
    }

    // Plan area (top-down projection)
    const plan = L * W;

    // Convert pitch (degrees) to radians and compute roof area by converting to base unit
    // Roof area for a simple gable roof (two equal slopes running along the length):
    // sloped_area_total = plan_area * sec(pitch)  where sec = 1 / cos(angle)
    const rad = (P * Math.PI) / 180;
    const cos = Math.cos(rad);
    // guard against cos being zero (pitch == 90)
    if (cos === 0) {
      setRoofArea(null);
      setPlanArea(plan);
      setTotalWithWaste(null);
      setSheetsRequired(null);
      return;
    }

    const roof = plan / cos; // sec(pitch) * plan

    const total = roof * (1 + WASTE_FACTOR);
    const sheets = Math.ceil(total / sheetArea);

    setPlanArea(parseFloat(plan.toFixed(4)));
    setRoofArea(parseFloat(roof.toFixed(4)));
    setTotalWithWaste(parseFloat(total.toFixed(4)));
    setSheetsRequired(sheets);
  }, [length, width, pitch, sheetArea]);

  const handleDownloadPDF = () => {
    if (roofArea === null || planArea === null || totalWithWaste === null || sheetsRequired === null) return;

    generateCalculatorPDF({
      title: 'Roofing Materials Calculator Results',
      inputs: [
        { label: 'Roof Length (m)', value: length },
        { label: 'Roof Width (m)', value: width },
        { label: 'Roof Pitch (degrees)', value: pitch },
        { label: 'Sheet Area (m²)', value: `${sheetArea} m²` },
      ],
      results: [
        { label: 'Plan Area (m²)', value: `${planArea} m²` },
        { label: 'Roof Area (m²)', value: `${roofArea} m²` },
        { label: 'Total with Waste (m²)', value: `${totalWithWaste} m²` },
        { label: 'Sheets Required', value: `${sheetsRequired} sheets` },
      ],
    });
  };

  const chartData = roofArea !== null && planArea !== null ? [
    { label: 'Plan Area', value: planArea },
    { label: 'Roof Area', value: roofArea },
    { label: 'Total w/ Waste', value: totalWithWaste || 0 },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="length">Roof Length (m)</Label>
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
        <Label htmlFor="width">Roof Width (m)</Label>
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
        <Label htmlFor="pitch">Roof Pitch (degrees)</Label>
        <Input
          id="pitch"
          type="number"
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
          min="0"
          max="89"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sheetArea">Typical Sheet Area (m²)</Label>
        <Select
          id="sheetArea"
          value={String(sheetArea)}
          onChange={(e) => setSheetArea(parseFloat(e.target.value))}
        >
          <option value="1.5">1.5 (1.0 × 1.5 m)</option>
          <option value="2">2 (1.0 × 2.0 m)</option>
          <option value="3">3 (1.5 × 2.0 m)</option>
        </Select>
        <div className="text-sm text-gray-500">Select typical sheet coverage to estimate sheet count.</div>
      </div>
    </>
  );

  const results = roofArea !== null && planArea !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-2xl font-semibold text-gray-800">Plan Area: {planArea.toLocaleString()} m²</div>
      <div className="text-4xl font-bold text-blue-900 my-3">{roofArea.toLocaleString()} m²</div>
      <div className="text-base text-gray-700 mb-2">Roof Area (incl. slope)</div>

      <div className="text-sm text-gray-600">With {Math.round(WASTE_FACTOR * 100)}% waste</div>
      <div className="text-lg font-medium text-gray-800 mt-2">Total Needed: {totalWithWaste?.toLocaleString()} m²</div>

      <div className="text-xl text-gray-900 mt-4">Sheets Required</div>
      <div className="text-3xl font-bold text-green-700 my-2">{sheetsRequired} sheets</div>
      <div className="text-sm text-gray-600">(Using {sheetArea} m² per sheet)</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid dimensions and pitch to see results.</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Roof Area Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} m²`} />
          <Bar dataKey="value" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Roofing Calculator"
      description="Calculate roofing materials needed for a roof. Enter roof length, width, and pitch to compute roof area (accounting for slope), required material with waste allowance, and estimated number of sheets."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
