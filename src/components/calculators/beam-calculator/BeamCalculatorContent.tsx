import React from 'react';

export default function BeamCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Beam Calculator — Quick Structural Check</h1>
        <p className="mb-4 text-lg leading-7">
          This beam calculator helps architects and engineers quickly estimate the maximum bending moment and the required section modulus for a simply supported beam subjected to a central point load. It is intended for preliminary design and verification — always consult detailed structural analysis and local codes for final design.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Beam Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          For a simply supported beam with a central point load P and span L, the maximum bending moment occurs at the center and is given by:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">M_max = P × L / 4</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The required section modulus S to resist the bending moment is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">S = M_max / σ_allow</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where σ_allow is the allowable bending stress for the chosen material (the calculator uses representative values for steel, wood, and concrete). Units are converted automatically; inputs are span in meters and load in kN.
        </p>

        <p className="mb-4 text-lg leading-7">
          This beam calculator is designed to streamline the evaluation process, providing a fast way to consider various material properties and ensure that your beam design adheres to basic structural principles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation Using the Beam Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          For instance, consider a beam with a span of 5 m subjected to a central point load of 10 kN, constructed from steel.
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Compute M_max = 10 kN × 5 m / 4 = 12.5 kN·m.</li>
          <li>Convert to N·m: 12.5 × 1000 = 12,500 N·m.</li>
          <li>Assuming σ_allow = 165 MPa (165 × 10^6 N/m²), S = 12,500 / 165e6 ≈ 7.576e-5 m³ = 75.76 cm³.</li>
        </ol>
        <p className="mb-4 text-lg leading-7">The calculator displays these values and provides a required section modulus in cm³ for easier comparison with standard section tables, helping engineers and architects make informed decisions efficiently.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Material Guidance for Beam Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses representative allowable bending stresses:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li><strong>Steel:</strong> ~165 MPa (structural steel, representative)</li>
          <li><strong>Wood:</strong> ~10 MPa (typical design value varies by species and grade)</li>
          <li><strong>Concrete:</strong> ~3 MPa (bending capacity is limited; reinforcement is usually required)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          These are illustrative values only. Use code-specified allowable stresses or manufacturer data for final design. Selecting appropriate materials is crucial for ensuring safety and performance in construction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Use This Beam Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Use this tool for initial sizing, feasibility studies, and early design decisions. It is not a substitute for detailed structural analysis, stability checks, shear checks, deflection limits, or compliance with building codes. It serves well in conceptual phases where rough estimates are necessary to assess design ideas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Beam Calculations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I use this for continuous spans or distributed loads?</h3>
            <p className="text-lg leading-7">No — this calculator assumes a simply supported beam with a central point load. For distributed loads or continuous spans, use a different analysis or consult a structural engineer.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Does it check shear or deflection?</h3>
            <p className="text-lg leading-7">No — it provides bending moment and required section modulus only. Check shear capacity and deflection limits separately using appropriate formulas and standards.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Are the material values exact?</h3>
            <p className="text-lg leading-7">Material values are representative. For design, use certified material properties and local code values. Values vary by grade, treatment, and factors of safety, which is essential for accurate and safe design calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Is this calculator suitable for every type of beam?</h3>
            <p className="text-lg leading-7">This calculator is specifically designed for simply supported beams with central point loads. For other beam types such as cantilever or fixed beams, consult appropriate resources or engineers for specific analyses.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
