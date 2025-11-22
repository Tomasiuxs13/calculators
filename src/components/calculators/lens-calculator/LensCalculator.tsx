'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type LensType = 'convex' | 'concave';

export default function LensCalculator() {
  const [objectDistance, setObjectDistance] = useState<string>('0.5');
  const [focalLength, setFocalLength] = useState<string>('0.2');
  const [lensType, setLensType] = useState<LensType>('convex');

  // Results
  const [imageDistance, setImageDistance] = useState<number | null>(null); // positive => real image (same side as outgoing light), negative => virtual
  const [magnification, setMagnification] = useState<number | null>(null);
  const [nature, setNature] = useState<string>('');
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const doVal = parseFloat(objectDistance);
    const fValInput = parseFloat(focalLength);

    if (isNaN(doVal) || isNaN(fValInput) || doVal === 0) {
      setImageDistance(null);
      setMagnification(null);
      setNature('');
      return;
    }

    // Apply lens type to focal length sign: convex => positive f, concave => negative f
    const fSigned = lensType === 'convex' ? fValInput : -Math.abs(fValInput);

    // Lens formula: 1/f = 1/do + 1/di  =>  di = 1 / (1/f - 1/do)
    const denom = (1 / fSigned) - (1 / doVal);

    if (Math.abs(denom) < 1e-12) {
      // Image at infinity
      setImageDistance(Infinity);
      setMagnification(0);
      setNature('Image at Infinity');
      return;
    }

    const di = 1 / denom;
    const diRounded = parseFloat(di.toFixed(6));
    const m = parseFloat(((-di) / doVal).toFixed(6));

    setImageDistance(diRounded);
    setMagnification(m);
    setNature(diRounded > 0 ? 'Real' : 'Virtual');
  }, [objectDistance, focalLength, lensType]);

  const handleDownloadPDF = () => {
    const imgDistLabel = imageDistance === Infinity ? 'Infinity' : imageDistance === null ? 'N/A' : `${imageDistance} m`;
    const magLabel = magnification === null ? 'N/A' : `${magnification}`;

    generateCalculatorPDF({
      title: 'Lens Calculator Results',
      inputs: [
        { label: 'Object Distance (m)', value: objectDistance },
        { label: 'Focal Length (m)', value: focalLength },
        { label: 'Lens Type', value: lensType },
      ],
      results: [
        { label: 'Image Distance', value: imgDistLabel },
        { label: 'Magnification', value: magLabel },
        { label: 'Image Nature', value: nature || 'N/A' },
      ],
    });
  };

  const chartData = imageDistance !== null && imageDistance !== Infinity ? [
    { label: 'Object', value: Math.abs(parseFloat(objectDistance) || 0), unit: 'm' },
    { label: 'Focal', value: Math.abs(parseFloat(focalLength) || 0), unit: 'm' },
    { label: 'Image', value: Math.abs(imageDistance), unit: 'm' },
  ] : imageDistance === Infinity ? [
    { label: 'Object', value: Math.abs(parseFloat(objectDistance) || 0), unit: 'm' },
    { label: 'Focal', value: Math.abs(parseFloat(focalLength) || 0), unit: 'm' },
    { label: 'Image', value: 0, unit: 'm' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="objectDistance">Object Distance (m)</Label>
        <Input
          id="objectDistance"
          type="number"
          value={objectDistance}
          onChange={(e) => setObjectDistance(e.target.value)}
          min="0"
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="focalLength">Focal Length (m)</Label>
        <Input
          id="focalLength"
          type="number"
          value={focalLength}
          onChange={(e) => setFocalLength(e.target.value)}
          step="0.001"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lensType">Lens Type</Label>
        <Select
          id="lensType"
          value={lensType}
          onChange={(e) => setLensType(e.target.value as LensType)}
        >
          <option value="convex">Convex (converging)</option>
          <option value="concave">Concave (diverging)</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>

      <div className="grid grid-cols-1 gap-3">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Image Distance</div>
          <div className="text-3xl font-bold text-blue-900 my-1">
            {imageDistance === null
              ? 'N/A'
              : imageDistance === Infinity
              ? '∞'
              : imageDistance.toLocaleString()}
          </div>
          <div className="text-sm text-gray-700">{imageDistance === null ? '-' : 'm'}</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Magnification</div>
          <div className="text-3xl font-bold text-blue-900 my-1">
            {magnification === null ? 'N/A' : magnification}
          </div>
          <div className="text-sm text-gray-700">(negative =&gt; inverted, positive =&gt; upright)</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Image Nature</div>
          <div className="text-2xl font-semibold text-gray-800 my-1">{nature || 'N/A'}</div>
          <div className="text-sm text-gray-700">{lensType === 'convex' ? 'Converging lens' : 'Diverging lens'}</div>
        </div>
      </div>
    </div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Lens Distances Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(3)} m`} />
          <Bar dataKey="value" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 mt-2 text-center">Values shown are magnitudes (m)</p>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Lens Calculator"
      description="Calculate image distance, magnification, and image nature for simple thin lenses using the lens formula."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
