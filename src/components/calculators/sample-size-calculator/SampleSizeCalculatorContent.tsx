import React from 'react';

export default function SampleSizeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Sample Size Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This tool calculates the required sample size for surveys and statistical tests based on a desired confidence level, margin of error, and the total population size. The calculator uses a conservative estimate for the population proportion (p = 0.5), which yields the largest required sample size for a given confidence and precision. Understanding sample size is essential for effective data collection and ensuring your results are statistically valid.
        </p>
        <p className="mb-4 text-lg leading-7">
          Properly calculating your sample size minimizes errors, saves time and resources, and ensures that your conclusions reflect the population accurately. In the following sections, we will break down how this calculator works and when it is best applied.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Sample Size Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          We first compute the sample size for an infinite population using the standard formula for proportions:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            n0 = (Z² × p × (1 − p)) / E²
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where:
        </p>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>Z is the z-score corresponding to the confidence level (e.g., 95% → 1.96)</li>
          <li>p is the estimated proportion (we use p = 0.5 for maximum variability)</li>
          <li>E is the margin of error in decimal form (e.g., 5% → 0.05)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          For a finite population, we apply the finite population correction (FPC):
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            n = (N × n0) / (n0 + N − 1)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Sample Size Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you want a 95% confidence level and a 5% margin of error for a population of 10,000. Using the calculator you will get the sample size required to achieve that precision. The tool pre-fills these values so you can see an immediate result — change any input to recalculate automatically. By understanding how these parameters interact, you can fine-tune your results to meet your research needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Choosing the Right Confidence Level</h2>
        <p className="mb-4 text-lg leading-7">
          Common confidence levels are 90%, 95%, and 99%. Higher confidence levels require larger sample sizes. Choose 95% for a balance between precision and cost in most social science and market research contexts. Use 99% when you need stronger evidence and can afford a larger sample. It's vital to consider the implications of the confidence level on your results and funding.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Tips for Sample Size Calculation</h2>
        <ul className="list-disc ml-6 mb-4 text-lg">
          <li>If you have prior knowledge of the population proportion (p), you can roughly substitute it for 0.5 to reduce required sample size.</li>
          <li>For very small populations, the finite population correction can substantially reduce the required sample.</li>
          <li>Always round up the sample size to ensure your results meet the desired precision.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Sample Size</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Why use p = 0.5?</h3>
            <p className="text-lg leading-7">
              Using p = 0.5 is conservative because it maximizes the product p(1 − p). If you have a reliable estimate of the population proportion, using it can reduce the required sample size. This method ensures that your sample size remains valid across varying scenarios.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Does the calculator account for design effects?</h3>
            <p className="text-lg leading-7">
              No. This calculator computes the sample size for a simple random sample. If your survey uses cluster sampling or complex designs, you should multiply the result by a design effect (typically &gt; 1) to account for increased variance. Understanding the sampling method is crucial in determining the appropriate sample size.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Can I use very small margins of error (e.g., &lt;1%)?</h3>
            <p className="text-lg leading-7">
              Yes, but required sample sizes grow quickly as margin of error decreases. Ensure feasibility and budget before selecting extremely small margins. This agility in adjustment helps maintain research focus while being cost-effective.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">When might a larger sample size be necessary?</h3>
            <p className="text-lg leading-7">
              Larger sample sizes may be required when studying heterogeneous populations, or when the stakes of the research findings are particularly high. It's vital to assess the potential impact of your findings when determining sample size.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
