import React from 'react';

export default function DistanceConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Distance Converter</h1>
        <meta name="description" content="Easily convert distances between kilometers, miles, nautical miles, and meters using our comprehensive distance converter. Get accurate results and learn more about distance conversion!" />
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Distance Conversion?</h2>
        <p className="mb-4 text-lg leading-7">
          Distance conversion is the process of translating a measurement from one unit of length to another. This is useful in travel, navigation, engineering, and science where you might need to switch between metric and imperial units or use nautical units for maritime and aviation contexts.
        </p>
        <p className="mb-4 text-lg leading-7">
          This converter supports common distance units including kilometers (km), miles (mi), nautical miles (nmi), and meters (m). Internally, we convert the input to a base unit (meters) and then convert from meters to the desired target unit to ensure accurate and consistent results. Understanding how to convert distances effectively can save time and prevent errors in measurement.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Conversion Works</h2>
        <p className="mb-4 text-lg leading-7">
          The tool uses conversion factors to and from meters (the base unit). The general formula is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Result = (Value × From Unit Factor) / To Unit Factor</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where the unit factors represent how many meters are in one unit. For example: 1 km = 1000 m, 1 mi = 1609.344 m, 1 nmi = 1852 m. Each of these conversions plays a critical role in various fields, from scientific research to everyday travel planning.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Distance Conversion</h2>
        <div className="space-y-3">
          <p className="text-lg">
            Example 1: Convert 100 km to miles
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-base text-gray-700">
              Calculation: (100 × 1000) / 1609.344 = 62.1371 mi
            </p>
          </div>

          <p className="text-lg">
            Example 2: Convert 50 nautical miles to kilometers
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-base text-gray-700">
              Calculation: (50 × 1852) / 1000 = 92.6 km
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Distance Conversion</h2>
        <p className="mb-4 text-lg leading-7">
          Distance conversion is essential in various scenarios:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Travel: Converting distances for road trips, flights, or hiking routes.</li>
          <li>Engineering: Working with specifications and technical drawings that use different unit systems.</li>
          <li>Education: Teaching students about measurements and their real-world applications.</li>
          <li>Healthcare: Calculating distances in medical imaging or patient transport scenarios.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Using the Distance Converter</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Use the decimal input for fractional units (e.g., 1.5 mi).</li>
          <li>Toggle charts to visually compare the original and converted distances.</li>
          <li>Download a PDF summary of your inputs and result for record-keeping or reporting.</li>
          <li>Always double-check critical measurements to ensure accuracy, especially in professional environments.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Distance Conversion</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Does the converter support negative distances?</h3>
            <p className="text-lg">By default, this tool expects non-negative distances. If you need to handle directional distances or vectors, apply sign handling in your application logic.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Are nautical miles different from regular miles?</h3>
            <p className="text-lg">Yes. A nautical mile (nmi) is based on the Earth's circumference and equals exactly 1852 meters. A statute mile (mi) equals 1609.344 meters.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How accurate are the conversions?</h3>
            <p className="text-lg">Conversions use standardized factors, and results are rounded to six decimal places in the UI. For high-precision needs, adjust the rounding or perform calculations with high-precision libraries.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
