'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type OutputType = 'pH' | 'pOH';

export default function BufferCalculator() {
  const [pKa, setPka] = useState<string>('4.75');
  const [conjugateBase, setConjugateBase] = useState<string>('0.1');
  const [weakAcid, setWeakAcid] = useState<string>('0.1');
  const [outputType, setOutputType] = useState<OutputType>('pH');
  const [result, setResult] = useState<number | null>(null);
  const [ratio, setRatio] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const numPka = parseFloat(pKa);
    const numA = parseFloat(conjugateBase);
    const numHA = parseFloat(weakAcid);

    if (!isNaN(numPka) && !isNaN(numA) && !isNaN(numHA) && numA >= 0 && numHA >= 0) {
      // avoid division by zero; ratio defined when both concentrations >= 0
      if (numHA === 0 && numA === 0) {
        setRatio(null);
        setResult(null);
        return;
      }

      // Henderson-Hasselbalch: pH = pKa + log10([A-]/[HA])
      // Use ratio even when one is zero to allow -Infinity/+Infinity handling
      const rawRatio = numA / numHA; // may be Infinity if HA = 0

      if (rawRatio === 0) {
        // [A-] = 0 -> log10(0) = -Infinity -> pH -> -Infinity
        setRatio(0);
        setResult(null);
        return;
      }

      if (!isFinite(rawRatio)) {
        // HA === 0 and A- > 0 => ratio = Infinity -> pH = +Infinity
        setRatio(Infinity);
        setResult(null);
        return;
      }

      const pH = numPka + Math.log10(rawRatio);
      const roundedRatio = parseFloat(rawRatio.toFixed(6));
      const roundedP = parseFloat(pH.toFixed(6));

      setRatio(roundedRatio);

      if (outputType === 'pH') {
        setResult(roundedP);
      } else {
        // pOH approximation at 25°C: pKw = 14.00
        const pOH = 14 - pH;
        setResult(parseFloat(pOH.toFixed(6)));
      }
    } else {
      setRatio(null);
      setResult(null);
    }
  }, [pKa, conjugateBase, weakAcid, outputType]);

  const handleDownloadPDF = () => {
    if (result === null && ratio === null) return;

    const displayResult = result === null ? 'Undefined' : `${result}`;

    generateCalculatorPDF({
      title: 'Buffer pH Calculator Results',
      inputs: [
        { label: 'pKa', value: pKa },
        { label: '[A-] Concentration (M)', value: conjugateBase },
        { label: '[HA] Concentration (M)', value: weakAcid },
        { label: 'Output', value: outputType },
      ],
      results: [
        { label: outputType, value: displayResult },
        { label: '[A-]/[HA] ratio', value: ratio === null ? 'Undefined' : `${ratio}` },
      ],
    });
  };

  const chartData = [
    { label: '[A-]', value: Math.max(0, parseFloat(conjugateBase) || 0), unit: 'M' },
    { label: '[HA]', value: Math.max(0, parseFloat(weakAcid) || 0), unit: 'M' },
  ];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="pKa">pKa</Label>
        <Input
          id="pKa"
          type="number"
          value={pKa}
          onChange={(e) => setPka(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="conjugateBase">[A-] Concentration (M)</Label>
          <Input
            id="conjugateBase"
            type="number"
            value={conjugateBase}
            onChange={(e) => setConjugateBase(e.target.value)}
            min="0"
            step="0.000001"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weakAcid">[HA] Concentration (M)</Label>
          <Input
            id="weakAcid"
            type="number"
            value={weakAcid}
            onChange={(e) => setWeakAcid(e.target.value)}
            min="0"
            step="0.000001"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="outputType">Output</Label>
        <Select
          id="outputType"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value as OutputType)}
        >
          <option value="pH">pH</option>
          <option value="pOH">pOH (at 25°C)</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {result === null ? '—' : result.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700 mb-2">{outputType}</div>
      {ratio !== null ? (
        <div className="text-sm text-gray-600">[A-]/[HA] = {ratio === Infinity ? '∞' : ratio}</div>
      ) : (
        <div className="text-sm text-gray-600">Ratio undefined (check concentrations)</div>
      )}
    </div>
  );

  const charts = showCharts ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Buffer Composition</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} M`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Buffer pH Calculator"
      description="Calculate buffer pH using the Henderson-Hasselbalch equation. Enter pKa and concentrations of the conjugate base and weak acid to compute pH or pOH (at 25°C)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
