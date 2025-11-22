import React from 'react';

export default function BondEnergyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Bond Energy & Enthalpy Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator helps you estimate the reaction enthalpy (ΔH) by summing bond energies for bonds broken and bonds formed. It is commonly used in organic chemistry to get a quick approximation of whether a reaction is endothermic or exothermic.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter bond energies as comma-separated values in kJ/mol. The calculator automatically computes the total energy of bonds broken, the total energy of bonds formed, and the net ΔH using the formula below.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Bond Energy</h2>
        <p className="mb-4 text-lg leading-7">
          Bond energy refers to the amount of energy required to break a bond between two atoms in a molecule. It is a crucial concept in the study of chemistry, particularly for understanding chemical reactions. By analyzing bond energies, chemists can predict how much energy will be absorbed or released during a reaction. This understanding aids in laboratory settings as well as in industrial applications where chemical reactions are prevalent.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">How it Works</h3>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ΔH = Σ(Bonds Broken) − Σ(Bonds Formed)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The calculator parses each comma-separated list, sums the numeric bond energies, and then subtracts the energy of bonds formed from the energy of bonds broken to give ΔH. Positive ΔH indicates an endothermic process (net input of energy); negative ΔH indicates an exothermic process (net release of energy).
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Example</h3>
        <p className="mb-4 text-lg leading-7">
          Suppose a reaction breaks two bonds with energies 436 kJ/mol and 498 kJ/mol, and forms two bonds each with energy 463 kJ/mol. Enter:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">Bonds Broken: <code className="font-mono">436, 498</code></p>
          <p className="text-base text-gray-700">Bonds Formed: <code className="font-mono">463, 463</code></p>
        </div>
        <p className="mt-4 text-lg leading-7">
          The totals are ΣBroken = 934 kJ/mol and ΣFormed = 926 kJ/mol, so ΔH ≈ 8 kJ/mol (endothermic).
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases for Bond Energy Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Calculating bond energy has numerous applications across various fields of chemistry and material science. For instance, in organic chemistry, researchers can quickly assess the feasibility of reactions. In pharmaceuticals, understanding bond energies helps in evaluating the stability of drug compounds. Additionally, industries often utilize bond energy calculations to develop more efficient synthesis processes and materials.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Estimates</h3>
        <ul className="list-disc ml-6 text-lg">
          <li>Use reliable bond energy tables specific to the molecular context when possible.</li>
          <li>Bond energies are average values; actual reaction enthalpies can differ due to molecular environment, resonance, and intermolecular interactions.</li>
          <li>Convert units consistently. This tool uses kJ/mol by default and can accept J/mol if selected.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Q: Can I enter fractional or negative values?</h4>
            <p className="text-base">A: You can enter decimal values (e.g., 436.5). Negative bond energies are unusual for typical bond dissociation energies and will be treated as numeric inputs, but interpret negative values with caution.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Q: Should I include units when typing values?</h4>
            <p className="text-base">A: No. Enter plain numbers separated by commas. Select the correct unit (kJ/mol or J/mol) from the unit selector. If you enter values in J/mol, the calculator will convert them to kJ/mol for the summary.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Q: How accurate is this method?</h4>
            <p className="text-base">A: This approach gives a quick approximation and is useful for qualitative predictions (endothermic vs exothermic). For quantitative accuracy use experimental enthalpies or computational chemistry methods that account for molecular structure and environment.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
