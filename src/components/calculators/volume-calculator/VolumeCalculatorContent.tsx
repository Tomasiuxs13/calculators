import React from 'react';

export default function VolumeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Volume?</h2>
        <p className="mb-4 text-lg leading-7">
          Volume is the measure of the amount of space an object occupies. For three-dimensional shapes, volume is expressed in cubic units (for example, m³, cm³). This calculator helps you compute volumes for common shapes: sphere, cylinder, and cone.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding volume is critical in various fields, including physics, engineering, and everyday life. Whether you're filling a container, calculating storage space, or designing an object, knowing how to determine volume accurately is essential.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Formulas for Volume Calculation</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Sphere: V = (4/3) × π × r³</code>
          <code className="text-base font-mono text-gray-900 block">Cylinder: V = π × r² × h</code>
          <code className="text-base font-mono text-gray-900 block">Cone: V = (1/3) × π × r² × h</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          In each formula, r is the radius. For the cylinder and cone, h is the height. Make sure to use the same units for radius and height; the resulting volume will be in the cubic form of those units. This consistency ensures accurate calculations, as volume is sensitive to unit discrepancies.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Volume Calculations</h2>
        <div className="mb-4 text-lg">
          <p className="mb-2">1) Sphere with radius 5 units:</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-mono">V = (4/3) × π × 5³ ≈ 523.5988 units³</p>
          </div>
        </div>

        <div className="mb-4 text-lg">
          <p className="mb-2">2) Cylinder with radius 3 units and height 10 units:</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-mono">V = π × 3² × 10 ≈ 282.7433 units³</p>
          </div>
        </div>

        <div className="mb-4 text-lg">
          <p className="mb-2">3) Cone with radius 3 units and height 10 units:</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="font-mono">V = (1/3) × π × 3² × 10 ≈ 94.2478 units³</p>
          </div>
        </div>
        <p className="mb-4 text-lg leading-7">
          These examples illustrate how different dimensions affect the volume. As you can see, even a small change in the radius greatly influences the volume, emphasizing the importance of accurate measurements.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Volume Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Select the shape you want to calculate.</li>
          <li>Enter the radius (required) and height (required for cylinder and cone).</li>
          <li>The volume will auto-calculate as you type. Toggle charts to compare volumes across shapes and download a PDF of the results.</li>
          <li>Ensure that you input dimensions in the same unit to avoid discrepancies in the calculated volume.</li>
          <li>Use the calculator's visual aids for better understanding and validation of results.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Volume Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Knowing how to calculate volume is useful in various real-world applications, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Determining the amount of liquid a container can hold.</li>
          <li>Estimating the space required for storage or shipping.</li>
          <li>Helping in construction projects to ensure proper material usage.</li>
          <li>Facilitating experiments in science and engineering fields.</li>
          <li>Assisting in culinary applications, especially in baking and food preparation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Volume</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What units should I use?</h3>
            <p className="text-lg">Use consistent units for radius and height. The resulting volume will be in cubic units (for example, if you enter meters, the result is in m³).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I use decimals?</h3>
            <p className="text-lg">Yes. The calculator accepts decimal values. Results are shown with up to six decimal places for precision.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why does the cylinder/cone require height?</h3>
            <p className="text-lg">The cylinder and cone volume formulas include height (h). Without a valid height, the calculator cannot compute their volume and will prompt you to enter one.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if I forget the formulas?</h3>
            <p className="text-lg">No worries! The calculator provides formulas for the shapes. You can refer to them anytime while performing calculations.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is the volume calculator easy to use?</h3>
            <p className="text-lg">Absolutely! The volume calculator is designed to be user-friendly, allowing beginners and experts alike to perform calculations effortlessly.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
