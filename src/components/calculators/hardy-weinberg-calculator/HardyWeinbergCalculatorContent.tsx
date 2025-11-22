import React from 'react';

export default function HardyWeinbergCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Hardy-Weinberg Equilibrium Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to compute allele and genotype frequencies under the Hardy-Weinberg equilibrium. Given allele frequencies p (for allele A) and q (for allele a), the expected genotype frequencies are p² for AA, 2pq for Aa, and q² for aa. This tool helps geneticists, students, and educators quickly determine expected distributions in an idealized population. In population genetics, understanding these frequencies is crucial for studying genetic variation and evolutionary dynamics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How the Hardy-Weinberg Equilibrium Works</h2>
        <p className="mb-4 text-lg leading-7">
          The Hardy-Weinberg principle states that allele and genotype frequencies in a large, randomly mating population remain constant from generation to generation in the absence of evolutionary forces. If p is the frequency of allele A and q is the frequency of allele a (with p + q = 1), the genotype frequencies are:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            p² = Frequency of AA | 2pq = Frequency of Aa | q² = Frequency of aa
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          If you provide both p and q and they do not sum to 1, the calculator will derive q = 1 − p (trusting p) to ensure frequencies sum to 1. You may also leave q blank to let the tool compute it from p. This eliminates any potential errors and optimizes the calculation process, making it user-friendly for all levels of expertise.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Example Calculation of Hardy-Weinberg Equilibrium</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose p = 0.6 (allele A frequency). Then q = 0.4 and the genotype frequencies are:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>p² = 0.36 (36%) → AA</li>
          <li> 2pq = 0.48 (48%) → Aa</li>
          <li>q² = 0.16 (16%) → aa</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Enter p = 0.6 into the calculator and either provide q = 0.4 or leave q blank. The tool will automatically compute and display p², 2pq, and q². This facilitates quick checks and encourages learning about population genetics.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">When to Use this Hardy-Weinberg Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is useful for teaching genetic concepts, checking observed genotype counts against expected frequencies, and doing quick population genetics estimates under the assumptions of Hardy-Weinberg equilibrium (no selection, mutation, migration, genetic drift, and random mating). It can serve as a valuable tool in academic settings, research, and practical applications in genetics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions (FAQs) about Hardy-Weinberg Equilibrium</h2>

        <h3 className="text-xl font-medium mt-4">What if p + q ≠ 1?</h3>
        <p className="mb-4 text-lg leading-7">
          The calculator will derive q = 1 − p when the inputs do not sum to 1 or if q is missing. This ensures the allele frequencies remain consistent for computing genotype frequencies, maintaining the integrity of the calculations.
        </p>

        <h3 className="text-xl font-medium mt-4">Can I input percentages instead of decimals?</h3>
        <p className="mb-4 text-lg leading-7">
          For this tool, input allele frequencies as decimals between 0 and 1 (for example, 0.25 for 25%). If you have percentages, convert them by dividing by 100. This helps maintain accuracy in calculations and ensures that users can easily adapt their inputs.
        </p>

        <h3 className="text-xl font-medium mt-4">Are observed genotype counts considered?</h3>
        <p className="mb-4 text-lg leading-7">
          This calculator computes expected frequencies under ideal Hardy-Weinberg assumptions. To compare observed counts to expected counts (for example, using a chi-square test), use observed genotype numbers and compute expected counts by multiplying expected frequencies by total sample size. This feature is particularly useful for geneticists performing analyses in real-world populations.
        </p>

        <h3 className="text-xl font-medium mt-4">How can I improve my understanding of Hardy-Weinberg principles?</h3>
        <p className="mb-4 text-lg leading-7">
          Reading textbooks on population genetics, enrolling in courses, and using simulations or calculators like this one are excellent ways to enhance understanding. Engaging in discussions with peers and educators can also broaden insights and clarify complex concepts related to the Hardy-Weinberg equilibrium.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">References</h2>
        <p className="mb-4 text-lg leading-7">
          Hardy, G. H. (1908). Mendelian Proportions in a Mixed Population. Science. This calculator implements the basic Hardy-Weinberg formulas used in population genetics. Additional resources on genetics and population studies can deepen your understanding and provide context to the calculations performed here.
        </p>
      </section>
    </article>
  );
}
