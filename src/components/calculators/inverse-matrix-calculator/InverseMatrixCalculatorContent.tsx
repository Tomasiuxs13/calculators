import React from 'react';

export default function InverseMatrixCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Use our Inverse Matrix Calculator to find the inverse of square matrices using Gauss-Jordan elimination method. Simple and effective tool for math students." />
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Inverse of a Matrix</h2>
        <p className="mb-4 text-lg leading-7">
          The inverse of a square matrix A is another matrix denoted A^-1 such that A × A^-1 = I, where I is the identity matrix. Only square matrices with a non-zero determinant are invertible. 
          Finding the inverse of a matrix is vital in various applications, including systems of equations, computer graphics, and in understanding linear transformations.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the inverse using Gauss-Jordan elimination. Input the matrix as rows separated by a semicolon (<code className="font-mono">;</code>) and values separated by commas (<code className="font-mono">,</code>). 
          For example, the 2×2 matrix can be represented as follows:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">1,2;3,4</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Understanding how to find the inverse of a matrix will enhance your problem-solving skills in various mathematical fields. The ability to calculate matrix inverses will also help in fields like physics and engineering.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate the Inverse of a Matrix</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator parses the input into a numeric matrix, validates that it is square, and performs Gauss-Jordan elimination to compute the inverse. The determinant is also computed as part of the process; 
          if the determinant is zero (or extremely close to zero), the matrix is singular and not invertible. It's essential for students and professionals to ensure matrices are invertible before attempt to compute inverses.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            For a 2×2 matrix [a b; c d], the inverse can be computed directly as:
          </p>
          <div className="mt-3 font-mono text-sm bg-white p-3 rounded">
            A = [a b; c d]
            <br />
            det(A) = ad - bc
            <br />
            A^-1 = (1 / det(A)) * [d -b; -c a]
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Matrix Inversion</h2>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Example 1</p>
            <p className="text-sm text-gray-700">Input: <code className="font-mono">1,2;3,4</code></p>
            <p className="text-sm text-gray-700">Output (Inverse): <code className="font-mono">-2, 1; 1.5, -0.5</code></p>
          </div>

          <div>
            <p className="font-semibold">Example 2 (3×3)</p>
            <p className="text-sm text-gray-700">Input: <code className="font-mono">2,0,1;1,3,2;0,1,1</code></p>
            <p className="text-sm text-gray-700">Try this in the calculator to see the result and entry magnitudes chart.</p>
          </div>

          <div>
            <p className="font-semibold">Example 3 (4×4)</p>
            <p className="text-sm text-gray-700">Input: <code className="font-mono">1,0,2,1;0,1,1,0;2,1,0,1;1,0,1,2</code></p>
            <p className="text-sm text-gray-700">This example illustrates the complexity that can arise with larger matrices.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Inverse Matrices</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What format should I use for input?</h3>
            <p className="text-base text-gray-700">Use semicolons to separate rows and commas to separate values within a row, e.g. <code className="font-mono">1,2;3,4</code>.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why does it say the matrix is singular?</h3>
            <p className="text-base text-gray-700">A matrix is singular when its determinant is zero (or extremely close to zero). Singular matrices do not have inverses, which means they cannot be used in calculations requiring matrix inversion.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is there a size limit for matrices?</h3>
            <p className="text-base text-gray-700">This calculator performs numerical elimination in the browser. While small to medium matrices (2×2, 3×3, 4×4, etc.) work fine, very large matrices may be slow or numerically unstable.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How is this calculator different from others?</h3>
            <p className="text-base text-gray-700">Our Inverse Matrix Calculator is designed to provide clear and accurate results using the Gauss-Jordan elimination method, making it easy to visualize and understand the inverse operations.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
