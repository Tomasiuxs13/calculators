import React from 'react';

export default function FatCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Fat Calculator</h1>
      <meta name="description" content="Use our Fat Calculator to determine the right amount of fat intake for your diet based on your daily calorie needs." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Fat Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Fat Calculator estimates how many grams of fat you should consume daily based on your total daily calorie intake and the percentage of calories that come from fat. It's a useful tool for planning diets, tracking macronutrients, and ensuring you're meeting nutritional goals.
        </p>
        <p className="mb-4 text-lg leading-7">
          Dietary fat provides 9 kilocalories (kcal) per gram. By calculating the calories from fat and dividing by 9, you can convert fat calories into grams. Understanding your fat intake can help you align your diet with your health objectives, whether weight loss, muscle gain, or maintenance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator follows this simple formula:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Calories from Fat = Daily Calories × (Fat Percentage / 100)
          </code>
          <div className="mt-2">
            <code className="text-base font-mono text-gray-900">
              Fat (grams) = Calories from Fat / 9
            </code>
          </div>
        </div>

        <p className="mb-4 text-lg leading-7">
          Example: If you eat 2,000 kcal per day and aim for 30% of calories from fat:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Calories from fat = 2000 × 0.30 = 600 kcal</li>
          <li>Fat grams = 600 / 9 ≈ 66.67 g</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Fat Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter your estimated daily calorie intake (kcal).</li>
          <li>Enter the percentage of your diet that comes from fat (0-100%).</li>
          <li>Toggle the display unit to view results as grams of fat or calories from fat.</li>
          <li>View the chart to compare fat calories with the rest of your daily calories.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Fat Intake</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Is fat the only macronutrient that has 9 kcal/g?</h3>
          <p className="text-lg leading-7">Yes. Fat provides 9 kcal per gram. Protein and carbohydrates each provide 4 kcal per gram.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">What percentage of calories should come from fat?</h3>
          <p className="text-lg leading-7">Dietary recommendations vary by individual goals, health conditions, and dietary patterns. Many guidelines suggest 20-35% of total calories from fat for general health, but athletes, people on specialized diets, or those with medical conditions may have different targets. Consult a registered dietitian for personalized recommendations.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Does this calculator account for fat quality (saturated vs unsaturated)?</h3>
          <p className="text-lg leading-7">No. This calculator estimates total fat intake in grams or calories. It does not differentiate between types of fat. For health, focus on unsaturated fats and limit saturated and trans fats.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Monitoring Your Fat Intake</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-7">
          <li>Track your intake with a food diary or nutrition app to ensure targets are met.</li>
          <li>Remember that whole foods provide additional nutrients; don't focus solely on macros.</li>
          <li>If you're unsure about your calorie needs, calculate your Total Daily Energy Expenditure (TDEE) or consult a professional.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Fat Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Fat Calculator can be particularly useful for various groups, including fitness enthusiasts looking to optimize their body composition, individuals managing weight loss or gain, and those interested in maintaining a balanced diet. Athletes may use it to ensure they consume enough energy from fats to support their training, while others might adjust their fat intake for specific health conditions, such as cholesterol management or heart disease prevention.
        </p>
      </section>
    </article>
  );
}
