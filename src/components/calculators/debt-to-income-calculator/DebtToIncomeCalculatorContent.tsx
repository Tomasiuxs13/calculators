import React from 'react';

export default function DebtToIncomeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Debt to Income Calculator</h1>
      <meta name="description" content="Understand and calculate your debt-to-income ratio with our comprehensive guide on managing finances effectively." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Debt to Income Ratio?
        </h2>
        <p className="mb-4 text-lg leading-7">
          The debt-to-income (DTI) ratio is a financial measure that compares an individual’s monthly debt payments to their monthly gross income. It is an important indicator of financial health and is often used by lenders to assess a borrower's ability to manage monthly payments and repay debts.
        </p>
        <p className="mb-4 text-lg leading-7">
          A lower DTI ratio indicates a better balance between debt and income, while a higher ratio may suggest that a person is over-leveraged and may struggle to meet their financial obligations. Understanding your DTI can help you make informed financial decisions, such as when to apply for loans or how to manage existing debts effectively.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Your Debt to Income Ratio
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate your debt-to-income ratio, you can use the following formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            DTI = (Monthly Debt Payments / Monthly Gross Income) × 100
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For example, if your monthly debt payments are $1,500 and your monthly gross income is $6,000, your DTI would be:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            DTI = (1500 / 6000) × 100 = 25%
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">
          Knowing your DTI can guide your financial decisions, such as determining whether to take on more debt or focus on repaying existing obligations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Importance of a Healthy Debt to Income Ratio
        </h2>
        <p className="mb-4 text-lg leading-7">
          Maintaining a healthy DTI is crucial for financial stability. A lower ratio is often viewed favorably by lenders, which can improve your chances of securing loans with better terms and interest rates. It also indicates a responsible approach to managing debt, which can lead to more financial opportunities in the future.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases of Debt to Income Ratio
        </h2>
        <p className="mb-4 text-lg leading-7">
          The DTI ratio is commonly used in several scenarios:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg leading-7">
          <li>Mortgage applications: Lenders often require a DTI below a certain percentage for loan approval.</li>
          <li>Debt consolidation: Understanding your DTI can help you decide if consolidating debts will be beneficial.</li>
          <li>Budgeting: A lower DTI allows for more flexibility in budgeting for future expenses or savings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">1. What is a good debt-to-income ratio?</h3>
        <p className="mb-4 text-lg leading-7">
          A good DTI ratio is generally considered to be 36% or less, with 28% or lower for housing costs specifically.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. Can I improve my debt-to-income ratio?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, you can improve your DTI ratio by paying down existing debts, increasing your income, or a combination of both.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. How often should I check my debt-to-income ratio?</h3>
        <p className="mb-4 text-lg leading-7">
          It's advisable to review your DTI ratio periodically, especially before making significant financial decisions like applying for a loan.
        </p>
      </section>
    </article>
  );
}
