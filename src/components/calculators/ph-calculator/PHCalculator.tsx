'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ConcentrationUnit = 'M';

export default function PHCalculator() {
  const [hConcentration, setHConcentration] = useState<string>('0.0001');
  const [unit] = useState<ConcentrationUnit>('M'); // base unit: molar (M)
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const conc = parseFloat(hConcentration);
    if (!isNaN(conc) && conc > 0) {
      // pH = -log10([H+])
      const ph = -Math.log10(conc);
      setResult(parseFloat(ph.toFixed(4)));
    } else {
      setResult(null);
    }
  }, [hConcentration]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'pH Calculation Results',
      inputs: [
        { label: "H+ Concentration (M)", value: hConcentration },
        { label: 'Unit', value: unit },
      ],
      results: [
        { label: 'pH', value: `${result}` },
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'H+ Concentration', value: parseFloat(hConcentration) || 0, unit: 'M' },
    { label: 'pH', value: result, unit: 'pH' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="hConcentration">H+ Concentration (M)</Label>
        <Input
          id="hConcentration"
          type="number"
          value={hConcentration}
          onChange={(e) => setHConcentration(e.target.value)}
          min="0"
          step="0.0000001"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="unit">Unit</Label>
          <Select id="unit" value={unit} onChange={() => {}} disabled>
            <option value="M">Molar (M)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="placeholder">&nbsp;</Label>
          <div className="h-10" />
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-green-800 my-3">{result.toLocaleString()}</div>
      <div className="text-lg text-gray-700">pH</div>
      <div className="mt-3 text-sm text-gray-600">[H+] = {parseFloat(hConcentration).toExponential(3)} M</div>
    </div>
  ) : (
    <div className="text-center text-sm text-red-600">Enter a positive H+ concentration to calculate pH.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">pH and H+ Concentration</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => {
            const item = props && props.payload ? props.payload[0] : null;
            const unit = item?.unit || '';
            if (unit === 'M') {
              // show scientific notation for concentration
              return [(value as number).toExponential(3), unit];
            }
            // pH
            return [(value as number).toFixed(2), unit];
          }} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="pH Calculator"
      description="Calculate pH from hydrogen ion concentration. Enter the H+ concentration in molar (M) to get the pH value instantly."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
