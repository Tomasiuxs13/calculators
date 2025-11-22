import React from 'react';

export default function MarathonTimeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Marathon Time Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Marathon Time Calculator estimates your marathon finish time based on a shorter race performance (for example a 5K, 10K, or half marathon). It uses a widely-adopted prediction method — Riegel's formula — which extrapolates finish times based on distance and an exponent that captures typical endurance decay.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is useful for planning training, setting realistic goals, or checking the consistency of your race performances across distances. By understanding how different distances impact your marathon time, you can make informed adjustments to your training regimen.
        </p>
        <p className="mb-4 text-lg leading-7">
          The Marathon Time Calculator not only helps athletes gauge their potential, but it also serves as a motivational resource, aiding runners as they set out to achieve their personal bests. Whether you’re preparing for your first marathon or your tenth, this calculator can provide insights into what you might expect on race day.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Prediction Works</h2>
        <p className="mb-4 text-lg leading-7">
          We use Riegel's formula: a simple power-law model that predicts time at a target distance based on a known performance. The simplicity of this formula makes it accessible for every runner to utilize as a part of their training toolkit.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            T2 = T1 × (D2 / D1) ^ 1.06
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where:
          <ul className="list-disc ml-6 mt-2">
            <li>T1 = known time (minutes)</li>
            <li>D1 = known distance (kilometers)</li>
            <li>T2 = predicted time at distance D2 (minutes)</li>
            <li>D2 = target distance (for marathon, 42.195 km)</li>
          </ul>
        </p>

        <p className="mb-4 text-lg leading-7">
          The exponent 1.06 is a commonly-used value that reflects how speed typically decreases with increasing distance. Individual fitness, training, and race conditions will affect accuracy, so treat predictions as estimates. An understanding of these variables can help you better prepare for your race.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Marathon Time Prediction</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you ran 10 km in 40 minutes (4:00 min/km). The calculator will estimate your marathon time using the following calculation:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">Predicted Marathon Time = 40 × (42.195 / 10) ^ 1.06 ≈ 3:00:xx</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          The tool will show both the predicted finish time (formatted H:MM:SS) and the predicted average pace (min/km) for the marathon. This means not only can you anticipate how long your run might take, but you can also strategize your pacing throughout the race.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Better Marathon Predictions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use a recent race performance on a similar effort level (e.g., all-out race vs. training run).</li>
          <li>Longer reference distances (e.g., half marathon) generally give more accurate marathon predictions than very short races.</li>
          <li>Adjust expectations for race-day conditions: heat, hills, and pacing strategy will all affect results.</li>
          <li>Consider your training cycle: peak performance may not align with off-peak training phases, so factor this in.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about the Marathon Time Calculator</h2>
        <div>
          <h3 className="text-xl font-semibold mt-4">Is this prediction exact?</h3>
          <p className="mb-4 text-lg leading-7">No — it's an estimate. Individual physiology, training, and conditions make exact prediction impossible. Use it as a guideline to help shape your training and racing strategies.</p>

          <h3 className="text-xl font-semibold mt-4">Can I use any race distance?</h3>
          <p className="mb-4 text-lg leading-7">Yes. The calculator accepts any race distance in kilometers and the finishing time in minutes. Performances from longer races (e.g., half marathon) are usually more predictive of marathon performance than short races (e.g., 5K). Explore different distance performances to enhance accuracy.</p>

          <h3 className="text-xl font-semibold mt-4">How should I interpret the pace number?</h3>
          <p className="mb-4 text-lg leading-7">Pace is shown as minutes per kilometer. Use it as a framework to plan your marathon pacing strategy — remember that race-specific factors like hills and fueling will influence your sustainable pace. Consider practicing at this pace during training runs to get accustomed to it.</p>

          <h3 className="text-xl font-semibold mt-4">How can I improve my marathon time?</h3>
          <p className="mb-4 text-lg leading-7">Improving your marathon time often involves a combination of speed work, long runs, and rest days. Paying attention to your nutrition, hydration strategies during runs, and pacing can also lead to better race performances. Experimenting with these elements in training will help you identify what works best for you.</p>
        </div>
      </section>
    </article>
  );
}
