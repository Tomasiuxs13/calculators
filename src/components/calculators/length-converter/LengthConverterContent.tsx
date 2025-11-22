import React from 'react';

export default function LengthConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Learn about length conversion, how to convert between various units, and explore real-world applications with our comprehensive guide." />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Length Conversion?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Length conversion is the process of converting measurements from one unit of length to another. Whether you're working with metric units like meters and centimeters, or imperial units like feet and inches, understanding how to convert between different length units is essential for many everyday tasks, scientific calculations, and engineering projects.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our length converter supports conversions between millimeters (mm), centimeters (cm), meters (m), kilometers (km), inches (in), feet (ft), yards (yd), and miles (mi). This comprehensive tool helps you quickly convert measurements for construction projects, travel planning, scientific research, and everyday calculations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Convert Length Units
        </h2>
        <p className="mb-4 text-lg leading-7">
          Converting between length units requires understanding the relationship between different measurement systems. The metric system uses base-10 conversions, making it straightforward, while the imperial system uses various conversion factors to denote length.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value × From Unit Factor) / To Unit Factor
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> Convert 100 meters to feet.
            <br />
            <br />
            Meters to feet conversion factor: 1 meter = 3.28084 feet
            <br />
            Calculation: 100 m × 3.28084 = 328.084 feet
            <br />
            <strong>Result:</strong> 100 meters equals 328.084 feet
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
          Understanding Length Units
        </h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Millimeters (mm):</span>
            <span>The smallest common metric unit, used for precise measurements. 1 mm = 0.001 meters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Centimeters (cm):</span>
            <span>Commonly used for everyday measurements. 1 cm = 0.01 meters or 10 millimeters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Meters (m):</span>
            <span>The base unit of length in the metric system. Used for measuring rooms, distances, and heights.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Kilometers (km):</span>
            <span>Used for longer distances like road distances and travel. 1 km = 1,000 meters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Inches (in):</span>
            <span>Common imperial unit. 1 inch = 2.54 centimeters or 0.0254 meters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Feet (ft):</span>
            <span>Widely used in the United States. 1 foot = 12 inches or 0.3048 meters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Yards (yd):</span>
            <span>Common in sports and construction. 1 yard = 3 feet or 0.9144 meters.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Miles (mi):</span>
            <span>Used for long distances, especially in the US. 1 mile = 1,609.34 meters or 5,280 feet.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Real-World Uses of Length Conversion
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Construction Projects</h4>
            <p className="text-base text-gray-700">Convert between metric and imperial measurements when working with building plans, materials, and specifications from different countries.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Travel Planning</h4>
            <p className="text-base text-gray-700">Convert distances between kilometers and miles when planning road trips, understanding speed limits, or calculating travel times.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Scientific Research</h4>
            <p className="text-base text-gray-700">Convert measurements between metric units for laboratory work, data analysis, and scientific publications that require consistent units.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Fitness Tracking</h4>
            <p className="text-base text-gray-700">Convert between meters and miles when tracking running distances, understanding race lengths, or comparing workout metrics.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Home Improvement</h4>
            <p className="text-base text-gray-700">Convert measurements when buying furniture, planning room layouts, or working with tools that use different measurement systems.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
            <p className="text-base text-gray-700">Help students understand the relationship between different measurement systems and practice unit conversions in math and science classes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Length Conversion
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How do I convert meters to feet?</h4>
            <p className="text-base text-gray-700">Multiply the number of meters by 3.28084 to get the equivalent in feet. For example, 5 meters × 3.28084 = 16.404 feet.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is the difference between metric and imperial units?</h4>
            <p className="text-base text-gray-700">The metric system uses base-10 conversions (millimeters, centimeters, meters, kilometers), while the imperial system uses various conversion factors (inches, feet, yards, miles).</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How many centimeters are in a meter?</h4>
            <p className="text-base text-gray-700">There are 100 centimeters in 1 meter, which is a base-10 conversion in the metric system.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How do I convert kilometers to miles?</h4>
            <p className="text-base text-gray-700">Multiply kilometers by 0.621371 to get miles. For example, 10 km × 0.621371 = 6.21371 miles.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is the most accurate way to convert length units?</h4>
            <p className="text-base text-gray-700">Use our online converter for the most accurate results, as it uses precise conversion factors. For manual calculations, always utilize the exact conversion factors rather than approximations.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
