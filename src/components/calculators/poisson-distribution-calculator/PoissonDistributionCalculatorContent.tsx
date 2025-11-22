import React from 'react';

export default function PoissonDistributionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Poisson Distribution Calculator</h1>
        <p className="mb-4 text-lg">
          This Poisson distribution calculator computes the probability of observing a given number of events k in a fixed interval when events occur with a known average rate (lambda). Use it to evaluate rare event probabilities, queueing problems, and many discrete stochastic processes.
        </p>
        <p className="mb-4 text-lg">
          Understanding the Poisson distribution is essential for statisticians, researchers, and professionals in various fields such as telecommunications, finance, and natural sciences, where the modeling of random events is crucial.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">What is the Poisson Distribution?</h2>
        <p className="mb-4 text-lg">
          The Poisson distribution models the probability of a number of events occurring in a fixed interval when events happen independently and at a constant average rate. It is parameterized by lambda (λ), the expected number of events in the interval.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            P(X = k) = (e^-λ * λ^k) / k!
          </code>
        </div>

        <p className="mb-4 text-lg">
          The calculator supports three common probability queries:
          <ul className="list-disc list-inside mt-2">
            <li>P(X = k): The probability of exactly k events (PMF).</li>
            <li>P(X ≤ k): The cumulative probability of at most k events (CDF).</li>
            <li>P(X ≥ k): The probability of at least k events (upper tail).</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg">
          Suppose on average 3 emails arrive per hour (λ = 3). What is the probability exactly 2 emails arrive in one hour?
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Using the formula:</p>
          <code className="text-base font-mono text-gray-900 block my-2">P(X = 2) = e^-3 * 3^2 / 2! = e^-3 * 9 / 2 = 0.2240418077</code>
          <p className="text-base text-gray-700 mt-2">So about 22.40% chance of exactly 2 emails arriving.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Use the Poisson Distribution Calculator</h2>
        <ol className="list-decimal list-inside text-lg">
          <li>Enter the average rate λ (lambda). Must be &gt;= 0.</li>
          <li>Enter the number of events k you want the probability for (k must be an integer &gt;= 0).</li>
          <li>Select the probability type: P(X = k), P(X ≤ k), or P(X ≥ k).</li>
          <li>The result updates automatically. Toggle charts to visualize the PMF across k values.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases of the Poisson Distribution</h2>
        <p className="mb-4 text-lg">
          The Poisson distribution has many applications in real-world scenarios, including:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Modeling the number of phone calls received at a call center per hour.</li>
          <li>Predicting the number of decay events per unit time from a radioactive source.</li>
          <li>Counting the number of customers arriving at a store within a given timeframe.</li>
          <li>Calculating the probability of errors occurring in a process or manufacturing step.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQ about Poisson Distribution</h2>

        <div>
          <h3 className="text-xl font-medium text-gray-900">Can λ (lambda) be non-integer?</h3>
          <p className="mb-4 text-lg">Yes. Lambda (λ) is the average rate and can be any non-negative real number.</p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900">What if k is large?</h3>
          <p className="mb-4 text-lg">The calculator uses stable iterative methods to compute probabilities. For very large k, probabilities may underflow to values near zero; in such cases, consider using log-probabilities or approximations (e.g., normal approximation) if appropriate.</p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900">When is the Poisson model appropriate?</h3>
          <p className="mb-4 text-lg">Use the Poisson model when events occur independently, with a constant average rate, and when two events cannot occur at exactly the same instant (or are rare). Typical applications include counts of arrivals, defects, or occurrences in fixed intervals of time or space.</p>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900">What are the limitations of the Poisson distribution?</h3>
          <p className="mb-4 text-lg">While the Poisson distribution is useful, it assumes that events are rare and independent. If events are not independent, or if the average rate changes significantly over time, this might not be the right model. For more complex scenarios, consider a more advanced statistical model.</p>
        </div>
      </section>
    </article>
  );
}
