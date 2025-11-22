import React from 'react';

export default function DividendCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta
        name="description"
        content="Discover how to calculate your dividend yield and annual income with our easy-to-use Dividend Calculator. Perfect for investors seeking investment insights!"
      />
      <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Dividend Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Dividend Yield?</h2>
        <p className="mb-4 text-lg leading-7">
          Dividend yield is a financial ratio that shows how much a company pays out in dividends each year relative to its share price. It is expressed as a percentage and helps investors evaluate the income-generating potential of a stock relative to its market price. A high dividend yield may indicate a good income investment but can also signal a drop in stock price.
        </p>
        <p className="mb-4 text-lg leading-7">
          The Dividend Calculator quickly computes both the dividend yield and the annual dividend income based on the share price, the annual dividend per share, and the number of shares you own. Understanding these metrics is crucial for making informed investment decisions.
        </p>
        <p className="mb-4 text-lg leading-7">
          Investors often use dividend yield to compare the income generated from different investments. It enables a straightforward way to assess which stocks provide a better return on investment based solely on dividend payouts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          We auto-calculate results as you type—no button clicks required. The formulas used are straightforward and commonly used in finance:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Dividend Yield (%) = (Annual Dividend per Share / Share Price) × 100
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Annual Dividend Income = Annual Dividend per Share × Number of Shares
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator validates inputs and shows results immediately. If the share price is zero or invalid, results will be hidden until valid values are entered. This feature ensures you have accurate data to work with, aligning your expectations with market realities.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Dividend Yield Calculation</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Example 1 — Simple Yield</h3>
          <p className="text-lg">
            If a stock trades at $100 and pays an annual dividend of $3 per share, the dividend yield is (3 / 100) × 100 = 3%. A holding of 100 shares yields an annual income of 3 × 100 = $300. This simple calculation illustrates the direct relationship between dividends and investment return.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Example 2 — Changing Share Count</h3>
          <p className="text-lg">
            With the same share price and dividend per share, increasing the number of shares increases your annual income proportionally, but does not change the percentage yield. For example, acquiring an additional 50 shares at the same price would increase annual income to $450 while keeping the yield constant.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Dividend Yield</h2>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Is dividend yield the same as return?</h4>
            <p className="text-base">
              Not exactly. Dividend yield measures the income component from dividends relative to price. Total return includes price appreciation (or depreciation) plus dividends. Thus, understanding both concepts is vital for a complete view of your investment's performance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">What happens if the share price is 0?</h4>
            <p className="text-base">
              A share price of zero is invalid for computing yield. Our calculator requires a positive share price to compute the dividend yield. Enter a valid market price to see results. This is especially important in volatile markets where prices can fluctuate significantly.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Can I export the results?</h4>
            <p className="text-base">
              Yes — use the PDF download button to generate a printable report containing your inputs and computed results. This feature allows you to keep track of your investment calculations for future reference or share with your financial advisor.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mt-8">Tips for Using the Dividend Calculator</h2>
        <p className="text-base mb-4">
          Use this calculator to quickly compare dividend-paying stocks and to estimate cash flow from dividends based on your share holdings. By utilizing this tool effectively, you can optimize your investment strategy and better manage your portfolio's income potential.
        </p>
        <p className="text-base">
          Remember, while high dividend yields can be attractive, it's essential to consider overall company health, dividend history, and market conditions before making investments. Diversification is key to managing risk in dividend investing.
        </p>
      </section>
    </article>
  );
}
