import React from 'react';

export default function DilutionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Dilution Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This dilution calculator helps you determine the volume of stock solution (V1) and the volume of diluent required to achieve a desired final concentration (C2) and final volume (V2) from a known initial concentration (C1). It uses the well-established C1V1 = C2V2 relationship used in laboratory workflows.
        </p>
        <p className="mb-4 text-lg leading-7">
          Designed for microbiology and biology applications, the tool provides immediate results as you type and includes visual charts and a downloadable PDF summary for documentation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works (C1V1 = C2V2)</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator applies the equation:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">C1 × V1 = C2 × V2</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Solving for V1 (the required stock volume):
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <code className="text-base font-mono text-gray-900">V1 = (C2 × V2) / C1</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a stock solution at 1000 units/mL (C1) and you want a final concentration of 100 units/mL (C2) in a final volume of 10 mL (V2). The calculator computes:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>V1 = (100 × 10) / 1000 = 1 mL (volume of stock)</li>
          <li>Diluent = V2 − V1 = 10 − 1 = 9 mL</li>
          <li>Dilution factor = C1 / C2 = 1000 / 100 = 10× (ratio 1 : 10)</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          The calculator will show these values instantly and let you download a PDF summary or view charts comparing concentrations and volumes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for safe and accurate dilutions</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Always confirm units: concentrations and volumes must use consistent units (e.g., ng/mL, µg/mL, mM). This calculator does not convert concentration units for you.</li>
          <li>Use appropriate pipettes or volumetric glassware for accurate measurements, especially for small V1 values.</li>
          <li>If the calculated V1 exceeds the desired V2, the requested final concentration is higher than the stock concentration — you will need a more concentrated stock.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Can I increase concentration using this calculator?</h3>
            <p className="text-lg leading-7">No — this calculator assumes you are diluting (reducing concentration). If the desired final concentration (C2) is greater than the initial stock concentration (C1), the computed stock volume (V1) will exceed the final volume (V2), indicating that concentrating is required.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900">Does the calculator handle unit conversions?</h3>
            <p className="text-lg leading-7">No — ensure that concentration units and volume units are consistent before entering values (e.g., mL for volume and the same concentration units for C1 and C2). The result is provided in the same volume units you enter (mL by default).</p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900">How precise are the results?</h3>
            <p className="text-lg leading-7">Results are rounded to six decimal places for display. For experimental work, round or adjust based on the precision of your measuring equipment and lab protocols.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Need more help?</h2>
        <p className="mb-4 text-lg leading-7">
          If you're unsure about units or technique, consult a lab supervisor or protocol reference. For documentation, use the PDF export to save the inputs and results used for your dilution.
        </p>
      </section>
    </article>
  );
}
