import React from 'react';

export default function LinearRegressionCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta
        name="description"
        content="Use our Linear Regression Calculator to compute linear relationships in data quickly and efficiently. Get slope, intercept, correlation, and more."
      />
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Linear Regression Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the best-fit line (linear regression) for paired X and Y data using the ordinary least squares method. It returns the slope (m), intercept (b), the Pearson correlation coefficient (r), and R² — a measure of how well the regression line explains the variability of the data.
        </p>
        <p className="mb-4 text-lg leading-7">
          Linear regression is a powerful statistical tool that helps you understand relationships between variables, making it essential for data analysis in various fields such as economics, finance, and science. This tool is designed for simplicity, allowing users to input their data quickly and get real-time results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How Linear Regression Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter comma-separated numeric values for X and Y. The calculator parses the inputs, ensures both lists have the same length, and computes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Mean of X and Y</li>
          <li>Slope (m) = covariance(X, Y) / variance(X)</li>
          <li>Intercept (b) = mean(Y) − m × mean(X)</li>
          <li>Correlation coefficient (r) = covariance / (stdDev(X) × stdDev(Y))</li>
          <li>R² = r²</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            m = Σ((xi − x̄)(yi − ȳ)) / Σ((xi − x̄)²)  
            b = ȳ − m x̄
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Example of Linear Regression</h2>
        <p className="mb-4 text-lg leading-7">
          Using the default values X = [1, 2, 3, 4, 5] and Y = [2, 4, 5, 4, 5], the calculator will immediately show the slope and intercept as well as the correlation coefficient. Toggle the charts to view the scatter plot and the fitted regression line.
        </p>
        <p className="mb-4 text-lg leading-7">
          This example helps you visualize how data points relate to one another and how the linear function fits into the displayed data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Interpreting Linear Regression Results</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding the output of the linear regression is crucial for interpreting your data:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li><strong>Slope (m):</strong> Change in Y for a one unit change in X.</li>
          <li><strong>Intercept (b):</strong> Value of Y when X = 0.</li>
          <li><strong>Correlation (r):</strong> Strength and direction of a linear relationship (−1 to 1).</li>
          <li><strong>R²:</strong> Proportion of variance in Y explained by X (0 to 1).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Use Cases of Linear Regression</h2>
        <p className="mb-4 text-lg">
          Linear regression is widely used in various industries and fields. Here are some common use cases:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li><strong>Economics:</strong> Predicting consumer spending and sales forecasting.</li>
          <li><strong>Finance:</strong> Evaluating investment risks and returns.</li>
          <li><strong>Health:</strong> Analyzing relationships between health metrics and lifestyle choices.</li>
          <li><strong>Marketing:</strong> Understanding how advertising spend influences sales.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">What if X and Y lengths differ?</h3>
            <p className="text-lg">The calculator requires X and Y to have the same number of observations. If lengths differ, an error will be shown.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How many data points do I need?</h3>
            <p className="text-lg">At least two paired observations are required to compute a slope. More points give more reliable estimates.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can this detect non-linear relationships?</h3>
            <p className="text-lg">Linear regression models linear relationships only. For non-linear patterns consider polynomial regression or other models.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">What are the assumptions of linear regression?</h3>
            <p className="text-lg">Key assumptions include linearly independent variables, homoscedasticity, normally distributed residuals, and no multicollinearity.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Is it necessary to standardize data?</h3>
            <p className="text-lg">Standardizing data is not necessary for linear regression, but it can improve the interpretability of coefficients.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Exporting Results</h2>
        <p className="mb-4 text-lg">Use the PDF download button to export inputs and computed results for reporting or sharing.</p>
      </section>
    </article>
  );
}
