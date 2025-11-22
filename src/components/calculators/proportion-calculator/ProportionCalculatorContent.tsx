import React from 'react';

const ProportionCalculatorContent = () => {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Proportion Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Easily calculate proportions with our user-friendly Proportion Calculator. 
          Perfect for students, educators, and professionals in fields like math, science, and finance.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is a Proportion?
        </h2>
        <p className="mb-4 text-lg leading-7">
          A proportion is an equation that states that two ratios are equal. 
          It is a mathematical statement that shows the relationship between two quantities. 
          Proportions are often used in various fields such as mathematics, science, 
          and finance to solve problems involving ratios. Understanding proportions is fundamental 
          for various applications including cooking, medication dosages, and financial analysis.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our proportion calculator allows you to solve for a missing value in a proportion, 
          making it easy to find the unknown quantity when you know the other values. 
          Whether you're working on homework or tackling real-world problems, this tool simplifies the process.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Use the Proportion Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          To use the proportion calculator, simply enter the values for A, B, and C. 
          The calculator will automatically compute the missing value in the proportion using the formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Result = (Value A × Value C) / Value B
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For example, if you have the values A = 3, B = 4, and C = 6, 
          the calculator will compute the missing value using the formula above.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Practical Use Cases for Proportions
        </h2>
        <p className="mb-4 text-lg leading-7">
          Proportions have a variety of applications in daily life. 
          Here are a few practical examples:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Cooking: Adjusting ingredient quantities based on serving sizes.</li>
          <li>Medicine: Calculating correct dosages based on patient weight.</li>
          <li>Finance: Determining interest rates and comparing costs.</li>
          <li>Scale Models: Creating accurate models based on real-world dimensions.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="mb-4 text-lg leading-7">
          Here are some common questions related to proportions:
        </p>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">1. How do I find the missing value in a proportion?</h3>
          <p className="mb-4 text-lg">You can find the missing value by rearranging the proportion 
          using the formula Result = (Value A × Value C) / Value B, as demonstrated earlier.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">2. What is the difference between a ratio and a proportion?</h3>
          <p className="mb-4 text-lg">A ratio compares two quantities, while a proportion states that two ratios are equal.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">3. Can the proportion calculator handle negative values?</h3>
          <p className="mb-4 text-lg">Yes, the proportion calculator can handle negative values as well as positive ones.</p>
        </div>
      </section>

      <footer>
        <p className="mt-8 text-lg leading-7">
          Understanding and utilizing proportions can greatly enhance your problem-solving skills in numerous fields. 
          When combined with our Proportion Calculator, you have a powerful ally in mastering mathematical concepts.
        </p>
      </footer>
    </article>
  );
}

export default ProportionCalculatorContent;
