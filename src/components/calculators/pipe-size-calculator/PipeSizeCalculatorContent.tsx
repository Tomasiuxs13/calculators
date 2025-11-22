import React from 'react';

export default function PipeSizeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pipe Size Calculator</h1>
        <p className="mb-4 text-lg">
          This Pipe Size Calculator helps you determine the required internal pipe diameter for a desired water flow rate and target flow velocity. It's commonly used in plumbing design, irrigation, and hydraulic calculations to ensure efficient flow while minimizing pressure loss and turbulence. Understanding the right pipe size is crucial for the efficiency of any fluid transport system and can lead to significant energy savings in both residential and commercial applications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Pipe Size Calculator Works</h2>
        <p className="mb-4">
          The calculator converts the flow rate from liters per minute (L/min) to cubic meters per second (m³/s), then computes the cross-sectional area using the continuity equation and derives the diameter. This process ensures you choose the most efficient pipe diameter to reduce costs and maintain performance. 
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Q (m³/s) = (Flow Rate (L/min) × 0.001) / 60
            {' \n'}Area (m²) = Q / v
            {' \n'}Diameter (m) = sqrt(4 × Area / π)
          </code>
        </div>

        <p className="mb-4">
          Where:
          <ul className="list-disc pl-5 mt-2">
            <li>Q is volumetric flow (m³/s)</li>
            <li>v is target velocity (m/s)</li>
            <li>Diameter is the internal pipe diameter in meters (converted to mm for display)</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Using the Pipe Size Calculator</h2>
        <p className="mb-4">
          If you have a flow rate of 20 L/min and want a velocity around 2 m/s:
        </p>
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-base mb-2">Convert flow: 20 L/min = (20 × 0.001) / 60 = 0.000333... m³/s</p>
          <p className="text-base mb-2">Area = Q / v = 0.000333... / 2 = 0.0001667 m²</p>
          <p className="text-base">Diameter = sqrt(4 × 0.0001667 / π) ≈ 0.0146 m = 14.6 mm</p>
        </div>
        <p className="mt-4 text-lg">
          This calculation demonstrates the importance of accurately determining pipe size, as an incorrect diameter can lead to insufficient flow rates or increased pressure losses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Design Tips for Selecting Pipe Size</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Round up to the next standard pipe size — practical pipe sizes are discrete and include wall thickness.</li>
          <li>Higher velocities increase friction losses; typical safe velocities for potable water range from 0.6 to 2 m/s depending on system requirements.</li>
          <li>Consider future capacity and debris/inclusion considerations — slightly larger pipes can reduce clogging risk.</li>
          <li>Always check local regulations and standards, as they may dictate minimum sizes and materials to be used.</li>
          <li>Utilize the calculator not only for current needs but also for future expansions in your systems.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Pipe Sizes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Can I use this Pipe Size Calculator for other fluids?</h3>
            <p className="text-sm text-gray-700">This calculator assumes incompressible flow and uses velocity as the design parameter. For viscous or compressible fluids, or if temperature significantly changes density, use fluid-specific hydraulic calculations.</p>
          </div>

          <div>
            <h3 className="font-medium">Why is velocity important in pipe design?</h3>
            <p className="text-sm text-gray-700">Velocity impacts pressure drop and noise. Designing for an appropriate velocity balances pipe cost and energy losses in pumping. Too high a velocity can lead to cavitation, while too low can result in sedimentation.</p>
          </div>

          <div>
            <h3 className="font-medium">How to choose a standard pipe size effectively?</h3>
            <p className="text-sm text-gray-700">After calculating the theoretical diameter, consult pipe standard nominal sizes (e.g., DN series, NPS/IPS). Select a nominal size that provides equal or larger internal diameter than computed. A higher nominal size can enhance flow rates further.</p>
          </div>

          <div>
            <h3 className="font-medium">What are the common applications for this calculator?</h3>
            <p className="text-sm text-gray-700">The Pipe Size Calculator is widely used in construction, plumbing, and water management sectors. It is essential for designing efficient irrigation systems, sewage systems, and even heating and cooling applications in buildings.</p>
          </div>

          <div>
            <h3 className="font-medium">What impact does temperature have on pipe size?</h3>
            <p className="text-sm text-gray-700">Temperature changes can affect fluid density and therefore flow. Always consider temperature variations during design to ensure optimal performance and compliance with safety regulations.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References for Pipe Sizing Standards</h2>
        <p className="text-sm text-gray-600">This tool uses the continuity equation and assumes steady, incompressible flow. For detailed hydraulic design, consider standards like ASME, ISO, and local plumbing codes to ensure compliance and safety. It's recommended to refer to updated handbooks and detailed engineering studies when designing complex systems.</p>
      </section>
    </article>
  );
}
