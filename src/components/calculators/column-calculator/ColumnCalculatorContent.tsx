import React from 'react';

export default function ColumnCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Column Calculator — Calculate Column Load Capacity</h1>
        <p className="mb-4 text-lg leading-7">
          This tool estimates the axial load capacity of a rectangular column based on its dimensions and material. It provides a quick engineering-level estimate by combining sectional capacity (area × material strength) with a simple slenderness check (Euler buckling) to highlight potential buckling-controlled cases. Whether you are a professional engineer or a student, this calculator is essential for your design process.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this calculator for preliminary design and verification. For final designs, refer to relevant codes (e.g., ACI, Eurocode, AISC) and consult a structural engineer. Quick calculations can save time and provide early insight into your design's viability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">How it works — Column Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculation follows two steps:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>
            Compute cross-sectional area A = width × depth (m²) and estimate sectional axial capacity as A × f (where f is an assumed characteristic strength in MPa for the selected material).
          </li>
          <li>
            Perform a simplified slenderness check. If the column slenderness (L/r) is high, the Euler critical buckling load is computed and the design capacity is taken as the lower of sectional capacity and Euler capacity. This provides a conservative early-stage indication of buckling risk.
          </li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Area = width × depth</code>
          <code className="text-base font-mono text-gray-900 block">Nominal Capacity (N) = Area × f (Pa)</code>
          <code className="text-base font-mono text-gray-900 block">Euler Pcr = (π² × E × I) / (K × L)²</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Example Calculation — Column Load Capacity</h2>
        <p className="mb-4 text-lg leading-7">
          For a 3 m high concrete column with a 0.30 m × 0.30 m section (C30):
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Area = 0.30 × 0.30 = 0.09 m² (900 cm²)</li>
          <li>Assumed strength f = 30 MPa → Nominal capacity ≈ 0.09 × 30e6 = 2,700,000 N ≈ 2700 kN</li>
          <li>If slenderness is small, the sectional capacity governs. If the column is very slender, buckling can reduce capacity.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Tips for Accurate Use of the Column Calculator</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Enter dimensions in meters. The calculator assumes a rectangular cross section.</li>
          <li>Select the correct material. The calculator uses conservative default material properties for demonstration.</li>
          <li>This tool is for preliminary checks. Always follow code provisions and consult a structural engineer for final design.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Use Cases for the Column Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The column calculator is beneficial for various scenarios, including:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Initial feasibility studies for column designs in construction projects.</li>
          <li>Educational purposes for engineering students learning about structural capacity.</li>
          <li>Quick assessments during site visits when assessing existing structures.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Frequently Asked Questions (FAQ) About the Column Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Is this tool code-compliant?</h3>
            <p className="text-base">
              No. This calculator implements a simplified engineering estimate and is not a substitute for design according to building codes (ACI, Eurocode, AISC, etc.). Use it for quick checks only.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What materials are supported?</h3>
            <p className="text-base">
              Currently, Concrete and Steel are supported with representative strengths and elastic moduli. For other materials, use equivalent properties and consult standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why does the calculator sometimes reduce capacity?</h3>
            <p className="text-base">
              If the slenderness ratio exceeds a conservative threshold, the Euler buckling load is computed, and the tool uses the lower of sectional capacity and buckling capacity to highlight buckling-controlled conditions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Can this calculator be used for other shapes of columns?</h3>
            <p className="text-base">
              Currently, this calculator is optimized for rectangular columns. For other shapes, such as circular or I-beam profiles, additional calculations are required.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
