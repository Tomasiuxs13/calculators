import React from 'react';

export default function SlopeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Slope?</h2>
        <p className="mb-4 text-lg leading-7">
          The slope of a line describes its steepness and direction. For a line passing through two points (x1, y1) and (x2, y2),
          the slope (usually denoted as m) is defined as the ratio of the change in y to the change in x:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">m = (y2 - y1) / (x2 - x1)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to quickly compute the slope between any two points. It automatically computes the slope as you update the coordinates.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the slope is crucial in various fields, including mathematics, physics, and engineering. It helps to determine relationships between different variables and analyze trends.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Slope Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Example 1: Points (1, 2) and (3, 4). Δy = 4 - 2 = 2, Δx = 3 - 1 = 2, so slope m = 2 / 2 = 1.
        </p>
        <p className="mb-4 text-lg leading-7">
          Example 2: Points (0, 0) and (2, 4). Δy = 4, Δx = 2, thus slope m = 2.
        </p>
        <p className="mb-4 text-lg leading-7">
          Example 3: Vertical line with points (3, 1) and (3, 5). Δx = 0, meaning the slope is undefined (vertical line).
        </p>
        <p className="mb-4 text-lg leading-7">
          Example 4: For points (-2, 3) and (1, 5), Δy = 5 - 3 = 2, Δx = 1 - (-2) = 3, hence slope m = 2 / 3.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Slope Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the X and Y coordinates for Point 1.</li>
          <li>Enter the X and Y coordinates for Point 2.</li>
          <li>The slope will be calculated automatically. You can download the inputs and results as a PDF.</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          This calculator not only simplifies the calculations but also helps visualize the line formed by the points entered. Using the slope calculated, you can predict the behavior of real-world phenomena, such as the steepness of a hill or the rate of change in data trends.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Slope</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What does it mean if the slope is negative?</h3>
            <p className="text-lg leading-7">A negative slope indicates that the line falls from left to right. As x increases, y decreases, which can be useful in various applications like economics where it may represent decreasing profit as costs rise.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What if Δx is zero?</h3>
            <p className="text-lg leading-7">If Δx is zero (x1 === x2), the line is vertical, and the slope is undefined. The calculator will indicate this so you can understand that vertical lines represent situations where there is no change in the x-direction.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How precise is the result?</h3>
            <p className="text-lg leading-7">Results are computed using JavaScript number precision and rounded to 6 decimal places for readability. For very large or very small numbers, consider the limits of floating point arithmetic.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Can slope be zero?</h3>
            <p className="text-lg leading-7">Yes, a slope of zero indicates a horizontal line where y remains constant regardless of x. This situation is common in various fields, such as constant rates of interest in finance.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Interpretation of Slope</h2>
        <p className="mb-4 text-lg leading-7">
          A slope of 0 indicates a horizontal line. A slope greater than 0 indicates an increasing line, while a slope less than 0 indicates a decreasing line. The magnitude of the slope indicates steepness. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the implications of different slopes is important in practical scenarios such as determining the incline of roads in urban planning or analyzing graphs in scientific research.
        </p>
      </section>
    </article>
  );
}
