import React from 'react';

export default function WaterFlowCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Water Flow Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to estimate the water flow rate through a circular pipe given the pipe diameter and the water velocity. Results are provided in cubic meters per second (m³/s), liters per second (L/s), and cubic meters per hour (m³/h). Understanding water flow rates is essential for various applications, from plumbing to irrigation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The flow rate Q is computed from the cross-sectional area A of the pipe and the flow velocity v using the formula:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Q = A × v</code>
          <div className="mt-2 text-base font-mono text-gray-900">A = π × (d / 2)²</div>
        </div>

        <p className="mb-4 text-lg leading-7">
          Note: Enter the pipe diameter in centimeters (cm). The calculator converts the diameter to meters (m) before computing the area. Accurate calculations are crucial for making informed decisions in construction and engineering projects.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          For a pipe with a diameter of 5 cm and water velocity of 2 m/s:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg">
          <li>Convert diameter to meters: 5 cm = 0.05 m</li>
          <li>Compute radius: r = 0.05 / 2 = 0.025 m</li>
          <li>Area: A = π × 0.025² ≈ 0.0019635 m²</li>
          <li>Flow: Q = A × v = 0.0019635 × 2 ≈ 0.003927 m³/s = 3.927 L/s</li>
        </ol>
        <p className="mb-4 text-lg leading-7">This calculator uses the same steps automatically — just change the inputs and the results update immediately, providing instant feedback on water flow rates.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to use this tool</h2>
        <p className="mb-4 text-lg leading-7">
          This tool is useful for quick sizing checks in plumbing and construction: estimating required pump capacities, verifying pipe flow capacities, and converting flows between units for reporting.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you are a professional plumber, an engineer, or a DIY enthusiast, having the ability to calculate water flow accurately is a valuable skill. This calculator simplifies the process and enhances your accuracy in project planning.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Water Flow</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Do I need to convert units first?</h3>
            <p className="text-base">No. Enter the diameter in centimeters and velocity in m/s — the calculator converts the diameter to meters internally.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What assumptions does this calculator make?</h3>
            <p className="text-base">It assumes steady uniform flow with the velocity you provide representing the average cross-sectional velocity. It does not account for frictional losses, turbulence, or changes in elevation.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why provide results in multiple units?</h3>
            <p className="text-base">Different industries and reports use different flow units. Showing m³/s, L/s, and m³/h makes it easier to use results directly in calculations or specifications.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">What factors can affect water flow rates?</h3>
            <p className="text-base">The flow rate can be influenced by various factors including pipe diameter, length, material, elevation changes, and the presence of fittings or bends that can create resistance.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How can I apply this calculator in real scenarios?</h3>
            <p className="text-base">You can use this calculator for tasks like designing a sprinkler system, determining the capacity of a water supply system, or optimizing the sizing of pipes in a building's plumbing network.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Recommended next steps</h2>
        <p className="mb-4 text-lg leading-7">For pipe sizing and hydraulic design, pair this instantaneous flow estimate with pressure loss calculations or use empirical charts for head loss and pump selection.</p>
        <p className="mb-4 text-lg leading-7">
          You can also explore further mathematical models and guidelines specific to your water system's requirements, considering factors like temperature, pressure, and the type of fluid being transported.
        </p>
      </section>
    </article>
  );
}
