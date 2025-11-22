import React from 'react';

export default function PowerConverterContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Power Converter</h1>
      <meta name="description" content="Effortlessly convert between different power units such as watts, kilowatts, horsepower, and BTU per hour using our comprehensive power converter." />
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Power Conversion?</h2>
        <p className="mb-4 text-lg leading-7">
          Power conversion refers to the methods and processes used to convert between different units of power measurement. It is essential in various fields including engineering, automotive, and electrical applications. Power, in this context, measures the rate at which work is done or energy is transferred, and understanding it is crucial for optimizing performance in devices and machinery.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our power converter supports a range of units such as watts (W), kilowatts (kW), horsepower (hp), and BTUs per hour (BTU/h). Each of these units serves a unique purpose in measuring power across different applications, and our tool simplifies the task of converting one to another.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Convert Power Units</h2>
        <ul className="space-y-3 mb-6 list-none">
          <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span><strong className="text-gray-900">1 kW = 1,000 W</strong></span></li>
          <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span><strong className="text-gray-900">1 hp = 745.7 W</strong></span></li>
          <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><span><strong className="text-gray-900">1 BTU/h = 0.293071 W</strong></span></li>
        </ul>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> Convert 1000 W to horsepower.
            <br />Calculation: 1000 / 745.7 = 1.34 hp
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Why Use a Power Converter?</h2>
        <p className="mb-4 text-lg leading-7">
          The ability to convert power units is invaluable in multiple scenarios. For example, when selecting an engine for a vehicle, understanding horsepower is crucial as it directly relates to the vehicle's performance. Moreover, electricians often need to reference kilowatts or watts while dealing with appliance power ratings to ensure electrical systems are capable of handling the load.
        </p>
        <p className="mb-4 text-lg leading-7">
          Using our power converter can help avoid calculation errors and make quick conversions during engineering assessments or electrical installations.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Common Use Cases for Power Conversion</h2>
        <p className="mb-4 text-lg leading-7">1. **Electricians** often convert between watts and kilowatts to ensure that circuits are not overloaded when adding new appliances.
        </p>
        <p className="mb-4 text-lg leading-7">2. **Automotive engineers** require horsepower to evaluate the performance of engines against design specifications.
        </p>
        <p className="mb-4 text-lg leading-7">3. **Building designers** use BTU/h to calculate heating and cooling loads in residential and commercial spaces for HVAC design.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQs)</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">1. What is the difference between watts and kilowatts?</h3>
        <p className="mb-4 text-lg leading-7">
          Watts measure the instantaneous amount of power, while kilowatts are a larger unit equivalent to 1,000 watts, commonly used for larger loads.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. How can I use the power converter?</h3>
        <p className="mb-4 text-lg leading-7">
          Simply enter the value and select the unit you wish to convert from, then select the unit to convert to. The result will be displayed instantly.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. Why does converting power units matter?</h3>
        <p className="mb-4 text-lg leading-7">
          Accurate conversions are necessary for compliance with engineering standards, efficiency in energy consumption, and safety in electrical installations.
        </p>
      </section>
    </article>
  );
}
