import React from 'react';

export default function OvulationCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is Ovulation?</h2>
        <p className="mb-4 text-lg leading-7">
          Ovulation is the phase in a menstrual cycle when an ovary releases an egg. It is the time when you are most likely to conceive if you have unprotected sexual intercourse. Understanding your ovulation date and fertile window helps with family planning — whether you are trying to conceive or avoid pregnancy.
        </p>
        <p className="mb-4 text-lg leading-7">
          This calculator estimates your ovulation date and fertile window using the first day of your last menstrual period and your average cycle length. It provides an estimated ovulation date, a fertile window (typically 5 days before ovulation through 1 day after), and an estimate for your next period.
        </p>
        <p className="mb-4 text-lg leading-7">
          Knowing your ovulation cycle is important, as it can help with timing intercourse for conception or understanding your reproductive health. This tool is designed to provide insights into your cycle and maximize your family planning efforts.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Ovulation Calculation Works</h2>
        <p className="mb-4 text-lg leading-7">
          Medical guidelines commonly estimate ovulation to occur approximately 14 days before the start of the next period. Therefore, if you know your average cycle length, the ovulation day is calculated as:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Ovulation Date = First Day of Last Period + (Average Cycle Length − 14) days
          </code>
        </div>

        <p className="mb-4 text-lg leading-7">
          The fertile window displayed by this tool covers 5 days before ovulation through 1 day after ovulation, which is a commonly used clinical range since sperm can survive in the reproductive tract for several days.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Ovulation Calculation</h2>
        <p className="mb-4 text-lg leading-7">
          Suppose the first day of your last period was June 1 and your average cycle length is 28 days. Then:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg leading-7">
          <li>Estimated ovulation: June 15 (June 1 + (28 − 14) days)</li>
          <li>Fertile window: June 10 – June 16 (5 days before through 1 day after ovulation)</li>
          <li>Estimated next period: June 29 (June 1 + 28 days)</li>
        </ul>
        <p className="mb-4 text-lg leading-7">
          Note: Individual cycles vary. This calculator provides an estimate and should not be used as a reliable method of contraception.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Ovulation</h2>

        <h3 className="text-xl font-semibold mt-4">Is this tool 100% accurate?</h3>
        <p className="mb-4 text-lg leading-7">
          No. This tool provides an estimate based on average cycle assumptions. Ovulation can be influenced by stress, illness, travel, and other factors. For precise ovulation tracking, consider ovulation predictor kits (OPKs), basal body temperature tracking, or consultation with a healthcare professional.
        </p>

        <h3 className="text-xl font-semibold mt-4">What if my cycle is irregular?</h3>
        <p className="mb-4 text-lg leading-7">
          Irregular cycles make estimation less reliable. If your cycles vary widely in length, the calculated ovulation date will be less certain. Tracking multiple months of cycle data or using medical testing can provide better insight.
        </p>

        <h3 className="text-xl font-semibold mt-4">Can I use this calculator to avoid pregnancy?</h3>
        <p className="mb-4 text-lg leading-7">
          No. Estimated ovulation and fertile windows are not reliable methods of contraception. If you need birth control or are avoiding pregnancy, consult a healthcare provider for effective options.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Should I track my symptoms during my cycle?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, tracking your symptoms — such as changes in cervical mucus or body temperature — can provide additional insights about your ovulation and help confirm the estimates provided by this calculator.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">When to See a Doctor</h2>
        <p className="mb-4 text-lg leading-7">
          If you have concerns about irregular cycles, difficulty conceiving, or symptoms affecting your menstrual health, schedule an appointment with a gynecologist or reproductive health specialist. They can provide individualized testing and advice tailored to your unique situation.
        </p>
      </section>
    </article>
  );
}
