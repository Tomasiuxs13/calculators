import React from 'react';

export default function OutlierCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta
        name="description"
        content="Explore our Outlier Calculator based on IQR to identify statistical outliers effectively. Discover how to analyze data with this robust method."
      />
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Outlier Detection (IQR)?</h2>
        <p className="mb-4 text-lg leading-7">
          Outlier detection using the Interquartile Range (IQR) is a robust statistical method to identify observations that fall far from the central tendency of your data. The IQR is the range between the first quartile (Q1) and third quartile (Q3). Points that lie below Q1 - 1.5×IQR or above Q3 + 1.5×IQR are typically considered outliers.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator parses a comma-separated list of numbers, computes Q1, median (Q2), Q3, IQR, and both lower and upper fences, then lists any detected outliers. It's useful for exploratory data analysis, quality control, and preprocessing before modeling.
        </p>
        <p className="mb-4 text-lg leading-7">
          By using this IQR method, you can efficiently handle large datasets and ensure that your analysis is not skewed by extreme values. This is particularly important in industries such as finance, healthcare, and quality assurance, where decision-making relies heavily on accurate data interpretation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How Outlier Detection Works</h2>
        <p className="mb-4 text-lg leading-7">
          Steps performed by the calculator:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Parse and sort the numeric input.</li>
          <li>Compute Q2 (median). Split the sorted data into lower and upper halves.</li>
          <li>Compute Q1 (median of lower half) and Q3 (median of upper half).</li>
          <li>Calculate IQR = Q3 - Q1.</li>
          <li>Compute fences: lower = Q1 - 1.5×IQR, upper = Q3 + 1.5×IQR.</li>
          <li>Any value outside the fences is flagged as an outlier.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Lower Fence = Q1 − 1.5 × IQR  |  Upper Fence = Q3 + 1.5 × IQR
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: For the values <strong> 10, 20, 30, 40, 50, 60, 70, 80, 90, 200</strong> the calculator will identify 200 as an outlier because it lies well above the upper fence computed from the IQR.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Outlier Detection</h2>
        <p className="mb-4 text-lg leading-7">
          Outlier detection using the IQR method can be applied in various domains, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>
            <strong>Finance:</strong> Identifying fraudulent transactions and unusual spending behaviors.
          </li>
          <li>
            <strong>Healthcare:</strong> Detecting anomalies in patient measurement data to improve diagnostic accuracy.
          </li>
          <li>
            <strong>Manufacturing:</strong> Monitoring production data to catch defects before products go to market.
          </li>
          <li>
            <strong>E-commerce:</strong> Understanding customer behavior and product performance metrics.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples</h2>
        <p className="mb-4 text-lg leading-7">
          Try these inputs to see how the IQR method reacts to different datasets:
        </p>
        <ul className="list-disc list-inside text-lg leading-7">
          <li>Uniform data (no outliers): 5, 6, 7, 8, 9</li>
          <li>One high outlier: 1, 2, 2, 3, 3, 100</li>
          <li>Low outlier: 0.1, 1, 2, 3, 4</li>
          <li>Extreme outliers: 1, 3, 4, 5, 6, 1000, 2000</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">FAQ - Outlier Detection</h2>
        <div>
          <h3 className="text-xl font-semibold mt-4">Is IQR always the best method for detecting outliers?</h3>
          <p className="mb-4 text-lg leading-7">
            IQR is robust and works well for many distributions, especially when you want to avoid sensitivity to extreme values. However, for skewed distributions or when you need probabilistic inference about outliers, you might consider other approaches such as z-scores, robust z-scores, or model-based methods.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">How should I prepare my data before using this calculator?</h3>
          <p className="mb-4 text-lg leading-7">
            Ensure values are numeric and represent the same measurement scale. Remove non-numeric characters and consider whether to apply transformations (e.g., log) for strongly skewed data before outlier detection.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-4">Can I change the multiplier (1.5) used for the fences?</h3>
          <p className="mb-4 text-lg leading-7">
            The standard multiplier is 1.5, but analysts sometimes use 3.0 for a more conservative fence. This tool uses the standard 1.5 multiplier. For custom multipliers, consider exporting results and applying a different rule offline or extend the calculator.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mt-4">What are the limitations of the IQR method?</h3>
          <p className="mb-4 text-lg leading-7">
            While IQR is effective, it may not capture all outliers in non-linear datasets. It also assumes a symmetrical distribution of data. For other situations, consider using advanced statistical methods tailored to your dataset's characteristics.
          </p>
        </div>
      </section>
    </article>
  );
}
