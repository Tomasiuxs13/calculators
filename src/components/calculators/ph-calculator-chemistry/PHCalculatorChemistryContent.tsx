import React from 'react';

export default function PHCalculatorChemistryContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is pH and pOH? - Understanding the Basics</h2>
        <p className="mb-4 text-lg leading-7">
          pH is a measure of the acidity or basicity of an aqueous solution. It is defined as the negative base-10 logarithm of the hydrogen ion concentration: pH = -log10([H+]). pOH is similarly defined for hydroxide ions: pOH = -log10([OH-]). At 25°C, the ionic product of water (Kw) is 1e-14, and pH + pOH = 14 for pure water and dilute aqueous solutions. Understanding these terms is fundamental in chemistry as they play a crucial role in various chemical reactions and biological processes.
        </p>
        <p className="mb-4 text-lg leading-7">
          The pH scale ranges from 0 to 14, where a pH of 7 is considered neutral, values below 7 are acidic, and values above 7 are basic. This scale is logarithmic, meaning each whole number change on the scale represents a tenfold change in acidity or basicity. Knowing how to measure pH and pOH is essential in fields ranging from environmental science to medicine.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the pH & pOH Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the hydrogen ion concentration ([H+]) in molar (M). The calculator automatically computes pH using the formula below and derives pOH from Kw. Understanding how to read the results is as important as performing the calculations.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">pH = -log10([H+])</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            The calculator assumes Kw = 1 × 10^-14 (25°C). Therefore:
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-700">
            <li>pOH = -log10([OH-])</li>
            <li>[OH-] = Kw / [H+]</li>
            <li>pH + pOH ≈ 14 (for dilute aqueous solutions at 25°C)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of pH and pOH Calculations</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <p className="text-lg">
              Example 1: If [H+] = 1.0 × 10^-7 M, pH = -log10(1e-7) = 7. This is a neutral solution at 25°C.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <p className="text-lg">
              Example 2: If [H+] = 1.0 × 10^-3 M, pH = -log10(1e-3) = 3. The solution is acidic.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <p className="text-lg">
              Example 3: If [H+] = 1.0 × 10^-10 M, pH = -log10(1e-10) = 10. This solution is basic.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About pH & pOH</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: What if I enter 0 or a negative concentration?</h3>
            <p className="text-base">A: Hydrogen ion concentration must be greater than 0. The calculator will not produce a valid pH for zero or negative values.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Does the calculator account for temperature?</h3>
            <p className="text-base">A: This calculator uses Kw = 1e-14, which is valid at 25°C. For solutions at different temperatures, Kw changes and pH + pOH will not necessarily equal 14.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Can I convert pH to hydrogen ion concentration?</h3>
            <p className="text-base">A: Yes — [H+] = 10^(-pH). Use the inverse relationship if you need to compute concentration from pH.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Why is pH important in chemistry?</h3>
            <p className="text-base">A: pH is crucial because it affects chemical reactions, biological processes, and the solubility of compounds. Many enzymes, for example, only function within a certain pH range.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Are there any tools to measure pH in real-time?</h3>
            <p className="text-base">A: Yes, there are various pH meters and strips that provide instant readings for solutions, which is useful in laboratory and field settings.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notes for Practitioners Using the pH & pOH Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          For concentrated solutions, activity coefficients become significant, and pH calculated from bulk concentration can deviate from the activity-based pH. This tool is best suited for dilute aqueous solutions and general educational usage. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, consistent pH monitoring in chemical processes ensures quality control and adherence to safety protocols. Professionals in many scientific fields, including medicine, agriculture, and environmental science, utilize pH and pOH calculators to maintain optimal conditions for reactions and biological functions.
        </p>
      </section>
    </article>
  );
}
