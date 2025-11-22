import React from 'react';

export default function CyclingPowerCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Cycling Power Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Calculate the mechanical power output of a cyclist using the simple relation between force and velocity. This calculator helps cyclists, coaches, and sports scientists quickly estimate power from measured force and speed values. By understanding cycling power, you can improve your training and performance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works - Cycling Power Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Power is the rate at which work is done. In linear motion, instantaneous mechanical power (in watts) is the product of the force applied in the direction of motion (in newtons) and the velocity of the object (in meters per second):
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Power (W) = Force (N) × Velocity (m/s)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Use the fields to enter the force in newtons and the velocity in meters per second. You can choose to display the result in watts (W) or kilowatts (kW). The calculator updates automatically as you type and provides an optional chart for visual comparison, enabling you to see how your power output fluctuates over different efforts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Cycling Power Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a cyclist pushes with an effective forward force of 200 N and is traveling at 10 m/s (~36 km/h). The power output is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Power = 200 N × 10 m/s = 2000 W (2.0 kW)
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Cycling Power Matters for Performance</h2>
        <p className="mb-4 text-lg leading-7">
          Power is a key metric in cycling performance — it directly relates to how hard a rider is working regardless of external factors like wind or terrain. Understanding your cycling power can help you tailor your workout plans effectively, enabling better training results and improved stamina over time. Many training plans and performance analyses are based on power output, making this calculation essential for serious cyclists.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Tips for Calculating Cycling Power</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure force measurements are aligned with the direction of motion; lateral or vertical components do not contribute to forward power.</li>
          <li>Velocity should be the instantaneous speed in m/s. Convert km/h to m/s by dividing by 3.6.</li>
          <li>Use averaged force and velocity values for steady-state power estimates; instantaneous spikes can distort short-term readings.</li>
          <li>Regularly verify that your equipment is correctly calibrated for accurate results.</li>
          <li>Integrate this calculator into your training program to track progress over time.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cycling Power Calculator - FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Can I use this for pedaling torque?</h3>
            <p className="text-base text-gray-700">
              This calculator expects a linear force and velocity. For torque-based measurements (e.g., using crank torque sensors), convert torque and angular velocity to power: Power = Torque × Angular Velocity (rad/s).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">What if my force or velocity is negative?</h3>
            <p className="text-base text-gray-700">
              Negative values indicate direction opposite to the defined positive direction. For power output calculations, use magnitudes in the forward direction; regenerative or braking power would be represented by negative power if direction is opposite to motion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">How accurate is the estimate?</h3>
            <p className="text-base text-gray-700">
              The calculation itself is exact for the provided inputs, but real-world accuracy depends on the quality and representativeness of the force and velocity measurements (sensor precision, sampling, alignment, and filtering).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">What are some use cases for this calculator?</h3>
            <p className="text-base text-gray-700">
              This calculator is useful for athletes aiming to improve their performance metrics, coaches developing training programs, and sports scientists analyzing power output data in various cycling scenarios.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
