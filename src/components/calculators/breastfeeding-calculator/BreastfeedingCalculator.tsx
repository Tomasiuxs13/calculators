'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function BreastfeedingCalculator() {
  const [babyAge, setBabyAge] = useState<string>('4');
  const [babyWeight, setBabyWeight] = useState<string>('4');
  const [feedingsPerDay, setFeedingsPerDay] = useState<string>('8');

  const [dailyIntake, setDailyIntake] = useState<number | null>(null); // ml per day
  const [perFeeding, setPerFeeding] = useState<number | null>(null); // ml per feeding
  const [intakePerKg, setIntakePerKg] = useState<number>(150); // ml/kg/day default

  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const ageWeeks = parseFloat(babyAge);
    const weightKg = parseFloat(babyWeight);
    const feeds = parseFloat(feedingsPerDay);

    if (!isNaN(ageWeeks) && !isNaN(weightKg) && weightKg > 0 && !isNaN(feeds) && feeds > 0) {
      // Simple clinical-based heuristic: newborns and young infants often consume ~150 ml/kg/day
      // After the early months consumption can slowly decrease per kg; we use a small adjustment
      let factor = 150; // ml per kg per day
      if (ageWeeks > 12 && ageWeeks <= 26) {
        factor = 140;
      } else if (ageWeeks > 26) {
        factor = 120;
      }

      setIntakePerKg(factor);

      const daily = weightKg * factor; // ml/day
      const per = daily / feeds;

      setDailyIntake(parseFloat(daily.toFixed(1)));
      setPerFeeding(parseFloat(per.toFixed(1)));
    } else {
      setDailyIntake(null);
      setPerFeeding(null);
    }
  }, [babyAge, babyWeight, feedingsPerDay]);

  const handleDownloadPDF = () => {
    if (dailyIntake === null || perFeeding === null) return;

    generateCalculatorPDF({
      title: 'Breastfeeding Calculator Results',
      inputs: [
        { label: 'Baby Age (weeks)', value: babyAge },
        { label: 'Baby Weight (kg)', value: babyWeight },
        { label: 'Feedings per Day', value: feedingsPerDay },
      ],
      results: [
        { label: 'Estimated Intake per kg', value: `${intakePerKg} ml/kg/day` },
        { label: 'Estimated Daily Intake', value: `${dailyIntake} ml/day` },
        { label: 'Estimated Intake per Feeding', value: `${perFeeding} ml` },
      ],
    });
  };

  const chartData = dailyIntake !== null && perFeeding !== null ? [
    { label: 'Daily Intake', value: dailyIntake },
    { label: 'Per Feeding', value: perFeeding },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="babyAge">Baby Age (weeks)</Label>
        <Input
          id="babyAge"
          type="number"
          value={babyAge}
          onChange={(e) => setBabyAge(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="babyWeight">Baby Weight (kg)</Label>
        <Input
          id="babyWeight"
          type="number"
          value={babyWeight}
          onChange={(e) => setBabyWeight(e.target.value)}
          min="0.1"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feedingsPerDay">Feedings per Day</Label>
        <Input
          id="feedingsPerDay"
          type="number"
          value={feedingsPerDay}
          onChange={(e) => setFeedingsPerDay(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = dailyIntake !== null && perFeeding !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Daily Breast Milk Intake</div>
      <div className="text-4xl font-bold text-blue-900 my-2">{dailyIntake.toLocaleString()} ml</div>
      <div className="text-sm text-gray-600 mb-4">({intakePerKg} ml/kg/day)</div>

      <div className="text-sm text-gray-600 mb-2">Estimated Intake per Feeding</div>
      <div className="text-3xl font-semibold text-gray-800 mb-1">{perFeeding.toLocaleString()} ml</div>

      <div className="text-xs text-gray-600 mt-3">
        These estimates are based on typical clinical averages and are for guidance only. Consult a healthcare professional for personalized advice.
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Estimated Intake Chart</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)} ml`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Breastfeeding Calculator"
      description="Calculate estimated daily milk intake and per-feeding volume based on baby age, weight, and number of feedings per day."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
