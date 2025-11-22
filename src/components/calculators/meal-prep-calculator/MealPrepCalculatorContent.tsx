import React from 'react';

export default function MealPrepCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Meal Prep Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Meal Prep Calculator helps you determine how much of each macronutrient (protein, carbohydrates, and fat) you need when preparing multiple servings of a recipe. Provide the number of servings and the grams of each macro per serving, and the calculator will auto-calculate total grams and estimated calories for your entire batch.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is essential for planning meals ahead of time, tracking macros for nutrition goals, and scaling recipes up or down for group meals, enabling you to efficiently manage calorie intake while enjoying delicious dishes.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're a seasoned meal prepper or just getting started, using the Meal Prep Calculator can streamline your cooking process, ensuring you have the right macronutrient ratios for optimal health and performance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator multiplies the per-serving grams for each macronutrient by the number of servings to get total grams. It also estimates calories using standard energy values:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Macro (g) = Per Serving (g) × Number of Servings
            <br />
            Estimated Calories = (Protein_g × 4) + (Carbs_g × 4) + (Fat_g × 9)
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If one serving has 30 g protein, 40 g carbs, and 15 g fat, and you prepare 4 servings:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Total Protein = 30 × 4 = 120 g</li>
            <li>Total Carbs = 40 × 4 = 160 g</li>
            <li>Total Fat = 15 × 4 = 60 g</li>
            <li>Estimated Calories = (120×4) + (160×4) + (60×9) = 480 + 640 + 540 = 1660 kcal</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Meal Prep Calculator</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter the number of servings you plan to prepare.</li>
          <li>Enter grams of protein, carbs, and fat per serving.</li>
          <li>The calculator auto-updates totals and estimated calories—no calculate button needed.</li>
          <li>Use the charts toggle to visualize the macro distribution and download a PDF summary for meal planning records.</li>
          <li>Explore different serving sizes to find the perfect balance for your nutritional needs.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Meal Prep</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Are calorie values exact?</h3>
            <p className="text-base text-gray-700 mt-1">
              Calories here are estimated using standard values (protein 4 kcal/g, carbs 4 kcal/g, fat 9 kcal/g). Actual calories may vary slightly depending on specific ingredients and preparation methods.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use decimals for per-serving macros?</h3>
            <p className="text-base text-gray-700 mt-1">
              Yes. The inputs accept decimal values so you can be precise with nutrition data from food labels or nutrition databases.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I scale down for fewer servings?</h3>
            <p className="text-base text-gray-700 mt-1">
              Absolutely. Enter any positive number of servings (including decimals) to scale your recipe and see updated totals immediately.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is the Meal Prep Calculator suitable for all diets?</h3>
            <p className="text-base text-gray-700 mt-1">
              Yes! The calculator is versatile and can be used to fit various dietary restrictions or preferences—whether you're vegetarian, vegan, keto, or following a balanced diet.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Meal Prepping</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Round totals to convenient packaging sizes when dividing meals into containers.</li>
          <li>Track per-serving macros in a food log to ensure consistency with your nutrition goals.</li>
          <li>Use the PDF export to save batch macros and share with a coach or meal prep service.</li>
          <li>Experiment with different ingredients to keep meals exciting while staying within your macro goals.</li>
          <li>Regularly update your serving sizes as your nutritional needs change over time to maintain balance in your meal plans.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Meal Prep Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Meal Prep Calculator is perfect for a variety of scenarios such as athletes preparing for competitions, busy families wanting to maintain a healthy diet, or individuals tracking macros for weight loss or muscle gain. By using this calculator, you can ensure that your meals meet specific nutritional requirements while saving time on planning and cooking.
        </p>
      </section>
    </article>
  );
}
