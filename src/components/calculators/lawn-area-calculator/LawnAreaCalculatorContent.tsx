import React from 'react';

export default function LawnAreaCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Lawn Area Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly calculate the area of a rectangular lawn to estimate how much seed, sod, or fertilizer you'll need. Enter the length and width in meters — the calculator computes the area in square meters and can convert it to square feet.
        </p>
        <p className="mb-4 text-lg leading-7">
          Knowing the lawn area is essential for any landscaping project. Whether you're planning to seed your lawn, lay sod, or apply fertilizer, accurate measurements can save you time and money. By using our Lawn Area Calculator, you can easily plan your purchases and ensure optimal growth for your grass.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How It Works: Lawn Area Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator multiplies the length by the width to get the total area in square meters (m²). If you choose a different output unit (e.g., square feet), it converts the area from the base unit (m²) to the chosen unit using standard conversion factors.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Area (m²) = Length (m) × Width (m)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Conversion used: 1 m² = 10.7639 ft². The tool calculates the area in m² first (the base unit), then applies the conversion factor if you request square feet. This simple, yet effective formula gives you quick results to help you make informed decisions regarding your lawn care.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation of Lawn Area</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose your lawn is 20 m long and 15 m wide. The area is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">Area = 20 m × 15 m = 300 m²</p>
          <p className="text-base text-gray-700 mt-2">In square feet: 300 × 10.7639 ≈ 3229.17 ft²</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          With this information, you can now easily calculate the amount of sod or seed you need. For example, if you want to seed your lawn, you can find the recommended seed rate per square meter to ensure healthy grass growth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for Lawn Area Calculation</h2>
        <ul className="list-disc ml-5 text-lg">
          <li>Estimate quantity of grass seed (seed rates often given per m² or per 1000 ft²).</li>
          <li>Calculate sod coverage and cost.</li>
          <li>Plan fertilizer application rates based on area.</li>
          <li>Determine how much mulch is needed for garden beds.</li>
          <li>Assessing the size for outdoor landscaping projects.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ)</h2>

        <div>
          <h3 className="text-xl font-medium text-gray-900">Can I use non-rectangular shapes?</h3>
          <p className="mb-4 text-lg leading-7">
            This calculator assumes a rectangular area. For circular lawns, use the formula π × radius². For irregular shapes, divide the area into rectangles and triangles, calculate each area, and sum them. This can provide a more accurate estimate for lawn care.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900">What unit should I use?</h3>
          <p className="mb-4 text-lg leading-7">
            Enter length and width in meters for metric calculations. You can convert the final area to square feet using the output unit selector if needed for buying materials priced in imperial units. This flexibility allows for better planning according to your region's standards.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900">How accurate is the conversion?</h3>
          <p className="mb-4 text-lg leading-7">
            The conversion factor used is 1 m² = 10.7639 ft². Results are rounded to four decimal places for clarity; for ordering materials, round up to account for waste and overlap. This ensures you purchase enough material for your project without any hassle.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Tips for Lawn Care</h2>
        <ul className="list-disc ml-5 text-lg">
          <li>Always add 5–10% extra material for cutting and waste when ordering sod or mulch.</li>
          <li>If your lawn has beds or walkways, subtract those areas for a precise estimate.</li>
          <li>Regularly maintain your lawn by measuring it periodically to adjust for new additions or removals.</li>
          <li>Research local grass types and consider growing a blend for better drought resistance and aesthetics.</li>
        </ul>
      </section>
    </article>
  );
}
