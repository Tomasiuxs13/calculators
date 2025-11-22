import React from 'react';

export default function PercentageContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Percentage Calculations Explained</h2>
        <p className="mb-6 text-lg leading-7">
          Percentages are used in countless everyday situations. Understanding how to calculate percentages is essential for financial planning, shopping, and data analysis.
        </p>
      </section>
      
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">1. What is X% of Y?</h3>
        <p className="mb-4 text-lg leading-7">
          This calculation determines the value of a percentage of a number. The formula is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Value = (Percentage ÷ 100) × Number</code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> What is 20% of 150? (20 ÷ 100) × 150 = 30.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">2. X is What Percent of Y?</h3>
        <p className="mb-4 text-lg leading-7">
          This finds what percentage one number is of another. The formula is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Percentage = (Part ÷ Whole) × 100</code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> 30 is what percent of 150? (30 ÷ 150) × 100 = 20%.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">3. Percentage Change</h3>
        <p className="mb-4 text-lg leading-7">
          This calculates the percentage increase or decrease from one value to another.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Change (%) = ((New Value - Old Value) ÷ Old Value) × 100</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          If the result is positive, it's an increase. If negative, it's a decrease.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> A price increases from $100 to $120. The percentage change is ((120 - 100) ÷ 100) × 100 = 20% increase.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Real World Uses</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Shopping & Discounts</h4>
            <p className="text-base text-gray-700">Calculate sale prices, discounts, and savings on purchases.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Financial Planning</h4>
            <p className="text-base text-gray-700">Track investment returns, interest rates, and financial growth.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Tips & Gratuities</h4>
            <p className="text-base text-gray-700">Calculate appropriate tips at restaurants and for services.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Data Analysis</h4>
            <p className="text-base text-gray-700">Compare statistics, analyze trends, and interpret survey results.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
