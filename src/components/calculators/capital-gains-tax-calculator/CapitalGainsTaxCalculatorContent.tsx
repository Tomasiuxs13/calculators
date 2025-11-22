import React from 'react';

export default function CapitalGainsTaxCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Capital Gains Tax Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to estimate capital gains tax on the sale of an investment. Provide the purchase price, sale price, holding period in years, and the applicable capital gains tax rate. This calculator not only computes the capital gain and the tax owed on gains but also provides insight into after-tax proceeds and the annualized return on your investment. Understanding capital gains tax is essential to make informed financial decisions that maximize your earnings.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're an individual investor or managing a portfolio, knowing how capital gains tax affects your returns can significantly impact your overall investment strategy. Thus, using our calculator effectively can aid in your financial planning and tax management.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How Capital Gains Tax Works</h2>
        <p className="mb-4 text-lg leading-7">
          Capital gain is calculated as the difference between the sale price and the purchase price. This tool applies the provided capital gains tax rate to any positive gain and subtracts the tax to provide after-tax proceeds. The holding period is used to compute an annualized return percentage. Understanding the difference between short-term and long-term capital gains is crucial since they may be taxed at different rates depending on local laws.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Capital Gain = Sale Price - Purchase Price
          </code>
          <br />
          <code className="text-base font-mono text-gray-900">
            Tax Owed = max(0, Capital Gain) × (Tax Rate / 100)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Capital Gains Tax Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you bought shares for $10,000 and sold them later for $15,000 after holding them for 2 years. If your capital gains tax rate is 15%, the capital gain is $5,000 and the tax owed is $750. Your after-tax proceeds would be $14,250. This example highlights the importance of calculating your returns after taxes to understand the effective profit from your investment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Capital Gains Tax</h2>
        <div className="prose max-w-none">
          <h3>Do I pay tax on losses?</h3>
          <p>
            This calculator applies tax only to positive gains. Capital losses are not handled here; in practice, losses can offset gains and may be carried forward depending on tax jurisdiction. Understanding how losses affect your capital gains tax obligation can lead to better tax strategies.
          </p>

          <h3>What is a long-term vs short-term capital gain?</h3>
          <p>
            Tax rules vary by country. In some jurisdictions, assets held longer than a threshold (commonly 1 year) are treated as long-term and may have a different tax rate. This calculator uses the single tax rate you provide; adjust it accordingly for short-term or long-term scenarios. Always check local regulations as they can significantly affect tax obligations.
          </p>

          <h3>How is annualized return calculated?</h3>
          <p>
            The annualized return is computed as ((Sale / Purchase)^(1 / Years)) - 1 and expressed as a percentage. It requires a positive purchase price and a holding period greater than zero. This calculation is invaluable for comparing the true performance of your investments across different timeframes.
          </p>

          <h3>Are there exemptions for capital gains tax?</h3>
          <p>
            Some jurisdictions offer exemptions or lower rates for certain types of assets or under specific conditions, such as primary residences. It's vital to understand these allowances as they can significantly affect your tax liabilities.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Important Notes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Always consult a tax professional for accurate tax guidance tailored to your jurisdiction.</li>
          <li>This tool provides estimates and does not consider other tax rules, deductions, or carry-forwards. Be cautious of relying solely on automated tools for tax planning.</li>
          <li>Input values should be non-negative numbers. The calculator updates automatically as you change inputs. This ensures that you have the latest estimates based on the most current data entries.</li>
        </ul>
      </section>
    </article>
  );
}
