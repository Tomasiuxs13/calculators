import React from 'react';

export default function TileCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is Tile Calculation?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Tile calculation is essential for determining how many tiles you will need to cover a specific area, whether it's for flooring or wall applications. Accurate calculations ensure you purchase the right amount of tiles, reducing waste and saving money. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Our tile calculator allows you to input the area you want to cover, the size of the tiles, and the percentage of waste you want to account for. This tool helps you quickly estimate the total number of tiles required for your project.
        </p>
        <p className="mb-4 text-lg leading-7">
          The importance of accurate tile calculation cannot be understated. Incorrect estimates can lead to excess purchasing, which raises costs and increases waste. On the other hand, underestimating can cause project delays and potentially result in unqualified tiles that may no longer be available later. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Use the Tile Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          To use the tile calculator, simply enter the area in square meters that you wish to cover, the size of the tiles in centimeters, and the waste percentage you want to account for. The calculator will automatically compute the total number of tiles needed, including the waste factor.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Total Tiles = Ceiling(Area / (Tile Size in m²) * (1 + Waste Percentage))
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          This formula ensures that you have enough tiles to complete your project without running short.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for Tile Calculation
        </h2>
        <p className="mb-4 text-lg leading-7">
          Tile calculation is utilized in various situations such as home renovations, new constructions, and even commercial projects. Whether you are tiling a bathroom, kitchen, or an entire floor, our tile calculator can streamline the process. 
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, professional contractors and DIY enthusiasts alike rely on precise calculations to ensure that projects remain within budget. Misjudging tile amounts can impact labor costs as well as result in extra trips to the store, which can consume both time and resources. 
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs About Tile Calculation
        </h2>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Why is waste percentage important?</h3>
        <p className="mb-4 text-lg leading-7">
          Accounting for waste is crucial because cuts and breakages are inevitable during installation. This helps ensure that you have enough tiles on hand to address any unforeseen issues that may arise.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Can I use the calculator for different tile sizes?</h3>
        <p className="mb-4 text-lg leading-7">
          Absolutely! Our tile calculator is versatile and can handle various tile sizes. Just input the dimensions accurately to get the right estimate for your specific project.
        </p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">What if I need to make adjustments later?</h3>
        <p className="mb-4 text-lg leading-7">
          If your plans change, simply re-enter your new dimensions and waste percentage in the calculator to get up-to-date estimates. It’s an easy way to stay on top of your project needs!
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Conclusion
        </h2>
        <p className="mb-4 text-lg leading-7">
          In conclusion, using a tile calculator simplifies the process of tile calculation, ensuring you have a clear understanding of how many tiles you'll need for your project. Accurate calculations enable you to plan better and avoid unnecessary expenses, making your tiling project more efficient. Remember to consider waste, tile size, and area when using the calculator for optimal results.
        </p>
      </section>
    </article>
  );
}
