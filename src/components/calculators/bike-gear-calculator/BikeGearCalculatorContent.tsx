import React from 'react';

export default function BikeGearCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Bike Gear Calculator</h1>
      <meta name="description" content="Calculate your bike gear ratio accurately to optimize your cycling performance. Understand gear inches and make smart biking choices." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Bike Gear Ratio?</h2>
        <p className="mb-4 text-lg leading-7">
          A bike gear ratio is the relationship between the number of teeth on the chainring (front) and the cog (rear). It determines how many wheel revolutions result from one pedal revolution. Higher ratios mean you travel further per pedal stroke but require more effort.
        </p>
        <p className="mb-4 text-lg leading-7">
          Gear inches translate the gear ratio into a wheel diameter equivalent, showing how far (in inches) the bike moves for one pedal revolution. This is useful for comparing drivetrain setups across different wheel sizes. For example, knowing your gear ratio can help you adjust your gear set-up based on the terrain you will be cycling on.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Bike Gear Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator takes three inputs: chainring teeth, cog teeth, and wheel diameter (in inches). It automatically calculates:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Gear Ratio = chainring teeth ÷ cog teeth</li>
          <li>Gear Inches = Gear Ratio × Wheel Diameter (inches)</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Gear Ratio = chainring / cog
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: With a 50T chainring and 17T cog on a 27" wheel:
          </p>
          <p className="mt-2 text-lg font-medium">Gear Ratio = 50 / 17 = 2.9412</p>
          <p className="mt-1 text-lg font-medium">Gear Inches = 2.9412 × 27 = 79.41 in</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Why Gear Inches Matter</h2>
        <p className="mb-4 text-lg leading-7">
          Gear inches provide a consistent way to compare how far the bike travels per pedal stroke, independent of chainring and cog sizes. This helps when choosing gearing for different terrains or riding styles. Whether you're cycling uphill or on flat roads, understanding gear inches helps ensure you're selecting a gear ratio that fits your needs.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical Examples of Bike Gear Usage</h2>
        <ol className="list-decimal pl-6 space-y-3 text-lg">
          <li>
            Commuting: You may prefer lower gear inches for easier starts and stops in city traffic. This helps maintain a smooth ride without excessive effort.
          </li>
          <li>
            Road Racing: Higher gear inches can help maintain higher speeds on flat roads, allowing cyclists to maximize their performance.
          </li>
          <li>
            Climbing: Lower gear ratios (smaller gear inches) make steep climbs easier, providing the necessary torque to conquer inclines.
          </li>
          <li>
            Touring: For long-distance rides loaded with gear, moderate gear inches strike a balance between comfort and efficiency.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs About Bike Gears</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Q: Can I use different wheel sizes?</h3>
            <p className="text-lg">A: Yes. If you change wheel diameter, the Gear Inches will change proportionally. Enter the wheel diameter in inches for accurate results.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: What if I use a non-integer number of teeth?</h3>
            <p className="text-lg">A: Teeth counts are integers. Use integer values for chainring and cog teeth for correct mechanical interpretation.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: How precise are the results?</h3>
            <p className="text-lg">A: The calculator shows gear ratio to four decimal places and gear inches to two decimal places — enough precision for practical gearing decisions.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Q: Can I share my results easily?</h3>
            <p className="text-lg">A: Yes, you can easily share your calculated gear ratio and inches. Just copy the values and explain what they mean to fellow cyclists.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips from a Cycling Coach</h2>
        <p className="mb-4 text-lg leading-7">
          Try several combinations to find a cadence and gear inches that match your riding style. Use the chart toggle to visualize how ratio relates to gear inches for quick comparison. Also, consider consulting with other cyclists to see what setups they prefer for various riding conditions.
        </p>
      </section>
    </article>
  );
}
