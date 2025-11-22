import React from 'react';

export default function FrictionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Friction Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the frictional force exerted between two surfaces given the normal force and the coefficient of friction. It's based on the simple and widely used relation in classical mechanics:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">F = μ × N</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where F is the frictional force (in Newtons), μ is the coefficient of friction (unitless), and N is the normal force (in Newtons). Use the fields to the side to change the normal force and coefficient — results update automatically. Accurate friction calculations are crucial for various applications in physics and engineering, where friction plays a significant role in movement and stability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to use the Friction Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the normal force (N) — the perpendicular force pressing the surfaces together.</li>
          <li>Enter the coefficient of friction (μ) — can be static or kinetic depending on your use case.</li>
          <li>The calculator displays the frictional force in Newtons and provides an optional bar chart comparison.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If a block presses down with a normal force of 200 N and the coefficient of friction is 0.25, then frictional force F = 0.25 × 200 = 50 N. Understanding this calculation is essential for designers and engineers who need to ensure safety and efficiency in mechanical systems.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical notes on Friction</h2>
        <p className="mb-4 text-lg leading-7">
          - The coefficient of friction is dimensionless and depends on the pair of surfaces (e.g., rubber on concrete, steel on steel). Typical values range from 0.01 (very slippery) to &gt;1 (very grippy), and it's important to select the right coefficient for accurate calculations.
        </p>
        <p className="mb-4 text-lg leading-7">
          - This simple model assumes friction is proportional to the normal force and independent of contact area and sliding speed — a reasonable approximation for many engineering problems but not universally accurate. In more complex scenarios, such factors can influence results significantly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about Friction</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Q: Which coefficient should I use, static or kinetic?</h3>
            <p className="text-lg leading-7">A: Use the static coefficient if you're computing the maximum force before motion starts; use the kinetic coefficient for objects already sliding. Static coefficients are typically higher than kinetic coefficients, and knowing the difference is crucial for accurate assessments in physics and engineering.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Q: Can friction be greater than the normal force?</h3>
            <p className="text-lg leading-7">A: Yes, if the coefficient of friction μ &gt; 1. This can occur with very sticky materials (e.g., some rubber compounds) but is less common with smooth materials. It's essential for engineers to consider these cases when designing systems that rely on friction.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Q: What units should I use?</h3>
            <p className="text-lg leading-7">A: Use Newtons (N) for the normal force. The coefficient of friction is unitless. The resulting frictional force will be in Newtons, making it straightforward to integrate into broader calculations for real-world applications.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Further reading on Friction</h2>
        <p className="mb-4 text-lg leading-7">
          For deeper study, consult introductory mechanics textbooks covering friction, contact mechanics, and tribology. For engineered contact surfaces, factors like surface roughness, lubrication, and temperature can all affect friction behavior significantly. Understanding these concepts can greatly enhance your approach to physics and engineering problems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Friction Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Friction Calculator can be applied in various fields including mechanical engineering, civil engineering, automotive design, and physics education. It helps in the following scenarios:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Calculating the required coefficient of friction for effective braking systems in vehicles.</li>
          <li>Determining the frictional forces in structural elements such as beams and supports.</li>
          <li>Assisting in educational settings to teach students about friction and its effects in real-world applications.</li>
          <li>Helping designers analyze the performance of various material combinations to ensure optimal grip and minimized wear.</li>
        </ul>
      </section>
    </article>
  );
}
