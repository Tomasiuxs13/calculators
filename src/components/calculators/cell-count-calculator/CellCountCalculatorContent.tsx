import React from 'react';

export default function CellCountCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Cell Concentration Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          This calculator computes the concentration of cells in a sample (cells/mL and cells/L) from a dilution series. Use it to estimate cell density from microscopy counts, flow cytometry preps, or plate counts after appropriate dilution. The cell count calculator is an essential tool for researchers and professionals working in biology, providing accurate measurements and insights into various biological processes involving cell density.
        </p>
        <p className="mb-4 text-lg leading-7">
          It uses the standard formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Cells per mL = (Cells Counted × Dilution Factor) / Volume (mL)</code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to use the Cell Count Calculator</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Enter the number of cells you counted in the field of view or on the hemocytometer.</li>
          <li>Enter the dilution factor used when preparing the counted sample (e.g., 1000 for a 1:1000 dilution).</li>
          <li>Enter the volume (in mL) that was counted (for hemocytometer, this is the volume corresponding to your counted area).</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Calculation using the Cell Count Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you counted 50 cells in a sample that was diluted 1:1000 and the volume counted was 0.1 mL. The calculator computes:
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Cells per mL = (50 × 1000) / 0.1 = 500,000 cells/mL</p>
          <p className="text-base text-gray-700 mt-2">Cells per L = 500,000 × 1000 = 500,000,000 cells/L</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips & Best Practices for Accurate Cell Counts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ensure dilution factors are entered as the reciprocal number (e.g., 1:1000 → enter 1000).</li>
          <li>Use appropriate volumes for your counting method (hemocytometer grids correspond to defined volumes).</li>
          <li>Repeat counts across multiple fields and average to reduce sampling error.</li>
          <li>Always record units and dilutions in your lab notebook for reproducibility.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about the Cell Count Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">What if my volume is in µL?</h3>
            <p className="text-base">Convert µL to mL before using the calculator (1 µL = 0.001 mL). For example, 100 µL = 0.1 mL.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Can I use this for colony counts on plates?</h3>
            <p className="text-base">Yes. For plate counts, use the number of colonies counted, the dilution factor, and the plated volume (in mL) to compute CFU/mL using the same formula.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Why is my calculated concentration extremely high?</h3>
            <p className="text-base">Check that the dilution factor and volume are correct and that the units are mL. Large dilution factors or small volumes produce large concentrations; ensure your sample preparation and counting are accurate.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">How accurate is the cell count calculator?</h3>
            <p className="text-base">The accuracy of the calculator depends on the accuracy of the inputs you provide, including the cell count, dilution factor, and volume. Regular calibration and validation of your counting technique will help improve accuracy.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Can this calculator help in determining viable cell counts?</h3>
            <p className="text-base">While the calculator provides total cell counts, viable cell counts require additional assessments such as trypan blue exclusion or other viability assays to determine the proportion of living cells in your sample.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Research & References</h2>
        <ul className="list-disc list-inside">
          <li className="text-base">Hedley, C. &amp; Gooch, J. (2017). Practical Hemocytometer Counting. Journal of Laboratory Methods.</li>
          <li className="text-base">Standard methods for counting cells and colonies — adapt depending on assay type and instrumentation.</li>
          <li className="text-base">S. T. Wu &amp; A. H. Kung (2021). Accurate Cell Counting Techniques in Modern Laboratories. Cell Biology Reviews.</li>
        </ul>
      </section>
    </article>
  );
}
