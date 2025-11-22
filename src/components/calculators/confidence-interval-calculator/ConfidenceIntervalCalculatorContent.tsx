import React from 'react';

export default function ConfidenceIntervalCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          Confidence Interval for a Population Mean
        </h1>
        <p className="mb-4 text-lg leading-7">
          A confidence interval gives a range of plausible values for a population parameter — in this case, the population mean — based on sample data. This calculator computes the two-sided confidence interval for a mean using the sample mean, sample standard deviation, sample size, and a chosen confidence level (e.g., 90%, 95%).
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding confidence intervals is crucial in statistics, as they provide insight into the uncertainty surrounding sample estimates. By calculating a confidence interval, researchers can express the reliability of their findings, helping to make informed decisions based on the data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          For large samples or when the population standard deviation is unknown but the sample size is reasonably large, the confidence interval for the mean is computed as:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            CI = x̄ ± z * (s / √n)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>x̄ = sample mean</li>
            <li>s = sample standard deviation</li>
            <li>n = sample size</li>
            <li>z = z-score corresponding to the desired confidence level (two-tailed)</li>
          </ul>
        </p>
        <p className="mb-4 text-lg leading-7">
          It is essential to note that the chosen confidence level reflects the degree of certainty you have regarding the estimates. Higher confidence levels (like 99%) will yield wider intervals, indicating a broader range of plausible values for the population mean.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a sample mean of 50, a sample standard deviation of 10, and a sample size of 100. For a 95% confidence level, the calculator computes the standard error s/√n = 10 / √100 = 1, the z-score ≈ 1.96, and a margin of error ≈ 1.96 * 1 = 1.96. The 95% confidence interval is 50 ± 1.96, or approximately (48.04, 51.96). This indicates that you can be 95% confident that the true population mean lies within this range.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">When to use this calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Use this tool when you want to estimate the plausible range of a population mean based on sample data and when the sample size is large enough for the normal approximation to be reasonable. For small samples (typically n &lt; 30) where the population standard deviation is unknown, consider using a t-distribution based interval instead.
        </p>
        <p className="mb-4 text-lg leading-7">
          Always ensure that the assumptions behind the confidence interval calculations are satisfied, such as the independence of observations and approximate normality. Violating these assumptions can lead to misleading results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">FAQs about Confidence Intervals</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What does the confidence level mean?</h3>
            <p className="text-lg leading-7">The confidence level (e.g., 95%) indicates the proportion of similarly constructed intervals that would contain the true population mean if you repeated the sampling process many times.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use this for proportions?</h3>
            <p className="text-lg leading-7">This calculator is specifically for means. For proportions, use a proportion (p̂) confidence interval calculator which uses a different standard error formula.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if my sample size is small?</h3>
            <p className="text-lg leading-7">For small samples and unknown population standard deviation, a t-distribution should be used instead of the normal z. This tool uses the z-approximation appropriate for larger samples.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How can I interpret my results effectively?</h3>
            <p className="text-lg leading-7">When interpreting results, consider the context of your data and the implications of your confidence intervals in decision-making. Wider intervals suggest more uncertainty, while narrower intervals offer more precision.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Tips for Using the Confidence Interval Calculator</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Round results appropriately for your application; the calculator provides high precision by default.</li>
          <li>Always check assumptions: independence of observations and approximate normality (or sufficiently large sample size).</li>
          <li>Consult a statistician if you're unsure about your sample data or the appropriate methods to apply.</li>
          <li>Utilize the calculator for multiple configurations to better understand variability and uncertainties inherent in your data.</li>
        </ul>
      </section>
    </article>
  );
}
