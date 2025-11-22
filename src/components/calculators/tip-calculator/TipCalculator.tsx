'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<string>('50');
  const [tipPercent, setTipPercent] = useState<string>('18');
  const [people, setPeople] = useState<string>('2');
  const [totalTip, setTotalTip] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [perPerson, setPerPerson] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const numPeople = parseInt(people);

    if (!isNaN(bill) && !isNaN(tip) && numPeople > 0) {
      const calculatedTip = (bill * (tip / 100));
      const calculatedTotal = bill + calculatedTip;
      const calculatedPerPerson = calculatedTotal / numPeople;

      setTotalTip(parseFloat(calculatedTip.toFixed(2)));
      setTotalAmount(parseFloat(calculatedTotal.toFixed(2)));
      setPerPerson(parseFloat(calculatedPerPerson.toFixed(2)));
    } else {
      setTotalTip(null);
      setTotalAmount(null);
      setPerPerson(null);
    }
  }, [billAmount, tipPercent, people]);

  const handleDownloadPDF = () => {
    if (totalAmount === null || totalTip === null || perPerson === null) return;

    generateCalculatorPDF({
      title: 'Tip Calculator Results',
      inputs: [
        { label: 'Bill Amount', value: billAmount },
        { label: 'Tip Percentage', value: tipPercent },
        { label: 'Number of People', value: people },
      ],
      results: [
        { label: 'Total Tip', value: `$${totalTip}` },
        { label: 'Total Amount', value: `$${totalAmount}` },
        { label: 'Per Person', value: `$${perPerson}` },
      ],
    });
  };

  const chartData = totalTip !== null ? [
    { label: 'Total Tip', value: totalTip },
    { label: 'Total Amount', value: totalAmount },
  ] : [];

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="billAmount">Bill Amount</Label>
        <Input
          id="billAmount"
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipPercent">Tip Percentage (%)</Label>
        <Input
          id="tipPercent"
          type="number"
          value={tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="people">Number of People</Label>
        <Input
          id="people"
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
          step="1"
        />
      </div>
    </>
  );

  const results = totalAmount !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Total: ${totalAmount.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Total Tip: ${totalTip?.toLocaleString()}</div>
      <div className="text-lg text-gray-700">Per Person: ${perPerson?.toLocaleString()}</div>
    </div>
  ) : null;

  const charts = showCharts && totalAmount !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Tip Calculation Breakdown</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Tip Calculator"
      description="Calculate tip amount and total bill including tip."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
