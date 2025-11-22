import React from 'react';

export default function SolutionConcentrationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Solution Concentration?</h2>
        <p className="mb-4 text-lg leading-7">
          Solution concentration describes how much solute is present in a given amount of solution. Common units include molarity (M, moles per liter), mass concentration (g/L), percent weight/volume (% w/v), and parts per million (ppm). This calculator helps you compute these values from the solute mass, solution volume, and molar mass.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Key Concepts & Formulas</h2>
        <p className="mb-4 text-lg leading-7">The main formulas used by this calculator are:</p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Moles (mol) = Solute mass (g) / Molar mass (g·mol⁻¹)
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Molarity (M) = Moles / Volume (L)
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            g·L⁻¹ = Solute mass (g) / Volume (L)
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            % (w/v) = (g·L⁻¹) × 0.1 = g per 100 mL
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            ppm ≈ mg·L⁻¹ = (g·L⁻¹) × 1000  (approximation valid for dilute aqueous solutions)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you dissolve 10 g of sodium chloride (NaCl, molar mass ≈ 58.5 g·mol⁻¹) in 1.00 L of water. Using the calculator defaults you will get:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Moles = 10 / 58.5 ≈ 0.17094 mol</li>
          <li>Molarity = 0.17094 mol / 1.00 L ≈ 0.17094 M</li>
          <li>Mass concentration = 10 g / 1.00 L = 10 g·L⁻¹</li>
          <li>% (w/v) = 10 g·L⁻¹ × 0.1 = 1.0% (w/v)</li>
          <li>ppm ≈ 10 g·L⁻¹ × 1000 = 10000 ppm (approx)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical Notes</h2>
        <p className="mb-4 text-lg leading-7">
          - This calculator assumes solution volume is provided in liters. For volumes in mL, convert to liters by dividing by 1000.
        </p>
        <p className="mb-4 text-lg leading-7">
          - ppm is given as an approximation (mg·L⁻¹) and is valid for dilute aqueous solutions where the density is close to 1. For more precise work, use mass of solution rather than volume-based approximations.
        </p>
        <p className="mb-4 text-lg leading-7">
          - The calculator updates automatically as you change inputs — no calculate button is required.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>

        <h3 className="text-xl font-semibold mt-4">Can I calculate molality with this tool?</h3>
        <p className="mb-4 text-lg leading-7">
          Molality (mol·kg⁻¹) requires the mass of the solvent (in kilograms). This calculator uses solution volume, so it cannot compute molality accurately without additional information about solution mass or density.
        </p>

        <h3 className="text-xl font-semibold mt-4">Why is ppm approximated from g/L?</h3>
        <p className="mb-4 text-lg leading-7">
          For dilute aqueous solutions, 1 mg·L⁻¹ is approximately 1 ppm because water density is ~1 kg·L⁻¹. For concentrated solutions or non-aqueous solvents, ppm should be evaluated from mass ratios.
        </p>

        <h3 className="text-xl font-semibold mt-4">How do I convert mL to L?</h3>
        <p className="mb-4 text-lg leading-7">
          Divide the volume in milliliters by 1000. For example, 250 mL = 0.250 L.
        </p>
      </section>
    </article>
  );
}
