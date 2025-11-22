import React from 'react';

export default function AccelerationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Acceleration Calculator</h1>
        <p className="mb-4">
          Compute acceleration using our easy-to-use acceleration calculator. Understand the concept of acceleration and its applications in various fields like physics and engineering.
        </p>
      </header>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Acceleration?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Acceleration is the rate of change of velocity of an object with respect to time. It is a vector quantity, meaning it has both magnitude and direction. In physics, acceleration is typically measured in meters per second squared (m/s²).
        </p>
        <p className="mb-4 text-lg leading-7">
          Our acceleration calculator allows you to compute acceleration based on initial and final velocity over a specified time period. This tool is useful for various applications in physics, engineering, and everyday scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Acceleration
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate acceleration, you can use the formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Acceleration = (Final Velocity - Initial Velocity) / Time
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This formula allows you to determine how quickly an object is speeding up or slowing down. Simply input your initial velocity, final velocity, and the time taken to change from one to the other.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Acceleration
        </h2>
        <p className="mb-4 text-lg leading-7">
          Acceleration has several practical applications across different fields. In physics, it helps in understanding motion, whether it's a car speeding up on a highway or a roller coaster descending swiftly. Engineers use acceleration to design safer vehicles, ensuring they can decelerate safely in an emergency. Furthermore, acceleration is vital in sports science, where athletes analyze their performance and improve their speed and agility.
        </p>
        <p className="mb-4 text-lg leading-7">
          Everyday scenarios involve acceleration too, such as when you push the gas pedal in your car or when an elevator moves between floors. Understanding how acceleration works can help in optimizing various processes in real life.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs about Acceleration
        </h2>
        <h3 className="text-2xl font-semibold mt-4 mb-2">What units is acceleration measured in?</h3>
        <p className="mb-4 text-lg leading-7">
          Acceleration is measured in meters per second squared (m/s²). This indicates how much the velocity of an object changes per second.
        </p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">Can acceleration be negative?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, negative acceleration, often referred to as deceleration, occurs when an object is slowing down. This indicates a decrease in velocity over time.
        </p>

        <h3 className="text-2xl font-semibold mt-4 mb-2">How does gravity affect acceleration?</h3>
        <p className="mb-4 text-lg leading-7">
          Gravity provides a constant acceleration to objects in free fall, typically measured as approximately 9.81 m/s² near the surface of the Earth. This means that an object's velocity increases by 9.81 meters per second every second while falling.
        </p>
      </section>
    </article>
  );
}
