'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BMRCalculator() {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('30');
  const [height, setHeight] = useState<string>('175');
  const [weight, setWeight] = useState<string>('70');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('9');
  const [weightLbs, setWeightLbs] = useState<string>('154');
  const [bmr, setBmr] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    let h = 0;
    let w = 0;

    if (unitSystem === 'metric') {
      h = parseFloat(height);
      w = parseFloat(weight);
    } else {
      h = (parseFloat(heightFt) * 12 + parseFloat(heightIn)) * 2.54; // to cm
      w = parseFloat(weightLbs) * 0.453592; // to kg
    }

    const a = parseFloat(age);

    if (h > 0 && w > 0 && a > 0) {
      // Mifflin-St Jeor Equation
      let calculatedBmr = 0;
      if (gender === 'male') {
        calculatedBmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        calculatedBmr = 10 * w + 6.25 * h - 5 * a - 161;
      }
      setBmr(Math.round(calculatedBmr));
    } else {
      setBmr(null);
    }
  }, [unitSystem, gender, age, height, weight, heightFt, heightIn, weightLbs]);

  const handleDownloadPDF = () => {
    if (!bmr) return;
    const inputs = unitSystem === 'metric'
      ? [
          { label: 'Gender', value: gender === 'male' ? 'Male' : 'Female' },
          { label: 'Age', value: `${age} years` },
          { label: 'Height', value: `${height} cm` },
          { label: 'Weight', value: `${weight} kg` },
        ]
      : [
          { label: 'Gender', value: gender === 'male' ? 'Male' : 'Female' },
          { label: 'Age', value: `${age} years` },
          { label: 'Height', value: `${heightFt}' ${heightIn}"` },
          { label: 'Weight', value: `${weightLbs} lbs` },
        ];
    generateCalculatorPDF({
      title: 'BMR Calculator Results',
      inputs,
      results: [{ label: 'Basal Metabolic Rate (BMR)', value: `${bmr} calories/day` }],
    });
  };

  const activityLevels = [
    { level: 'Sedentary', multiplier: 1.2, label: 'Little or no exercise' },
    { level: 'Lightly Active', multiplier: 1.375, label: 'Light exercise 1-3 days/week' },
    { level: 'Moderately Active', multiplier: 1.55, label: 'Moderate exercise 3-5 days/week' },
    { level: 'Very Active', multiplier: 1.725, label: 'Hard exercise 6-7 days/week' },
    { level: 'Extra Active', multiplier: 1.9, label: 'Very hard exercise & physical job' },
  ];

  const tdeeData = bmr ? activityLevels.map(level => ({
    level: level.level,
    tdee: Math.round(bmr * level.multiplier),
  })) : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select id="gender" value={gender} onChange={(e) => setGender(e.target.value as 'male' | 'female')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">Age (years)</Label>
        <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} min="1" max="120" step="1" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="unitSystem">Unit System</Label>
        <Select id="unitSystem" value={unitSystem} onChange={(e) => setUnitSystem(e.target.value as 'metric' | 'imperial')}>
          <option value="metric">Metric (cm, kg)</option>
          <option value="imperial">Imperial (ft/in, lbs)</option>
        </Select>
      </div>
      {unitSystem === 'metric' ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} min="50" max="250" step="1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} min="20" max="300" step="0.1" />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="heightFt">Height (feet)</Label>
              <Input id="heightFt" type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} min="3" max="8" step="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heightIn">Height (inches)</Label>
              <Input id="heightIn" type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} min="0" max="11" step="1" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="weightLbs">Weight (lbs)</Label>
            <Input id="weightLbs" type="number" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)} min="50" max="660" step="0.1" />
          </div>
        </>
      )}
    </>
  );

  const results = bmr !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Basal Metabolic Rate</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{bmr.toLocaleString()}</div>
      <div className="text-base text-gray-700 mb-4">calories/day</div>
      <div className="text-sm text-gray-600 mt-4 pt-4 border-t border-blue-200">
        This is the calories your body burns at rest
      </div>
    </div>
  ) : null;

  const charts = bmr !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">TDEE by Activity Level</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={tdeeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toLocaleString()} cal/day`} />
          <Bar dataKey="tdee" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate (BMR) - the calories your body burns at rest."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}

