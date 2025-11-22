import React from 'react';

export default function FoundationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Foundation Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This Foundation Calculator helps architects, engineers, and builders quickly estimate the volume of concrete
          required for a simple rectangular foundation and provides a rough estimate of concrete mass and the number of
          cement bags needed (based on a 50 kg bag). Enter the foundation length, width, and depth to see instant
          results. All calculations are performed in metric units by default, with an option to input dimensions in feet.
          This tool aids in effective planning for construction projects, ensuring that materials are properly calculated.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Foundation Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Our foundation calculator computes concrete volume using the standard formula for a rectangular prism:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Volume (m³) = Length (m) × Width (m) × Depth (m)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          After calculating the volume in cubic meters, the tool multiplies the volume by the typical concrete bulk
          density (2,400 kg/m³) to estimate the total mass of concrete. Finally, it estimates how many 50 kg cement
          bags would correspond to that mass (rounded up to the next whole bag) for a rough material planning figure.
          This functionality is crucial for ensuring accuracy in foundation construction and minimizing material wastage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you need a foundation that measures 10 m long, 8 m wide, and 0.5 m deep. The calculator will compute:
        </p>

        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Volume = 10 × 8 × 0.5 = 40 m³</li>
          <li>Estimated mass = 40 × 2400 = 96,000 kg</li>
          <li>Estimated 50 kg bags = 96,000 / 50 = 1,920 bags (rounded up)</li>
        </ul>

        <p className="mb-4 text-lg leading-7">
          Note: This bag estimate is a very rough guideline. Actual cement bag requirements depend on the concrete mix
          design (cement:sand:aggregate:water), waste, and on-site conditions. Use the bag estimate for preliminary
          planning and consult a structural engineer or concrete supplier for exact mix designs and ordering.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Foundation Estimates</h2>
        <ol className="list-decimal ml-6 mb-4 text-lg space-y-2">
          <li>Always add a contingency (commonly 5–10%) to account for waste and uneven subgrades.</li>
          <li>For trenches, footings, or non-rectangular foundations, break the foundation into simple shapes and sum
              their volumes.</li>
          <li>Confirm local material densities and mix designs with suppliers; densities can vary by aggregate type.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Foundation Calculators</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium">Can I use the calculator for footings or trenches?</h3>
          <p className="text-lg">Yes. For non-rectangular sections, divide the foundation into rectangular prisms or
          other geometric shapes, calculate each volume, then sum them.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium">Is the cement bag estimate precise?</h3>
          <p className="text-lg">No—it's a rough planning figure based on total mass and a 50 kg bag size. The actual number
          of cement bags depends on the concrete mix ratio (e.g., 1:2:4), water content, and site losses. For ordering,
          consult a supplier with your desired mix design.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium">What unit should I use?</h3>
          <p className="text-lg">Use meters for metric calculations. The tool supports input in feet and converts to meters
          internally. Ensure all dimensions are in the same unit when using the calculator.</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Consult a Professional for Your Foundation</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is intended for quick estimates and planning. For structural design, load calculations,
          reinforcement requirements, and regulated construction documents, consult a licensed structural engineer or
          qualified professional. Local building codes may require engineered designs for foundations, especially in
          areas with particular soil or weather considerations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Foundation Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator can be applied in various scenarios, including:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Residential home foundation planning</li>
          <li>Extension projects for existing buildings</li>
          <li>Commercial construction where quick estimates save time</li>
          <li>DIY projects where accurate material estimation is needed</li>
        </ul>
      </section>
    </article>
  );
}
