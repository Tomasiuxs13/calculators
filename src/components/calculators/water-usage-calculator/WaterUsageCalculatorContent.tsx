import React from 'react';

export default function WaterUsageCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Water Usage Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Water Usage Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Water Usage Calculator estimates how much water you use on a daily and annual basis based on common household activities: showers, laundry, and dishwasher runs. It helps you understand where most of your water is consumed and identifies opportunities for conservation.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool uses standard average water-use rates but you can adjust the inputs to reflect your household's habits. You can also switch display units between liters and gallons for convenience.
        </p>
        <p className="mb-4 text-lg leading-7">
          By monitoring your water usage, you can make informed decisions on conservation practices, which can not only save you money on your water bill but also contribute positively to the environment.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator performs all computations automatically as you change inputs. It first calculates water use in a base unit (liters) and then converts to your selected display unit. This ensures consistent and accurate conversions.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Weekly Use (L) = (# per week) × (unit usage per event)
          </code>
          <p className="mt-2 text-sm text-gray-700">Daily = Weekly / 7, Annual = Weekly × 52</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If you take 7 showers per week, each 10 minutes long, and shower flow is 9 L/min, weekly shower use = 7 × 10 × 9 = 630 L. Daily = 630 / 7 = 90 L/day from showers.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Water Usage</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <strong>Low-use household:</strong> 5 showers/week (8 min), 2 laundry loads/week, 3 dishwasher runs/week. Plugging these in gives an estimate of daily and annual water use.
          </li>
          <li>
            <strong>Moderate-use household:</strong> 10 showers/week (10 min), 4 laundry loads/week, 4 dishwasher runs/week—provides insight into average consumption.
          </li>
          <li>
            <strong>High-use household:</strong> 14 showers/week (10 min), 7 laundry loads/week, 7 dishwasher runs/week — helpful to see potential high consumption and where reductions might be effective.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips to Reduce Water Use</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Install low-flow showerheads (reduces liters/minute significantly).</li>
          <li>Run full laundry loads and use efficient washing machines.</li>
          <li>Use an efficient dishwasher and avoid pre-rinsing under running water.</li>
          <li>Shorten showers by a few minutes — small changes add up quickly.</li>
          <li>Fix leaks promptly to avoid wasting water.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Water Usage</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Are the values exact?</h3>
            <p className="text-base text-gray-700">No. The calculator uses representative average rates for common appliances and fixtures. Replace the inputs with your own measured or manufacturer-specified values for more accuracy.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why show liters and gallons?</h3>
            <p className="text-base text-gray-700">Different regions use different units. We calculate in liters (a consistent base unit) and allow conversion to gallons for easier interpretation where needed.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I download the results?</h3>
            <p className="text-base text-gray-700">Yes. Use the PDF download to save a summary of inputs and results for record-keeping or sharing.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What should I do if my usage is higher than expected?</h3>
            <p className="text-base text-gray-700">Consider reviewing your water use habits, checking for leaks, and implementing some of the tips provided to reduce consumption.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Further Resources on Water Usage</h2>
        <p className="text-lg text-gray-700">
          For more accurate household assessments, consider metering specific appliances, checking manufacturer specifications, or consulting local water utility guidance on typical use rates and conservation programs. Education on local water conservation initiatives can also enhance your water-saving efforts.
        </p>
        <p className="text-lg text-gray-700">
          Understanding the importance of water conservation not only helps your wallet but also contributes to a more sustainable future for our planet.
        </p>
      </section>
    </article>
  );
}
