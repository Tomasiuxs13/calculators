'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function NutritionLabelCalculator() {
  const [calories, setCalories] = useState<string>('800');
  const [protein, setProtein] = useState<string>('40');
  const [carbs, setCarbs] = useState<string>('100');
  const [fat, setFat] = useState<string>('20');
  const [servings, setServings] = useState<string>('4');

  const [caloriesPerServing, setCaloriesPerServing] = useState<number | null>(null);
  const [proteinPerServing, setProteinPerServing] = useState<number | null>(null);
  const [carbsPerServing, setCarbsPerServing] = useState<number | null>(null);
  const [fatPerServing, setFatPerServing] = useState<number | null>(null);

  const [proteinCaloriesPerServing, setProteinCaloriesPerServing] = useState<number | null>(null);
  const [carbsCaloriesPerServing, setCarbsCaloriesPerServing] = useState<number | null>(null);
  const [fatCaloriesPerServing, setFatCaloriesPerServing] = useState<number | null>(null);

  const [proteinPct, setProteinPct] = useState<number | null>(null);
  const [carbsPct, setCarbsPct] = useState<number | null>(null);
  const [fatPct, setFatPct] = useState<number | null>(null);

  const [showCharts, setShowCharts] = useState<boolean>(false);

  useEffect(() => {
    const cals = parseFloat(calories);
    const prot = parseFloat(protein);
    const crb = parseFloat(carbs);
    const ft = parseFloat(fat);
    const srv = parseFloat(servings);

    if ([cals, prot, crb, ft, srv].some((v) => isNaN(v)) || srv <= 0 || cals < 0 || prot < 0 || crb < 0 || ft < 0) {
      setCaloriesPerServing(null);
      setProteinPerServing(null);
      setCarbsPerServing(null);
      setFatPerServing(null);
      setProteinCaloriesPerServing(null);
      setCarbsCaloriesPerServing(null);
      setFatCaloriesPerServing(null);
      setProteinPct(null);
      setCarbsPct(null);
      setFatPct(null);
      return;
    }

    const calsPer = cals / srv;
    const protPer = prot / srv;
    const crbPer = crb / srv;
    const fatPer = ft / srv;

    // Calories from macros per serving
    const protCals = protPer * 4; // 4 kcal per g protein
    const crbCals = crbPer * 4; // 4 kcal per g carbs
    const fatCals = fatPer * 9; // 9 kcal per g fat

    // Use actual total calories per serving for percentage base if positive, otherwise sum of macro cals
    const baseCalories = calsPer > 0 ? calsPer : protCals + crbCals + fatCals;

    const protPercentage = baseCalories > 0 ? (protCals / baseCalories) * 100 : 0;
    const crbPercentage = baseCalories > 0 ? (crbCals / baseCalories) * 100 : 0;
    const fatPercentage = baseCalories > 0 ? (fatCals / baseCalories) * 100 : 0;

    setCaloriesPerServing(parseFloat(calsPer.toFixed(2)));
    setProteinPerServing(parseFloat(protPer.toFixed(2)));
    setCarbsPerServing(parseFloat(crbPer.toFixed(2)));
    setFatPerServing(parseFloat(fatPer.toFixed(2)));

    setProteinCaloriesPerServing(parseFloat(protCals.toFixed(2)));
    setCarbsCaloriesPerServing(parseFloat(crbCals.toFixed(2)));
    setFatCaloriesPerServing(parseFloat(fatCals.toFixed(2)));

    setProteinPct(parseFloat(protPercentage.toFixed(1)));
    setCarbsPct(parseFloat(crbPercentage.toFixed(1)));
    setFatPct(parseFloat(fatPercentage.toFixed(1)));
  }, [calories, protein, carbs, fat, servings]);

  const handleDownloadPDF = () => {
    if (caloriesPerServing === null || proteinPerServing === null) return;

    generateCalculatorPDF({
      title: 'Nutrition Label Results',
      inputs: [
        { label: 'Total Calories', value: calories },
        { label: 'Total Protein (g)', value: protein },
        { label: 'Total Carbs (g)', value: carbs },
        { label: 'Total Fat (g)', value: fat },
        { label: 'Number of Servings', value: servings },
      ],
      results: [
        { label: 'Calories per Serving', value: `${caloriesPerServing} kcal` },
        { label: 'Protein per Serving', value: `${proteinPerServing} g` },
        { label: 'Carbs per Serving', value: `${carbsPerServing} g` },
        { label: 'Fat per Serving', value: `${fatPerServing} g` },
        { label: 'Protein Calories per Serving', value: `${proteinCaloriesPerServing} kcal (${proteinPct}% )` },
        { label: 'Carbs Calories per Serving', value: `${carbsCaloriesPerServing} kcal (${carbsPct}% )` },
        { label: 'Fat Calories per Serving', value: `${fatCaloriesPerServing} kcal (${fatPct}% )` },
      ],
    });
  };

  const chartData = (caloriesPerServing !== null && proteinCaloriesPerServing !== null && carbsCaloriesPerServing !== null && fatCaloriesPerServing !== null) ? [
    { label: 'Calories / Serving', value: caloriesPerServing, color: '#2563eb' },
    { label: 'Protein (kcal)', value: proteinCaloriesPerServing, color: '#16a34a' },
    { label: 'Carbs (kcal)', value: carbsCaloriesPerServing, color: '#f59e0b' },
    { label: 'Fat (kcal)', value: fatCaloriesPerServing, color: '#ef4444' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='calories'>Total Calories</Label>
        <Input id='calories' type='number' value={calories} onChange={(e) => setCalories(e.target.value)} min='0' step='1' />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='protein'>Total Protein (g)</Label>
          <Input id='protein' type='number' value={protein} onChange={(e) => setProtein(e.target.value)} min='0' step='0.1' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='carbs'>Total Carbs (g)</Label>
          <Input id='carbs' type='number' value={carbs} onChange={(e) => setCarbs(e.target.value)} min='0' step='0.1' />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='fat'>Total Fat (g)</Label>
          <Input id='fat' type='number' value={fat} onChange={(e) => setFat(e.target.value)} min='0' step='0.1' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='servings'>Number of Servings</Label>
          <Input id='servings' type='number' value={servings} onChange={(e) => setServings(e.target.value)} min='1' step='1' />
        </div>
      </div>
    </>
  );

  const results = (caloriesPerServing !== null) ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Per Serving</div>
      <div className='text-4xl font-bold text-blue-900 my-3'>{caloriesPerServing.toLocaleString()} kcal</div>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div>
          <div className='text-sm text-gray-600'>Protein</div>
          <div className='text-xl font-semibold text-gray-800'>{proteinPerServing?.toLocaleString()} g</div>
          <div className='text-sm text-gray-500'>{proteinCaloriesPerServing} kcal ({proteinPct}% )</div>
        </div>

        <div>
          <div className='text-sm text-gray-600'>Carbs</div>
          <div className='text-xl font-semibold text-gray-800'>{carbsPerServing?.toLocaleString()} g</div>
          <div className='text-sm text-gray-500'>{carbsCaloriesPerServing} kcal ({carbsPct}% )</div>
        </div>

        <div>
          <div className='text-sm text-gray-600'>Fat</div>
          <div className='text-xl font-semibold text-gray-800'>{fatPerServing?.toLocaleString()} g</div>
          <div className='text-sm text-gray-500'>{fatCaloriesPerServing} kcal ({fatPct}% )</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Calories and Macro Breakdown (per serving)</h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kcal`} />
          <Bar dataKey='value' fill='#3b82f6' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Nutrition Label Calculator'
      description='Calculate nutrition facts per serving.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
