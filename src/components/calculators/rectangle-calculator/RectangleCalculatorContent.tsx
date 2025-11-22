import React from 'react';

export default function RectangleCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Rectangle Calculator — Area, Perimeter & Diagonal</h2>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to quickly compute the area, perimeter, and diagonal length of a rectangle. Enter the length and width, and results will be calculated automatically. This tool is useful for geometry homework, construction planning, design, and any task where rectangle dimensions are involved. Whether you're a student, a professional, or simply curious about geometric calculations, our rectangle calculator is designed to simplify the process for you.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Formulas for Rectangle Calculations</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Basic Formulas</h3>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Area = Length × Width</code>
          <code className="text-base font-mono text-gray-900 block">Perimeter = 2 × (Length + Width)</code>
          <code className="text-base font-mono text-gray-900 block">Diagonal = √(Length² + Width²)</code>
        </div>
        <p className="text-lg">All formulas assume both length and width are in the same units. The area will be in square units (units²), while perimeter and diagonal are in linear units.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Example of Rectangle Calculations</h2>
        <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">How to Use the Calculator</h3>
        <p className="mb-4 text-lg leading-7">Suppose a rectangle has length = 10 and width = 5.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Area = 10 × 5 = 50 units²</li>
          <li>Perimeter = 2 × (10 + 5) = 30 units</li>
          <li>Diagonal = √(10² + 5²) = √125 ≈ 11.18034 units</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">How to Use the Rectangle Calculator</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Enter the length in the first field.</li>
          <li>Enter the width in the second field.</li>
          <li>Results update automatically — no need to press calculate.</li>
          <li>Optional: Toggle charts to visualize area, perimeter, and diagonal comparisons.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Frequently Asked Questions About Rectangles</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">Do length and width need to use the same units?</h4>
            <p className="text-base">Yes. Ensure both values are in the same units (for example, both in meters) so that area and diagonal calculations are correct.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium">What units are the results shown in?</h4>
            <p className="text-base">Area is shown in square units (units²). Perimeter and diagonal are shown in linear units (units). If you enter meters, the area will be in square meters (m²) and others in meters (m).</p>
          </div>

          <div>
            <h4 className="text-lg font-medium">Can I use decimals?</h4>
            <p className="text-base">Yes. You can enter decimal values (for example 2.5). The calculator supports fractional dimensions and will display results with up to 6 decimal places.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Helpful Tips for Working with Rectangles</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>For construction or cutting materials, round up the area when ordering supplies to account for waste.</li>
          <li>Use the diagonal length to check if a rectangle is right-angled when comparing to measured diagonals on-site.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Use Cases for the Rectangle Calculator</h2>
        <p className="text-lg">
          This rectangle calculator is not only useful for students but also for various professionals. Architects and builders can use it to estimate the materials required for construction. Graphic designers may need to calculate the area of rectangular images, while event planners can determine space requirements for layout designs. By leveraging this tool, users from different backgrounds can enhance their precision and efficiency in tasks involving rectangles.
        </p>
      </section>
    </article>
  );
}
