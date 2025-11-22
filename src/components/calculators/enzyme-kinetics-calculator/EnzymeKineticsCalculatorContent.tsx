import React from 'react';

export default function EnzymeKineticsCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Enzyme Kinetics Calculator — Km from Michaelis-Menten</h1>
        <p className="mb-4 text-lg leading-7">
          This enzyme kinetics calculator estimates the Michaelis constant (Km) using the observed reaction rate (v), substrate concentration ([S]), and the maximum velocity (Vmax). It uses the classic Michaelis-Menten relationship:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">v = (Vmax × [S]) / (Km + [S])</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Rearranged to solve for Km:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Km = (Vmax × [S] / v) − [S]</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Enter your substrate concentration (in M), the observed reaction rate, and the known or estimated Vmax. The calculator will automatically compute Km and show a Michaelis-Menten curve based on the estimated Km and provided Vmax.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you measure a reaction rate of 0.5 (in your rate units) at a substrate concentration of 0.1 M and you estimate Vmax to be 1. The calculator computes Km as:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">
            Km = (1 × 0.1 / 0.5) − 0.1 = (0.2) − 0.1 = 0.1 M
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">
          The Michaelis-Menten curve will then be plotted to help visualize how velocity changes with substrate concentration given the estimated Km and Vmax.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter the substrate concentration [S] in molar units (M).</li>
          <li>Enter the observed initial reaction rate (v) under those substrate conditions.</li>
          <li>Enter the estimated Vmax for the enzyme under your assay conditions.</li>
          <li>The calculator auto-updates Km and shows a predicted curve. If inputs are invalid (for example, v ≤ 0 or v ≥ Vmax), an error message will be shown because Km cannot be computed reliably.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Tips and Considerations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure that rates are initial velocities measured under steady-state conditions.</li>
          <li>Units must be consistent: if Vmax is expressed in per-second units, reaction rate should be in the same units.</li>
          <li>If the observed reaction rate equals or exceeds Vmax, Km from this simple rearrangement is not meaningful.</li>
          <li>For more robust Km and Vmax estimation, consider fitting multiple [S], v pairs to the Michaelis-Menten equation using nonlinear regression.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What is Km?</h3>
            <p className="text-base text-gray-700">Km (Michaelis constant) is the substrate concentration at which the reaction rate is half of Vmax for a simple Michaelis-Menten enzyme system. It provides insight into the affinity of the enzyme for the substrate: a lower Km indicates higher affinity.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I calculate Vmax from a single measurement?</h3>
            <p className="text-base text-gray-700">No — Vmax is best determined by analyzing multiple measurements across a range of substrate concentrations and fitting the data to the Michaelis-Menten model. This tool assumes you provide an estimated Vmax.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why does the calculator require v &lt; Vmax?</h3>
            <p className="text-base text-gray-700">Mathematically, solving for Km from the rearranged Michaelis-Menten equation requires v to be greater than 0 and less than Vmax to produce a positive, finite Km. If v ≥ Vmax, the formula would produce zero or negative Km values which are biologically implausible for normal Michaelis-Menten kinetics.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
