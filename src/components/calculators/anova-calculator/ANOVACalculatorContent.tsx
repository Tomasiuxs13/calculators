import React from 'react';

export default function ANOVACalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">ANOVA (Analysis of Variance) Calculator</h1>
        <p className="mb-4 text-lg leading-7">Use this ANOVA calculator to test whether the means of three independent groups are significantly different. Enter each group's observations as comma-separated numbers (for example: <code className="font-mono">10, 12, 14</code>).</p>
        <p className="mb-4 text-lg leading-7">This tool performs a one-way ANOVA, reporting between-group and within-group sums of squares, mean squares, the F statistic, and the associated p-value. Results update automatically as you type.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How it works</h2>
        <p className="mb-4 text-lg leading-7">One-way ANOVA partitions the total variability in the data into variability between groups (SSB) and variability within groups (SSW). The test statistic is:</p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">F = MSB / MSW = (SSB / (k - 1)) / (SSW / (N - k))</code>
        </div>
        <p className="mb-4 text-lg leading-7">Where k is the number of groups and N is the total number of observations. A large F suggests that group means differ more than expected by chance. The p-value is computed from the F distribution with (k - 1, N - k) degrees of freedom.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">Suppose you have three groups of observations:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Group 1: 10, 12, 14</li>
          <li>Group 2: 15, 17, 19</li>
          <li>Group 3: 20, 22, 24</li>
        </ul>
        <p className="mb-4 text-lg leading-7">Enter these into the calculator. It will compute SSB, SSW, MSB, MSW, the F statistic, and the p-value automatically. If p &lt; 0.05 (typical alpha), you would conclude the group means are significantly different.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Assumptions</h2>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>Observations are independent within and across groups.</li>
          <li>Each group is normally distributed (robust for moderate deviations when sample sizes are similar).</li>
          <li>Homogeneity of variances (groups have similar variances).</li>
        </ul>
        <p className="mb-4 text-lg leading-7">If assumptions are violated, consider transformations, non-parametric alternatives (e.g., Kruskal-Wallis), or Welch's ANOVA for unequal variances.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Interpreting results</h2>
        <p className="mb-4 text-lg leading-7">Key outputs:</p>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>SSB (Between): Variability due to differences between group means.</li>
          <li>SSW (Within): Variability within each group.</li>
          <li>MSB and MSW: Mean squares (SS divided by degrees of freedom).</li>
          <li>F statistic: Ratio MSB/MSW. Higher values suggest stronger evidence against the null hypothesis (that all group means are equal).</li>
          <li>p-value: Probability of observing an F at least as extreme as the computed one under the null. Small p (e.g., &lt; 0.05) indicates statistical significance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold">Can I input different numbers of observations per group?</h3>
            <p className="text-lg">Yes. One-way ANOVA supports unequal sample sizes. The calculator automatically accounts for the different group sizes when computing degrees of freedom and mean squares.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What if a group has non-numeric entries or blanks?</h3>
            <p className="text-lg">Non-numeric tokens and empty entries are ignored. Make sure each observation is a valid number. If a group becomes empty after filtering invalid entries, it will be excluded from the analysis.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How do I decide significance?</h3>
            <p className="text-lg">Compare the p-value to your alpha (commonly 0.05). If p &lt; alpha, you reject the null hypothesis that all group means are equal. Remember to check assumptions and consider post-hoc tests to identify which groups differ.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Post-hoc testing</h2>
        <p className="mb-4 text-lg leading-7">ANOVA tells you if at least one group mean differs, but not which pairs differ. If ANOVA is significant, use post-hoc comparisons (e.g., Tukey's HSD) to identify specific group differences while controlling family-wise error.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">References</h2>
        <ul className="list-disc pl-6 mb-4 text-lg leading-7">
          <li>Field, A., Miles, J., &amp; Field, Z. (2012). Discovering Statistics Using R.</li>
          <li>Any standard statistics textbook covering one-way ANOVA and F-distribution.</li>
        </ul>
      </section>
    </article>
  );
}
