import React from 'react';

export default function RelationshipDurationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">How Long Has Your Relationship Lasted?</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Relationship Duration calculator to determine the length of a relationship between two dates. Enter the start date and the current (or end) date to get an instant breakdown in years, months, and days as well as the total number of days.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding the length of a relationship can provide valuable insights into how two individuals have grown together. Whether you’re celebrating a milestone or reflecting on your journey, knowing the duration can help reinforce your bond. 
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why this calculator is useful</h2>
        <p className="mb-4 text-lg leading-7">
          Knowing the exact duration of a relationship is handy for anniversaries, legal matters, personal records, and reflection. This tool handles leap years and varying month lengths to provide an accurate, human-readable result. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, having a clear view of your relationship timeline can help in planning future celebrations, managing important dates, and even understanding patterns over the years in your relationship dynamics. 
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator computes the difference by comparing years, months, and days between the two dates. It first aligns months and days appropriately (borrowing days from the previous month when needed) and returns a clean "years, months, days" breakdown plus the absolute total of days between the dates.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Duration = (Years, Months, Days) calculated using calendar arithmetic + Total days = floor((end - start) / 1 day)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          The intuitive design of the calculator ensures that users can easily input their dates and receive an immediate output, making it accessible for anyone regardless of their technical expertise.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Examples of Relationship Duration</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg">
              Example 1: Start = 2022-06-15, Current = 2023-09-20 → Result: 1 year, 3 months, 5 days (Total: 462 days)
            </p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg">
              Example 2: Start = 2020-02-29, Current = 2021-02-28 → Handles leap year: 0 years, 11 months, 30 days (Total: 365 days)
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-4">
            <p className="text-lg">
              Example 3: Start = 2019-01-01, Current = 2023-01-01 → Result: 4 years (Total: 1461 days)
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions about Relationship Duration</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Q: What if the start date is after the current date?</h3>
            <p className="text-base">A: The tool will indicate that the start date is after the current date. If you'd like a positive duration, swap the dates or enter the true start and end dates.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: Does the calculator account for leap years?</h3>
            <p className="text-base">A: Yes. The total-day calculation uses actual JavaScript date differences (milliseconds between dates) which handles leap years. The years/months/days breakdown also accounts for varying month lengths.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: Can I save or print the result?</h3>
            <p className="text-base">A: Yes. Use the "Download PDF" function in the calculator to generate a printable summary of the inputs and results.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Q: What are some common uses for this calculator?</h3>
            <p className="text-base">A: Common uses include planning anniversary celebrations, reflecting on personal growth within the relationship, determining legal timelines, and maintaining personal records.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips for Using the Relationship Duration Calculator</h2>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li>Use the current date field to check how long a relationship has lasted up to today.</li>
          <li>For anniversaries, pick the exact start date and see the breakdown to plan celebrations.</li>
          <li>If results look unexpected, double-check timezone effects by ensuring dates are entered in YYYY-MM-DD format.</li>
          <li>Consider starting a relationship journal based on the results of the calculator to record significant moments over time.</li>
          <li>Use the breakdown provided after calculation to celebrate small milestones throughout the year.</li>
        </ul>
      </section>
    </article>
  );
}
