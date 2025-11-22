import React from 'react';

export default function AngularVelocityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Angular Velocity Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Angular Velocity Calculator to determine the angular velocity (how fast something is rotating) 
          from the angular displacement and elapsed time. Angular velocity is a crucial concept in physics and engineering, 
          commonly expressed in radians per second (rad/s) or revolutions per minute (RPM). Understanding how to calculate 
          angular velocity can help in various applications, including mechanics, astronomy, and rotational dynamics.
        </p>
        <p className="mb-4 text-lg leading-7">
          Knowing angular velocity allows us to analyze the motion of rotating objects accurately. For instance, 
          in vehicles, machines, or celestial bodies, understanding their rotational speeds allows engineers and scientists 
          to make informed decisions about design, performance, and safety.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Formula for Angular Velocity</h2>
        <p className="mb-4 text-lg leading-7">The basic relationship for angular velocity is:</p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ω = θ / t</code>
          <div className="mt-2 text-sm text-gray-600">
            where ω is angular velocity (rad/s), θ is angular displacement (radians), and t is time (seconds).
          </div>
        </div>
        
        <p className="mb-4 text-lg leading-7">To convert rad/s to RPM:</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <code className="text-base font-mono text-gray-900">RPM = (ω_rad_per_s × 60) / (2π)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Example of Angular Velocity Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose an object rotates through 6.28 radians (≈ 1 revolution) in 1 second. The angular velocity can be calculated as:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">ω = 6.28 / 1 = 6.28 rad/s ≈ 60 RPM</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This calculator applies the same formula automatically as you enter values, allowing for quick and accurate calculations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">How to Use the Angular Velocity Calculator</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter the angular displacement in radians (θ).</li>
          <li>Enter the elapsed time in seconds (t). Time must be greater than zero.</li>
          <li>Select your preferred output unit (rad/s or RPM). The result updates automatically.</li>
          <li>Use the chart toggle to visualize the relationship, and download a PDF summary if needed.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Angular Velocity</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What is angular displacement?</h3>
            <p className="text-base">
              Angular displacement (θ) measures the angle through which an object has rotated, typically in radians. 
              One full revolution equals 2π radians (~6.28318 rad).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use degrees for angular displacement?</h3>
            <p className="text-base">
              This calculator expects radians. If you have degrees, convert to radians first: 
              radians = degrees × (π / 180).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What happens if time is zero?</h3>
            <p className="text-base">
              Time must be greater than zero. If time is zero or not provided, the calculator will not 
              show a result to avoid division by zero.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why use RPM?</h3>
            <p className="text-base">
              RPM (revolutions per minute) is a convenient unit for many mechanical and engineering contexts 
              where rotations per minute are more intuitive than radians per second.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Use Cases of Angular Velocity Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Angular velocity calculation plays a vital role in various fields, such as robotics, aerospace, and 
          mechanical engineering. For instance, in robotics, understanding how fast motors rotate can optimize 
          movement and efficiency. In aerospace, spacecraft navigation relies heavily on accurate angular velocity 
          measurements to alter trajectories.
        </p>
        <p className="mb-4 text-lg leading-7">
          Moreover, in sports science, coaches analyze athletes’ movements through angular velocity to improve 
          performance and reduce injury risks. For example, a sprinter's technique can be enhanced by examining 
          the angular velocities of their limbs during a sprint.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Important Notes</h2>
        <p className="text-base">
          Results are displayed with up to six decimal places for precision. Use the PDF export feature to save 
          inputs and results for reporting or documentation. This can be particularly useful for students and 
          professionals who need to share findings or perform further analysis.
        </p>
      </section>
    </article>
  );
}
