'use client';

import React from 'react';

export default function QuadraticCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is a Quadratic Equation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          A quadratic equation is a second-degree polynomial equation in a single variable x, with a ≠ 0. It has the form ax² + bx + c = 0, where a, b, and c are constants. Solutions to the quadratic equation can be found using the quadratic formula, which provides the roots (solutions) of the equation.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator helps you to solve quadratic equations by finding the roots and the discriminant, which indicates the nature of the roots.
        </p>
        <p className="mb-4 text-lg leading-7">
          Quadratic equations are foundational in mathematics, appearing in various fields such as physics, engineering, and economics. Understanding how to solve these equations is crucial for students and professionals alike, as they can model real-world phenomena. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Use the Quadratic Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          Enter the coefficients a, b, and c of the quadratic equation in the input fields. The calculator will automatically calculate the roots and the discriminant for you. 
        </p>
        <p className="mb-4 text-lg leading-7">
          After inputting the values, simply click on the 'Calculate' button and the solutions will be displayed immediately. The discriminant will also inform you of the nature of the roots—whether they are real or complex numbers.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Applications of Quadratic Equations
        </h2>
        <p className="mb-4 text-lg leading-7">
          Quadratic equations are widely used in various applications. For example, they can be found in physics when analyzing the projectile motion of objects. The path of an object in motion forms a parabola, which can be described by a quadratic equation. 
        </p>
        <p className="mb-4 text-lg leading-7">
          In finance, quadratic equations help in modeling profit and loss scenarios, where the profit function can be represented as a quadratic equation. Moreover, they play a crucial role in optimizing areas in mathematics, such as finding the maximum or minimum values.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">1. What is the Quadratic Formula?</h3>
        <p className="mb-4 text-lg leading-7">
          The quadratic formula is used to find the roots of a quadratic equation and is expressed as: x = (-b ± √(b² - 4ac)) / (2a). This formula provides a systematic way to solve quadratic equations regardless of the values of a, b, and c.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">2. What does the Discriminant tell you?</h3>
        <p className="mb-4 text-lg leading-7">
          The discriminant is the part of the quadratic formula under the square root, b² - 4ac. It determines the nature of the roots: 
          - If the discriminant is positive, there are two distinct real roots.
          - If it is zero, there is exactly one real root (a repeated root).
          - If it is negative, the roots are complex and not real numbers.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">3. Can all quadratic equations be solved using the quadratic formula?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, all quadratic equations can be solved using the quadratic formula, as long as a is not equal to zero. This method provides a reliable means for finding the solutions of any quadratic equation.
        </p>
      </section>
    </article>
  );
}
