import React from 'react';

export default function MomentumCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Momentum?</h2>
        <p className="mb-4 text-lg leading-7">
          Momentum is a fundamental concept in mechanics that quantifies the motion of an object. Linear momentum (often simply called "momentum") is defined as the product of an object's mass and its velocity. It is a vector quantity, but for many calculations we work with its magnitude using the formula below.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">p = m × v</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          In SI units mass (m) is measured in kilograms (kg) and velocity (v) in meters per second (m/s), which yields momentum in kilogram-meters per second (kg·m/s).
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding momentum is not only essential in physics but also in real-world applications. For example, vehicles rely on this concept to ensure safety measures during collisions. By studying momentum, engineers can design better safety features in cars, ensuring that passengers are protected during an accident.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Momentum Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the mass of the object in kilograms (kg).</li>
          <li>Enter the velocity of the object in meters per second (m/s). Velocity may be negative to indicate direction.</li>
          <li>The calculator will automatically compute linear momentum p = m × v and display the result in kg·m/s.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: A 10 kg object moving at 5 m/s has momentum <strong>p = 10 × 5 = 50 kg·m/s</strong>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Worked Examples of Momentum Calculations</h2>
        <div className="mb-4 text-lg leading-7">
          <p className="mb-2"><strong>Example 1:</strong> A car of mass 1200 kg moves at 20 m/s.</p>
          <p className="mb-2">p = 1200 × 20 = 24,000 kg·m/s</p>

          <p className="mb-2 mt-4"><strong>Example 2 (direction):</strong> A particle of mass 0.02 kg moves at -3 m/s (negative indicates the opposite direction).</p>
          <p>p = 0.02 × (-3) = -0.06 kg·m/s (the negative sign indicates direction)</p>

          <p className="mt-4"><strong>Example 3:</strong> A basketball player jumps with a mass of 95 kg and reaches a velocity of 3 m/s upwards.</p>
          <p>p = 95 × 3 = 285 kg·m/s (This information can help in determining the player’s impact during a fall.)</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Why Momentum Matters in Physics</h2>
        <p className="mb-4 text-lg leading-7">
          Momentum is conserved in closed systems. The principle of conservation of momentum is central to analyzing collisions and interactions in mechanics. Knowing an object's momentum helps predict outcomes after interactions and is crucial in fields ranging from vehicle safety to particle physics.
        </p>
        <p className="mb-4 text-lg leading-7">
          For instance, during a car accident, understanding the momentum of both vehicles before and after the collusion can help accident reconstruction experts determine how the crash occurred. Furthermore, this principle extends into areas such as astrophysics where the movements of celestial bodies can be understood in terms of momentum, helping to predict their paths and interactions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Momentum</h2>

        <div>
          <h3 className="text-xl font-semibold mt-4">Q: Can mass be zero or negative?</h3>
          <p className="mb-2 text-lg">A: Physically, mass is always non-negative. In the calculator mass should be entered as a non-negative value in kilograms.</p>

          <h3 className="text-xl font-semibold mt-4">Q: Can velocity be negative?</h3>
          <p className="mb-2 text-lg">A: Yes. A negative velocity indicates motion in the opposite direction. Momentum will also be negative in that case, indicating direction.</p>

          <h3 className="text-xl font-semibold mt-4">Q: Does the calculator handle units other than SI?</h3>
          <p className="mb-2 text-lg">A: This calculator expects SI units: mass in kilograms and velocity in meters per second. To use other units, convert them to SI first (for example, grams to kilograms or km/h to m/s).</p>

          <h3 className="text-xl font-semibold mt-4">Q: How is momentum utilized in real-life scenarios?</h3>
          <p className="mb-2 text-lg">A: Momentum is applied in various fields including sports, vehicle safety design, and even in analyzing the trajectory of projectiles. Understanding momentum allows for better predictions in these scenarios, ensuring improved safety and efficiency.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References & Further Reading on Momentum</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Any introductory college-level physics textbook section on linear momentum and collisions.</li>
          <li>Conservation of momentum and impulse-momentum theorems for solving collision problems.</li>
          <li>Online resources and simulations that demonstrate momentum conservation.</li>
          <li>Research papers on momentum in various fields such as astrophysics and engineering mechanics.</li>
        </ul>
      </section>
    </article>
  );
}
