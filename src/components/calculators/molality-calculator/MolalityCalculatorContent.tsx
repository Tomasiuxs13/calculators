import React from 'react';

export default function MolalityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Molality Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Molality (m) is a concentration unit defined as the number of moles of solute per kilogram of solvent. It is commonly used in chemistry when temperature variations affect solution volumes, since molality is based on mass rather than volume.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to quickly determine the molality of a solution by entering the moles of solute and the mass of the solvent (in kilograms). Results update automatically as you type, and you can download a PDF summary of your inputs and results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Definition and Formula</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">m = n / m_solvent</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>m is the molality in mol kg⁻¹ (often written as mol/kg)</li>
          <li>n is the amount of solute in moles (mol)</li>
          <li>m_solvent is the mass of the solvent in kilograms (kg)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Worked Example</h2>
        <p className="mb-4 text-lg leading-7">
          Example: If you dissolve 0.5 mol of solute in 1.0 kg of solvent, the molality is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            m = 0.5 mol / 1.0 kg = 0.5 mol/kg
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">Enter the values into the calculator to reproduce this result. The calculator uses the same formula and updates instantly.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Use Molality?</h2>
        <p className="mb-4 text-lg leading-7">
          Molality is temperature-independent because it is based on mass. It's particularly useful in colligative property calculations (boiling point elevation, freezing point depression), where solution mass remains constant even if volume changes with temperature.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Ensure your solvent mass is in kilograms. If you have grams, divide by 1000 (e.g., 250 g = 0.25 kg).</li>
          <li>If solvent mass is zero or left blank, the calculator will not produce a valid result.</li>
          <li>Molality can be greater than molarity for concentrated solutions when volume changes significantly with solute addition.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">How is molality different from molarity?</h3>
            <p className="text-base text-gray-700">Molarity (M) is moles of solute per liter of solution and depends on temperature-sensitive volume. Molality (m) is moles of solute per kilogram of solvent and is independent of temperature.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can molality be used for very dilute solutions?</h3>
            <p className="text-base text-gray-700">Yes. Molality is valid for dilute and concentrated solutions. For very dilute aqueous solutions, molality and molarity values can be similar but are not identical.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What units should I use?</h3>
            <p className="text-base text-gray-700">Use moles (mol) for the solute amount and kilograms (kg) for the solvent mass. Convert grams to kilograms by dividing by 1000 if needed.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>Any standard general chemistry textbook for definitions and examples of molality.</li>
        </ul>
      </section>
    </article>
  );
}
