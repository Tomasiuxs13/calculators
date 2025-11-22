import React from 'react';

export default function CookingTimeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Cooking Time Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly estimate cooking times based on the type of food, weight in kilograms, and the cooking method. 
          This calculator uses typical minutes-per-kilogram guidelines to provide an easy-to-understand time estimate 
          you can use for meal planning and preparation. Use our cooking time calculator to simplify your cooking 
          experience while ensuring that your meals are cooked to perfection regardless of the dish.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          Each food type and cooking method combination has a base time expressed in minutes per kilogram. 
          The calculator multiplies the base minutes-per-kg by the weight you enter to produce the total cooking time. 
          All calculations are automatic and update as you change inputs. By using this tool, you can confidently plan 
          and prepare your meals, ensuring that everything is cooked just right.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Time (min) = Weight (kg) × Time per kg (min/kg)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Cooking Times</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-medium">Roast Chicken - 1.5 kg</h3>
            <p className="text-sm text-gray-600">Base: 45 min/kg → Total: 67.5 minutes (~1h 8m)</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-medium">Grilled Beef - 0.8 kg</h3>
            <p className="text-sm text-gray-600">Base: 35 min/kg → Total: 28 minutes</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-medium">Baked Pork - 2 kg</h3>
            <p className="text-sm text-gray-600">Base: 60 min/kg → Total: 120 minutes (2h)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Results</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Trim excess fat and tie large roasts for more even cooking.</li>
          <li>Use a meat thermometer to verify doneness; times are estimates and can vary with oven, altitude, and cut.</li>
          <li>Smaller pieces cook faster; adjust expectations if you are cooking pieces instead of whole roasts.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Cooking Time</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Are these cooking times exact?</h3>
            <p className="text-lg text-gray-700">No. These are guideline values based on common culinary practices. 
              Always confirm doneness with an appropriate thermometer: chicken should reach 74°C (165°F), pork 63°C (145°F) followed by a rest, 
              and beef depends on desired doneness.</p>
          </div>

          <div>
            <h3 className="font-medium">Can I use pounds instead of kilograms?</h3>
            <p className="text-lg text-gray-700">This tool uses kilograms. To convert pounds to kilograms, multiply pounds by 0.453592. 
              For example, 2 lb ≈ 0.91 kg. Understanding this conversion will help you accurately use the calculator no matter 
              what measurement you are familiar with.</p>
          </div>

          <div>
            <h3 className="font-medium">Does cooking method significantly affect time?</h3>
            <p className="text-lg text-gray-700">Yes. Methods like grilling often cook faster per kilogram due to higher direct heat, 
              while roasting and baking are typically slower but more even. Knowing the cooking method can help adjust your expectations 
              and ensure your dish is done to perfection.</p>
          </div>

          <div>
            <h3 className="font-medium">What is the best way to plan my cooking time?</h3>
            <p className="text-lg text-gray-700">It’s essential to account for resting time, especially with larger cuts of meat. 
              Always consider additional time when planning your meal, and consult our calculator for the best estimates!</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Safety Note</h2>
        <p className="text-lg text-gray-700">Always ensure meat reaches a safe internal temperature. Use these estimates for planning 
          and start checking the internal temperature toward the end of the estimated time. Following safety guidelines will help 
          you enjoy delicious and healthy meals every time.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for Your Cooking Time Calculator</h2>
        <p className="text-lg text-gray-700">The Cooking Time Calculator is perfect for home cooks preparing meals for family gatherings, 
          busy weeknight dinners, or special occasions like holiday feasts. It helps streamline the cooking process, allowing you to 
          focus on other aspects of meal prep. Whether you're getting ready for a barbecue, a cozy dinner, or baking treats, this tool 
          simplifies planning, allowing you to create delightful dishes with ease.</p>
      </section>
    </article>
  );
}
