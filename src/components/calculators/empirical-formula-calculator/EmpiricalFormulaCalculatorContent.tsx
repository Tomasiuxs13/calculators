import React from 'react';

export default function EmpiricalFormulaCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Empirical Formula Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator determines the empirical formula of a compound from its percent composition by mass. Provide the element symbols and their corresponding percent composition (comma-separated). The tool assumes a 100 g sample for simplicity so that percentages directly convert to grams.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Assume a 100 g sample: percentage values become grams.</li>
          <li>Convert grams to moles using atomic weights (grams ÷ atomic mass).</li>
          <li>Divide all mole values by the smallest mole value to get ratios.</li>
          <li>Multiply ratios by the smallest integer to obtain whole-number subscripts.</li>
          <li>Write the empirical formula using element symbols and subscripts.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Empirical Formula Calculation Steps: grams → moles → divide by smallest → multiply to whole numbers
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Given percent composition: C 40%, H 6.7%, O 53.3%.
        </p>
        <p className="mb-4 text-lg leading-7">
          Steps:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Assume 100 g sample: C = 40 g, H = 6.7 g, O = 53.3 g.</li>
          <li>Moles: C: 40 / 12.011 ≈ 3.33 mol; H: 6.7 / 1.008 ≈ 6.65 mol; O: 53.3 / 15.999 ≈ 3.33 mol.</li>
          <li>Divide by smallest (≈3.33): C: 1, H: 2, O: 1 → empirical formula CH2O.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips & Common Issues</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Make sure element symbols are correctly capitalized (e.g., <span className="font-mono">Cl</span>, not <span className="font-mono">CL</span>).</li>
          <li>Provide the same number of percentages as elements; the calculator validates the counts.</li>
          <li>If an element is not in the built-in atomic weight table, you will see an error. You can add common elements to the mapping in the calculator component if needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Q: Why assume a 100 g sample?</h3>
            <p className="text-base text-gray-700">A: Percent compositions are relative. Assuming 100 g makes conversion to grams direct and simplifies the mole calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: What if the ratios are not exact integers?</h3>
            <p className="text-base text-gray-700">A: The calculator attempts small integer multipliers (1–12) to find the simplest whole-number ratio. This mirrors typical lab rounding procedures for empirical formula determination.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: Can this give the molecular formula?</h3>
            <p className="text-base text-gray-700">A: The empirical formula shows the simplest whole-number ratio of atoms. To get the molecular formula, you also need the compound's molar mass and then determine the multiple between the empirical formula mass and the molecular mass.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to use</h2>
        <p className="text-base text-gray-700">Use this tool for introductory chemistry, stoichiometry problems, lab report analysis, and when interpreting percent composition data to determine empirical formulas.</p>
      </section>
    </article>
  );
}
