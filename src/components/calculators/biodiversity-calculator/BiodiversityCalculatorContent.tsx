import React from 'react';

export default function BiodiversityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Biodiversity Calculator — Shannon & Simpson Indices</h2>
        <p className="mb-4 text-lg leading-7">
          The Biodiversity Calculator is a vital tool for ecologists and environmental researchers. This tool computes common biodiversity indices from a simple comma-separated list of species counts (abundances). Enter the number of individuals observed for each species, and the calculator will automatically compute species richness, total individuals, Shannon's index (H'), and Simpson's index (either D or 1 - D).
        </p>
        <p className="mb-4 text-lg leading-7">
          These indices are widely used in ecology to quantify diversity, making them fundamental for biodiversity assessment. Shannon's index accounts for both abundance and evenness of the species present, while Simpson's index emphasizes dominance. The variant selector allows you to switch between D (dominance) and 1 - D (diversity), providing flexibility based on your specific ecological research needs.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding biodiversity is crucial for the conservation of ecosystems. This calculator provides quick insights, helping to identify areas where biodiversity may be declining or at risk. By using this tool, researchers can make informed decisions and develop strategies to enhance biodiversity conservation efforts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How to use the biodiversity calculator</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Enter species counts separated by commas (e.g., <code className="font-mono">10, 20, 15, 5</code>).</li>
          <li>Optionally select the Simpson variant: <strong>D</strong> (dominance) or <strong> 1 - D</strong> (diversity).</li>
          <li>Results update automatically. Toggle charts to view species abundance bar chart.</li>
          <li>Download a PDF summary of inputs and results if needed.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-base text-gray-700">Formulas used:</p>
          <ul className="mt-3 space-y-2">
            <li className="font-mono">Shannon's Index: H' = -Σ (p_i × ln(p_i))</li>
            <li className="font-mono">Simpson's Index (D): D = Σ (p_i²)</li>
            <li className="font-mono">Simpson's Diversity: 1 - D</li>
            <li className="font-mono">where p_i = n_i / N (n_i = count for species i, N = total individuals)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Worked example using the biodiversity calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you observed four species with counts <code className="font-mono">10, 20, 15, 5</code>. The calculator will compute:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Species richness S = 4</li>
          <li>Total individuals N = 50</li>
          <li>p values for each species: 0.2, 0.4, 0.3, 0.1</li>
          <li>Shannon's index H' ≈ -Σ p ln p</li>
          <li>Simpson's index D = Σ p², and 1 - D for the diversity variant</li>
        </ul>
        <p className="mb-4 text-lg leading-7">This example demonstrates how the calculator can help you quickly and efficiently analyze ecological data.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions about the biodiversity calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">What if I have zeros or empty entries?</h3>
            <p className="text-base">Zeros are allowed and will reduce contributions to indices. Empty entries will be ignored when parsing; ensure values are separated by commas for accurate calculations.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Which index should I use?</h3>
            <p className="text-base">Shannon's index is sensitive to rare species, capturing both richness and evenness, making it valuable in ecological studies. Simpson's index emphasizes the dominance of common species, so use the index that best fits your ecological question.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I compare samples?</h3>
            <p className="text-base">Yes — compute indices for multiple samples separately and compare values. Be mindful of sample size effects, and consider rarefaction or standardized sampling if sample sizes differ greatly.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How accurate are the indices provided?</h3>
            <p className="text-base">The indices provided by the calculator are estimates based on input data. For more rigorous statistical analyses, it is recommended to use specialized ecological statistics software.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Notes on the biodiversity calculator</h2>
        <p className="text-base">This calculator provides rapid estimates for ecological analysis and education. It is valuable for students, researchers, and professionals to quickly evaluate biodiversity based on species counts. For advanced statistical inference (confidence intervals, rarefaction), use specialized ecological statistics software or packages to ensure comprehensive analyses.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Use Cases for the Biodiversity Calculator</h2>
        <p className="text-base">The Biodiversity Calculator can be utilized in various scenarios, including:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Ecological surveys on species diversity in different habitats.</li>
          <li>Evaluating the impacts of environmental changes on biodiversity.</li>
          <li>Educating students about biodiversity and ecological concepts.</li>
          <li>Supporting conservation efforts by identifying critical biodiversity areas.</li>
        </ul>
      </section>
    </article>
  );
}
