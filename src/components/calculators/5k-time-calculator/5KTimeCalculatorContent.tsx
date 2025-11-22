import React from 'react';

export default function FiveKTimeCalculator() {
  return (
    <article className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">5K Time Calculator</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">What is a 5K Time Calculator?</h2>
        <p>
          A 5K time calculator is an essential tool for runners aiming to predict race times based on their current pace and training distances. Using the popular Riegel formula, this calculator provides accurate predictions by assessing the runner's performance over varying distances. Whether you're a beginner training for your first race or an experienced runner looking to set a personal best, understanding your 5K time can help tailor your training programs and set realistic goals.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">How to Calculate Your 5K Time</h2>
        <p>
          To find out your estimated time for a 5K race, you’ll need to input your current running pace and the distance you can comfortably run. The Riegel formula states that: 
        </p>
        <pre className="bg-gray-50 border-l-4 border-blue-500 p-2">
          <code>
            T2 = T1 * (D2 / D1) ^ 1.06
          </code>
        </pre>
        <p>
          Where:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>T1:</strong> Time for the initial distance</li>
          <li><strong>D1:</strong> Initial distance (in miles or kilometers)</li>
          <li><strong>T2:</strong> Expected time for the target distance (5K)</li>
          <li><strong>D2:</strong> Target distance (5 kilometers)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Worked Examples</h2>
        
        <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
          <h3 className="font-semibold">Example 1</h3>
          <p>
            If you run a mile in 8 minutes (T1 = 8 minutes), and you're comfortable running 5 miles (D1 = 5), your predicted 5K time (D2 = 3.1 miles) would be:
          </p>
          <pre className="bg-gray-50 border-l-4 border-blue-500 p-2">
            <code>
              T2 = 8 * (3.1 / 5) ^ 1.06 ≈ 5.0 minutes (1 mile is 8 minutes approximately)
            </code>
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
          <h3 className="font-semibold">Example 2</h3>
          <p>
            If you run a 10K in 50 minutes (T1 = 50 minutes) and want to predict your 5K time (D2 = 5):
          </p>
          <pre className="bg-gray-50 border-l-4 border-blue-500 p-2">
            <code>
              T2 = 50 * (5 / 10) ^ 1.06 ≈ 25 minutes
            </code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Real World Uses of the 5K Time Calculator</h2>
        <p>
          The 5K time calculator is beneficial for various scenarios:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Training schedule adjustments: Helps runners determine pacing strategies for their projected race times.</li>
          <li>Goal setting: Assists in setting realistic performance goals based on your current fitness levels.</li>
          <li>Event planning: Aids race directors in estimating completion times for participants based on their registered paces.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
        <h3 className="font-semibold">1. How accurate are 5K time calculators?</h3>
        <p>While calculators provide a good estimate, actual race performance may vary due to factors like weather, terrain, and individual fitness levels.</p>

        <h3 className="font-semibold">2. Can I use this calculator for other distances?</h3>
        <p>Yes, you can adapt the formula for various distances by inputting your specific parameters.</p>

        <h3 className="font-semibold">3. What is a good 5K time for beginners?</h3>
        <p>A good starting point for beginners is around 30 minutes, but this can vary based on age, fitness, and running experience.</p>

        <h3 className="font-semibold">4. What is the Riegel formula?</h3>
        <p>The Riegel formula predicts race times at different distances based on previous performance.</p>

        <h3 className="font-semibold">5. How often should I train for a 5K?</h3>
        <p>A training schedule typically involves 3-4 runs a week, including long runs, tempo runs, and intervals.</p>
      </section>
    </article>
  );
}