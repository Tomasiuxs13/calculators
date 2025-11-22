import React from 'react';

export default function AlleleFrequencyCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Allele Frequency?</h2>
        <p className="mb-4 text-lg leading-7">
          Allele frequency describes how common an allele is in a population. It is the proportion of all copies of a gene that are of a given allele type. Allele frequencies are fundamental metrics in population genetics and are used to study genetic variation, evolution, and the effects of selection and drift. Understanding allele frequency is crucial for population genetics research and can inform conservation strategies to preserve genetic diversity in species.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the frequencies of two alleles (A and a) from counts of three genotypes: homozygous AA, heterozygous Aa, and homozygous aa. Enter the counts for each genotype and the calculator will auto-update the allele frequencies p (for A) and q (for a). The interpretation of these frequencies allows researchers and practitioners to understand the genetic makeup of populations more effectively and can also impact the management of genetic resources.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Calculate Allele Frequencies</h2>
        <p className="mb-4 text-lg leading-7">
          Given genotype counts, first compute the total number of individuals, then the total number of alleles (which is twice the number of individuals). The number of copies of allele A equals twice the number of AA plus the number of Aa. The frequency p is the proportion of A alleles out of all alleles. These calculations are critical for understanding genetic diversity and can be used in various biological fields, including evolutionary biology, conservation, and health sciences.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">
            Total Individuals = AA + Aa + aa
          </code>
          <code className="text-base font-mono text-gray-900 block mt-2">
            Total Alleles = 2 × Total Individuals
          </code>
          <code className="text-base font-mono text-gray-900 block mt-2">
            Count(A) = 2 × AA + Aa
          </code>
          <code className="text-base font-mono text-gray-900 block mt-2">
            p = Count(A) / Total Alleles
          </code>
          <code className="text-base font-mono text-gray-900 block mt-2">
            q = 1 − p
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If you have 25 AA, 50 Aa, and 25 aa individuals:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Total individuals = 25 + 50 + 25 = 100</li>
            <li>Total alleles = 2 × 100 = 200</li>
            <li>Count(A) = 2×25 + 50 = 100 → p = 100/200 = 0.5</li>
            <li>Count(a) = 2×25 + 50 = 100 → q = 100/200 = 0.5</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Using This Allele Frequency Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the observed counts for each genotype in the input fields. The calculator updates automatically — there is no "Calculate" button. You can also download a PDF report of inputs and results for record-keeping or publication supplements. This makes the tool valuable not only for students learning about genetics but also for researchers looking to analyze population data efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Allele Frequency Data</h2>
        <p className="mb-4 text-lg leading-7">
          Allele frequencies play a vital role in various fields, including:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Evolutionary Biology:</strong> Understanding how genetic variations contribute to species evolution.</li>
          <li><strong>Conservation Genetics:</strong> Assessing genetic diversity and identifying at-risk populations.</li>
          <li><strong>Medical Genetics:</strong> Analyzing disease susceptibility and inheritance patterns.</li>
          <li><strong>Agricultural Sciences:</strong> Improving crop and livestock breeding through genetic analysis.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Allele Frequencies</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold">Can this calculator handle zero counts?</h3>
            <p className="text-base text-gray-700">Yes. If the total number of individuals is zero, the calculator will not produce allele frequencies. For any positive total, frequencies are computed normally.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Does this assume Hardy-Weinberg equilibrium?</h3>
            <p className="text-base text-gray-700">No — the calculator simply computes observed allele frequencies from genotype counts. Hardy-Weinberg equilibrium is an additional assumption about genotype frequencies given allele frequencies; you can compare observed genotype proportions to expected HWE proportions using p and q = 1 − p if desired.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why are allele frequencies useful?</h3>
            <p className="text-base text-gray-700">Allele frequencies summarize genetic variation in populations and are used in studies of evolution, conservation genetics, disease gene mapping, and population structure analyses. They provide insights into how genetics influence traits and health, making them a cornerstone of biological research.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
