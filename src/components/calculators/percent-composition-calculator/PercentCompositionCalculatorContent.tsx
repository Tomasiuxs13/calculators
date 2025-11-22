import React from 'react';

export default function PercentCompositionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Percent Composition by Mass</h1>
        <p className="mb-4 text-lg leading-7">
          The percent composition of an element in a compound is the fraction (by mass) of that element relative to the total mass of the compound, expressed as a percentage. This calculator parses chemical formulas, computes molar masses using atomic weights, and reports the mass percent of the requested element.
        </p>
        <p className="mb-4 text-lg leading-7">
          It supports common formulas and nested parentheses such as Fe2(SO4)3, Mg(OH)2, and C6H12O6. If an element in the formula is not recognized, the calculator will prompt you to add its atomic weight.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The tool follows these steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Parse the chemical formula to determine counts of each element (handles parentheses).</li>
          <li>Multiply each element count by its atomic weight to get the contribution to molar mass.</li>
          <li>Sum contributions to obtain the molar mass of the compound.</li>
          <li>Compute percent composition: (mass of element in formula / total molar mass) × 100.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Percent = (n_element × atomic_weight_element) / (sum(n_i × atomic_weight_i)) × 100
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Water — H2O</h3>
            <p className="text-lg">Molar mass = 2 × 1.00794 (H) + 15.9994 (O) = 18.01528 g/mol.</p>
            <p className="text-lg">Percent H = (2 × 1.00794 / 18.01528) × 100 ≈ 11.19%</p>
            <p className="text-lg">Percent O ≈ 88.81%</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Glucose — C6H12O6</h3>
            <p className="text-lg">Compute contribution from C, H, and O and then percent per element.</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold">Magnesium Hydroxide — Mg(OH)2</h3>
            <p className="text-lg">The parser recognizes parentheses: Mg(OH)2 has Mg=1, O=2, H=2.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: What if my formula includes an element not listed?</h3>
            <p className="text-lg">A: The calculator relies on an internal table of atomic weights. If an element is not recognized, you'll see an error listing the unknown symbol(s). You can request to add that element's atomic weight to the dataset.</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: Can I use fractional subscripts or hydrates (e.g., CuSO4·5H2O)?</h3>
            <p className="text-lg">A: The current parser handles integer counts and nested parentheses. For hydrates using a middle dot (·), replace the dot with a plus sign or expand the hydrate explicitly (e.g., CuSO4 + 5H2O) or enter CuSO4(H2O)5.</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: Are results rounded?</h3>
            <p className="text-lg">A: Results displayed by the calculator are rounded to a sensible number of decimal places, but the PDF download includes values with greater precision where applicable.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Input</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Use correct element symbols (capital letter followed by optional lowercase letter), e.g., Fe, Na, Cl.</li>
          <li>Use parentheses for grouped units with multipliers, e.g., Al2(SO4)3.</li>
          <li>Avoid stray characters — only element symbols, digits, and parentheses are supported.</li>
        </ul>
      </section>
    </article>
  );
}
