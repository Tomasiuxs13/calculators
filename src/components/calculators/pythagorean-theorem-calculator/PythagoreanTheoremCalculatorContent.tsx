import React from 'react';

export default function PythagoreanTheoremCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pythagorean Theorem Calculator</h1>
        <meta name="description" content="Discover the Pythagorean theorem, how to calculate sides of triangles, and explore use cases with our comprehensive calculator." />
      </header>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is the Pythagorean Theorem?
        </h2>
        <p className="mb-4 text-lg leading-7">
          The Pythagorean theorem is a fundamental principle in geometry that relates the lengths of the sides of a right triangle.
          It states that the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides. This can be expressed with the formula: <code className="font-mono">c² = a² + b²</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          This theorem is widely used in various fields, including architecture, engineering, and physics, to calculate distances and angles.
          It serves as a cornerstone for more advanced mathematical concepts and applications.
        </p>
        <p className="mb-4 text-lg leading-7">
          By understanding the Pythagorean theorem, one can approach problem-solving in both academics and real-world scenarios more confidently.
          It's especially useful in construction and design where accurate angles and side lengths are critical.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Use the Pythagorean Theorem Calculator
        </h2>
        <p className="mb-4 text-lg leading-7">
          To calculate the hypotenuse of a right triangle using our calculator, simply input the lengths of sides A and B. The calculator will automatically compute the length of the hypotenuse C using the Pythagorean theorem.
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            c = √(a² + b²)
          </code>
        </div>
        <p className="mb-4 text-lg leading-7">
          For example, if side A is 3 and side B is 4, the hypotenuse C would be 5, since <code className="font-mono">5 = √(3² + 4²)</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          Additionally, our calculator can assist with finding any of the triangle’s sides if you know the length of the hypotenuse and one other side. Just input the known values and the calculator will provide the answer.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Use Cases for the Pythagorean Theorem
        </h2>
        <p className="mb-4 text-lg leading-7">
          The Pythagorean theorem is not just an academic tool; it has practical applications in many areas.
          For instance, architects frequently use it to ensure that structures are built with accurate right angles.
        </p>
        <p className="mb-4 text-lg leading-7">
          Surveyors and engineers rely on it for land and construction projects to calculate distances that are not easily measurable.
          Even in various fields of art, artists employ the theorem while creating perspective in their work.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          FAQs about the Pythagorean Theorem
        </h2>
        <p className="mb-4 text-lg leading-7">
          <strong>Q: Can I use this calculator for any right triangle?</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          A: Yes! This calculator works for any right triangle, regardless of the size of the sides. Whether it’s a small triangle used in a school project or a large triangle in a construction site, the theorem applies.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Q: What if I only know the hypotenuse?</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          A: You can rearrange the Pythagorean theorem to find the other side if you know the hypotenuse and one side. For example, if you know C and A, you can find B using <code className="font-mono">b = √(c² - a²)</code>.
        </p>
        <p className="mb-4 text-lg leading-7">
          <strong>Q: Are there any limitations to this theorem?</strong>
        </p>
        <p className="mb-4 text-lg leading-7">
          A: The theorem only applies to right triangles. It cannot be used for obtuse or acute triangles directly, but you can derive effective methods to work with those figures.
        </p>
      </section>
    </article>
  );
}
