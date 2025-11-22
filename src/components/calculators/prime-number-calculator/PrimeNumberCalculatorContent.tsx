import React from 'react';

export default function PrimeNumberCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">Prime Number Calculator</h1>
        <p className="mb-4 text-lg leading-7">
          Use this tool to determine whether a given integer is prime and to compute its prime factors. The calculator performs the check automatically as you type and provides a breakdown of prime factors along with a simple chart for analysis. 
          This calculator is essential for anyone needing quick and reliable assistance in understanding prime numbers, and it serves as an educational tool for students exploring number theory.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">What is a Prime Number?</h2>
        <p className="mb-4 text-lg leading-7">
          A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Common examples include 2, 3, 5, 7, 11, and 13. 
          These numbers are fundamental in mathematics, particularly in number theory, due to their role as the building blocks of all integers (every integer can be expressed as a product of prime numbers).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How the Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator checks primality by testing divisibility up to the square root of the number. If the number is not prime, the tool also computes its prime factorization using trial division (starting with 2 and then odd numbers). 
          This method is efficient for small to moderately large integers and is suitable for educational use and quick checks. It can help in practical applications where prime factorization is needed, such as cryptography.
        </p>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            isPrime(n) = true if no divisor d (2 ≤ d ≤ √n) divides n
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Examples of Prime Numbers and Their Factoring</h2>
        <div className="space-y-3">
          <div className="bg-white border rounded-lg p-4">
            <p className="font-semibold">Input: 17</p>
            <p>Result: Prime</p>
            <p>Prime Factors: 17</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="font-semibold">Input: 84</p>
            <p>Result: Not Prime</p>
            <p>Prime Factors: 2, 2, 3, 7</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">When to Use This Prime Number Calculator Tool</h2>
        <p className="mb-4 text-lg leading-7">
          This calculator is ideal for students, hobbyists, and developers who need quick prime checks or factor lists for integers. 
          For cryptographic applications or very large integers, specialized algorithms and libraries are recommended. While this tool aids in basic calculations, deeper mathematical principles may require more sophisticated methods.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">FAQ about Prime Numbers and Their Calculation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: What input range is supported?</h3>
            <p> A: The calculator accepts non-negative integers. Extremely large integers may be slow due to the simple trial division algorithm.</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: Does the calculator show repeated prime factors?</h3>
            <p> A: Yes. For composite numbers, the prime factorization is shown with multiplicity (e.g., 84 → 2, 2, 3, 7).</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: Is zero or one considered prime?</h3>
            <p> A: No. 0 and 1 are not prime numbers.</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: How can I learn more about prime numbers?</h3>
            <p> A: There are many resources available online, including educational websites and mathematics textbooks, that explore prime numbers, their properties, and their importance in various fields.</p>
          </div>

          <div>
            <h3 className="font-semibold">Q: Are prime numbers used in computer science?</h3>
            <p> A: Yes, prime numbers are fundamental in encryption algorithms and hashing functions, making them crucial for data security.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
