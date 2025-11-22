import React from 'react';

export default function NutritionLabelCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>Nutrition Label Calculator</h1>
        <p className='mb-4 text-lg leading-7'>
          Use this Nutrition Label Calculator to quickly compute nutrition facts per serving. Enter the total calories and macronutrient grams for the entire recipe or product, then specify the number of servings. The calculator will display calories, grams, and calorie contribution from each macronutrient per serving.
        </p>
        <p className='mb-4 text-lg leading-7'>
          This tool is useful for recipe development, meal planning, and creating nutrition labels for home-cooked or manufactured foods. With more people focusing on their dietary intake, this calculator helps ensure that meals align with nutritional goals.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>How It Works</h2>
        <p className='mb-4 text-lg leading-7'>
          The calculator divides the total values by the number of servings to produce per-serving values. It also computes the calories contributed by each macronutrient using the standard conversion factors:
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Protein: 4 kcal/g | Carbohydrates: 4 kcal/g | Fat: 9 kcal/g
          </code>
        </div>

        <p className='mb-4 text-lg leading-7'>
          If the provided total calories differ from the sum of calories from macronutrients, the calculator uses the provided total calories per serving as the percentage base for calculating percent calories from each macro. This mirrors common nutrition label conventions where the total calories may be determined experimentally or rounded.
        </p>
        <p className='text-lg leading-7'>
          Understanding how the calculator works can empower users to take control of their dietary choices and enhance their culinary creations.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Example</h2>
        <p className='mb-4 text-lg leading-7'>
          Suppose a recipe has 800 total calories, 40 g protein, 100 g carbs, 20 g fat, and serves 4. The calculator outputs:
        </p>
        <ul className='list-disc list-inside mb-4 text-lg'>
          <li>Calories per serving: 200 kcal</li>
          <li>Protein per serving: 10 g (&asymp; 40 kcal)</li>
          <li>Carbs per serving: 25 g (&asymp; 100 kcal)</li>
          <li>Fat per serving: 5 g (&asymp; 45 kcal)</li>
        </ul>
        <p className='mb-4 text-lg leading-7'>
          Percent calories from each macro are calculated using the per-serving calories as the base. In the example above, protein contributes roughly 20% of calories, carbs 50%, and fat 22.5% (rounded values shown in the calculator). This visualization aids in meal planning and nutritional tracking, making it easier to adhere to dietary objectives.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Tips for Accurate Labels</h2>
        <ol className='list-decimal list-inside mb-4 text-lg'>
          <li>Use precise measurements for ingredients and refer to nutrition databases for accurate macro values.</li>
          <li>If total measured calories differ from computed macro calories, prioritize laboratory or measured totals for labeling compliance.</li>
          <li>Round values according to your local labeling regulations (this tool presents raw calculated values; apply rounding as required).</li>
          <li>Consider using this calculator not just for personal recipes but also as a resource for small food businesses looking to provide nutritional transparency.</li>
          <li>Utilize the results to educate others on healthy eating habits within your community or social networks.</li>
        </ol>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Frequently Asked Questions about Nutrition Labels</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-semibold'>Can I use this for commercial labeling?</h3>
            <p className='mt-2 text-lg'>This calculator helps estimate per-serving nutrition facts, but commercial labels often require specific rounding rules and compliance testing. Use these results as a guide and consult local regulations before publishing labels.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold'>What if my total calories don't match the sum of macros?</h3>
            <p className='mt-2 text-lg'>Small differences can arise from rounding or from calories contributed by non-macronutrient components (e.g., sugar alcohols, fiber). The calculator uses the supplied total calories per serving as the base for percent calculations when available.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold'>How should I round values?</h3>
            <p className='mt-2 text-lg'>Rounding rules vary by jurisdiction. Common practice is to round calories to the nearest whole number and grams to one decimal place for smaller values. Check local labeling guidelines for exact rules.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold'>Why is accurate nutrition labeling important?</h3>
            <p className='mt-2 text-lg'>Accurate nutrition labels help consumers make informed choices about their food intake, support dietary restrictions, and promote overall health and wellness. As awareness of nutrition continues to grow, having reliable data is essential for maintaining trust.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
