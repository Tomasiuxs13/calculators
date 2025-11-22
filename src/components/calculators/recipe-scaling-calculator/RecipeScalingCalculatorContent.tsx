import React from 'react';

export default function RecipeScalingCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Recipe Scaling?</h2>
        <p className="mb-4 text-lg leading-7">
          Recipe scaling is the process of increasing or decreasing ingredient quantities so that a recipe produces the desired number of servings. Whether you're halving a recipe for two people or doubling it for a crowd, accurate scaling ensures consistent flavor and texture.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator helps you scale a single ingredient based on the ratio of new servings to original servings. It supports common kitchen volume units: cups, tablespoons (tbsp), and teaspoons (tsp).
        </p>
        <p className="mb-4 text-lg leading-7">
          Scaling recipes can be particularly useful when you're cooking for a special occasion or meal prep. By using the recipe scaling calculator, you can easily adjust your ingredient quantities to match your needs without compromising on taste.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator first converts the provided ingredient amount into a base unit (teaspoons) to maintain precision across units. It then multiplies that amount by the scale factor (new servings ÷ original servings) and converts the result back to the selected unit.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Scaled Amount = Ingredient Amount × (New Servings / Original Servings)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This method of calculation ensures that you always have the right amounts, whether you’re cooking pasta for a quick dinner or preparing a detailed feast for your friends and family.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Recipe Scaling</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a recipe serves 4 and calls for 2 cups of flour. You want to make enough for 8 servings. The scale factor is 8 ÷ 4 = 2, so you'll need 2 × 2 = 4 cups of flour.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example calculation:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Original Servings: 4</li>
            <li>New Servings: 8</li>
            <li>Ingredient Amount: 2 cups</li>
            <li>Scaled Amount: 2 × (8 / 4) = 4 cups</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Scaling Recipes Effectively</h2>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>For very small quantities (like spices), prefer measuring by weight or by teaspoons to maintain accuracy.</li>
          <li>When scaling recipes significantly (more than double or less than half), some adjustments to cooking time or seasoning may be necessary.</li>
          <li>For ingredients that don't scale linearly (like leavening agents), start with proportional scaling and adjust to taste or texture.</li>
          <li>Be mindful of the cooking method as well, as larger batches may require different techniques to ensure even cooking.</li>
          <li>Always taste as you go! Scaling recipes can sometimes alter flavor intensity, so adjust seasoning accordingly.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Recipe Scaling</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I change units while scaling?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes. This tool converts your input to a base unit (teaspoons) internally, scales the amount, and converts it back to the unit you've chosen to display.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is the calculator precise for baking?</h3>
            <p className="text-lg text-gray-700 mt-2">For baking, weight-based measurements (grams/ounces) are more reliable. This calculator is great for quick volume-based scaling; for best results in baking, convert to weight when possible.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if my original servings is zero?</h3>
            <p className="text-lg text-gray-700 mt-2">Original servings must be greater than zero for scaling. The calculator validates inputs and will not show results for invalid values.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use the scaling calculator for any type of recipe?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes! The scaling calculator can be applied to a wide variety of recipes, from baked goods to savory meals. Just input your ingredient amounts and let the calculator do the work.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I ensure consistency when scaling?</h3>
            <p className="text-lg text-gray-700 mt-2">To ensure consistency, always measure ingredients accurately and keep a record of any changes made to the original recipe. This will help replicate the results in future batches.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
