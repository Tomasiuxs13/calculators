import React from 'react';

export default function HeatTransferCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Heat Transfer Calculator (Q = m·c·ΔT)</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the heat transferred (Q) during a temperature change using the formula Q = m·c·ΔT, where m is mass in kilograms, c is the specific heat capacity in joules per kilogram per kelvin (J/kg·K), and ΔT is the temperature change in kelvin (K). Enter the values and the result will update automatically.
        </p>
        <p className="mb-4 text-lg leading-7">
          It is suitable for quick thermodynamics estimates in engineering, physics problems, or educational demonstrations. The calculator uses SI units by default so outputs are given in joules (J). Understanding heat transfer is crucial in various fields, including engineering, chemistry, and environmental sciences.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, mastering heat transfer concepts can greatly benefit students and researchers aiming to deepen their knowledge in thermodynamics and energy management.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Understanding Heat Transfer: Formula and Explanation</h2>
        <p className="mb-4 text-lg leading-7">
          The governing equation is foundational for thermodynamics:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Q = m × c × ΔT</code>
        </div>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>m</strong>: mass, in kilograms (kg)</li>
          <li><strong>c</strong>: specific heat capacity, in J/kg·K (for water ≈ 4186 J/kg·K)</li>
          <li><strong>ΔT</strong>: temperature change, in kelvin (K) — note that 1 K = 1 °C for temperature differences</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Understanding each variable is crucial for accurate calculations. The mass (m) represents how much of the substance you're dealing with, while the specific heat capacity (c) tells you how much energy is needed to raise the temperature of that mass by one degree. The temperature change (ΔT) indicates how much the temperature varies, essential to determine the total heat transfer.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Heat Transfer Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you heat 1 kg of water (c ≈ 4186 J/kg·K) by 10 K. The heat required is calculated as follows:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Q = 1 kg × 4186 J/kg·K × 10 K = 41,860 J
          </p>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator's default values replicate this example, so you'll see the result immediately when the page loads. This illustrates the ease of using the calculator for real-time computations, making it an invaluable tool for students and professionals alike.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Best Practices & Notes on Heat Transfer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure units are consistent: mass in kg, specific heat in J/kg·K, and temperature change in K.</li>
          <li>ΔT can be negative (cooling); the sign of Q will indicate heat loss (negative) or heat gain (positive).</li>
          <li>Specific heat values vary with substance and temperature — use tabulated values for accuracy.</li>
          <li>In practical applications, consider heat losses to the environment for more precise results.</li>
          <li>Remember that the formula does not consider phase changes, which require separate calculations for latent heat.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Heat Transfer</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I use °C instead of K for ΔT?</h3>
            <p className="text-lg leading-7 mt-2">
              Yes — for temperature <em>differences</em>, 1 °C equals 1 K. If you're entering a temperature change in degrees Celsius, you can use it directly as ΔT.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What about units for specific heat?</h3>
            <p className="text-lg leading-7 mt-2">
              Specific heat must be in J/kg·K for the output to be in joules. If you have values in other units (e.g., J/g·K), convert them first (1 J/g·K = 1000 J/kg·K).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Does this include phase change?</h3>
            <p className="text-lg leading-7 mt-2">
              No. Phase changes (melting, boiling) require latent heat calculations and are not accounted for in Q = m·c·ΔT. Understanding the limitations of this formula is essential for accurate heat transfer analysis.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Heat Transfer Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Heat transfer calculations are applicable in various real-world scenarios, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cooling systems in automobiles and HVAC units.</li>
          <li>Culinary science, such as cooking processes that involve water and energy transfer.</li>
          <li>Engineering applications where temperature control is crucial for material properties.</li>
          <li>Aerospace studies where thermal management systems play a key role in vehicle performance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References for Further Learning</h2>
        <p className="text-lg leading-7">
          Explore standard thermodynamics and heat transfer textbooks for specific heat values and in-depth treatments of energy transfer. Recommended resources include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://www.thermodynamics.com" className="text-blue-600 underline">Thermodynamics: An Engineering Approach</a></li>
          <li><a href="https://www.jstor.org" className="text-blue-600 underline">JSTOR for academic articles</a></li>
          <li><a href="https://www.sciencedirect.com" className="text-blue-600 underline">ScienceDirect for research papers</a></li>
        </ul>
      </section>
    </article>
  );
}
