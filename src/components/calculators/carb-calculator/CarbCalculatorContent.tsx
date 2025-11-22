import React from 'react';

export default function CarbCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Daily Carbohydrate Needs Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to estimate your daily carbohydrate requirements based on body weight, activity level, and your goal (lose, maintain, or gain weight). The calculator provides a practical recommendation in grams per kilogram of body weight and the total grams of carbohydrates per day. Understanding your carbohydrate needs is crucial for optimizing energy levels and performance, ensuring that you are fueling your body appropriately for your lifestyle and activity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          We start with a baseline carbohydrate recommendation expressed in grams per kilogram (g/kg) according to activity level. This helps to create a framework for your dietary needs. Then we adjust that baseline depending on your goal:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Sedentary: ~3 g/kg</li>
          <li>Light activity: ~4 g/kg</li>
          <li>Moderate activity: ~5 g/kg</li>
          <li>Active / high-volume training: ~6 g/kg</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Goal adjustments are applied as multipliers (e.g. ~0.8× for weight loss, 1.0× to maintain, and ~1.15× to gain). The final recommendation is shown both as g/kg and total grams per day. This methodology provides a tailored approach to your energy needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Example: A 70 kg person with a <strong>moderate</strong> activity level has a baseline of 5 g/kg. To maintain weight, the multiplier is 1.0 so the recommendation is 5 g/kg &times; 70 kg = 350 g/day. 
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Carbs per kg × Weight (kg) = Total carbs per day (g)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Practical Tips</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Distribute carbohydrates across meals and snacks to support energy and performance.</li>
          <li>Consider carbohydrate timing around workouts for best performance and recovery.</li>
          <li>Adjust recommendations based on personal response, medical conditions, and dietary preferences.</li>
          <li>Incorporate a variety of carbohydrate sources for a balanced diet, including whole grains, fruits, and vegetables.</li>
          <li>Track your carbohydrate intake using a food diary or nutrition apps to ensure you meet your goals.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Carb Needs</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Are these values suitable for everyone?</h3>
          <p className="text-lg leading-7">These recommendations are general estimates. Individual needs vary with metabolic health, age, training load, and medical conditions. Consult a registered dietitian or healthcare professional for personalized guidance based on your unique situation.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">How do I adjust for very high training loads?</h3>
          <p className="text-lg leading-7">Athletes with extremely high training volumes may require higher carbohydrate intakes (up to 8-12 g/kg in some endurance scenarios). Use the 'Active' level as a baseline and consult a sports nutritionist for precise plans tailored to your training intensity and goals.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Can I use pounds (lbs)?</h3>
          <p className="text-lg leading-7">This calculator accepts weight in kilograms. To convert pounds to kilograms, divide by 2.20462 (kg = lbs ÷ 2.20462). Using the metric system can help achieve more accurate recommendations based on global nutrition standards.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">What types of carbs should I focus on?</h3>
          <p className="text-lg leading-7">Prioritize complex carbohydrates such as whole grains, legumes, fruits, and vegetables as they provide sustained energy and fiber. Simple carbohydrates, such as sugars, should be consumed in moderation and primarily around intense training sessions to aid quick recovery.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When to consult a professional</h2>
        <p className="mb-4 text-lg leading-7">If you have chronic health conditions, are pregnant, breastfeeding, or are an elite athlete, seek individualized advice from a registered dietitian or medical provider before making major dietary changes. Tailored dietary approaches help ensure you are receiving the necessary nutrients while avoiding potential adverse effects.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Carb Calculator</h2>
        <p className="mb-4 text-lg leading-7">The Carb Calculator can be beneficial for various individuals:</p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Athletes looking to optimize performance and recovery with the right carb intake.</li>
          <li>Individuals trying to lose weight in a healthy manner while maintaining energy levels during workouts.</li>
          <li>Fitness enthusiasts wanting to maintain their weight and energy balance.</li>
          <li>People monitoring their carbohydrate intake for medical reasons, such as diabetes or metabolic syndrome.</li>
        </ul>
      </section>
    </article>
  );
}
