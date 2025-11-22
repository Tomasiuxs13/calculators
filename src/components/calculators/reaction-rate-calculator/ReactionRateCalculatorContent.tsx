import React from 'react';

export default function ReactionRateCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Reaction Rate Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the average reaction rate given a concentration change (Δ[A]) and a time interval (Δt). 
          It also provides a pseudo first-order rate constant and the corresponding half-life assuming an initial concentration of 1.0 M. 
          Use this tool for quick, reproducible estimates in kinetics problems and lab data processing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Reaction Rate Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The average reaction rate is defined as the change in concentration divided by the change in time:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Rate = Δ[A] / Δt</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The rate has units of mol·L⁻¹·s⁻¹ (commonly written as M·s⁻¹). If you provide a positive concentration change, 
          the calculator will return a positive rate; for consumption (negative Δ[A]), the sign will reflect the decrease (negative rate).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Rate Constant (Pseudo First-Order)</h2>
        <p className="mb-4 text-lg leading-7">
          Without additional information (such as reactant order or initial concentrations), we compute a pseudo first-order rate constant 
          by assuming an initial concentration [A]₀ = 1.0 M. Under this assumption:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">k (1/s) ≈ Rate / [A]₀ = Rate (when [A]₀ = 1 M)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          For a true kinetic analysis, supply concentration vs. time data or specify reaction order. 
          This calculator gives a quick estimate useful for classroom problems and initial data checks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Reaction Rate Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose the concentration of A decreases by 0.05 M over 20 seconds. Enter Δ[A] = 0.05 and Δt = 20.
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Average rate = 0.05 / 20 = 0.0025 M·s⁻¹</li>
          <li>Pseudo first-order k ≈ 0.0025 s⁻¹ (assuming [A]₀ = 1 M)</li>
          <li>First-order half-life t₁/₂ = ln(2) / k ≈ 277.26 s</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Use of the Reaction Rate Calculator</h2>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Always ensure Δt &gt; 0. The calculator requires a positive time interval.</li>
          <li>For integrated rate law analysis, use concentration-time data and nonlinear fitting or linearized integrated rate methods.</li>
          <li>Be cautious: the pseudo first-order constant is an approximation unless you know the correct order and initial concentrations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ) About Reaction Rates</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Q: Can I use negative Δ[A] values?</h3>
            <p className="text-lg">A: Yes. A negative Δ[A] indicates consumption of a reactant and will produce a negative average rate. Interpret the sign accordingly.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: What if I know the reaction order?</h3>
            <p className="text-lg">A: If you know the order, apply the appropriate integrated rate law to compute the rate constant from concentration vs. time data. 
            This calculator provides a quick average rate and a pseudo first-order constant for convenience.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: How precise are the results?</h3>
            <p className="text-lg">A: Results are rounded to a reasonable number of significant figures for readability. For publication-quality kinetics, perform 
            uncertainty analysis and more precise fitting methods.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References & Further Reading on Reaction Rates</h2>
        <p className="mb-4 text-lg leading-7">
          For a deeper dive into chemical kinetics and rate laws, consult standard physical chemistry texts such as Atkins' Physical Chemistry or a kinetics-focused textbook. 
          Online resources from educational institutions also provide step-by-step examples for zero-, first-, and second-order reactions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Reaction Rate Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is ideal for students learning about chemical kinetics, researchers conducting preliminary data analysis, 
          and educators looking for a quick reference tool in the classroom. It's particularly useful when approximating reaction rates for laboratory experiments or in academic settings.
        </p>
      </section>
    </article>
  );
}
