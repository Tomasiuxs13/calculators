import React from 'react';

export default function TaxBracketCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Tax Bracket?</h2>
        <p className="mb-4 text-lg leading-7">
          A tax bracket is a range of income that is taxed at a specific marginal rate. In progressive tax systems, different portions of your income are taxed at increasing rates. Knowing your tax bracket helps you estimate how much tax you owe and understand the difference between your marginal tax rate (the rate applied to the last dollar you earn) and your effective tax rate (the average rate across all your income).
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates your federal tax owed using standard progressive brackets and reports your marginal rate, effective tax rate, and the estimated total tax liability. It supports Single, Married Filing Jointly, Married Filing Separately, and Head of Household filing statuses.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your tax bracket is crucial for tax planning and financial management, as different income levels are subjected to various rates. With this calculator, you can gain insights into how much of your income is affected by tax rates, allowing you to make informed financial decisions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Tax Bracket Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter your annual taxable income and select your filing status. The calculator automatically applies progressive rates across bracket ranges and sums the tax owed in each bracket. No button press is required — results update as you edit inputs.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Tax Owed = Σ (Income portion within bracket × Bracket rate)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator displays:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li><strong>Estimated Tax Owed</strong> — total tax calculated across all brackets.</li>
          <li><strong>Marginal Tax Rate</strong> — the rate applied to your last dollar of income.</li>
          <li><strong>Effective Tax Rate</strong> — your total tax divided by your income (average rate).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Tax Bracket Calculations</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="mb-2"><strong>Example 1 — Single, $75,000 income</strong></p>
          <p className="text-gray-700 mb-2">This places part of your income in the 22% bracket. You will pay lower rates on the portions of income that fall into the 10% and 12% brackets, and 22% on income within that band. The calculator shows the total estimated tax and effective rate, providing clarity on your tax liabilities.</p>

          <p className="mb-0 text-sm text-gray-500">Try adjusting the income to see how marginal and effective rates change.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Tax Brackets</h2>

        <div>
          <h3 className="text-xl font-semibold mb-2">Is this my exact tax bill?</h3>
          <p className="mb-4 text-lg leading-7">No. This calculator provides an estimate based on progressive federal tax brackets and does not account for deductions, credits, state/local taxes, additional taxes (e.g., self-employment tax), or other adjustments. For exact liability consult a tax professional or your tax software.</p>

          <h3 className="text-xl font-semibold mb-2">What's the difference between marginal and effective tax rate?</h3>
          <p className="mb-4 text-lg leading-7">Your marginal tax rate is the rate applied to the last dollar you earn. Your effective tax rate is the average rate you pay across your entire taxable income (total tax divided by total income).</p>

          <h3 className="text-xl font-semibold mb-2">Can I use this for state taxes?</h3>
          <p className="mb-4 text-lg leading-7">No. This calculator only estimates federal tax based on a simplified bracket model. State tax systems vary widely and may require separate calculations.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Helpful Tips for Using the Tax Bracket Calculator</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Use the slider or input to experiment with different incomes and immediately see the impact on your effective and marginal rates.</li>
          <li>Remember that deductions, credits, and retirement contributions can significantly change taxable income and liability.</li>
          <li>For complex tax situations, consult a CPA or tax advisor.</li>
          <li>Keep track of changes in tax laws or brackets, as these can affect your calculations from year to year.</li>
        </ul>
      </section>
    </article>
  );
}
