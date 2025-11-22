import React from 'react';

export default function RestPeriodCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is an Optimal Rest Period?</h2>
        <p className="mb-4 text-lg leading-7">
          Rest periods between sets are a critical variable in training programming. The ideal rest depends on your goal — building maximal strength, promoting muscle hypertrophy, or developing muscular endurance — and on how heavy the sets are relative to your one-repetition maximum (1RM). Shorter rests favor metabolic stress and endurance, while longer rests allow for greater recovery and force production.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates a recommended rest duration based on the exercise type (Strength, Hypertrophy, Endurance) and the intensity you are training at (% of 1RM). The recommendation adapts automatically as you change inputs. Proper understanding and utilization of optimal rest periods can vastly enhance your training efficiency and results.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Rest Period Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          We use a simple, research-informed heuristic to determine the most effective rest period:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Strength work (1–5 reps) typically needs longer rest (around 2–5 minutes) to ensure full recovery.</li>
          <li>Hypertrophy work (6–12 reps) often benefits from moderate rest (about 60–90 seconds) to maximize muscle growth.</li>
          <li>Endurance work (13+ reps) uses shorter rest (around 30–60 seconds) to maintain a higher heart rate and metabolic demand.</li>
        </ul>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Recommended Rest = Base Rest × (Intensity ÷ 85)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The calculator uses 85% of 1RM as a reference intensity for scaling. Higher intensities increase the recommended rest proportionally, while lower intensities reduce it. Results are clamped to sensible bounds (e.g., not less than ~20 seconds, not more than ~10 minutes) to ensure optimal recovery without excessive downtime.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Optimal Rest Periods</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold">Example 1 — Strength (85% 1RM)</h3>
            <p className="text-lg">Default example: Strength work at 85% 1RM typically returns ~3 minutes rest. This allows near-full recovery for high-force sets, critical for maximally effective strength training.</p>
          </div>

          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold">Example 2 — Hypertrophy (70% 1RM)</h3>
            <p className="text-lg">Hypertrophy sets at 70% 1RM usually need 60–90 seconds of rest; the calculator scales down from the hypertrophy base if intensity is below 85%. This approach helps maintain an effective training stimulus.</p>
          </div>

          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-semibold">Example 3 — Endurance (50% 1RM)</h3>
            <p className="text-lg">Endurance-focused sets with high reps and lower intensity benefit from shorter rest (30–60 seconds) to maintain metabolic demand, enhancing overall endurance performance.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Rest Period Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Rest Period Calculator is not just a tool for beginners; it can be beneficial for athletes at all levels. Here are some use cases:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Personal trainers can use it to tailor workout plans for clients based on specific fitness goals.</li>
          <li>Athletes can optimize their rest times during a training regimen to maximize their performance before competitions.</li>
          <li>Fitness enthusiasts can track their progress by adjusting rest times as they improve and lift heavier weights.</li>
          <li>Individuals following specific programs (e.g., powerlifting or bodybuilding) can ensure they are adhering to recommended recovery times.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Rest Periods</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-medium">Is the recommendation exact?</h4>
            <p className="text-lg">No — it is an evidence-informed guideline. Individual responses vary based on fitness level, exercise selection, and recovery capacity. Use the recommended range and adjust based on performance and fatigue levels.</p>
          </div>

          <div>
            <h4 className="text-xl font-medium">Can I use this for circuit training?</h4>
            <p className="text-lg">For circuit training and metabolic conditioning, shorter rests are typical. Choose "Endurance" and lower intensity values to reflect circuit-style work for optimal results.</p>
          </div>

          <div>
            <h4 className="text-xl font-medium">How should I progress rest periods over time?</h4>
            <p className="text-lg">As you get stronger, you may need slightly longer rests for maximal strength sets. For hypertrophy, rest periods can be manipulated to target more metabolic stress (&lt;60s) or more mechanical tension (&gt;90s) depending on your specific goals.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-medium">Can I adjust the rest period within a workout?</h4>
            <p className="text-lg">Absolutely! Feel free to modify rest periods in real-time based on how you feel during a workout. Listening to your body can often lead to improved outcomes.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
