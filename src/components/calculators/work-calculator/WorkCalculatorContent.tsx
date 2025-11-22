import React from 'react';

export default function WorkCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Work in Physics?</h2>
        <p className="mb-4 text-lg leading-7">
          In classical mechanics, work is a measure of energy transfer that occurs when an object is moved over a distance by an external force. The concept of work is fundamental in physics, as it quantifies how much energy is being used to perform an action. The most common formula used is
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">W = F × d × cos(θ)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Here, W is the work (in joules, J), F is the magnitude of the force (in newtons, N), d is the displacement (in meters, m), and θ is the angle between the force vector and the displacement vector.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the concept of work helps in analyzing various physical systems, from simple machines to complex engineering structures. Work is not just a measure of the distance covered; it also considers the direction of the force applied.  
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Work Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-lg">
          <li>Enter the applied force in newtons (N).</li>
          <li>Enter the displacement in meters (m).</li>
          <li>Enter the angle between the force and displacement (degrees or radians).</li>
        </ol>
        <p className="text-lg leading-7">
          The calculator computes the component of the force that acts along the displacement using cos(θ), then multiplies by the distance to return the work in joules. This convenience allows students and professionals alike to easily determine the work done in various scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Work Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Here are some practical examples to illustrate how work can be calculated in different situations. 
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example 1: A 50 N force pushes an object 10 m in the same direction (θ = 0°). Work = 50 × 10 × cos(0°) = 500 J.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example 2: A 20 N force acts at 60° to the displacement for 5 m. Work = 20 × 5 × cos(60°) = 100 × 0.5 = 50 J.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example 3: A 30 N force acts at 120° on an object moving 8 m. Work = 30 × 8 × cos(120°) = 30 × 8 × (-0.5) = -120 J.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Work in Physics</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What are the units of work?</h3>
            <p className="text-lg leading-7">Work is measured in joules (J). One joule is equal to one newton-meter (1 J = 1 N·m).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if the angle is 90°?</h3>
            <p className="text-lg leading-7">If θ = 90°, cos(90°) = 0, so the work done is zero because the force is perpendicular to the displacement and does not move the object in the force's direction.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can work be negative?</h3>
            <p className="text-lg leading-7">Yes. If the component of the force along the displacement is opposite to the displacement (cos(θ) is negative), the work is negative, indicating that the force removes energy from the system.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How is work different from energy?</h3>
            <p className="text-lg leading-7">Work is a transfer of energy. While work measures the energy transfer resulting from movement, energy itself is a property of a system that can exist in various forms, such as kinetic, potential, and thermal energy.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Calculating Work Accurately</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Make sure the angle is measured between the force vector and the direction of displacement.</li>
          <li>Use radians if you select the radians unit. The calculator supports both degrees and radians.</li>
          <li>Keep units consistent: force in newtons and distance in meters yield work in joules.</li>
          <li>Double-check the angle measurement to ensure accurate calculations.</li>
          <li>Consider the direction of forces; they can change the sign of work done.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Work Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The work calculator is beneficial for various applications in physics, engineering, and even in everyday scenarios, such as:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Determining the energy required to move heavy objects in construction.</li>
          <li>Analyzing forces in mechanical systems.</li>
          <li>Understanding energy expenditures in physical activities, such as sports or exercise.</li>
          <li>Evaluating efficiency in motor-driven systems where force and displacement are relevant.</li>
        </ul>
      </section>
    </article>
  );
}
