'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PregnancyDueDateCalculator() {
  const [lmpDate, setLmpDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [dueDate, setDueDate] = useState<Date | null>(null);

  useEffect(() => {
    if (lmpDate) {
      const lmp = new Date(lmpDate);
      const due = new Date(lmp);
      due.setDate(due.getDate() + 280); // 280 days for a typical pregnancy
      setDueDate(due);
    } else {
      setDueDate(null);
    }
  }, [lmpDate, cycleLength]);

  const handleDownloadPDF = () => {
    if (dueDate === null) return;

    generateCalculatorPDF({
      title: 'Pregnancy Due Date Results',
      inputs: [
        { label: 'Last Menstrual Period Date', value: lmpDate },
        { label: 'Average Cycle Length', value: cycleLength },
      ],
      results: [
        { label: 'Estimated Due Date', value: dueDate.toLocaleDateString() },
      ],
    });
  };

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="lmpDate">Last Menstrual Period Date</Label>
        <Input
          id="lmpDate"
          type="date"
          value={lmpDate}
          onChange={(e) => setLmpDate(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cycleLength">Average Cycle Length (days)</Label>
        <Input
          id="cycleLength"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
          min="1"
        />
      </div>
    </>
  );

  const results = dueDate !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Estimated Due Date</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {dueDate.toLocaleDateString()}
      </div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Pregnancy Due Date Calculator"
      description="Calculate pregnancy due date based on last menstrual period or conception date."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}
