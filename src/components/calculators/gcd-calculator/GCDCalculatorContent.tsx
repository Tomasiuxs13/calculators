import React from 'react';

export default function GCDCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is GCD? (Greatest Common Divisor)
        </h2>
        <p className="mb-4 text-lg leading-7">
          The Greatest Common Divisor (GCD) of two or more integers is the largest positive integer that divides each of the integers without leaving a remainder. It is a fundamental concept in number theory and has applications in various fields such as mathematics, computer science, and engineering.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our GCD calculator allows you to easily find the GCD of two numbers. Simply input the numbers, and the calculator will provide the GCD instantly.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate GCD
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the GCD of two numbers, you can use various methods, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Prime Factorization</li>
          <li>Euclidean Algorithm</li>
          <li>Using the GCD function in programming languages</li>
          <li>Iterative Methods</li>
          <li>Recursive Strategies</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          The Euclidean algorithm is one of the most efficient methods for finding the GCD. It is based on the principle that the GCD of two numbers also divides their difference. For example, if you need to find the GCD of 48 and 18:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            GCD(48, 18) = GCD(18, 48 % 18) = GCD(18, 12)
            {'\n'}GCD(18, 12) = GCD(12, 18 % 12) = GCD(12, 6)
            {'\n'}GCD(12, 6) = GCD(6, 12 % 6) = GCD(6, 0) = 6
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases of GCD
        </h2>
        <p className="mb-4 text-lg leading-7">
          Understanding the GCD is not just a classroom exercise; it has real-world applications. Some use cases of GCD include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Simplifying Fractions: Reducing fractions to their simplest form requires finding the GCD of the numerator and the denominator.</li>
          <li>Cryptography: Some encryption algorithms use GCD in their functions for key generation and data integrity checks.</li>
          <li>Computer Graphics: Algorithms in graphics often use GCD for rasterization techniques and image processing tasks.</li>
          <li>Scheduling Problems: GCD can be used in solving problems related to system scheduling and resource allocation in computing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions about GCD
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. What is the relationship between GCD and LCM?
        </h3>
        <p className="mb-4 text-lg leading-7">
          The relationship between Greatest Common Divisor (GCD) and Least Common Multiple (LCM) can be defined by the formula:
          <br />
          GCD(a, b) * LCM(a, b) = |a * b|
          This means that the product of GCD and LCM of two numbers equals the product of the numbers themselves.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Is GCD only applicable to integers?
        </h3>
        <p className="mb-4 text-lg leading-7">
          Yes, GCD is defined for non-negative integers. The concept does not typically apply to fractions or decimal numbers directly, though they can be converted to integers for computation.
        </p>
      </section>
    </article>
  );
}
