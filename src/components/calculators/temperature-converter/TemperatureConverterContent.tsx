import React from 'react';

export default function TemperatureConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Explore temperature conversion methods, calculations, and common uses for Celsius, Fahrenheit, and Kelvin." />
      <meta name="keywords" content="temperature, temperature conversion, Celsius, Fahrenheit, Kelvin, weather, cooking, science, education, thermometer" />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Temperature Conversion?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Temperature conversion is the process of converting temperature measurements from one scale to another. The three most common temperature scales are Celsius (°C), Fahrenheit (°F), and Kelvin (K). Understanding how to convert between these scales is essential for weather reporting, cooking, scientific research, and international communication. Whether you're preparing a recipe or conducting a physics experiment, accurate temperature conversion can significantly affect your results.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our temperature converter supports conversions between Celsius, Fahrenheit, and Kelvin. This tool helps you quickly convert temperatures for weather forecasts, recipe adjustments, laboratory work, and understanding temperature references from different countries. With precise conversions, you can ensure that your projects are accomplished efficiently and accurately.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Convert Temperature
        </h2>
        <p className="mb-4 text-lg leading-7">
          Temperature conversion formulas differ from simple multiplication because each scale has different zero points and intervals. Celsius and Fahrenheit use different reference points, while Kelvin is an absolute scale starting at absolute zero. Understanding these differences is crucial when performing calculations.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Celsius to Fahrenheit: F = (C × 9/5) + 32
            <br />
            Fahrenheit to Celsius: C = (F - 32) × 5/9
            <br />
            Celsius to Kelvin: K = C + 273.15
            <br />
            Kelvin to Celsius: C = K - 273.15
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> Convert 20°C to Fahrenheit.
            <br />
            <br />
            Formula: F = (C × 9/5) + 32
            <br />
            Calculation: F = (20 × 9/5) + 32 = 36 + 32 = 68
            <br />
            <strong>Result:</strong> 20°C equals 68°F
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
          Understanding Temperature Scales
        </h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Celsius (°C):</span>
            <span>The metric temperature scale used worldwide. Water freezes at 0°C and boils at 100°C at standard atmospheric pressure. Named after Anders Celsius.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Fahrenheit (°F):</span>
            <span>Commonly used in the United States. Water freezes at 32°F and boils at 212°F. Named after Daniel Gabriel Fahrenheit.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Kelvin (K):</span>
            <span>The absolute temperature scale used in scientific applications. Absolute zero (0 K) is -273.15°C. No degree symbol is used with Kelvin.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Real-World Uses of Temperature Conversion
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Weather Forecasts</h4>
            <p className="text-base text-gray-700">Convert temperatures when traveling internationally or understanding weather reports from different countries that use different temperature scales.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Cooking & Baking</h4>
            <p className="text-base text-gray-700">Convert oven temperatures and cooking temperatures when following recipes from different countries or using appliances with different temperature scales.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Scientific Research</h4>
            <p className="text-base text-gray-700">Convert between Celsius and Kelvin for laboratory work, chemical reactions, and physics experiments that require absolute temperature measurements.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Medical Applications</h4>
            <p className="text-base text-gray-700">Convert body temperature measurements between Celsius and Fahrenheit when using medical equipment or understanding health information from different regions.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Engineering & Manufacturing</h4>
            <p className="text-base text-gray-700">Convert temperature specifications for materials, processes, and equipment that may use different temperature scales in technical documentation.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
            <p className="text-base text-gray-700">Help students understand the relationship between different temperature scales and practice conversions in science and math classes.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Temperature
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How do I convert Celsius to Fahrenheit?</h4>
            <p className="text-base text-gray-700">Multiply Celsius by 9/5 and add 32. For example, 25°C × 9/5 + 32 = 77°F.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is absolute zero in different scales?</h4>
            <p className="text-base text-gray-700">Absolute zero is 0 K, -273.15°C, or -459.67°F. It's the theoretical lowest possible temperature where all molecular motion stops.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">At what temperature do Celsius and Fahrenheit equal each other?</h4>
            <p className="text-base text-gray-700">Celsius and Fahrenheit are equal at -40 degrees (-40°C = -40°F). This is the only point where both scales have the same numerical value.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Why is Kelvin used in science?</h4>
            <p className="text-base text-gray-700">Kelvin is an absolute scale starting at absolute zero, making it ideal for scientific calculations involving temperature ratios and thermodynamic equations.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is room temperature in different scales?</h4>
            <p className="text-base text-gray-700">Room temperature is approximately 20-25°C (68-77°F or 293-298 K), though this can vary depending on location and personal preference.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
