'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<string>('175');
  const [weight, setWeight] = useState<string>('70');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('9');
  const [weightLbs, setWeightLbs] = useState<string>('154');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    let calculatedBmi = 0;

    if (unitSystem === 'metric') {
      const h = parseFloat(height) / 100; // cm to m
      const w = parseFloat(weight);
      if (h > 0 && w > 0) {
        calculatedBmi = w / (h * h);
      }
    } else {
      const h = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
      const w = parseFloat(weightLbs);
      if (h > 0 && w > 0) {
        calculatedBmi = (703 * w) / (h * h);
      }
    }

    if (calculatedBmi > 0) {
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      if (calculatedBmi < 18.5) setCategory('Underweight');
      else if (calculatedBmi < 25) setCategory('Normal weight');
      else if (calculatedBmi < 30) setCategory('Overweight');
      else setCategory('Obese');
    } else {
      setBmi(null);
      setCategory('');
    }
  }, [unitSystem, height, weight, heightFt, heightIn, weightLbs]);

  const handleDownloadPDF = () => {
    const inputs = unitSystem === 'metric'
      ? [
          { label: 'Unit System', value: 'Metric (cm, kg)' },
          { label: 'Height', value: `${height} cm` },
          { label: 'Weight', value: `${weight} kg` },
        ]
      : [
          { label: 'Unit System', value: 'Imperial (ft/in, lbs)' },
          { label: 'Height', value: `${heightFt}' ${heightIn}"` },
          { label: 'Weight', value: `${weightLbs} lbs` },
        ];

    const results = bmi !== null
      ? [
          { label: 'BMI', value: bmi.toString() },
          { label: 'Category', value: category },
        ]
      : [];

    generateCalculatorPDF({
      title: 'BMI Calculator Results',
      inputs,
      results,
    });
  };

  // Chart data for BMI categories
  const bmiCategoryData = [
    { name: 'Underweight', range: '< 18.5', value: 18.5, color: '#3b82f6' },
    { name: 'Normal', range: '18.5-24.9', value: 24.9, color: '#10b981' },
    { name: 'Overweight', range: '25-29.9', value: 29.9, color: '#f59e0b' },
    { name: 'Obese', range: '≥ 30', value: 40, color: '#ef4444' },
  ];

  // Weight range chart data
  const currentHeight = unitSystem === 'metric' 
    ? parseFloat(height) / 100 
    : (parseFloat(heightFt) * 12 + parseFloat(heightIn)) * 0.0254;
  
  const weightRangeData = currentHeight > 0 ? [
    { weight: 'Underweight', bmi: 18.5 * currentHeight * currentHeight, color: '#3b82f6' },
    { weight: 'Normal', bmi: 24.9 * currentHeight * currentHeight, color: '#10b981' },
    { weight: 'Overweight', bmi: 29.9 * currentHeight * currentHeight, color: '#f59e0b' },
    { weight: 'Obese', bmi: 40 * currentHeight * currentHeight, color: '#ef4444' },
  ].map(item => ({
    ...item,
    weightValue: unitSystem === 'metric' 
      ? `${item.bmi.toFixed(1)} kg` 
      : `${(item.bmi * 2.20462).toFixed(1)} lbs`,
  })) : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label>Unit System</Label>
        <Select
          value={unitSystem}
          onChange={(e) => setUnitSystem(e.target.value as 'metric' | 'imperial')}
        >
          <option value="metric">Metric (cm, kg)</option>
          <option value="imperial">Imperial (ft/in, lbs)</option>
        </Select>
      </div>

      {unitSystem === 'metric' ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height-ft">Height (ft)</Label>
              <Input
                id="height-ft"
                type="number"
                placeholder="5"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height-in">Height (in)</Label>
              <Input
                id="height-in"
                type="number"
                placeholder="9"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight-lbs">Weight (lbs)</Label>
            <Input
              id="weight-lbs"
              type="number"
              placeholder="150"
              value={weightLbs}
              onChange={(e) => setWeightLbs(e.target.value)}
            />
          </div>
        </>
      )}
    </>
  );

  const results = bmi !== null ? (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-2">Your BMI is</p>
      <p className="text-5xl font-bold text-blue-900 my-3">{bmi}</p>
      <p className={`text-lg font-semibold mb-4 ${
        category === 'Normal weight' ? 'text-green-600' : 
        category === 'Underweight' ? 'text-blue-600' :
        category === 'Overweight' ? 'text-orange-600' : 'text-red-600'
      }`}>
        {category}
      </p>
      <div className="mt-4 pt-4 border-t border-blue-200">
        <p className="text-xs text-gray-700 mb-2 font-medium">BMI Categories:</p>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span className="text-gray-700">Underweight:</span> <span className="font-medium text-gray-900">&lt; 18.5</span></div>
          <div className="flex justify-between"><span className="text-gray-700">Normal:</span> <span className="font-medium text-gray-900">18.5-24.9</span></div>
          <div className="flex justify-between"><span className="text-gray-700">Overweight:</span> <span className="font-medium text-gray-900">25-29.9</span></div>
          <div className="flex justify-between"><span className="text-gray-700">Obese:</span> <span className="font-medium text-gray-900">≥ 30</span></div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = bmi !== null ? (
    <>
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-4 text-center">BMI Category Ranges</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={bmiCategoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8">
              {bmiCategoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Your BMI: <span className="font-bold text-blue-600">{bmi}</span> ({category})
          </p>
        </div>
      </div>

      {weightRangeData.length > 0 && (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">Weight Range for Your Height</h3>
          <div className="space-y-2">
            {weightRangeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: `${item.color}20` }}>
                <span className="font-medium">{item.weight}:</span>
                <span className="font-bold">{item.weightValue}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  ) : null;

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index"
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
