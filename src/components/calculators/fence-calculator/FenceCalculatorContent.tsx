import React from 'react';

export default function FenceCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Fence Calculator — Estimate Panels & Posts</h1>
        <p className="mb-4 text-lg leading-7">
          The Fence Calculator helps you quickly estimate how many fence panels and posts you'll need for your project. Enter the total perimeter (in meters), the width of a single panel, and how many posts you use per panel. The tool automatically calculates exact and rounded quantities so you can plan materials and costs accurately. Whether you're building a fence for privacy, security, or decorative purposes, having the right materials is crucial.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Fence Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator divides the total perimeter by the panel width to determine the exact number of panels required. Since you can't install a fractional panel, the calculator rounds up to the next whole panel. The total number of posts is then calculated by multiplying the rounded panel count by the number of posts per panel. This ensures that you have enough posts to support your fence structure adequately.
        </p>
        
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Exact Panels = Perimeter ÷ Panel Width{`\n`}Panels Required = ceil(Exact Panels){`\n`}Total Posts = Panels Required × Posts per Panel
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: For a 100 m perimeter with 2 m panels and 2 posts per panel:
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Exact panels = 100 ÷ 2 = 50</li>
            <li>Panels required = ceil(50) = 50</li>
            <li>Total posts = 50 × 2 = 100 posts</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips for Accurate Estimates Using the Fence Calculator</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Measure the perimeter accurately, including gates and returns for a comprehensive estimate.</li>
          <li>Account for gates separately — gate frames may require additional posts.</li>
          <li>Consider ordering a small percentage of extra panels and posts to account for cuts and damaged materials, ensuring your project runs smoothly.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Fence Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Fence Calculator can be used in various situations, including residential projects, commercial fencing, and even landscaping. Whether you’re fencing in a garden, building a privacy fence around your backyard, or securing a commercial property, this tool helps you plan accurately. It’s perfect for DIY enthusiasts and contractors alike who want to ensure they're estimated materials are precise.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Fencing</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Do I need to round up panels?</h3>
          <p className="mt-2">Yes. Panels are installed as whole units. The calculator rounds up to ensure you have enough panels to cover the full perimeter.</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">How do posts per panel work?</h3>
          <p className="mt-2">Most panels share a post with adjacent panels. If you specify 2 posts per panel, that assumes each panel has a post on each end. Adjust this number based on your specific panel and post layout (some systems use fewer posts).</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Should I include gates in the perimeter?</h3>
          <p className="mt-2">Yes — include gates in the total perimeter measurement. Remember that gates often require extra posts for hinging and latching, so you may need additional posts beyond the calculator's basic estimate.</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-semibold">What kind of materials should I consider for my fence?</h3>
          <p className="mt-2">Consider the climate, purpose, and aesthetics. Common materials include wood, vinyl, metal, and chain link. Each has its durability, maintenance, and appearance characteristics.</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-xl font-semibold">How can I ensure my fence remains durable?</h3>
          <p className="mt-2">Regular maintenance, such as treating wood and checking for damage, ensures a longer lifespan. Choosing quality materials that withstand local weather conditions also contributes to durability.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Ready to Build Your Fence?</h2>
        <p className="mb-4 text-lg leading-7">
          Use the interactive calculator to experiment with different panel widths and post configurations. Download the results as a PDF to bring to your supplier or contractor for pricing and ordering. Knowing exactly what you need can save both time and money, allowing you to focus on building a durable and attractive fence for your property.
        </p>
      </section>
    </article>
  );
}
