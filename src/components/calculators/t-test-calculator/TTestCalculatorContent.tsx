import React from 'react';

export default function TTestCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">T-Test Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the T-Test Calculator to compare the means of two independent samples. This tool performs Welch's t-test (unequal variances) and returns the t statistic, degrees of freedom, and a two-tailed p-value. Enter each sample as a comma-separated list of numbers. Results update automatically as you edit inputs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to use a t-test</h2>
        <p className="mb-4 text-lg leading-7">
          A t-test is used when you want to compare the means of two groups to determine whether they are statistically different from each other. Welch's t-test is recommended when the two samples may have different variances and/or sizes. Researchers frequently apply this method in various fields such as psychology, medicine, and economics when analyzing quantitative data.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
          <p className="text-base text-gray-700">
            This calculator performs Welch's t-test by default. It computes sample means and variances, the t statistic, Welch-Satterthwaite degrees of freedom, and a two-tailed p-value. T-tests are crucial for hypothesis testing and help in drawing significant conclusions.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the calculation works</h2>
        <p className="mb-4 text-lg leading-7">Given two samples x and y:</p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7 text-gray-700">
          <li>Compute sample means: mean(x), mean(y)</li>
          <li>Compute sample variances (sample variance with n-1 denominator)</li>
          <li>t statistic: (mean(x) - mean(y)) / sqrt(var(x)/n_x + var(y)/n_y)</li>
          <li>Degrees of freedom (Welch-Satterthwaite):
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r text-sm font-mono">
              df = ( (s1^2 / n1 + s2^2 / n2)^2 ) / ( (s1^4 / (n1^2 * (n1 - 1))) + (s2^4 / (n2^2 * (n2 - 1))) )
            </div>
          </li>
          <li>Two-tailed p-value is computed from the Student's t distribution using the calculated t and df.</li>
        </ul>

        <p className="mb-4 text-lg leading-7">
          The calculator uses numerical integration to evaluate the cumulative distribution of the t statistic and returns the two-tailed p-value. Statistical software often uses similar methods, but this calculator offers an accessible online option.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of a t-test calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have two samples:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7 text-gray-700">
          <li>Sample 1: 10, 12, 14, 16, 18</li>
          <li>Sample 2: 15, 17, 19, 21, 23</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Paste each sample into the corresponding input field. The calculator will display means, variances, sample sizes, the t statistic, degrees of freedom, and the two-tailed p-value. Use the chart toggle to visualize the sample means. Understanding these results provides valuable insight into the comparative performance of the two samples.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Interpreting the results from the t-test</h2>
        <p className="mb-4 text-lg leading-7">
          A small p-value (typically &lt; 0.05) indicates evidence against the null hypothesis that the two population means are equal. A large p-value suggests insufficient evidence to reject the null hypothesis. Importantly, results should be contextualized within the scope of study.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <p className="text-base text-gray-700">
            Note: Statistical significance does not imply practical significance. Consider effect sizes and confidence intervals when making decisions. These additional metrics can help interpret the relevance of your results in practical terms.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about t-tests</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Can I use this for paired data?</h3>
            <p className="text-lg leading-7 text-gray-700">No — this calculator performs an independent two-sample t-test (Welch's). For paired samples, calculate the differences and perform a one-sample t-test on the differences.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if my samples have different sizes?</h3>
            <p className="text-lg leading-7 text-gray-700">Welch's t-test accounts for unequal variances and sample sizes; it is appropriate for samples with different n.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Why might the calculator return no result?</h3>
            <p className="text-lg leading-7 text-gray-700">Ensure each sample has at least two numeric values. Values must be comma-separated numbers (e.g., "1, 2, 3"). If the inputs are valid and you still encounter issues, refresh the page and try again.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use this calculator for one-sample tests?</h3>
            <p className="text-lg leading-7 text-gray-700">This calculator is designed for independent two-sample t-tests. For one-sample tests, consider the specifics of your data and statistical needs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References & further reading</h2>
        <ul className="list-disc list-inside text-lg leading-7 text-gray-700">
          <li>Welch, B.L. (1947). The generalisation of Student's problem when several different population variances are involved. Biometrika.</li>
          <li>Student. (1908). The probable error of a mean. Biometrika.</li>
          <li>Moore, D.S., & McCabe, G.P. (2006). Introduction to the Practice of Statistics. New York: W.H. Freeman.</li>
          <li>Field, A. (2013). Discovering Statistics Using IBM SPSS Statistics. Thousand Oaks, CA: Sage Publications.</li>
        </ul>
      </section>
    </article>
  );
}
