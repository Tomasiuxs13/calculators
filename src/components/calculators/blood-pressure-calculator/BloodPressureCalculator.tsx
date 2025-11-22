'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BloodPressureCalculator() {
  const [systolic, setSystolic] = useState<string>('120');
  const [diastolic, setDiastolic] = useState<string>('80');
  const [arm, setArm] = useState<string>('left'); // simple additional select to utilize Select import
  const [category, setCategory] = useState<string>('');
  const [pulsePressure, setPulsePressure] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const sys = parseFloat(systolic);
    const dia = parseFloat(diastolic);

    if (isNaN(sys) || isNaN(dia) || sys <= 0 || dia <= 0) {
      setCategory('');
      setPulsePressure(null);
      return;
    }

    // Determine category following AHA guidelines
    let cat = '';

    if (sys > 180 || dia > 120) {
      cat = 'Hypertensive Crisis (seek emergency care)';
    } else if (sys >= 140 || dia >= 90) {
      cat = 'Hypertension Stage 2';
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      cat = 'Hypertension Stage 1';
    } else if (sys >= 120 && sys <= 129 && dia < 80) {
      cat = 'Elevated';
    } else if (sys < 120 && dia < 80) {
      cat = 'Normal';
    } else {
      cat = 'Uncategorized';
    }

    setCategory(cat);
    setPulsePressure(parseFloat((sys - dia).toFixed(1)));
  }, [systolic, diastolic]);

  const handleDownloadPDF = () => {
    generateCalculatorPDF({
      title: 'Blood Pressure Assessment Results',
      inputs: [
        { label: 'Systolic Pressure (mmHg)', value: systolic },
        { label: 'Diastolic Pressure (mmHg)', value: diastolic },
        { label: 'Measurement Arm', value: arm },
      ],
      results: [
        { label: 'Category', value: category },
        { label: 'Pulse Pressure', value: pulsePressure !== null ? `${pulsePressure} mmHg` : '—' },
      ],
    });
  };

  const chartData = (
    !isNaN(parseFloat(systolic)) && !isNaN(parseFloat(diastolic))) ? [
    { label: 'Systolic', value: parseFloat(systolic) || 0, unit: 'mmHg' },
    { label: 'Diastolic', value: parseFloat(diastolic) || 0, unit: 'mmHg' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="systolic">Systolic Pressure (mmHg)</Label>
        <Input
          id="systolic"
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="diastolic">Diastolic Pressure (mmHg)</Label>
        <Input
          id="diastolic"
          type="number"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      {/* Additional select to mirror example import usage and provide context */}
      <div className="space-y-2">
        <Label htmlFor="arm">Measurement Arm</Label>
        <Select
          id="arm"
          value={arm}
          onChange={(e) => setArm(e.target.value)}
        >
          <option value="left">Left Arm</option>
          <option value="right">Right Arm</option>
        </Select>
      </div>
    </>
  );

  const results = (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Assessment</div>
      <div className="text-3xl font-bold text-blue-900 my-2">
        {category || '—'}
      </div>
      <div className="text-lg text-gray-700 mb-3">Systolic: {isNaN(parseFloat(systolic)) ? '—' : parseFloat(systolic).toLocaleString()} mmHg • Diastolic: {isNaN(parseFloat(diastolic)) ? '—' : parseFloat(diastolic).toLocaleString()} mmHg</div>
      <div className="text-sm text-gray-600">Pulse Pressure</div>
      <div className="text-2xl font-semibold text-gray-800 mt-1">{pulsePressure !== null ? `${pulsePressure} mmHg` : '—'}</div>
    </div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Blood Pressure Chart</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number, name: string, props: any) => `${value} ${props.payload.unit || 'mmHg'}`} />
          <Bar dataKey="value" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Blood Pressure Calculator"
      description="Assess blood pressure readings (systolic and diastolic) and determine the category according to common clinical guidelines."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
