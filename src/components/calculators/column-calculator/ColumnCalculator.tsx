'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Material = 'concrete' | 'steel';

const materialStrengths: Record<Material, number> = {
  // Characteristic strengths in MPa (for calculation simplicity)
  concrete: 30, // typical C30/37 concrete compressive strength
  steel: 250, // typical structural steel yield in MPa (conservative)
};

const materialElasticModulus: Record<Material, number> = {
  concrete: 25e9, // Pa (~25 GPa)
  steel: 200e9, // Pa (~200 GPa)
};

export default function ColumnCalculator() {
  const [height, setHeight] = useState<string>('3');
  const [width, setWidth] = useState<string>('0.3');
  const [depth, setDepth] = useState<string>('0.3');
  const [material, setMaterial] = useState<Material>('concrete');
  const [capacityKN, setCapacityKN] = useState<number | null>(null);
  const [areaM2, setAreaM2] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse inputs
    const h = parseFloat(height);
    const b = parseFloat(width);
    const d = parseFloat(depth);

    if ([h, b, d].some((v) => isNaN(v) || v <= 0)) {
      setCapacityKN(null);
      setAreaM2(null);
      return;
    }

    // Cross-sectional area (m^2)
    const area = b * d;

    // Nominal axial capacity (basic): A * f (Pa) -> N
    // Convert MPa to Pa by multiplying by 1e6
    const f = materialStrengths[material] * 1e6; // Pa
    const capacityNominalN = area * f; // N

    // Compute slenderness / Euler buckling to check reduced capacity
    // Use rectangular section least second moment of area
    // Let b_max = larger dimension, d_min = smaller dimension
    const bMax = Math.max(b, d);
    const dMin = Math.min(b, d);

    // Second moment of area about weak axis (least) I = b_max * d_min^3 / 12
    const I = (bMax * Math.pow(dMin, 3)) / 12; // m^4

    // Radius of gyration r = sqrt(I/A)
    const r = Math.sqrt(I / area); // m

    // Effective length factor K assumed = 1.0 for pinned-pinned (conservative default)
    const K = 1.0;
    const slenderness = (K * h) / r; // dimensionless

    // Euler critical buckling load Pcr = (pi^2 * E * I) / (K*L)^2
    const E = materialElasticModulus[material];
    const Pcr = (Math.PI * Math.PI * E * I) / Math.pow(K * h, 2); // N

    // Apply a simple slenderness-based reduction: if slenderness > 50 use min(Pcr, nominal)
    // otherwise use nominal. This is a simplified engineering check for demonstration.
    let designCapacityN = capacityNominalN;
    if (slenderness > 50) {
      designCapacityN = Math.min(capacityNominalN, Pcr);
    }

    // Convert to kN for display
    const designCapacityKN = designCapacityN / 1000;

    setAreaM2(area);
    setCapacityKN(parseFloat(designCapacityKN.toFixed(2)));
  }, [height, width, depth, material]);

  const handleDownloadPDF = () => {
    if (capacityKN === null || areaM2 === null) return;

    generateCalculatorPDF({
      title: 'Column Load Capacity Results',
      inputs: [
        { label: 'Column Height (m)', value: height },
        { label: 'Column Width (m)', value: width },
        { label: 'Column Depth (m)', value: depth },
        { label: 'Material', value: material },
      ],
      results: [
        { label: 'Cross-sectional Area (m²)', value: `${areaM2} m²` },
        { label: 'Design Axial Capacity', value: `${capacityKN} kN` },
      ],
    });
  };

  const chartData = capacityKN !== null && areaM2 !== null ? [
    { label: 'Area (cm²)', value: parseFloat((areaM2 * 10000).toFixed(2)) },
    { label: 'Capacity (kN)', value: capacityKN },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="height">Column Height (m)</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="width">Column Width (m)</Label>
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
          <Label htmlFor="depth">Column Depth (m)</Label>
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

      <div className="space-y-2">
        <Label htmlFor="material">Material</Label>
        <Select
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value as Material)}
        >
          <option value="concrete">Concrete</option>
          <option value="steel">Steel</option>
        </Select>
      </div>
    </>
  );

  const results = capacityKN !== null && areaM2 !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Design Axial Capacity</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{capacityKN.toLocaleString()} kN</div>
      <div className="text-lg text-gray-700">Area: {(areaM2 * 10000).toLocaleString()} cm²</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Section Area vs Capacity</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string) => {
            if (name === 'Capacity (kN)' || (typeof value === 'number' && value > 100)) {
              return `${Number(value).toFixed(2)} ${name.includes('Capacity') ? 'kN' : ''}`;
            }
            return `${Number(value).toFixed(2)}`;
          }} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Column Calculator"
      description="Calculate column load capacity. Enter column dimensions and select material to estimate axial capacity."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
