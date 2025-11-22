import React from 'react';

export default function ElectricalLoadCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Electrical Load Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Efficiently estimate your electrical load with our user-friendly calculator. Input the number of appliances, their average wattage, and the system voltage to get an accurate calculation of total wattage and current draw in amperes (A). This tool is essential for anyone involved in building and electrical planning, making estimations straightforward and dependable.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Understanding Electrical Load Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          When calculating electrical loads, it’s crucial to grasp the foundational concepts. The total electrical load is determined by summing the power ratings of all connected devices, which ensures that your electrical system can handle the demand without overloading.
        </p>
        <p className="mb-4 text-lg leading-7">
          Different appliances have varying power requirements. Thus, understanding how to calculate loads will help in proper sizing of electrical service, preventing potential hazards such as overheating and equipment failure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator implements fundamental electrical calculations:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Wattage (W) = Number of Appliances × Average Wattage per Appliance (W)
          </code>
        </div>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Current (A) = Total Wattage (W) / Voltage (V)
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Practical Example of Electrical Load Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          For instance, if you have 10 appliances, each consuming 1500 W, and they operate on a 240 V supply, the total wattage would be calculated as follows: 10 × 1500 = 15000 W. Consequently, the total current would be determined by dividing the total wattage by voltage: 15000 / 240 = 62.5 A. Thus, each appliance draws approximately 6.25 A.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Usage Tips for Electrical Load Calculations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Always round up calculated currents when selecting breakers and conductor sizes to ensure safety and compliance.</li>
          <li>Consider demand and diversity factors; not all devices will run at full load simultaneously.</li>
          <li>For special equipment such as motors and heating loads, consult manufacturer data and implement appropriate correction factors.</li>
          <li>Regularly assess and adjust your calculations based on the actual usage patterns of appliances.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions on Electrical Loads</h2>
        <div>
          <h3 className="text-xl font-medium mt-4">Is this calculator code-compliant for final designs?</h3>
          <p className="mb-2">
            No. This calculator provides quick estimates. Final designs must adhere to local electrical codes (e.g., NEC, IEC) and be verified by a licensed professional.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Should I include a safety margin in my calculations?</h3>
          <p className="mb-2">
            Yes. Including a safety margin is advisable. For feeder sizing and breaker selection, always round up and adhere to code requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Can this calculator be used for three-phase systems?</h3>
          <p className="mb-2">
            This calculator assumes a simple single-phase calculation. For three-phase systems, consult the three-phase power formula: P = sqrt(3) × V_L-L × I × power factor, and seek professional advice.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">What are the implications of overloading a circuit?</h3>
          <p className="mb-2">
            Overloading a circuit can lead to overheated wires, tripped breakers, or even electrical fires. It’s essential to calculate loads accurately to prevent such risks.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conclusion</h2>
        <p className="mb-4 text-lg leading-7">
          In conclusion, utilizing the Electrical Load Calculator empowers you to make informed decisions while planning electrical setups. Correctly assessing electrical loads ensures safety and compliance, optimizing your electrical systems for performance and reliability.
        </p>
      </section>
    </article>
  );
}
