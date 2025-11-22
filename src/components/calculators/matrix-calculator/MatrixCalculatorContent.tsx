import React from 'react';

export default function MatrixCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Matrix Calculator — Overview</h2>
        <p className="mb-4 text-lg leading-7">
          This Matrix Calculator performs common matrix operations such as addition, subtraction, and multiplication. Enter matrices using rows separated by a semicolon (";") and values separated by commas (","). The calculator validates input, performs the chosen operation automatically, and displays results immediately. You can also download a PDF summary of your inputs and results for future reference. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're a student learning about matrices or a professional needing quick calculations, our Matrix Calculator provides a user-friendly solution for handling various mathematical operations on matrices efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Input Format for Matrix Operations</h2>
        <p className="mb-4 text-lg leading-7">
          Matrices should be provided as plain text in a structured format for accurate calculations. Here are some examples:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li> 2x2 matrix: <code className="font-mono">1,2;3,4</code></li>
          <li> 3x3 matrix: <code className="font-mono">1,0,2;3,4,5;6,7,8</code></li>
        </ul>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Rows separated by ";" — values in a row separated by ","</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Matrix Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator parses each matrix into a 2D numeric array. For addition, both matrices must share identical dimensions. For multiplication, the number of columns in Matrix 1 must equal the number of rows in Matrix 2. The operation runs automatically when inputs change, providing instant feedback on your calculations.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example (Addition):
          </p>
          <pre className="bg-white p-3 rounded mt-2 font-mono text-sm">Matrix 1: 1,2;3,4
Matrix 2: 5,6;7,8
Result: 6, 8
13, 15</pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example (Multiplication):
          </p>
          <pre className="bg-white p-3 rounded mt-2 font-mono text-sm">Matrix 1: 1,2;3,4
Matrix 2: 5,6;7,8
Result:
19, 22
43, 50</pre>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips & Troubleshooting for Matrix Calculations</h2>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Ensure each row has the same number of values.</li>
          <li>Do not include extra separators at the end of rows.</li>
          <li>If you see an error, check the input format and the requirements for the chosen operation (dimensions for addition or multiplication compatibility).</li>
          <li>Refer to the FAQ section below for common errors and solutions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Common Use Cases for the Matrix Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Matrix Calculator is not only beneficial for students but also has use cases in various fields including:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li><strong>Education:</strong> Useful for students learning linear algebra and calculus.</li>
          <li><strong>Engineering:</strong> Helps engineers in calculations involving linear transformations and systems of equations.</li>
          <li><strong>Data Science:</strong> Simplifies matrix operations common in data manipulation and analysis.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs about the Matrix Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">What formats are supported for matrix input?</h3>
            <p className="text-lg">Plain text with rows separated by ";" and values by ",". Example: <span className="font-mono">1,2;3,4</span>.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why am I getting a dimension error for addition?</h3>
            <p className="text-lg">Addition requires both matrices to have the exact same number of rows and columns. Ensure both inputs are rectangular and match in size.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I multiply non-square matrices?</h3>
            <p className="text-lg">Yes. Multiplication works for any matrices where the number of columns in the first equals the number of rows in the second (A_cols === B_rows).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I improve my matrix inputs?</h3>
            <p className="text-lg">Double-check that your values are numerical and appropriately structured without any misplaced commas or semicolons. Use our calculator's examples as a guide.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
