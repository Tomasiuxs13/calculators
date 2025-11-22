import React from 'react';

export default function CentripetalForceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Centripetal Force?</h2>
        <p className="mb-4 text-lg leading-7">
          Centripetal force is the inward force required to keep an object moving in a circular path. It acts perpendicular to the object's velocity and points toward the center of the circle. In classical mechanics, the magnitude of the centripetal force is given by the formula below, which allows us to calculate the necessary force for various conditions.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">F = m × v² / r</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg">
          <li>F is the centripetal force in Newtons (N)</li>
          <li>m is the mass in kilograms (kg)</li>
          <li>v is the tangential velocity in meters per second (m/s)</li>
          <li>r is the radius of the circular path in meters (m)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Understanding centripetal force is crucial in physics as it impacts various fields, including engineering, astrophysics, and even sports dynamics. For instance, when designing a roller coaster, engineers must calculate the centripetal force to ensure safety and performance, highlighting the practical importance of this concept in real-world applications.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Centripetal Force Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator auto-updates as you change any input — there is no compute button. Enter the mass, velocity, and radius. The result will appear immediately in Newtons (N). You can also toggle a chart to visualize the computed force alongside the m·v² numerator term. This tool simplifies calculations for students, educators, and professionals alike.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: For a mass of 10 kg moving at 5 m/s around a 2 m radius, the centripetal force is:
          </p>
          <pre className="mt-3 bg-white p-3 rounded text-sm font-mono text-gray-900">F = 10 × 5² / 2 = 10 × 25 / 2 = 250 / 2 = 125 N</pre>
        </div>
        <p className="mb-4 text-lg leading-7">
          This not only provides quick results but also enhances comprehension by showing how various parameters affect the centripetal force. Moreover, it serves as an educational tool for visual learners.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical Examples of Centripetal Force</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding centripetal force is useful for designing circular tracks, analyzing vehicles turning on curves, and calculating forces in rotating machinery. Additionally, in the context of celestial mechanics, the gravitational pull acts as centripetal force for planets orbiting stars. For small radii or high speeds, centripetal forces can become very large and must be accounted for in structural and safety designs.
        </p>
        <p className="mb-4 text-lg leading-7">
          This principle also plays a significant role in sports where athletes perform circular movements, such as track cycling or ice skating, where the inward force is crucial for maintaining stability and speed.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Centripetal Force</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Does the direction of velocity matter?</h3>
          <p className="text-lg text-gray-700">Centripetal force depends on the speed (magnitude of velocity), not its direction. However, the force always points toward the center of the circular path, perpendicular to the instantaneous velocity, helping maintain the circular motion of the object.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">What happens if the radius is zero?</h3>
          <p className="text-lg text-gray-700">A radius of zero is non-physical for circular motion and would mathematically produce an infinite force. Ensure that the radius is a positive number when using the calculator to prevent undefined or erroneous calculations.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Can this be used for rotation about an axis?</h3>
          <p className="text-lg text-gray-700">Yes. For objects moving in a circular path around an axis, use the tangential speed at the radius of interest for v. If you have angular speed ω (rad/s), convert it using the formula v = ω × r, thus applying centripetal force concepts in rotational dynamics.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">How does centripetal force relate to gravitational force?</h3>
          <p className="text-lg text-gray-700">In many cases, such as satellites orbiting planets, gravitational force acts as the centripetal force. The mutual attraction between the celestial bodies provides the necessary centripetal force to keep the satellites in stable orbits, demonstrating the interconnectedness of these fundamental forces in physics.</p>
        </div>
      </section>
    </article>
  );
}
