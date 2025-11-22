'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type ResultType = {
  gain: number;
  recommendedLower: number;
  recommendedUpper: number;
  expectedByNowLower: number;
  expectedByNowUpper: number;
  status: string;
};

export default function PregnancyWeightGainCalculator() {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState<string>('65');
  const [currentWeight, setCurrentWeight] = useState<string>('68');
  const [weeksPregnant, setWeeksPregnant] = useState<string>('20');
  const [bmi, setBmi] = useState<string>('22');
  const [result, setResult] = useState<ResultType | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Determine recommended total weight gain ranges (IOM guidelines) based on pre-pregnancy BMI
  const getRecommendedRange = (bmiValue: number) => {
    if (isNaN(bmiValue)) {
      return { lower: 11.5, upper: 16 }; // default to normal
    }

    if (bmiValue < 18.5) {
      return { lower: 12.5, upper: 18 }; // underweight
    }

    if (bmiValue >= 18.5 && bmiValue < 25) {
      return { lower: 11.5, upper: 16 }; // normal
    }

    if (bmiValue >= 25 && bmiValue < 30) {
      return { lower: 7, upper: 11.5 }; // overweight
    }

    // bmi >= 30
    return { lower: 5, upper: 9 }; // obese
  };

  useEffect(() => {
    const pre = parseFloat(prePregnancyWeight);
    const curr = parseFloat(currentWeight);
    const weeks = parseFloat(weeksPregnant);
    const bmiVal = parseFloat(bmi);

    if ([pre, curr, weeks, bmiVal].some((n) => isNaN(n))) {
      setResult(null);
      return;
    }

    // Basic validations
    if (pre <= 0 || curr <= 0 || weeks <= 0 || weeks > 42) {
      setResult(null);
      return;
    }

    const gain = parseFloat((curr - pre).toFixed(2));

    const { lower: recommendedLower, upper: recommendedUpper } = getRecommendedRange(bmiVal);

    // Simple linear expectation across a 40-week pregnancy for progress tracking
    const gestationWeeks = 40;
    const progressFactor = Math.min(Math.max(weeks / gestationWeeks, 0), 1);

    const expectedByNowLower = parseFloat((recommendedLower * progressFactor).toFixed(2));
    const expectedByNowUpper = parseFloat((recommendedUpper * progressFactor).toFixed(2));

    let status = '';
    if (gain < expectedByNowLower) {
      status = 'Below recommended gain for current gestation';
    } else if (gain > expectedByNowUpper) {
      status = 'Above recommended gain for current gestation';
    } else {
      status = 'Within recommended range for current gestation';
    }

    setResult({
      gain,
      recommendedLower: parseFloat(recommendedLower.toFixed(2)),
      recommendedUpper: parseFloat(recommendedUpper.toFixed(2)),
      expectedByNowLower,
      expectedByNowUpper,
      status,
    });
  }, [prePregnancyWeight, currentWeight, weeksPregnant, bmi]);

  const handleDownloadPDF = () => {
    if (!result) return;

    generateCalculatorPDF({
      title: 'Pregnancy Weight Gain Results',
      inputs: [
        { label: 'Pre-Pregnancy Weight (kg)', value: prePregnancyWeight },
        { label: 'Current Weight (kg)', value: currentWeight },
        { label: 'Weeks Pregnant', value: weeksPregnant },
        { label: 'Pre-Pregnancy BMI', value: bmi },
      ],
      results: [
        { label: 'Weight Gained', value: `${result.gain} kg` },
        { label: 'Recommended Total (kg)', value: `${result.recommendedLower} – ${result.recommendedUpper} kg` },
        { label: 'Expected by Now (kg)', value: `${result.expectedByNowLower} – ${result.expectedByNowUpper} kg` },
        { label: 'Status', value: result.status },
      ],
    });
  };

  const chartData = result
    ? [
        { label: 'Expected Lower', value: result.expectedByNowLower, color: '#60a5fa' },
        { label: 'Current Gain', value: result.gain, color: '#34d399' },
        { label: 'Expected Upper', value: result.expectedByNowUpper, color: '#f97316' },
      ]
    : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="prePreg">Pre-Pregnancy Weight (kg)</Label>
        <Input
          id="prePreg"
          type="number"
          value={prePregnancyWeight}
          onChange={(e) => setPrePregnancyWeight(e.target.value)}
          min="1"
          step="0.1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentWeight">Current Weight (kg)</Label>
        <Input
          id="currentWeight"
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          min="1"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="weeksPregnant">Weeks Pregnant</Label>
          <Input
            id="weeksPregnant"
            type="number"
            value={weeksPregnant}
            onChange={(e) => setWeeksPregnant(e.target.value)}
            min="1"
            max="42"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bmi">Pre-Pregnancy BMI</Label>
          <Input
            id="bmi"
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            min="10"
            step="0.1"
          />
        </div>
      </div>

      {/* Lightweight use of Select to follow project patterns - a single unit option for clarity */}
      <div className="space-y-2">
        <Label htmlFor="unit">Weight Unit</Label>
        <Select id="unit" value="kg" onChange={() => {}}>
          <option value="kg">Kilograms (kg)</option>
        </Select>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Total Gained</div>
      <div className="text-5xl font-bold text-blue-900 my-3">{result.gain.toLocaleString()} kg</div>
      <div className="text-lg text-gray-700 mb-2">
        Recommended total: {result.recommendedLower} – {result.recommendedUpper} kg
      </div>
      <div className="text-sm text-gray-500">Expected by week {weeksPregnant}: {result.expectedByNowLower} – {result.expectedByNowUpper} kg</div>
      <div className="mt-3 text-base font-medium text-gray-800">{result.status}</div>
    </div>
  ) : null;

  const charts = showCharts && result ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Weight Gain Progress</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} kg`} />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-3 text-sm text-gray-600 text-center">
        Chart compares your current gain to the expected lower and upper bounds for your gestation.
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pregnancy Weight Gain Calculator"
      description="Calculate recommended weight gain during pregnancy based on pre-pregnancy BMI and current gestational age."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
