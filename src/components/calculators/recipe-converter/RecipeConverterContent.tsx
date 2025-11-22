import React from 'react';

export default function RecipeConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Recipe Converter — Scale Ingredients Easily</h1>
        <p className="mb-4 text-lg leading-7">
          The Recipe Converter helps you scale recipe ingredient amounts when you change serving sizes. It supports common kitchen volume units — cups, tablespoons (tbsp), and teaspoons (tsp) — and provides equivalents so you can measure with whatever tools you have on hand. With this easy-to-use tool, home cooks can prepare dishes for any occasion without the hassle of manual calculations.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter the original number of servings, the desired number of servings, the ingredient amount, and the unit. The calculator will automatically scale the ingredient and display equivalents in cups, tablespoons, and teaspoons. Perfect for those spontaneous dinner invitations or when you're adjusting recipes for larger gatherings, this converter makes recipe scaling straightforward and efficient.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works — The Recipe Converter</h2>
        <p className="mb-4 text-lg leading-7">
          Scaling is performed using a simple ratio:
        </p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Scaled Amount = Ingredient Amount × (New Servings / Original Servings)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For consistent cross-unit conversions, the calculator converts all volumes to a base unit (teaspoons) and then converts back to cups, tablespoons, or teaspoons as needed. This method ensures all calculations are precise, allowing for perfect results every time you adapt a recipe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Quick Examples of Recipe Scaling</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded p-4">
            <p className="text-lg">Example 1: Double a recipe</p>
            <p className="text-sm text-gray-600">Original Servings: 4, New Servings: 8, Ingredient: 2 cups</p>
            <p className="mt-2">Result: 4 cups (equivalent to 64 tbsp or 192 tsp)</p>
          </div>

          <div className="bg-white border rounded p-4">
            <p className="text-lg">Example 2: Halve a recipe</p>
            <p className="text-sm text-gray-600">Original Servings: 6, New Servings: 3, Ingredient: 3 tbsp</p>
            <p className="mt-2">Result: 1.5 tbsp (equivalent to 0.09375 cups or 4.5 tsp)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conversion Reference for Recipe Measurements</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li> 1 cup = 16 tablespoons</li>
          <li> 1 tablespoon = 3 teaspoons</li>
          <li>Therefore, 1 cup = 48 teaspoons</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Scaling of Recipes</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Dry ingredients scale linearly, but some adjustments (like baking powder or salt) may require rounding or slight adjustments for taste.</li>
          <li>When scaling by fractional servings, measure carefully and consider using weight for best accuracy.</li>
          <li>Use the equivalents provided if you don't have the exact measuring tool.</li>
          <li>Consider the nature of the ingredient; liquid ingredients may behave differently than dry ones when scaled.</li>
          <li>Always taste your dish before serving, especially after making adjustments to the ingredient quantities.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Recipe Scaling</h2>
        <div>
          <h3 className="text-xl font-medium mt-4">Can I convert between other units (like milliliters)?</h3>
          <p className="mb-4 text-lg">This converter focuses on common US kitchen volume units (cups, tbsp, tsp). For metric conversions (mL, L), consider using a dedicated volume converter where metric factors are provided. This ensures you're using the correct measurements for your recipes.</p>

          <h3 className="text-xl font-medium mt-4">Does this work for both dry and liquid ingredients?</h3>
          <p className="mb-4 text-lg">Yes — the scaling math is the same for any ingredient measured by volume. For best results with dry ingredients, weighing by grams is recommended. This can help avoid inconsistencies caused by volume measurements, especially with fluffy ingredients like flour.</p>

          <h3 className="text-xl font-medium mt-4">How should I round the results?</h3>
          <p className="mb-4 text-lg">The calculator shows multiple decimal places for precision, but when cooking, round to the nearest practical measurement (e.g., nearest 1/8 tsp or 1/4 tbsp) depending on the ingredient. Rounding helps keep the cooking process user-friendly without sacrificing accuracy.</p>

          <h3 className="text-xl font-medium mt-4">What if I have a recipe that uses weights instead of volume?</h3>
          <p className="mb-4 text-lg">If your recipe lists ingredients by weight, consider converting those weights into volume measurements where possible or use a reliable online conversion tool to help with the transition. Keep in mind that some ingredients may have different weights depending on how they're packed.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Recipe Converter</h2>
        <p className="mb-4 text-lg leading-7">
          The Recipe Converter is a valuable tool for everyone from novice home chefs to seasoned professionals. Here are some common scenarios where using the converter comes in handy:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Adapting family recipes for holiday gatherings or parties where larger portions are required.</li>
          <li>Scaling down recipes for smaller households or meal prep when cooking for one or two.</li>
          <li>Adjusting recipes based on available ingredient quantities, particularly during unexpected grocery shortages.</li>
          <li>Experimenting with new recipes while ensuring the proportion of ingredients maintains the intended flavor profile and texture.</li>
          <li>Helping beginners gain confidence in the kitchen by simplifying the scaling process of recipes they wish to try.</li>
        </ul>
      </section>
    </article>
  );
}
