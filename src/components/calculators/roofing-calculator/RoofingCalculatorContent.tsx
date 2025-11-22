import React from 'react';

export default function RoofingCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Roofing Calculator: Estimate Your Materials</h2>
        <p className="mb-4 text-lg leading-7">
          This roofing calculator helps builders, contractors, and DIY enthusiasts estimate the materials needed for a simple gable roof. Enter the roof length, width, and pitch (in degrees). The tool calculates the plan (projected) area and the actual roof area considering the slope, adds a waste allowance, and estimates the number of roofing sheets needed.
        </p>
        <p className="mb-4 text-lg leading-7">
          Results are updated automatically as you adjust inputs. Use the sheet size selector to match your chosen roofing product and download a PDF summary for job records or material ordering. By accurately estimating your roofing materials, you can save both time and money while ensuring you have the right amount of materials for the job.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Roofing Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          We first compute the plan area (length × width). To account for slope, we use the roof pitch to determine the sloped surface area. For a simple two-sided gable roof, the total roof area is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Roof Area = Plan Area × sec(pitch) = (Length × Width) / cos(pitch in radians)
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          We then add a waste factor (default 10%) to account for offcuts, overlaps, and errors. Finally, the calculator divides the total area by the selected sheet coverage to produce an estimated number of sheets, rounded up to ensure you order whole sheets. This calculation ensures that you aren't left with insufficient materials when you need them.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Using the Roofing Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a roof that is 10 m long and 8 m wide with a 30° pitch. The plan area is 80 m². The sloped roof area is 80 / cos(30°) ≈ 92.38 m². Adding 10% waste yields ≈ 101.62 m². If your roofing sheets cover 2 m² each, you'll need ceil(101.62 / 2) = 51 sheets. This example illustrates how our calculator simplifies the estimation process for roofing materials.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Estimates Using the Roofing Calculator</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Measure roof length and width on the plan (horizontal distance), not the sloped surface.</li>
          <li>Confirm the effective coverage of the roofing sheet (some overlap reduces effective coverage).</li>
          <li>Increase the waste factor for complex roofs with hips, valleys, or many penetrations.</li>
          <li>Round up sheet counts to whole numbers and consider ordering an extra pack for contingencies.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Roofing Calculators</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I use this for hip or multi-faceted roofs?</h3>
            <p className="text-lg">This calculator assumes a simple gable roof with two identical slopes. For hips, valleys, dormers, or multiple roof planes, break the roof into sections, calculate each section separately, and sum the results. Increase the waste factor to cover additional cuts and complexity.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What pitch should I enter?</h3>
            <p className="text-lg">Enter the roof pitch as an angle in degrees (0–89). Avoid values of 90° which are vertical walls. If you only know rise/run, convert to degrees using arctan(rise/run) × (180/π).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Does the calculator include underlayment or fixings?</h3>
            <p className="text-lg">No. This tool estimates roof covering area and sheet counts. Underlayment, nails, screws, flashing, ridge caps, and other accessories should be estimated separately based on product specifications and linear measurements.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Additional Use Cases for the Roofing Calculator</h2>
        <p className="mb-4 text-lg leading-7">This roofing calculator is beneficial not only for new constructions but also for renovation projects. Whether upgrading your roof's materials or repairing a portion of your existing roof, accurate estimations can streamline your projects.</p>
        <p className="mb-4 text-lg leading-7">Additionally, roofing professionals can leverage this calculator to improve customer service by providing timely and precise estimates, thus enhancing overall client satisfaction. Understanding precise material needs can help avoid delays and budget overruns.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Need More Help with Your Roofing Project?</h2>
        <p className="mb-4 text-lg leading-7">If your project includes complex geometry, we recommend consulting a roofing professional or providing roof plans to a supplier for a detailed takeoff. With the right help, you'll ensure that your roofing project goes smoothly from start to finish.</p>
      </section>
    </article>
  );
}
