import React from 'react';

export default function SolarPanelCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Solar Panel Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this calculator to estimate how many solar panels you need to cover your monthly electricity usage, how much roof area those panels will occupy, and the expected monthly energy production and savings. The solar panel calculator factors in average sunlight hours and typical system performance losses to provide a realistic estimate for your energy needs.
        </p>
        <p className="mb-4 text-lg leading-7">
          With the increasing demand for renewable energy sources, understanding how to optimize solar panel usage is essential for homeowners and businesses alike. Solar panels not only help reduce electricity costs but also contribute to a more sustainable environment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Solar Panel Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator converts your monthly electricity consumption (kWh) to a base monthly production requirement and estimates production per panel using the formula below. It then determines how many panels are required and whether your available roof area can accommodate them.
        </p>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Monthly Production per Panel = Panel kW × Sunlight Hours/Day × Performance Ratio × Days/Month
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          We use common assumptions: a 350 W (0.35 kW) panel, a performance ratio of 0.75 to account for losses, and an average panel area of 1.7 m². These assumptions can be adjusted in the guidance below if you know your panel specifications. Being familiar with your energy consumption patterns and local solar conditions will give you a more precise calculation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example Usage of the Solar Panel Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          With the default values (500 kWh/month, 50 m² roof, 5 sunlight hours/day), the calculator will:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Compute energy produced per panel per month based on the inputs and parameters.</li>
          <li>Estimate the number of solar panels required to meet 500 kWh/month.</li>
          <li>Calculate the roof area required and compare it with the available roof area.</li>
          <li>Provide an estimated monthly savings using a sample electricity cost (e.g., $0.13/kWh).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips & Real-World Considerations for Solar Panel Installation</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Panel wattage varies: newer panels may be 400W+. If you know your panel wattage, adjust the assumptions in your planning.</li>
          <li>Roof tilt and orientation affect production. South-facing roofs (in the northern hemisphere) typically perform best.</li>
          <li>Shading from trees or nearby buildings can significantly reduce output.</li>
          <li>System losses include inverter efficiency, temperature losses, wiring, and soiling—our performance ratio approximates these.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About Solar Panels</h2>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Can I rely on the calculator for final system design?</h3>
          <p className="text-base text-gray-700">This calculator provides an initial estimate. For a final system design, consult a qualified solar installer who will evaluate structural roof constraints, local solar irradiance data, electrical requirements, and local regulations.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">What if my roof area is too small?</h3>
          <p className="text-base text-gray-700">If your available roof area cannot support the number of panels required, consider partial coverage (offsetting part of your electricity), ground-mounted systems (if space permits), or community solar programs.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">How accurate are savings estimates?</h3>
          <p className="text-base text-gray-700">Savings are estimated using a sample cost per kWh and the projected production. Your actual savings will depend on your local electricity rates, time-of-use tariffs, net metering policies, and how much of the produced energy you consume on-site.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Next Steps to Optimize Your Solar Panel Usage</h2>
        <p className="mb-4 text-lg leading-7">
          Enter your actual monthly kWh, roof area, and average sunlight hours per day above to see tailored estimates. Use the chart toggle to visualize consumption vs production and download a PDF summary of inputs and results for consultations with installers. Additionally, consider reaching out to professionals for a comprehensive assessment to ensure your solar system meets your energy needs effectively.
        </p>
      </section>
    </article>
  );
}
