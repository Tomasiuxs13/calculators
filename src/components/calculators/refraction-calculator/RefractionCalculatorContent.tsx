import React from 'react';

export default function RefractionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Refraction?</h2>
        <p className="mb-4 text-lg leading-7">
          Refraction is the bending of light as it passes from one medium to another with a different index of refraction. The change in direction is governed by Snell's law, which relates the indices of refraction of the two media and the angle of incidence to the angle of refraction. This phenomenon is crucial in various applications including optics, photography, and even astronomy. Understanding refraction allows us to manipulate light behavior for creating lenses, prisms, and various optical equipment.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Snell's Law and Refraction</h2>
        <p className="mb-4 text-lg leading-7">
          Snell's law can be written as:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">n1 * sin(θ1) = n2 * sin(θ2)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          To compute the refraction angle θ2 given the incident angle θ1:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">θ2 = arcsin((n1 / n2) * sin(θ1))</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This law applies to various scenarios such as when light passes from air to water or through different optical materials.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Refraction Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the index of refraction for the first medium (n1), the index for the second medium (n2), and the incident angle (in degrees). The calculator automatically computes the refracted angle using Snell's law. If the combination of indices and incident angle produces total internal reflection, the calculator will indicate this and display the critical angle when applicable.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Example with default values:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>n1 = 1.0 (air)</li>
            <li>n2 = 1.5 (glass)</li>
            <li>Incident angle = 30°</li>
          </ul>
          <p className="mt-3 text-gray-800">Using Snell's law: θ2 ≈ 19.47°</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Total Internal Reflection and Its Importance</h2>
        <p className="mb-4 text-lg leading-7">
          Total internal reflection (TIR) occurs when light attempts to pass from a medium with a higher index of refraction into one with a lower index (n1 &gt; n2), and the incident angle exceeds the critical angle. The critical angle θc is given by:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">θc = arcsin(n2 / n1)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          If the incident angle is greater than θc, no refraction occurs, and all the light is reflected back into the first medium. This principle is vital in optical fibers and certain types of mirrors.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs About Refraction</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">Q: Can I use indices less than 1?</h3>
          <p className="mb-2 text-gray-700">A: Physical indices of refraction for ordinary materials are typically &gt;= 1. Negative or zero indices are not valid for this simple calculator and will produce no result.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4">Q: What units should the angles be in?</h3>
          <p className="mb-2 text-gray-700">A: Enter the incident angle in degrees. The calculator handles conversion to radians internally for the trigonometric functions and returns the refracted angle in degrees.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4">Q: When does total internal reflection occur?</h3>
          <p className="mb-2 text-gray-700">A: TIR occurs when light goes from a denser medium to a less dense medium (n1 &gt; n2) and the incident angle exceeds the critical angle θc = arcsin(n2 / n1). The calculator will notify you when TIR happens and show the critical angle if applicable.</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4">Q: Why is refraction important in optics?</h3>
          <p className="mb-2 text-gray-700">A: Refraction is the principle behind lens design and numerous optical devices including glasses, cameras, and microscopes. Being able to predict refraction behavior enhances our ability to create effective optical instruments.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Notes & References on Refraction</h2>
        <p className="mb-4 text-lg leading-7">This calculator uses the standard form of Snell's law and assumes isotropic, homogeneous media. For anisotropic materials, wavelength-dependent dispersion, or nonlinear optics effects, more advanced models are required. Understanding these limitations helps in applying Snell’s law accurately across different mediums.</p>
      </section>
    </article>
  );
}
