import React from 'react';

export default function CyclingSpeedCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Cycling Speed Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Cycling Speed Calculator estimates your bicycle speed given your cadence (pedal revolutions per minute), the gear ratio (chainring teeth divided by cog teeth), and the wheel circumference. This is useful for planning cadence targets, selecting gear combinations, and understanding how gearing affects speed.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you are a casual rider or a competitive cyclist, knowing how to calculate your speed can improve your cycling experience. By understanding the relationship between your pedaling efficiency and bike setup, you can optimize your rides and enhance performance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator converts pedaling cadence into wheel revolutions by multiplying cadence by the gear ratio. Wheel revolutions are then multiplied by wheel circumference (in meters) to get distance per minute. Finally, the result is converted to common speed units (m/s and km/h).
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Speed (km/h) = Cadence (rpm) × Gear Ratio × Wheel Circumference (m) × 0.06</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Alternatively, speed in meters per second is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Speed (m/s) = (Cadence × Gear Ratio × Wheel Circumference) / 60</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you pedal at 90 rpm with a gear ratio of 3.0 and your wheel circumference is 2.1 meters. The calculator computes:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Wheel revolutions per minute = 90 × 3 = 270 rpm</li>
          <li>Distance per minute = 270 × 2.1 = 567 m/min</li>
          <li>Speed (m/s) = 567 / 60 = 9.45 m/s</li>
          <li>Speed (km/h) = 9.45 × 3.6 = 34.02 km/h</li>
        </ol>
        <p className="text-lg">The calculator will display these results automatically as you enter values.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical tips for using the Cycling Speed Calculator</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wheel circumference varies by tire size and pressure — measure your wheel by rolling it one full revolution and measuring the distance to get a precise circumference.</li>
          <li>Gear ratio is calculated as chainring teeth divided by cog teeth. For example, a 50-tooth chainring with a 17-tooth cog gives 50 / 17 ≈ 2.94.</li>
          <li>Small changes in cadence or gear ratio can have a noticeable effect on speed, so use the calculator to explore different setups.</li>
          <li>For long-distance rides, keep track of your speed using the calculator to help pace your efforts efficiently.</li>
          <li>Consider using the calculator while testing different gear combinations to find what works best for varying terrains.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Cycling Speed</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Do I need to know my exact wheel circumference?</h3>
            <p className="mt-2">For rough estimates, typical wheel circumferences (e.g. 2.05–2.2 m) are fine. For precise speed calculations, measure your wheel circumference or consult tire size charts.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How do I calculate gear ratio?</h3>
            <p className="mt-2">Divide the number of teeth on the front chainring by the number of teeth on the rear cog. For example, 52/13 ≈ 4.0.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can this calculator account for rolling resistance or wind?</h3>
            <p className="mt-2">No — this tool provides a purely kinematic estimate (distance traveled per pedal revolution). Real-world speed is affected by many factors like aerodynamics, rolling resistance, gradient, and rider power.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">What are some advanced tips for accurate measurements?</h3>
            <p className="mt-2">To achieve accurate speed calculations, ensure your bike is properly maintained, tires are adequately inflated, and consider the environmental conditions during your rides.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
        <p className="mb-4 text-lg leading-7">Use this cycling speed calculator to quickly estimate how cadence and gearing translate to speed. It's a helpful tool for training, gear selection, and understanding the relationships between pedaling cadence, gear ratio, and wheel size. By utilizing this calculator, you can make informed decisions that enhance your cycling efficiency and enjoyment.</p>
      </section>
    </article>
  );
}
