import React from 'react';

export default function TimeCardCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Time Card Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Quickly calculate total hours worked from clock in/out times and a lunch break. This calculator handles standard daytime shifts as well as overnight shifts that pass midnight. The Time Card Calculator is designed for workers, employers, and payroll professionals who need to simplify their time tracking and payroll calculations.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding how to accurately calculate your worked hours can not only save you money but also ensure compliance with labor laws. Whether you're figuring out pay for yourself or for your employees, using the Time Card Calculator can streamline the process and offer clarity on worked hours.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Time Card Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter your Clock In and Clock Out times (in 24-hour format) along with the length of your lunch break in minutes. The calculator will:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Convert your times to minutes since midnight</li>
          <li>Adjust calculations for overnight shifts (if Clock Out is earlier than Clock In, it assumes the next day)</li>
          <li>Subtract the specified break minutes from the total</li>
          <li>Return total minutes and hours worked for your records</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Minutes Worked = (ClockOut - ClockIn [+24h if needed]) - BreakMinutes
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Calculating Hours with the Time Card Calculator</h2>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Standard Day Calculation</h3>
          <p className="text-base leading-7">For example, if you clock in at 09:00 and clock out at 17:00 with a lunch break of 30 minutes, your total time worked would be 7.50 hours (7 hours and 30 minutes).</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Overnight Shift Calculation</h3>
          <p className="text-base leading-7">If you clock in at 22:00 and clock out at 06:00 with a 30-minute lunch break, this totals to 7.50 hours worked (7 hours and 30 minutes), accurately reflecting overnight shift calculations.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Short Shift Calculation</h3>
          <p className="text-base leading-7">If you clock in at 08:30, clock out at 11:45, and take no lunch break, it amounts to 3.25 hours (3 hours and 15 minutes).</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Time Card Calculator</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the 24-hour time format, as the browser time input will automatically handle this formatting for you.</li>
          <li>If you forget to subtract break time, ensure to set your Lunch Break to 0 to avoid inaccuracies in your results.</li>
          <li>The calculator will prevent negative values — if your break time exceeds your shift time, the result will be returned as 0 hours.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FAQs About the Time Card Calculator</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium">Q: Can this calculator handle multiple breaks?</h3>
            <p>A: The Time Card Calculator accommodates only a single total break duration. For multiple breaks, simply sum their lengths and enter the total in minutes.</p>
          </div>

          <div>
            <h3 className="font-medium">Q: What if my shift extends past midnight?</h3>
            <p>A: If the Clock Out time precedes the Clock In time, the calculator assumes that the Clock Out is on the following day and adjusts the resulting total hours accordingly.</p>
          </div>

          <div>
            <h3 className="font-medium">Q: Can I export my results from the calculator?</h3>
            <p>A: Yes! The calculator includes an option to export your inputs and results as a PDF, creating a clear and simple report for your records.</p>
          </div>

          <div>
            <h3 className="font-medium">Q: Is this calculator suitable for different industries?</h3>
            <p>A: Absolutely, the Time Card Calculator is versatile and can be used by various professions, including shifts in retail, healthcare, administration, and more.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Accessibility & SEO</h2>
        <p className="text-base leading-7">This page implements semantic HTML headings and utilizes descriptive labels for inputs, ensuring support for screen readers. Our content is carefully optimized for search engines by using clear headings, providing valuable examples, and addressing common user questions to enhance user engagement and discoverability.</p>
      </section>
    </article>
  );
}
