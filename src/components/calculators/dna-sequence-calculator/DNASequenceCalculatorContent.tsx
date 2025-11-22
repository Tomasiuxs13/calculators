import React from 'react';

export default function DNASequenceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">DNA Sequence Calculator</h1>
      <p className="mb-4 text-lg leading-7">
        The DNA Sequence Calculator helps you analyze short DNA sequences by generating the complementary or reverse-complementary strand, calculating nucleotide counts, sequence length, and GC content. This tool is essential for molecular biology workflows, including primer design, sequence verification, and educational applications.
      </p>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Understanding DNA</h2>
        <p className="mb-4 text-lg leading-7">
          DNA, or deoxyribonucleic acid, is the hereditary material in humans and nearly all other organisms. It is composed of four nucleotides: A (adenine), T (thymine), C (cytosine), and G (guanine). The structure of DNA allows it to store genetic information, and the relationships between these nucleotides are key to many genetic processes. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How the DNA Sequence Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          In double-stranded DNA, A pairs with T and C pairs with G. The complement of a sequence involves substituting each base with its pairing partner. In addition, the reverse complement reverses the order of the sequence to match the antiparallel orientation of the DNA strands.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Complement: A &lt;-&gt; T, C &lt;-&gt; G</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            To use this calculator, input a DNA sequence consisting of the letters A, T, C, and G. You can choose to calculate either the complementary or reverse complementary sequences. The tool auto-calculates results in real-time as you type, displaying nucleotide counts and GC content.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases for DNA Sequence Analysis</h2>
        <p className="mb-4 text-lg leading-7">
          There are several scenarios where DNA sequence analysis is beneficial:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
          <li>Designing genetic primers in PCR (Polymerase Chain Reaction).</li>
          <li>Validating DNA sequences in genetic research.</li>
          <li>Educating students in molecular biology and genetics.</li>
          <li>Assessing potential clones or sequencing errors in laboratory settings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Example of DNA Sequence Analysis</h2>
        <p className="mb-4 text-lg leading-7">
          Input sequence: <strong>ATCGGTA</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          Complement: <strong>TAGCCAT</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          Reverse complement: <strong>TACCGAT</strong>
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interpreting Results</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
          <li>Length: The total number of nucleotides in the input sequence.</li>
          <li>GC Content: The percentage of nucleotides that are G or C, significant for melting temperature and primer design.</li>
          <li>Nucleotide composition: Counts of A, T, C, and G that help identify possible biases or errors.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What characters are allowed?</h3>
            <p>Only the letters A, T, C, and G (case-insensitive) are allowed. Spaces are ignored, and invalid characters will prevent calculation.</p>
          </div>

          <div>
            <h3 className="font-semibold">Can I analyze RNA sequences?</h3>
            <p>This tool is specifically designed for DNA sequences. For RNA, replace T with U and consider utilizing an RNA-specific calculator.</p>
          </div>

          <div>
            <h3 className="font-semibold">How is GC content calculated?</h3>
            <p>GC content is computed as (G + C) / total_length × 100 and is presented to two decimal places.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Notes for Researchers</h2>
        <p className="text-lg leading-7 mb-4">
          This calculator is intended for quick analyses and educational purposes. For high-throughput or large-scale sequence processing, it is recommended to use specialized bioinformatics tools and always validate results against reliable reference datasets.
        </p>
      </section>
    </article>
  );
}
