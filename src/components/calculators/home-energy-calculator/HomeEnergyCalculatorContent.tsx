import React from 'react';

export default function HomeEnergyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Home Energy Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Estimate your home's annual energy consumption (in kWh) and approximate yearly cost based on square footage, heating type, and insulation quality. This quick tool helps homeowners identify efficiency opportunities and compare the impact of different heating systems and insulation levels. Understanding your home energy usage is crucial for making informed decisions toward energy efficiency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How the Home Energy Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses a baseline energy intensity (kWh per square foot) and adjusts that baseline according to your chosen heating type and insulation quality. Heating systems are normalized to a kWh-equivalent so results are comparable across gas, electric, and oil heating. This ensures you can make the best choice for your home.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Estimated Annual kWh = Square Footage × Base kWh/sqft × Heating Multiplier × Insulation Modifier
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The result includes an approximate annual cost based on typical cost-per-kWh equivalents for each heating type. Use this as a relative estimate — actual usage will vary based on local climate, thermostat settings, and home-specific characteristics. Understanding these variables can empower you in your energy choices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Example of Home Energy Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          For a typical 2,000 sqft home with natural gas heating and good insulation (defaults):
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>Baseline intensity: 5 kWh/sqft × 2000 sqft = 10,000 kWh</li>
          <li>Heating multiplier (gas): 0.85 → 8,500 kWh</li>
          <li>Insulation modifier (good): 0.8 → 6,800 kWh estimated annually</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          At an equivalent cost of $0.06 per kWh for gas, the annual cost would be approximately $408. This example illustrates how small changes in heating efficiency and insulation can have significant cost implications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Tips to Reduce Energy Use at Home</h2>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>Improve insulation (attic, walls, windows) to reduce heat loss.</li>
          <li>Upgrade to a high-efficiency heating system or heat pump to save on energy bills.</li>
          <li>Use a programmable thermostat to optimize heating and cooling schedules effectively.</li>
          <li>Seal drafts and enhance air sealing around doors and windows to maintain indoor temperature.</li>
          <li>Consider installing energy-efficient appliances to lower overall consumption.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Implementing these changes can significantly enhance your home's energy efficiency and reduce your overall energy bills. The savings on utility bills can add up over time, making your home more sustainable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions about Home Energy</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Is this calculator an exact measurement?</h3>
          <p className="text-lg">No. This calculator provides an estimate based on simplified assumptions. Real-world usage depends on local climate, behavior, appliance efficiency, and building specifics.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Why are different heating types normalized to kWh?</h3>
          <p className="text-lg">Normalization to kWh-equivalents allows an apples-to-apples comparison across fuel types. Actual billing units may differ (therms, gallons, etc.), and fuel prices vary by location.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">How can I achieve more accurate results?</h3>
          <p className="text-lg">For more precise estimates, use actual historical energy bills, heating system efficiency ratings (AFUE/EER/COP), and local climate data. Consider a home energy audit for tailored recommendations to improve your home's energy profile.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">What are some common mistakes to avoid when calculating home energy costs?</h3>
          <p className="text-lg">Common mistakes include not accounting for all square footage during calculations, neglecting local climate factors, or using outdated energy pricing. Be sure to gather recent data for the most accurate estimates.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Learn More about Home Energy Efficiency</h2>
        <p className="mb-4 text-lg leading-7">
          Use this tool to compare scenarios quickly — for example, changing insulation from poor to good or switching heating types — and download a PDF report of the inputs and results for planning or sharing with contractors. By exploring options and using this calculator, you can develop a comprehensive strategy for improving your home's energy efficiency.
        </p>
      </section>
    </article>
  );
}
