import React from 'react';

export default function OunceToGramConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Ounce to Gram Converter</h1>
        <p className="mb-4 text-lg leading-7">
          Easily convert between ounces (oz) and grams (g). This converter uses the precise conversion factor where 1 ounce equals 28.349523125 grams. Use the tool to switch directions and get results instantly as you type. Understanding these conversions is essential in various fields, including culinary arts, nutritional science, and many day-to-day activities.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Ounce to Gram Conversion Works</h2>
        <p className="mb-4 text-lg leading-7">
          Conversions are performed by converting the input unit to the base unit (grams) and then converting from grams to the target unit. This two-step approach reduces rounding errors and keeps the calculation consistent. By using this method, we ensure that every conversion from ounces to grams is not only accurate but also reliable across different scenarios.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value × From Unit Factor) / To Unit Factor
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where the unit factors are based on grams as the base unit. For example:
        </p>

        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>oz → grams factor: 28.349523125</li>
          <li>g → grams factor: 1</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Ounce to Gram Conversions</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="mb-2 text-lg">
            Convert 10 oz to grams:
          </p>
          <pre className="bg-white p-3 rounded text-sm font-mono">10 × 28.349523125 = 283.49523125 g</pre>

          <p className="mb-2 text-lg mt-4">
            Convert 100 g to ounces:
          </p>
          <pre className="bg-white p-3 rounded text-sm font-mono">100 ÷ 28.349523125 ≈ 3.527396195 oz</pre>

          <p className="mb-2 text-lg mt-4">
            Convert 5 oz to grams:
          </p>
          <pre className="bg-white p-3 rounded text-sm font-mono">5 × 28.349523125 = 141.747615625 g</pre>

          <p className="mb-2 text-lg mt-4">
            Convert 250 g to ounces:
          </p>
          <pre className="bg-white p-3 rounded text-sm font-mono">250 ÷ 28.349523125 ≈ 8.81849048 oz</pre>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to Use This Ounce to Gram Converter</h2>
        <p className="mb-4 text-lg leading-7">
          This converter is useful for cooking, nutrition tracking, laboratory work, shipping calculations, and any situation where you need to convert between imperial ounces and metric grams quickly and accurately. Many recipes require precision in ingredient measurements, making this converter an indispensable tool for home cooks and professional chefs alike.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Ounce to Gram Conversions</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Is the conversion factor exact?</h3>
            <p className="text-lg leading-7">
              The conversion factor used (1 oz = 28.349523125 g) is the standard accepted factor and provides high precision suitable for most applications. This level of detail ensures that your measurements are reliable, especially in professional settings where accuracy is key.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I convert negative values?</h3>
            <p className="text-lg leading-7">
              The calculator accepts numeric input. Negative weights are uncommon in practical scenarios; the tool will compute mathematically, but negative physical weights typically do not make sense. Accurate representation of mass is vital, thus negative values are generally not applicable in this conversion context.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How does the chart help?</h3>
            <p className="text-lg leading-7">
              The bar chart provides a quick visual comparison between the original value and the converted value, helping you see relative magnitudes at a glance. This feature enhances understanding, particularly when dealing with large numbers or when trying to visualize conversion outcomes quickly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What other units can I convert?</h3>
            <p className="text-lg leading-7">
              While this converter focuses on ounces and grams, it can also provide conversions with other volume and weight measurements based on demand. It is helpful to have a versatile converter that can accommodate your varying needs, whether it's converting milliliters to liters or pounds to grams.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Using the Ounce to Gram Converter</h2>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>Use the step control to enter fractional weights precisely (e.g., 0.01).</li>
          <li>Switch the "From" and "To" units to convert in the opposite direction without retyping the value.</li>
          <li>Download the PDF summary for record keeping or sharing your conversion results.</li>
          <li>Always double-check the results for critical applications, such as dietary needs or scientific calculations.</li>
          <li>Utilize the converter in both kitchen and laboratory settings for versatile usage.</li>
        </ul>
      </section>
    </article>
  );
}
