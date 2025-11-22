import React from 'react';

export default function CarpetCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Carpet Calculator — How Much Carpet Do I Need?</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Carpet Calculator to quickly estimate how much carpet you need for a room. Enter the room's length and width (in meters or feet) and include a waste percentage to account for cuts, seams, and pattern matching. The tool converts measurements to square meters, calculates the base area, adds waste, and shows the total carpet required.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator is an essential tool for homeowners, renters, and contractors alike, simplifying the carpet selection process and ensuring you purchase the right amount of material for your space.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why include waste in your carpet calculation?</h2>
        <p className="mb-4 text-lg leading-7">
          Waste accounts for leftover pieces, trimming, and matching patterns. Typical waste allowances range from 5% for simple rooms to 15% or more for complex layouts or patterned carpet. This calculator lets you choose a custom waste percentage so you can plan accordingly, ensuring your final carpet installation looks flawless and professional.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Carpet Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator performs the following steps automatically, streamlining the process for you:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg leading-7">
          <li>Convert length and width to meters (if you entered feet).</li>
          <li>Calculate the base area: Area = Length × Width (in m²).</li>
          <li>Calculate waste: Waste Area = Area × (Waste % / 100).</li>
          <li>Calculate total: Total Carpet = Area + Waste Area.</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Area (m²) = (Length × Width) + Waste% × (Length × Width)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Carpet Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          If your room is 5 m by 4 m and you allow 10% waste:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Base area = 5 × 4 = 20 m²</li>
          <li>Waste = 20 × 0.10 = 2 m²</li>
          <li>Total carpet required = 20 + 2 = 22 m²</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          The calculator uses these same steps and presents the results immediately as you type — no Calculate button required.
        </p>
        <p className="mb-4 text-lg leading-7">
          This user-friendly feature allows you to make quick decisions when selecting carpet, making it simpler to visualize the area you’ll be covering with your chosen flooring.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQ) about Carpet Calculation</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Can I enter measurements in feet?</h3>
          <p className="text-lg leading-7">Yes. Select feet (ft) from the unit dropdown. The calculator converts your input to meters internally and shows results in square meters (m²).</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">What waste percentage should I use for carpet?</h3>
          <p className="text-lg leading-7">For simple rectangular rooms, 5–10% is usually enough. For rooms with alcoves, obstructions, or patterned carpet, consider 10–15% or ask your installer for a recommendation.</p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Does the calculator account for seams or roll width?</h3>
          <p className="text-lg leading-7">This tool provides a general estimate including waste. For precise ordering (considering roll widths, seam placement, and pattern repeats), consult a professional installer or supplier.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Carpet Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Carpet Calculator is not just for homeowners planning a DIY project; it's also invaluable for interior designers, real estate agents, and property managers. By using this tool, you ensure accurate materials estimation, which saves time and reduces waste during installations.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you are re-carpeting an entire home, a commercial space, or just a single room, proper measurement and consideration of waste can have a significant impact on the overall cost and appearance of the finished project. In this way, the Carpet Calculator helps you stay on budget and achieve your desired look.
        </p>
      </section>
    </article>
  );
}
