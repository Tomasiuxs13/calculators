import React from 'react';

export default function EquilibriumConstantCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Equilibrium Constant (K)?</h2>
        <p className="mb-4 text-lg leading-7">
          The equilibrium constant (K) quantifies the ratio of product activities to reactant activities for a chemical reaction at equilibrium. For a general reaction:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">aA + bB ⇌ cC + dD</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The equilibrium constant expression (K) is written as:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <code className="text-base font-mono text-gray-900">K = ([C]^c × [D]^d) / ([A]^a × [B]^b)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          In this calculator, you enter product and reactant concentrations (M) and the corresponding stoichiometric coefficients. 
          The calculator computes K using concentration values (Kc). K is unitless when activities are used; when concentrations are used it is often reported as unitless with the understanding that concentration units cancel based on the reaction stoichiometry.
        </p>
        <p className="mb-4 text-lg leading-7">
          The equilibrium constant is essential in predicting the direction of a chemical reaction and understanding how changes in concentration, temperature, and pressure can affect the equilibrium state.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Equilibrium Constant Calculator</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2 text-lg leading-7">
          <li>Enter product concentrations separated by commas (e.g., 0.1, 0.2).</li>
          <li>Enter reactant concentrations separated by commas (e.g., 0.05, 0.05).</li>
          <li>Enter stoichiometric coefficients as comma-separated values. By default, the "Order" selector uses products first, then reactants. If you provide fewer coefficients than the total species, missing coefficients default to 1.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <p className="text-base font-mono text-gray-900">Example Input:</p>
          <p className="text-sm text-gray-700 mt-2">Products: 0.1, 0.1</p>
          <p className="text-sm text-gray-700">Reactants: 0.05, 0.05</p>
          <p className="text-sm text-gray-700">Coefficients: 1, 1, 1, 1 (products first)</p>
        </div>

        <p className="mb-4 text-lg leading-7">
          Example calculation with the above inputs:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Numerator = 0.1^1 × 0.1^1 = 0.01
          </p>
          <p className="text-base text-gray-700">
            Denominator = 0.05^1 × 0.05^1 = 0.0025
          </p>
          <p className="text-base font-semibold text-gray-900 mt-2">K = 0.01 / 0.0025 = 4</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          Understanding the equilibrium constant allows chemists and engineers to optimize reactions for desired outcomes.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips and Notes for Using the Equilibrium Constant Calculator</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 text-lg leading-7">
          <li>Ensure concentrations are provided in the same units (typically mol·L⁻¹) when calculating Kc.</li>
          <li>If any reactant concentration is zero and its stoichiometric coefficient is positive, the calculated K will be infinite (division by zero), which often indicates a reaction that proceeds essentially to products under the given conditions.</li>
          <li>If coefficients are omitted or mismatched, the calculator will assume coefficients of 1 for missing values.</li>
          <li>Always double-check entered values for accuracy to ensure reliable results.</li>
          <li>For reactions with multiple steps, consider each step individually to calculate the overall equilibrium constant.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ) about the Equilibrium Constant</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">What if my coefficients order is different?</h3>
            <p className="text-lg text-gray-700">Use the "Order" selector to indicate whether coefficients are listed as products then reactants or reactants then products. The default is products then reactants.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Does the calculator handle activities?</h3>
            <p className="text-lg text-gray-700">This tool uses concentrations (Kc). For activity-based calculations, you would substitute activity values for concentrations before using the calculator.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">How precise is the result?</h3>
            <p className="text-lg text-gray-700">Results are displayed with up to six significant digits by default. Extremely large or small values may be shown in exponential form.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Why is the equilibrium constant important?</h3>
            <p className="text-lg text-gray-700">The equilibrium constant helps predict the behavior of a reaction under specified conditions, making it a pivotal concept in chemical thermodynamics and kinetics.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can this calculator be used for all reactions?</h3>
            <p className="text-lg text-gray-700">Yes, as long as you have the appropriate concentrations and stoichiometric coefficients, this calculator can be used for various chemical reactions across different contexts.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
