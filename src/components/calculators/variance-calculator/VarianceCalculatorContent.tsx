import React from 'react';

export default function VarianceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Variance Calculator</h1>
        <meta
          name="description"
          content="Understand variance in statistics, learn to calculate it, see examples, and explore its applications."
        />
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Variance?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Variance is a statistical measurement that describes the spread of numbers in a dataset. It indicates how much the individual numbers in a dataset differ from the mean (average) value. A high variance means that the numbers are spread out widely from the mean, while a low variance indicates that they are clustered closely around the mean. Understanding variance is essential in various fields, including finance, research, and quality control.
        </p>
        <p className="mb-4 text-lg leading-7">
          The formula for variance is:
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
            <code className="text-base font-mono text-gray-900">
              Variance = (Σ (xi - μ)²) / N
            </code>
          </div>
          where xi represents each value in the dataset, μ is the mean of the dataset, and N is the number of values. Variance helps identify the degree of risk involved in a dataset, which is particularly relevant in finance when assessing volatility.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Variance
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate variance, follow these steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Calculate the mean of the dataset.</li>
          <li>Subtract the mean from each number to find the deviation of each number.</li>
          <li>Square each deviation.</li>
          <li>Calculate the average of these squared deviations. This is the variance.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Example of Variance Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          For example, consider the dataset: 10, 20, 30, 40, 50. The mean is 30, and the squared deviations are 400, 100, 0, 100, and 400. The variance is (400 + 100 + 0 + 100 + 400) / 5 = 200. This example illustrates how to apply the variance formula in a simple dataset.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases of Variance
        </h2>
        <p className="mb-4 text-lg leading-7">
          Variance is used in various fields for different purposes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li><strong>Finance:</strong> Investors use variance to assess the risk of investment portfolios.</li>
          <li><strong>Quality Control:</strong> Companies apply variance to monitor product consistency.</li>
          <li><strong>Research:</strong> Researchers analyze variance to evaluate data reliability and trends.</li>
          <li><strong>Sports:</strong> Performance metrics often employ variance to gauge player stability and predict outcomes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs About Variance
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. What is the difference between variance and standard deviation?</h3>
        <p className="mb-4 text-lg leading-7">
          While variance measures the average degree to which each number differs from the mean, standard deviation is the square root of the variance and provides a measure of spread in the same units as the data.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Can variance be negative?</h3>
        <p className="mb-4 text-lg leading-7">
          No, variance cannot be negative. A variance of zero indicates that all numbers in the dataset are the same.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. How can I visualize variance?</h3>
        <p className="mb-4 text-lg leading-7">
          Variance can be visualized using graphs such as box plots or scatter plots, showing the distribution and spread of data points.
        </p>
      </section>
    </article>
  );
}
