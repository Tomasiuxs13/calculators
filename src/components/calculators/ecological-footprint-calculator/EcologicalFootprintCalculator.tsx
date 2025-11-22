'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type DietType = 'vegetarian' | 'vegan' | 'mixed';
type HousingType = 'apartment' | 'house';

// Simplified ecological footprint factors (global hectares per year estimates)
const dietGhaPerYear: Record<DietType, number> = {
  vegan: 1.5,
  vegetarian: 1.9,
  mixed: 2.8,
};

const housingGhaPerYear: Record<HousingType, number> = {
  apartment: 1.8,
  house: 3.5,
};

// Transportation conversion: gha per km (monthly input expected)
// This is a simplified proxy factor for illustrative purposes
const transportationGhaPerKm = 0.00003;

export default function EcologicalFootprintCalculator() {
  const [foodType, setFoodType] = useState<DietType>('mixed');
  const [housingType, setHousingType] = useState<HousingType>('apartment');
  const [transportation, setTransportation] = useState<string>('1000'); // monthly km as string to bind to Input
  const [dietGha, setDietGha] = useState<number | null>(null);
  const [housingGha, setHousingGha] = useState<number | null>(null);
  const [transportGha, setTransportGha] = useState<number | null>(null);
  const [totalGha, setTotalGha] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate whenever inputs change
  useEffect(() => {
    // diet and housing are direct lookups
    const diet = dietGhaPerYear[foodType];
    const housing = housingGhaPerYear[housingType];

    // parse transportation (monthly km)
    const monthlyKm = parseFloat(transportation);
    let transportAnnualGha: number | null = null;
    if (!isNaN(monthlyKm) && monthlyKm >= 0) {
      const annualKm = monthlyKm * 12;
      transportAnnualGha = parseFloat((annualKm * transportationGhaPerKm).toFixed(4));
    } else {
      transportAnnualGha = null;
    }

    setDietGha(parseFloat(diet.toFixed(4)));
    setHousingGha(parseFloat(housing.toFixed(4)));
    setTransportGha(transportAnnualGha);

    if (transportAnnualGha !== null) {
      const total = parseFloat((diet + housing + transportAnnualGha).toFixed(4));
      setTotalGha(total);
    } else {
      setTotalGha(null);
    }
  }, [foodType, housingType, transportation]);

  const handleDownloadPDF = () => {
    if (totalGha === null) return;

    generateCalculatorPDF({
      title: 'Ecological Footprint Results',
      inputs: [
        { label: 'Diet Type', value: foodType },
        { label: 'Housing Type', value: housingType },
        { label: 'Monthly Transportation (km)', value: transportation },
      ],
      results: [
        { label: 'Diet (gha/year)', value: dietGha !== null ? `${dietGha} gha` : '—' },
        { label: 'Housing (gha/year)', value: housingGha !== null ? `${housingGha} gha` : '—' },
        { label: 'Transportation (gha/year)', value: transportGha !== null ? `${transportGha} gha` : '—' },
        { label: 'Total Ecological Footprint (gha/year)', value: `${totalGha} gha` },
      ],
    });
  };

  const chartData = totalGha !== null && dietGha !== null && housingGha !== null && transportGha !== null ? [
    { name: 'Diet', value: dietGha, label: 'Diet' },
    { name: 'Housing', value: housingGha, label: 'Housing' },
    { name: 'Transport', value: transportGha, label: 'Transport' },
    { name: 'Total', value: totalGha, label: 'Total' },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='foodType'>Diet Type</Label>
          <Select id='foodType' value={foodType} onChange={(e) => setFoodType(e.target.value as DietType)}>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
            <option value='mixed'>Mixed</option>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='housingType'>Housing Type</Label>
          <Select id='housingType' value={housingType} onChange={(e) => setHousingType(e.target.value as HousingType)}>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='transportation'>Monthly Transportation (km)</Label>
          <Input
            id='transportation'
            type='number'
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
            min='0'
            step='1'
          />
        </div>
      </div>
    </>
  );

  const results = totalGha !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Estimated Annual Ecological Footprint</div>
      <div className='text-5xl font-bold text-green-800 my-3'>
        {totalGha.toLocaleString()} gha
      </div>
      <div className='text-left max-w-md mx-auto mt-2 space-y-2'>
        <div className='flex justify-between text-sm text-gray-700'>
          <span>Diet</span>
          <span>{dietGha !== null ? `${dietGha} gha` : '—'}</span>
        </div>
        <div className='flex justify-between text-sm text-gray-700'>
          <span>Housing</span>
          <span>{housingGha !== null ? `${housingGha} gha` : '—'}</span>
        </div>
        <div className='flex justify-between text-sm text-gray-700'>
          <span>Transportation (annual)</span>
          <span>{transportGha !== null ? `${transportGha} gha` : '—'}</span>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Ecological Footprint Breakdown</h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} gha`} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Ecological Footprint Calculator'
      description='Calculate your personal ecological footprint (estimated annual global hectares) based on diet, housing, and monthly transportation.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
