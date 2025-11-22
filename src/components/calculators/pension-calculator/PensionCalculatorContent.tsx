import React from 'react';

export default function PensionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pension Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Estimate your annual pension benefit based on your years of service, final average salary, and the pension multiplier (accrual rate per year). This calculator helps you understand your expected retirement income and the replacement rate compared to your final salary. Our Pension Calculator is a valuable tool that empowers individuals to plan a secure financial future.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you are nearing retirement or just starting your career, understanding pension benefits is crucial for effective retirement planning. With this calculator, you can gain insights into how different factors contribute to your retirement income and make informed decisions for your financial well-being.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How the Pension Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          The pension is estimated using a simple accrual formula commonly used by defined benefit plans:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Annual Pension = Years of Service × (Pension Multiplier ÷ 100) × Final Average Salary
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The <strong>pension multiplier</strong> (also called the accrual rate) is expressed as a percentage of final average salary earned per year of service. For example, a 2% multiplier means you earn 2% of your final average salary for each year of service. Understanding this multiplier is essential to predicting your retirement benefits accurately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Example Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have 30 years of service, a final average salary of $80,000, and a pension multiplier of 2%. Here's how you can estimate your pension:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Annual Pension = 30 × (2 ÷ 100) × $80,000 = $48,000 per year
          </p>
          <p className="mt-2 text-base text-gray-700">
            Replacement Rate = $48,000 ÷ $80,000 = 60%
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">
          This means you can expect to receive 60% of your final salary as retirement income, which is an important indicator of how well your pension will support your lifestyle in retirement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Using the Calculator Effectively</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enter your total years of service (whole years are typical).</li>
          <li>Enter your final average salary (annualized) used for pension calculations.</li>
          <li>Enter the pension multiplier (accrual rate) as a percentage per year — common values are 1%–2.5% depending on the plan.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Additionally, adjust your inputs to see how changes in service years or final salaries affect your retirement benefits, allowing for better financial decisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Pensions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Is this an exact benefit calculation?</h3>
            <p className="text-base text-gray-700">This calculator provides an estimate based on a simple accrual formula. Actual benefit calculations may consider additional factors such as benefit caps, early retirement reductions, cost-of-living adjustments, final average salary definitions, and plan-specific rules. Always consult your plan administrator for precise details.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What is a pension multiplier?</h3>
            <p className="text-base text-gray-700">The pension multiplier (accrual rate) is the percentage of your final average salary that you earn for each year of service. For example, a 2% multiplier yields 2% of final salary per year of service. Understanding this is key in planning your retirement strategy.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How can I improve my replacement rate?</h3>
            <p className="text-base text-gray-700">Increasing years of service, improving the final average salary (through promotions or salary increases), and plan design (higher multipliers) can increase your replacement rate. Consider supplemental savings like 401(k) or IRAs to boost retirement income. Diversifying your retirement savings strategy can significantly enhance your financial stability in your golden years.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Additional Notes</h2>
        <p className="text-base text-gray-700">This tool is for educational and planning purposes. Always consult your plan administrator or a financial professional for precise benefit calculations and personalized retirement planning. Taking the time to understand your retirement options and savings vehicles is essential for a secure financial future.</p>
      </section>
    </article>
  );
}
