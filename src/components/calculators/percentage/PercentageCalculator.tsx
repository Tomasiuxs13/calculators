'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type CalcType = 'percentageOf' | 'isWhatPercent' | 'percentageChange';

export default function PercentageCalculator() {
  const [type, setType] = useState<CalcType>('percentageOf');
  const [val1, setVal1] = useState('20');
  const [val2, setVal2] = useState('100');
  const [result, setResult] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Update default values when calculation type changes
  useEffect(() => {
    if (type === 'percentageOf') {
      setVal1('20');
      setVal2('100');
    } else if (type === 'isWhatPercent') {
      setVal1('25');
      setVal2('100');
    } else if (type === 'percentageChange') {
      setVal1('100');
      setVal2('120');
    }
  }, [type]);

  useEffect(() => {
    const v1 = parseFloat(val1);
    const v2 = parseFloat(val2);

    if (isNaN(v1) || isNaN(v2)) {
      setResult(null);
      return;
    }

    let res = 0;
    switch (type) {
      case 'percentageOf':
        // What is X% of Y?
        res = (v1 / 100) * v2;
        setResult(`${v1}% of ${v2} is ${res}`);
        break;
      case 'isWhatPercent':
        // X is what percent of Y?
        if (v2 === 0) {
          setResult(null);
          return;
        }
        res = (v1 / v2) * 100;
        setResult(`${v1} is ${res.toFixed(2)}% of ${v2}`);
        break;
      case 'percentageChange':
        // % change from X to Y
        if (v1 === 0) {
          setResult(null);
          return;
        }
        res = ((v2 - v1) / v1) * 100;
        const direction = res > 0 ? 'increase' : 'decrease';
        setResult(`${Math.abs(res).toFixed(2)}% ${direction}`);
        break;
    }
  }, [type, val1, val2]);

  const getLabels = () => {
    switch (type) {
      case 'percentageOf':
        return { l1: 'Percentage (%)', l2: 'Value' };
      case 'isWhatPercent':
        return { l1: 'Part', l2: 'Whole' };
      case 'percentageChange':
        return { l1: 'From Value', l2: 'To Value' };
    }
  };

  const handleDownloadPDF = () => {
    if (!result) return;

    const typeLabels: Record<CalcType, string> = {
      percentageOf: 'What is X% of Y?',
      isWhatPercent: 'X is what percent of Y?',
      percentageChange: 'Percentage change from X to Y',
    };

    const { l1, l2 } = getLabels();

    const inputs = [
      { label: 'Calculation Type', value: typeLabels[type] },
      { label: l1, value: val1 },
      { label: l2, value: val2 },
    ];

    const results = [
      { label: 'Result', value: result },
    ];

    generateCalculatorPDF({
      title: 'Percentage Calculator Results',
      inputs,
      results,
    });
  };

  // Chart data based on calculation type
  const getChartData = () => {
    const v1 = parseFloat(val1);
    const v2 = parseFloat(val2);

    if (isNaN(v1) || isNaN(v2)) return null;

    switch (type) {
      case 'percentageOf': {
        const result = (v1 / 100) * v2;
        return {
          pieData: [
            { name: `${v1}% of ${v2}`, value: result, color: '#3b82f6' },
            { name: 'Remaining', value: v2 - result, color: '#e5e7eb' },
          ],
          barData: [
            { name: 'Original Value', value: v2 },
            { name: `${v1}% Portion`, value: result },
          ],
        };
      }
      case 'isWhatPercent': {
        if (v2 === 0) return null;
        const percent = (v1 / v2) * 100;
        return {
          pieData: [
            { name: `${v1} (${percent.toFixed(1)}%)`, value: v1, color: '#3b82f6' },
            { name: 'Remaining', value: v2 - v1, color: '#e5e7eb' },
          ],
          barData: [
            { name: 'Whole', value: v2 },
            { name: 'Part', value: v1 },
          ],
        };
      }
      case 'percentageChange': {
        if (v1 === 0) return null;
        const change = ((v2 - v1) / v1) * 100;
        return {
          pieData: null,
          barData: [
            { name: 'From', value: v1 },
            { name: 'To', value: v2 },
            { name: 'Change', value: Math.abs(v2 - v1) },
          ],
        };
      }
    }
  };

  const chartData = getChartData();
  const { l1, l2 } = getLabels();

  const inputs = (
    <>
      <div className="space-y-2">
        <Label>Calculation Type</Label>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value as CalcType)}
        >
          <option value="percentageOf">What is X% of Y?</option>
          <option value="isWhatPercent">X is what percent of Y?</option>
          <option value="percentageChange">Percentage change from X to Y</option>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="val1">{l1}</Label>
          <Input
            id="val1"
            type="number"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="val2">{l2}</Label>
          <Input
            id="val2"
            type="number"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
        </div>
      </div>
    </>
  );

  const results = result ? (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-2">Result</p>
      <p className="text-3xl font-bold text-blue-900 my-3 break-words">{result}</p>
    </div>
  ) : null;

  const charts = showCharts && result && chartData ? (
    <>
      {chartData.pieData && (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">Visual Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={chartData.pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => percent && percent > 0.05 ? `${name}: ${(percent * 100).toFixed(0)}%` : ''}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {chartData.barData && (
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-center">Value Comparison</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  ) : null;

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Solve common percentage problems"
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
