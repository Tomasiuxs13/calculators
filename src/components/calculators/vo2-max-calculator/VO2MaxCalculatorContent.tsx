import React from 'react';

export default function VO2MaxCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta
        name="description"
        content="Estimate your VO2 max—the maximum rate of oxygen consumption—using our simple calculator for fitness tracking. Learn more about VO2 max here."
      />
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">VO2 Max Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Estimate your VO2 max — the maximum rate at which your body can consume oxygen during intense exercise. VO2 max is commonly expressed in milliliters of oxygen per kilogram of body weight per minute (ml/kg/min). This calculator provides a quick estimate using heart rate measurements and weight.
        </p>
        <p className="mb-4 text-lg leading-7">
          Note: This estimation method (Uth-style approximation) should not replace laboratory testing or medical advice. Use it for general fitness tracking and comparisons over time. Understanding your VO2 max can help tailor your workouts, improve performance, and monitor your overall health.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the VO2 Max Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator utilizes a widely cited estimation formula, which is designed to provide insights into your aerobic capacity:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">VO2max (ml/kg/min) ≈ 15.3 × (HRmax / HRrest)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          After estimating the relative VO2 (ml/kg/min), the calculator converts it to absolute VO2 (L/min) using your body weight:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Absolute VO2 (L/min) = (Relative VO2 (ml/kg/min) × weight (kg)) ÷ 1000</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation for VO2 Max</h2>
        <p className="mb-4 text-lg leading-7">
          If you are 30 years old, weigh 70 kg, have a resting heart rate of 60 bpm, and a measured maximum heart rate of 185 bpm, the calculation proceeds as follows:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Relative VO2 ≈ 15.3 × (185 / 60) ≈ 47.1 ml/kg/min</li>
          <li>Absolute VO2 ≈ (47.1 × 70) / 1000 ≈ 3.30 L/min</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          The calculator also provides an age-normative reference value, allowing you to compare your estimate to a general age-based average.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Interpreting Your VO2 Max Results</h2>
        <p className="mb-4 text-lg leading-7">
          Higher VO2 max values generally indicate better aerobic fitness. Typical ranges vary by age, sex, and training status. Use the results to track changes over time or to compare with general population averages. For precise athletic assessment or clinical use, lab-based tests (e.g., graded exercise test with gas analysis) are recommended.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">VO2 Max Use Cases</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your VO2 max is crucial for:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Designing effective training programs for athletes.</li>
          <li>Monitoring improvements in cardiovascular fitness over time.</li>
          <li>Guiding recovery plans post-injury.</li>
          <li>Assessing individual fitness levels for health assessments.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about VO2 Max</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Is this VO2 max test accurate?</h3>
            <p className="text-base text-gray-700">This formula provides a rough estimate based on heart rate. Individual variability, measurement error, medications, and fitness level can affect accuracy. For precise measurement, seek lab testing.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">What should I use for maximum heart rate?</h3>
            <p className="text-base text-gray-700">If you have an actual measured maximal heart rate from a supervised test, use that value. If not, commonly used estimates (e.g., 220 minus age) are less accurate and will affect the VO2 estimate.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Can I use this calculator for training zones?</h3>
            <p className="text-base text-gray-700">This estimate serves as a good starting point for general fitness planning, but training zones should ideally be based on more specific testing (e.g., lactate threshold or ventilatory thresholds) for athletes or targeted programs.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">How can I improve my VO2 max?</h3>
            <p className="text-base text-gray-700">Improving your VO2 max may involve engaging in high-intensity interval training (HIIT), continuous aerobic exercises, strength training, and ensuring proper recovery strategies.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Safety & Notes</h2>
        <p className="mb-4 text-lg leading-7">
          If you have any cardiovascular conditions or concerns, consult a healthcare professional before performing maximal exercise or using results to guide high-intensity training. Safety should always be your top priority when assessing fitness metrics like VO2 max.
        </p>
      </section>
    </article>
  );
}
