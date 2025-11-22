import React from 'react';

export default function TrainingZoneCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Training Zone Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this Training Zone Calculator to determine the heart rate ranges you should target during workouts for fat burn, cardio/endurance, and peak performance. The tool uses the Karvonen (heart rate reserve) method which accounts for your resting heart rate for a more personalized target. This ensures you are effectively optimizing your workout and achieving your fitness goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">How the Training Zone Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          We estimate your maximum heart rate as 220 minus your age. Then we calculate your heart rate reserve (HRR) by subtracting your resting heart rate from your max heart rate. The target heart rate for a given intensity is:
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Target HR = (HRmax − Resting HR) × Intensity + Resting HR</code>
        </div>

        <p className="mb-4 text-lg leading-7">
          Intensity values used by this calculator:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fat Burn: 50% - 60%</li>
          <li>Cardio: 60% - 70%</li>
          <li>Peak: 80% - 90%</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Example Calculation</h3>
        <p className="mb-4">
          For a 30-year-old with a resting HR of 60 bpm, estimated HRmax = 220 − 30 = 190 bpm. HRR = 190 − 60 = 130 bpm. For the Cardio zone (60–70%): lower = 130 × 0.6 + 60 = 138 bpm, upper = 130 × 0.7 + 60 = 151 bpm. This shows how precise calculations can help you maintain optimal heart rates during your workouts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Using the Results from Our Training Zone Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          Train within the computed range depending on your goals. Use Fat Burn for lower intensity endurance and fat utilization, Cardio for aerobic improvements and stamina, and Peak for high-intensity performance and anaerobic gains. Always consider how you feel and consult a professional for medical conditions. Tailoring your training to these zones can maximize your results.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            Tip: Use a heart rate monitor during workouts to stay within your target zone. Begin with shorter intervals in higher zones and gradually increase duration as fitness improves for the best outcome.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions (FAQs) about the Training Zone Calculator</h2>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium">Is the 220 − age formula accurate?</h4>
            <p className="text-base text-gray-700">The 220 − age formula is a general estimate for maximum heart rate. Individual max HR can vary. For clinical or precise training plans consider a supervised exercise test to ensure safety and accuracy.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium">Why use the Karvonen method?</h4>
            <p className="text-base text-gray-700">The Karvonen method accounts for resting heart rate, which provides a more individualized intensity target than percentages of max heart rate alone. This is essential for effective training results.</p>
          </div>

          <div>
            <h4 className="text-lg font-medium">Should I use perceived exertion instead?</h4>
            <p className="text-base text-gray-700">Both objective (HR) and subjective (Rate of Perceived Exertion) methods are useful. If you lack a reliable heart rate monitor, perceived exertion is a practical alternative to gauge exertion levels.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Safety Considerations</h2>
        <p className="mb-4 text-lg leading-7">If you have cardiovascular disease, are on heart-rate affecting medications, or have other medical concerns, consult a healthcare professional before following heart rate targets. Your safety is paramount, and addressing individual health concerns is crucial for successful training.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conclusion: Optimize Your Training Zone</h2>
        <p className="mb-4 text-lg leading-7">
          Understanding and utilizing the Training Zone Calculator can significantly enhance your training effectiveness. By knowing your target heart rate zones, you can tailor your workouts to achieve fat loss, improve endurance, or boost high-intensity performance. Remember to stay within your calculated ranges, listen to your body, and regularly assess your progress. Happy training!
        </p>
      </section>
    </article>
  );
}
