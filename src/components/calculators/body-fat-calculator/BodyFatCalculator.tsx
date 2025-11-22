'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Gender = 'male' | 'female';

interface BodyFatResult {
  method: string;
  value: number;
}

export default function BodyFatCalculator() {
  const [age, setAge] = useState<string>('30');
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [waist, setWaist] = useState<string>('85');
  const [neck, setNeck] = useState<string>('38');
  const [hip, setHip] = useState<string>('95');
  const [result, setResult] = useState<BodyFatResult[]>([]);

  useEffect(() => {
    const numAge = parseFloat(age);
    const numWeight = parseFloat(weight);
    const numHeight = parseFloat(height);
    const numWaist = parseFloat(waist);
    const numNeck = parseFloat(neck);
    const numHip = parseFloat(hip);

    if (isNaN(numAge) || isNaN(numWeight) || isNaN(numHeight) || isNaN(numWaist) || isNaN(numNeck) || isNaN(numHip)) {
      setResult([]);
      return;
    }

    const results: BodyFatResult[] = [];

    // Navy Method Calculation
    if (gender === 'male') {
      const bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(numWaist - numNeck) + 0.15456 * Math.log10(numHeight)) - 450;
      results.push({ method: 'Navy Method', value: parseFloat(bodyFatPercentage.toFixed(2)) });
    } else if (gender === 'female') {
      const bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(numWaist + numHip - numNeck) + 0.221 * Math.log10(numHeight)) - 450;
      results.push({ method: 'Navy Method', value: parseFloat(bodyFatPercentage.toFixed(2)) });
    }

    // BMI Method (simplified estimation)
    const bmi = numWeight / ((numHeight / 100) ** 2);
    const bmiBodyFat = (1.20 * bmi) + (0.23 * numAge) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;
    results.push({ method: 'BMI Method', value: parseFloat(bmiBodyFat.toFixed(2)) });

    setResult(results);
  }, [age, gender, weight, height, waist, neck, hip]);

  const handleDownloadPDF = () => {
    generateCalculatorPDF({
      title: 'Body Fat Calculator Results',
      inputs: [
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Weight (kg)', value: weight },
        { label: 'Height (cm)', value: height },
        { label: 'Waist Circumference (cm)', value: waist },
        { label: 'Neck Circumference (cm)', value: neck },
        { label: 'Hip Circumference (cm)', value: hip }
      ],
      results: result.map(r => ({ label: r.method, value: `${r.value}%` }))
    });
  };

  const chartData = result.map(r => ({ name: r.method, "Body Fat": r.value }));

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
        />
      </div>

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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="waist">Waist Circumference (cm)</Label>
          <Input
            id="waist"
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            min="0"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="neck">Neck Circumference (cm)</Label>
          <Input
            id="neck"
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            min="0"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="hip">Hip Circumference (cm)</Label>
          <Input
            id="hip"
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            min="0"
          />
        </div>
      </div>

      <button onClick={handleDownloadPDF} className="mt-4">Download PDF</button>
    </>
  );

  return (
    <CalculatorLayout title="Body Fat Calculator">
      {inputs}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Body Fat" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CalculatorLayout>
  );
}
