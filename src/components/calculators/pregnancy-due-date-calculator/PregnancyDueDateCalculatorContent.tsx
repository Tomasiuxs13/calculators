import React from 'react';

export default function PregnancyDueDateCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mt-4">Pregnancy Due Date Calculator</h1>
      <meta name="description" content="Calculate your pregnancy due date easily! Find out when your baby is expected to arrive. Use our calculator today." />

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is a Pregnancy Due Date?
        </h2>
        <p className="mb-4 text-lg leading-7">
          A pregnancy due date is an estimate of when a baby is expected to be born. It is typically calculated based on the first day of the last menstrual period (LMP) or the conception date. Understanding your due date can help you prepare for the arrival of your baby and track your pregnancy progress.
        </p>
        <p className="mb-4 text-lg leading-7">
          The average pregnancy lasts about 40 weeks, or 280 days, from the first day of the last menstrual period. This calculator helps you determine your estimated due date based on your LMP or cycle length.
        </p>
        <p className="mb-4 text-lg leading-7">
          Knowing your pregnancy due date can also assist you in making important prenatal care decisions and understanding when to attend regular check-ups. It’s crucial for parents to prepare not only for the joy of welcoming a newborn but also for the necessary lifestyle adjustments that come with parenthood.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Your Due Date
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate your due date, you can use the following formula:
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Due Date = Last Menstrual Period + 280 days
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          Simply input your last menstrual period date and average cycle length into the calculator, and it will automatically compute your estimated due date.
        </p>
        <p className="mb-4 text-lg leading-7">
          Various online tools and mobile apps simplify this process, ensuring you stay informed throughout your pregnancy. Always consult with a healthcare provider to confirm your due date and to address any questions or concerns about your pregnancy.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Common Use Cases for the Pregnancy Due Date Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          The pregnancy due date calculator is beneficial for a variety of reasons, including:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>Planning prenatal appointments and tests.</li>
          <li>Understanding key pregnancy milestones and stages.</li>
          <li>Preparing for labor and delivery logistics.</li>
          <li>Setting up a baby registry and planning for baby necessities.</li>
          <li>Joining supportive communities based on baby due months.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs about Pregnancy Due Dates
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Can due dates change?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, due dates can change based on ultrasounds and other medical assessments. Always consult your healthcare provider for updates.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">2. What if my cycle is irregular?</h3>
        <p className="mb-4 text-lg leading-7">
          If your cycle is irregular, it may be advisable to consult with a healthcare provider to determine a more accurate due date.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Why is it important to know my due date?</h3>
        <p className="mb-4 text-lg leading-7">
          Knowing your due date enables better planning for prenatal care, delivery, and the immediate adjustments needed for your family.
        </p>
      </section>
    </article>
  );
}
