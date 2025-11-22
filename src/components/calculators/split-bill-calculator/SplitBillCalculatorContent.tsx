import React from 'react';

export default function SplitBillCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Split Bill Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly split a restaurant or shopping bill evenly among a group, including tip. This calculator helps you determine how much each person should pay when you include a percentage-based tip and want an even split.
        </p>
        <p className="mb-4 text-lg leading-7">
          Enter the total bill amount, the number of people sharing the bill, and the tip percentage. Results are calculated automatically as you type — no need to press a button.
        </p>
        <p className="mb-4 text-lg leading-7">
          Whether you're dining out with friends or splitting a grocery bill with family, knowing how to split bills effectively can enhance your group experiences. This Split Bill Calculator ensures everyone pays their fair share while accounting for various tipping scenarios.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it Works: Split Bill Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator performs the following steps:
        </p>
        <ol className="list-decimal list-inside mb-4 text-lg space-y-2">
          <li>Calculate the total tip: Tip = Total Bill × (Tip % / 100)</li>
          <li>Add the tip to the bill: Total with Tip = Total Bill + Tip</li>
          <li>Divide evenly: Per Person = Total with Tip / Number of People</li>
        </ol>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Per Person = (Total Bill × (1 + Tip% / 100)) / Number of People
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example of Using the Split Bill Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose your total bill is $120, you're splitting between 3 people, and you want to leave an 18% tip. The calculator will compute the tip amount ($21.60), the total with tip ($141.60), and each person would pay $47.20.
        </p>
        <p className="mb-4 text-lg leading-7">
          This straightforward calculation allows you to enjoy your time with friends while ensuring fairness in billing. You can even adjust the values on the go to see how changes affect each person's payment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Split Bill Calculator</h2>
        <ul className="list-disc list-inside mb-4 text-lg space-y-2">
          <li>Round currency values if you need whole-dollar payments and adjust one person's share to cover rounding differences.</li>
          <li>If you want different people to pay different shares, use the total and tip results as a baseline and allocate manually.</li>
          <li>Use the chart to quickly compare per-person cost with and without tip.</li>
          <li>Make sure to communicate with your group about how you're splitting expenses to prevent any misunderstandings.</li>
          <li>Always double-check the calculations if you are working with large bills to ensure accuracy.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions About the Split Bill Calculator</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Do I have to include a tip?</h3>
            <p className="text-lg">No. Set the tip percentage to 0% to split only the base bill.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">What if the number of people isn't a whole number?</h3>
            <p className="text-lg">The calculator expects the number of people to be a whole number (1 or more). For fractional cases (e.g., someone pays half), adjust the inputs manually or compute their share separately.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Can I use this for currency other than USD?</h3>
            <p className="text-lg">Yes. The calculator shows numerical results. Prepend/append your local currency symbol mentally or when sharing results. When downloading the PDF, you can interpret the values in any currency.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Privacy & Notes</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator performs local calculations in your browser; no data is sent to a server. Use the PDF download to save or share results.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, it's important to note that this tool is designed for convenience and provides quick calculations for everyday use. Always ensure you double-check your entries for errors to get the most accurate billing distribution.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Split Bill Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Split Bill Calculator can be used in various situations, including:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg space-y-2">
          <li>Dining out with friends or family at restaurants.</li>
          <li>Sharing costs on shared groceries or household items.</li>
          <li>Organizing group outings or activities where expenses are shared.</li>
          <li>Managing expenses during trips or vacations with a group.</li>
          <li>Dividing costs for events or gatherings, such as parties or celebrations.</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          With this calculator, you can handle any splitting scenario seamlessly and with transparency, fostering better communication about shared expenses.
        </p>
      </section>
    </article>
  );
}
