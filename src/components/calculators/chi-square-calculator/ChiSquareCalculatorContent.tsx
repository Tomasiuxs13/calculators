import React from 'react';

export default function ChiSquareCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Chi-Square Test for Independence</h1>
        <p className="mb-4 text-lg leading-7">
          The Chi-Square Test for Independence evaluates whether two categorical variables are independent of each other. This calculator lets you input a contingency table (observed frequencies) and either provide expected frequencies or compute them from the observed data.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter frequencies using commas to separate columns and semicolons to separate rows. For example, a 2×2 table can be entered as <code className="font-mono">10,20;15,25</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          This test is widely used in various fields, including social sciences, biology, and marketing, to analyze survey data and categorical results. Understanding how to apply the Chi-Square test can significantly enhance your data analysis skills.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Chi-Square Test for Independence Works</h2>
        <p className="mb-4">
          The test statistic is calculated as:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">χ² = Σ (Observed - Expected)² / Expected</code>
        </div>
        <p className="mb-4">
          Degrees of freedom for a contingency table are computed as (rows − 1) × (columns − 1). The p-value is obtained from the chi-square distribution with the computed degrees of freedom.
        </p>
        <p className="mb-4">
          This testing method essentially compares the observed and expected frequencies to determine whether there is a significant difference between them. If the observed frequencies deviate significantly from the expected ones, we can conclude that there may be an association between the variables.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of the Chi-Square Test for Independence</h2>
        <div className="mb-4">
          <p className="mb-2">
            Example 1 — 2×2 observed table: <span className="font-mono">10,20;15,25</span>. If you provide an expected table, the calculator will use it; otherwise it will compute expected frequencies from row and column totals.
          </p>
          <p className="mb-2 text-sm text-gray-600">Tip: Use the selector to choose whether expected frequencies are provided or should be computed automatically.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Interpreting Results from the Chi-Square Test</h2>
        <p className="mb-4">
          A large chi-square statistic relative to the degrees of freedom indicates stronger evidence against the null hypothesis of independence. The p-value gives the probability of observing a chi-square statistic at least as extreme as the one computed, assuming independence is true.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            p-value &lt; 0.05: Typically considered evidence to reject independence at the 5% level.
          </li>
          <li>
            p-value ≥ 0.05: Not enough evidence to conclude dependence.
          </li>
        </ul>
        <p className="mb-4">
          When interpreting results, it’s important to consider the context of the data. Just because a p-value is low doesn’t always mean there is a strong practical significance. Analyze the actual values and distribution alongside the statistical outcome.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ) About the Chi-Square Test for Independence</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What if expected frequency is zero?</h3>
            <p className="text-gray-700">If an expected frequency is zero while the observed count is positive, the chi-square calculation is not valid. The calculator will flag this as an error. Consider combining categories to avoid zero expected counts.</p>
          </div>

          <div>
            <h3 className="font-semibold">How are expected frequencies computed?</h3>
            <p className="text-gray-700">When computed, each expected cell E_ij is calculated as (row_total_i * column_total_j) / grand_total. This is the standard method for the test of independence.</p>
          </div>

          <div>
            <h3 className="font-semibold">Can I use non-integer frequencies?</h3>
            <p className="text-gray-700">Observed frequencies should represent counts (integers). Expected frequencies may be fractional when computed from margins. This tool accepts numeric values but be cautious when using non-integer observed counts.</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Where can I apply the Chi-Square Test for Independence?</h3>
            <p className="text-gray-700">The Chi-Square Test is used in various fields such as market research, medical studies, and social sciences to evaluate relationships between categorical variables. It's beneficial in surveys, clinical trials, and analyzing customer preferences, among other scenarios.</p>
          </div>

          <div>
            <h3 className="font-semibold">What assumptions does the Chi-Square Test have?</h3>
            <p className="text-gray-700">The primary assumptions include that the samples must be independent, the data should be in frequency form, and expected frequencies should be at least 5 for valid results. If these assumptions are violated, results may not be reliable.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">References and Further Reading</h2>
        <p className="text-gray-700">For more details see standard statistics texts on contingency tables and chi-square tests of independence. Additionally, reputable online resources and academic journals can provide deeper insights into advanced applications and variations of the Chi-Square test.</p>
      </section>
    </article>
  );
}
