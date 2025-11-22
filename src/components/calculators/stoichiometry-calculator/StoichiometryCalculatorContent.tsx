import React from 'react';

export default function StoichiometryCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Stoichiometry Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Use the Stoichiometry Calculator to determine how much product can be formed from a given mass of a reactant, based on the chemical equation stoichiometry and molar masses. This tool converts grams to moles (the base unit), applies stoichiometric ratios, and converts back to grams for products.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h3>
        <p className="mb-4 text-lg leading-7">
          The calculator follows three main steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Convert the given mass of the reactant to moles using its molar mass (g → mol).</li>
          <li>Apply the stoichiometric ratio from the balanced equation to find moles of product(s).</li>
          <li>Convert the product moles back to mass using the product's molar mass (mol → g).</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">moles = mass (g) / molar mass (g·mol⁻¹)</code>
          <br />
          <code className="text-base font-mono text-gray-900">product moles = reactant moles × (coef_product / coef_reactant)</code>
          <br />
          <code className="text-base font-mono text-gray-900">product mass (g) = product moles × product molar mass (g·mol⁻¹)</code>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Example</h3>
        <p className="mb-4 text-lg leading-7">
          For the default reaction <strong> 2H2 + O2 → 2H2O</strong>, if you have 4 g of H2 (reactant), the calculator will:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Convert 4 g H2 → moles H2 (4 g / 2.016 g·mol⁻¹ ≈ 1.984 mol)</li>
          <li>Use stoichiometry to find moles H2O: 1.984 mol H2 × (2 mol H2O / 2 mol H2) = 1.984 mol H2O</li>
          <li>Convert to grams: 1.984 mol × 18.015 g·mol⁻¹ ≈ 35.76 g H2O</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tips</h3>
        <p className="mb-4 text-lg leading-7">
          - Make sure the chemical equation is balanced and written in the format <code className="font-mono">"2H2 + O2 -&gt; 2H2O"</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          - The calculator uses common molar masses (H2, O2, H2O). For other species, add molar masses to the utility table in the code if needed.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h3>
        <h4 className="text-lg font-semibold mt-4">Q: Can I use this for any reaction?</h4>
        <p className="mb-4 text-lg leading-7">
          A: The parser supports simple balanced equations of the form <code className="font-mono">reactants -&gt; products</code> with integer coefficients. For complex species or formulas, ensure they match the molar mass table in the code.
        </p>

        <h4 className="text-lg font-semibold mt-4">Q: What if my species is not recognized?</h4>
        <p className="mb-4 text-lg leading-7">
          A: If a species' molar mass is not defined in the internal table, the calculator will not compute results for that species. You can extend the <code className="font-mono">molarMasses</code> object in the component with the appropriate molar mass (g·mol⁻¹).
        </p>

        <h4 className="text-lg font-semibold mt-4">Q: Does the calculator consider limiting reagents?</h4>
        <p className="mb-4 text-lg leading-7">
          A: This basic calculator uses the single selected reactant as the basis for calculation. To perform limiting reagent analysis, provide amounts for all reactants and compare the theoretical product amounts — an enhancement for future versions.
        </p>
      </section>
    </article>
  );
}
