import React from 'react';

export default function GibbsFreeEnergyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Gibbs Free Energy Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to compute the Gibbs free energy change (ΔG) for a process using the relation
          ΔG = ΔH − TΔS. Provide the enthalpy change (ΔH) in kJ/mol, the entropy change (ΔS) in J/mol·K,
          and the temperature (T) in Kelvin. The calculator converts units as necessary and displays
          results in kJ/mol or J/mol depending on your selection. Understanding Gibbs free energy is essential for predicting
          the spontaneity of chemical reactions and is a fundamental concept in thermodynamics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Understanding Gibbs Free Energy</h2>
        <p className="mb-4 text-lg leading-7">
          The Gibbs free energy change indicates whether a process is spontaneous at constant temperature and pressure.
          A negative ΔG means the process is spontaneous, while a positive ΔG means it is non-spontaneous.
          The formula used is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ΔG = ΔH − TΔS</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Note on units: ΔH should be entered in kJ/mol and ΔS in J/mol·K. The term TΔS is computed as (T × ΔS)
          which yields J/mol; it is converted to kJ/mol by dividing by 1000 so it can be subtracted from ΔH (kJ/mol).
        </p>
        
        <p className="mb-4 text-lg leading-7">
          This concept underpins various applications in chemistry, including reaction kinetics and equilibrium,
          making the Gibbs free energy calculator a useful tool for students and researchers alike.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example: Calculating Gibbs Free Energy</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a reaction has ΔH = −100 kJ/mol and ΔS = 50 J/mol·K at T = 298 K. Then:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            TΔS = 298 K × 50 J/mol·K = 14,900 J/mol = 14.9 kJ/mol
          </p>
          <p className="text-base text-gray-700 mt-2">
            ΔG = ΔH − TΔS = (−100 kJ/mol) − (14.9 kJ/mol) = −114.9 kJ/mol
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Using the Gibbs Free Energy Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter ΔH in kJ/mol (can be negative for exothermic processes).</li>
          <li>Enter ΔS in J/mol·K.</li>
          <li>Enter the temperature in Kelvin.</li>
          <li>Optionally choose to display the result in kJ/mol or J/mol.</li>
        </ol>
        <p className="mt-4 text-lg">
          The calculator updates automatically as you change inputs. Click the "Download PDF" button to export the inputs and results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQ: Common Questions about Gibbs Free Energy</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Why is ΔS in J/mol·K and ΔH in kJ/mol?</h3>
            <p className="text-base">
              By convention, entropy is often expressed in J/mol·K and enthalpy in kJ/mol. The calculator converts TΔS to kJ/mol so the units match when computing ΔG.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What does a negative ΔG mean?</h3>
            <p className="text-base">
              A negative Gibbs free energy means the process is spontaneous under constant temperature and pressure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use different units?</h3>
            <p className="text-base">
              Enter values using the units specified by the input fields. You can change the result display to J/mol if you prefer finer granularity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Is Gibbs free energy relevant in biological systems?</h3>
            <p className="text-base">
              Yes, Gibbs free energy is crucial for understanding metabolic reactions and processes in biochemistry. It helps predict whether reactions occur spontaneously in living organisms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How does temperature affect Gibbs free energy?</h3>
            <p className="text-base">
              The temperature can significantly influence the value of ΔG, especially when ΔS is positive or negative. Higher temperatures can make endothermic reactions (positive ΔH) more favorable if ΔS is also positive.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
