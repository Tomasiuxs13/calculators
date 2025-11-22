import React from 'react';

export default function ConcreteCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Concrete Calculator</h1>
        <p className="text-lg text-gray-600 mb-4">
          Estimate the amount of concrete needed for your projects with our comprehensive calculator. Perfect for contractors and DIY enthusiasts alike.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Concrete Calculator: Estimate Required Concrete</h2>
        <p className="mb-4 text-lg leading-7">
          Use this concrete calculator to quickly estimate how much concrete you need for slabs, foundations, patios, and other projects. Enter the length, width, and depth in meters, and the calculator will return the volume in cubic meters (m³) and liters (L). Results update automatically as you type.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How It Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator employs the simple geometric formula for the volume of a rectangular prism. This method is suitable for most simple slabs and footings.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Volume (m³) = Length (m) × Width (m) × Depth (m)</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The output is provided in cubic meters and liters (1 m³ = 1000 L). For irregular shapes, you can divide the area into regular sections or consult a professional for an accurate estimate.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose you need a concrete slab that is 5 m long, 3 m wide, and 0.1 m deep (100 mm). Using the formula:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Volume = 5 m × 3 m × 0.1 m = 1.5 m³
          </p>
          <p className="text-base text-gray-700 mt-2">
            In liters: 1.5 m³ × 1000 = 1500 L
          </p>
        </div>

        <p className="mb-4 text-lg leading-7">
          The calculator defaults to these values so you can see an immediate result on page load. This functionality helps streamline your planning process and ensures you’re making well-informed decisions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Practical Tips</h2>
        <ul className="list-disc list-inside text-lg leading-7 space-y-2">
          <li>Always account for waste and variations—add 5–10% to your estimate depending on the project.</li>
          <li>Round up to the nearest supplier package size if purchasing premixed concrete or bags.</li>
          <li>Convert depth in mm to meters by dividing by 1000 (e.g., 100 mm = 0.1 m).</li>
          <li>Consider local climate conditions that may affect setting time and curing of concrete.</li>
          <li>Plan for expansion joints in larger slabs to accommodate movement and prevent cracking.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for Our Concrete Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          This concrete calculator is versatile and can be used for a variety of projects, including:
        </p>
        <ul className="list-disc list-inside text-lg leading-7 space-y-2">
          <li>Pouring slabs for walkways, driveways, and patios.</li>
          <li>Creating structural foundations for buildings and walls.</li>
          <li>Estimating requirements for decorative concrete applications like stamped or stained surfaces.</li>
          <li>Planning for concrete piers and footings for fences and decks.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>

        <h3 className="text-xl font-semibold mt-4">Can I use this for footings and walls?</h3>
        <p className="mb-4 text-lg leading-7">Yes. For simple rectangular footings or wall sections, you can use the same volume formula. For complex or reinforced structures, consult a structural engineer.</p>

        <h3 className="text-xl font-semibold mt-4">How much extra should I order?</h3>
        <p className="mb-4 text-lg leading-7">A typical allowance is 5–10% for waste, spillage, and over-excavation. Use the higher end for large or difficult pours.</p>

        <h3 className="text-xl font-semibold mt-4">Can I convert the result to bags of cement?</h3>
        <p className="mb-4 text-lg leading-7">This calculator provides volume only. Bag counts depend on mix design and bag sizes; consult supplier specs or use a dedicated bag calculator for accurate counts.</p>

        <h3 className="text-xl font-semibold mt-4">What if my project has irregular shapes?</h3>
        <p className="mb-4 text-lg leading-7">For irregular shapes, divide the area into manageable sections and apply the formula for each section, then sum the results for the total volume required.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8">Ready to calculate?</h2>
        <p className="text-lg leading-7">Use the inputs at the top of the page to enter your dimensions. The tool updates automatically, and you can download a PDF summary of your inputs and results for future reference. Get started on your concrete project today!</p>
      </section>
    </article>
  );
}
