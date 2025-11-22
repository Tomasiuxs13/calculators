import React from 'react';

export default function SleepCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Sleep Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Sleep Calculator helps you find an optimal bedtime based on how many full sleep cycles you want to complete before waking. A typical sleep cycle lasts about 90 minutes and includes both REM and deep sleep stages that are important for restorative rest.
        </p>
        <p className="mb-4 text-lg leading-7">
          By entering your planned wake time and the number of cycles you want to get, the tool will automatically calculate the recommended time to fall asleep to complete those cycles. This is useful for improving sleep quality and waking up feeling more refreshed.
        </p>
        <p className="mb-4 text-lg leading-7">
          Sleep plays a crucial role in our overall health, affecting both our mental and physical well-being. Regularly getting the right amount of sleep can help boost your mood, memory, and cognitive functions. Thus, utilizing a sleep calculator can greatly enhance your daily routine and productivity levels.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Sleep Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator subtracts the total duration of your chosen sleep cycles from your wake time. Each cycle is assumed to be 90 minutes, so total sleep time = number of cycles × 90 minutes.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Bedtime = Wake Time − (Sleep Cycles × 90 minutes)
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Example: If you need to wake up at <strong> 07:00</strong> and want <strong> 5</strong> sleep cycles, total sleep time is 5 × 90 = 450 minutes (7h 30m). Recommended bedtime: <strong> 23:30</strong> the previous night.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Usage Tips for Optimal Sleep</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Try to fall asleep at the recommended time. Account for how long it usually takes you to fall asleep and adjust accordingly.</li>
          <li>Aim for 4–6 full cycles per night (6–9 hours) depending on your age and lifestyle.</li>
          <li>Consistency is key — keep a regular sleep schedule to improve sleep quality.</li>
          <li>Create a bedtime routine that signals your body it's time to wind down.</li>
          <li>Limit screen time before bed, as blue light can interfere with sleep quality.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About Sleep</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Are sleep cycles exactly 90 minutes?</h3>
            <p className="text-base text-gray-700">Sleep cycles vary between individuals and with age, typically ranging from 80–110 minutes. This calculator uses 90 minutes as a widely accepted average.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Should I always aim for an exact number of cycles?</h3>
            <p className="text-base text-gray-700">Aiming for full cycles can help you wake up feeling refreshed. However, total sleep needs vary. Use this calculator as a guideline and listen to your body.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can this replace medical advice?</h3>
            <p className="text-base text-gray-700">No. This tool provides general guidance. If you have ongoing sleep issues or suspect a sleep disorder, consult a medical professional.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How can I improve my sleep quality?</h3>
            <p className="text-base text-gray-700">Good sleep hygiene practices like maintaining a regular sleep schedule, creating a restful environment, and managing stress can significantly improve your sleep quality.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why is sleep important?</h3>
            <p className="text-base text-gray-700">Sleep is essential for physical health, mental well-being, and overall quality of life. During sleep, your body repairs itself, consolidates memories, and rejuvenates for the day ahead.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Learn More About Sleep and Health</h2>
        <p className="mb-4 text-lg leading-7">
          For personalized recommendations, consider tracking your sleep with a wearable or a sleep diary. It's also beneficial to consult a healthcare provider for persistent problems like insomnia or sleep apnea. Understanding your sleep patterns can aid in identifying any sleep disturbances and lead to better sleep practices.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, exploring resources on sleep health can empower you to make informed decisions about your sleep habits. Engaging with sleep-focused communities can provide support and further tips on achieving restful nights.
        </p>
      </section>
    </article>
  );
}
