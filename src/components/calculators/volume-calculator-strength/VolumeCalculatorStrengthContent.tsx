import React from 'react';

export default function VolumeCalculatorStrengthContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          Strength Training Volume Calculator
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Training volume is one of the key metrics in strength training programming. It quantifies the total amount of work performed and is commonly calculated as the product of sets, repetitions, and the external load (weight). Tracking volume helps athletes and coaches plan progression, manage fatigue, and prioritize hypertrophy or strength goals. Understanding and properly calculating your strength training volume can lead to significant improvements in your training outcomes.
        </p>
        <p className='mb-4 text-lg leading-7'>
          Use this calculator to quickly determine your session or exercise volume in kilograms. Enter the number of sets, reps per set, and the weight lifted. The calculator auto-updates results and offers a chart view and PDF export for logging. By regularly assessing your training volume, you can make informed adjustments to your routine to optimize muscle growth and performance gains.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>How the Strength Training Volume Calculator Works</h2>
        <p className='mb-4 text-lg leading-7'>
          The calculator uses a simple formula:
        </p>
        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Volume (kg) = sets × reps × weight (kg)
          </code>
        </div>
        <p className='mb-4 text-lg leading-7'>
          All inputs must be non-negative numbers. The result is updated automatically as you change any input. This dynamic feedback allows you to experiment with different set and rep schemes to find a training style that suits your goals best.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Example of Strength Training Volume Calculation</h2>
        <p className='mb-4 text-lg leading-7'>
          If you perform 4 sets of 8 reps with 100 kg, total reps = 4 × 8 = 32, and training volume = 32 × 100 = 3200 kg. This straightforward calculation highlights how different variables impact your overall training load.
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            <strong>Example calculation:</strong>
          </p>
          <ul className='list-disc list-inside mt-2 text-gray-700'>
            <li>Sets: 4</li>
            <li>Reps per set: 8</li>
            <li>Weight: 100 kg</li>
          </ul>
          <p className='mt-3 text-gray-700'>Result: <strong>3200 kg</strong></p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Practical Tips for Managing Strength Training Volume</h2>
        <ul className='list-disc list-inside space-y-2 text-lg text-gray-700'>
          <li>Track volume over weeks to monitor progression or detect plateaus.</li>
          <li>Use volume along with intensity (percentage of 1RM) to inform programming decisions.</li>
          <li>For hypertrophy phases, aim for higher weekly volume distributed across sessions.</li>
          <li>Adjust load or reps to manage fatigue and avoid excessive accumulation.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Use Cases for the Strength Training Volume Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          This calculator is beneficial for various strength training purposes. Coaches can use it to customize programs for their athletes, while individual lifters can monitor their own performance to achieve personal fitness goals. Whether you’re training for competition or simply aiming to improve your personal records, understanding your volume can help shape your workouts effectively.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3 mt-6'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Is higher volume always better?</h3>
            <p className='text-lg text-gray-700 mt-2'>Not necessarily. While increased volume can promote hypertrophy and skill acquisition, it must be balanced with recovery and intensity. Individual response, training age, and goals determine optimal volume, so listen to your body to prevent burnout.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Should I use this for cardio or endurance?</h3>
            <p className='text-lg text-gray-700 mt-2'>This calculator is tailored for external load-based strength work. For endurance or cardio, other metrics like distance, duration, and pace are more appropriate. If your primary goal is endurance, consider other tools designed specifically for that purpose.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Can I export results?</h3>
            <p className='text-lg text-gray-700 mt-2'>Yes. Use the PDF export to save inputs and results for logging or sharing with a coach. This feature makes it easy to keep track of your progress over time.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
