import React from 'react';

export default function StoneToKilogramConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Stone to Kilogram Converter</h1>
      <meta name="description" content="Use our Stone to Kilogram Converter to easily convert stones (st) to kilograms (kg) and learn how the conversion works." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Stone to Kilogram Converter?</h2>
        <p className="mb-4 text-lg leading-7">
          This converter allows you to convert between stones (st) and kilograms (kg). The stone is a unit of mass commonly used in the United Kingdom and Ireland. One stone equals 6.35029318 kilograms. The need for such a converter arises from the fact that many people still measure their weight in stones and find it helpful to have a quick way to see that weight in kilograms, especially when using metrics for fitness or medical purposes.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter a value and select the unit you are converting from. The converter will automatically calculate the converted value in the selected target unit, making weight management and understanding much simpler.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">How the Conversion Works</h2>
        <p className="mb-4 text-lg leading-7">
          Conversions are done via a base unit: kilograms. First, the input is converted to kilograms; then, it is converted to the desired target unit. This two-step approach ensures consistent and accurate results, allowing users to trust the output of the calculator.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value × From Unit Factor) / To Unit Factor
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          For this tool, the factors are:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li> 1 stone = 6.35029318 kilograms</li>
          <li> 1 kilogram = 1 kilogram (base)</li>
        </ul>
        
        <p className="mb-4 text-lg leading-7">
          Understanding these factors is crucial for ensuring that the conversions you make are both accurate and reliable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Examples of Stone to Kilogram Conversions</h2>
        <div className="mb-4 text-lg leading-7">
          <p className="mb-2"><strong>Example 1:</strong> Convert 10 stones to kilograms</p>
          <p className="mb-2">10 st × 6.35029318 = 63.5029318 kg → rounded: 63.502932 kg</p>

          <p className="mb-2"><strong>Example 2:</strong> Convert 70 kilograms to stones</p>
          <p className="mb-2">70 kg / 6.35029318 = 11.0231139 st → rounded: 11.023114 st</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Frequently Asked Questions about Stone to Kilogram Converters</h2>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Is the conversion exact?</h3>
          <p className="text-lg leading-7">The converter uses the standard defined factor of 1 st = 6.35029318 kg. Results are shown rounded to a reasonable number of decimal places for readability, ensuring you get a practical output while maintaining precision.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Why use kilograms as a base unit?</h3>
          <p className="text-lg leading-7">Using a common base unit (kilograms) simplifies conversions between any supported weight units and reduces rounding errors. It also allows for clearer communication and understanding when discussing metrics across various contexts, including sports, medicine, and daily life.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Can I copy or export the results?</h3>
          <p className="text-lg leading-7">Yes — use the PDF download option to export the inputs and results as a PDF for record keeping or sharing. This feature is ideal for those who might want to track their weight changes over time or share results with healthcare professionals.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Tips for Using the Stone to Kilogram Converter</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Use the step control to enter decimal values (e.g., 10.5 stones) for more precise measurements.</li>
          <li>Toggle charts to visually compare the original and converted values, enhancing your understanding of weight conversions.</li>
          <li>PDF export includes the inputs and final result for documentation, making it convenient to keep track of your conversions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Use Cases for this Converter</h2>
        <p className="mb-4 text-lg leading-7">
          The Stone to Kilogram Converter can be particularly helpful in various scenarios such as:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>For fitness enthusiasts who track their weight in stones but need to report it in kilograms for gym records.</li>
          <li>In healthcare settings where patient weight may be measured in stones but converted to kilograms for medical assessments.</li>
          <li>For students and professionals who need to convert weight units in scientific or engineering applications.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          No matter your need, this converter offers a straightforward solution for converting between these two common weight measurements.
        </p>
      </section>
    </article>
  );
}
