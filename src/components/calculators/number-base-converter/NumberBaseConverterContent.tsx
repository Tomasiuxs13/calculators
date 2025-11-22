import React from 'react';

export default function NumberBaseConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Number Base Converter</h1>
        <p className="mb-4 text-lg leading-7">
          Convert numbers quickly and accurately between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). 
          This tool parses an integer value from the selected source base and outputs the equivalent representation in the target base. 
          It also displays the decimal equivalent for clarity, allowing users to gain confidence in their conversions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The converter first validates the input against the selected source base. If valid, it converts the input into a canonical decimal (base 10) representation, then formats that decimal value into the target base. 
          Negative integers are supported by preserving the sign. The intuitive user interface ensures an efficient conversion process.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Converted = (parseInt(input, fromBase)).toString(toBase)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Number Base Conversions</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-base"><strong>Input:</strong> 255 (decimal) → <strong>Output:</strong> FF (hexadecimal)</p>
            <p className="text-sm text-gray-600">Explanation: 255 base 10 equals 255 in decimal, which is FF in base 16.</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-base"><strong>Input:</strong> 1010 (binary) → <strong>Output:</strong> 10 (decimal)</p>
            <p className="text-sm text-gray-600">Explanation: 1010₂ = 10₁₀.</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-base"><strong>Input:</strong> FF (hexadecimal) → <strong>Output:</strong> 377 (octal)</p>
            <p className="text-sm text-gray-600">Explanation: FF₁₆ = 255₁₀ = 377₈.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Best Practices for Using the Number Base Converter</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Use uppercase or lowercase for hexadecimal digits — the converter handles both.</li>
          <li>Only integer conversions are supported. For fractional values, convert each side separately or use dedicated tools for fractional bases.</li>
          <li>Negative numbers are supported; the sign is preserved in the output.</li>
          <li>Double-check the base you are converting from to ensure accurate results.</li>
          <li>Use the built-in examples to familiarize yourself with the conversion process effectively.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Number Base Conversion</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I enter prefixes like 0x or 0b?</h3>
            <p className="text-base text-gray-700">This converter expects raw digits corresponding to the selected base (e.g., FF for hex). Prefixes like 0x or 0b are not required and may cause validation to fail. Remove any prefixes before converting.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What happens with invalid characters?</h3>
            <p className="text-base text-gray-700">The tool validates input for the chosen source base and will display an error message if invalid characters are present (for example, letters outside A-F in hexadecimal or digits beyond 7 in octal).</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Are large numbers supported?</h3>
            <p className="text-base text-gray-700">This converter uses JavaScript's Number.parseInt for parsing, which is suitable for typical use cases. Extremely large integers may lose precision; for arbitrary precision conversions, consider a BigInt-based or big-number library implementation.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Accessibility & SEO Considerations for Number Base Conversion</h2>
        <p className="text-base text-gray-700">This page uses semantic headings and descriptive labels to be accessible to screen readers. Descriptive examples and plain-language explanations improve search relevance for queries like "convert hex to decimal" or "binary to decimal converter". Not only does this enhance the user experience, but it also contributes positively to SEO, ensuring that more users can find this valuable tool.</p>
      </section>
    </article>
  );
}
