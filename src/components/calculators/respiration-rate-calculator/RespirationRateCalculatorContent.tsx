import React from 'react';

export default function RespirationRateCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>Respiration Rate Calculator</h1>
        <p className='mb-4 text-lg'>
          This tool calculates cellular respiration rates based on oxygen consumption, observation time, and sample weight. It provides values in mL of O2 consumed per minute and normalized per gram of sample.
        </p>
        <p className='mb-4 text-lg'>
          Accurate respiration rate estimates are essential in microbiology experiments, ecological studies, and cellular metabolism research. Use consistent units (mL, minutes, grams) to ensure valid results.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>How it works</h2>
        <p className='mb-4 text-lg'>
          The calculator first computes the oxygen consumption rate per minute, then normalizes this rate by the sample weight to give a rate per gram. Calculations are performed automatically as you change inputs.
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Rate (mL/min) = Oxygen Consumed (mL) ÷ Time (minutes)
          </code>
          <br />
          <code className='text-base font-mono text-gray-900'>
            Rate per gram (mL/(g·min)) = Rate (mL/min) ÷ Sample Weight (g)
          </code>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Example</h2>
        <p className='mb-4 text-lg'>
          If a sample consumes 10 mL of oxygen over 5 minutes and the sample weighs 1 g, the calculation is:
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <p className='text-base text-gray-700'>
            Rate = 10 mL ÷ 5 min = 2 mL/min
          </p>
          <p className='text-base text-gray-700 mt-2'>
            Rate per gram = 2 mL/min ÷ 1 g = 2 mL/(g·min)
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>Best practices</h2>
        <ul className='list-disc ml-6 space-y-2 text-lg'>
          <li>Ensure oxygen consumption is measured in mL and time in minutes.</li>
          <li>Use consistent and precise sample weights (grams) for normalization.</li>
          <li>Repeat measurements and average rates to reduce variability.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>FAQs</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium text-gray-900'>Can I use different units?</h3>
            <p className='text-base text-gray-700'>
              This calculator expects mL for oxygen volume, minutes for time, and grams for weight. Convert other units into these base units before entering values to ensure correct results.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-900'>What if time or weight is zero?</h3>
            <p className='text-base text-gray-700'>
              Time and weight must be greater than zero. The calculator will not display results for invalid or zero values. Ensure proper measurements before using this tool.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-900'>How should I report the results?</h3>
            <p className='text-base text-gray-700'>
              Common reporting formats include mL O2 per minute, and mL O2 per minute per gram (mL/(g·min)). Include measurement conditions (temperature, pressure) where relevant for reproducibility.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-gray-900 mb-3'>References & notes</h2>
        <p className='text-base text-gray-700'>
          Use this calculator as a quick estimate. For publication-quality measurements, follow established experimental protocols and calibration procedures for oxygen sensors.
        </p>
      </section>
    </article>
  );
}
