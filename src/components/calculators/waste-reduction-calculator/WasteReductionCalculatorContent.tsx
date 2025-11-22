import React from 'react';

export default function WasteReductionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Waste Reduction Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Discover how effective waste reduction strategies can significantly minimize your environmental impact with our comprehensive Waste Reduction Calculator.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Waste Reduction?</h2>
        <p className="mb-4 text-lg leading-7">
          Waste reduction refers to strategies and practices that reduce the amount of waste produced by individuals, households, businesses, and communities. By reducing the amount of waste generated, you lower disposal costs, decrease environmental impact, and conserve resources. Implementing waste reduction techniques not only helps the environment but also encourages sustainable living.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator helps estimate the weekly and annual waste savings when you reduce your current weekly waste by a specified percentage. Enter your average weekly waste (in kg) and the percentage reduction to see immediate results. By understanding the importance of waste management, you can make informed decisions for a greener future.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Waste Reduction Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator first computes the reduced weekly waste and then derives the weekly and annual savings. It uses the simple formula below to determine the reduced amount, highlighting the effectiveness of utilizing our Waste Reduction Calculator.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Reduced Waste = Current Waste × (1 - Reduction Percentage / 100)
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Weekly Savings = Current Waste - Reduced Waste
          </p>
          <p className="text-base text-gray-700 mt-2">
            Annual Savings = Weekly Savings × 52
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Waste Reduction</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose your household generates 10 kg of waste per week and you reduce it by 30%. Using the Waste Reduction Calculator, you can visualize your impact.
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Reduced Waste = 10 × (1 - 30 / 100) = 7 kg per week</li>
          <li>Weekly Savings = 10 - 7 = 3 kg per week</li>
          <li>Annual Savings = 3 × 52 = 156 kg per year</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips to Reduce Waste Effectively</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Choose reusable items over single-use plastics.</li>
          <li>Compost organic waste to reduce landfill contributions.</li>
          <li>Buy products with minimal packaging or in bulk.</li>
          <li>Repair and repurpose items instead of discarding them.</li>
          <li>Consider digital alternatives to reduce paper waste.</li>
          <li>Educate others on the importance of waste reduction.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Waste Reduction Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is suitable for various applications, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Households assessing their weekly waste management practices.</li>
          <li>Businesses aiming to measure and reduce their environmental footprint.</li>
          <li>Schools and educational organizations teaching sustainability practices.</li>
          <li>Community programs focused on waste reduction campaigns.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Waste Reduction</h2>
        <div>
          <h3 className="text-xl font-semibold mt-4">Is the calculation accurate for all households?</h3>
          <p className="mb-2 text-lg text-gray-700">
            The calculator provides an estimate based on the numbers you provide. Actual results will vary depending on habits, recycling options, and local waste management practices.
          </p>

          <h3 className="text-xl font-semibold mt-4">Why multiply weekly savings by 52?</h3>
          <p className="mb-2 text-lg text-gray-700">
            There are 52 weeks in a year, so multiplying weekly savings by 52 gives an estimate of annual savings. This helps individuals visualize their long-term contributions to waste reduction.
          </p>

          <h3 className="text-xl font-semibold mt-4">Can I use this for business waste estimates?</h3>
          <p className="mb-2 text-lg text-gray-700">
            Yes. Enter your average weekly waste for the business to estimate potential reductions. For larger-scale operations, consider additional factors like commercial recycling programs and waste hauling contracts.
          </p>
        </div>
      </section>
    </article>
  );
}
