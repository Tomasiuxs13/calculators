import React from 'react';

export default function PregnancyWeekCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <meta name="description" content="Use our Pregnancy Week Calculator to find out your current pregnancy stage and due date based on your last menstrual period." />
      
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Pregnancy Week Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Pregnancy Week Calculator to determine your current gestational age (weeks and days) and which trimester you are in. The calculator uses the first day of your last menstrual period (LMP) to estimate gestational age and the estimated due date (EDD) based on a 280-day / 40-week pregnancy. This tool is essential for expectant mothers to track their pregnancy journey accurately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
        <p className="mb-4 text-lg leading-7">
          Gestational age is commonly calculated from the first day of the last menstrual period (LMP). This calculator computes the number of days between the LMP and the selected current date, then converts that to weeks and days. The trimester is determined as follows:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>First trimester: up to 13 weeks</li>
          <li>Second trimester: 14 to 27 weeks</li>
          <li>Third trimester: 28 weeks and above</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <p className="text-sm font-mono text-gray-900">
            Gestational Age = floor((Current Date - LMP) / 7) + 1 weeks and (days remainder)
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Example</h2>
        <p className="mb-4 text-lg leading-7">
          If your last period began on 2025-03-01 and today is 2025-05-01, then the calculator finds the total days between these dates, converts to weeks and days, and displays the current week and trimester along with an estimated due date (LMP + 280 days).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Tips and considerations</h2>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>The LMP-based method assumes a regular 28-day cycle and ovulation around day 14. If your cycles are irregular, ultrasound dating may give a more accurate gestational age.</li>
          <li>This tool provides an estimate only. Please consult your healthcare provider for clinical assessment and confirmation of due dates and fetal development.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Use Cases for the Pregnancy Week Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          The Pregnancy Week Calculator can be used by expectant mothers to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-lg">
          <li>Understand their current pregnancy week and trimester.</li>
          <li>Plan upcoming prenatal appointments.</li>
          <li>Track fetal development milestones.</li>
          <li>Prepare for childbirth education classes and discussions with healthcare providers.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">What is a gestational week?</h3>
            <p className="text-lg">Gestational weeks count the age of the pregnancy from the first day of the last menstrual period. Week 1 begins on the first day of the LMP.</p>
          </div>

          <div>
            <h3 className="font-medium text-lg">How accurate is the estimated due date?</h3>
            <p className="text-lg">An LMP-based due date is a good estimate for many pregnancies but may be less accurate if your menstrual cycles are irregular. Early ultrasound is the most reliable method to date a pregnancy.</p>
          </div>

          <div>
            <h3 className="font-medium text-lg">Can I use this tool if I don't remember my LMP?</h3>
            <p className="text-lg">If you don't remember your LMP, consult your healthcare provider. They may use ultrasound measurements to estimate gestational age.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">When to contact your provider</h2>
        <p className="mb-4 text-lg leading-7">
          If you have any concerns about pregnancy dating, irregular bleeding, pain, or other symptoms, contact your healthcare provider promptly. This calculator is informational and does not replace professional medical advice. Additionally, being proactive about your pregnancy health reflects responsibility and ensures the wellbeing of both you and your baby.
        </p>
      </section>
    </article>
  );
}
