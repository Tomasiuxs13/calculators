import React from 'react';

export default function CylinderCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Cylinder Calculator — Volume & Surface Area</h1>
        <p className="mb-4 text-lg leading-7">
          Use this cylinder calculator to quickly compute the volume, lateral area, and total surface area of a right circular cylinder. 
          Enter the radius and height (in any consistent units) and the results will be calculated automatically.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is perfect for students, educators, and professionals needing quick calculations for cylinder dimensions. Understanding 
          the properties of cylinders is crucial in various fields, including engineering, architecture, and manufacturing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Formulas for Cylinder Calculations</h2>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Volume = π × r² × h</code>
          <code className="text-base font-mono text-gray-900 block mt-2">Lateral Area = 2 × π × r × h</code>
          <code className="text-base font-mono text-gray-900 block mt-2">Surface Area (Total) = 2 × π × r × (r + h)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          All formulas assume r is the radius and h is the height. If you use meters for inputs, results will be in square meters (areas) and cubic meters (volume). 
          Use consistent units for accurate results.
        </p>
        <p className="mb-4 text-lg leading-7">
          Being able to calculate the volume and surface area is essential for many practical applications, such as determining the amount of material 
          needed for construction or the capacity of storage tanks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Example Calculation for a Cylinder</h2>
        <p className="mb-4 text-lg leading-7">
          For a cylinder with a radius of 5 units and a height of 10 units, the calculations are as follows:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Volume = π × 5² × 10 = π × 25 × 10 ≈ 785.398 m³</li>
          <li>Lateral Area = 2 × π × 5 × 10 = 100π ≈ 314.159 m²</li>
          <li>Surface Area = 2 × π × 5 × (5 + 10) = 150π ≈ 471.238 m²</li>
        </ul>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">Tip: The calculator performs these computations automatically as you type. Use the PDF button to export your inputs and results.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Use Cases for Cylinder Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding cylinders is vital in numerous real-world applications. Here are a few examples of how this calculator can be useful:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>In civil engineering, to calculate the volume of concrete required for cylindrical columns.</li>
          <li>In manufacturing, to determine the amount of paint needed for coating cylindrical objects.</li>
          <li>In logistics, to calculate the amount of liquid a cylindrical tank can hold.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions about Cylinder Calculations</h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-900">Do units matter?</h3>
          <p className="text-lg text-gray-700 mt-2">Yes — maintaining consistency in your units is crucial. If you input the radius in meters and the height in meters, 
          the volume will be in cubic meters and the areas in square meters.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-900">Can I use decimal inputs?</h3>
          <p className="text-lg text-gray-700 mt-2">Absolutely. The calculator accepts decimal values and rounds results to six decimal places for display. 
          Use the exported PDF for exact recorded values.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-900">What is lateral area?</h3>
          <p className="text-lg text-gray-700 mt-2">The lateral area is the area of the curved surface of the cylinder (excluding the top and bottom). 
          It's calculated as 2πrh.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Notes for Accuracy in Cylinder Calculations</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Negative inputs are ignored — please enter non-negative radius and height.</li>
          <li>All calculations use Math.PI for high precision.</li>
          <li>Results are rounded to six decimal places in the UI, but the exported PDF includes the exact displayed values.</li>
        </ul>
      </section>
    </article>
  );
}
