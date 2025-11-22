import React from 'react';

export default function PermutationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Permutation Calculator
        </h1>
        <p className="mb-4 text-lg leading-7">
          Discover how to calculate permutations and make use of our handy Permutation Calculator for your statistical analysis.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Permutation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          A permutation is an arrangement of objects in a specific order. The number of ways to arrange a set of items is calculated using permutations. This is particularly useful in statistics and probability when determining the number of possible outcomes.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our permutation calculator allows you to easily compute the number of permutations (nPr) for any given set of items. Simply input the total number of items (n) and the number of items to arrange (r) to get the result.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Permutations
        </h2>
        <p className="mb-4 text-lg leading-7">
          The formula for calculating permutations is:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            P(n, r) = n! / (n - r)!
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where n is the total number of items and r is the number of items to arrange. For example, if you have 10 items and want to arrange 3 of them, you would calculate:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">P(10, 3) = 10! / (10 - 3)! = 720</strong>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Permutation Calculations
        </h2>
        <p className="mb-4 text-lg leading-7">
          Permutations are used in various fields such as:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Statistics: To determine the possible outcomes of experiments.</li>
          <li>Cryptography: For generating secure keys and codes.</li>
          <li>Computer Science: In algorithms and complexity analysis.</li>
          <li>Game Theory: To analyze different strategies and outcomes.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Whether you're analyzing data for a research project or designing a game, understanding permutations is essential.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="mb-4 text-lg leading-7">
          <h3 className="text-2xl font-bold text-gray-900">1. What is the difference between permutations and combinations?</h3>
          <p>While permutations consider the order of arrangement, combinations focus solely on the selection of items without regard to order.</p>
        </div>
        <div className="mb-4 text-lg leading-7">
          <h3 className="text-2xl font-bold text-gray-900">2. Can I use the permutation calculator for large numbers?</h3>
          <p>Yes, our calculator can handle large values of n and r efficiently.</p>
        </div>
        <div className="mb-4 text-lg leading-7">
          <h3 className="text-2xl font-bold text-gray-900">3. How does factorial impact permutation calculations?</h3>
          <p>Factorials grow rapidly, which affects the total number of permutations possible as n increases.</p>
        </div>
      </section>
    </article>
  );
}
