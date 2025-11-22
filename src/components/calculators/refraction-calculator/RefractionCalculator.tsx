'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function RefractionCalculator() {
  const [n1, setN1] = useState<string>('1.0');
  const [n2, setN2] = useState<string>('1.5');
  const [incidentAngle, setIncidentAngle] = useState<string>('30');

  const [refractedAngle, setRefractedAngle] = useState<number | null>(null);
  const [criticalAngle, setCriticalAngle] = useState<number | null>(null);
  const [isTIR, setIsTIR] = useState<boolean>(false);
  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const a = parseFloat(incidentAngle);
    const idx1 = parseFloat(n1);
    const idx2 = parseFloat(n2);

    if (isNaN(a) || isNaN(idx1) || isNaN(idx2) || idx1 <= 0 || idx2 <= 0) {
      setRefractedAngle(null);
      setIsTIR(false);
      setCriticalAngle(null);
      return;
    }

    // Convert incident angle to radians
    const rad = (a * Math.PI) / 180;

    // Snell's law: n1 * sin(theta1) = n2 * sin(theta2)
    // sin(theta2) = (n1 / n2) * sin(theta1)
    const sinArg = (idx1 / idx2) * Math.sin(rad);

    // Handle numeric edge cases and total internal reflection
    if (sinArg > 1 || sinArg < -1) {
      // Total internal reflection (or invalid numeric)
      setRefractedAngle(null);
      setIsTIR(true);
    } else {
      const theta2 = Math.asin(Math.max(-1, Math.min(1, sinArg)));
      const degrees = (theta2 * 180) / Math.PI;
      setRefractedAngle(parseFloat(degrees.toFixed(6)));
      setIsTIR(false);
    }

    // If n1 > n2, a critical angle may exist
    if (idx1 > idx2) {
      const crit = Math.asin(Math.min(1, idx2 / idx1));
      setCriticalAngle(parseFloat(((crit * 180) / Math.PI).toFixed(6)));
    } else {
      setCriticalAngle(null);
    }
  }, [n1, n2, incidentAngle]);

  const handleDownloadPDF = () => {
    generateCalculatorPDF({
      title: 'Refraction Calculator Results',
      inputs: [
        { label: 'Index of Refraction 1 (n1)', value: n1 },
        { label: 'Index of Refraction 2 (n2)', value: n2 },
        { label: 'Incident Angle (°)', value: incidentAngle },
      ],
      results: isTIR
        ? [
            { label: 'Result', value: 'Total Internal Reflection (no refraction)' },
            ...(criticalAngle !== null ? [{ label: 'Critical Angle (°)', value: `${criticalAngle}°` }] : []),
          ]
        : [
            { label: 'Refracted Angle (°)', value: refractedAngle !== null ? `${refractedAngle}°` : '—' },
            ...(criticalAngle !== null ? [{ label: 'Critical Angle (°)', value: `${criticalAngle}°` }] : []),
          ],
    });
  };

  const chartData = refractedAngle !== null ? [
    { label: 'Incident', angle: parseFloat(incidentAngle) || 0 },
    { label: 'Refracted', angle: refractedAngle },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="n1">Index of Refraction 1 (n1)</Label>
        <Input
          id="n1"
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="n2">Index of Refraction 2 (n2)</Label>
        <Input
          id="n2"
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="incidentAngle">Incident Angle (degrees)</Label>
        <Input
          id="incidentAngle"
          type="number"
          value={incidentAngle}
          onChange={(e) => setIncidentAngle(e.target.value)}
          min="0"
          max="180"
          step="0.01"
        />
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      {isTIR ? (
        <>
          <div className="text-2xl font-semibold text-red-700">Total Internal Reflection</div>
          {criticalAngle !== null ? (
            <div className="mt-3 text-lg text-gray-700">Critical Angle: {criticalAngle.toLocaleString()}°</div>
          ) : null}
        </>
      ) : refractedAngle !== null ? (
        <>
          <div className="text-5xl font-bold text-blue-900 my-3">{refractedAngle.toLocaleString()}°</div>
          <div className="text-lg text-gray-700">Refracted Angle</div>
          {criticalAngle !== null ? (
            <div className="mt-2 text-sm text-gray-600">Critical Angle: {criticalAngle}° (if incident angle &gt; critical → TIR)</div>
          ) : null}
        </>
      ) : (
        <div className="text-gray-600">Enter valid indices and angle to see the result.</div>
      )}
    </div>
  );

  const charts = showCharts && refractedAngle !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Angle Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)}°`} />
          <Bar dataKey="angle" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Refraction Calculator"
      description="Calculate the refraction angle when light passes between two media using Snell's law. Handles total internal reflection and shows the critical angle when applicable."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
