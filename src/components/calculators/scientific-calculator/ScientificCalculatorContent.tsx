import React from 'react';

export default function ScientificCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Scientific Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Scientific Calculator performs advanced mathematical evaluations including trigonometric, logarithmic, exponential, and root functions. You can enter expressions using common functions such as sin, cos, tan, sqrt, pow, ln (natural logarithm), and log (base 10). The calculator evaluates the expression automatically as you type.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use <code className="font-mono">x</code> as a variable to plot expressions. Choose Degrees or Radians for trigonometric functions using the Angle Mode selector. Results update live without needing to press a separate Calculate button.
        </p>
        <p className="mb-4 text-lg leading-7">
          Scientific calculators are indispensable tools for students, engineers, and anyone needing to perform complex calculations. They save time and enhance accuracy by providing quick answers to a variety of computations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Supported Functions &amp; Syntax</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Trigonometry: <code className="font-mono">sin(x), cos(x), tan(x)</code>. Angle mode controls whether x is interpreted in degrees or radians.</li>
          <li>Inverse trig: <code className="font-mono">asin(x), acos(x), atan(x)</code> (returns degrees when in Degree mode).</li>
          <li>Roots &amp; powers: <code className="font-mono">sqrt(x), pow(x, y), x^y</code>.</li>
          <li>Logarithms: <code className="font-mono">ln(x)</code> (natural log), <code className="font-mono">log(x)</code> (base 10).</li>
          <li>Constants: <code className="font-mono">pi</code>, <code className="font-mono">e</code>.</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Examples: sin(30) + log(100), 2^3 + sqrt(16), sin(x) * x</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Scientific Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg">
          <li>Type your mathematical expression into the <strong>Mathematical Expression</strong> input. Use <code className="font-mono">x</code> if you want to plot.</li>
          <li>Select <strong>Degrees</strong> or <strong>Radians</strong> for trigonometric calculations.</li>
          <li>Toggle the chart view to visualize the function when it depends on <code className="font-mono">x</code>.</li>
          <li>Download a PDF report of inputs and results using the PDF button.</li>
          <li>Review common errors in your input and try basic expressions to get familiar with the calculator's functions.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Tip: For expressions using trig functions written in degrees (e.g. <code className="font-mono">sin(30)</code>), choose <strong>Degrees</strong>. If your expression is in radians (e.g. <code className="font-mono">sin(pi/6)</code>), choose <strong>Radians</strong>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">Basic calculation</h3>
            <p className="text-lg">Expression: <code className="font-mono">sin(30) + log(100)</code></p>
            <p className="mt-2 text-gray-700">Explanation: sin(30) = 0.5 (in degrees), log(100) = 2 (base 10), result = 2.5</p>
          </div>

          <div className="bg-white p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">Function plot</h3>
            <p className="text-lg">Expression: <code className="font-mono">sin(x) * x</code></p>
            <p className="mt-2 text-gray-700">Explanation: Plots y=x·sin(x) across the selected range. Use the chart toggle to visualize.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">What does <code className="font-mono">log()</code> mean?</h4>
            <p className="text-lg text-gray-700">In this calculator, <code className="font-mono">log(x)</code> denotes base-10 logarithm. Use <code className="font-mono">ln(x)</code> for natural logarithm.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">How do I plot a function?</h4>
            <p className="text-lg text-gray-700">Include <code className="font-mono">x</code> in your expression (e.g. <code className="font-mono">sin(x)*x</code>). Toggle the chart view to see the function plotted. Select Degrees or Radians depending on your input.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Is the input sanitized?</h4>
            <p className="text-lg text-gray-700">The calculator performs basic sanitization and only supports a set of functions and characters. Avoid entering arbitrary JavaScript code. If an expression cannot be evaluated, an error message will be shown.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">What are common use cases for the scientific calculator?</h4>
            <p className="text-lg text-gray-700">The scientific calculator is widely used in fields such as physics, engineering, architecture, and statistics. It assists in plotting graphs, solving equations, and implementing technical calculations quickly and efficiently.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Can I save my calculations?</h4>
            <p className="text-lg text-gray-700">Yes, you can save your calculations. The Scientific Calculator features a PDF download option that allows you to store your inputs and results for future reference.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
