'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';
type VitaminType = 'vitamin-d' | 'vitamin-c' | 'calcium';

type Recommendation = {
  recommended: number; // recommended daily intake
  unit: string; // display unit
  upperLimit?: number; // tolerable upper intake level
};

// Basic recommendations (simplified) used for demonstration purposes.
// Values: Vitamin D -> IU, Vitamin C -> mg, Calcium -> mg
function getRecommendation(age: number, gender: Gender, vitamin: VitaminType): Recommendation {
  const a = Math.max(0, Math.floor(age));

  switch (vitamin) {
    case 'vitamin-d':
      // Vitamin D recommendations (IU)
      if (a < 1) return { recommended: 400, unit: 'IU', upperLimit: 1000 };
      if (a <= 70) return { recommended: 600, unit: 'IU', upperLimit: 4000 };
      return { recommended: 800, unit: 'IU', upperLimit: 4000 };

    case 'vitamin-c':
      // Vitamin C recommendations (mg)
      if (a < 1) return { recommended: 40, unit: 'mg', upperLimit: 400 };
      if (a < 14) return { recommended: 45, unit: 'mg', upperLimit: 650 };
      // Adults
      if (a >= 14) {
        if (gender === 'male') return { recommended: 90, unit: 'mg', upperLimit: 2000 };
        return { recommended: 75, unit: 'mg', upperLimit: 2000 };
      }
      return { recommended: 60, unit: 'mg', upperLimit: 2000 };

    case 'calcium':
      // Calcium recommendations (mg)
      if (a < 1) return { recommended: 200, unit: 'mg', upperLimit: 1000 };
      if (a < 4) return { recommended: 700, unit: 'mg', upperLimit: 2500 };
      if (a < 9) return { recommended: 1000, unit: 'mg', upperLimit: 2500 };
      // Ages 9-18
      if (a <= 18) return { recommended: 1300, unit: 'mg', upperLimit: 3000 };
      // Adults 19-50
      if (a <= 50) return { recommended: 1000, unit: 'mg', upperLimit: 2500 };
      // Older adults
      if (gender === 'female' && a > 50) return { recommended: 1200, unit: 'mg', upperLimit: 2500 };
      if (gender === 'male' && a > 70) return { recommended: 1200, unit: 'mg', upperLimit: 2500 };
      return { recommended: 1000, unit: 'mg', upperLimit: 2500 };

    default:
      return { recommended: 0, unit: '' };
  }
}

export default function VitaminCalculator() {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<Gender>('male');
  const [vitamin, setVitamin] = useState<VitaminType>('vitamin-d');
  const [result, setResult] = useState<Recommendation | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const parsedAge = parseInt(age, 10);
    if (!isNaN(parsedAge) && parsedAge >= 0) {
      const rec = getRecommendation(parsedAge, gender, vitamin);
      setResult(rec);
    } else {
      setResult(null);
    }
  }, [age, gender, vitamin]);

  const handleDownloadPDF = () => {
    if (result === null) return;

    generateCalculatorPDF({
      title: 'Vitamin & Mineral Daily Needs',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Nutrient', value: vitamin },
      ],
      results: [
        { label: 'Recommended Daily Intake', value: `${result.recommended} ${result.unit}` },
        ...(result.upperLimit ? [{ label: 'Tolerable Upper Intake Level', value: `${result.upperLimit} ${result.unit}` }] : []),
      ],
    });
  };

  const chartData = result !== null ? [
    { label: 'Recommended', value: result.recommended, unit: result.unit },
    ...(result.upperLimit ? [{ label: 'Upper Limit', value: result.upperLimit, unit: result.unit }] : []),
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="vitamin">Vitamin / Mineral</Label>
          <Select
            id="vitamin"
            value={vitamin}
            onChange={(e) => setVitamin(e.target.value as VitaminType)}
          >
            <option value="vitamin-d">Vitamin D</option>
            <option value="vitamin-c">Vitamin C</option>
            <option value="calcium">Calcium</option>
          </Select>
        </div>
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Recommended Daily Intake</div>
      <div className="text-5xl font-bold text-green-800 my-3">
        {result.recommended.toLocaleString()} {result.unit}
      </div>
      {result.upperLimit ? (
        <div className="text-sm text-gray-600">Tolerable Upper Intake Level: {result.upperLimit.toLocaleString()} {result.unit}</div>
      ) : null}
    </div>
  ) : null;

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Recommended vs Upper Limit</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} ${chartData.find(d => d.value === value)?.unit || ''}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Vitamin & Mineral Calculator"
      description="Calculate daily vitamin and mineral needs based on age and gender. Provides recommended intake and tolerable upper intake levels for common nutrients."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
