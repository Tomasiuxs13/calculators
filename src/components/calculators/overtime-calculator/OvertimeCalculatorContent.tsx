import React from 'react';

export default function OvertimeCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Overtime Pay Calculator</h1>
      <p className="mb-4 text-lg leading-7">
        This Overtime Pay Calculator helps simplify the complex process of calculating your earnings for hours worked beyond the standard workweek. Overtime pay is essential for employees who often work beyond their contracted hours, and understanding how it works can help you ensure you are compensated fairly.
      </p>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Overtime Pay?</h2>
        <p className="mb-4 text-lg leading-7">
          Overtime pay is the additional compensation earned for hours worked beyond the standard or contracted working hours. Employers often pay a higher rate for overtime to fairly compensate employees for extra time worked. This calculator helps you determine regular pay, overtime pay, and total pay based on hours worked, hourly rate, and the overtime multiplier. Typically, overtime is paid at a rate higher than the standard pay, usually defined by the employer or local labor laws.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use the Overtime Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the number of regular hours worked, overtime hours, your hourly rate, and the overtime multiplier (for example 1.5 for "time and a half"). The calculator updates automatically—no need to click a button. This removes the hassle and allows you to see your potential earnings in real-time.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900 block">Regular Pay = Regular Hours × Hourly Rate</code>
          <code className="text-base font-mono text-gray-900 block mt-2">Overtime Pay = Overtime Hours × Hourly Rate × Overtime Multiplier</code>
          <code className="text-base font-mono text-gray-900 block mt-2">Total Pay = Regular Pay + Overtime Pay</code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">Example: If you work 40 regular hours, 5 overtime hours, at $25/hour with a 1.5 multiplier:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Regular Pay = 40 × $25 = $1,000.00</li>
            <li>Overtime Pay = 5 × $25 × 1.5 = $187.50</li>
            <li>Total Pay = $1,000.00 + $187.50 = $1,187.50</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Tips & Best Practices for Maximizing Overtime Pay</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Confirm which hours are considered overtime by your employer or local labor laws—definitions may vary.</li>
          <li>Use the correct overtime multiplier (commonly 1.5 or 2.0) as specified in your contract.</li>
          <li>Round hours consistently (for example to the nearest quarter hour) if your employer requires it.</li>
          <li>Keep track of your hours worked meticulously to ensure accurate calculations and avoid disputes.</li>
          <li>Communicate with your employer regarding any scheduled overtime and ensure you understand the pay structure.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions about Overtime Pay</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Does this calculator account for taxes?</h3>
            <p className="text-lg text-gray-700 mt-2">No — this tool calculates gross pay before taxes and deductions. For net pay, apply tax rates and any withholdings applicable to your situation.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">What if my overtime rate changes week to week?</h3>
            <p className="text-lg text-gray-700 mt-2">If rates vary, calculate each pay period separately and sum the results. This calculator is designed for a single pay period with uniform rates.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Is overtime always paid after 40 hours?</h3>
            <p className="text-lg text-gray-700 mt-2">Not always. While 40 hours is a common threshold in many jurisdictions and companies, local labor laws or contracts may define different thresholds. Check your local regulations or employment agreement.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">How can I ensure I receive my overtime pay?</h3>
            <p className="text-lg text-gray-700 mt-2">Always keep a record of your hours worked. Report any discrepancies to your HR department promptly and know your rights as an employee based on local laws.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Can salaried employees receive overtime pay?</h3>
            <p className="text-lg text-gray-700 mt-2">Yes, in some cases. It depends on the employee classification and local labor laws. Some salaried positions are exempt from overtime, while others are entitled to it.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
