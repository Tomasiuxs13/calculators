'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableNumber = number | null;

export default function BikeGearCalculator() {
  const [chainring, setChainring] = useState<string>('50');
  const [cog, setCog] = useState<string>('17');
  const [wheelDiameter, setWheelDiameter] = useState<string>('27'); // inches

  const [gearRatio, setGearRatio] = useState<NullableNumber>(null);
  const [gearInches, setGearInches] = useState<NullableNumber>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const cr = parseFloat(chainring);
    const cg = parseFloat(cog);
    const wd = parseFloat(wheelDiameter);

    // Validate inputs: must be positive numbers and cog > 0
    if (!isNaN(cr) && !isNaN(cg) && !isNaN(wd) && cr > 0 && cg > 0 && wd > 0) {
      // Calculate gear ratio (unitless) = chainring teeth / cog teeth
      const ratio = cr / cg;
      // Gear inches = gear ratio * wheel diameter (inches)
      const inches = ratio * wd;

      setGearRatio(parseFloat(ratio.toFixed(4)));
      setGearInches(parseFloat(inches.toFixed(2)));
    } else {
      setGearRatio(null);
      setGearInches(null);
    }
  }, [chainring, cog, wheelDiameter]);

  const handleDownloadPDF = () => {
    if (gearRatio === null || gearInches === null) return;

    generateCalculatorPDF({
      title: 'Bike Gear Calculator Results',
      inputs: [
        { label: 'Chainring Teeth', value: chainring },
        { label: 'Cog Teeth', value: cog },
        { label: 'Wheel Diameter (inches)', value: wheelDiameter },
      ],
      results: [
        { label: 'Gear Ratio', value: gearRatio.toString() },
        { label: 'Gear Inches', value: `${gearInches} in` },
      ],
    });
  };

  const chartData = (gearRatio !== null && gearInches !== null) ? [
    { label: 'Gear Ratio', value: gearRatio, unit: '' },
    { label: 'Gear Inches', value: gearInches, unit: 'in' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="chainring">Chainring Teeth</Label>
        <Input
          id="chainring"
          type="number"
          value={chainring}
          onChange={(e) => setChainring(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cog">Cog Teeth</Label>
        <Input
          id="cog"
          type="number"
          value={cog}
          onChange={(e) => setCog(e.target.value)}
          min="1"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="wheelDiameter">Wheel Diameter (inches)</Label>
        <Input
          id="wheelDiameter"
          type="number"
          value={wheelDiameter}
          onChange={(e) => setWheelDiameter(e.target.value)}
          min="1"
          step="0.1"
        />
      </div>
    </>
  );

  const results = (gearRatio !== null && gearInches !== null) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 items-center">
        <div>
          <div className="text-xs text-gray-500">Gear Ratio</div>
          <div className="text-4xl font-bold text-blue-900 my-2">{gearRatio}</div>
          <div className="text-sm text-gray-700">Unitless (chainring ÷ cog)</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">Gear Inches</div>
          <div className="text-4xl font-bold text-blue-900 my-2">{gearInches.toLocaleString()}</div>
          <div className="text-sm text-gray-700">inches</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Gear Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props.payload?.unit || '';
            if (Number.isFinite(value)) {
              // Show 2 decimals for numeric display except gear ratio we leave up to 4
              if (props.payload.label === 'Gear Ratio') return [value.toFixed(4), `${props.payload.label}`];
              return [`${value.toFixed(2)} ${unit}`.trim(), `${props.payload.label}`];
            }
            return [value, name];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Bike Gear Calculator"
      description="Calculate bike gear ratios and gear inches."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
