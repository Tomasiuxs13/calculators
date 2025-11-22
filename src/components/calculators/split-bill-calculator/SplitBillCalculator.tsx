'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function SplitBillCalculator() {
  const [totalBill, setTotalBill] = useState<string>('100');
  const [numberOfPeople, setNumberOfPeople] = useState<string>('4');
  const [tipPercent, setTipPercent] = useState<string>('18');

  const [perPersonBeforeTip, setPerPersonBeforeTip] = useState<number | null>(null);
  const [tipAmountTotal, setTipAmountTotal] = useState<number | null>(null);
  const [totalWithTip, setTotalWithTip] = useState<number | null>(null);
  const [perPersonWithTip, setPerPersonWithTip] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const bill = parseFloat(totalBill);
    const people = parseFloat(numberOfPeople);
    const tip = parseFloat(tipPercent);

    // Validate inputs: bill >= 0, people >= 1, tip >= 0
    if (!isNaN(bill) && bill >= 0 && !isNaN(people) && people >= 1 && !isNaN(tip) && tip >= 0) {
      const tipTotal = (bill * tip) / 100;
      const total = bill + tipTotal;
      const perBefore = bill / people;
      const perAfter = total / people;

      // Round to 2 decimal places
      setTipAmountTotal(parseFloat(tipTotal.toFixed(2)));
      setTotalWithTip(parseFloat(total.toFixed(2)));
      setPerPersonBeforeTip(parseFloat(perBefore.toFixed(2)));
      setPerPersonWithTip(parseFloat(perAfter.toFixed(2)));
    } else {
      setTipAmountTotal(null);
      setTotalWithTip(null);
      setPerPersonBeforeTip(null);
      setPerPersonWithTip(null);
    }
  }, [totalBill, numberOfPeople, tipPercent]);

  const handleDownloadPDF = () => {
    if (perPersonWithTip === null || totalWithTip === null || tipAmountTotal === null) return;

    generateCalculatorPDF({
      title: 'Split Bill Results',
      inputs: [
        { label: 'Total Bill', value: `$${parseFloat(totalBill || '0').toFixed(2)}` },
        { label: 'Number of People', value: numberOfPeople },
        { label: 'Tip (%)', value: `${parseFloat(tipPercent || '0').toFixed(2)}%` },
      ],
      results: [
        { label: 'Tip Amount (Total)', value: `$${tipAmountTotal.toFixed(2)}` },
        { label: 'Total with Tip', value: `$${totalWithTip.toFixed(2)}` },
        { label: 'Per Person (With Tip)', value: `$${perPersonWithTip.toFixed(2)}` },
      ],
    });
  };

  const chartData = (perPersonBeforeTip !== null && perPersonWithTip !== null) ? [
    { label: 'Per Person (No Tip)', value: perPersonBeforeTip },
    { label: 'Per Person (With Tip)', value: perPersonWithTip },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="totalBill">Total Bill</Label>
        <Input
          id="totalBill"
          type="number"
          value={totalBill}
          onChange={(e) => setTotalBill(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="numberOfPeople">Number of People</Label>
          <Input
            id="numberOfPeople"
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            min="1"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tipPercent">Tip (%)</Label>
          <Input
            id="tipPercent"
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            min="0"
            step="0.5"
          />
        </div>
      </div>
    </>
  );

  const results = perPersonWithTip !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Each Person Pays</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        {`$${perPersonWithTip.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
      </div>

      <div className="text-sm text-gray-700">
        <div>Per Person (No Tip): <span className="font-medium">{perPersonBeforeTip !== null ? `$${perPersonBeforeTip.toFixed(2)}` : '-'}</span></div>
        <div>Tip (Total): <span className="font-medium">{tipAmountTotal !== null ? `$${tipAmountTotal.toFixed(2)}` : '-'}</span></div>
        <div>Total Bill (With Tip): <span className="font-medium">{totalWithTip !== null ? `$${totalWithTip.toFixed(2)}` : '-'}</span></div>
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-600">Enter valid values to see results</div>
  );

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Per Person Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${(value as number).toFixed(2)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Split Bill Calculator"
      description="Split a bill evenly among multiple people and include tip."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
