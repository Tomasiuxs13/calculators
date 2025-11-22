import React from 'react';

export default function WaveSpeedCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Wave Speed Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Wave Speed Calculator to determine the speed of a wave given its wavelength and frequency. The calculator updates automatically as you change inputs and supports PDF export and visual charts to compare parameters. Whether you're a student, teacher, or just curious about the science of waves, this tool can help you understand wave behavior in various contexts.
        </p>
        <p className="mb-4 text-lg leading-7">
          Wave speed plays a crucial role in many scientific and engineering applications, from designing musical instruments to understanding ocean waves. By using this calculator, you can easily derive critical information about wave characteristics and their relationships.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Understanding Wave Speed</h2>
        <p className="mb-4 text-lg leading-7">
          The relationship between wave speed (v), frequency (f), and wavelength (λ) is given by the fundamental wave equation:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">v = f × λ</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>v is the wave speed in meters per second (m/s)</li>
          <li>f is the frequency in Hertz (Hz)</li>
          <li>λ (lambda) is the wavelength in meters (m)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          This equation elegantly represents how these three variables interact. When you change one of them, the others must adjust to maintain the relationship defined by the equation. This is a fundamental principle in the study of waves in physics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Wave Speed Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose a sound wave has a wavelength of 0.343 m and a frequency of 1000 Hz. The wave speed is:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            v = f × λ = 1000 Hz × 0.343 m = 343 m/s
          </p>
        </div>
        <p className="mt-4 text-lg leading-7">
          The default inputs in the calculator demonstrate this specific example and will show the result immediately on load. Understanding how to manipulate the inputs will enhance your grasp of wave behaviors.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips & Notes for Using the Wave Speed Calculator</h2>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>If either input is zero, the resulting speed will be zero.</li>
          <li>Ensure units are consistent — use wavelength in meters and frequency in Hz to produce speed in m/s.</li>
          <li>Utilize the chart toggle to visualize how wavelength, frequency, and resulting speed compare across different conditions.</li>
          <li>In laboratory settings or practical applications, ensuring accurate measurements of the inputs is essential for precise calculations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Wave Speed Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is useful in various fields, including:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li><strong>Education:</strong> Students can learn about waves and sound easily through practical examples.</li>
          <li><strong>Engineering:</strong> Engineers can quickly evaluate wave speeds in materials for design purposes.</li>
          <li><strong>Aquatic Studies:</strong> Oceanographers can use similar calculations to study wave behavior in ocean currents.</li>
          <li><strong>Musical Acoustics:</strong> Musicians and sound engineers can analyze sound wave properties for instrument tuning.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Wave Speed</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Can I use other units?</h3>
            <p className="text-lg leading-7">
              This calculator expects wavelength in meters and frequency in Hertz. If you have values in other units, convert them to meters and Hertz first to ensure accurate results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Why does the calculator update automatically?</h3>
            <p className="text-lg leading-7">
              The calculator uses reactive inputs and performs calculations on every change so you can see immediate results without clicking a button. This feature enhances user experience and interactivity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How accurate is the result?</h3>
            <p className="text-lg leading-7">
              Results are computed using JavaScript floating-point arithmetic and displayed up to six decimal places. For most practical uses, this level of precision is sufficient; for high-precision needs, consider specialized tools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What is the importance of wave speed in physics?</h3>
            <p className="text-lg leading-7">
              Wave speed is critical in physics as it influences how energy is transmitted through different media. Understanding wave speed allows scientists and engineers to analyze and predict wave behaviors in various environments, from sound waves in air to seismic waves in the earth.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
