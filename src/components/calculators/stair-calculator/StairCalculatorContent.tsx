import React from 'react';

export default function StairCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Stair Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use our Stair Calculator for precise calculations to ensure a safe and comfortable staircase design that meets building codes.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Stair Calculator — Overview</h2>
        <p className="mb-4 text-lg leading-7">
          The Stair Calculator helps architects, builders, and homeowners determine the appropriate number of risers (steps) and the adjusted rise per step for a staircase. You provide the total vertical rise (floor-to-floor height) in meters and the preferred run and rise per step in centimeters. The tool calculates the number of steps required and adjusts the rise per step so that the total rise is evenly distributed.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator uses the ergonomic approach of rounding the number of risers up so that the total rise is fully covered, then computes an adjusted rise value to keep steps uniform. It also computes the total horizontal run of the staircase based on the chosen run per step, ensuring that the design meets not just aesthetic but also functional design standards.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How it Works</h2>
        <p className="mb-4 text-lg leading-7">
          Steps to calculate your staircase dimensions:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Convert the desired rise per step from centimeters to meters.</li>
          <li>Divide the total rise by the rise per step to get the raw number of steps.</li>
          <li>Round the number of steps up (Math.ceil) to ensure the total rise is covered.</li>
          <li>Compute the adjusted rise per step by dividing the total rise by the final step count.</li>
          <li>Compute the total run by multiplying the number of steps by the run per step.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Adjusted Rise (m) = Total Rise (m) / Number of Steps</code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a total rise of 3.0 m, a desired run per step of 30 cm, and a desired rise per step of 18 cm.
        </p>
        <p className="mb-4 text-lg leading-7">
          Convert the desired rise to meters: 18 cm = 0.18 m. Raw number of steps = 3.0 / 0.18 ≈ 16.67. Rounding up gives 17 steps. Adjusted rise = 3.0 / 17 ≈ 0.1765 m → 17.65 cm. Total run = 17 × 30 cm = 510 cm = 5.10 m.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong>Tip:</strong> Most building codes and comfortable stair design recommend a rise between 14 cm and 20 cm and a run (tread depth) typically between 25 cm and 30 cm. Always check local building codes before finalizing designs to ensure safety and compliance.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>

        <h3 className="text-xl font-semibold mt-4">What if the adjusted rise is too high or too low?</h3>
        <p className="mb-4 text-lg leading-7">
          If the adjusted rise falls outside your comfort or code range, adjust the desired rise per step or the run per step and re-run the calculation. Increasing the number of steps (smaller rise) or changing tread depth can improve comfort and compliance. This ensures that the overall stair design adheres to safety standards.
        </p>

        <h3 className="text-xl font-semibold mt-4">Should I always round up the number of steps?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes. Rounding up ensures the entire vertical distance is covered without shortfall. After rounding up, the calculator computes an adjusted uniform rise so that the total rise is exact and comfortable for use.
        </p>

        <h3 className="text-xl font-semibold mt-4">Does this include landings or headroom checks?</h3>
        <p className="mb-4 text-lg leading-7">
          No. This calculator focuses on riser and run calculations only. For full stair design, including landings, headroom, and handrails, consult building codes and a licensed architect or engineer to ensure compliance and user safety.
        </p>

        <h3 className="text-xl font-semibold mt-4">What is the best height and run for stairs?</h3>
        <p className="mb-4 text-lg leading-7">
          The ideal stairs should have a rise typically between 14 cm to 20 cm, and a run (tread depth) of approximately 25 cm to 30 cm. These measurements contribute to a comfortable and safe climbing experience.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Further Reading</h2>
        <p className="mb-4 text-lg leading-7">
          For comfortable stair design, consider the formula by Blondel (2 × rise + run ≈ 63 cm) as a quick ergonomic check and always validate against local codes. Additionally, explore resources on best practices for stair design.
        </p>
      </section>
    </article>
  );
}
