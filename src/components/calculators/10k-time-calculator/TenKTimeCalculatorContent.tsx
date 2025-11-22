import React from 'react';

export default function TenKTimeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">10K Time Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to estimate your 10-kilometer (10K) race time from a known training effort. Enter your current pace (minutes per kilometer) and the distance of your training run to get an evidence-based prediction for a 10K performance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          This tool uses a commonly-used endurance prediction approach (a variation of the Riegel formula) to extrapolate race time from a training performance. The calculator first computes your training time (pace × distance) and then predicts the 10K time using:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">T2 = T1 × (D2 / D1)^1.06</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>T1 = your training time in minutes (pace × training distance)</li>
          <li>D1 = training distance (km)</li>
          <li>D2 = target distance (10 km)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you ran 6 km at a 4:50 per km pace (4.833 minutes/km). Your training time T1 = 4.833 × 6 = 28.998 minutes. Predict for 10 km:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">T2 = 28.998 × (10 / 6)^1.06 ≈ 28.998 × 1.789 ≈ 51.86 minutes → 51:52</p>
        </div>
        <p className="mt-4 text-lg leading-7">
          The predicted 10K time would be about 51 minutes and 52 seconds, with an average pace of about 5:11 per km.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Training tips</h2>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Use a training effort (time trial or steady long run) that represents your current fitness.</li>
          <li>Longer training distances tend to give more reliable predictions for longer races.</li>
          <li>Consider conditions: terrain, weather, and fatigue can all affect race-day performance beyond what a single training run predicts.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-medium mt-3">Is this prediction exact?</h3>
        <p className="mb-4 text-lg leading-7">
          No. This prediction provides an evidence-based estimate based on pace and distance. Actual race performance depends on training specificity, nutrition, tapering, course profile, weather, and other factors.
        </p>

        <h3 className="text-xl font-medium mt-3">What if my training distance is much shorter than 10K?</h3>
        <p className="mb-4 text-lg leading-7">
          Predictions from short training efforts (e.g. 1–3 km) are less reliable. Longer, sustained efforts closer to race distance usually provide better estimates.
        </p>

        <h3 className="text-xl font-medium mt-3">Can I use pace in min/mile?</h3>
        <p className="mb-4 text-lg leading-7">
          This calculator expects pace in minutes per kilometer. Convert minutes per mile to minutes per kilometer before using. (1 mile ≈ 1.60934 km)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Want to save your results?</h2>
        <p className="mb-4 text-lg leading-7">
          Use the PDF download button on the calculator to save your inputs and predicted results for later review or coaching notes.
        </p>
      </section>
    </article>
  );
}
