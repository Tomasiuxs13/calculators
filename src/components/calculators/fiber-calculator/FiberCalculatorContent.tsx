import React from 'react';

export default function FiberCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Fiber Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates your recommended daily fiber intake based on age, gender, and daily calorie consumption. It combines the Institute of Medicine's energy-based guideline (14 grams of fiber per 1,000 kcal) with common age and gender reference values to produce a conservative, practical recommendation. Understanding your fiber needs is essential to maintain optimal health, and our calculator will serve as a helpful tool in achieving your daily goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Fiber Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Two primary approaches are used:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Calorie-based:</strong> Uses 14 g of fiber per 1,000 kcal consumed (IOM recommendation). For example, if you eat 2,000 kcal/day → 28 g fiber/day.
          </li>
          <li>
            <strong>Age &amp; Gender Reference:</strong> Typical adult reference values (for general guidance) are approximately 38 g for men (≤50), 30 g for men (&gt;50), 25 g for women (≤50), and 21 g for women (&gt;50).
          </li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          The calculator shows both values and selects the higher recommendation as the final suggested daily intake. This approach ensures adequate fiber intake across different dietary patterns, which is crucial for digestive health and overall well-being.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Final Recommendation = max(14 × (Calories / 1000), Age/Gender Reference)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Fiber Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          If a 30-year-old woman consumes 2,000 kcal per day:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Calorie-based: 14 × (2000 / 1000) = 28 g/day</li>
          <li>Age/Gender reference for 30-year-old female = 25 g/day</li>
          <li>Final recommendation = max(28, 25) = 28 g/day</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Fiber Matters for Your Health</h2>
        <p className="mb-4 text-lg leading-7">
          Dietary fiber supports digestive health, helps maintain healthy blood glucose and cholesterol levels, and is associated with a lower risk of cardiovascular disease. Most people do not meet recommended fiber intakes, which can lead to adverse health effects. Using a calculator can set a clear target for daily fiber intake and help you make informed dietary choices.
        </p>
        <p className="mb-4 text-lg leading-7">
          Incorporating sufficient fiber into your diet can contribute to a feeling of fullness, which can assist in weight management. Additionally, fiber acts as a prebiotic, supporting the growth of beneficial gut bacteria.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about Fiber Intake</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Is fiber the same for everyone?</h3>
            <p className="text-base">No. Fiber needs vary by age, sex, and calorie intake. This tool provides personalized guidance by combining calorie-based and age/sex reference values tailored to your profile.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What types of fiber should I include in my diet?</h3>
            <p className="text-base">Include both soluble fiber (found in oats, legumes, and fruits) and insoluble fiber (found in whole grains and vegetables) as part of a balanced diet to reap the greatest health benefits.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Are there risks associated with consuming too much fiber?</h3>
            <p className="text-base">Very high fiber intakes may cause gastrointestinal discomfort for some individuals, particularly if increased too quickly. It is advised to increase fiber gradually and ensure adequate fluid intake to mitigate this risk.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How can I increase my fiber intake?</h3>
            <p className="text-base">To boost your fiber intake, include more fruits, vegetables, whole grains, legumes, nuts, and seeds in your meals and snacks. Consider starting your day with a high-fiber cereal or adding beans to your salads and soups.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Sources & Further Reading on Fiber</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Institute of Medicine. Dietary Reference Intakes for macronutrients and fiber.</li>
          <li>Dietary Guidelines and public health resources on fiber intake recommendations.</li>
          <li>Research articles on the health benefits of dietary fiber.</li>
          <li>Book recommendations for high-fiber recipes and meal planning.</li>
        </ul>
      </section>
    </article>
  );
}
