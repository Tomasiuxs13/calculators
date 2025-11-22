import React from 'react';

export default function PunnettSquareCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Punnett Square?</h2>
        <p className="mb-4 text-lg leading-7">
          A Punnett square is a simple grid used in genetics to predict the genotypes and phenotypes of offspring from a cross between two parents. It shows how parental alleles combine and the probabilities of each offspring genotype. This calculator generates a Punnett square for single-gene (monohybrid) crosses using standard notation such as <code className="font-mono">AA</code>, <code className="font-mono">Aa</code>, and <code className="font-mono">aa</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          Punnett squares are invaluable tools in the field of genetics, allowing researchers, educators, and students to visualize genetic combinations. Understanding how alleles interact helps in studying traits, making predictions about offspring, and grasping complex concepts in inheritance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Punnett Square Calculator</h2>
        <ol className="list-decimal list-inside mb-4 text-lg">
          <li>Enter the genotype for Parent 1 (e.g., <code className="font-mono">Aa</code>).</li>
          <li>Enter the genotype for Parent 2 (e.g., <code className="font-mono">Aa</code>).</li>
          <li>The Punnett square will update automatically to show all possible offspring genotypes and their probabilities.</li>
          <li>Use the chart toggle to view genotype distribution as a bar chart, or download the results as a PDF for record-keeping.</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          By following these steps, you can quickly and efficiently visualize the genetic possibilities for the offspring of the given parental genotypes. This tool is particularly useful for students and educators who want to understand the principles of inheritance more deeply.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">Note: This tool assumes a single gene with two alleles and standard dominant/recessive relationships. For multigene crosses (dihybrid or beyond) or non-Mendelian inheritance, use a more specialized tool or adjust your inputs accordingly.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of a Punnett Square</h2>
        <p className="mb-4 text-lg leading-7">
          Example cross: <strong>Aa × Aa</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          The Punnett square for this cross yields genotypes: <code className="font-mono">AA</code>, <code className="font-mono">Aa</code>, and <code className="font-mono">aa</code>, with expected genotype ratios of 1:2:1 (25% AA, 50% Aa, 25% aa). Phenotypically, assuming A is dominant, 75% of offspring show the dominant trait and 25% show the recessive trait.
        </p>
        <p className="mb-4 text-lg leading-7">
          This example clearly illustrates how dominant and recessive traits are inherited, confirming the principles of Mendelian genetics. Such calculations reinforce the understanding of genetic inheritance patterns.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Interpreting Punnett Square Results</h2>
        <p className="mb-4 text-lg leading-7">
          The table displays each possible offspring genotype and whether that genotype produces the dominant or recessive phenotype based on presence of at least one uppercase allele. Frequencies are shown as percentages. Use these results to predict proportions in offspring populations under simple Mendelian inheritance assumptions. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the results of a Punnett square allows you to make informed predictions about not only the appearance of offspring but also their potential for carrying certain traits. This is particularly useful in fields like agriculture, animal breeding, and conservation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can I use this for dihybrid crosses?</h3>
            <p className="text-lg leading-7 text-gray-700">This calculator is designed for single-gene (monohybrid) crosses. For dihybrid or more complex crosses, each parent produces more gamete combinations and a larger Punnett square is required. Consider using a dihybrid-specific tool or manually expand the gametes for multiple loci.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">What notation should I use for genotypes?</h3>
            <p className="text-lg leading-7 text-gray-700">Use two-letter genotypes per parent for the same locus (e.g., <code className="font-mono">AA</code>, <code className="font-mono">Aa</code>, or <code className="font-mono">aa</code>). Uppercase letters denote the dominant allele; lowercase denotes the recessive allele.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Why does the tool show 75% dominant for Aa × Aa?</h3>
            <p className="text-lg leading-7 text-gray-700">In an Aa × Aa cross, the possible offspring genotypes are AA, Aa, and aa. AA and Aa both display the dominant phenotype, giving 3 out of 4 (75%) dominant and 1 out of 4 (25%) recessive.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">How accurate is the Punnett Square?</h3>
            <p className="text-lg leading-7 text-gray-700">The Punnett square provides probabilities based on Mendelian genetics. While it offers insights into genetic inheritance under ideal conditions, real-life breeding may be influenced by additional factors, including environmental influences and genetic linkage.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Punnett Square</h2>
        <p className="mb-4 text-lg leading-7">
          Punnett squares are widely used in various domains including education, agriculture, and medicine. Educators utilize them as a teaching tool to explain genetic principles, while farmers apply these concepts to breed plants and animals with desirable traits. In medicine, understanding genetic traits can aid in counseling patients about genetic conditions and inheritance risks.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References & Further Reading</h2>
        <p className="mb-4 text-lg leading-7">
          For a deeper understanding of Mendelian genetics, Punnett squares, and inheritance patterns, consult introductory genetics textbooks or reputable online resources such as university biology departments and educational platforms. Additional resources may include academic journals and articles that explore recent advancements in genetic research.
        </p>
      </section>
    </article>
  );
}
