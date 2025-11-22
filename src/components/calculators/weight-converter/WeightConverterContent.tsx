import React from 'react';

export default function WeightConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Discover the ultimate weight converter tool for converting between grams, kilograms, ounces, pounds, and more. Simplify your weight conversions today!" />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Weight Conversion?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Weight conversion is the process of converting measurements from one unit of weight or mass to another. Whether you're working with metric units like grams and kilograms, or imperial units like ounces and pounds, understanding weight conversions is essential for cooking, shipping, fitness tracking, and scientific calculations.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our weight converter supports conversions between grams (g), kilograms (kg), ounces (oz), pounds (lb), metric tons (t), and stones (st). This tool helps you quickly convert weight measurements for recipes, package shipping, body weight tracking, and professional applications.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Convert Weight Units
        </h2>
        <p className="mb-4 text-lg leading-7">
          Converting between weight units requires understanding the relationship between different measurement systems. All conversions are based on the kilogram as the base unit, with other units defined relative to it.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value × From Unit Factor) / To Unit Factor
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> Convert 70 kilograms to pounds.
            <br />
            <br />
            Kilograms to pounds conversion factor: 1 kg = 2.20462 pounds
            <br />
            Calculation: 70 kg × 2.20462 = 154.3234 pounds
            <br />
            <strong>Result:</strong> 70 kilograms equals 154.32 pounds
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
          Understanding Weight Units
        </h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Grams (g):</span>
            <span>The base unit of mass in the metric system. 1 gram = 0.001 kilograms. Commonly used for small measurements like food portions.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Kilograms (kg):</span>
            <span>The standard unit of mass in the metric system. 1 kg = 1,000 grams. Used for body weight, produce, and most everyday measurements.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Ounces (oz):</span>
            <span>Common imperial unit. 1 ounce = 28.3495 grams or 0.0283495 kilograms. Often used in cooking and postal services.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Pounds (lb):</span>
            <span>Widely used in the United States. 1 pound = 16 ounces or 0.453592 kilograms. Common for body weight and produce.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Metric Tons (t):</span>
            <span>Used for very large weights. 1 metric ton = 1,000 kilograms. Common in shipping, industry, and large-scale measurements.</span>
          </li>
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Stones (st):</span>
            <span>Commonly used in the UK for body weight. 1 stone = 14 pounds or 6.35029 kilograms.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Real-World Uses of Weight Conversion
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Cooking & Baking</h4>
            <p className="text-base text-gray-700">Convert between grams and ounces when following recipes from different countries or adjusting ingredient quantities.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Fitness & Health</h4>
            <p className="text-base text-gray-700">Convert between kilograms and pounds when tracking body weight, especially when using fitness equipment or apps with different unit systems.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Shipping & Logistics</h4>
            <p className="text-base text-gray-700">Convert package weights between kilograms and pounds for international shipping, calculating postage, and customs declarations.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Scientific Research</h4>
            <p className="text-base text-gray-700">Convert measurements between metric units for laboratory work, chemical calculations, and scientific data analysis.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Grocery Shopping</h4>
            <p className="text-base text-gray-700">Compare product weights when shopping internationally or understanding package sizes in different unit systems.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Sports & Athletics</h4>
            <p className="text-base text-gray-700">Convert weight measurements for equipment, training loads, and competition requirements that may use different unit systems.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions About Weight Conversion
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How do I convert kilograms to pounds?</h4>
            <p className="text-base text-gray-700">Multiply the number of kilograms by 2.20462 to get pounds. For example, 10 kg × 2.20462 = 22.0462 pounds.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How many grams are in a kilogram?</h4>
            <p className="text-base text-gray-700">There are 1,000 grams in 1 kilogram. This is a base-10 conversion in the metric system.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is the difference between weight and mass?</h4>
            <p className="text-base text-gray-700">Mass is the amount of matter in an object (measured in kg), while weight is the force of gravity on that mass (measured in newtons). In everyday use, we often use "weight" to mean mass.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">How do I convert ounces to grams?</h4>
            <p className="text-base text-gray-700">Multiply ounces by 28.3495 to get grams. For example, 16 oz × 28.3495 = 453.592 grams (which equals 1 pound).</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">What is a stone in weight?</h4>
            <p className="text-base text-gray-700">A stone is a British unit of weight equal to 14 pounds or approximately 6.35 kilograms. It's commonly used in the UK and Ireland for body weight.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Why is it important to convert weight correctly?</h4>
            <p className="text-base text-gray-700">Accurate weight conversion is crucial for cooking, shipping, health tracking, and scientific research to ensure safety and compliance with requirements.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
