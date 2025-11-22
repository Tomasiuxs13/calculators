import React from 'react';

export default function CarbonOffsetCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8">Carbon Offset Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use our Carbon Offset Calculator to determine the amount of carbon emissions you can offset through various activities. Understanding carbon offsetting is crucial in today's environmentally conscious world.
        </p>
        <p className="mb-4 text-lg leading-7">
          Carbon offsetting is the practice of compensating for greenhouse gas emissions by funding projects that reduce or remove an equivalent amount of CO2 from the atmosphere. This calculator helps estimate the amount of carbon (in kg CO2) you would need to offset for common activities such as flights, driving, or electricity consumption.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use measured emissions when available (e.g., utility bills, emissions reports). If you don't have direct emissions, provide distance for travel activities and the calculator will estimate emissions using typical per-kilometer factors.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">What is Carbon Offsetting?</h2>
        <p className="mb-4 text-lg leading-7">
          Carbon offsetting plays an essential role in mitigating climate change. By investing in renewable energy projects, forest conservation, or other environmental initiatives, you can effectively neutralize your carbon footprint. This practice not only helps combat global warming but also promotes sustainability and environmental responsibility.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator accepts either a direct emissions value (kg CO2) or a distance (km) for travel activities. When you enter values, the tool automatically calculates the total emissions and the corresponding offset needed to neutralize those emissions.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Offset Needed (kg CO2) = Emissions (kg CO2)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          For travel activities (Flight, Driving), if you provide a distance and leave the emissions field blank, the calculator estimates emissions using common per-kilometer factors. If you supply a direct emissions figure, that value will be used instead.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Carbon Offsetting</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Example 1 — Flight (distance)</h3>
            <p className="text-base">A 1,000 km flight estimated at ~0.115 kg CO2/km produces about 115 kg CO2. The offset needed would be 115 kg CO2.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Example 2 — Driving (measured emissions)</h3>
            <p className="text-base">If you measured 200 kg CO2 from a driving trip, enter 200 in Emissions. The offset needed will be 200 kg CO2 (0.200 tonnes).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Example 3 — Electricity</h3>
            <p className="text-base">For electricity usage, supply the emissions value (kg CO2) from your electricity bill or provider emissions factor. Distance is not used for electricity.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Carbon Offsetting</h2>
        <div className="space-y-3">
          <div>
            <h4 className="text-lg font-semibold">Q: Can I use this to purchase offsets directly?</h4>
            <p className="text-base">A: This tool estimates the amount of carbon to offset. To purchase offsets, look for reputable projects and registries (e.g., Verra, Gold Standard) and follow their purchasing processes.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Q: Why are emission factors approximate?</h4>
            <p className="text-base">A: Emission factors vary by aircraft type, vehicle efficiency, electricity grid mix, and other factors. This calculator uses common average factors for quick estimates; use detailed lifecycle analyses for precise calculations.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Q: How should I enter distances and emissions?</h4>
            <p className="text-base">A: Enter distances in kilometers (km). Enter emissions in kilograms of CO2 (kg CO2). If you have a verified emissions number, prefer that over distance estimates.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Q: Is carbon offsetting effective?</h4>
            <p className="text-base">A: Yes, carbon offsetting can be effective, especially when combined with efforts to reduce personal or organizational emissions. However, it's crucial to choose credible offset projects to ensure real environmental benefits.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Additional Notes on Carbon Offsetting</h2>
        <p className="mb-4 text-lg leading-7">
          Results obtained from this calculator are estimates for informational use and should not replace professional carbon accounting. For organizational reporting, consult certified carbon accounting standards and calculators. Carbon offsetting is an important step, but individual actions towards sustainability can make a bigger impact collectively.
        </p>
      </section>
    </article>
  );
}
