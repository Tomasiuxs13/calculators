import React from 'react';

export default function GravityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Gravitational Force?</h2>
        <p className="mb-4 text-lg leading-7">
          Gravitational force is the attractive force between two masses. Newton's law of universal gravitation quantifies this force and is fundamental in classical mechanics, astrophysics, and engineering when estimating the attraction between bodies large and small.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the gravitational force between two point masses (or spherically symmetric masses where the center-to-center distance is used) using the formula below.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding gravitational force is essential for various fields, including physics, space exploration, and even engineering projects. By utilizing this calculator, you can also visualize the effects of gravity on different masses and distances.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">The Formula</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">F = G * (m1 * m2) / r²</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>F is the gravitational force in newtons (N)</li>
          <li>G is the gravitational constant, approximately 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²</li>
          <li>m1 and m2 are the masses in kilograms (kg)</li>
          <li>r is the separation distance between the centers of the masses in meters (m)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Using the default values in the calculator:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            m1 = 1000 kg, m2 = 1000 kg, r = 10 m
          </p>
          <p className="text-base text-gray-700 mt-2">
            F = G * (1000 * 1000) / 10² = 6.67430e-11 * 1e6 / 100 = 6.67430e-7 N
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">
          This example illustrates how the gravitational force can be calculated between two objects of significant mass at a set distance, making it easier to understand how gravity operates in everyday life.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter Mass 1 in kilograms.</li>
          <li>Enter Mass 2 in kilograms.</li>
          <li>Enter the separation distance in meters.</li>
          <li>The gravitational force is computed automatically; no extra button needed.</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          Use the chart toggle to view a visual comparison between the masses and the resulting force. Download a PDF report of the inputs and results using the download button.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether for educational purposes or professional calculations, understanding how to use this calculator effectively can enhance your grasp of gravitational interactions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Gravity Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This gravity calculator can be particularly useful in several scenarios, such as:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Educational settings for teaching students about gravity and mass interactions.</li>
          <li>Research environments where calculations of gravitational forces between celestial bodies are required.</li>
          <li>Engineering projects involving mechanics, where gravitational force plays a role in design considerations.</li>
          <li>Space exploration missions, where accurate calculations of gravitational forces influence trajectory and planning.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I use this for real planets?</h3>
            <p className="text-lg leading-7">
              The formula is valid for point masses or spherically symmetric mass distributions using center-to-center distance. For extended, non-spherical bodies, or when relativistic effects matter, more advanced models are required.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What units should I use?</h3>
            <p className="text-lg leading-7">
              Use kilograms for masses and meters for distance so the result is in newtons (N). Mixing units will produce incorrect results unless converted beforehand.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why is the force so small for everyday masses?</h3>
            <p className="text-lg leading-7">
              The gravitational constant G is very small (∼6.67×10⁻¹¹), so unless masses are extremely large (like planets) or distances are extremely small, the force between ordinary objects is tiny.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">What applications can benefit from this calculator?</h3>
            <p className="text-lg leading-7">
              This calculator is beneficial for students studying physics, professionals in engineering and space exploration, and researchers requiring precise gravitational calculations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I further my understanding of gravity?</h3>
            <p className="text-lg leading-7">
              Engaging with interactive simulations, attending lectures, or reviewing academic articles can deepen your knowledge of gravity and its applications in real-world scenarios.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
