import React from 'react';

export default function StandardDeviationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Standard Deviation Calculator</h1>
      <meta name="description" content="Learn about standard deviation and how to calculate it with our comprehensive guide and examples." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Standard Deviation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Standard deviation is a statistical measure that indicates the amount of variation or dispersion in a set of values. In simpler terms, it quantifies how much the values in a data set deviate from the mean (average) value. A low standard deviation means that the values tend to be close to the mean, indicating consistent results, while a high standard deviation indicates that the values are spread over a wider range, suggesting more variability.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding standard deviation is crucial for various fields such as finance, research, and any discipline involved in data analysis. It helps in determining the risk involved in statistical data and the reliability of the mean.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Standard Deviation
        </h2>
        <p className="mb-4 text-lg leading-7">
          The calculation of standard deviation involves several straightforward steps: 
        </p>
        <ol className="mb-4 list-decimal list-inside text-lg">
          <li>Compute the mean (average) of the data set.</li>
          <li>Subtract the mean from each data point and square the result.</li>
          <li>Calculate the variance by taking the average of these squared differences.</li>
          <li>Finally, take the square root of the variance to obtain the standard deviation.</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          This formula can be written mathematically as:
        </p>
        <p className="mb-4 text-lg leading-7">
          σ = √(Σ(x - μ)² / N)
        </p>
        <p className="mb-4 text-lg leading-7">
          Where σ is the standard deviation, Σ represents the sum, x is each individual value, μ is the mean of the values, and N is the number of values in the data set. This method gives you a clear understanding of how spread out your data is relative to the mean.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Examples and FAQs
        </h2>
        <p className="mb-4 text-lg leading-7">
          Providing examples and frequently asked questions can help clarify the concept of standard deviation and its importance in statistical analysis. For example, if you have a set of test scores such as 80, 85, 90, and 95, the expected deviation may be quite low as they all cluster closely to the mean of 87.5.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Common Use Cases of Standard Deviation</h3>
        <p className="mb-4 text-lg leading-7">
          Standard deviation is widely used in various applications including finance to assess volatility, in quality control to ensure products meet specifications, and in academic settings to analyze scores and research data.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">FAQs</h3>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">What does a high standard deviation mean?</h4>
        <p className="mb-4 text-lg leading-7">
          A high standard deviation indicates that data points are spread out over a wider range of values, showing higher variability in the data set.
        </p>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Can standard deviation be negative?</h4>
        <p className="mb-4 text-lg leading-7">
          No, standard deviation can never be negative since it is derived from squared differences. Instead, it reflects how data varies around the mean.
        </p>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">How is standard deviation used in real life?</h4>
        <p className="mb-4 text-lg leading-7">
          In real life, standard deviation can be used by investors to assess stock volatility, by educators to evaluate test scores, and by organizations to gauge employee performance among other applications.
        </p>
      </section>
    </article>
  );
}
