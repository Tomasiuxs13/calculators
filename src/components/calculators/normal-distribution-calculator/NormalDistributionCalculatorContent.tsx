import React from 'react';

export default function NormalDistributionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Normal Distribution Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the probability density (PDF) and cumulative probability (CDF) for a normal (Gaussian) distribution given the mean (μ), 
          standard deviation (σ), and a value x. Use it to determine how likely a value is under a Gaussian model, compute z-scores, and obtain cumulative probabilities. 
          With this tool, statistical analysis becomes straightforward and accessible.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding normal distribution is crucial for many applications, from academic studies to professional fields. With our calculator, you can easily analyze 
          how data fits into a normal distribution, interpret results accurately and gain insights from statistical data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Normal Distribution</h2>
        <p className="mb-4 text-lg leading-7">
          The normal distribution is defined by its mean μ and standard deviation σ. The probability density function (PDF) at a point x is represented mathematically as:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">f(x) = 1 / (σ √(2π)) × e<sup>-0.5 × ((x-μ)/σ)<sup>2</sup></sup></code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The cumulative distribution function (CDF) allows you to find out the probability that a random variable X drawn from the distribution is less than or equal to x:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">F(x) = P(X ≤ x) = 0.5 × [1 + erf((x - μ) / (σ √2))]</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator computes the z-score, z = (x - μ) / σ, and subsequently evaluates both the PDF and CDF. Results update dynamically as you adjust input parameters, offering instant insight into your analysis.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Normal Distribution Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose μ = 0, σ = 1 (standard normal distribution) and you are interested in x = 1. The calculated z-score is 1. According to the calculator, the 
          probability density function (PDF) value at x = 1 is approximately 0.24197, while the cumulative distribution function (CDF) value, P(X ≤ 1), is around 
          0.84134 (which translates to 84.134%). With this example, you can input various parameters to observe and explore results for different values.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to Use the Normal Distribution Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Utilize this calculator for various applications including statistical inference, hypothesis testing, and computing p-values. This tool is particularly suited for 
          scenarios where the normal distribution model applies, such as measurement errors, standardized test scores, and many natural phenomena. By understanding 
          where and how to implement normal distribution, you can refine your analytical techniques.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs on Normal Distribution</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What is the difference between PDF and CDF?</h3>
            <p className="text-base">The PDF (probability density function) provides the density at a specific point x; while it does not represent a probability, it indicates how likely 
            that point is relative to the distribution. The CDF, on the other hand, gives the probability that the random variable is less than or equal to x.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can σ be zero or negative?</h3>
            <p className="text-base">No, the standard deviation σ must be a positive value. The calculator has built-in validation to ensure that inputs for σ are non-negative.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How precise are the results?</h3>
            <p className="text-base">The results are computed using a precise numerical method, employing a robust erf approximation for the CDF, along with standard formulas for PDF. 
            The displayed values are highly accurate but always subject to the limitations of floating-point calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I download results?</h3>
            <p className="text-base">Yes, you can export your inputs and computed values as a PDF report using the "Download PDF" button located on the calculator interface.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What is the significance of normal distribution in statistics?</h3>
            <p className="text-base">Normal distribution is foundational in statistics. Many statistical tests and methods, including those for inferential statistics, assume that 
            the data is normally distributed. Understanding and utilizing this distribution helps in making informed predictions and decisions based on data.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Notes on Normal Distribution</h2>
        <p className="mb-4 text-lg leading-7">
          The chart visualizes the distribution's PDF across ±4σ around the mean. You can toggle the chart to inspect the density curve and see how your specific x value falls 
          relative to the mean. Visualizing data distributions can provide additional context that is critical to interpreting statistical results.
        </p>
      </section>
    </article>
  );
}
