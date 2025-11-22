import React from 'react';

export default function CostOfLivingCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Cost of Living Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Cost of Living Calculator to compare expenses between two cities and estimate the equivalent salary you'd need in a target city to maintain your current standard of living. This tool uses cost-of-living indices to adjust salaries proportionally. Whether you are considering a move across the country or just curious about how different cities stack up financially, this calculator provides valuable insights.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the cost of living is crucial when negotiating job offers. It can help you make informed decisions regarding relocation and compensation. With our cost of living calculator, you can simplify this complex process and find the right salary to maintain your lifestyle.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Cost of Living Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator relies on cost-of-living indices. A city index represents how expensive a city is relative to a base (New York = 100). To find the equivalent salary in the target city, we scale your current salary by the ratio of the target city's index to your current city's index. This method ensures that your financial needs are accurately calculated, helping you maintain the same purchasing power.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Adjusted Salary = Current Salary × (Target City Index / Current City Index)</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If you earn $75,000 in New York (index 100) and want to move to Los Angeles (index 92), you'd need approximately:
          </p>
          <p className="mt-2 font-mono text-gray-900">$75,000 × (92 / 100) = $69,000</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Inputs for the Calculator</h2>
        <ul className="list-disc pl-6">
          <li><strong>Current City</strong> — The city where you currently live (default: New York).</li>
          <li><strong>Target City</strong> — The city you want to compare to (default: Los Angeles).</li>
          <li><strong>Current Salary</strong> — Your current annual salary (default: 75,000).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Cost Of Living Changes</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg"><strong>Moving from Chicago to San Francisco:</strong></p>
            <p className="text-gray-700">If you earn $60,000 in Chicago (index 78), the equivalent in San Francisco (index 120) is:</p>
            <p className="mt-2 font-mono">$60,000 × (120 / 78) ≈ $92,308</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg"><strong>Moving from Austin to Miami:</strong></p>
            <p className="text-gray-700">If you earn $80,000 in Austin (index 80), the equivalent in Miami (index 85) is:</p>
            <p className="mt-2 font-mono">$80,000 × (85 / 80) = $85,000</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about the Cost of Living Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Are these definitive salary recommendations?</h3>
            <p className="text-gray-700">No. These are estimates based on cost-of-living indices and don't account for taxes, benefits, housing quality, personal spending habits, or neighborhood differences. Use this as a directional guide when planning moves or salary negotiations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if my city isn't listed?</h3>
            <p className="text-gray-700">The calculator includes common U.S. cities and falls back to a neutral index if a city isn't recognized. For precise planning, use local cost data or specialized cost-of-living services.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I download the results?</h3>
            <p className="text-gray-700">Yes. Use the PDF download option in the calculator to save your inputs and results for reference.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Cost of Living Calculator</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Compare net salary after taxes to get a clearer picture of your financial situation.</li>
          <li>Consider housing costs separately—rent and mortgage differences can dominate cost-of-living changes.</li>
          <li>Factor in local benefits, commute times, and lifestyle differences when making decisions.</li>
          <li>Keep in mind that individual circumstances, such as family size and personal obligations, can greatly affect your cost of living.</li>
          <li>Regularly update your inputs as cost-of-living indices may change over time, reflecting new economic conditions.</li>
        </ul>
      </section>
    </article>
  );
}
