import React from 'react';

export default function EntropyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Entropy Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the entropy change (ΔS) for a process assuming reversible heat transfer using the formula ΔS = Q_rev / T. Enter the heat exchanged in joules (J) and the absolute temperature in kelvin (K) to obtain entropy in joules per kelvin (J/K). Understanding the concept of entropy is crucial for those studying thermodynamics, chemistry, and various fields of physics.
        </p>
        <p className="mb-4 text-lg leading-7">
          The tool is useful for introductory thermodynamics calculations, classroom examples, and quick checks when analyzing energy transfer at a given temperature. Accurately calculating entropy change can aid in understanding the direction of processes and the efficiency of energy exchanges in real-world applications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Calculation Works in Entropy</h2>
        <p className="mb-4 text-lg leading-7">
          For a reversible process where heat Q_rev is transferred at a constant temperature T, the change in entropy is given by:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ΔS = Q_rev / T</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Note: Temperature must be in kelvin (K) and &gt; 0. If heat is released from the system (exothermic, Q &lt; 0), ΔS will be negative. This negative value indicates a loss of disorder or an increase in the system’s stability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Entropy Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose 1000 J of reversible heat is added to a system at 298 K (room temperature). The entropy change can be calculated as follows:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">ΔS = 1000 J / 298 K ≈ 3.3557 J/K</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          In practical terms, this means that adding 1000 joules of heat at room temperature results in an increase in entropy of approximately 3.36 J/K, illustrating the relationship between heat transfer and disorder within a system.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Notes on Entropy</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>ΔS depends on reversible heat. For irreversible processes, care must be taken when applying this simple formula.</li>
          <li>Ensure temperature is an absolute temperature in kelvin. Converting from Celsius: T(K) = T(°C) + 273.15.</li>
          <li>For processes where temperature changes during heat flow, integrate dQ_rev/T rather than using the simple division.</li>
          <li>Entropy is a measure of disorder, thus it plays a key role in predicting the spontaneity of a process; increases in entropy indicate a spontaneous process.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Entropy</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I use this for irreversible processes?</h3>
            <p className="text-base text-gray-700">No. This calculator uses ΔS = Q_rev / T which applies for reversible heat transfer at constant temperature. Irreversible processes require different analysis (e.g., calculating entropy production).</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if temperature is not constant during the process?</h3>
            <p className="text-base text-gray-700">If temperature varies, compute ΔS by integrating dQ_rev/T over the process: ΔS = ∫(dQ_rev / T). This tool assumes constant T for simplicity.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why must temperature be in kelvin?</h3>
            <p className="text-base text-gray-700">Entropy is defined using absolute temperature. Using Celsius or Fahrenheit will yield incorrect results unless converted to kelvin. This ensures the calculations align with the thermodynamic principles.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What does a positive or negative ΔS indicate?</h3>
            <p className="text-base text-gray-700">A positive ΔS signifies an increase in entropy or disorder, suggesting the process is spontaneous under the given conditions. Conversely, a negative ΔS indicates decreased disorder, commonly associated with non-spontaneous reactions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Entropy Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The entropy calculator can be beneficial in various scenarios, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Academic settings for students studying thermodynamics and chemistry.</li>
          <li>Laboratories looking to quickly estimate entropy changes for experiments.</li>
          <li>Engineers and scientists analyzing energy transitions in physical systems.</li>
          <li>Environmental studies assessing the impact of energy transfers in natural processes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References & Further Reading on Entropy</h2>
        <p className="text-base text-gray-700">
          Standard textbooks on thermodynamics cover entropy in detail. For a concise overview, see introductory sections on entropy change and reversible processes. Recommended reading includes "Thermodynamics: An Engineering Approach" and "Physical Chemistry" by Atkins. Additionally, reputable online resources and academic journals offer insights into recent studies and practical applications of entropy.
        </p>
      </section>
    </article>
  );
}
