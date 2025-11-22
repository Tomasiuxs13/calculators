import React from 'react';

export default function DensityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Density Calculator (ρ = m / V)</h1>
        <p className="mb-4 text-lg leading-7">
          Density is a fundamental physical property describing how much mass is contained in a given volume. It is defined as the mass per unit volume and commonly denoted by the Greek letter rho (ρ). Understanding density is crucial in many fields of science, engineering, and everyday life. This property helps in determining how materials interact with each other, which is essential for designing objects, conducting experiments, and performing calculations in physics.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes density in SI units (kilograms per cubic meter, kg/m³) using the formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ρ = m / V</code>
          <div className="mt-2 text-sm text-gray-600">where ρ is density, m is mass (kg), and V is volume (m³).</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Use the Density Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-lg">
          <li>Enter the mass of the object in kilograms (kg).</li>
          <li>Enter the volume occupied by the object in cubic meters (m³).</li>
          <li>The calculator will automatically compute the density in kg/m³, providing you with immediate feedback.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h3 className="font-medium mb-2">Example Calculation</h3>
          <p className="text-lg">
            If an object has a mass of <strong> 1000 kg</strong> and a volume of <strong> 1 m³</strong>, then
          </p>
          <div className="mt-3 bg-white p-3 rounded shadow-sm">
            <code className="font-mono">ρ = 1000 / 1 = 1000 kg/m³</code>
          </div>
          <p className="mt-4 text-lg">This result indicates that the object has a density of 1000 kg/m³, helping you assess its suitability for various applications.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Common Uses of Density</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Identifying materials (e.g., differentiating between metals and plastics).</li>
          <li>Calculating buoyancy and determining whether an object will float or sink in a fluid.</li>
          <li>Engineering applications where mass-to-volume ratios are critical for design and safety.</li>
          <li>In the food industry, assessing the density of substances can help in quality control.</li>
          <li>In the environmental sciences, understanding density aids in pollutant dispersion studies.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs about Density</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">What units should I use for the density calculator?</h3>
            <p className="text-lg">Use kilograms (kg) for mass and cubic meters (m³) for volume to get density in kg/m³. If you have other units, convert them to the SI base units first to ensure accuracy.</p>
          </div>

          <div>
            <h3 className="font-medium">What happens if the volume entered is zero?</h3>
            <p className="text-lg">A volume of zero is not valid, as this would result in division by zero, which is undefined. It's crucial to ensure that the volume is greater than zero for accurate calculations.</p>
          </div>

          <div>
            <h3 className="font-medium">How precise is the result from the density calculator?</h3>
            <p className="text-lg">The calculator displays results with reasonable precision (up to 6 decimal places), which is suitable for many engineering and physics tasks. For high precision requirements, make sure to provide inputs with sufficient significant figures.</p>
          </div>

          <div>
            <h3 className="font-medium">Can I use this calculator for liquids and gases?</h3>
            <p className="text-lg">Yes, the density calculator can be used for solids, liquids, and gases. Just ensure that the mass and volume are accurately measured for the substance being analyzed.</p>
          </div>

          <div>
            <h3 className="font-medium">What factors can affect density?</h3>
            <p className="text-lg">Density can be influenced by temperature and pressure, especially in gases. As temperature increases, density typically decreases, while increased pressure generally increases density.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Notes for Professionals</h2>
        <p className="text-lg">When working with heterogeneous materials or porous samples, ensure that the mass and volume correspond to the same sample definition. For instance, exclude void spaces if measuring the density of solid materials. It is also important to consider the material's temperature and pressure conditions during measurements to achieve the most accurate density calculations.</p>
      </section>
    </article>
  );
}
