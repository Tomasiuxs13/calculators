import React from 'react';

export default function PercentageCalculatorContent() {
    return (
        <article className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Percentage Calculator</h1>
            <section>
                <h2 className="text-xl font-semibold mb-2">What is a Percentage?</h2>
                <p className="mb-4">
                    A percentage is a mathematical concept that represents a fraction of 100. It is commonly used to express how much one quantity is of another. Understanding percentages is crucial in various aspects of life, including finance, statistics, and everyday calculations. With our <strong>Percentage Calculator</strong>, users can easily calculate percentages, percentage increases, and decreases.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">How to Calculate Percentages</h2>
                <p className="mb-4">
                    Calculating a percentage is simple with the right approach. The basic formula for determining a percentage is:
                </p>
                <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                    <code>
                        Percentage = (Part / Whole) × 100
                    </code>
                </pre>
                <p className="mb-4">
                    By using this formula, you can find out how much a specific part represents in relation to a whole. To calculate the percentage increase or decrease, you can use the following formulas:
                </p>
                <h3 className="text-lg font-semibold mb-2">Percentage Increase</h3>
                <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                    <code>
                        Percentage Increase = [(New Value - Old Value) / Old Value] × 100
                    </code>
                </pre>
                <h3 className="text-lg font-semibold mb-2">Percentage Decrease</h3>
                <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                    <code>
                        Percentage Decrease = [(Old Value - New Value) / Old Value] × 100
                    </code>
                </pre>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Worked Examples</h2>
                <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                    <h3 className="font-semibold">Example 1: Basic Percentage Calculation</h3>
                    <p>Calculate 20% of 150.</p>
                    <pre>
                        <code>
                            Part = 20 <br />
                            Whole = 150 <br />
                            Percentage = (20 / 150) × 100 = 13.33%
                        </code>
                    </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 mb-4">
                    <h3 className="font-semibold">Example 2: Percentage Increase</h3>
                    <p>Find the percentage increase from 50 to 75.</p>
                    <pre>
                        <code>
                            Old Value = 50 <br />
                            New Value = 75 <br />
                            Percentage Increase = [(75 - 50) / 50] × 100 = 50%
                        </code>
                    </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4">
                    <h3 className="font-semibold">Example 3: Percentage Decrease</h3>
                    <p>Calculate the percentage decrease from 80 to 60.</p>
                    <pre>
                        <code>
                            Old Value = 80 <br />
                            New Value = 60 <br />
                            Percentage Decrease = [(80 - 60) / 80] × 100 = 25%
                        </code>
                    </pre>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Real World Uses of Percentage</h2>
                <p className="mb-4">
                    Understanding percentages is essential in various fields. Here are some real-world applications:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Finance: Calculating interest rates, tax rates, and discounts.</li>
                    <li>Statistics: Analyzing data by finding the percentage of various outcomes.</li>
                    <li>Education: Grading assessments and understanding test scores.</li>
                    <li>Health: Tracking growth metrics such as weight gain or loss in percentage terms.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions (FAQ)</h2>
                <ul className="list-decimal list-inside">
                    <li><strong>What is a percentage?</strong> A percentage is a fraction expressed in terms of 100.</li>
                    <li><strong>How do I calculate a percentage of a number?</strong> Use the formula: (Part / Whole) × 100.</li>
                    <li><strong>What is the difference between percentage increase and decrease?</strong> Increase measures growth, while decrease measures reduction.</li>
                    <li><strong>Can percentages be negative?</strong> A negative percentage typically indicates a decrease.</li>
                    <li><strong>How can I apply percentages in everyday life?</strong> You can use percentages for budgeting, understanding discounts, and financial planning.</li>
                </ul>
            </section>
        </article>
    );
}