import React from 'react';

export default function PerimeterCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Perimeter Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Perimeter Calculator to quickly compute the total distance around a shape. This tool supports rectangles, squares, and triangles. Enter the appropriate side lengths and the calculator updates automatically. Results can be downloaded as a PDF and visualized with a bar chart. Get instant results with our user-friendly interface!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Understanding Perimeter</h2>
        <p className="mb-4 text-lg leading-7">
          The perimeter is the total distance around the edges of a shape. It's a fundamental concept in geometry and is crucial for various applications, including construction, land measurement, and even in designing simple objects. Knowing how to calculate the perimeter can help you better understand the dimensions of the objects around you.
        </p> 
        <p className="mb-4 text-lg leading-7">
          This Perimeter Calculator simplifies this process, making it quick and straightforward to find the required perimeter for common geometric shapes. Whether you are a student, a teacher, or a DIY enthusiast, our calculator is designed to assist you in your mathematical journey.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses standard perimeter formulas:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>
            <strong>Rectangle:</strong> Perimeter = 2 × (length + width)
          </li>
          <li>
            <strong>Square:</strong> Perimeter = 4 × side
          </li>
          <li>
            <strong>Triangle:</strong> Perimeter = side1 + side2 + side3
          </li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Perimeter = sum of all sides</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Rectangle</h3>
            <p className="text-lg">Length = 10, Width = 5 → Perimeter = 2 × (10 + 5) = 30 units</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Square</h3>
            <p className="text-lg">Side = 8 → Perimeter = 4 × 8 = 32 units</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Triangle</h3>
            <p className="text-lg">Sides = 3, 4, 5 → Perimeter = 3 + 4 + 5 = 12 units</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Results</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Ensure all side lengths are entered using the same unit (e.g., meters or feet).</li>
          <li>Non-negative values are required; the calculator will not return a result for invalid inputs.</li>
          <li>For triangles, provide all three sides to compute the perimeter.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="prose max-w-none">
          <h3>Can I use different units for different sides?</h3>
          <p>No. Enter all dimensions using the same unit to get a meaningful perimeter. Convert units before calculating if needed.</p>

          <h3>What if I only know the diagonal of a rectangle?</h3>
          <p>The perimeter cannot be determined from the diagonal alone. You need both side lengths or enough information to derive them (e.g., diagonal and one side, using Pythagoras).</p>

          <h3>Do you support circles or other shapes?</h3>
          <p>This calculator focuses on polygons: rectangles, squares, and triangles. For circles, you would use circumference = 2 × π × radius — consider using or creating a circumference calculator for that purpose.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Perimeter Calculator</h2>
        <p className="text-lg leading-7">This Perimeter Calculator can be utilized in various scenarios, including:</p>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Students learning geometry concepts in schools.</li>
          <li>Engineers and architects designing and assessing spaces.</li>
          <li>DIY enthusiasts looking to build or remodel spaces.</li>
          <li>Anyone needing quick calculations for fencing, landscaping, or painting projects.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">SEO Summary</h2>
        <p className="text-lg leading-7">Perimeter Calculator for rectangles, squares, and triangles offers instant calculation results, PDF export, and easy visualization through charts. Perfect for geometry students, professionals, and DIY projects.</p>
      </section>
    </article>
  );
}
