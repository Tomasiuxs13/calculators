import React from 'react';

export default function SocialSecurityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta
        name="description"
        content="Use our Social Security Calculator to estimate potential benefits and plan your retirement effectively."
      />
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">About the Social Security Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This Social Security Calculator provides a simple, fast estimate of potential Social Security benefits based on your current age, planned retirement age, and average annual income. It uses a simplified replacement-rate model to give you an indicative monthly and annual benefit to help with retirement planning.
        </p>
        <p className="mb-4 text-lg leading-7">
          Note: This tool is an approximation and does not replace official Social Security statements or advice from a financial professional. Actual benefits depend on lifetime earnings, indexed wages, work history, and official Social Security rules.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your Social Security benefits is essential for comprehensive retirement planning. By using this calculator, you can make informed decisions about when to retire and how much income to expect from Social Security, which may significantly influence your savings strategy and overall financial security.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Social Security Estimate Works</h2>
        <p className="mb-4 text-lg leading-7">
          Our simplified approach uses a base replacement rate (40% of your average annual income) and adjusts that base depending on whether you retire before or after the full retirement age (FRA). For the purposes of this calculator, FRA is assumed to be 67.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Estimated Benefit = (Average Annual Income × 0.40) × Adjustment Factor
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Adjustment rules in this estimator:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Retire before 67: reduce ~6% per year earlier.</li>
          <li>Retire after 67: increase ~8% per year delayed.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Utilizing this calculator helps you visualize different retirement scenarios, enabling you to adjust your plans proactively to meet your retirement goals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example Scenarios</h2>
        <div className="mb-4 text-lg leading-7">
          <strong>Example 1:</strong> Age 35, retire at 67, average income $75,000 → The calculator estimates ~40% replacement of income adjusted by age. This gives a quick view of monthly expected benefit.
        </div>
        <div className="mb-4 text-lg leading-7">
          <strong>Example 2:</strong> If you choose to retire at 62, the estimate will be reduced by approximately 30% (5 years × 6%), reflecting early retirement reductions in this simplified model.
        </div>
        <p className="mb-4 text-lg leading-7">
          By exploring various examples, users can better understand how different choices influence their projected Social Security benefits, allowing for more strategic planning.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Social Security</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Is this an official Social Security estimate?</h3>
          <p className="text-lg leading-7">No. This is a simplified estimator for planning purposes. For an official estimate, check your Social Security statement at the SSA website or contact a qualified advisor.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Why does the calculator use a 40% base rate?</h3>
          <p className="text-lg leading-7">The 40% replacement rate is a simplified proxy to provide quick estimates across a wide range of incomes. Actual replacement rates vary based on lifetime earnings, bend points, and indexing rules used by Social Security.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">How should I use this estimate?</h3>
          <p className="text-lg leading-7">Use this tool for high-level planning and to compare scenarios (e.g., retiring earlier vs. later). Combine these results with other retirement income sources and savings goals to build a complete retirement plan.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">What factors could affect my Social Security benefits?</h3>
          <p className="text-lg leading-7">Factors such as changes in income, working additional years, and legislative updates can influence the benefits you may receive. Staying informed about these changes is crucial to ensure accurate planning.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Next Steps for Social Security Planning</h2>
        <p className="mb-4 text-lg leading-7">
          Try different retirement ages and income assumptions to understand how timing and earnings affect your estimated benefits. Download the PDF to save or share your scenario. Engage with financial professionals to ensure your retirement strategy is aligned with your goals and circumstances.
        </p>
      </section>
    </article>
  );
}
