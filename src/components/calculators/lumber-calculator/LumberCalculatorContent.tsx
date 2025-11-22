import React from 'react';

export default function LumberCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Lumber Calculator: Estimate Boards for Your Project</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Lumber Calculator to quickly estimate how many boards you'll need for a simple surface or plank layout. Enter the project length and width in meters and select the board size (nominal inches). The calculator returns the required number of boards, the total linear meters, and an approximate board area. Results update automatically as you edit inputs.
        </p>
        <p className="mb-4 text-lg leading-7">
          This tool is invaluable for both DIY enthusiasts and professional builders who want to minimize waste and optimize their lumber orders. Whether you're working on a small home project or a large-scale construction, knowing how much lumber to order can save you time and money.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">How It Works: Lumber Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator converts the selected board width from inches to meters, then determines how many boards placed side-by-side are needed to span the specified width. It multiplies that count by the project length to compute total linear meters, and multiplies by the board width to estimate total board area.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            boards = ceil(width (m) / boardWidth (m))
            {'\n'}totalLinear = boards × length (m)
            {'\n'}area = boards × boardWidth (m) × length (m)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Practical Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you have a floor area of 5 m length and 3 m width and choose 2x4 boards (nominal width ~3.5 inches ≈ 0.0889 m). The calculator will:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg">
          <li>Convert 3.5 in to meters: 3.5 × 0.0254 = 0.0889 m</li>
          <li>Calculate number of boards: ceil(3 / 0.0889) = 34 boards</li>
          <li>Total linear meters: 34 × 5 = 170 m</li>
          <li>Approx. board area: 34 × 0.0889 × 5 ≈ 15.1 m²</li>
        </ol>
        <p className="mb-4 text-lg leading-7">
          These values help you estimate material needs and order an appropriate amount of lumber. Always allow for waste, cuts, and defects (commonly add 5–15% extra depending on the project).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Tips for Ordering Lumber</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Round up board quantities and add a waste factor (5–15%).</li>
          <li>Check actual board dimensions—nominal sizes differ from finished sizes.</li>
          <li>Consider board orientation and spacing; this calculator assumes boards are placed edge-to-edge.</li>
          <li>When ordering long lengths, confirm availability from your supplier to avoid unnecessary joints.</li>
          <li>Consult with your supplier for specific grading and treatment methods for your lumber, which can affect performance and longevity.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Frequently Asked Questions (FAQ) about Lumber Calculation</h2>

        <h3 className="text-xl font-medium mt-4">Q: Does this calculator account for joins and overlaps?</h3>
        <p className="mb-4 text-lg leading-7">A: No. This tool assumes boards are placed side-by-side without gaps or overlaps. For decking, siding, or other installations that require spacing or overlap, manually adjust the effective board width or add a waste percentage.</p>

        <h3 className="text-xl font-medium mt-4">Q: Why are board sizes given in inches?</h3>
        <p className="mb-4 text-lg leading-7">A: Lumber is commonly specified by nominal inches (e.g., 2x4). The calculator converts these nominal inch values to meters for metric calculations using a conversion factor (1 in = 0.0254 m).</p>

        <h3 className="text-xl font-medium mt-4">Q: Should I add extra boards?</h3>
        <p className="mb-4 text-lg leading-7">A: Yes. Always add extra material to account for cutting waste, mistakes, and defective boards. Typical allowances range from 5% to 15% depending on the complexity of the job.</p>

        <h3 className="text-xl font-medium mt-4">Q: What types of lumber are best for various projects?</h3>
        <p className="mb-4 text-lg leading-7">A: The best type of lumber depends on the specifics of your project. Softwoods are usually suitable for framing and indoor projects, while hardwoods are favored for furniture and high-traffic areas. Consider factors like weather durability and aesthetics.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Need More Precision in Your Lumber Calculation?</h2>
        <p className="mb-4 text-lg leading-7">For framing, structural members, or projects that require precise quantities by linear foot/board foot, use a more detailed estimator that accounts for board thickness, orientation, and standard lengths. This calculator is designed for quick, practical estimates for material planning.</p>
        <p className="mb-4 text-lg leading-7">
          Remember, proper planning is crucial in construction. By using this Lumber Calculator and following the tips and advice outlined here, you'll be better prepared to tackle your woodworking projects effectively.
        </p>
      </section>
    </article>
  );
}
