import React from 'react';

export default function NauticalMileConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Nautical Mile Converter</h1>
        <p className="mb-4 text-lg leading-7">
          A nautical mile (nmi) is a unit used in marine and air navigation. It is based on the circumference of the Earth and is equal to exactly 1,852 meters. Use this converter to quickly translate distances expressed in nautical miles into kilometers, statute miles, or meters. This is particularly useful for pilots, sailors, and navigators who rely on precise measurements to ensure safe and efficient travel.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Understanding Nautical Miles</h2>
        <p className="mb-4 text-lg leading-7">
          Nautical miles differ from statute miles in that they take the curvature of the Earth into account. This makes them a superior measurement for navigation over large distances, as they correlate directly to degrees of latitude and longitude. One nautical mile represents one minute of arc on the Earth's surface, which is essential for accurate mapping and navigation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Conversion Works</h2>
        <p className="mb-4 text-lg leading-7">
          Conversions are performed by first converting the distance in nautical miles to a base unit (meters), then converting from meters to the target unit. This two-step approach ensures accuracy and makes it easy to extend to additional units in the future.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value × 1852) / TargetUnitFactor
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Where TargetUnitFactor is the number of meters per target unit (e.g., 1000 for kilometers, 1609.34 for miles, 1 for meters). The conversion process involves basic multiplication and division, making it straightforward for anyone to use.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Nautical Mile Conversions</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li> 10 nmi → 18.52 km (10 × 1852 / 1000)</li>
          <li> 5 nmi → 9.2597 mi (5 × 1852 / 1609.34)</li>
          <li> 1 nmi → 1852 m</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Try entering a distance in nautical miles and choosing the target unit — results update automatically. Use the chart toggle to visualize the comparison and download a PDF summary if needed. This can be beneficial for both personal use and professional navigation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Use Nautical Miles</h2>
        <p className="mb-4 text-lg leading-7">
          Nautical miles are commonly used in maritime and aviation contexts because they correspond closely to one minute of latitude. Pilots, sailors, and navigators use nautical miles for route planning, reporting distances, and calculating travel time. They play a crucial role in ensuring that all navigational decisions are based on standardized measurements. Whether you're plotting a course across the ocean or estimating flight paths, using the correct units is vital for safety and efficiency.
        </p>

        <p className="mb-4 text-lg leading-7">
          Furthermore, many international agreements and regulations in maritime and aviation sectors use nautical miles, making it a universally recognized metric. This reinforces the need for clarity and accuracy when using this measurement, especially in global travel scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Nautical Miles</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Is a nautical mile the same as a mile?</h3>
            <p className="text-lg leading-7">No. A nautical mile (1,852 meters) is longer than a statute mile (1,609.34 meters). Use this converter to switch between them accurately to avoid miscalculations in navigation.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why convert via meters?</h3>
            <p className="text-lg leading-7">Converting via a base unit like meters simplifies the math and reduces possible rounding errors. It also makes adding more units straightforward, ensuring that the conversions remain consistent and reliable across different systems.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How accurate are the results?</h3>
            <p className="text-lg leading-7">This converter uses the exact definition for the nautical mile (1852 m) and common conversion factors for kilometers and miles. Final results are rounded to six decimal places for display, providing highly accurate outputs essential for navigation purposes.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What are some common use cases for nautical miles?</h3>
            <p className="text-lg leading-7">Nautical miles are primarily used in marine navigation, air traffic management, and by various industries involved in shipping and aviation. They are essential for charting courses, estimating travel times, and ensuring compliance with international navigation laws.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
