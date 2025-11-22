import React from 'react';

export default function RSquaredCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <head>
        <meta name="description" content="Use our R-squared calculator to understand the relationship between your data points with detailed explanations and examples." />
      </head>
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">R-squared Calculator</h1>
        <p className="mb-4 text-lg">
          This calculator computes the R-squared (coefficient of determination) for a simple linear regression model fitted to your data. Enter comma-separated X and Y values of equal length. The calculator automatically fits a linear model y = a + b*x, returns the slope (b), intercept (a), and the R-squared value which indicates how well the model explains the variability in the response variable. Understanding R-squared is crucial for analyzing regression models and making informed decisions based on data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">How the R-squared Calculator Works</h2>
        <p className="mb-4">
          We perform ordinary least squares linear regression to estimate the slope and intercept. The R-squared value is computed as:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">R² = 1 - (SS_res / SS_tot)</code>
          <p className="text-sm text-gray-600 mt-2">where SS_res is the sum of squared residuals and SS_tot is the total sum of squares.</p>
        </div>

        <p className="mb-4">
          The calculator first parses the values, computes the means, estimates slope and intercept, and then computes predicted values to calculate SS_res and SS_tot. If your dataset has less than two points, mismatched lengths, or invalid numbers, the calculator will not return results.
        </p>
        <p className="mb-4">
          Additionally, users can leverage this tool for various scenarios, including academic research, business analytics, and even personal projects, allowing anyone to better understand their data relationships.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Examples of R-squared Calculation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-medium">Perfect Linear Relationship</h3>
            <p className="text-sm text-gray-600 mt-2">X: 1,2,3,4,5</p>
            <p className="text-sm text-gray-600">Y: 2,4,6,8,10</p>
            <p className="mt-3">Result: slope = 2, intercept = 0, R² = 1 (perfect fit).</p>
          </div>

          <div className="p-4 border rounded-lg bg-white">
            <h3 className="font-medium">Noisy Linear Data</h3>
            <p className="text-sm text-gray-600 mt-2">X: 1,2,3,4,5</p>
            <p className="text-sm text-gray-600">Y: 2.1,3.9,6.2,7.8,10.3</p>
            <p className="mt-3">Result: slope close to 2, intercept close to 0, R² less than 1 depending on noise.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Interpreting the R-squared Value</h2>
        <p className="mb-4">
          R-squared ranges from 0 to 1 for typical least-squares regression and indicates the proportion of variance in the dependent variable that is predictable from the independent variable. An R² close to 1 indicates a strong linear relationship; an R² near 0 indicates little to no linear explanatory power. 
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Note: A high R-squared does not imply causation and does not guarantee that the model is appropriate. Always visualize residuals and consider additional diagnostics.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">FAQs about R-squared</h2>

        <div>
          <h3 className="font-medium">Q: How many data points do I need?</h3>
          <p className="mb-4 text-sm text-gray-600">A: At least two points are required to estimate a simple linear regression. More points provide more reliable estimates.</p>

          <h3 className="font-medium">Q: What happens if my X values are all the same?</h3>
          <p className="mb-4 text-sm text-gray-600">A: If all X values are identical, the slope is undefined (division by zero in variance). The calculator will not return results for that dataset.</p>

          <h3 className="font-medium">Q: Why might R-squared be negative?</h3>
          <p className="mb-4 text-sm text-gray-600">A: For models without an intercept or for poorly fitting models, R-squared can be negative, indicating the model performs worse than predicting the mean. For ordinary least squares with an intercept, R² is between 0 and 1.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Best Practices for Using R-squared</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>Always visualize data (scatter plot) before trusting R-squared.</li>
          <li>Check residuals for patterns that violate model assumptions.</li>
          <li>Consider additional predictors for multivariate models (this tool is for simple linear regression only).</li>
          <li>Use R-squared in conjunction with other metrics for a comprehensive model evaluation.</li>
          <li>Understand the limitations of R-squared, especially in non-linear models.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Use Cases for R-squared Calculator</h2>
        <p className="mb-4">
          The R-squared calculator can be invaluable for various fields, including finance, economics, and scientific research, where understanding relationships between variables can drive better decision-making and strategy development. By using this calculator, researchers can validate their models, educators can teach concepts about regression analysis, and analysts can provide insights into data trends effectively.
        </p>
      </section>
    </article>
  );
}
