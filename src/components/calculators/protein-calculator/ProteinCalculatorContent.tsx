import React from 'react';

export default function ProteinCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Protein Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Protein calculation is essential for determining how much protein you need based on your weight, activity level, and fitness goals. Adequate protein intake supports muscle repair, growth, and overall health.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our protein calculator helps you easily estimate your daily protein needs, whether you aim to lose weight, maintain your current weight, or gain muscle mass. This tool is beneficial for athletes, fitness enthusiasts, and anyone looking to optimize their nutrition.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Protein Needs
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate your daily protein needs, you need to consider your weight and activity level. The general formula is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Protein Needs = Weight (kg) × Activity Multiplier × Goal Factor
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The activity multiplier varies based on how active you are, and the goal factor changes depending on whether you want to lose, maintain, or gain weight.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Protein Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your protein needs is crucial in various scenarios:
        </p>
        <ul className="list-disc mb-4 ml-5">
          <li className="text-lg leading-7">For Weight Loss: Higher protein intake can help you feel fuller and reduce cravings.</li>
          <li className="text-lg leading-7">For Muscle Gain: Adequate protein supports muscle growth and recovery post-workout.</li>
          <li className="text-lg leading-7">For Injury Recovery: Protein plays a vital role in recovery from injuries and muscle repair.</li>
          <li className="text-lg leading-7">For Overall Health: Protein is essential for the functioning of hormones, enzymes, and immune cells.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">1. How much protein do I need daily?</h3>
        <p className="mb-4 text-lg leading-7">
          The recommended dietary allowance (RDA) for protein is 0.8 grams per kilogram of body weight for the average adult. However, athletes and those looking to build muscle may require more.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">2. Can I get enough protein from a plant-based diet?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, it is entirely possible to meet your protein needs through a plant-based diet by incorporating diverse sources like lentils, chickpeas, tofu, and quinoa.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">3. What are the best sources of protein?</h3>
        <p className="mb-4 text-lg leading-7">
          Some of the best sources of protein include lean meats, poultry, fish, eggs, dairy products, legumes, nuts, and seeds. Depending on dietary preferences, some individuals favor plant-based options.
        </p>
      </section>
    </article>
  );
}
