import React from 'react';

export default function ProgressiveOverloadCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Progressive Overload Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Progressive overload is a core principle in strength training where you gradually increase the stress 
          placed on your muscles to stimulate growth and strength. This calculator helps you determine how much 
          weight to add based on a percentage increment so you can plan safe, consistent progressions. 
          Understanding and implementing progressive overload is crucial for anyone looking to achieve their 
          fitness goals, whether you're a beginner or an advanced lifter.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use the calculator by entering your current working weight (in kilograms) and the percentage by which 
          you want to increase that weight. The calculator will instantly show the increase amount and the new 
          target weight. The essence of progressive overload lies in the incremental changes, ensuring that your 
          muscles are continually challenged.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How Progressive Overload Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculation follows this simple formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Increase = Current Weight × (Increment Percentage / 100)
          </code>
          <div className="mt-2 text-base font-mono text-gray-900">
            New Weight = Current Weight + Increase
          </div>
        </div>
        <p className="mb-4 text-lg leading-7">
          With this formula, you can easily calculate your new weights as you progress, ensuring that your 
          training regimen remains effective and aligned with your goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Example of Using the Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          If your current working weight is 80 kg and you choose a 5% increment:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-lg">Increase = 80 × 0.05 = 4.00 kg</li>
          <li className="text-lg">New Weight = 80 + 4 = 84.00 kg</li>
        </ul>
        <p className="mt-4 text-lg leading-7">
          This allows you to plan micro-progressions (smaller percentages) or more aggressive jumps depending 
          on your training experience and goals. Be sure to adjust increments thoughtfully based on how your 
          body is responding to the increased load.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Practical Progressive Overload Tips</h2>
        <ul className="list-inside list-disc space-y-2 text-lg">
          <li>Beginners often progress faster; consider slightly larger increments early on (e.g., 5-10%).</li>
          <li>Advanced trainees may need smaller increments (1-3%) or use microplates for fine-tuning.</li>
          <li>Track reps, sets, and Rate of Perceived Exertion (RPE) alongside weight to make informed decisions about progression.</li>
        </ul>
        <p className="mt-4 text-lg leading-7">
          Remember, the goal is sustainable growth. It’s essential to listen to your body and adjust your training plan accordingly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">FAQs about Progressive Overload</h2>

        <div className="mb-4">
          <h3 className="text-lg font-medium">How often should I increase the weight?</h3>
          <p className="text-lg">
            Increase weight when you can complete your target reps and sets with good form. Many lifters add 
            weight every 1–3 weeks depending on recovery and training frequency.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">What percentage should I use for progressive overload?</h3>
          <p className="text-lg">
            For most people, 2–5% is a sensible range. Use smaller percentages for heavier lifts (e.g., deadlifts) 
            and slightly larger for accessory movements if needed.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Can I use this calculator for pounds (lbs)?</h3>
          <p className="text-lg">
            Yes — the percentage calculation is unit-agnostic. Enter your weight in lbs instead of kg and the 
            output will be in the same unit.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Summary of Progressive Overload</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator provides a quick, reliable way to compute progressive overload increments so you can 
          log consistent, safe increases in training load. By following the principles outlined here, you can 
          create a personalized strength training regimen that promotes continual growth and improvement.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use the chart toggle to visualize progress and the PDF export feature to save your planning notes. 
          Ultimately, consistency is vital, and utilizing a progressive overload strategy ensures that you stay 
          on track toward achieving your fitness goals.
        </p>
      </section>
    </article>
  );
}
