import React from 'react';

export default function TennisServeSpeedCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Tennis Serve Speed Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to quickly determine the speed of a tennis serve based on the distance the ball traveled (in meters) and the time it took (in seconds). The calculator computes the base speed in meters per second (m/s) and can display the result in either m/s or km/h. Results update automatically as you change inputs. Understanding your serve speed is critical for improving your game, whether you're a beginner or a seasoned player looking to enhance your competitive edge.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The basic formula used is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Speed (m/s) = Distance (m) / Time (s)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          To convert meters per second to kilometers per hour, the calculator multiplies by 3.6 (because 1 m/s = 3.6 km/h). This dual format allows players to fully understand their serve performance in the most usable units, aiding in tracking improvements over time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Real-world Applications of the Tennis Serve Speed Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding your serve speed can help you:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7 text-gray-700">
          <li>Analyze performance against competitors.</li>
          <li>Determine how effective your serves are during practice.</li>
          <li>Set goals for future training sessions based on your current serve speed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a server hits the ball and it travels 18 meters in 0.5 seconds. The base speed is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Speed (m/s) = 18 / 0.5 = 36 m/s
          </p>
          <p className="text-base text-gray-700 mt-2">
            Converted to km/h: 36 × 3.6 = 129.6 km/h
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for accurate measurement</h2>
        <ul className="list-disc list-inside mb-4 text-lg leading-7 text-gray-700">
          <li>Measure the distance between the point of contact and the first bounce (or landing) as straight-line distance in meters.</li>
          <li>Use precision timing equipment (high-speed camera or radar gun) for the most accurate time measurement.</li>
          <li>Account for any reaction time or measurement delay when using manual timing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Tennis Serve Speed</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Can I use different units for distance or time?</h3>
            <p className="text-lg text-gray-700">This tool expects distance in meters and time in seconds. If you have different units, convert them to meters and seconds before entering. This ensures that calculations are consistent and accurate.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Why is the base speed shown in m/s?</h3>
            <p className="text-lg text-gray-700">Meters per second is the standard SI unit for speed and provides a precise base for conversions to other units like km/h. This allows athletes and coaches to have a clear understanding of performance metrics.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">How accurate is this calculation?</h3>
            <p className="text-lg text-gray-700">The calculation is mathematically accurate given the distance and time inputs. Real-world accuracy, however, depends on how precisely distance and time were measured. Ensure consistent conditions for the best results.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
