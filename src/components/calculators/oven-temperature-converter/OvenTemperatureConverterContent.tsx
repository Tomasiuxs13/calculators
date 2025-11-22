import React from 'react';

export default function OvenTemperatureConverterContent() {
  return (
    <article className='space-y-6 text-gray-700 leading-relaxed'>
      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0'>
          Oven Temperature Conversion Guide
        </h2>
        <p className='mb-4 text-lg leading-7'>
          Easily convert oven temperatures between Celsius, Fahrenheit, and traditional gas marks. This tool helps when following recipes from different regions or converting old cookbooks that reference gas marks instead of modern temperature scales. Understanding and mastering oven temperature conversions is essential for any home chef.
        </p>
        <p className='mb-4 text-lg leading-7'>
          Whether you are baking cookies at a friend's house or trying out an international recipe, knowing the correct oven temperature ensures your dishes turn out perfectly every time.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>How the Converter Works for Oven Temperature</h2>
        <p className='mb-4 text-lg leading-7'>
          The converter first normalizes the input temperature to Celsius as the base unit, then converts from Celsius to the desired target unit. Fahrenheit uses the standard linear formula, and gas marks are converted using a commonly accepted mapping with linear interpolation for fractional gas mark values. 
        </p>

        <div className='bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r'>
          <code className='text-base font-mono text-gray-900'>
            Celsius is used as the base unit, then converted to the requested unit
          </code>
        </div>

        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
          <p className='text-base text-gray-700'>
            Common formulas used in oven temperature conversion:
          </p>
          <ul className='list-disc list-inside mt-2 text-gray-700'>
            <li className='mb-1'>Fahrenheit to Celsius: C = (F - 32) × 5/9</li>
            <li className='mb-1'>Celsius to Fahrenheit: F = C × 9/5 + 32</li>
            <li className='mb-1'>Gas marks are mapped to Celsius and interpolated for fractional values</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Examples of Oven Temperature Conversion</h2>
        <p className='mb-4 text-lg leading-7'>
          Try these example conversions with the calculator:
        </p>
        <ul className='list-disc list-inside text-gray-700'>
          <li className='mb-2'>180 C to F = 356 F (approximately)</li>
          <li className='mb-2'>350 F to C = 176.67 C (approximately)</li>
          <li className='mb-2'>Gas mark 4 to C = 177 C (typical mapping)</li>
          <li className='mb-2'>Gas mark 6 to F = 400 F (typical mapping)</li>
        </ul>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Frequently Asked Questions about Oven Temperature</h2>

        <div className='mb-4'>
          <h3 className='text-xl font-semibold text-gray-900'>What is a gas mark?</h3>
          <p className='text-lg leading-7 text-gray-700'>
            Gas marks are a traditional British oven temperature scale commonly used on older recipes. They range from 1 to 9, where higher numbers indicate higher temperatures. Modern recipes typically use Celsius or Fahrenheit, making understanding gas marks essential for cooking from these recipes.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-xl font-semibold text-gray-900'>Are gas mark conversions exact?</h3>
          <p className='text-lg leading-7 text-gray-700'>
            Gas mark conversions are approximate and based on commonly accepted mappings. The converter interpolates between these standard points for fractional gas marks, which is sufficient for most cooking needs. Always remember to check your dish while cooking, as oven performance can vary.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-xl font-semibold text-gray-900'>Why do results vary slightly between sources?</h3>
          <p className='text-lg leading-7 text-gray-700'>
            Different cookbooks and manufacturers may use slightly different mappings for gas marks and rounding conventions. Use the converter as a practical guide and always monitor your dish, especially when adapting recipes to ensuring optimal results.
          </p>
        </div>

        <div className='mb-4'>
          <h3 className='text-xl font-semibold text-gray-900'>Where can I find reliable oven temperature conversions?</h3>
          <p className='text-lg leading-7 text-gray-700'>
            Many online resources, including cooking websites and culinary blogs, offer reliable oven temperature conversions. Additionally, using well-reviewed cookbooks can provide accurate information for converting temperatures, especially for specialized recipes.
          </p>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-bold text-gray-900 mb-4 mt-8'>Tips for Best Results in Oven Temperature Conversion</h2>
        <ul className='list-disc list-inside text-gray-700'>
          <li className='mb-2'>Preheat your oven to the converted temperature before baking for consistent results.</li>
          <li className='mb-2'>Allow for slight adjustments based on your oven calibration. Some ovens can be off by as much as 25°F from the displayed temperature.</li>
          <li className='mb-2'>Use an oven thermometer if precision is critical, especially for delicate baked goods.</li>
          <li className='mb-2'>Familiarize yourself with cooking times for various temperatures to aid in timing your meals better.</li>
        </ul>
      </section>
    </article>
  );
}
