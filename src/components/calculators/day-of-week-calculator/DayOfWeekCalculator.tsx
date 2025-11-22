'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type WeekdayName = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

type DayResult = {
  dayName: WeekdayName;
  index: number; // 0 = Sunday, 6 = Saturday
};

function getTodayDateString(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

const WEEKDAYS: WeekdayName[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function DayOfWeekCalculator() {
  const [date, setDate] = useState<string>(getTodayDateString());
  const [result, setResult] = useState<DayResult | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      setResult(null);
      return;
    }

    const parts = date.split('-').map((p) => parseInt(p, 10));
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
      setResult(null);
      return;
    }

    const [y, m, d] = parts; 
    const dt = new Date(y, m - 1, d);

    if (isNaN(dt.getTime())) {
      setResult(null);
      return;
    }

    const index = dt.getDay(); 
    const dayName = WEEKDAYS[index];
    setResult({ dayName, index });
  }, [date]);

  useEffect(() => {
    // Set initial result on load
    if (result === null) {
      const initialResultIndex = new Date().getDay();
      const initialDayName = WEEKDAYS[initialResultIndex];
      setResult({ dayName: initialDayName, index: initialResultIndex });
    }
  }, [result]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Day of Week Results',
      inputs: [
        { label: 'Date', value: date },
      ],
      results: [
        { label: 'Day of Week', value: `${result.dayName} (Index ${result.index})` },
      ],
    });
  };

  const chartData = WEEKDAYS.map((day, idx) => ({ day, value: result ? (idx === result.index ? 1 : 0) : 0 }));

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </>
  );

  const results = result !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Day of the Week</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.dayName}</div>
      <div className="text-lg text-gray-700">Index: {result.index} (Sunday = 0)</div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Please select a valid date.</div>
  );

  const charts = showCharts && result !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Selected Day Highlight</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis ticks={[0, 1]} domain={[0, 1]} />
          <Tooltip
            formatter={(value: number, name: string, props: any) => {
              const day = props && props.payload ? props.payload.day : '';
              return [value === 1 ? 'Selected' : 'Not selected', day];
            }}
          />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Day of Week Calculator"
      description="Calculate the day of the week for a given date."
    >
      {inputs}
      {results}
      {charts}
      <button onClick={handleDownloadPDF} className="mt-4 btn btn-primary">Download PDF</button>
    </CalculatorLayout>
  );
}
