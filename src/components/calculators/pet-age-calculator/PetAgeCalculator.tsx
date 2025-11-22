'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type PetType = 'dog' | 'cat';

export default function PetAgeCalculator() {
  const [petType, setPetType] = useState<PetType>('dog');
  const [petAge, setPetAge] = useState<string>('5');
  const [humanAge, setHumanAge] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Conversion logic: convert pet age to human years
  // The implementation converts to a base unit (human years) using piecewise rules,
  // then returns the result (no further target unit conversion is required here).
  const convertPetAgeToHuman = (type: PetType, ageYears: number): number => {
    if (ageYears <= 0) return 0;

    if (type === 'dog') {
      // Common veterinary approximation:
      // 1st year = 15 human years
      // 2nd year = 9 human years
      // each additional year = 5 human years
      if (ageYears <= 1) return ageYears * 15;
      if (ageYears <= 2) return 15 + (ageYears - 1) * 9;
      return 15 + 9 + (ageYears - 2) * 5; // 24 + 5*(age-2)
    }

    // cat
    // 1st year = 15 human years
    // 2nd year = 9 human years
    // each additional year = 4 human years
    if (ageYears <= 1) return ageYears * 15;
    if (ageYears <= 2) return 15 + (ageYears - 1) * 9;
    return 15 + 9 + (ageYears - 2) * 4; // 24 + 4*(age-2)
  };

  useEffect(() => {
    const numericAge = parseFloat(petAge);
    if (!isNaN(numericAge) && numericAge >= 0) {
      const converted = convertPetAgeToHuman(petType, numericAge);
      setHumanAge(parseFloat(converted.toFixed(2)));
    } else {
      setHumanAge(null);
    }
  }, [petType, petAge]);

  const handleDownloadPDF = () => {
    if (humanAge === null) return;

    generateCalculatorPDF({
      title: 'Pet Age Calculator Results',
      inputs: [
        { label: 'Pet Type', value: petType },
        { label: 'Pet Age (years)', value: petAge },
      ],
      results: [
        { label: 'Equivalent Human Age', value: `${humanAge} years` },
      ],
    });
  };

  const chartData = humanAge !== null ? [
    { label: 'Pet Age', value: parseFloat(petAge) || 0, unit: petType },
    { label: 'Human Age', value: humanAge, unit: 'human years' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="petType">Pet Type</Label>
        <Select
          id="petType"
          value={petType}
          onChange={(e) => setPetType(e.target.value as PetType)}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="petAge">Pet Age (years)</Label>
        <Input
          id="petAge"
          type="number"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          min="0"
          step="0.1"
        />
      </div>
    </>
  );

  const results = humanAge !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Equivalent Human Age</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {humanAge.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">years</div>
    </div>
  ) : null;

  const charts = showCharts && humanAge !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Pet vs Human Age</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
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
      title="Pet Age Calculator"
      description="Convert pet age (dog or cat) into equivalent human years using common veterinary approximations."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
