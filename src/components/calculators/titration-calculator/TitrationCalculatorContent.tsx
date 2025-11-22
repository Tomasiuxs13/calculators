import React from 'react';

export default function TitrationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Calculate the equivalence point in titrations with our Titration Calculator. Input acid concentration and volume to find required base volume." />
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Titration Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Use this titration calculator to determine the equivalence point when titrating a monoprotic acid with a monoprotic base. Provide the acid concentration (in mol/L), the volume of acid (in mL or L), and the base concentration (in mol/L). The calculator computes the moles of acid and the volume of base required to reach the equivalence point.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding how to perform titration calculations is essential in various chemistry applications, including laboratory experiments, pharmaceuticals, and analytical chemistry. This tool simplifies the process, making it accessible for both students and professionals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Titration Calculator Works</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Methodology</h3>
        <p className="mb-4 text-lg leading-7">
          The calculation follows fundamental stoichiometry. For a monoprotic acid HA neutralized by OH- from a strong base like NaOH, the stoichiometry is 1:1. Here is how the calculation is performed:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Convert the acid volume to liters if necessary.</li>
          <li>Calculate moles of acid: moles = concentration (mol/L) × volume (L).</li>
          <li>Calculate the volume of base required to neutralize those moles: Vbase (L) = moles acid / [Base concentration (mol/L)].</li>
          <li>Convert Vbase to mL if desired.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            moles_acid = C_acid × V_acid (L) {'\n'}
            V_base (L) = moles_acid / C_base
          </code>
        </div>

        <h4 className="text-xl font-semibold mt-4 mb-2">Example Calculation</h4>
        <p className="mb-4 text-lg leading-7">
          If you have 25 mL of 0.100 M HCl and titrate with 0.100 M NaOH, the calculation proceeds as follows: 
          Moles HCl = 0.100 × 0.025 = 0.00250 mol. 
          The required volume of NaOH is 0.00250 / 0.100 = 0.025 L, which equals 25.0 mL. Thus, the equivalence point is reached after adding 25.0 mL of base.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Notes on Titration</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Considerations for Accurate Results</h3>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Ensure concentrations are in mol/L (M) and volumes in liters when calculating moles.</li>
          <li>This calculator assumes a 1:1 stoichiometry (monoprotic acid and monobasic titrant). For polyprotic acids or different stoichiometries, adjust calculations accordingly.</li>
          <li>For strong acid–strong base titrations, the equivalence point pH is approximately 7. For weak acid–strong base, the equivalence pH will be &gt; 7.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Titration</h2>
        <div className="space-y-4">
          <div>
            <strong className="block text-lg">Q: What units should I use for the calculations?</strong>
            <p className="text-base text-gray-700">A: Concentrations should be in molarity (M = mol/L). You may enter the acid volume in mL or L; the calculator will convert as needed.</p>
          </div>

          <div>
            <strong className="block text-lg">Q: What if my acid is diprotic?</strong>
            <p className="text-base text-gray-700">A: For diprotic or polyprotic acids, each mole of acid provides more than one equivalent of H+. Multiply the moles of acid by the number of acidic protons (equivalents) before computing the required base volume.</p>
          </div>

          <div>
            <strong className="block text-lg">Q: Can I use this calculator for titrating a base with an acid?</strong>
            <p className="text-base text-gray-700">A: Yes. Swap the roles of acid and base in the inputs: provide the base concentration and base volume and use the acid concentration as the titrant concentration. The stoichiometry and formulas remain the same when accounting for equivalents.</p>
          </div>

          <div>
            <strong className="block text-lg">Q: How can I ensure accurate measurements during titration?</strong>
            <p className="text-base text-gray-700">A: Use precise measuring tools, such as volumetric flasks or pipettes, and ensure all solutions are mixed thoroughly for consistent results.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
