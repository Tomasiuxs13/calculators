import React from 'react';

export default function ProjectileMotionCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>What is Projectile Motion?</h2>
        <p className='mb-4 text-lg leading-7'>
          Projectile motion describes the motion of an object launched into the air and subject only to gravity (assuming air resistance is negligible). The path is a parabola determined by the initial speed, the launch angle, and the starting height.
        </p>
        <p className='mb-4 text-lg leading-7'>
          This calculator computes common projectile parameters: the horizontal range, the maximum height reached, and the total time the projectile is in the air, given an initial velocity, launch angle, and initial height.
        </p>
        <p className='mb-4 text-lg leading-7'>
          Understanding projectile motion is crucial in various fields, including sports, engineering, and space exploration. By studying this phenomenon, we can better predict the trajectories of objects, optimizing performance and safety.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Key Equations in Projectile Motion</h2>
        <p className='mb-4 text-lg leading-7'>
          Motion can be decomposed into horizontal and vertical components. With initial speed v0 and angle θ (in degrees):
        </p>
        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900 block'>
            v_x = v0 cos(θ)
          </code>
          <code className='text-base font-mono text-gray-900 block'>
            v_y = v0 sin(θ)
          </code>
          <code className='text-base font-mono text-gray-900 block mt-2'>
            y(t) = h0 + v_y t - 0.5 g t^2
          </code>
        </div>
        <p className='mb-4 text-lg leading-7'>
          To find the time of flight we solve y(t) = 0 for t (positive root):
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <code className='text-base font-mono text-gray-900 block'>
            t = (v_y + sqrt(v_y^2 + 2 g h0)) / g
          </code>
          <p className='mt-3 text-sm text-gray-700'>
            Then range = v_x * t and max height = h0 + v_y^2 / (2 g).
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Example in Projectile Motion Calculation</h2>
        <p className='mb-4 text-lg leading-7'>
          Using the default inputs v0 = 20 m/s, θ = 45°, and h0 = 0 m, the calculator computes:
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li className='text-lg'>v_x = 20 cos(45°) ≈ 14.142 m/s</li>
          <li className='text-lg'>v_y = 20 sin(45°) ≈ 14.142 m/s</li>
          <li className='text-lg'>Time of flight ≈ (v_y + sqrt(v_y^2)) / g ≈ 2.88 s</li>
          <li className='text-lg'>Range ≈ v_x * t ≈ 40.6 m</li>
          <li className='text-lg'>Max height ≈ v_y^2 / (2 g) ≈ 10.2 m</li>
        </ul>
        <p className='mb-4 text-lg leading-7'>
          This example illustrates the basic calculations involved in understanding projectile motion. Adjusting the parameters allows for exploration of different scenarios.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>How to Use the Projectile Motion Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          Enter the initial velocity in meters per second, the launch angle in degrees, and the initial height in meters. The calculator updates results automatically as you type. Use the chart toggle to visualize comparisons between range, height, and time, and download a PDF summary for record keeping.
        </p>
        <p className='mb-4 text-lg leading-7'>
          This tool can be especially useful for students, educators, or anyone needing to solve physical scenarios involving projectile motion. The visual and numerical results help in making informed decisions in practical applications.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Frequently Asked Questions About Projectile Motion</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Does this consider air resistance?</h3>
            <p className='text-lg text-gray-700 mt-1'>No. This calculator assumes a vacuum (no air resistance). Real projectiles will be affected by drag which reduces range and alters trajectory.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>Can I use other units?</h3>
            <p className='text-lg text-gray-700 mt-1'>Inputs are expected in SI units: meters, seconds, and meters per second. Convert other units to SI before using the calculator.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>What if the initial height is negative?</h3>
            <p className='text-lg text-gray-700 mt-1'>Negative initial height is allowed, but ensure it is physically meaningful for your scenario. If solutions are not real (e.g., discriminant negative), the calculator will not show results.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-900'>What other factors can I consider?</h3>
            <p className='text-lg text-gray-700 mt-1'>You may also consider factors like air density, wind speed, and object's shape which can impact the motion in real-world scenarios beyond this simple calculator's assumptions.</p>
          </div>
        </div>
      </section>

      <p className='text-sm text-gray-500 mt-6'>
        Tip: For small angles, the range is approximately v0^2 sin(2θ) / g when h0 = 0. Our calculator uses the full quadratic solution so it also works with nonzero initial heights.
      </p>
    </article>
  );
}
