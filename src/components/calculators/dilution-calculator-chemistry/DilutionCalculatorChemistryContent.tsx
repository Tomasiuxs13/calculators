import React from 'react';

export default function DilutionCalculatorChemistryContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Dilution Calculator — Chemistry</h1>
      <meta name="description" content="Use our Dilution Calculator for chemistry to accurately determine concentrations and volumes for your solutions." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Understanding Dilution and Its Importance</h2>
        <p className="mb-4 text-lg leading-7">
          This dilution calculator helps you determine how much concentrated stock solution (V1) you need to prepare a desired volume of diluted solution (V2) at a target concentration (C2), using the classic dilution equation:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">C1 × V1 = C2 × V2</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Rearranged to solve for V1: <strong>V1 = (C2 × V2) / C1</strong>. Enter the initial concentration of your stock (C1), the desired final concentration (C2), and the final total volume (V2). The calculator displays V1 in liters and milliliters and the volume of diluent required.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Example of Dilution Calculation</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Example</h3>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a 1.0 M stock solution (C1) and you want 1.0 L of a 0.1 M solution (C2). Using the formula:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
          <p className="text-base text-gray-700">V1 = (0.1 M × 1.0 L) / 1.0 M = 0.1 L = 100 mL</p>
        </div>
        <p className="mb-4 text-lg leading-7">
          So, you would pipette 100 mL of the 1.0 M stock into a volumetric flask and dilute to 1.0 L with solvent.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Tips and Best Practices for Successful Dilution</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Always ensure units are consistent (this calculator expects concentration in molarity (M) and volume in liters (L)).</li>
          <li>If V1 is larger than V2, the dilution as specified is impossible — you may need a more concentrated stock.</li>
          <li>For small volumes, consider pipetting accuracy and use an appropriate pipette or repeat dilution method.</li>
          <li>Label solutions clearly with concentration, date, and preparer.</li>
          <li>Check compatibility of all substances before mixing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Frequently Asked Questions About Dilution</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-900">What does C1V1 = C2V2 mean?</h3>
            <p className="text-lg leading-7">It expresses conservation of solute amount. The moles of solute in the aliquot of stock (C1 × V1) equals the moles in the final diluted solution (C2 × V2).</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">Can I use different units?</h3>
            <p className="text-lg leading-7">Yes, but keep them consistent. If you use mL for volume, ensure both V1 and V2 are in mL. The calculator uses liters internally and also displays milliliters for convenience.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900">What if C1 &lt; C2?</h3>
            <p className="text-lg leading-7">If the stock concentration (C1) is lower than the desired final concentration (C2), you cannot obtain the desired concentration by dilution — you would need a more concentrated stock or to perform a concentration step.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Safety and Accuracy in Chemical Dilution</h2>
        <p className="text-lg leading-7">Always follow your lab's safety protocols when handling chemicals. Verify calculations, use calibrated glassware or pipettes, and consider preparing extra volume to account for transfer losses when necessary.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Use Cases for Dilution Calculators</h2>
        <p className="text-lg leading-7">
          Dilution calculators are extensively used in laboratories for various applications, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Preparing chemical solutions for experiments.</li>
          <li>Creating standards for calibration curves in quantitative analysis.</li>
          <li>Ensuring proper concentration levels in pharmaceuticals.</li>
          <li>Conducting environmental testing for pollutant concentrations.</li>
          <li>Adjusting concentrations in biotechnological processes.</li>
        </ul>
      </section>

    </article>
  );
}
