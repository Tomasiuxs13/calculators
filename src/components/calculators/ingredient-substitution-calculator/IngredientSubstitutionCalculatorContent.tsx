import React from 'react';

export default function IngredientSubstitutionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Ingredient Substitution Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Need a quick substitute while cooking? This calculator helps you find common ingredient substitutions and the approximate amounts to use in cups, tablespoons, or teaspoons. It's helpful for adapting recipes when you're missing an ingredient or want a dietary swap.
        </p>
        <p className="mb-4 text-lg leading-7">
          The tool converts your chosen amount to a base unit and applies substitution ratios so you can easily compare the original ingredient with suggested alternatives. Not only does it save you from unnecessary trips to the store, but it also opens up a world of culinary creativity by allowing you to experiment with different ingredients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How It Works: Ingredient Substitution</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the ingredient, the amount, and the unit (cup, tablespoon, or teaspoon). The calculator converts the input to a base unit (teaspoons), applies a substitution ratio for each suggested substitute, and then converts the result back to the selected unit for display. Whether you have run out of a key ingredient or need to accommodate specific dietary requirements, this calculator is designed to streamline your cooking experience.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Input × From Unit Factor) × Substitution Ratio / From Unit Factor
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The substitution ratios are approximate and may need small adjustments depending on the recipe and desired texture or flavor. Please consider your personal taste preferences and the specific cuisine you're working with when applying these substitutions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Examples of Ingredient Substitution</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-lg">Butter → Vegetable Oil</h3>
            <p className="text-sm text-gray-700 mt-2">
              If a recipe calls for 1 cup of butter, using the calculator with <strong>Butter</strong>, <strong> 1</strong> <strong>cup</strong> suggests about <strong> 0.75 cup</strong> of vegetable oil (3/4 the amount). This is perfect for baking or sautéing where fat is necessary for flavor and moisture.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold text-lg">Eggs → Flaxseed Meal + Water</h3>
            <p className="text-sm text-gray-700 mt-2">
              For 1 egg, the calculator suggests about 3 tablespoons of a flaxseed meal and water mixture (1 tbsp flax + 3 tbsp water is a common replacement). Use the <strong>tbsp</strong> unit for clarity and ensure to let the mixture sit for a few minutes to thicken before using it in your recipe.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Tips for Best Results with Ingredient Substitution</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Substitutions are approximate — especially for baked goods where structure and moisture matter. Always check for consistency as you mix.</li>
          <li>When using highly absorbent substitutes (like coconut flour), reduce the amount and increase liquids. Too much can lead to dryness in your dish.</li>
          <li>For egg replacements, binding and leavening may be affected; adjust leavening agents where necessary. Adding baking powder can help achieve the right rise.</li>
          <li>Don't hesitate to experiment! Cooking is an art, and some of the best dishes come from creative substitutions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions About Ingredient Substitution</h2>

        <div>
          <h3 className="font-semibold">Are these substitutions exact?</h3>
          <p className="text-sm text-gray-700 mt-2">No — these are guidelines. Texture, flavor, and chemistry change depending on the recipe. Start with the suggested amounts and adjust as needed based on your results.</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Can I trust volume-based swaps for all recipes?</h3>
          <p className="text-sm text-gray-700 mt-2">Volume swaps are convenient, but weight-based measurements are more accurate. For critical baking, prefer weight measurements when possible to ensure success.</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Why only cup, tbsp, and tsp?</h3>
          <p className="text-sm text-gray-700 mt-2">These units cover most home-cooking scenarios and are easy to convert. If you need weight-based conversions, consider using a scale or a different tool focused on grams and ounces.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Use Cases for Ingredient Substitution</h2>
        <p className="mb-4 text-lg leading-7">
          The ingredient substitution calculator is perfect for various cooking scenarios. Here are a few use cases to consider:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>When you're missing a staple ingredient during meal prep.</li>
          <li>To accommodate dietary restrictions, such as vegan or gluten-free preferences.</li>
          <li>When trying out new recipes that call for uncommon ingredients.</li>
          <li>To reduce allergens in recipes by finding suitable alternatives.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Try It Now</h2>
        <p className="text-lg text-gray-700">Use the calculator to quickly compare substitutes and download a PDF summary of your inputs and results. By utilizing this tool, you'll not only enhance your cooking flexibility but also gain confidence in the kitchen as you make informed ingredient choices.</p>
      </section>
    </article>
  );
}
