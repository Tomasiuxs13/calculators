import React from 'react';

export default function GrowthRateCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Population Growth Rate Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes population growth rates from an initial population (N0) to a final population (Nt) across a defined time period (t). It provides both the continuous growth rate (r), commonly used in ecological and theoretical population models, and the compound growth rate (CAGR), which represents the equivalent discrete growth per period.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this tool to estimate intrinsic growth rates, compare population dynamics, or project population trends. Enter positive values for initial and final populations and a positive time interval to see results instantly.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding growth rates is critical in various fields, including biology, economics, and environmental science. By utilizing this calculator, users can better understand how populations change over time and the factors that may influence these changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Growth Rate Formulas</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Continuous growth rate: r = (ln(Nt / N0)) / t</code>
          <code className="text-base font-mono text-gray-900 block mt-2">Compound annual growth rate (CAGR): CAGR = (Nt / N0)^(1 / t) - 1</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Continuous growth rate (r) assumes exponential change and is appropriate for models using differential equations (e.g., dN/dt = rN). CAGR gives the constant proportional growth per time interval that would result in the same overall change.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation of Growth Rate</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a population grows from 1,000 to 1,500 over 10 years. The continuous growth rate is calculated as follows:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">r = ln(1500 / 1000) / 10 = ln(1.5) / 10 ≈ 0.04055 (per year)</p>
          <p className="text-base text-gray-700 mt-2">Which is about 4.055% per year (continuous).</p>
          <p className="text-base text-gray-700 mt-2">CAGR = (1.5)^(1/10) - 1 ≈ 0.04138 ≈ 4.138% per year (discrete).</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Use Each Growth Rate Metric?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Continuous rate (r):</strong> Use when modeling continuous-time processes, such as differential equation models in ecology and epidemiology.
          </li>
          <li>
            <strong>CAGR:</strong> Use when you want the equivalent constant growth per discrete time step (e.g., per year) that results in the observed change.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases of Growth Rate Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is beneficial for researchers, students, and professionals across various domains. Biologists can use it to study population dynamics of species, while economists might apply it to understand market trends or growth in the workforce. Moreover, environmentalists can forecast how changes in habitat or resource availability impact species populations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ) about Growth Rate</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What if initial population is zero?</h3>
            <p className="text-base text-gray-700">The formulas require positive initial and final population values. If N0 is zero, the continuous rate and CAGR are undefined. Use alternative modeling approaches or add a small positive offset if appropriate for your study.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can time be fractional?</h3>
            <p className="text-base text-gray-700">Yes. Time can be any positive real number (e.g., years, months, days) as long as units are consistent across the inputs.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How do I interpret negative growth?</h3>
            <p className="text-base text-gray-700">If the final population is smaller than the initial population, both r and CAGR will be negative, indicating a declining population over the time period.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Notes & References on Growth Rates</h2>
        <p className="text-base text-gray-700">These calculations are standard in population ecology and demography. For continuous-time modeling, consider additional factors such as carrying capacity, density dependence, and stochasticity when applying rates to real-world systems. Further exploration into growth rate modeling can enhance understanding and facilitate better decision-making.</p>
      </section>
    </article>
  );
}
