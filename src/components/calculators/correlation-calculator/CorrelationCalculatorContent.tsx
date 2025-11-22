import React from 'react';

export default function CorrelationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Pearson Correlation Coefficient?</h2>
        <p className="mb-4 text-lg leading-7">
          The Pearson correlation coefficient (r) measures the linear relationship between two variables X and Y. Values of r range from -1 to 1. A value of 1 indicates a perfect positive linear relationship, -1 indicates a perfect negative linear relationship, and 0 indicates no linear relationship. This statistical tool is widely used in fields such as finance, healthcare, and social sciences to determine how closely related two sets of data are.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the Pearson r from two lists of numbers. Enter values as comma-separated lists of equal length (for example: <code className="font-mono">1, 2, 3</code>). The tool also shows r² (coefficient of determination) and a scatter plot to visualize the relationship. Understanding these outputs helps in making data-driven decisions based on correlation analysis.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          The Pearson correlation is computed as:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            r = sum((xi - x̄)(yi - ȳ)) / sqrt(sum((xi - x̄)²) * sum((yi - ȳ)²))
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Where x̄ and ȳ are the sample means of X and Y. The calculator parses your input, validates the lists are numeric and of equal length, and returns r and r² rounded for readability. By utilizing this calculator, you can quickly assess the strength and direction of the relationship between two datasets.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Correlation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have X = <span className="font-mono">1, 2, 3, 4, 5</span> and Y = <span className="font-mono">2, 4, 6, 8, 10</span>. This is a perfect linear relationship (Y = 2X), so r will be 1 and r² will be 1. By inputting these values into the calculator, users can observe how the calculator derives these correlations and better understand their practical significance.
        </p>
        <p className="mb-4 text-lg leading-7">
          Try entering the example values into the calculator to see immediate results and the scatter plot visualization. This hands-on approach helps in grasping the implications of correlation in real-world scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Interpreting r and r²</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>r close to 1:</strong> Strong positive linear relationship.</li>
          <li><strong>r close to -1:</strong> Strong negative linear relationship.</li>
          <li><strong>r around 0:</strong> Little to no linear relationship; non-linear relationships may still exist.</li>
          <li><strong>r²:</strong> Proportion of variance in Y explained by X (for simple linear regression).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases of Correlation Analysis</h2>
        <p className="mb-4 text-lg leading-7">
          Correlation analysis is vital across various sectors. For example, in finance, investors use correlation to assess how different stocks move in relation to each other, helping them to diversify portfolios. In healthcare, researchers may examine the correlation between lifestyle factors and health outcomes to understand better the impact of diet or exercise.
        </p>
        <p className="mb-4 text-lg leading-7">
          Moreover, educators can use it to analyze student performance data to identify factors that influence academic achievement. These applications highlight the importance of accurately computing and interpreting correlation coefficients.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>
        <div>
          <h3 className="text-xl font-semibold mt-4">Q: How many values do I need?</h3>
          <p className="mb-2 text-lg">A: At least two pairs are required to compute a correlation. More data generally produces a more reliable estimate and enhances the statistical significance of the result.</p>

          <h3 className="text-xl font-semibold mt-4">Q: What if my lists are different lengths?</h3>
          <p className="mb-2 text-lg">A: The calculator requires X and Y to have the same number of entries. If they differ, you'll see an error prompting you to correct the inputs, ensuring the integrity of the analysis.</p>

          <h3 className="text-xl font-semibold mt-4">Q: Does this test for causation?</h3>
          <p className="mb-2 text-lg">A: No. Correlation measures association, not causation. Further analysis and experimental design are needed to establish causality. It's essential to recognize that other intervening variables might influence the observed correlation.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Additional Tips for Correlation Analysis</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Remove or handle outliers appropriately, as they can strongly influence r.</li>
          <li>Visualize data (scatter plot) to check for non-linear patterns before relying solely on r.</li>
          <li>Consider computing confidence intervals for r when making inferences to enhance the reliability of your interpretations.</li>
          <li>Regularly review and validate the datasets for accuracy and relevance to ensure dependable results.</li>
          <li>Explore using other correlation measures, like Spearman's rank, if data assumptions for Pearson’s are not met.</li>
        </ul>
      </section>
    </article>
  );
}
