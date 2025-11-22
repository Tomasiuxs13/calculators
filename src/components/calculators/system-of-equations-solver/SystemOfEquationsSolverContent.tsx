import React from 'react';

export default function SystemOfEquationsSolverContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Easily solve a system of equations with our Cramer's Rule calculator. Learn about linear equations and solutions." />
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a System of Linear Equations?</h2>
        <p className="mb-4 text-lg leading-7">
          A system of linear equations is a collection of two or more linear equations involving the same set of variables. For two variables x and y, a typical system looks like:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">a1 x + b1 y = c1
a2 x + b2 y = c2</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This solver uses Cramer's Rule to find the unique solution when the determinant (a1*b2 - a2*b1) is non-zero. If the determinant is zero, the system either has infinitely many solutions or none.
          Understanding these concepts is essential for students and professionals dealing with algebraic equations. Familiarity with linear systems helps in various fields, such as economics, engineering, and data science.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the System of Equations Solver Works</h2>
        <p className="mb-4 text-lg leading-7">
          Cramer's Rule provides a direct formula for the variables using determinants. For the system above:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Determinant: D = a1 * b2 - a2 * b1
          </p>
          <p className="text-base text-gray-700 mt-2">
            x = (c1 * b2 - c2 * b1) / D
          </p>
          <p className="text-base text-gray-700 mt-2">
            y = (a1 * c2 - a2 * c1) / D
          </p>
        </div>
        <p className="mb-4 text-lg leading-7">
          Utilizing Cramer's Rule is an efficient way to compute solutions, especially for 2x2 systems. This method reinforces the importance of determinants in linear algebra.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of the System of Equations Solver</h2>
        <p className="mb-4 text-lg leading-7">
          Using the default values in the calculator:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Equation 1: 2x + 3y = 7</li>
          <li>Equation 2: 1x - 1y = 1</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          For these equations, you can calculate the determinant D = 2 * (-1) - 1 * 3 = -2 - 3 = -5 (non-zero). Using Cramer's Rule:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">x = (7 * -1 - 1 * 3) / -5 = (-7 - 3) / -5 = 10 / -5 = -2
y = (2 * 1 - 1 * 7) / -5 = (2 - 7) / -5 = -5 / -5 = 1</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The calculator will display the solution and allow you to visualize it on a chart. Furthermore, you can download a PDF report of the results for better documentation or sharing with colleagues.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When is there no unique solution?</h2>
        <p className="mb-4 text-lg leading-7">
          If the determinant D = a1*b2 - a2*b1 equals zero, the equations are either parallel (no solutions) or represent the same line (infinitely many solutions). The system of equations solver will indicate "No unique solution" in this case, allowing for easy recognition of problematic systems.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the System of Equations Solver</h2>
        <p className="mb-4 text-lg leading-7">
          The system of equations solver is useful for students tackling linear algebra problems or professionals in fields involving mathematical modeling. Applications include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Economics: Determining equilibrium prices and quantities.</li>
          <li>Engineering: Solving circuit analysis problems.</li>
          <li>Data Science: Conducting regression analysis for predictive modeling.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Can I solve more than two equations?</h3>
            <p className="text-lg leading-7">This tool is built for 2x2 systems. For larger systems, consider using Gaussian elimination or matrix-based solvers. We may add a multi-variable solver in a future update.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why does the calculator show "No unique solution"?</h3>
            <p className="text-lg leading-7">This indicates that the determinant is zero. It is essential to check if the equations are multiples of each other (yielding infinite solutions) or if they are inconsistent (yielding no solution).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How accurate are the results?</h3>
            <p className="text-lg leading-7">The results are computed with JavaScript's floating-point arithmetic and are rounded to 6 decimal places for display. For critical applications, verification with higher-precision tools is recommended.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
