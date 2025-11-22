import React from 'react';

export default function PolynomialCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Polynomial Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Solve polynomial equations and find their roots (real and complex) using our comprehensive Polynomial Calculator. This tool accepts the polynomial degree and a comma-separated list of coefficients (highest degree first), then computes all roots using a robust numerical method. Additionally, it provides a chart of root magnitudes and a downloadable PDF report, making it invaluable for students, educators, and professionals in various fields.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How to use the Polynomial Calculator</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Set the polynomial degree (must be an integer ≥ 1).</li>
          <li>Enter the coefficients separated by commas (e.g., for x² - 5x + 6 enter: 1, -5, 6).</li>
          <li>The calculator will auto-calculate and display all roots. Toggle charts to view root magnitudes and download a PDF report if needed.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Polynomial form: a_n x^n + a_(n-1) x^(n-1) + ... + a_0</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Examples of Polynomial Calculations</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Quadratic: x² - 5x + 6</h3>
          <p className="mb-2">Input:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Degree: 2</li>
            <li>Coefficients: 1, -5, 6</li>
          </ul>
          <p className="mb-2">Roots: 2 and 3 (both real)</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Cubic with complex roots: x³ + 1</h3>
          <p className="mb-2">Input:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Degree: 3</li>
            <li>Coefficients: 1, 0, 0, 1</li>
          </ul>
          <p className="mb-2">Roots: one real root (−1) and two complex conjugates.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Quartic Example: x^4 - 4x^3 + 6x^2 - 4x + 1</h3>
          <p className="mb-2">Input:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Degree: 4</li>
            <li>Coefficients: 1, -4, 6, -4, 1</li>
          </ul>
          <p className="mb-2">Roots: All roots are real (double roots at 1 and 2).</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How the Polynomial Calculator Works</h2>
        <p className="mb-4">The calculator employs a numerical root-finding method (Durand–Kerner) that finds all roots of a polynomial simultaneously. It represents complex numbers internally and iterates until the corrections become very small. This method is highly effective for polynomials of modest degree and efficiently provides both real and complex roots.</p>
        <p className="mb-4">Whether you're solving quadratic equations for homework or analyzing higher-degree polynomials, this calculator serves applications in algebraic problem-solving, engineering, and scientific research. Understanding roots is crucial in fields such as physics and economics, where mathematical modeling often relies on polynomial functions.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700"><strong>Note:</strong> Ensure the leading coefficient (highest-degree coefficient) is not zero. If you provide fewer coefficients than degree+1, the calculator pads with leading zeros. If you provide more, only the first degree+1 coefficients are used.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions About Polynomials</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Q: What format should coefficients use?</h3>
            <p className="mb-2">A: Provide a comma-separated list in descending order of powers. Example for 2x² + 3x + 1: "2, 3, 1".</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Q: Can I get complex roots with this calculator?</h3>
            <p className="mb-2">A: Yes, the calculator returns complex roots in a + bi format and shows their magnitudes on the chart, providing full insights into the behavior of the polynomial function.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Q: How accurate are the roots displayed?</h3>
            <p className="mb-2">A: The method iterates until a tight tolerance. For very high-degree polynomials or ill-conditioned coefficients, numerical accuracy may degrade; consider rescaling or using higher precision tools for such cases.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Q: Is this calculator suitable for educational purposes?</h3>
            <p className="mb-2">A: Absolutely! This calculator is a valuable resource for students learning about polynomial factorization, roots, and equations, providing instant feedback and detailed results to enhance understanding.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Tips for Using the Polynomial Calculator</h2>
        <ul className="list-disc list-inside">
          <li>Provide coefficients starting with the leading coefficient first.</li>
          <li>Rescale very large or small coefficients to improve numerical stability and accuracy.</li>
          <li>Use the PDF download option to save results and input parameters for reporting purposes, which is useful in academic and professional settings.</li>
        </ul>
      </section>
    </article>
  );
}
