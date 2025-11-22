import React from 'react';

export default function CircuitBreakerCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Discover how to size a circuit breaker correctly to protect your electrical systems from overload. Use our calculator for accurate estimations." />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Circuit Breaker Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Circuit Breaker and Why Size It Correctly?</h2>
        <p className="mb-4 text-lg leading-7">
          A circuit breaker is a protective device that interrupts electrical flow when current exceeds safe levels. It acts as a safety mechanism to prevent electrical overloads that can lead to equipment damage or fire hazards. Correctly sizing a circuit breaker ensures the wiring and connected equipment are protected while avoiding nuisance trips caused by incorrectly rated breakers. This calculator helps you estimate the required breaker size based on your total load, system voltage, and an applied safety factor.
        </p>
        <p className="mb-4 text-lg leading-7">
          Using the right circuit breaker is not just about safety; it's also about maintaining efficiency in your systems. An oversized circuit breaker can lead to prolonged exposure of wiring to excess current, leading to overheating and damage. Conversely, an undersized breaker may trip frequently, causing interruptions. Hence, understanding how to size your circuit breaker correctly is crucial for safety and efficiency.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Circuit Breaker Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator follows a simple three-step approach:
        </p>
        <ol className="list-decimal ml-6 space-y-2 text-lg">
          <li>Calculate load current using I = P / V (where P is power in watts and V is voltage in volts).</li>
          <li>Apply the safety factor (in percent) to the calculated current to get the applied current used for protection sizing.</li>
          <li>Choose the smallest standard breaker size that is greater than or equal to the applied current.</li>
        </ol>
        
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">I = P ÷ V</code>
          <div className="mt-2 text-sm text-gray-600">Applied Current = I × (Safety Factor / 100)</div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Circuit Breaker Sizing</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a total connected load of 5,000 W on a 240 V single-phase system and you use a 125% safety factor.
        </p>
        <p className="mb-4 text-lg leading-7">
          Load current: I = 5000 / 240 = 20.833 A
        </p>
        <p className="mb-4 text-lg leading-7">
          Applied current with safety factor: 20.833 × 1.25 = 26.041 A
        </p>
        <p className="mb-4 text-lg leading-7">
          The smallest standard breaker size greater than or equal to 26.041 A is 32 A, so a 32 A breaker is recommended.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Best Practices for Circuit Breaker Sizing</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Always confirm local electrical code requirements; some jurisdictions require different sizing rules.</li>
          <li>Consider continuous loads and derating factors where applicable—consult a licensed electrician for critical systems.</li>
          <li>Use the calculator as a guide; field conditions (ambient temperature, conductor bundling, cable type) can significantly influence final conductor and breaker selection.</li>
          <li>Review equipment manuals and consult with manufacturers for specific load ratings before finalizing your circuit breaker size.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Circuit Breakers</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: Can I use this calculator for three-phase systems?</h3>
            <p className="text-lg text-gray-700">A: This calculator assumes a simple single-phase calculation (I = P ÷ V). For three-phase systems, the formula changes to I = P ÷ (√3 × V × powerFactor) for line-to-line voltages. Adjust your inputs accordingly or consult an electrical engineer.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Why is a safety factor important in circuit breaker sizing?</h3>
            <p className="text-lg text-gray-700">A: Safety factors account for startup currents, inrush, future load growth, and other uncertainties that can affect current draw. Typical values range from 115% to 125%, but specific applications may require adjusting the margins.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Does the recommended breaker size equal the conductor size?</h3>
            <p className="text-lg text-gray-700">A: Not necessarily. Conductor sizing depends on ampacity tables, installation method, and any derating factors that may apply. This tool recommends a breaker size; always select conductor sizes based on code tables and actual installation conditions.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Can a circuit breaker wear out, and how often should I check it?</h3>
            <p className="text-lg text-gray-700">A: Yes, circuit breakers can wear out over time due to mechanical stress and electrical loads. It's important to inspect them regularly, especially in older systems, and consider replacement if frequent tripping occurs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to Consult a Professional</h2>
        <p className="mb-4 text-lg leading-7">
          For installations beyond simple residential loads, three-phase systems, motor starting conditions, or critical safety systems, always consult a licensed electrician or engineer. Use this calculator for initial estimates and planning, but rely on professionals to ensure compliance with local regulations and optimal safety standards.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your electrical system’s needs is crucial. Whether for a home renovation or a commercial project, professional guidance can help you navigate complex calculations and ensure that your installation stands the test of time and safety.
        </p>
      </section>
    </article>
  );
}
