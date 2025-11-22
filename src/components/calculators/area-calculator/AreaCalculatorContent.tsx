import React from 'react';

export default function AreaCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Area Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly calculate the area of common geometric shapes: circle, rectangle, and triangle. Enter the required dimensions and the calculator will update automatically. Results are presented in square units. You can also view a visual comparison of areas and download a PDF summary of your inputs and results. This <strong>area calculator</strong> is a valuable tool for students, teachers, and professionals alike, enhancing learning and efficiency in geometry.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator employs standard geometric formulas and updates in real-time as you change inputs. It computes the area based on the selected shape and the entered dimensions, ensuring accurate results. This dynamic feature allows users to experiment with different values to gain a better understanding of area calculations.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Circle: Area = π × radius²</code>
          <code className="text-base font-mono text-gray-900 block">Rectangle: Area = length × width</code>
          <code className="text-base font-mono text-gray-900 block">Triangle: Area = 0.5 × base × height</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          All inputs accept decimal values. Negative inputs are treated as zero to avoid invalid area calculations. Results are rounded to 6 decimal places for clarity. By providing a real-time computation, this calculator eliminates the tedious process of manual calculations, making it an efficient resource for learning and application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Circle:</strong> radius = 5 → Area = π × 5² = 78.539816 square units
          </li>
          <li>
            <strong>Rectangle:</strong> length = 10, width = 5 → Area = 10 × 5 = 50 square units
          </li>
          <li>
            <strong>Triangle:</strong> base = 10, height = 8 → Area = 0.5 × 10 × 8 = 40 square units
          </li>
        </ul>
        <p className="mt-4">These examples demonstrate how different values affect the area of each shape. The interactive nature of the calculator allows users to input their own values and see real-time results, enhancing comprehension of geometric concepts.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Area Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Use the chart toggle to compare the areas of all three shapes using the current input values. This is useful for visualizing how changes to dimensions affect area. By experimenting with various dimensions, users can better understand the relationship between shape dimensions and their respective areas, solidifying their mathematical skills.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What units are used?</h3>
            <p className="text-base">The calculator returns area in abstract square units based on the units you enter (for example, if you enter meters, the result is in square meters). This flexibility makes it suitable for a wide range of applications, whether in the classroom or the professional field.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I calculate other shapes?</h3>
            <p className="text-base">This tool currently supports circle, rectangle, and triangle. For other shapes, you can decompose them into these primitives or use a dedicated calculator. Understanding these basic shapes is fundamental in geometry, and mastering their areas paves the way for more complex calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why are negative inputs treated as zero?</h3>
            <p className="text-base">Negative physical dimensions are invalid for area calculation. To ensure the calculator returns meaningful results, negative values are treated as zero. This feature helps maintain accuracy and provides a consistent user experience, preventing confusion with invalid inputs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases of the Area Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This area calculator is beneficial in various scenarios, such as:
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Students learning geometry concepts in school.</li>
            <li>Teachers creating lesson plans that involve area calculation.</li>
            <li>Engineers and architects needing quick area calculations for design projects.</li>
            <li>Homeowners planning landscaping and gardening projects based on area requirements.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Author</h2>
        <p className="text-base">Created by prof-geometry — a collection of reliable geometry and math tools that supports learners from various backgrounds. Our mission is to provide accessible and accurate resources to foster a deeper understanding of mathematical concepts.</p>
      </section>
    </article>
  );
}
