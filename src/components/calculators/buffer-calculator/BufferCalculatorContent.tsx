import React from 'react';

export default function BufferCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8">Buffer pH Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This <strong>Buffer pH Calculator</strong> allows you to compute the pH of a buffered solution using the Henderson-Hasselbalch equation. Buffers play a crucial role in maintaining pH levels in various biological, chemical, and environmental systems, making this tool essential for students, researchers, and professionals.
        </p>
        <p className="mb-4 text-lg leading-7">
          A buffer is a solution that resists changes in pH when small amounts of acid or base are added. Many biological and chemical systems rely on buffers to maintain a stable pH. The Henderson-Hasselbalch equation relates the pH of a buffered solution to the pKa of the acid and the ratio of the conjugate base ([A-]) to the weak acid ([HA]):
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">pH = pKa + log10([A-] / [HA])</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          This calculator uses the Henderson-Hasselbalch equation to compute either the pH or the pOH (assuming pKw = 14 at 25°C) based on the pKa and concentrations provided. By understanding the variables involved, users can predict pH levels more accurately.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Buffer pH Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the pKa of the weak acid (e.g., acetic acid pKa ≈ 4.75).</li>
          <li>Enter the concentration of the conjugate base [A-] in molar (M).</li>
          <li>Enter the concentration of the weak acid [HA] in molar (M).</li>
          <li>Choose whether you want the output as pH or pOH (pOH = 14 - pH at 25°C).</li>
        </ol>

        <p className="mb-4 text-lg leading-7">
          The result updates automatically as you change any input; there is no calculate button. You can also download the inputs and results as a PDF for record-keeping. This functionality is particularly useful for students needing to keep track of their lab data.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example Calculation Using the Buffer pH Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Example: pKa = 4.75, [A-] = 0.10 M, [HA] = 0.10 M. This example illustrates how to effectively use our calculator to determine pH.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Ratio [A-]/[HA] = 0.10 / 0.10 = 1. Plug into Henderson-Hasselbalch:
          </p>
          <pre className="mt-2 p-3 bg-white rounded text-sm font-mono">pH = 4.75 + log10(1) = 4.75</pre>
        </div>
        <p className="mb-4 text-lg leading-7">
          If you choose pOH as the output (at 25°C), pOH = 14 - pH = 9.25. This example demonstrates the straightforward application of the calculator in real scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notes and Limitations</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>The Henderson-Hasselbalch equation is an approximation that assumes activity coefficients ≈ 1 (dilute solutions).</li>
          <li>When [HA] = 0 or [A-] = 0, the equation leads to undefined or infinite values; the calculator will indicate when the ratio is undefined.</li>
          <li>pOH calculation assumes pKw = 14 (valid near 25°C). For different temperatures, pKw changes and pOH = pKw - pH.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Buffer pH Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The <strong>Buffer pH Calculator</strong> can be utilized in various contexts, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Educational purposes in chemistry classes for understanding buffered solutions.</li>
          <li>Laboratory research to determine suitable buffer solutions for experiments.</li>
          <li>Environmental studies to analyze the buffering capacity of natural water bodies.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQ</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold">What if my concentrations are equal?</h3>
            <p className="text-lg leading-7">If [A-] = [HA], the ratio is 1 and log10(1) = 0, so pH = pKa.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use this for strong acid/base additions?</h3>
            <p className="text-lg leading-7">This calculator predicts the buffer pH from the given concentrations. For titrations or when adding significant amounts of strong acid/base, use a titration curve or more detailed equilibrium calculations.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why does the calculator show an undefined result?</h3>
            <p className="text-lg leading-7">Undefined or infinite results occur when the ratio [A-]/[HA] is 0 (no conjugate base) or infinite (no weak acid). In practical terms, a true buffer requires both components to be present.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Atkins' Physical Chemistry — discussion of acid-base equilibria and buffer systems.</li>
          <li>Common laboratory manuals on buffer preparation and pH calculations.</li>
          <li>Peer-reviewed articles discussing advanced aspects of buffer chemistry.</li>
        </ul>
      </section>
    </article>
  );
}
