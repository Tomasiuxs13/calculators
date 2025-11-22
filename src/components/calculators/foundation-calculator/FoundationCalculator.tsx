'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Unit = 'm' | 'ft';

export default function FoundationCalculator() {
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('8');
  const [depth, setDepth] = useState<string>('0.5');
  const [unit, setUnit] = useState<Unit>('m');
  const [volume, setVolume] = useState<number | null>(null); // cubic meters
  const [mass, setMass] = useState<number | null>(null); // kilograms
  const [bags, setBags] = useState<number | null>(null); // estimated 50kg cement bags
  const [showCharts, setShowCharts] = useState(false);

  // Constants
  const DENSITY_CONCRETE_KG_PER_M3 = 2400; // typical bulk density
  const BAG_WEIGHT_KG = 50; // typical cement bag weight used for rough estimate

  useEffect(() => {
    // Parse inputs
    const L = parseFloat(length);
    const W = parseFloat(width);
    const D = parseFloat(depth);

    if ([L, W, D].some((v) => isNaN(v) || v < 0)) {
      setVolume(null);
      setMass(null);
      setBags(null);
      return;
    }

    // If unit was not meters, convert inputs to meters first
    // (Example includes conversion to base unit first requirement.)
    let unitToMeterFactor = 1; // default for 'm'
    if (unit === 'ft') {
      unitToMeterFactor = 0.3048;
    }

    const Lm = L * unitToMeterFactor;
    const Wm = W * unitToMeterFactor;
    const Dm = D * unitToMeterFactor;

    const vol = Lm * Wm * Dm; // m^3
    const totalMass = vol * DENSITY_CONCRETE_KG_PER_M3; // kg
    const estimatedBags = Math.ceil(totalMass / BAG_WEIGHT_KG);

    setVolume(parseFloat(vol.toFixed(3)));
    setMass(parseFloat(totalMass.toFixed(1)));
    setBags(estimatedBags);
  }, [length, width, depth, unit]);

  const handleDownloadPDF = () => {
    if (volume === null || mass === null || bags === null) return;

    generateCalculatorPDF({
      title: 'Foundation Calculator Results',
      inputs: [
        { label: 'Length', value: `${length} ${unit}` },
        { label: 'Width', value: `${width} ${unit}` },
        { label: 'Depth', value: `${depth} ${unit}` },
      ],
      results: [
        { label: 'Volume', value: `${volume} m³` },
        { label: 'Estimated Concrete Mass', value: `${mass} kg` },
        { label: 'Estimated Cement Bags (50 kg)', value: `${bags} bags` },
      ],
    });
  };

  const chartData = volume !== null && bags !== null ? [
    { label: 'Volume (m³)', value: volume, unit: 'm³' },
    { label: 'Cement Bags', value: bags, unit: 'bags' },
  ] : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="length">Foundation Length ({unit})</Label>
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
          <Label htmlFor="width">Foundation Width ({unit})</Label>
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
          <Label htmlFor="depth">Foundation Depth ({unit})</Label>
          <Input
            id="depth"
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
      </div>

      <div className="w-40 mt-4">
        <Label htmlFor="unit">Units</Label>
        <Select id="unit" value={unit} onChange={(e) => setUnit(e.target.value as Unit)}>
          <option value="m">Meters (m)</option>
          <option value="ft">Feet (ft)</option>
        </Select>
      </div>
    </>
  );

  const results = volume !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Concrete Needs</div>

      <div className="text-4xl font-bold text-blue-900 my-3">{volume.toLocaleString()} m³</div>
      <div className="text-lg text-gray-700 mb-3">Total Concrete Volume</div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-500">Estimated Mass</div>
          <div className="text-2xl font-semibold mt-1">{mass?.toLocaleString()} kg</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-md">
          <div className="text-sm text-gray-500">Estimated Cement Bags (50 kg)</div>
          <div className="text-2xl font-semibold mt-1">{bags}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Foundation Material Estimate</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Foundation Calculator"
      description="Calculate the concrete volume and estimated material required for a rectangular foundation. Enter length, width, and depth to get instant results and download a PDF summary."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
