import React from 'react';

export default function AngleConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Angle Conversion?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Angle conversion is the process of converting measurements from one angular unit to another. Angles can be measured in degrees, radians, or gradians, each serving different purposes in mathematics, engineering, and navigation.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our angle converter supports conversions between degrees (°), radians (rad), and gradians (grad). This tool is essential for trigonometry calculations, engineering projects, navigation, and academic work.
        </p>
        <p className="mb-4 text-lg leading-7">
          By using our angle conversion tool, professionals and students can easily switch between different units of measurement, ensuring accurate calculations in their work. Understanding how to perform these conversions effectively enhances precision in various fields.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Convert Angle Units
        </h2>
        <p className="mb-4 text-lg leading-7">
          Converting between angle units requires understanding the relationships:
        </p>
        
        <ul className="space-y-3 mb-6 list-none">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Degrees to Radians:</strong> Multiply by π/180 (approximately 0.0174533)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Radians to Degrees:</strong> Multiply by 180/π (approximately 57.2958)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Degrees to Gradians:</strong> Multiply by 10/9 (approximately 1.11111)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Gradians to Degrees:</strong> Multiply by 9/10 (0.9)</span>
          </li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Radians = Degrees × (π / 180)
            <br />
            Degrees = Radians × (180 / π)
            <br />
            Gradians = Degrees × (10 / 9)
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> Convert 90 degrees to radians.
            <br />
            <br />
            Calculation: 90° × (π / 180) = π/2 radians ≈ 1.5708 radians
            <br />
            <strong>Result:</strong> 90 degrees equals approximately 1.5708 radians
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Understanding Angle Units
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
          Types of Angle Units
        </h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Degrees (°):</strong> The most common unit, with a full circle being 360 degrees. Used in navigation, geography, and everyday measurements.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Radians (rad):</strong> The standard unit in mathematics and physics. A full circle is 2π radians. Essential for calculus and trigonometric functions.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Gradians (grad):</strong> Also called "gons," with a full circle being 400 gradians. Used in some engineering and surveying applications.</span>
          </li>
        </ul>
        
        <p className="mb-4 text-lg leading-7">
          Each unit serves its specific purpose, making it essential for professionals in various fields to understand when to use each. For instance, while degrees are popular in everyday applications, radians are preferred in higher-level mathematics for their natural properties in calculus.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Common Use Cases for Angle Conversion
        </h2>
        <ul className="space-y-3 mb-6 list-none">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Mathematics:</strong> Converting between degrees and radians for trigonometric calculations</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Engineering:</strong> Working with angular measurements in mechanical and civil engineering</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Navigation:</strong> Converting compass bearings and course angles</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Programming:</strong> Converting angles for graphics, game development, and robotics</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong className="text-gray-900">Geography:</strong> Utilizing angle conversions in map reading and coordinate systems.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Angle Conversion
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Why are radians preferred in mathematics?</h4>
            <p className="text-base text-gray-700">
              Radians are preferred because they make calculus formulas simpler. The derivative of sin(x) is cos(x) only when x is in radians. Many mathematical relationships are more elegant when expressed in radians.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">How many radians are in a full circle?</h4>
            <p className="text-base text-gray-700">
              A full circle contains 2π radians, which is approximately 6.28318 radians. This comes from the relationship between the circumference of a circle (2πr) and its radius.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">When should I use gradians?</h4>
            <p className="text-base text-gray-700">
              Gradians are primarily used in surveying and some engineering applications, particularly in Europe. They offer a decimal-based system where a right angle is exactly 100 gradians, making some calculations easier.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Can I automate angle conversions?</h4>
            <p className="text-base text-gray-700">
              Yes, many programming languages offer libraries or functions that can automate angle conversions, saving time and minimizing errors in calculations.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
