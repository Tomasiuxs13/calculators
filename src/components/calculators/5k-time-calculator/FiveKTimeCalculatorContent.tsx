import React from 'react';

export default function FiveKTimeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">5K Time Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Predict your 5K race time from a recent training effort. Enter your current pace (minutes per kilometer) and the distance of the training run. The calculator uses the Riegel formula — a commonly used method for race performance prediction — to extrapolate an expected 5 kilometer time.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is helpful for runners planning race pacing, setting realistic goals, or tracking progress over time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator applies the Riegel formula: T2 = T1 × (D2 / D1)^1.06
          , where T1 is your time for the training distance D1, and T2 is the predicted time for distance D2 (5 km). Using your current pace (min/km) we compute T1 = pace × D1, then predict T2 for 5 km.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">T2 = T1 × (5 / D1)^1.06</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          If you ran 10 km at an average pace of 5:00 min/km, your total time for that run is 50 minutes. Using the Riegel formula, the predicted 5K time is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">T1 = 50 min (10 km × 5 min/km)</p>
          <p className="text-base text-gray-700">T2 = 50 × (5 / 10)^1.06 ≈ 50 × 0.48 ≈ 24.0 min → 24:00</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to use</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter your current average pace in minutes per kilometer (e.g., 4.5 for 4:30 min/km).</li>
          <li>Enter the distance of your recent training run in kilometers.</li>
          <li>The predicted 5K time will update automatically. Toggle charts to compare your training time and the predicted 5K time.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Is the prediction exact?</h3>
            <p className="text-lg text-gray-700">No — it's an estimate. The Riegel formula provides a reasonable extrapolation based on endurance scaling, but actual race performance depends on fitness, pacing, terrain, weather, and race-day conditions.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">What distance should I use for training data?</h3>
            <p className="text-lg text-gray-700">Use a recent, well-paced effort that reflects your current fitness. Time-trial efforts, tempo runs, or race results are good inputs. Very short or very irregular runs may give less reliable predictions.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Can I use pace in min/mile?</h3>
            <p className="text-lg text-gray-700">This calculator expects minutes per kilometer. Convert pace in minutes per mile to min/km before using the tool (1 mile ≈ 1.60934 km).</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Notes for Coaches</h2>
        <p className="mb-4 text-lg leading-7">
          Use this tool to quickly estimate race targets during training planning. Consider using multiple recent efforts and contextual information (interval fitness, long runs, fatigue) when setting race goals.
        </p>
      </section>
    </article>
  );
}
