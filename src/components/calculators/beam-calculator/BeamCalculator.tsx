'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Material = 'steel' | 'wood' | 'concrete';

type BeamResult = {
  moment_kNm: number; // Bending moment in kN·m
  moment_Nm: number;  // Bending moment in N·m
  requiredSectionModulus_m3: number; // m^3
  requiredSectionModulus_cm3: number; // cm^3
};

const materialAllowable: Record<Material, { sigmaAllowMPa: number; color: string }> = {
  steel: { sigmaAllowMPa: 165, color: '#1e3a8a' },    // typical allowable bending stress (MPa) for structural steel
  wood: { sigmaAllowMPa: 10, color: '#92400e' },      // rough allowable bending stress for wood
  concrete: { sigmaAllowMPa: 3, color: '#065f46' },   // rough allowable bending stress for concrete
};

export default function BeamCalculator() {
  const [span, setSpan] = useState<string>('5'); // meters
  const [load, setLoad] = useState<string>('10'); // kN (point load)
  const [material, setMaterial] = useState<Material>('steel');
  const [result, setResult] = useState<BeamResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const L = parseFloat(span); // m
    const PkN = parseFloat(load); // kN

    if (isNaN(L) || isNaN(PkN) || L <= 0 || PkN < 0) {
      setResult(null);
      return;
    }

    // Convert to base units and calculate
    // For a simply supported beam with a central point load: M_max = P * L / 4
    // P in N (kN * 1000), L in m -> M in N·m
    const P_N = PkN * 1000;
    const M_Nm = (P_N * L) / 4; // N·m
    const M_kNm = M_Nm / 1000; // kN·m for display

    // Material allowable bending stress in MPa -> convert to N/m^2 by *1e6
    const sigmaAllow_Nm2 = materialAllowable[material].sigmaAllowMPa * 1e6;

    // Required section modulus S = M / sigma
    // M in N·m, sigma in N/m^2 -> S in m^3
    const S_m3 = M_Nm / sigmaAllow_Nm2;

    // Convert m^3 to cm^3 for easier interpretation (1 m^3 = 1e6 cm^3)
    const S_cm3 = S_m3 * 1e6;

    setResult({
      moment_kNm: parseFloat(M_kNm.toFixed(3)),
      moment_Nm: parseFloat(M_Nm.toFixed(3)),
      requiredSectionModulus_m3: parseFloat(S_m3.toExponential(6)),
      requiredSectionModulus_cm3: parseFloat(S_cm3.toFixed(2)),
    });
  }, [span, load, material]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Beam Calculator Results',
      inputs: [
        { label: 'Span (m)', value: span },
        { label: 'Load (kN)', value: load },
        { label: 'Material', value: material },
      ],
      results: [
        { label: 'Max Bending Moment', value: `${result.moment_kNm} kN·m (${result.moment_Nm} N·m)` },
        { label: 'Required Section Modulus', value: `${result.requiredSectionModulus_cm3} cm³ (${result.requiredSectionModulus_m3} m³)` },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Bending Moment (kN·m)', value: result.moment_kNm, unit: 'kN·m' },
        { label: 'Req. S (cm³)', value: result.requiredSectionModulus_cm3, unit: 'cm³' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="span">Beam Span (m)</Label>
        <Input
          id="span"
          type="number"
          value={span}
          onChange={(e) => setSpan(e.target.value)}
          min="0.01"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="load">Load (kN)</Label>
        <Input
          id="load"
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="material">Material</Label>
        <Select
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value as Material)}
        >
          <option value="steel">Steel</option>
          <option value="wood">Wood</option>
          <option value="concrete">Concrete</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-4xl font-bold text-blue-900 my-2">
        {result.moment_kNm.toLocaleString()} kN·m
      </div>
      <div className="text-sm text-gray-700 mb-2">(Max bending moment)</div>

      <div className="text-2xl font-semibold text-gray-800 mt-4">
        Required Section Modulus
      </div>
      <div className="text-3xl font-bold text-indigo-900 my-2">
        {result.requiredSectionModulus_cm3.toLocaleString()} cm³
      </div>
      <div className="text-sm text-gray-600">({result.requiredSectionModulus_m3} m³)</div>
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Beam Summary</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const unit = props && props.payload && props.payload.unit ? props.payload.unit : '';
            if (typeof value === 'number') {
              return `${value.toLocaleString()} ${unit}`;
            }
            return value;
          }} />
          <Bar dataKey="value" fill={materialAllowable[material].color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Beam Calculator"
      description="Calculate bending moment and required section modulus for a simply supported beam with a central point load. Useful for quick structural checks during design and planning."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
