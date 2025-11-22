import React from 'react';

export default function WireSizeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Wire Size Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Determine the appropriate conductor cross-sectional area (mm²) for copper wiring based on load current, supply voltage, and distance. This calculator estimates the required area to limit voltage drop to a chosen percentage and maps the result to a standard metric conductor size. Proper wire sizing is vital for safety, efficiency, and compliance with electrical codes.
        </p>
        <p className="mb-4 text-lg leading-7">
          Using the right wire size ensures your electrical systems function optimally, minimizes energy losses, and prevents overheating. This tool is designed to help both professionals and DIY enthusiasts make informed decisions about their electrical installations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses the voltage-drop formula for a two-conductor circuit:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">A = (2 × ρ × I × L) / ΔV</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where A is the conductor cross-sectional area (m²), ρ is the resistivity of copper (1.724×10⁻⁸ Ω·m), I is current (A), L is one-way conductor length (m), and ΔV is the allowable voltage drop (V). The result is converted to mm² and rounded to the nearest standard conductor size.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          For a 20 A load at 240 V over 30 m with a 3% allowable drop: the calculator computes the required area and recommends the smallest standard size that meets the limit. It also displays the estimated voltage drop in volts and percent based on the chosen conductor.
        </p>
        <p className="mb-4 text-lg leading-7">
          By using our Wire Size Calculator, you can quickly determine if your current wiring setup is sufficient or if upgrades are necessary. Regularly assessing your wiring can help maintain safety and efficiency consistently.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Usage notes and safety</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            This tool calculates conductor area based on voltage drop only. It does not substitute for ampacity (thermal) checks, conduit fill, derating, or installation standards. Always verify against local electrical codes and manufacturer's tables.
          </li>
          <li>
            For long runs or high currents, consider higher ampacity ratings and consult a qualified electrician or engineer.
          </li>
          <li>
            Values are based on copper resistivity at room temperature. Temperature and bundling can affect real-world performance. 
          </li>
          <li>
            Conduct regular checks to ensure that your current wiring meets or exceeds safety standards for your specific application.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently asked questions about wire size</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Does this consider ampacity (current carrying capacity)?</h3>
            <p className="mt-2 text-gray-700">No. This calculator focuses on voltage drop and recommended conductor size to meet a voltage-drop limit. Ampacity depends on insulation, ambient temperature, installation method, and derating factors. Always check ampacity tables for final selection.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why is voltage drop important?</h3>
            <p className="mt-2 text-gray-700">Excessive voltage drop can reduce equipment performance, increase losses, and create thermal issues. Industry practice often targets 3% or less for branch circuits and 1-3% for feeder circuits depending on system requirements.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use aluminum conductors?</h3>
            <p className="mt-2 text-gray-700">This calculator uses copper resistivity. Aluminum has higher resistivity and will require larger cross-sectional area for the same voltage drop. Use separate calculations or material-specific resistivity values for aluminum.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for Wire Size Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Wire Size Calculator is beneficial for various electrical applications, including residential, commercial, and industrial projects. Homeowners can use it for DIY electrical repairs or installations, ensuring their wiring is safe and efficient. Contractors and electricians may utilize the calculator for new installations or upgrades, guaranteeing that systems comply with relevant codes and safety standards. Furthermore, industrial settings with complex electrical needs benefit from assessing long-distance circuits and minimizing voltage drops.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References</h2>
        <p className="text-gray-700">Formulas based on standard electrical engineering references for voltage drop and copper resistivity. For final designs consult national/local electrical codes and standards.</p>
      </section>
    </article>
  );
}
