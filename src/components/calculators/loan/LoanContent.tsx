import React from 'react';

export default function LoanContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">How to Calculate Loan Payments</h2>
        <p className="mb-4 text-lg leading-7">
          This loan calculator helps you determine the monthly payments on a loan. Simply enter the loan amount, term, and interest rate to calculate your monthly loan payments.
        </p>
      </section>
      
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">The Formula</h3>
        <p className="mb-4 text-lg leading-7">
          The formula for calculating the monthly payment for a fixed-rate loan is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]</code>
        </div>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">M</span>
            <span>= Total monthly payment</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">P</span>
            <span>= The total amount of your loan</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">i</span>
            <span>= Your monthly interest rate (annual rate ÷ 12)</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">n</span>
            <span>= The total number of months in your timeline</span>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">Understanding the Results</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg">
              <strong className="text-gray-900">Monthly Payment:</strong> The amount you need to pay every month to pay off the loan within the specified term.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg">
              <strong className="text-gray-900">Total Interest:</strong> The total amount of money you will pay in interest over the life of the loan.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg">
              <strong className="text-gray-900">Total Payment:</strong> The sum of the loan amount plus the total interest paid.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">Tips for Borrowers</h3>
        <ul className="space-y-3 mb-6 list-disc list-inside">
          <li className="text-lg">A shorter loan term usually means higher monthly payments but less total interest paid.</li>
          <li className="text-lg">Even a small difference in interest rate can save you thousands of dollars over the life of a mortgage.</li>
          <li className="text-lg">Consider making extra payments if your loan allows it to pay off the debt faster.</li>
          <li className="text-lg">Shop around for the best interest rates and loan terms before committing to a loan.</li>
        </ul>
      </section>
    </article>
  );
}
