import React from 'react';

export default function StockReturnCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Stock Return Calculator</h1>
        <p className="mb-4 text-lg">
          Quickly calculate your stock investment returns including both capital gains and dividends. This calculator helps investors understand the absolute dollar return and the percentage return relative to the initial investment.
        </p>
        <p className="mb-4 text-lg">
          Enter the purchase price per share, current price per share, number of shares you hold, and the total dividends you have received to get an instant breakdown of results. Results update automatically as you change inputs. This tool is perfect for both novice and experienced investors aiming to track their stock return effectively.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How the Stock Return Calculator Works</h2>
        <p className="mb-4 text-lg">
          The calculator first computes the total amount you invested by multiplying the purchase price by the number of shares. It then calculates capital gains as the difference between the current and purchase prices multiplied by shares. Finally, it adds any dividends you received to compute the total absolute return and converts that to a percentage of your initial investment.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Investment = Purchase Price × Number of Shares
            {'\n'}Capital Gain = (Current Price − Purchase Price) × Number of Shares
            {'\n'}Total Return (Absolute) = Capital Gain + Dividends
            {'\n'}Total Return (%) = (Total Return / Total Investment) × 100
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Example of Stock Return Calculation</h2>
        <p className="mb-4 text-lg">
          Suppose you bought 100 shares at $100 each (total investment $10,000). The current price is $120 and you received $500 in dividends. The capital gain is (120 − 100) × 100 = $2,000. Adding dividends gives a total return of $2,500, which is 25% of your initial $10,000 investment.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Purchase Price: $100</p>
          <p className="text-base text-gray-700">Current Price: $120</p>
          <p className="text-base text-gray-700">Shares: 100</p>
          <p className="text-base text-gray-700">Dividends: $500</p>
          <p className="mt-3 text-base font-semibold text-gray-800">Result: Total Return = $2,500 (25% return)</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Stock Returns</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Does this calculator account for taxes?</h3>
            <p className="text-base text-gray-700">No. This calculator shows pre-tax returns. Taxes on dividends and capital gains can significantly affect net returns, so consult a tax professional for post-tax calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">What about fees or commissions?</h3>
            <p className="text-base text-gray-700">This tool does not account for trading fees, commissions, or other transaction costs. Subtract those costs from the total return if you want a more accurate net return.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Can I calculate annualized returns?</h3>
            <p className="text-base text-gray-700">This calculator provides absolute and percentage returns. For annualized returns (CAGR), you need the holding period. Consider using a CAGR calculator if you know the investment duration.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Additional Tips for Investors</h2>
        <p className="mb-4 text-lg">
          Understanding how to effectively calculate your stock returns can significantly impact your investment strategies. Here are a few tips:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Include dividends when evaluating long-term returns — they can be a substantial portion of total return.</li>
          <li>Compare your investment returns to benchmarks like the S&P 500 for context and performance analysis.</li>
          <li>Consider factoring in taxes, fees, and inflation to get a realistic estimate of your real returns over time.</li>
          <li>Regularly review your portfolio to ensure your investments align with your financial goals.</li>
          <li>Utilize various calculators and tools available to enhance your investment decision-making process.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Stock Return Calculator</h2>
        <p className="mb-4 text-lg">
          This stock return calculator can be beneficial for a variety of users, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Individual investors tracking personal stock investments.</li>
          <li>Finance professionals and analysts evaluating stock performance.</li>
          <li>Students learning about investment strategies and financial calculations.</li>
          <li>Financial advisors providing clients with insights into returns on their investments.</li>
        </ul>
      </section>
    </article>
  );
}
