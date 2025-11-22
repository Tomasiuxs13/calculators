import React from 'react';

export default function PHCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">pH Calculator — Calculate pH from Hydrogen Ion Concentration</h1>
        <p className="mb-4 text-lg leading-7">
          pH is a measure of the acidity or basicity of an aqueous solution. It is defined as the negative base-10 logarithm of the hydrogen ion concentration. This calculator converts a given [H+] concentration in molar units (M) to pH instantly.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this tool to quickly estimate the pH of solutions in laboratory preparations, titrations, environmental sampling, and when working with buffer systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How pH is Calculated</h2>
        <p className="mb-4 text-lg leading-7">
          The mathematical relationship is straightforward:
        </p>
        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">pH = -log10([H+])</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where [H+] is the hydrogen ion concentration in moles per liter (M). For example, a 1 × 10^-7 M solution of hydrogen ions corresponds to pH 7, which is neutral at 25°C.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg"><strong>Example 1:</strong> [H+] = 1e-3 M</p>
            <p className="text-base text-gray-700">pH = -log10(1e-3) = 3.00 (acidic)</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg"><strong>Example 2:</strong> [H+] = 1e-7 M</p>
            <p className="text-base text-gray-700">pH = -log10(1e-7) = 7.00 (neutral at 25°C)</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg"><strong>Example 3:</strong> [H+] = 1e-9 M</p>
            <p className="text-base text-gray-700">pH = -log10(1e-9) = 9.00 (basic)</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Notes</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>pH is temperature-dependent for some solutions; this calculator assumes standard behavior at typical laboratory temperatures (around 25°C).</li>
          <li>Extremely low concentrations approaching 0 are not physically meaningful for pH calculation; the tool requires a positive concentration.</li>
          <li>For very dilute solutions (e.g., &lt; 1e-8 M), ionic water autoionization can affect the effective pH and more advanced corrections may be needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What if I enter 0 or a negative concentration?</h3>
            <p className="text-base text-gray-700">The pH is undefined for zero or negative hydrogen ion concentrations. Enter a positive concentration value to compute pH.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I convert pH to [H+]?</h3>
            <p className="text-base text-gray-700">Yes — you can convert pH to [H+] using [H+] = 10^-pH. This calculator performs the inverse operation (from [H+] to pH).</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Is pH the same as acidity?</h3>
            <p className="text-base text-gray-700">pH is a numeric scale that quantifies the acidity or basicity of a solution. Lower pH values indicate higher acidity (higher [H+]), while higher pH values indicate more basic solutions (lower [H+]).</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References & Further Reading</h2>
        <p className="text-lg text-gray-700">Recommended textbooks and resources: general chemistry textbooks for acid-base chemistry, analytical chemistry texts for pH measurement and buffer calculations, and peer-reviewed articles on activity corrections in very dilute solutions.</p>
      </section>
    </article>
  );
}
