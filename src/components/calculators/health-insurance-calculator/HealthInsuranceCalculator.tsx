'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NullableNumber = number | null;

export default function HealthInsuranceCalculator() {
  const [monthlyPremium, setMonthlyPremium] = useState<string>('500');
  const [deductible, setDeductible] = useState<string>('3000');
  const [outOfPocketMax, setOutOfPocketMax] = useState<string>('6000');
  const [expectedMedicalCosts, setExpectedMedicalCosts] = useState<string>('2000');

  const [annualPremium, setAnnualPremium] = useState<number>(6000);
  const [patientOutOfPocket, setPatientOutOfPocket] = useState<NullableNumber>(null);
  const [insurerPays, setInsurerPays] = useState<NullableNumber>(null);
  const [totalWithInsurance, setTotalWithInsurance] = useState<NullableNumber>(null);
  const [totalWithoutInsurance, setTotalWithoutInsurance] = useState<number>(2000);
  const [savings, setSavings] = useState<NullableNumber>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const mp = parseFloat(monthlyPremium);
    const dd = parseFloat(deductible);
    const oop = parseFloat(outOfPocketMax);
    const expected = parseFloat(expectedMedicalCosts);

    if (!isNaN(mp)) setAnnualPremium(parseFloat((mp * 12).toFixed(2)));
    else setAnnualPremium(0);

    if ([mp, dd, oop, expected].some(v => isNaN(v) || v < 0)) {
      setPatientOutOfPocket(null);
      setInsurerPays(null);
      setTotalWithInsurance(null);
      setTotalWithoutInsurance(isNaN(expected) ? 0 : expected);
      setSavings(null);
      return;
    }

    // Calculate patient responsibility respecting deductible and out-of-pocket maximum
    // If expected <= deductible -> patient pays expected
    // Else patient pays deductible + min(expected - deductible, outOfPocketMax - deductible)
    let patientPay = 0;
    if (expected <= dd) {
      patientPay = expected;
    } else {
      patientPay = dd + Math.min(expected - dd, Math.max(0, oop - dd));
    }
    patientPay = parseFloat(patientPay.toFixed(2));

    const insurerPay = parseFloat(Math.max(0, expected - patientPay).toFixed(2));
    const annualPrem = parseFloat((mp * 12).toFixed(2));
    const totalIns = parseFloat((annualPrem + patientPay).toFixed(2));
    const totalNoIns = parseFloat(expected.toFixed(2));
    const sav = parseFloat((totalNoIns - totalIns).toFixed(2));

    setPatientOutOfPocket(patientPay);
    setInsurerPays(insurerPay);
    setTotalWithInsurance(totalIns);
    setTotalWithoutInsurance(totalNoIns);
    setSavings(sav);
  }, [monthlyPremium, deductible, outOfPocketMax, expectedMedicalCosts]);

  const handleDownloadPDF = () => {
    if (patientOutOfPocket === null || totalWithInsurance === null) return;

    generateCalculatorPDF({
      title: 'Health Insurance Calculator Results',
      inputs: [
        { label: 'Monthly Premium', value: monthlyPremium },
        { label: 'Annual Deductible', value: deductible },
        { label: 'Out-of-Pocket Maximum', value: outOfPocketMax },
        { label: 'Expected Annual Medical Costs', value: expectedMedicalCosts },
      ],
      results: [
        { label: 'Annual Premium', value: `${annualPremium}` },
        { label: 'Patient Out-of-Pocket', value: `${patientOutOfPocket}` },
        { label: 'Insurer Pays', value: `${insurerPays}` },
        { label: 'Total With Insurance', value: `${totalWithInsurance}` },
        { label: 'Total Without Insurance', value: `${totalWithoutInsurance}` },
        { label: 'Savings (No Insurance - With Insurance)', value: `${savings}` },
      ],
    });
  };

  const chartData = patientOutOfPocket !== null && totalWithInsurance !== null ? [
    { name: 'Annual Premium', value: annualPremium },
    { name: 'Out-of-Pocket', value: patientOutOfPocket },
    { name: 'Total With Insurance', value: totalWithInsurance },
    { name: 'Total Without Insurance', value: totalWithoutInsurance },
  ] : [];

  const inputs = (
    <>
      <div className='space-y-2'>
        <Label htmlFor='monthlyPremium'>Monthly Premium</Label>
        <Input id='monthlyPremium' type='number' value={monthlyPremium} onChange={(e) => setMonthlyPremium(e.target.value)} min='0' step='1' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='deductible'>Annual Deductible</Label>
        <Input id='deductible' type='number' value={deductible} onChange={(e) => setDeductible(e.target.value)} min='0' step='1' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='outOfPocketMax'>Out-of-Pocket Maximum</Label>
        <Input id='outOfPocketMax' type='number' value={outOfPocketMax} onChange={(e) => setOutOfPocketMax(e.target.value)} min='0' step='1' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='expectedMedicalCosts'>Expected Annual Medical Costs</Label>
        <Input id='expectedMedicalCosts' type='number' value={expectedMedicalCosts} onChange={(e) => setExpectedMedicalCosts(e.target.value)} min='0' step='1' />
      </div>
    </>
  );

  const results = patientOutOfPocket !== null && totalWithInsurance !== null ? (
    <div className='text-center'>
      <div className='text-sm text-gray-600 mb-2'>Summary</div>
      <div className='text-5xl font-bold text-blue-900 my-3'>
        ${totalWithInsurance.toLocaleString()}
      </div>
      <div className='text-lg text-gray-700 mb-4'>Total Annual Cost (with insurance)</div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <div className='text-sm text-gray-500'>Annual Premium</div>
          <div className='text-xl font-semibold'>${annualPremium.toLocaleString()}</div>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <div className='text-sm text-gray-500'>Out-of-Pocket</div>
          <div className='text-xl font-semibold'>${patientOutOfPocket.toLocaleString()}</div>
        </div>
      </div>

      <div className='mt-4 text-sm text-gray-600'>
        <div>Without Insurance: <span className='font-medium'>${totalWithoutInsurance.toLocaleString()}</span></div>
        <div>Savings: <span className={`font-medium ${savings! >= 0 ? 'text-green-700' : 'text-red-600'}`}>${savings!.toLocaleString()}</span></div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length ? (
    <div className='w-full'>
      <h3 className='text-lg font-semibold mb-4 text-center'>Cost Comparison</h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey='value' fill='#10b981' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title='Health Insurance Calculator'
      description='Compare health insurance plan costs and coverage.'
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
