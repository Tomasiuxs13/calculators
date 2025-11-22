import React from 'react';

export default function FlooringCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Flooring Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use the Flooring Calculator to quickly estimate the amount of flooring material required for a room. Enter the room length and width (in meters) and include a waste percentage to account for cutting, breakage, and pattern matching. The calculator auto-updates as you type and provides the base area, additional waste area, and the total area to purchase. Whether you're renovating your home or ready to embark on a new construction project, knowing the right amount of flooring for your space is crucial for both budget and aesthetic reasons.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Flooring Calculations Made Easy</h2>
        <p className="mb-4 text-base leading-7">
          The calculator follows a straightforward calculation:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Area (m²) = Length (m) × Width (m)
            <br />
            Total with Waste (m²) = Area × (1 + Waste % / 100)
          </code>
        </div>

        <h3 className="text-lg font-medium mt-4">Example</h3>
        <p className="mb-4">
          For a room 5 m long and 4 m wide with 10% waste:
        </p>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Base area = 5 × 4 = 20 m²</li>
          <li>Waste = 20 × 0.10 = 2 m²</li>
          <li>Total to purchase = 22 m²</li>
        </ul>

        <p className="mb-4 text-base">
          The calculator will show these numbers immediately when you load the page thanks to sensible default values. Adjust the inputs to match your actual room dimensions. Make sure to double-check your measurements to ensure accuracy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Accurate Flooring Estimates</h2>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Measure your room at multiple points if walls are not perfectly straight and use the largest measurement.</li>
          <li>Increase waste percentage for diagonal patterns, mosaics, or rooms with many cuts (12–15% is common for complex layouts).</li>
          <li>Always round up when purchasing materials — suppliers may sell in full boxes only.</li>
          <li>Consider future renovations. If you're planning additional changes, it might be wise to add a little extra material now.</li>
          <li>Discuss your project with your installer. They can provide insights based on their experience and the type of flooring you choose.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Flooring Calculator</h2>
        <p className="mb-4 text-base">
          The Flooring Calculator is beneficial for a variety of projects, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Homeowners replacing old flooring who want to estimate costs before visiting the store.</li>
          <li>Contractors needing quick calculations on-site for client presentations.</li>
          <li>Property managers budgeting for renovations in rental units.</li>
          <li>DIY enthusiasts looking to tackle their flooring projects without professional help.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Flooring</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Can I use this for tiles or planks?</h4>
            <p className="text-base">Yes. This tool provides the area in square meters. To convert area into number of tiles or boxes, divide the total area by the coverage area of one tile/box (account for grout gaps when necessary).</p>
          </div>

          <div>
            <h4 className="font-medium">What waste percentage should I use?</h4>
            <p className="text-base">For straight-lay plank flooring, 5–8% is common. For diagonal installs, complex cuts, or patterned tiles, use 10–15% or more. When in doubt, consult your installer or supplier.</p>
          </div>

          <div>
            <h4 className="font-medium">Does the calculator consider doorways and closets?</h4>
            <p className="text-base">No. This calculator computes gross area. Subtract areas for large permanent fixtures if you need a net material estimate, but many installers recommend ordering a bit extra rather than risking a shortage.</p>
          </div>

          <div>
            <h4 className="font-medium">What if my room has an irregular shape?</h4>
            <p className="text-base">For irregularly shaped rooms, divide the room into smaller sections, calculate each section's area, and then sum the areas to get the total. This will give you a more accurate estimate for flooring needs.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Need More Precision with Your Flooring Calculations?</h2>
        <p className="text-base">If you know the tile/plank dimensions, calculate the area covered by a single tile and divide the total area (including waste) by that coverage to find the number of tiles/boxes required. Always round up to the next whole box. If you're unsure about your calculations, consulting a professional can save you time and money in the long run.</p>
      </section>
    </article>
  );
}
