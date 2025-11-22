'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type NumericString = string;

const standardBreakerSizes: number[] = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315];

export default function CircuitBreakerCalculator() {
  const [totalLoad, setTotalLoad] = useState<NumericString>('5000');
  const [voltage, setVoltage] = useState<NumericString>('240');
  const [safetyFactor, setSafetyFactor] = useState<NumericString>('125');

  const [loadCurrent, setLoadCurrent] = useState<number | null>(null);
  const [recommendedCurrent, setRecommendedCurrent] = useState<number | null>(null);
  const [recommendedBreaker, setRecommendedBreaker] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p = parseFloat(totalLoad);
    const v = parseFloat(voltage);
    const sf = parseFloat(safetyFactor);

    if (!isNaN(p) && p >= 0 && !isNaN(v) && v > 0 && !isNaN(sf) && sf >= 100) {
      // Calculate base current I = P / V
      const baseCurrent = p / v;
      // Apply safety factor (percentage)
      const appliedCurrent = baseCurrent * (sf / 100);

      setLoadCurrent(parseFloat(baseCurrent.toFixed(4)));
      setRecommendedCurrent(parseFloat(appliedCurrent.toFixed(4)));

      // Choose smallest standard breaker >= appliedCurrent
      const found = standardBreakerSizes.find((s) => s >= appliedCurrent);
      setRecommendedBreaker(found ?? standardBreakerSizes[standardBreakerSizes.length - 1]);
    } else {
      setLoadCurrent(null);
      setRecommendedCurrent(null);
      setRecommendedBreaker(null);
    }
  }, [totalLoad, voltage, safetyFactor]);

  const handleDownloadPDF = () => {
    if (recommendedCurrent === null || loadCurrent === null || recommendedBreaker === null) return;

    generateCalculatorPDF({
      title: 'Circuit Breaker Calculator Results',
      inputs: [
        { label: 'Total Load (W)', value: totalLoad },
        { label: 'Voltage (V)', value: voltage },
        { label: 'Safety Factor (%)', value: safetyFactor },
      ],
      results: [
        { label: 'Load Current (A)', value: `${loadCurrent} A` },
        { label: 'Recommended Current (A)', value: `${recommendedCurrent} A` },
        { label: 'Recommended Breaker (A)', value: `${recommendedBreaker} A` },
      ],
    });
  };

  const chartData = (loadCurrent !== null && recommendedBreaker !== null) ? [
    { label: 'Load Current', value: loadCurrent, unit: 'A' },
    { label: 'Recommended Breaker', value: recommendedBreaker, unit: 'A' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="totalLoad">Total Load (W)</Label>
        <Input
          id="totalLoad"
          type="number"
          value={totalLoad}
          onChange={(e) => setTotalLoad(e.target.value)}
          min="0"
          step="1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="voltage">Voltage (V)</Label>
          <Input
            id="voltage"
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            min="1"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="safetyFactor">Safety Factor (%)</Label>
          <div className="flex space-x-2">
            <Input
              id="safetyFactor"
              type="number"
              value={safetyFactor}
              onChange={(e) => setSafetyFactor(e.target.value)}
              min="100"
              step="1"
            />
          </div>
        </div>
      </div>

      <button onClick={handleDownloadPDF} className="mt-4 btn">
        Download PDF
      </button>
    </>
  );

  useEffect(() => {
    // Trigger calculation on component mount with default values
    setTotalLoad('5000');
    setVoltage('240');
    setSafetyFactor('125');
  }, []);

  return (
    <CalculatorLayout title="Circuit Breaker Calculator" category="construction">
      {inputs}
      {showCharts && chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </CalculatorLayout>
  );
}
