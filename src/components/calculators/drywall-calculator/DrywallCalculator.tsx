'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NumericString = string;

export default function DrywallCalculator() {
  // Default values from specification
  const [length, setLength] = useState<NumericString>('5');
  const [width, setWidth] = useState<NumericString>('4');
  const [height, setHeight] = useState<NumericString>('2.5');

  // Computed results
  const [totalWallArea, setTotalWallArea] = useState<number | null>(null);
  const [sheetArea, setSheetArea] = useState<number>(1.22 * 2.44); // standard 4'x8' sheet in meters (1.22m x 2.44m)
  const [sheetsRequired, setSheetsRequired] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate on input change
  useEffect(() => {
    const L = parseFloat(length);
    const W = parseFloat(width);
    const H = parseFloat(height);

    // Validate inputs
    if ([L, W, H].some((v) => isNaN(v) || v <= 0)) {
      setTotalWallArea(null);
      setSheetsRequired(null);
      return;
    }

    const perimeter = 2 * (L + W); // meters
    const area = perimeter * H; // m^2 (walls only)
    const required = Math.ceil(area / sheetArea);

    setTotalWallArea(parseFloat(area.toFixed(3)));
    setSheetsRequired(required);
  }, [length, width, height, sheetArea]);

  // Initial calculation on component mount with default values
  useEffect(() => {
    const L = 5; // default
    const W = 4; // default
    const H = 2.5; // default

    const perimeter = 2 * (L + W);
    const area = perimeter * H;
    const required = Math.ceil(area / sheetArea);

    setTotalWallArea(parseFloat(area.toFixed(3)));
    setSheetsRequired(required);
  }, [sheetArea]);

  const handleDownloadPDF = () => {
    if (sheetsRequired === null || totalWallArea === null) return;

    generateCalculatorPDF({
      title: 'Drywall Calculator Results',
      inputs: [
        { label: 'Room Length (m)', value: length },
        { label: 'Room Width (m)', value: width },
        { label: 'Room Height (m)', value: height },
      ],
      results: [
        { label: 'Total Wall Area (m²)', value: `${totalWallArea} m²` },
        { label: 'Sheet Area (m²)', value: `${sheetArea.toFixed(3)} m²` },
        { label: 'Sheets Required', value: `${sheetsRequired}` },
      ],
    });
  };

  const chartData = totalWallArea !== null && sheetsRequired !== null ? [
    { label: 'Walls (m²)', value: totalWallArea, unit: 'm²' },
    { label: 'Sheets Covered (m²)', value: sheetsRequired * sheetArea, unit: 'm²' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="length">Room Length (m)</Label>
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
        <Label htmlFor="width">Room Width (m)</Label>
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
        <Label htmlFor="height">Room Height (m)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      {/* Included Select import to match example patterns - allow users to pick common sheet size if desired */}
      <div className="space-y-2">
        <Label htmlFor="sheetSize">Drywall Sheet Size</Label>
        {/* Assuming Select component is defined elsewhere */}
        <Select id="sheetSize" onChange={(e) => setSheetArea(parseFloat(e.target.value))}>
          <option value="2.9768">4'x8' (1.22m x 2.44m)</option>
          {/* Add more options as needed */}
        </Select>
      </div>
    </>
  );

  return (
    <CalculatorLayout title="Drywall Calculator">
      {inputs}
      {/* Other components such as charts and buttons can be added here */}
    </CalculatorLayout>
  );
}
