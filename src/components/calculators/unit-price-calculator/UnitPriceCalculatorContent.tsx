import React from 'react';

export default function UnitPriceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Unit Price Calculator</h1>
        <meta name="description" content="Calculate the best unit price for your products and make informed shopping decisions with our easy-to-use Unit Price Calculator." />
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Unit Price?</h2>
        <p className="mb-4 text-lg leading-7">
          Unit price is the cost per standard unit of measure (for example, price per kilogram or per pound). It's a simple but powerful way to compare the value of different product sizes and packaging so you can determine which option gives you the best price for the amount you get.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator converts the product quantity into kilograms and reports the cost per kilogram, as well as equivalent prices per pound and per ounce. Use it to compare bulk sizes, different brands, or products sold in different unit systems. Understanding unit prices can help you save money and ensure you are making the best spending choices.
        </p>
        <p className="mb-4 text-lg leading-7">
          Knowing how to calculate unit prices is essential for smart shopping, especially in grocery stores where various packaging and sizes compete for consumer attention. By evaluating products on a per-unit basis, you gain insights that go beyond simple price tags.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Unit Price Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the total price of the product (for example, 5.99).</li>
          <li>Enter the quantity shown on the package (for example, 2).</li>
          <li>Select the unit of that quantity (kilograms, pounds, or ounces).</li>
        </ol>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Price per kg = Price ÷ (Quantity × Unit to kg conversion)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          If a 2 kg bag costs $5.99, the price per kilogram is $5.99 ÷ (2 × 1) = $2.995 per kg. The calculator rounds and displays the result along with equivalent prices per pound and ounce for easier comparison.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Why convert everything to kilograms?</h3>
            <p className="text-lg leading-7">
              Using a consistent base unit (kilograms) lets you reliably compare products sold in different units. Kilograms are a common metric base; we then compute equivalent prices per pound and ounce for convenience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if the package shows grams or milliliters?</h3>
            <p className="text-lg leading-7">
              This calculator supports kilograms, pounds, and ounces directly. For grams, convert to kilograms by dividing by 1000 (e.g., 500 g = 0.5 kg). For liquids, convert milliliters to liters and then to kilograms if you know the product density; otherwise compare volume-based unit prices (price per liter) instead.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use this to compare different unit systems?</h3>
            <p className="text-lg leading-7">
              Yes. Enter the price and quantity as shown on each product label and the unit, then compare the calculated price per kilogram (or the per-pound/per-ounce equivalents) to determine the better deal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How does this calculator help with budgeting?</h3>
            <p className="text-lg leading-7">
              By understanding unit prices, you can create a more accurate budget for your grocery shopping. It helps you weigh the cost-effectiveness of various options, leading to better financial decisions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Smart Shopping</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Always compare unit prices rather than package prices.</li>
          <li>Watch out for different serving sizes or unusable portions (e.g., bones in meat) when comparing.</li>
          <li>Consider promotions and bundle deals — sometimes a larger package isn't the best per-unit value after discounts.</li>
          <li>Keep an eye on seasonal sales for better pricing on bulk items.</li>
          <li>Calculate the unit price of brand-name and private-label products to see which offers the best value.</li>
        </ul>
      </section>
    </article>
  );
}
