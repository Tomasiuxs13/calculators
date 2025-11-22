import React from 'react';

export default function HeartRateCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Heart Rate Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Heart rate calculation is essential for understanding your cardiovascular health. It helps you determine your maximum heart rate, resting heart rate, and target heart rate zones for effective workouts. Knowing these metrics can guide you in optimizing your exercise routine and achieving your fitness goals.
        </p>
        <p className="mb-4 text-lg leading-7">
          Our heart rate calculator allows you to input your age and resting heart rate to calculate your maximum heart rate and target heart rate zones. This tool is beneficial for athletes, fitness enthusiasts, and anyone looking to monitor their heart health.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate Your Heart Rate
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate your maximum heart rate, subtract your age from 220. Your target heart rate zones are typically expressed as a percentage of your maximum heart rate. For example, the fat burn zone is 50-60% of your maximum heart rate, while the cardio zone is 60-70% and the peak zone is 80-90%.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Max HR = 220 - Age
          </code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-blue-600">Target HR = Resting HR + (Max HR - Resting HR) × (Zone Percentage)</strong>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Why Knowing Your Heart Rate is Important
        </h2>
        <p className="mb-4 text-lg leading-7">
          Monitoring your heart rate during exercise helps ensure that you are training in the correct heart rate zone to meet your fitness goals. For example, training in the fat burn zone is ideal for weight loss, while training in the cardio zone improves endurance and overall heart health. Understanding these concepts can make a significant difference in your fitness journey.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, being aware of your heart rate can help prevent overexertion and reduce the risk of injury. Always listening to your body and adjusting your workout intensity based on your heart rate readings can greatly enhance your workout efficacy.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Heart Rate Monitoring
        </h2>
        <p className="mb-4 text-lg leading-7">
          Heart rate monitoring is valuable in various scenarios, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">1. Weight loss programs: Targeting specific heart rate zones to maximize fat loss.</li>
          <li className="mb-2">2. Athletic training: Ensuring that you’re training effectively for your sport.</li>
          <li className="mb-2">3. Rehabilitation: Monitoring heart rate during recovery post-injury.</li>
          <li className="mb-2">4. General health: Keeping track of heart rate to maintain cardiovascular health.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">1. What is a normal resting heart rate?</h3>
        <p className="mb-4 text-lg leading-7">
          A normal resting heart rate for adults typically ranges from 60 to 100 beats per minute.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. How can I lower my heart rate?</h3>
        <p className="mb-4 text-lg leading-7">
          Regular aerobic exercise, adequate hydration, stress management practices, and a healthy diet can help lower your resting heart rate over time.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. Can heart rate vary with age?</h3>
        <p className="mb-4 text-lg leading-7">
          Yes, as you age, your maximum heart rate tends to decrease. It's essential to adjust your heart rate training zones as you get older.
        </p>
      </section>
    </article>
  );
}
