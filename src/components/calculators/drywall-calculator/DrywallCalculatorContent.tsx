import React from 'react';

export default function DrywallCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Drywall Calculator — Sheets Needed for a Room</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly estimate how many drywall sheets you need to cover the walls of a rectangular room. Provide the room's length, width, and height in meters. This tool calculates the total wall area and divides it by the area of a drywall sheet (default: 1.22 × 2.44 m), ensuring efficiency for your construction or renovation project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works with Drywall Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator treats meters as the base unit. It computes the room perimeter (2 × (length + width)) and multiplies by the ceiling height to get the total wall area in square meters. Then it determines how many standard drywall sheets are required by dividing the wall area by the sheet area and rounding up to account for partial sheets.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Total Wall Area = 2 × (Length + Width) × Height</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Sheets Required = ceil(Total Wall Area / Sheet Area)
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Drywall Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          For a room 5 m long, 4 m wide, and 2.5 m high (default values):
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Perimeter = 2 × (5 + 4) = 18 m</li>
          <li>Total wall area = 18 × 2.5 = 45 m²</li>
          <li>Standard sheet area = 1.22 × 2.44 ≈ 2.977 m²</li>
          <li>Sheets required = ceil(45 / 2.977) = 16 sheets</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips & Best Practices for Effective Drywall Usage</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-7">
          <li>Always buy a few extra sheets (5–10%) to account for cuts, mistakes, and waste.</li>
          <li>Consider openings (doors and windows) if you want a more precise estimate — subtract their areas from the total wall area.</li>
          <li>Standard sheet sizes vary by region. Use the sheet size selector if your supplier uses different dimensions.</li>
          <li>Plan your cuts strategically to minimize waste, and ensure you have the right tools on hand for a smooth installation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Drywall</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Does this include the ceiling?</h3>
            <p className="text-lg leading-7">No. This calculator estimates drywall for the walls only. To include the ceiling, add the ceiling area (length × width) to the total before dividing by sheet area.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">How much extra should I buy?</h3>
            <p className="text-lg leading-7">A common recommendation is to purchase an additional 5–10% to cover waste and mistakes. For complex rooms with many openings or angles, consider 10–15% extra.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I change the sheet size?</h3>
            <p className="text-lg leading-7">Yes. Use the sheet size selector in the calculator to pick a different sheet dimension. The calculator will immediately recalculate using the selected sheet area.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">More Resources on Drywall Usage</h2>
        <p className="text-lg leading-7 mb-4">For professional projects, consult a contractor or materials supplier to account for framing, openings, mechanical penetrations, and finishing materials. This ensures you get the most accurate estimate for your drywall needs.</p>
        <p className="text-lg leading-7">Additionally, consider checking out online resources and forums for tips on installation techniques and troubleshooting common drywall issues.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Drywall Calculator</h2>
        <p className="text-lg leading-7 mb-4">Whether you're a homeowner tackling a DIY renovation, a contractor estimating a job, or even a student studying construction management, this drywall calculator provides valuable insights.</p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Homeowners: Get an estimate before heading to the hardware store.</li>
          <li>Contractors: Quickly provide quotes and project deadlines to clients.</li>
          <li>Students: Use practical examples for understanding drywall installation.</li>
        </ul>
      </section>
    </article>
  );
}
