'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import dayjs from 'dayjs';

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<string>(() => dayjs().subtract(25, 'year').format('YYYY-MM-DD')); // Default to 25 years ago
  const [age, setAge] = useState<{ years: number; months: number; weeks: number; days: number; } | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const birth = dayjs(birthDate);
    const years = today.diff(birth, 'year');
    birth.add(years, 'years');
    const months = today.diff(birth, 'months');
    birth.add(months, 'months');
    const weeks = today.diff(birth, 'weeks');
    birth.add(weeks, 'weeks');
    const days = today.diff(birth, 'days');
    setAge({
      years: isNaN(years) ? 0 : years,
      months: isNaN(months) ? 0 : months,
      weeks: isNaN(weeks) ? 0 : weeks,
      days: isNaN(days) ? 0 : days,
    });
  }, [birthDate]);

  const handleDownloadPDF = () => {
    if (!age) return;

    generateCalculatorPDF({
      title: 'Age Calculation Results',
      inputs: [
        { label: 'Birth Date', value: birthDate },
      ],
      results: [
        { label: 'Years', value: `${age.years}` },
        { label: 'Months', value: `${age.months}` },
        { label: 'Weeks', value: `${age.weeks}` },
        { label: 'Days', value: `${age.days}` },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="birthDate">Birth Date</Label>
        <Input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
    </>
  );

  const results = age ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Your Age</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`${age.years} Years, ${age.months} Months`}
      </div>
      <div className="text-lg text-gray-700">{`${age.weeks} Weeks, ${age.days} Days`}</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Age Calculator"
      description="Calculate your exact age in years, months, weeks, and days."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={null}
    />
  );
}
