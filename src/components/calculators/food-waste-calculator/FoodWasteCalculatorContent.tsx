import React from 'react';

export default function FoodWasteCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Food Waste Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Food Waste?</h2>
        <p className="mb-4 text-lg leading-7">
          Food waste refers to edible food that is discarded, spoilt, or otherwise not consumed. Reducing food waste saves money, conserves resources, and reduces greenhouse gas emissions. This calculator helps you quantify wasted food in kilograms, estimate the monetary cost of that waste, and model potential savings under different reduction scenarios. Food waste is not just a personal issue; it contributes significantly to environmental challenges globally.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Food Waste Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the total amount of food purchased in kilograms.</li>
          <li>Enter the amount of food that was wasted in kilograms.</li>
          <li>Enter the average cost per kilogram of the food.</li>
          <li>Choose a reduction scenario to see potential savings (e.g. 50% reduction).</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Wasted (%) = (Food Wasted ÷ Food Purchased) × 100
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator automatically computes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Wasted mass (kg)</li>
          <li>Wasted percentage of food purchased</li>
          <li>Monetary cost of the wasted food</li>
          <li>Potential kg and cost savings for the chosen reduction scenario</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Food Waste Calculations</h2>

        <div className="bg-white border rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Example 1: Household</h3>
          <p className="mb-2">
            If a household purchases 100 kg of groceries per month and wastes 20 kg at an average cost of $5/kg:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Wasted: 20 kg (20%)</li>
            <li>Wasted cost: $100</li>
            <li> 50% reduction savings: $50 and 10 kg saved</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Example 2: Restaurant</h3>
          <p className="mb-2">
            A small restaurant that purchases 1000 kg of food weekly and wastes 150 kg at $3/kg:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Wasted: 150 kg (15%)</li>
            <li>Wasted cost: $450</li>
            <li> 75% reduction savings: $337.50 and 112.5 kg saved</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Food Waste</h2>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Q: Why is it important to calculate food waste?</h4>
          <p className="text-lg leading-7">A: Quantifying food waste helps identify opportunities to reduce costs, improve inventory management, and mitigate environmental impact.</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Q: What should I use for cost per kg?</h4>
          <p className="text-lg leading-7">A: Use an average purchase cost per kilogram that reflects what you paid or the wholesale cost for the food items in question.</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Q: Can this calculator model different reduction strategies?</h4>
          <p className="text-lg leading-7">A: Yes — use the reduction scenario selector to model different levels of waste reduction (25%, 50%, 75%, 100%). The calculator will clearly show kg and cost savings for the selected scenario.</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold">Q: How accurate are the results?</h4>
          <p className="text-lg leading-7">A: Results depend on your inputs' accuracy. For best accuracy, use measured weights and real cost data.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Real-Life Impacts and Use Cases of Reducing Food Waste</h2>
        <p className="mb-4 text-lg leading-7">
          Reducing food waste has far-reaching benefits beyond just saving money.
          From households to restaurants and schools, values can be realized by minimizing waste. 
          For example, a typical family can save a significant amount annually by avoiding food spoilage and leftovers waste.
          Restaurants can enhance their reputation and sustainability metrics, attracting more eco-conscious customers.
          Schools can invest the money saved into more nutritious food options for students. 
          The overall impact is substantial, making food waste reduction crucial in today’s economic and environmental climate.
        </p>
        <p className="mb-4 text-lg leading-7">
          Taking small steps towards managing what we buy and consume can foster a greener planet and a healthier community. Since global food waste is an ongoing problem, using tools like this calculator helps raise awareness and encourages proactive behavior in various sectors of society.
        </p>
      </section>
    </article>
  );
}
