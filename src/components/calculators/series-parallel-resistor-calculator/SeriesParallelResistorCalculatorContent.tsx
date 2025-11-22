import React from 'react';

export default function SeriesParallelResistorCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Series & Parallel Resistor Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This <strong>Series & Parallel Resistor Calculator</strong> computes the equivalent resistance for a set of resistors connected either in series or in parallel. Quickly evaluate circuit resistance by entering resistor values in ohms (Ω), separated by commas.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this tool for circuit analysis, prototyping, or educational purposes. The calculator updates automatically as you change values — no need to press a separate calculate button. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding how resistors function together in a circuit setup is crucial for anyone studying physics or electrical engineering. This calculator helps visualize and simplify that understanding.
        </p>
        <p className="mb-4 text-lg leading-7">
          Not only does the tool provide quick results, but it also serves as an educational resource. Whether you are a student learning about circuits or a hobbyist experimenting with designs, our calculator makes it easier to explore the complexities of electricity and resistance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works with Series & Parallel Resistors</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator supports two configurations:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg leading-7">
          <li>
            <strong>Series:</strong> Equivalent resistance is the sum of all resistances.
          </li>
          <li>
            <strong>Parallel:</strong> Equivalent resistance is the reciprocal of the sum of reciprocals: 1 / (1/R1 + 1/R2 + ...).
          </li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Series: Req = R1 + R2 + ...
          </code>
          <br />
          <code className="text-base font-mono text-gray-900">
            Parallel: Req = 1 / (1/R1 + 1/R2 + ...)
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Example Calculation</h3>
          <p className="text-base text-gray-700 mb-2">
            For resistors of values 10 Ω, 20 Ω, and 30 Ω:
          </p>
          <p className="text-base font-mono text-gray-900 mb-2">
            Series: Req = 10 + 20 + 30 = 60 Ω
          </p>
          <p className="text-base font-mono text-gray-900">
            Parallel: Req = 1 / (1/10 + 1/20 + 1/30) ≈ 5.455 Ω
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Using the Series & Parallel Resistor Calculator</h2>
        <ul className="list-disc ml-6 mb-4 text-lg leading-7">
          <li>Enter resistor values separated by commas. Whitespace is ignored.</li>
          <li>For parallel circuits, any 0 Ω resistor makes the equivalent 0 Ω (a short circuit).</li>
          <li>Negative or non-numeric entries are ignored in the calculation.</li>
          <li>For complex designs, split your circuits into simple series and parallel sections, and compute each before combining results.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs about the Series & Parallel Resistor Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I mix series and parallel sections?</h3>
            <p className="text-lg text-gray-700">
              This simple calculator handles only purely series or purely parallel sets of resistors. For complex networks that mix series and parallel sections, reduce the circuit step-by-step by combining clear series or parallel groups first.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if I enter invalid values?</h3>
            <p className="text-lg text-gray-700">
              Non-numeric and empty entries are ignored. If no valid resistor values are present, the calculator will not display a result.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why does the result show many decimal places?</h3>
            <p className="text-lg text-gray-700">
              Results are displayed with up to six decimal places for precision. You can round them as needed for practical applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can this calculator aid in circuit analysis?</h3>
            <p className="text-lg text-gray-700">
              By providing instant results for equivalent resistances in both series and parallel arrangements, this calculator allows engineers and students to easily visualize how different configurations impact overall circuit behavior.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Are there any limitations?</h3>
            <p className="text-lg text-gray-700">
              Yes, this calculator is designed for basic series and parallel resistor calculations. It does not handle more complex scenarios involving active components or non-linear resistances.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
