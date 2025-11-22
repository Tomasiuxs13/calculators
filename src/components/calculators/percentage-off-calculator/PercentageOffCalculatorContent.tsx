import React from 'react';

export default function PercentageOffCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Percentage Off Calculator</h1>
      <p className="mb-4 text-lg leading-7">
        Discover how much you can save with our <strong>percentage off</strong> calculator! Whether you're shopping for great deals or managing your budget, this tool simplifies your savings calculations.
      </p>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">What is a Percentage Off Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          A Percentage Off Calculator helps you determine the final price after applying a percentage-based discount to an original price. It's a quick way to see how much you'll pay and how much you'll save when shopping sales, using coupons, or planning a budget.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to enter the original price and the discount percentage to get an instant result. The calculator updates automatically as you change the inputs and provides a clear breakdown of the final price and savings.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is especially useful during shopping seasons, sales events, or while using promotional offers. By utilizing our percentage off calculator, you can make informed decisions and never miss out on the best deals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator computes the discount amount and subtracts it from the original price. Mathematically:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Final Price = Original Price × (1 − Discount / 100)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Example: If an item costs $100 and the discount is 20%, the final price is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Final Price = 100 × (1 − 20/100) = 100 × 0.8 = $80.00</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Percentage Off Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter the original price in the "Original Price" field.</li>
          <li>Enter the discount percentage in the "Discount (%)" field (0–100).</li>
          <li>The final price and savings will appear instantly. Toggle charts to view a visual breakdown, or download the results as a PDF.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I use discounts greater than 100%?</h3>
            <p className="text-lg text-gray-700 mt-2">No. Discounts greater than 100% would imply the seller pays the buyer. Enter realistic values between 0 and 100 for meaningful results.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Does the calculator round the result?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes. The final price and savings are rounded to two decimal places to match standard currency formatting.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I download the calculation?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes. Use the "Download PDF" option to save the inputs and results as a PDF for record-keeping or sharing.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if the original price is zero?</h3>
            <p className="text-lg text-gray-700 mt-2">If the original price is zero, the final price will also be zero, regardless of the discount percentage entered.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is this calculator available for mobile devices?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes! Our percentage off calculator is fully responsive and works seamlessly on all mobile devices.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Shoppers</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Combine percentage discounts carefully with fixed-dollar coupons — calculate one at a time or both together depending on store rules.</li>
          <li>Watch for taxes; this calculator does not include sales tax. Add tax after computing the discounted price to see your final out-the-door cost.</li>
          <li>Use the chart view to easily compare original price, final price, and savings at a glance.</li>
          <li>Check for additional promotions or cash-back offers that may apply after discounts are given.</li>
          <li>Keep track of seasonal sales events for the best opportunities to use the calculator effectively.</li>
        </ul>
      </section>
    </article>
  );
}
