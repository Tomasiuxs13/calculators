'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

type Unit = 'kg' | 'lb' | 'oz';

const unitToKg: Record<Unit, number> = {
  kg: 1,
  lb: 0.453592,
  oz: 0.0283495,
};

export default function UnitPriceCalculator() {
  const [price, setPrice] = useState<string>('5.99');
  const [quantity, setQuantity] = useState<string>('2');
  const [unit, setUnit] = useState<Unit>('kg');
  const [pricePerKg, setPricePerKg] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    const p = parseFloat(price);
    const q = parseFloat(quantity);

    if (!isNaN(p) && !isNaN(q) && p >= 0 && q > 0) {
      const totalKg = q * unitToKg[unit];
      if (totalKg > 0) {
        const perKg = p / totalKg;
        setPricePerKg(parseFloat(perKg.toFixed(6)));
      } else {
        setPricePerKg(null);
      }
    } else {
      setPricePerKg(null);
    }
  }, [price, quantity, unit]);

  const handleDownloadPDF = () => {
    if (pricePerKg === null) return;

    generateCalculatorPDF({
      title: 'Unit Price Calculator Results',
      inputs: [
        { label: 'Price', value: price },
        { label: 'Quantity', value: quantity },
        { label: 'Unit', value: unit },
      ],
      results: [
        { label: 'Price per kg', value: `$${pricePerKg.toFixed(4)} / kg` },
        { label: 'Price per lb', value: `$${(pricePerKg * unitToKg['lb']).toFixed(4)} / lb` },
        { label: 'Price per oz', value: `$${(pricePerKg * unitToKg['oz']).toFixed(4)} / oz` },
      ],
    });
  };

  const chartData = pricePerKg !== null ? [
    { label: 'Per kg', value: pricePerKg, unit: 'kg' },
    { label: 'Per lb', value: pricePerKg * unitToKg['lb'], unit: 'lb' },
    { label: 'Per oz', value: pricePerKg * unitToKg['oz'], unit: 'oz' },
  ] : [];

  const inputs = (
    <>
      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="unit">Unit</Label>
        <Select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value as Unit)}
        >
          <option value="kg">Kilogram (kg)</option>
          <option value="lb">Pound (lb)</option>
          <option value="oz">Ounce (oz)</option>
        </Select>
      </div>
    </>
  );

  const results = pricePerKg !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Unit Price</div>
      <div className="text-4xl font-bold text-blue-900 my-2">${pricePerKg.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</div>
      <div className="text-sm text-gray-700 mb-4">per kilogram (kg)</div>

      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Per lb</div>
          <div className="text-lg font-semibold">${(pricePerKg * unitToKg['lb']).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Per oz</div>
          <div className="text-lg font-semibold">${(pricePerKg * unitToKg['oz']).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-xs text-gray-500">Original unit price</div>
          <div className="text-lg font-semibold">${(parseFloat(price) / Math.max(1, parseFloat(quantity) || 1)).toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })} / {unit}</div>
        </div>
      </div>
    </div>
  ) : null;

  const charts = showCharts && pricePerKg !== null ? (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">Price Comparison</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value: number) => `$${(value as number).toFixed(4)}`} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Unit Price Calculator"
      description="Calculate unit price to compare product value. Enter the price, the quantity, and the unit to see cost per kilogram (and equivalents)."
      inputs={inputs}
      results={results}
      showCharts={showCharts}
      onToggleCharts={() => setShowCharts(!showCharts)}
      onDownloadPDF={handleDownloadPDF}
      charts={charts}
    />
  );
}
