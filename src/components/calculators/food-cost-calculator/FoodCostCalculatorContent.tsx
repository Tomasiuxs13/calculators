import React from 'react';

export default function FoodCostCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Food Cost Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Food Cost Calculator to determine how much each serving costs and what profit you make per serving. This tool helps chefs, caterers, food truck owners, and restaurant managers price menu items accurately by calculating cost-per-serving, profit per serving, and profit margins.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter the total ingredient cost for a recipe, the number of servings the recipe yields, and the selling price per serving. The calculator will automatically compute the cost per serving and profit metrics, making it an essential tool for any food business.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your food costs is crucial for maintaining a profitable operation. By accurately calculating your costs, you can set competitive prices while ensuring that your business remains profitable.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Food Cost Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator performs these steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Take the total ingredient cost (sum of all ingredient prices).</li>
          <li>Divide by the number of servings to get cost per serving.</li>
          <li>Subtract cost per serving from selling price to get profit per serving.</li>
          <li>Calculate profit margin as (profit / selling price) × 100%.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Cost per Serving = Total Ingredient Cost / Number of Servings
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If your total ingredient cost is <strong>$20</strong> and the recipe yields <strong> 4</strong> servings, the cost per serving is <strong>$5.00</strong>. If you price each serving at <strong>$8.00</strong>, your profit per serving is <strong>$3.00</strong>, and the profit margin is <strong> 37.50%</strong>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Using the Calculator Effectively</h2>
        <p className="mb-4 text-lg leading-7">1) Enter the total cost of ingredients for the recipe. 2) Enter how many servings the recipe makes. 3) Enter your intended selling price per serving. Results are calculated automatically — no button press required. Toggle charts to visualize cost vs price vs profit and download a PDF summary for record-keeping.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Food Cost</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">What should I include in 'Total Ingredient Cost'?</h3>
          <p className="text-lg leading-7">
            Include the cost of all ingredients used to make the recipe (pro-rated amounts if you buy in bulk). Do not include labor, utilities, packaging, or overhead unless you want to factor them into your per-serving cost.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Can I use this for catering or batch cooking?</h3>
          <p className="text-lg leading-7">
            Yes — simply enter the total ingredient cost for the entire batch and the total number of servings produced. The calculator will provide accurate per-serving metrics, making it versatile for all types of food preparation.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">How do I improve my profit margin?</h3>
          <p className="text-lg leading-7">
            Options include reducing ingredient costs through bulk purchasing or supplier negotiation, increasing menu prices, optimizing portion sizes, or improving operational efficiency to reduce waste. Consider reviewing your recipes periodically to ensure you’re using the most cost-effective ingredients.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Why is understanding food cost important?</h3>
          <p className="text-lg leading-7">
            Understanding food costs is essential for anyone running a food business. It helps you set menu prices that not only cover costs but also ensure profitability. Regular monitoring of ingredient prices and portion sizes can lead to better price control and financial management.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Pricing of Menu Items</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Always calculate ingredient usage by weight/volume when possible to prorate bulk purchases.</li>
          <li>Regularly update ingredient costs to reflect market price changes.</li>
          <li>Consider including overhead and labor in a more advanced pricing model.</li>
          <li>Evaluate competitor prices to remain attractive while ensuring profitability.</li>
          <li>Experiment with different serving sizes to find the optimal balance between value offered and profit made.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Food Cost Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Food Cost Calculator can be used in various scenarios, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li><strong>Restaurants:</strong> Ensure that all menu items are priced correctly to meet financial targets.</li>
          <li><strong>Catering Companies:</strong> Quickly calculate the costs of large orders and maintain budgetary constraints.</li>
          <li><strong>Food Trucks:</strong> Optimize pricing strategies based on operational costs and ingredient sourcing.</li>
          <li><strong>Food Service Training:</strong> Equip aspiring chefs and managers with the knowledge to accurately price dishes.</li>
        </ul>
      </section>
    </article>
  );
}
