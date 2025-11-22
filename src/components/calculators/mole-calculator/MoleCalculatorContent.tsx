import React from 'react';

export default function MoleCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Mole?</h2>
        <p className="mb-4 text-lg leading-7">
          In chemistry, a mole is a fundamental unit that measures the amount of substance. One mole corresponds to Avogadro's number (approximately 6.022 × 10^23) of elementary entities (atoms, molecules, ions, etc.). Calculating the number of moles from a given mass is a common task in stoichiometry and laboratory work.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator converts mass (in grams) to amount of substance (in moles) using the molar mass (grams per mole). It is useful for determining how much of a substance you have or need in reactions and for preparing solutions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Formula</h2>
        <p className="mb-4 text-lg leading-7">The relationship between mass, molar mass, and moles is:</p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">moles = mass (g) / molar mass (g/mol)</code>
        </div>

        <p className="mb-4 text-lg leading-7">Where:</p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>mass is the mass of the sample in grams (g)</li>
          <li>molar mass is the mass per mole of the substance (g/mol)</li>
          <li>moles is the amount of substance in moles (mol)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have 18 grams of water (H2O). The molar mass of water is approximately 18 g/mol. Using the formula:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">moles = mass / molar mass = 18 g / 18 g/mol = 1 mol</p>
        </div>

        <p className="mb-4 text-lg leading-7">So, 18 g of water corresponds to 1 mole of water molecules.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Calculator</h2>
        <ol className="list-decimal list-inside text-lg mb-4">
          <li>Enter the mass of the sample in grams.</li>
          <li>Enter the molar mass of the substance in grams per mole (g/mol).</li>
          <li>The calculator will automatically compute the number of moles. Use the chart to visualize the inputs and result.</li>
        </ol>
        <p className="text-lg">You can download a PDF summary of the inputs and results for record-keeping or reporting.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What if my molar mass is not known?</h3>
            <p className="text-lg">You can calculate molar mass by summing the atomic masses of all atoms in the molecular formula. Use a periodic table or database to find atomic masses (in g/mol).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can mass be negative?</h3>
            <p className="text-lg">No. Mass should be a non-negative value. The calculator validates inputs and will not produce a result if the mass is negative or the molar mass is zero or not provided.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why are chart bars different units?</h3>
            <p className="text-lg">The chart displays both input values (grams and grams per mole) and the computed moles. These values have different units; the chart is intended to give a quick visual overview rather than a strict unit-comparable plot.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
