import React from 'react';

export default function ExchangeRateCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is an Exchange Rate?</h2>
        <p className="mb-4 text-lg leading-7">
          An exchange rate is the value that expresses how much one currency is worth in terms of another. Exchange rates are used to convert amounts from one currency to another when traveling, trading, or transferring money internationally. Understanding exchange rates is crucial for effective financial planning and budgeting in a globalized economy.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator supports USD (US Dollar), EUR (Euro), and GBP (British Pound). You can use the default market rates or provide your own custom exchange rate if you have a specific quote from a bank, broker, or payment provider. Knowing the current exchange rate can help you make informed decisions about currency conversion.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator converts currencies by first converting the source currency to a base unit (USD) and then converting that amount into the target currency. This two-step approach helps maintain a consistent conversion base when handling multiple currencies. It simplifies the user’s experience and makes calculations straightforward.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            // Default conversion (via USD):
            Amount_in_USD = Amount / (1 USD in FROM)
            Converted = Amount_in_USD * (1 USD in TO)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          You can also enter a custom exchange rate directly (From → To). When a custom rate is provided, it overrides the default computed rate and the calculator shows the implied fee compared to the default market rate. This feature allows users flexibility in their calculations and helps them account for variations in rates offered by financial institutions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you want to convert 1,000 USD to EUR. If the default market rate used by this tool is 0.85 EUR per USD, the calculation is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Converted = 1,000 × 0.85 = 850 EUR</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          If your bank quotes a different rate (for example 0.83), enter it in the Exchange Rate field to see the converted amount and the implied fee percentage compared to the default rate. Always double-check rates before making large transactions for better financial accuracy.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Exchange Rate Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This exchange rate calculator can be beneficial in various scenarios including:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4">
          <li>Travelers looking to convert their currency at the best possible rates to avoid hidden fees.</li>
          <li>Online shoppers purchasing items from international websites to understand the total cost in their currency.</li>
          <li>Businesses dealing in international transactions to calculate prices accurately in different currencies.</li>
          <li>Investors considering foreign stocks and requiring currency conversion for accurate valuations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can I use my own exchange rate?</h3>
            <p className="text-lg text-gray-700">Yes. Enter a custom rate in the Exchange Rate field to override the default rate. The calculator will show the converted amount and the implied fee relative to the default market rate.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">What currencies are supported?</h3>
            <p className="text-lg text-gray-700">This tool supports USD, EUR, and GBP. The design follows a base-unit approach (USD) to compute default rates between any pair.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Does this include transfer fees?</h3>
            <p className="text-lg text-gray-700">No. This calculator shows the conversion result and an implied fee if your provided rate differs from the default rate. It does not include additional bank or transfer fees. To include fees, adjust the exchange rate accordingly or calculate fees separately and subtract them from the converted amount.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Conversions</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li>Use the latest market rate from a reliable FX provider for the most accurate conversions.</li>
          <li>Remember that banks and brokers may add margins or additional fees — compare the effective rate to the market rate to estimate those costs.</li>
          <li>For large transfers, even small differences in the rate can have a significant impact — always check multiple providers.</li>
          <li>Stay updated on market trends and potential fluctuations, as currency values can change frequently within short periods.</li>
          <li>Consider using mobile apps or websites that track exchange rates in real-time for the best conversion estimates.</li>
        </ul>
      </section>
    </article>
  );
}
