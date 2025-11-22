import React from 'react';

export default function GeneticDistanceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Genetic Distance?</h2>
        <p className="mb-4 text-lg leading-7">
          Genetic distance is a measure of the genetic divergence between populations. It quantifies how different populations are at the genetic level, often based on allele frequencies. Small genetic distances indicate closely related populations, while larger distances suggest greater divergence. Understanding genetic distance is crucial for various fields, including evolutionary biology, conservation genetics, and population management.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator uses Nei's genetic identity and distance for a biallelic locus. Nei's genetic identity (I) summarizes the shared genetic composition between two populations, and genetic distance (D) is defined as D = -ln(I). Genetic distance measurements can inform about the evolutionary relationships between species and populations, guiding both research and practical applications in biodiversity conservation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Genetic Distance Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          For two populations with allele A frequencies p1 and p2, Nei's genetic identity is calculated as:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            I = sqrt(p1 × p2) + sqrt((1 - p1) × (1 - p2))
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The genetic distance is then:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <code className="text-base font-mono text-gray-900">
            D = -ln(I)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This method provides crucial insights into how populations relate to each other genetically. Knowing how to manipulate and interpret these formulas can help researchers understand genetic drift, gene flow, and selection pressures affecting different populations over time.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Genetic Distance Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose population 1 has allele A frequency p1 = 0.5 and population 2 has p2 = 0.3. The calculator computes:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Compute sqrt(0.5 × 0.3) + sqrt(0.5 × 0.7) to get I</li>
          <li>Then D = -ln(I)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Use the inputs on the left to try different allele frequencies. Results update automatically, allowing you to visualize how changes in input frequencies impact the genetic distance metric.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Best Practices & Interpretation of Genetic Distance</h2>
        <p className="mb-4 text-lg leading-7">
          - Ensure allele frequencies are reported as proportions between 0 and 1 (e.g., 0.5 for 50%). Use care in input, as incorrect data can lead to misleading results.
        </p>
        <p className="mb-4 text-lg leading-7">
          - Nei's D is additive under certain conditions and is widely used for phylogenetic inference. Small D (near 0) implies little divergence; larger values indicate more divergence. Consider using genetic distance values in conjunction with other metrics when analyzing population genetics data.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Genetic Distance</h2>

        <h3 className="text-xl font-semibold mt-4">Can I use this for multi-allelic loci?</h3>
        <p className="mb-4 text-lg leading-7">
          Nei's identity generalizes to multiple alleles by summing sqrt(p1i × p2i) across all alleles i. This tool is configured for a single biallelic locus; for multi-allelic loci, you should sum across alleles. In practice, adapting the calculator for multi-allelic loci may require additional algorithms not covered here.
        </p>

        <h3 className="text-xl font-semibold mt-4">What if I get a negative or NaN value?</h3>
        <p className="mb-4 text-lg leading-7">
          Ensure frequencies are between 0 and 1. The calculator will not return a result for invalid frequencies. If I is 0 (no shared alleles), D is infinite and the calculator will indicate no finite distance. Always review data inputs and ensure they align with biological plausibility.
        </p>

        <h3 className="text-xl font-semibold mt-4">How accurate is this method?</h3>
        <p className="mb-4 text-lg leading-7">
          Nei's genetic distance is a robust and commonly used metric for measuring genetic divergence but assumes random mating and certain population genetics conditions. Use it as one of several tools when assessing population structure. Diversifying methods through genetic analysis aids in a more comprehensive understanding of population dynamics.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases of Genetic Distance Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          Genetic distance metrics can be employed in numerous biological contexts, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Assessing evolutionary relationships among species.</li>
          <li>Evaluating the impacts of habitat fragmentation on species divergence.</li>
          <li>Conservation genetics to maintain the genetic health of endangered populations.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Understanding how populations diverge can inform conservation strategies, promote biodiversity, and guide ecological research efforts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">References for Further Reading</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Nei, M. (1972). Genetic distance between populations. American Naturalist.</li>
          <li>Basic population genetics textbooks and reviews.</li>
          <li>Explore online databases and journals focusing on genetics for recent studies and findings.</li>
          <li>Investigate additional resources for computation techniques used in genetic diversity assessments.</li>
        </ul>
      </section>
    </article>
  );
}
