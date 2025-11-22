import React from 'react';

export default function VoltageDropCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Voltage Drop?</h2>
        <p className="mb-4 text-lg leading-7">
          Voltage drop is the reduction in voltage in an electrical circuit between the source and the load. It occurs due to the resistance of conductors and is important to consider in electrical design to ensure equipment receives adequate voltage. Understanding voltage drop is crucial for electrical engineers and technicians to foresee potential issues in circuit performance.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates voltage drop using the current (A), the conductor resistance per meter (Ω/m), and the one-way distance (m). The calculator assumes a round-trip conductor length (there and back) when computing total resistance. Calculating voltage drop not only improves efficiency but also extends the lifespan of electrical components by preventing overloading and overheating.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculation Works for Voltage Drop</h2>
        <p className="mb-4 text-lg leading-7">
          The calculation follows these simple steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Compute total conductor length as distance × 2 (round-trip).</li>
          <li>Compute total resistance = resistance per meter × total conductor length (Ω).</li>
          <li>Voltage drop = current × total resistance (V).</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Voltage Drop (V) = Current (A) × Resistance (Ω/m) × (Distance (m) × 2)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Voltage Drop Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Using the default values in the calculator:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Current = 20 A</li>
          <li>Resistance = 0.1 Ω/m</li>
          <li>Distance = 30 m (one-way)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Total conductor length = 30 × 2 = 60 m
          <br />Total resistance = 0.1 × 60 = 6 Ω
          <br />Voltage drop = 20 × 6 = 120 V
        </p>
        <p className="mb-4 text-lg leading-7">
          If the nominal supply voltage is 230 V, this voltage drop represents 52.17% of the supply and leaves 110 V at the load — an unacceptable drop for most installations. Users can rely on this tool to examine whether conductor sizing or routing must be adjusted, thereby enhancing electrical stability.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Best Practices for Reducing Voltage Drop</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Keep voltage drop within recommended limits (commonly 3%–5% for power distribution) to ensure proper equipment operation.</li>
          <li>Use conductors with lower resistance per meter or increase conductor size to reduce drop.</li>
          <li>Minimize conductor length where possible by locating distribution sources closer to loads.</li>
          <li>Regularly inspect all wiring and connections to maintain optimal performance and safety.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases of Voltage Drop Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Voltage drop calculations are essential across various applications, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Residential electrical installations to ensure safety and efficiency.</li>
          <li>Commercial buildings requiring compliance with electrical codes.</li>
          <li>Industrial environments where heavy machinery is in use, sometimes also requiring backup systems.</li>
          <li>Renewable energy systems where voltage drop can significantly affect overall system efficiency.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Voltage Drop</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Q: Does this calculator consider cable temperature or material?</h3>
          <p className="text-lg leading-7">A: No. This calculator uses a simple resistance per meter value you provide. For temperature and material effects, use manufacturer cable tables or more advanced engineering tools.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Q: Should I include the return conductor?</h3>
          <p className="text-lg leading-7">A: Yes. The calculator multiplies distance by 2 to account for the round-trip (supply and return) conductor path for single-phase circuits.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Q: What is an acceptable percentage voltage drop?</h3>
          <p className="text-lg leading-7">A: Industry guidance often recommends keeping voltage drop to within 3% for feeders and 3% for branch circuits (total 6%). Refer to local electrical codes and standards for exact requirements.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Q: How do I interpret the results from the voltage drop calculator?</h3>
          <p className="text-lg leading-7">A: The output of the calculator will help you determine if your current setup is viable. If the voltage drop exceeds 5% of the nominal supply, it typically indicates a need for reevaluation of wiring or component selection.</p>
        </div>
      </section>
    </article>
  );
}
