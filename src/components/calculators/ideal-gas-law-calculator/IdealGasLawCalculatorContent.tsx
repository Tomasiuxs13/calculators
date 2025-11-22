import React from 'react';

export default function IdealGasLawCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Ideal Gas Law (PV = nRT)</h2>
        <p className="mb-4 text-lg leading-7">
          The Ideal Gas Law relates the pressure (P), volume (V), temperature (T), and amount of substance (n) of an ideal gas through the equation
          <code className="mx-1 font-mono">PV = nRT</code>, where
          <strong className="mx-1">R</strong> is the universal gas constant (8.314462618 J/(mol·K)). This calculator helps you compute one property when the other three are known or check consistency between your provided values. Understanding the Ideal Gas Law is essential for many scientific and engineering fields, making this calculator an invaluable tool for students, professionals, and hobbyists.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">How to Use the Ideal Gas Law Calculator</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter values for pressure (P in pascals), volume (V in m³), number of moles (n in mol), and temperature (T in K).</li>
          <li>Choose the compute mode: <em>Auto</em> will compute a single missing value or check consistency when all four are provided. You can also explicitly choose which variable to compute.</li>
          <li>Results update automatically as you change inputs — no calculate button required.</li>
          <li>Download a PDF of the inputs and results using the download button.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Examples of Using the Ideal Gas Law</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <p className="text-base font-mono text-gray-900">Example 1: Compute Pressure</p>
          <p className="text-base text-gray-700">Given n = 2 mol, T = 300 K, V = 0.05 m³ → P = nRT / V = (2 × 8.314462618 × 300) / 0.05 ≈ 99,773 Pa</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <p className="text-base font-mono text-gray-900">Example 2: Compute Moles</p>
          <p className="text-base text-gray-700">Given P = 101325 Pa, V = 0.0224 m³, T = 273 K → n = PV / (RT) ≈ 1 mol</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Frequently Asked Questions about the Ideal Gas Law</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-medium text-gray-900">Is the Ideal Gas Law always accurate?</h4>
            <p className="text-base text-gray-700">The Ideal Gas Law is an approximation that works well for many gases at moderate temperatures and low pressures. Real gases can deviate from ideal behavior at high pressures and low temperatures due to intermolecular forces and the finite volume of molecules.</p>
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-900">What units should I use?</h4>
            <p className="text-base text-gray-700">Use SI units: pressure in pascals (Pa), volume in cubic meters (m³), temperature in kelvin (K), and amount in moles (mol). The calculator assumes these units for correct results.</p>
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-900">Why does the calculator sometimes show a difference between provided and calculated pressure?</h4>
            <p className="text-base text-gray-700">When all four properties are provided, the calculator computes the pressure from n, R, T, and V and compares it against the provided pressure. Small differences can arise from rounding or measurement error. Large disagreements indicate inconsistent inputs or non-ideal gas behavior.</p>
          </div>

          <div>
            <h4 className="text-xl font-medium text-gray-900">Can the Ideal Gas Law be applied to real gases?</h4>
            <p className="text-base text-gray-700">While the Ideal Gas Law offers great easy calculations for many scenarios, it does not perfectly describe real gases. When accuracy is critical, especially under high pressure or low temperature, use more complex equations of state.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Notes on the Ideal Gas Law Calculator</h2>
        <p className="text-base text-gray-700">R used in this calculator: <span className="font-mono">8.31446261815324 J/(mol·K)</span>. If you require more advanced corrections (like van der Waals forces, compressibility factors), consider using an equation of state appropriate for real gases.</p>
      </section>
    </article>
  );
}
