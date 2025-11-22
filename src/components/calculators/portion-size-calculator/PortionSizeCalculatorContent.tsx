import React from 'react';

export default function PortionSizeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Use our Portion Size Calculator to effectively plan your meals for a balanced diet based on your calorie goals." />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Portion Size Calculator</h1>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Portion Size Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Portion Size Calculator helps estimate how much of a specific food category (protein, carbohydrates, or vegetables) you should eat per meal based on your daily calorie goal and how many meals you typically eat per day. It converts your daily calorie target into calories allocated to the chosen food type, then converts those calories into grams using standard kcal-per-gram values.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is useful for meal planning, portion control, and aligning macronutrient targets with practical serving sizes, making it an essential resource for anyone looking to improve their dietary habits.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're trying to lose weight, gain muscle, or just maintain a balanced diet, understanding your portion sizes can lead to better nutrition and healthier eating habits.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works: Portion Size Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator follows these steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Allocate a proportion of your daily calories to the chosen food type (a simple guideline is used).</li>
          <li>Convert allocated calories into grams using kcal-per-gram (e.g., protein and carbs = 4 kcal/g, many vegetables ≈ 0.5 kcal/g).</li>
          <li>Divide the total grams for the day by the number of meals to get grams per meal.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Portion (g/meal) = (DailyCalories × ProportionForType / kcalPerGram) / MealsPerDay
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator assumes conservative proportions (for example: protein 30%, carbs 45%, vegetables 25%). These are starting points — adjust according to your dietary goals, activity level, and guidance from a nutrition professional.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Portion Size Calculation</h2>
        <div className="mb-4 text-lg leading-7">
          <strong>Example 1:</strong> If your daily calorie goal is 2000 kcal, and you eat 3 meals per day, selecting <em>Protein</em> (30% allocation) gives:
        </div>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Calories for protein per day = 2000 × 0.30 = 600 kcal</li>
          <li>Grams protein per day = 600 / 4 = 150 g</li>
          <li>Per meal (3 meals) = 150 / 3 = 50 g per meal</li>
        </ul>

        <div className="mb-4 text-lg leading-7">
          <strong>Example 2:</strong> For vegetables with low energy density (≈0.5 kcal/g), the calculator will show larger gram portions for the same calorie allocation, which is expected for high-volume, low-calorie foods.
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>

        <h3 className="text-xl font-semibold mt-4">Is this personalized nutrition advice?</h3>
        <p className="mb-4 text-lg leading-7">
          No, this calculator provides estimates based on simple assumptions. It is not a replacement for professional dietary or medical advice. For personalized plans, consult a registered dietitian or healthcare professional.
        </p>

        <h3 className="text-xl font-semibold mt-4">Can I change the proportions?</h3>
        <p className="mb-4 text-lg leading-7">
          The current proportions are built-in starting points. If you have specific macronutrient targets (e.g., higher protein for strength training), adjust your overall calorie distribution or consult a professional.
        </p>

        <h3 className="text-xl font-semibold mt-4">Why are vegetable portions large?</h3>
        <p className="mb-4 text-lg leading-7">
          Many vegetables are low in calories (low kcal per gram). To reach a calorie allocation, the calculator converts calories into grams, which results in larger weight-based portions for low-energy foods.
        </p>

        <h3 className="text-xl font-semibold mt-4">Can I track my portion sizes over time?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, tracking your portion sizes can help you maintain better dietary habits. Consider using a food diary or an app to log your meals along with the portion sizes suggested by the calculator.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Effective Portion Control</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-7">
          <li>Use this tool as a guide — focus on whole foods and balanced meals.</li>
          <li>Combine these estimates with portion-measurement tools (kitchen scales) for accuracy.</li>
          <li>Re-evaluate your portions based on progress, satiety, and performance.</li>
          <li>Consider using smaller plates and bowls to help with portion control visually.</li>
          <li>Stay mindful of your eating habits; eat slowly and pay attention to hunger cues.</li>
        </ul>
      </section>
    </article>
  );
}
