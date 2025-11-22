import React from 'react';

export default function LensCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Lens Calculator — Overview</h2>
        <p className="mb-4 text-lg leading-7">
          This Lens Calculator computes the image distance, magnification, and the nature of the image (real or virtual) for thin lenses using the thin-lens equation. It's particularly useful for optics students, hobbyists, and engineers working with simple lens systems. Our calculator simplifies the understanding of optical principles and enhances your learning experience in physics.
        </p>
        <p className="mb-4 text-lg leading-7">
          To use the calculator, enter the object distance (the distance from the object to the lens) and the focal length of the lens. You can choose between a convex (converging) lens and a concave (diverging) lens. The results will update automatically as you adjust the inputs, allowing for quick understanding of various lens behaviors.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Key Formula for Lenses</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator utilizes the thin-lens equation:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">1/f = 1/do + 1/di</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          By solving for image distance di, we find:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <code className="text-base font-mono text-gray-900">di = 1 / (1/f - 1/do)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The magnification m is calculated using:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">m = -di / do</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example (Default Values)</h2>
        <p className="mb-4 text-lg leading-7">
          Let's explore an example using default values on the calculator — object distance do = 0.5 m and focal length f = 0.2 m (using a convex lens):
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Compute 1/f = 1/0.2 = 5.</li>
          <li>Compute 1/do = 1/0.5 = 2.</li>
          <li>Compute denominator = 1/f - 1/do = 5 - 2 = 3.</li>
          <li>di = 1 / 3 ≈ 0.333333 m (image distance).</li>
          <li>m = -di / do ≈ -0.333333 / 0.5 = -0.666666 (indicating an inverted image, reduced in size).</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          The image produced is real (di &gt; 0) and inverted (negative magnification). Note that values may be rounded in the calculator for display purposes, providing an accessible overview of the results.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Using Convex vs Concave Lenses</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding the difference between lens types is crucial. Convex (converging) lenses have positive focal lengths. These lenses can produce real images when the object is placed beyond the focal point. On the other hand, concave (diverging) lenses carry negative focal lengths. They always produce virtual, upright, and reduced images for real objects, making them ideal for use in certain optical applications.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical Tips for Lens Calculation</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Keep your units consistent — this calculator uses meters (m).</li>
          <li>If do = f, the image approaches infinity; the calculator will inform you of this.</li>
          <li>A negative image distance signifies a virtual image located on the same side as the object.</li>
          <li>Remember to consider the lens type correctly: select convex for positive focal lengths and concave for negative.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>
        <h3 className="text-xl font-semibold mt-4">What does a negative magnification mean?</h3>
        <p className="mb-4 text-lg leading-7">
          A negative magnification indicates that the image is inverted relative to the object. Conversely, a positive magnification points to an upright image.
        </p>

        <h3 className="text-xl font-semibold mt-4">When is the image at infinity?</h3>
        <p className="mb-4 text-lg leading-7">
          The image reaches infinity when the object is precisely at the focal point (do = f). This scenario produces a division by zero during the di computation, leading the calculator to indicate an image at infinity.
        </p>

        <h3 className="text-xl font-semibold mt-4">Can I use negative focal lengths?</h3>
        <p className="mb-4 text-lg leading-7">
          Certainly! Negative focal lengths are indicative of diverging lenses (concave lenses). The calculator features a lens-type selector that applies the correct sign convention to the focal length, ensuring accurate computations.
        </p>

        <h3 className="text-xl font-semibold mt-4">What other uses does a lens calculator have?</h3>
        <p className="mb-4 text-lg leading-7">
          A lens calculator can be used in various applications including photography, eyeglass prescriptions, and optical instrument design. Understanding how different lenses manipulate light can vastly improve the quality and clarity of images in practical tasks.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References and Further Reading</h2>
        <p className="mb-4 text-lg leading-7">
          - Hecht, E. (Optics). Thin-lens equation and magnification definitions are fundamental to understanding lens behavior.
        </p>
        <p className="mb-4 text-lg leading-7">
          - For a deeper dive into optics, consider exploring texts like "Fundamentals of Photonics" by Saleh and Teich.
        </p>
      </section>
    </article>
  );
}
