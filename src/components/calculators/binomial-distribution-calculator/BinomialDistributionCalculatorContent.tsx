import React from 'react';

export default function BinomialDistributionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Binomial Distribution Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to compute probabilities for a binomial distribution with parameters n (number of trials) and p (probability of success on each trial). The tool provides the probability mass P(X = k) and the cumulative probability P(X ≤ k), along with a chart of the probability mass function (PMF). This calculator is essential for statisticians, data scientists, and anyone looking to understand probability distributions better.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What is the Binomial Distribution?</h2>
        <p className="mb-4 text-lg leading-7">
          The binomial distribution models the number of successes in n independent trials where each trial has the same probability p of success. The probability of exactly k successes is given by:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">P(X = k) = C(n, k) · p^k · (1 - p)^(n - k)</code>
        </div>
        <p className="mb-4 text-lg leading-7">
          where C(n, k) = n! / (k!(n - k)!) is the binomial coefficient. This calculator computes P(X = k) and the cumulative probability P(X ≤ k) = sum_&#123;i=0&#125;^k P(X = i). Understanding the binomial distribution is crucial in various fields such as psychology, medicine, and quality control where binary outcomes are considered.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Use the Binomial Distribution Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Enter the number of trials (n). Must be a non-negative integer.</li>
          <li>Enter the probability of success (p) between 0 and 1.</li>
          <li>Enter the number of successes (k) you want the probability for (0 ≤ k ≤ n).</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          The calculator updates automatically when you change any input. Click "Show Charts" to visualize the PMF and "Download PDF" to save the inputs and results. Users can leverage this tool for homework, research projects, or practical applications in their jobs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Examples of Binomial Distribution</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700 mb-2">
            Example 1: n = 10, p = 0.5, k = 5
          </p>
          <p className="text-base text-gray-700">
            P(X = 5) = C(10, 5) * 0.5^5 * 0.5^5 = 0.24609375 (≈ 24.6094%)
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700 mb-2">
            Example 2: n = 20, p = 0.1, k = 2
          </p>
          <p className="text-base text-gray-700">
            Use the calculator to compute the probability of exactly 2 successes and the cumulative probability up to 2 successes. The insights gained from examples make it easier to visualize and apply the concepts of the binomial distribution.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Binomial Distribution</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Can n be large?</h3>
          <p className="mb-4 text-lg leading-7">
            You can use reasonably large values for n, but extremely large values may lead to numerical precision issues in JavaScript. For visualization, the chart is capped for performance reasons when n is very large. In practice, consider using approximations such as the normal distribution when n is large.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4">What if p is 0 or 1?</h3>
          <p className="mb-4 text-lg leading-7">
            If p = 0, then P(X = 0) = 1 and P(X = k) = 0 for k &gt; 0. If p = 1, then P(X = n) = 1 and P(X = k) = 0 for k &lt; n. These boundary conditions are important for understanding edge scenarios in binomial experiments.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4">Is the calculation exact?</h3>
          <p className="mb-4 text-lg leading-7">
            The calculation uses floating point arithmetic and a multiplicative method for combinations to reduce overflow and improve stability. For very large n, specialized libraries or arbitrary-precision arithmetic may be preferable. Knowing the limitations of floating-point calculations can enhance the reliability of your results.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4">What are the practical applications of binomial distribution?</h3>
          <p className="mb-4 text-lg leading-7">
            The binomial distribution is widely used in various fields. In medicine, it can help in determining the success rates of new treatments. In quality control, it is used to assess defect rates in manufacturing. Understanding its applications can lead to more informed decision-making in professional and academic settings.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">References</h2>
        <ul className="list-disc list-inside text-lg leading-7">
          <li><a href="https://en.wikipedia.org/wiki/Binomial_distribution" className="text-blue-500 hover:underline">Binomial distribution - Wikipedia</a></li>
          <li>Probability theory and combinatorics textbooks</li>
          <li><a href="https://www.statisticshowto.com/probability-distributions/binomial-distribution/" className="text-blue-500 hover:underline"> Statistics How To - Binomial Distribution</a></li>
        </ul>
      </section>
    </article>
  );
}
