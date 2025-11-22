import React from 'react';

export default function CircumferenceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Circumference Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to compute the circumference of a circle given its radius. 
          The circumference is the distance around the outside of the circle and is calculated using the formula C = 2 × π × r. 
          You can enter the radius in different units and select the desired unit for the result. 
          This tool is especially useful for students, engineers, and anyone who needs quick circumference calculations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Understanding Circumference</h2>
        <p className="mb-4 text-lg leading-7">
          The circumference of a circle has many practical applications in various fields, including engineering, architecture, and everyday tasks such as sewing and crafting. It helps in determining the length of fencing needed for a circular garden, the amount of fabric required for a round tablecloth, or even the distance a wheel travels in one complete rotation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Formula</h2>
        <p className="mb-4 text-lg leading-7">
          The mathematical formula used is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">C = 2 × π × r</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>C</strong> is the circumference.</li>
          <li><strong>r</strong> is the radius of the circle.</li>
          <li><strong>π</strong> (pi) is approximately 3.141592653589793.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation</h2>
        <p className="mb-4 text-lg leading-7">If the radius is 5 meters:</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">
            C = 2 × π × 5 m = 10π m ≈ 31.4159 m
          </p>
        </div>
        <p className="mt-4 text-lg leading-7">
          The calculator will perform the computation instantly and display the circumference in the unit you select. 
          It converts the radius to a base unit internally, computes the circumference, then converts the result to the requested unit for accuracy across unit systems.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Use the Circumference Calculator</h2>
        <ol className="list-decimal pl-5 space-y-2 text-lg">
          <li>Enter the radius value.</li>
          <li>Select the unit for the radius (e.g., mm, cm, m, km, in, ft).</li>
          <li>Select the unit you want the circumference to be displayed in.</li>
          <li>The result updates automatically — no calculate button needed.</li>
          <li>Optionally toggle the chart to compare radius vs circumference and download a PDF report.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Circumference Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator can be useful in various scenarios, such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Designing round structures like water tanks and pavilions.</li>
          <li>Shopping for circular items such as pizza or cakes, where accurate measurements are needed.</li>
          <li>Assisting students in math classes to understand the relationship between radius and circumference.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about the Circumference Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I use different units for radius and result?</h3>
            <p className="text-base leading-7 text-gray-700">Yes. The calculator converts the radius to a base unit internally, computes the circumference, and then converts the result to the selected output unit.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if I enter a negative radius?</h3>
            <p className="text-base leading-7 text-gray-700">A radius cannot be negative in the geometric sense. The calculator will not produce a result for negative values — please input a non-negative number.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How accurate is the result?</h3>
            <p className="text-base leading-7 text-gray-700">Results are calculated using JavaScript's Math.PI and rounded to six decimal places for display. This is sufficient for typical engineering and everyday uses. For higher precision, export the data and compute with higher-precision tools if needed.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if I need a circumference for irregular shapes?</h3>
            <p className="text-base leading-7 text-gray-700">This calculator specifically calculates the circumference of a circle. For irregular shapes, consider using geometric formulas suitable for those specific shapes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Notes on Using the Circumference Calculator</h2>
        <p className="text-lg leading-7 text-gray-700">This tool is intended for quick circumference calculations and educational purposes. For structural engineering or precision manufacturing, consult domain-specific tools and standards to ensure compliance and accuracy.</p>
      </section>
    </article>
  );
}
