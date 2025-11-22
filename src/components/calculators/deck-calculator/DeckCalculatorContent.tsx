import React from 'react';

export default function DeckCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Deck Calculator — Materials & Layout Estimates</h1>
        <p className="mb-4 text-lg">
          Use this deck calculator to quickly estimate the materials required for a simple rectangular deck. Enter the deck length, width, and joist spacing to receive immediate estimates for deck area, number of joists, total joist length, approximate decking boards required, and a fastener estimate.
        </p>
        <p className="mb-4 text-base text-gray-600">
          These estimates are intended for planning and early budgeting. Final material lists should be confirmed against local building codes and project-specific details such as board orientation, overhangs, structural loads, ledger connections, and post spacing.
        </p>
        <p className="mb-4 text-base text-gray-600">
          Utilizing an accurate deck calculator is crucial for any construction project involving decks. Not only does it streamline the planning phase, but it also aids in budgeting, ensuring you purchase the right amount of materials without unnecessary waste.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Deck Calculator Works</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Area is calculated as Length × Width (m²).</li>
          <li>Joist spacing is provided in centimeters and converted to meters for calculations.</li>
          <li>Number of joists is estimated as: ceil(width / spacing) + 1 to account for end joists.</li>
          <li>Deck boards are estimated assuming a typical board width of 140 mm (0.14 m).</li>
          <li>Screw/fastener estimates are given as an approximate number per square meter.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Area = Length (m) × Width (m)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Example of Using the Deck Calculator</h2>
        <p className="mb-4">
          Example: For a 6 m × 4 m deck with 40 cm joist spacing:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Area = 6 × 4 = 24 m²</li>
          <li>Spacing = 40 cm = 0.4 m → Joists ≈ ceil(4 / 0.4) + 1 = 11 joists</li>
          <li>Total joist length = 11 × 6 = 66 m</li>
          <li>Deck boards ≈ ceil(4 / 0.14) = 29 boards</li>
          <li>Screws (estimate) ≈ 24 × 30 = 720 screws</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">These numbers are illustrative. Adjust spacing, board width, or fastener rates to match your material choices.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Decks</h2>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Do I need more joists at the edges?</h3>
        <p className="mb-3 text-gray-700">The calculator adds an extra joist to account for an end joist on each side in a simplified way. For engineered designs, consider ledger attachments, rim joists, and local code requirements.</p>

        <h3 className="text-xl font-medium text-gray-800 mt-4">What board width should I use?</h3>
        <p className="mb-3 text-gray-700">This tool assumes 140 mm (14 cm) board width by default. If you use narrower or wider boards, update the calculator assumptions in your planning stage or manually adjust counts.</p>

        <h3 className="text-xl font-medium text-gray-800 mt-4">Are screw estimates accurate?</h3>
        <p className="mb-3 text-gray-700">Screw estimates are approximate. Different manufacturers recommend different fastener spacing, and hidden fasteners change requirements. Use the screw estimate as a starting point and consult product guidance for final quantities.</p>

        <h3 className="text-xl font-medium text-gray-800 mt-4">How can I improve my deck design?</h3>
        <p className="mb-3 text-gray-700">Consider factors such as sun exposure, drainage, and deck height. Consulting a professional deck designer can provide tailored solutions and innovative ideas to enhance your deck's usability and aesthetic appeal.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Next Steps in Your Deck Project</h2>
        <p className="mb-4 text-gray-700">After getting initial estimates, review structural requirements such as joist sizing, beam spans, post spacing, and connections. For permitted projects, submit engineered plans or consult a structural engineer as required by local regulations.</p>
        <p className="mb-4 text-gray-700">Once you have your materials calculated and designs finalized, be sure to also schedule your construction phases effectively to ensure a smooth building process.</p>
      </section>
    </article>
  );
}
