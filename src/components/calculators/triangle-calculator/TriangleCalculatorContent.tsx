import React from 'react';

export default function TriangleCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          Triangle Calculator
        </h1>
        <p className="mb-4 text-lg leading-7">
          Use our Triangle Calculator to easily determine the area, perimeter, and angles of a triangle using its sides.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          What is Triangle Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Triangle calculation involves determining various properties of a triangle based on its sides. The most common calculations include the area, perimeter, and angles of the triangle. Understanding these properties is essential in geometry, architecture, and various engineering fields.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our triangle calculator allows you to input the lengths of the three sides and instantly calculates the area, perimeter, and angles. This tool is useful for students, architects, and anyone needing quick geometric calculations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Triangle Properties
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the area of a triangle given its three sides (a, b, c), you can use Heron's formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Area = √(s(s - a)(s - b)(s - c))
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where s is the semi-perimeter, calculated as s = (a + b + c) / 2.
        </p>
        <p className="mb-4 text-lg leading-7">
          The perimeter is simply the sum of the three sides:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Perimeter = a + b + c
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          To calculate the angles, you can use the Law of Cosines:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            cos(A) = (b² + c² - a²) / (2bc)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Triangle Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          Triangle calculations are widely used in various fields. Architects use them to design structures; engineers apply them in their calculations for robustness; and students learn these principles as foundational geometry skills.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, indoor decorators may use triangle measurements for layout planning. 
          Furthermore, in computer graphics, triangle calculations assist in rendering images and simulations accurately.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Triangle Calculations
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          What is the formula to calculate the area of a triangle?
        </h3>
        <p className="mb-4 text-lg leading-7">
          The area of a triangle can be calculated using Heron's formula or the base-height method. Using the base-height method, the area is given by:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Area = (base * height) / 2
          </code>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Can I calculate a triangle's area with only the lengths of its sides?
        </h3>
        <p className="mb-4 text-lg leading-7">
          Yes, you can use Heron's formula to find the area if you only know the lengths of the sides. This is particularly useful in cases where height is not directly measurable.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          How does the Triangle Calculator work?
        </h3>
        <p className="mb-4 text-lg leading-7">
          The Triangle Calculator takes the lengths of the three sides as inputs and applies the appropriate formulas to compute the area, perimeter, and angles. It quickly provides the results to assist users in their calculations.
        </p>
      </section>
    </article>
  );
}
