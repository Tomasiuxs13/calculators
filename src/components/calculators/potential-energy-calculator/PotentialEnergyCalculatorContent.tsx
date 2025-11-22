import React from 'react';

export default function PotentialEnergyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
        Potential Energy Calculator
      </h1>
      <meta
        name="description"
        content="Calculate gravitational potential energy easily with our online tool. Understand the physics behind potential energy and learn how to use the calculator."
      />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Potential Energy?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Potential energy is the energy stored in an object due to its position in a force field, commonly gravitational. The formula to calculate gravitational potential energy is PE = mgh, where m is mass, g is the acceleration due to gravity, and h is the height above a reference point.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator allows you to compute the gravitational potential energy for any mass and height, providing quick results for physics problems, engineering applications, and educational purposes. Understanding potential energy is vital in both academic settings and practical applications, giving insights into how energy is conserved and transformed.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Potential Energy
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate potential energy, simply input the mass of the object in kilograms, the height in meters, and the acceleration due to gravity in meters per second squared. The calculator will automatically compute the potential energy using the formula mentioned above.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            PE = m × g × h
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For example, if you have a mass of 10 kg at a height of 5 m, the potential energy would be calculated as follows:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            PE = 10 kg × 9.8 m/s² × 5 m = 490 J
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Uses of the Potential Energy Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          The potential energy calculator can be used for various purposes. It is particularly helpful for students studying physics, as it allows for quick and accurate calculations. Engineers can use it to assess energy in mechanical systems. Additionally, it is useful in safety assessments in construction and environmental science to understand energy systems.
        </p>
        <p className="mb-4 text-lg leading-7">
          By providing clear and immediate results, this tool aids in grasping the fundamental principles of energy and motion, making it an indispensable resource for anyone involved in physical sciences.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about Potential Energy
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">1. What factors affect potential energy?</h3>
        <p className="mb-4 text-lg leading-7">
          Potential energy is primarily affected by the mass of the object, the height from which it is measured, and the gravitational force acting on it. Increasing any of these factors will result in higher potential energy.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. Can potential energy be negative?</h3>
        <p className="mb-4 text-lg leading-7">
          In the context of gravitational potential energy, it is typically defined relative to a reference point. If the reference point is above an object, the potential energy can appear negative. However, the importance lies in the difference in potential energy during motion.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. How is potential energy used in real life?</h3>
        <p className="mb-4 text-lg leading-7">
          Potential energy concepts are used in various applications, including hydroelectric power generation, where water stored at height is used to generate energy, and in roller coasters, where the height influences speed and safety.
        </p>
      </section>
    </article>
  );
}
