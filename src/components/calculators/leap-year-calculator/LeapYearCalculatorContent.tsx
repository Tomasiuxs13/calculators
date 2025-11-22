import React from 'react';

export default function LeapYearCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a Leap Year?</h2>
        <p className="mb-4 text-lg leading-7">
          A leap year is a year that has one extra day added to keep the calendar year synchronized with the astronomical or seasonal year. In the Gregorian calendar, this extra day is added to February, making it 29 days long instead of 28.
        </p>
        <p className="mb-4 text-lg leading-7">
          Leap years are necessary because one complete orbit of Earth around the Sun takes approximately 365.2425 days. Without occasional extra days, calendar dates would slowly drift relative to the seasons. The leap year system is a critical adjustment that helps maintain seasonal alignment with our calendar.
        </p>
        <p className="mb-4 text-lg leading-7">
          Historically, the concept of leap years dates back to ancient civilizations, including the Egyptians and Romans, but the modern leap year as we know it was established by Pope Gregory XIII when he introduced the Gregorian calendar in 1582.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Leap Year Calculator: Gregorian Leap Year Rules</h2>
        <p className="mb-4 text-lg leading-7">
          The modern Gregorian rule for determining leap years is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            A year is a leap year if it is divisible by 4, except for years divisible by 100, unless they are also divisible by 400.
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Programmatically:
          </p>
          <pre className="mt-2 p-2 bg-white rounded text-sm overflow-auto font-mono">{
`if (year % 4 !== 0) -> not leap
else if (year % 100 !== 0) -> leap
else if (year % 400 !== 0) -> not leap
else -> leap`
          }</pre>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Leap Year Calculations</h2>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">2000 &mdash; Leap year (divisible by 400)</li>
          <li className="mb-2">1900 &mdash; Not a leap year (divisible by 100 but not by 400)</li>
          <li className="mb-2">2024 &mdash; Leap year (divisible by 4 and not by 100)</li>
          <li className="mb-2">2023 &mdash; Not a leap year (not divisible by 4)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use This Leap Year Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter any year into the input field. The calculator will automatically determine whether the year is a leap year according to the Gregorian rules. Use the chart toggle to visualize the result and the PDF button to download a summary of the check.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator aids in both academic and practical contexts, such as planning events, understanding historical timelines, or simply satisfying curiosity about the leap year mechanics. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for the Leap Year Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The leap year calculator can be used in various scenarios, such as:
        </p>
        <ul className="list-disc ml-6 text-lg">
          <li className="mb-2">Planning events that occur annually and require a specific date calculation.</li>
          <li className="mb-2">Educational purposes, teaching the significance of leap years in history and astronomy.</li>
          <li className="mb-2">Developing software applications that need date calculations; leap years can often cause bugs in time-related functionality.</li>
          <li className="mb-2">For writers and researchers exploring timelines that span multiple years, including historical documents.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Does this calculator work for negative years or BCE?</h3>
          <p className="text-lg mt-2 text-gray-700">The calculator applies the Gregorian arithmetic rules to any integer year. For historical years (BCE) or calendars before the Gregorian reform, astronomical and historical conventions may differ.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Why are some century years not leap years?</h3>
          <p className="text-lg mt-2 text-gray-700">Century years (divisible by 100) are only leap years if they are also divisible by 400. This correction reduces the small drift caused by treating every 4th year as a leap year.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Can I trust the calculator for future planning?</h3>
          <p className="text-lg mt-2 text-gray-700">Yes. The calculator follows the Gregorian calendar rules, which are the standard for civil calendars worldwide today. It is reliable for planning events and understanding time mechanics, ensuring accuracy regardless of how far into the future you look.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">What happens in a leap year?</h3>
          <p className="text-lg mt-2 text-gray-700">In a leap year, February has an extra day, making it 29 days long, which can affect planning for events, payroll calculations, and other date-sensitive timing.</p>
        </div>
      </section>
    </article>
  );
}
