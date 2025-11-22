'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';
import CalculatorLayout from '@/components/calculators/CalculatorLayout';

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>('100');
  const [discountPercent, setDiscountPercent] = useState<string>('20');
  const [finalPrice, setFinalPrice] = useState<number | null>(null);
  const [discountAmount, setDiscountAmount] = useState<number | null>(null);

  useEffect(() => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    if (!isNaN(price) && !isNaN(discount) && price >= 0 && discount >= 0) {
      const discountValue = (price * discount) / 100;
      const finalValue = price - discountValue;
      setDiscountAmount(parseFloat(discountValue.toFixed(2)));
      setFinalPrice(parseFloat(finalValue.toFixed(2)));
    } else {
      setDiscountAmount(null);
      setFinalPrice(null);
    }
  }, [originalPrice, discountPercent]);

  const handleDownloadPDF = () => {
    if (finalPrice === null || discountAmount === null) return;

    generateCalculatorPDF({
      title: 'Discount Calculator Results',
      inputs: [
        { label: 'Original Price', value: originalPrice },
        { label: 'Discount (%)', value: discountPercent },
      ],
      results: [
        { label: 'Discount Amount', value: `${discountAmount}` },
        { label: 'Final Price', value: `${finalPrice}` },
      ],
    });
  };

  const inputs = (
    <> 
      <div className="space-y-2">
        <Label htmlFor="originalPrice">Original Price</Label>
        <Input
          id="originalPrice"
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="discountPercent">Discount (%)</Label>
        <Input
          id="discountPercent"
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          min="0"
          step="0.01"
        />
      </div>
    </>
  );

  const results = finalPrice !== null && discountAmount !== null ? (
    <div className="text-center">
      <div className="text-sm text-gray-600 mb-2">Results</div>
      <div className="text-5xl font-bold text-blue-900 my-3">
        Final Price: {finalPrice.toLocaleString()}
      </div>
      <div className="text-lg text-gray-700">Discount Amount: {discountAmount.toLocaleString()}</div>
    </div>
  ) : null;

  return (
    <CalculatorLayout
      title="Discount Calculator"
      description="Calculate discount amount and final price after discount."
      inputs={inputs}
      results={results}
      onDownloadPDF={handleDownloadPDF}
    />
  );
}