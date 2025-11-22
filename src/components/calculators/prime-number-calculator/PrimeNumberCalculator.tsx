'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function PrimeNumberCalculator() {
  const [numberStr, setNumberStr] = useState<string>('17');
  const [isPrime, setIsPrime] = useState<boolean | null>(null);
  const [factors, setFactors] = useState<number[]>([]);
  const [showCharts, setShowCharts] = useState(false);

  // Helper: check primality
  const checkIsPrime = (n: number): boolean => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Helper: prime factorization (with multiplicity)
  const primeFactors = (n: number): number[] => {
    const res: number[] = [];
    if (n <= 1) return res;
    let temp = n;
    while (temp % 2 === 0) {
      res.push(2);
      temp = temp / 2;
    }
    let factor = 3;
    while (factor * factor <= temp) {
      while (temp % factor === 0) {
        res.push(factor);
        temp = temp / factor;
      }
      factor += 2;
    }
    if (temp > 1) res.push(temp);
    return res;
  };

  useEffect(() => {
    const parsed = parseInt(numberStr, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      const prime = checkIsPrime(parsed);
      const pf = prime ? [parsed] : primeFactors(parsed);
      setIsPrime(parsed >= 2 ? prime : false);
      setFactors(pf);
    } else {
      setIsPrime(null);
      setFactors([]);
    }
  }, [numberStr]);

  const handleDownloadPDF = () => {
    const parsed = parseInt(numberStr, 10);
    if (isNaN(parsed) || isPrime === null) return;

    generateCalculatorPDF({
      title: 'Prime Number Results',
      inputs: [
        { label: 'Number', value: numberStr },
      ],
      results: [
        { label: 'Is Prime', value: isPrime ? 'Yes' : 'No' },
        { label: 'Prime Factors', value: factors.length > 0 ? factors.join(', ') : 'None' },
      ],
    });
  };

  const parsed = parseInt(numberStr, 10);

  const chartData = (isPrime !== null && !isNaN(parsed) && parsed >= 0) ? [
    { label: 'Number', value: parsed },
    { label: 'Largest Prime Factor', value: factors.length > 0 ? Math.max(...factors) : 0 },
    { label: 'Count of Prime Factors', value: factors.length },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="number"
          value={numberStr}
          onChange={(e) => setNumberStr(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      {/* Placeholder Select import used to match project patterns (not required for this calculator) */}
      <div className="hidden">
        <Label htmlFor="placeholder">Placeholder</Label>
        <Select id="placeholder" value="unused" onChange={() => {}}>
          <option value="unused">Unused</option>
        </Select>
      </div>
    </>
  );

  const results = (isPrime !== null && !isNaN(parsed)) ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Result</div>
      <div className={`text-5xl font-bold my-3 ${isPrime ? 'text-green-700' : 'text-red-700'}`}>
        {isPrime ? 'Prime' : (parsed >= 2 ? 'Not Prime' : 'Invalid')}
      </div>
      <div className="text-lg text-gray-700 mb-2">Number: {parsed.toLocaleString()}</div>
      <div className="text-sm text-gray-600">Prime Factors</div>
      <div className="text-base text-gray-800 mt-2">
        {factors.length > 0 ? factors.join(', ') : 'None'}
      </div>
    </div>
  ) : null;

  const charts = showCharts && chartData.length > 0 ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Prime Number Analysis</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value: number) => `${value}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Prime Number Calculator"
      description="Check if a number is prime and compute its prime factors. Enter an integer to get immediate results and visual analysis."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
