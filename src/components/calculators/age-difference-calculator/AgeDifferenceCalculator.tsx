'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type AgeParts = {
  years: number;
  months: number;
  days: number;
};

function calculateAge(birth: Date, reference: Date = new Date()): AgeParts | null {
  if (isNaN(birth.getTime()) || isNaN(reference.getTime())) return null;

  // Ensure birth <= reference
  if (birth > reference) return null;

  let years = reference.getFullYear() - birth.getFullYear();
  let months = reference.getMonth() - birth.getMonth();
  let days = reference.getDate() - birth.getDate();

  if (days < 0) {
    // borrow days from previous month
    const prevMonth = new Date(reference.getFullYear(), reference.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years,
    months,
    days,
  };
}

function agePartsToDecimalYears(parts: AgeParts): number {
  // Convert months and days to fractional years using average days per year
  const years = parts.years;
  const monthsFraction = parts.months / 12;
  const daysFraction = parts.days / 365.2425; // average year length
  return parseFloat((years + monthsFraction + daysFraction).toFixed(4));
}

function formatAgeParts(parts: AgeParts | null): string {
  if (!parts) return '—';
  const { years, months, days } = parts;
  const y = `${years} year${years === 1 ? '' : 's'}`;
  const m = `${months} month${months === 1 ? '' : 's'}`;
  const d = `${days} day${days === 1 ? '' : 's'}`;
  return `${y}, ${m}, ${d}`;
}

export default function AgeDifferenceCalculator() {
  // Default values chosen so the calculator displays results immediately on load
  const todayIso = new Date().toISOString().slice(0, 10);
  const [birthDate1, setBirthDate1] = useState<string>('1990-01-01');
  const [birthDate2, setBirthDate2] = useState<string>('2000-01-01');
  const [age1, setAge1] = useState<AgeParts | null>(null);
  const [age2, setAge2] = useState<AgeParts | null>(null);
  const [age1Decimal, setAge1Decimal] = useState<number | null>(null);
  const [age2Decimal, setAge2Decimal] = useState<number | null>(null);
  const [differenceYearsDecimal, setDifferenceYearsDecimal] = useState<number | null>(null);
  const [differenceDays, setDifferenceDays] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    // Parse dates
    const d1 = birthDate1 ? new Date(birthDate1) : new Date('');
    const d2 = birthDate2 ? new Date(birthDate2) : new Date('');

    const today = new Date();

    // Compute ages if valid and birth <= today
    const computedAge1 = isNaN(d1.getTime()) ? null : calculateAge(d1, today);
    const computedAge2 = isNaN(d2.getTime()) ? null : calculateAge(d2, today);

    setAge1(computedAge1);
    setAge2(computedAge2);

    setAge1Decimal(computedAge1 ? agePartsToDecimalYears(computedAge1) : null);
    setAge2Decimal(computedAge2 ? agePartsToDecimalYears(computedAge2) : null);

    // Difference between birth dates -> absolute difference in days and decimal years
    if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
      const diffMs = Math.abs(d1.getTime() - d2.getTime());
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffYearsDecimal = parseFloat((diffDays / 365.2425).toFixed(4));
      setDifferenceDays(diffDays);
      setDifferenceYearsDecimal(diffYearsDecimal);
    } else {
      setDifferenceDays(null);
      setDifferenceYearsDecimal(null);
    }
  }, [birthDate1, birthDate2]);

  const handleDownloadPDF = () => {
    // Only download if we have at least one valid result
    if ((age1 === null && age2 === null) || differenceYearsDecimal === null) return;

    generateCalculatorPDF({
      title: 'Age Difference Results',
      inputs: [
        { label: 'Person 1 Birth Date', value: birthDate1 || '—' },
        { label: 'Person 2 Birth Date', value: birthDate2 || '—' },
      ],
      results: [
        { label: 'Person 1 Age', value: age1 ? formatAgeParts(age1) : '—' },
        { label: 'Person 2 Age', value: age2 ? formatAgeParts(age2) : '—' },
        { label: 'Age Difference', value: `${differenceYearsDecimal !== null ? differenceYearsDecimal + ' years (≈) / ' + differenceDays + ' days' : '—'}` },
      ],
    });
  };

  const chartData = (
    age1Decimal !== null || age2Decimal !== null
  )
    ? [
        { label: 'Person 1', value: age1Decimal || 0, raw: age1Decimal || 0 },
        { label: 'Person 2', value: age2Decimal || 0, raw: age2Decimal || 0 },
        { label: 'Difference', value: differenceYearsDecimal || 0, raw: differenceYearsDecimal || 0 },
      ]
    : [];

  const inputs = (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="birthDate1">Person 1 Birth Date</Label>
          <Input
            id="birthDate1"
            type="date"
            value={birthDate1}
            onChange={(e) => setBirthDate1(e.target.value)}
            max={todayIso}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate2">Person 2 Birth Date</Label>
          <Input
            id="birthDate2"
            type="date"
            value={birthDate2}
            onChange={(e) => setBirthDate2(e.target.value)}
            max={todayIso}
          />
        </div>
      </div>
    </>
  );

  const results = (
    <div className="text-center space-y-3">
      <div className="text-sm text-gray-600">Results</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">Person 1</div>
          <div className="text-2xl font-bold text-blue-900 my-2">{age1 ? `${age1Decimal?.toLocaleString(undefined, { maximumFractionDigits: 4 })} yrs` : '—'}</div>
          <div className="text-sm text-gray-700">{formatAgeParts(age1)}</div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">Person 2</div>
          <div className="text-2xl font-bold text-blue-900 my-2">{age2 ? `${age2Decimal?.toLocaleString(undefined, { maximumFractionDigits: 4 })} yrs` : '—'}</div>
          <div className="text-sm text-gray-700">{formatAgeParts(age2)}</div>
        </div>

        <div className="p-4 bg-white border rounded-lg">
          <div className="text-xs text-gray-500">Difference</div>
          <div className="text-2xl font-bold text-blue-900 my-2">{differenceYearsDecimal !== null ? `${differenceYearsDecimal.toLocaleString(undefined, { maximumFractionDigits: 4 })} yrs` : '—'}</div>
          <div className="text-sm text-gray-700">{differenceDays !== null ? `${differenceDays} day${differenceDays === 1 ? '' : 's'}` : '—'}</div>
        </div>
      </div>
    </div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Age Comparison (years)</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} yrs`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Age Difference Calculator"
      description="Calculate the age difference between two people using their birth dates. Shows ages for each person and the absolute difference in years and days."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
