import React from 'react';

export default function RafterCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Rafter Calculator — Calculate Length and Spacing</h1>
        <p className="mb-4 text-lg leading-7">
          Use this rafter calculator to quickly determine the required rafter length, rise, run, and an estimate of how many rafters you'll need across a roof span. Enter the roof span (meters), roof pitch (degrees), and desired rafter spacing (centimeters). Results update automatically.
        </p>
        <p className="mb-4 text-lg leading-7">
          Proper rafter calculations are essential for ensuring the structural integrity of a roof and maximizing material usage. This tool helps both homeowners and professionals streamline the planning process for roofing projects.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator converts inputs to consistent base units (meters) and performs trigonometric calculations using the pitch (angle). The key formulas used are based on a right-angled triangle formed by the rafter:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Rafter Length = Run / cos(pitch)
            <br />
            Run = Span / 2
            <br />
            Rise = Run × tan(pitch)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Spacing is converted from centimeters to meters (divide by 100). The estimated number of rafters is calculated as floor(span / spacing) + 1 to include edge rafters. This provides a practical estimate for planning and material lists.
        </p>
        <p className="mb-4 text-lg leading-7">
          It is crucial to enter the correct values and understand the implications of your inputs, as adjusting the roof pitch significantly alters the calculations. A clear comprehension of terms like rise, run, and pitch is vital for accurate results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          For a roof span of 8 m, pitch of 30°, and spacing of 60 cm, plug in the values into the calculator:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Run = 8 / 2 = 4.00 m</li>
          <li>Rafter length ≈ 4 / cos(30°) ≈ 4.62 m</li>
          <li>Rise ≈ 4 × tan(30°) ≈ 2.31 m</li>
          <li>Spacing = 60 cm → 0.60 m → Estimated rafters = floor(8 / 0.6) + 1 = 14</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          This example demonstrates the typical scenarios you might encounter, allowing you to visualize the importance of each calculation. Understanding how to properly execute these steps will help ensure a more effective roofing process.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical notes</h2>
        <p className="mb-4 text-lg leading-7">
          - This calculator assumes a symmetric gable roof with rafters running from the wall plate to the ridge (no hip or valley rafters included).
        </p>
        <p className="mb-4 text-lg leading-7">
          - Input pitch as an angle in degrees (0 &lt; pitch &lt; 90). Very steep roofs approach a cos(pitch) near zero and will produce very large rafter lengths — ensure pitch is entered correctly.
        </p>
        <p className="mb-4 text-lg leading-7">
          - For construction drawings and final material lists, always check local building codes, include allowances for overhangs, birdsmouth cuts, and consider timber section sizes and structural loads.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Rafter Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The rafter calculator is useful for various scenarios:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Residential roofing projects, including extensions or new builds.</li>
          <li>Renovation projects that require re-evaluating existing rafter layouts.</li>
          <li>Construction clearances and regulatory projects requiring precise calculations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQ</h2>
        <h3 className="text-lg font-semibold mt-2">Can I use pitch as rise/run instead of degrees?</h3>
        <p className="mb-4 text-lg leading-7">
          This tool expects pitch in degrees. If you have a ratio (e.g. 6/12), convert to degrees by computing atan(rise/run) and converting to degrees, or use an online converter first.
        </p>

        <h3 className="text-lg font-semibold mt-2">Should I round the rafter length up?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes. For ordering and cutting, round up to allow for cuts, birdsmouths, and adjustments. The calculator provides a raw geometric value; add allowances as required by your project.
        </p>

        <h3 className="text-lg font-semibold mt-2">Why does the number of rafters seem high?</h3>
        <p className="mb-4 text-lg leading-7">
          The estimate uses simple spacing across the given span. If your roof layout or eave details change (double rafters at edges, hip rafters, or different spacing at ends), adjust spacing or manually edit the count.
        </p>
        
        <h3 className="text-lg font-semibold mt-2">What materials are best for rafters?</h3>
        <p className="mb-4 text-lg leading-7">
          Common materials for rafters include timber, steel, and engineered wood products. The selection should depend on local building codes, the weight of the roofing material, and environmental considerations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Want more precision?</h2>
        <p className="mb-4 text-lg leading-7">
          For structural design, engage a licensed structural engineer to verify loads, timber sizes, and connections. This calculator is a planning aid and not a substitute for professional design.
        </p>
        <p className="mb-4 text-lg leading-7">
          By understanding the limitations of this tool, you can ensure a more successful and safe construction process. Engaging professionals for critical assessments can vastly improve project outcomes.
        </p>
      </section>
    </article>
  );
}
