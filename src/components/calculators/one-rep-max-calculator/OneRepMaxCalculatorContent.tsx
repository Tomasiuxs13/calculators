import React from 'react';

export default function OneRepMaxCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is a One-Rep Max (1RM)?</h2>
        <p className="mb-4 text-lg leading-7">
          A one-repetition maximum (1RM) is the maximum amount of weight you can lift for one repetition of a given exercise with proper form. It's a common strength metric used to set training loads, program intensity, and track progress over time.
        </p>
        <p className="mb-4 text-lg leading-7">
          Because testing a true 1RM can be risky, especially for beginners or when lifting very heavy, several formula-based estimates (such as Epley, Brzycki, and Lombardi) provide reliable approximations based on submaximal lifts.
        </p>
        <p className="mb-4 text-lg leading-7">
          Understanding your one-rep max is essential for athletes and fitness enthusiasts alike. It helps you in designing effective strength training programs tailored to your personal fitness goals.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the One-Rep Max Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          Enter the weight you successfully lifted and the number of repetitions performed. The calculator automatically computes estimated 1RM values using three widely-used formulas and displays a primary recommended 1RM (Epley) instantly.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">Epley: 1RM = weight × (1 + reps / 30)</code>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            The calculator also shows results from Brzycki and Lombardi for comparison:
          </p>
          <ul className="list-disc ml-5 mt-3 text-base text-gray-700">
            <li>Brzycki: 1RM = weight × (36 / (37 − reps))</li>
            <li>Lombardi: 1RM = weight × reps^0.1</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Example of Using the One-Rep Max Calculator</h2>
        <p className="mb-4 text-lg leading-7">
          If you lift 80 kg for 5 reps, the calculator will show estimated 1RM values. Epley is commonly used and will be shown as the primary estimate.
        </p>
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <p className="text-base text-gray-700"><strong>Input:</strong> 80 kg × 5 reps</p>
          <p className="text-base text-gray-700 mt-2"><strong>Estimated 1RM (Epley):</strong> ~93.33 kg</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How to Use Results Safely</h2>
        <p className="mb-4 text-lg leading-7">
          Use the estimated 1RM to program training loads (for example, percentages of 1RM for strength or hypertrophy phases). Always prioritize proper technique and consider working with a coach when lifting near maximal loads.
        </p>
        <ul className="list-disc ml-5 text-base text-gray-700">
          <li>Use a spotter or safety systems when testing heavy lifts.</li>
          <li>Estimate 1RM from submaximal reps instead of attempting true max attempts if you're less experienced.</li>
          <li>Track changes over time to monitor progress and avoid sudden jumps in load.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use Cases for One-Rep Max Calculations</h2>
        <p className="mb-4 text-lg leading-7">
          The one-rep max calculation is beneficial for various types of athletes and fitness enthusiasts. Coaches utilize 1RM estimates to develop programs that optimize performance and ensure safety. Recreational lifters can also use these estimations to structure their workouts effectively.
        </p>
        <p className="mb-4 text-lg leading-7">
          Athletes training for competitions can adjust their lifting strategies based on calculated 1RM to peak at the right time. Furthermore, understanding one-rep max helps in customizing rehabilitation programs for injured athletes, allowing them to return safely to their sport.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions About One-Rep Max</h2>
        <h3 className="text-xl font-semibold mt-4">Is the estimated 1RM exact?</h3>
        <p className="mb-4 text-base text-gray-700">No. These formulas provide estimates that are useful for programming. Individual differences mean the true 1RM may vary.</p>

        <h3 className="text-xl font-semibold mt-4">Which formula should I trust?</h3>
        <p className="mb-4 text-base text-gray-700">Epley and Brzycki are commonly used and generally reliable for moderate rep ranges (1–10). Lombardi can perform well across a broader range. Use the estimates as guidelines rather than absolute values.</p>

        <h3 className="text-xl font-semibold mt-4">Can I use this for any exercise?</h3>
        <p className="mb-4 text-base text-gray-700">These estimates work best for compound strength movements (squat, bench press, deadlift, etc.). For isolation movements or very technical lifts, accuracy may vary.</p>
        
        <h3 className="text-xl font-semibold mt-4">How often should I recalculate my 1RM?</h3>
        <p className="mb-4 text-base text-gray-700">It's a good idea to reassess your estimated 1RM every few weeks, especially after completing a training cycle, or when you notice significant changes in strength levels. Tracking progress regularly helps in making informed adjustments to your workout program.</p>
      </section>
    </article>
  );
}
