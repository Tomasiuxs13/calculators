import React from 'react';

export default function CyclingCalorieBurnCalculatorContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>What is the Cycling Calorie Burn Calculator?</h2>
        <p className='mb-4 text-lg leading-7'>
          The Cycling Calorie Burn Calculator estimates the number of calories you burn while cycling. It uses standard metabolic equivalent (MET) values mapped to average cycling speeds, along with your body weight and the duration of exercise, to provide an estimate of energy expenditure in kilocalories (kcal).
        </p>
        <p className='mb-4 text-lg leading-7'>
          This tool is useful for cyclists tracking energy expenditure for weight management, training planning, or general fitness monitoring. Results are estimates and may vary based on individual physiology and cycling conditions.
        </p>
        <p className='mb-4 text-lg leading-7'>
          Whether you're looking to lose weight or simply want to stay fit, understanding how many calories you burn while cycling can help you make informed decisions about your exercise routine and dietary choices. 
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>How the Calculation Works</h2>
        <p className='mb-4 text-lg leading-7'>
          We use MET values (Metabolic Equivalent of Task) assigned to typical cycling speed ranges. The formula used:
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>Calories per minute = (MET × 3.5 × weight(kg)) / 200</code>
        </div>

        <p className='mb-4 text-lg leading-7'>
          Total calories burned = Calories per minute × Duration (minutes).
        </p>
        <p className='mb-4 text-lg leading-7'>
          By entering your weight, the duration of your ride, and the average speed you're cycling at, you can get a fairly accurately calculated energy expenditure value tailored to your specific conditions.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Example of Using the Cycling Calorie Burn Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          Suppose you weigh 70 kg, cycle for 60 minutes at an average speed of 20 km/h. Typical MET for ~20 km/h is about 8. Using the formula:
        </p>

        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            Calories per minute = (8 × 3.5 × 70) / 200 = 9.8 kcal/min
          </p>
          <p className='text-base text-gray-700 mt-2'>
            Total calories = 9.8 × 60 = 588 kcal
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Tips for Accurate Results</h2>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Use your true average speed for the duration of the ride, not just peak speed.</li>
          <li>Consider conditions like wind, elevation, and bike type — these can increase or decrease effort.</li>
          <li>For more precise tracking, use a power meter or heart-rate-based methods tailored to your physiology.</li>
          <li>Experiment with different riding conditions to understand how they impact your calorie burn.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Frequently Asked Questions about Cycling Calorie Burn</h2>
        <div>
          <h3 className='text-xl font-semibold mt-4'>Is this calculator 100% accurate?</h3>
          <p className='mb-4 text-lg leading-7'>No. This calculator provides an estimate based on generalized MET values. Individual metabolic rates, body composition, and effort levels cause variation.</p>

          <h3 className='text-xl font-semibold mt-4'>Can I use miles per hour instead of km/h?</h3>
          <p className='mb-4 text-lg leading-7'>This tool expects speed in km/h. If you have mph, multiply by 1.609 to convert to km/h before entering.</p>

          <h3 className='text-xl font-semibold mt-4'>How should I use this calculator for training?</h3>
          <p className='mb-4 text-lg leading-7'>Use it to estimate energy expenditure per ride and track trends over time. For training load and adaptation, combine with intensity metrics like power or heart rate.</p>

          <h3 className='text-xl font-semibold mt-4'>Can this calculator help with weight loss?</h3>
          <p className='mb-4 text-lg leading-7'>Absolutely! By tracking calories burned, you can adjust your diet and exercise to achieve your weight loss goals effectively.</p>

          <h3 className='text-xl font-semibold mt-4'>What should I do if I experience discrepancies in calorie estimates?</h3>
          <p className='mb-4 text-lg leading-7'>If you find significant differences in estimated calorie burn, consider factors such as fitness level and metabolic differences. Consulting with a fitness professional can provide tailored advice.</p>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Use Cases of the Cycling Calorie Burn Calculator</h2>
        <p className='mb-4 text-lg leading-7'>
          This calculator can be beneficial for various users including recreational cyclists, competitive athletes, and fitness enthusiasts. 
        </p>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Recreational cyclists looking to manage their weight and track progress.</li>
          <li>Competitive athletes analyzing their energy expenditure to optimize training plans.</li>
          <li>Fitness enthusiasts monitoring their workout intensity and calorie burn for overall health.</li>
        </ul>
      </section>
    </article>
  );
}
