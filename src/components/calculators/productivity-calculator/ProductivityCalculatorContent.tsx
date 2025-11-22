import React from 'react';

export default function ProductivityCalculatorContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Productivity Calculator</h1>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">What is the Productivity Calculator?</h2>
        <p className="mb-4 text-lg leading-7">
          The Productivity Calculator helps you measure how efficiently you complete work by analyzing the number of tasks completed, the time spent, and the target you set. It instantly computes key metrics like tasks-per-hour, completion rate, and a composite productivity index to help you track performance and improve planning.
        </p>
        <p className="mb-4 text-lg leading-7">
          Use this tool to benchmark daily performance, estimate whether you're on track to meet goals, and compare productivity across different days or team members. By leveraging this calculator regularly, you can develop a better understanding of your working patterns and identify areas for improvement.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How the Productivity Calculator Works</h2>
        <p className="mb-4 text-lg leading-7">
          The calculator uses three simple inputs to generate useful metrics that track your productivity:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Tasks Completed — the number of tasks you finished.</li>
          <li>Time Spent (hours) — total hours worked.</li>
          <li>Target Tasks — tasks you intended to complete.</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Tasks per Hour = Tasks Completed / Time Spent
          </code>
        </div>

        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Completion Rate (%) = (Tasks Completed / Target Tasks) × 100
          </code>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            The Productivity Index is a composite score that weighs your tasks-per-hour by how close you are to your target. It is calculated as:
          </p>
          <div className="mt-3 font-mono bg-white p-3 rounded">
            Productivity Index = Tasks per Hour × (Completion Rate / 100)
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Examples of Using the Productivity Calculator</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Example 1 — On Track</h3>
          <p className="text-lg">
            If you complete 12 tasks in 8 hours with a target of 12 tasks:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Tasks per Hour = 12 / 8 = 1.5</li>
            <li>Completion Rate = (12 / 12) × 100 = 100%</li>
            <li>Productivity Index = 1.5 × 1.0 = 1.5</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Example 2 — Under Target</h3>
          <p className="text-lg">
            If you complete 8 tasks in 8 hours with a target of 12 tasks:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Tasks per Hour = 8 / 8 = 1.0</li>
            <li>Completion Rate = (8 / 12) × 100 ≈ 66.67%</li>
            <li>Productivity Index ≈ 1.0 × 0.6667 ≈ 0.6667</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Example 3 — Exceeding Targets</h3>
          <p className="text-lg">
            Consider completing 15 tasks in just 10 hours with a target of 10 tasks:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Tasks per Hour = 15 / 10 = 1.5</li>
            <li>Completion Rate = (15 / 10) × 100 = 150%</li>
            <li>Productivity Index = 1.5 × 1.5 = 2.25</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions (FAQs)</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">What if I enter zero hours?</h3>
          <p className="text-lg">The calculator needs a positive time value to compute tasks-per-hour. If time is zero or empty, tasks-per-hour will not be calculated, which could lead to inaccurate productivity metrics.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Can I use this Productivity Calculator for teams?</h3>
          <p className="text-lg">Yes. Aggregate tasks and total hours across the team to compute team-level productivity metrics. This will also allow you to address team inefficiencies more effectively.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">How should I interpret the Productivity Index?</h3>
          <p className="text-lg">Higher values indicate better performance relative to your target and pace. Use it to compare days or shifts — it normalizes rate with goal attainment, making it easier to gauge productivity levels among different periods or individuals.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">How often should I use the Productivity Calculator?</h3>
          <p className="text-lg">For best results, use the calculator daily or weekly. This way, you can notice trends in your productivity and make timely adjustments to your workflow as needed.</p>
        </div>
      </section>
    </article>
  );
}
