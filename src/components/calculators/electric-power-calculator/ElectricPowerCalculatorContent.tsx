import React from 'react';

export default function ElectricPowerCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Electric Power Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Our Electric Power Calculator is here to simplify the way you calculate electric power in any circuit. By understanding electric power, you can enhance your knowledge in physics and improve various electrical applications.
        </p>
        <p className="mb-4 text-lg leading-7">
          Electric power is the rate at which electrical energy is transferred by an electric circuit. The SI unit of power is the watt (W). In simple circuits, power can be calculated from voltage (V), current (I), and resistance (R) using common relationships. 
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator supports the most frequently used formulas:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>P = V × I</strong> — power equals voltage multiplied by current.</li>
          <li><strong>P = I² × R</strong> — power equals the square of the current times resistance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Electric Power Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter any known values: voltage (V), current (A), and resistance (Ω). The calculator will automatically compute power using the available data. If multiple formulas are applicable, you can choose a preferred method or let the calculator decide. 
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">P = V × I  (in watts)</code>
          <br />
          <code className="text-base font-mono text-gray-900">P = I² × R  (in watts)</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Electric Power Calculator Examples</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Example 1 — Known Voltage and Current</h3>
          <p className="text-lg leading-7">
            If V = 12 V and I = 2 A, then P = V × I = 12 × 2 = <strong> 24 W</strong>.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Example 2 — Known Current and Resistance</h3>
          <p className="text-lg leading-7">
            If I = 2 A and R = 6 Ω, then P = I² × R = 2² × 6 = 4 × 6 = <strong> 24 W</strong>.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Example 3 — Deriving Missing Values</h3>
          <p className="text-lg leading-7">
            If V = 12 V and R = 6 Ω (current not provided), current can be derived: I = V / R = 2 A. Then both formulas give P = 24 W.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Electric Power</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Q: What inputs are required to use the electric power calculator?</h3>
          <p className="text-lg leading-7">
            You need at least two of the three quantities (V, I, R) in most cases. The calculator will compute power when a valid combination is provided. If only one value is known, additional information is required to determine power.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Q: Which formula should I use when calculating electric power?</h3>
          <p className="text-lg leading-7">
            Use P = V × I when voltage and current are known. Use P = I² × R when current and resistance are known. If both are available, both formulas should yield the same result (within rounding), and you can choose which to prioritize.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Q: What units should I use for electric power calculations?</h3>
          <p className="text-lg leading-7">
            Use volts (V) for voltage, amperes (A) for current, and ohms (Ω) for resistance. The result will be in watts (W), which is the standard unit for electric power.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notes on Electric Power Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator assumes simple DC circuit relationships. For AC circuits with phase differences, apparent power, reactive power, and power factor must be considered; those cases are beyond the scope of this tool. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding electric power is crucial in various fields, including engineering, physics, and energy management. By accurately calculating the power in your circuits, you can ensure efficient operation and energy usage.
        </p>
        <p className="mb-4 text-lg leading-7">
          For practical applications, our electric power calculator is beneficial in home electrical projects, electrical engineering assignments, and understanding appliances' energy consumption. With this knowledge, you can make informed decisions on energy efficiency.
        </p>
      </section>
    </article>
  );
}
