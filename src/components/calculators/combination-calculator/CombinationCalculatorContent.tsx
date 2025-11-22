import React from 'react';

export default function CombinationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Combination Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Combination Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Combination calculation is a method used to determine the number of ways to choose a subset of items from a larger set, where the order of selection does not matter. This is commonly represented as nCr, where n is the total number of items, and r is the number of items to choose.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our combination calculator allows you to quickly compute the number of combinations for any values of n and r, making it a valuable tool for statistical analysis, probability calculations, and various applications in mathematics and science.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Combinations
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate combinations, you can use the formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            C(n, r) = n! / (r! * (n - r)!)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where n! (n factorial) is the product of all positive integers up to n. This formula helps you determine how many different ways you can choose r items from a total of n items without regard to the order of selection.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Combination Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          Combination calculations are used in various fields, particularly in statistics, computer science, and mathematics. Here are some common use cases:
        </p>
        <ul className="list-disc mb-4 pl-6">
          <li className="mb-2">Determining the odds in gambling games such as poker.</li>
          <li className="mb-2">Formulating lottery combinations.</li>
          <li className="mb-2">Analyzing genetic combinations in biology.</li>
          <li className="mb-2">Setting up committees or teams from a larger group.</li>
          <li className="mb-2">Calculating probabilities for various experimental designs.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions
        </h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">What is the difference between permutations and combinations?</h3>
          <p className="text-lg leading-7">
            The primary difference is that permutations take into account the order of selection, whereas combinations do not. In other words, 1-2 is different from 2-1 in permutations, but they are considered the same in combinations.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">Can the combination formula be used for negative values?</h3>
          <p className="text-lg leading-7">
            No, the combination formula is only valid for non-negative integers where n should be greater than or equal to r.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">Is there an online tool to calculate combinations?</h3>
          <p className="text-lg leading-7">
            Yes, many online tools and calculators are available, including our own combination calculator, which simplifies the computation process for users.
          </p>
        </div>
      </section>

      <footer className="mt-8">
        <p className="text-lg leading-7">
          With this understanding of combination calculations, you can confidently explore various applications in statistics and beyond. Whether you're studying for an exam, working on a project, or simply curious about mathematics, mastering combination calculations will be incredibly beneficial.
        </p>
      </footer>
    </article>
  );
}
