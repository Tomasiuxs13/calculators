'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DrivingRecord = 'clean' | 'accidents' | 'violations';
type CoverageLevel = 'liability' | 'full';

export default function CarInsuranceCalculator() {
  const [vehicleValue, setVehicleValue] = useState<string>('25000');
  const [driverAge, setDriverAge] = useState<string>('30');
  const [drivingRecord, setDrivingRecord] = useState<DrivingRecord>('clean');
  const [coverageLevel, setCoverageLevel] = useState<CoverageLevel>('full');

  const [totalPremium, setTotalPremium] = useState<number | null>(null);
  const [basePremium, setBasePremium] = useState<number | null>(null);
  const [afterAgePremium, setAfterAgePremium] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const valueNum = parseFloat(vehicleValue);
    const ageNum = parseInt(driverAge, 10);

    if (isNaN(valueNum) || valueNum <= 0 || isNaN(ageNum) || ageNum <= 0) {
      setTotalPremium(null);
      setBasePremium(null);
      setAfterAgePremium(null);
      return;
    }

    // Determine base rate by coverage level (convert to base value first analogy)
    // Liability is cheaper, full coverage higher
    const baseRate = coverageLevel === 'full' ? 0.05 : 0.02; // 5% or 2% of vehicle value

    // Age modifier
    let ageModifier = 1;
    if (ageNum < 25) ageModifier = 1.3; // young driver surcharge
    else if (ageNum > 65) ageModifier = 1.2; // senior surcharge
    else ageModifier = 1.0; // standard

    // Driving record modifier
    const recordModifiers: Record<DrivingRecord, number> = {
      clean: 1.0,
      accidents: 1.5,
      violations: 1.3,
    };

    const recordModifier = recordModifiers[drivingRecord];

    // Calculate step-by-step (base -> after age -> after record)
    const calculatedBase = valueNum * baseRate;
    const calculatedAfterAge = calculatedBase * ageModifier;
    const calculatedTotal = calculatedAfterAge * recordModifier;

    setBasePremium(parseFloat(calculatedBase.toFixed(2)));
    setAfterAgePremium(parseFloat(calculatedAfterAge.toFixed(2)));
    setTotalPremium(parseFloat(calculatedTotal.toFixed(2)));
  }, [vehicleValue, driverAge, drivingRecord, coverageLevel]);

  const handleDownloadPDF = () => {
    if (totalPremium === null) return;

    generateCalculatorPDF({
      title: 'Car Insurance Estimate',
      inputs: [
        { label: 'Vehicle Value', value: `$${parseFloat(vehicleValue || '0').toLocaleString()}` },
        { label: 'Driver Age', value: driverAge },
        { label: 'Driving Record', value: drivingRecord },
        { label: 'Coverage Level', value: coverageLevel },
      ],
      results: [
        { label: 'Base Premium', value: basePremium !== null ? `$${basePremium.toLocaleString()}` : '—' },
        { label: 'After Age Adjustment', value: afterAgePremium !== null ? `$${afterAgePremium.toLocaleString()}` : '—' },
        { label: 'Estimated Annual Premium', value: `$${totalPremium.toLocaleString()}` },
      ],
    });
  };

  const chartData = totalPremium !== null && basePremium !== null && afterAgePremium !== null ? [
    { label: 'Base', value: basePremium },
    { label: 'After Age', value: afterAgePremium },
    { label: 'Total', value: totalPremium },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="vehicleValue">Vehicle Value</Label>
        <Input
          id="vehicleValue"
          type="number"
          value={vehicleValue}
          onChange={(e) => setVehicleValue(e.target.value)}
          min="0"
          step="100"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="driverAge">Driver Age</Label>
          <Input
            id="driverAge"
            type="number"
            value={driverAge}
            onChange={(e) => setDriverAge(e.target.value)}
            min="16"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="drivingRecord">Driving Record</Label>
          <Select
            id="drivingRecord"
            value={drivingRecord}
            onChange={(e) => setDrivingRecord(e.target.value as DrivingRecord)}
          >
            <option value="clean">Clean</option>
            <option value="accidents">Accidents</option>
            <option value="violations">Traffic Violations</option>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverageLevel">Coverage Level</Label>
        <Select
          id="coverageLevel"
          value={coverageLevel}
          onChange={(e) => setCoverageLevel(e.target.value as CoverageLevel)}
        >
          <option value="liability">Liability Only</option>
          <option value="full">Full Coverage</option>
        </Select>
      </div>
    </>
  );

  const results = totalPremium !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Annual Premium</div>
      <div className="text-5xl font-bold text-green-700 my-3">${totalPremium.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Based on selected coverage and driver profile</div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Premium Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Car Insurance Calculator"
      description="Estimate car insurance costs based on vehicle and driver information."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
