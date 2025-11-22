import React from 'react';

export default function HalfLifeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Half-Life Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This half-life calculator estimates the time required for a quantity to reduce to half its initial amount during exponential decay. It's commonly used in biology to describe decay of populations, clearance of substances, or degradation of biomolecules.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          For first-order (exponential) decay, the relationship between the initial amount A0, the amount A after time t, and the half-life t_half is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            A = A0 * 2^(-t / t_half)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Rearranging to solve for half-life when A0, A, and t are known:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            t_half = -t * ln(2) / ln(A / A0)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Use this calculator by entering the initial amount, the observed remaining amount after a known time period, and the time period itself. The result is the half-life in the same units as the time input (seconds, minutes, hours, etc.).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a bacterial population decreases from 100 units to 25 units over 20 hours. Enter A0 = 100, A = 25, t = 20. The calculator will compute:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">t_half = -20 * ln(2) / ln(25 / 100) = 10 hours</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Interpretation and notes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Inputs must be positive numbers. Final amount must be less than initial amount for decay.</li>
          <li>The half-life returned has the same time units as the Time Period you provide.</li>
          <li>This calculation assumes first-order kinetics (exponential decay). It does not apply to non-exponential decay without modification.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What if the final amount is greater than or equal to the initial amount?</h3>
            <p className="text-base">The formula assumes decay (final &lt; initial). If final &gt;= initial, the half-life for decay is not defined; you may be observing growth or measurement error.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use different units (seconds, minutes, hours)?</h3>
            <p className="text-base">Yes. The calculator returns the half-life in the same units as the Time Period you enter. Ensure consistency when interpreting results.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Is this valid for all biological processes?</h3>
            <p className="text-base">This tool is valid for processes that follow first-order kinetics (exponential decay). Some biological systems follow more complex dynamics; use appropriate models in those cases.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References</h2>
        <p className="text-base">Common textbooks on biochemistry and pharmacokinetics cover half-life and exponential decay models in detail. For applied microbiology, consult primary literature for process-specific kinetics.</p>
      </section>
    </article>
  );
}
