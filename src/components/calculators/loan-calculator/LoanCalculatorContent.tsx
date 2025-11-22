import React from 'react';

export default function LoanCalculatorContent() {
    return (
        <article>
            <h1>Loan Calculator</h1>
            <section>
                <h2>What is a Loan?</h2>
                <p>
                    A loan is a financial agreement where one party provides money to another, 
                    expecting to be paid back at a later date, with interest. The loan can take various forms, 
                    including personal loans, auto loans, mortgages, and student loans. Understanding 
                    how loans work is essential for effective financial management, which is why tools 
                    like a loan calculator are invaluable in determining how much you can borrow, 
                    your monthly payments, and the total interest that will accrue over the life of the loan.
                </p>
            </section>

            <section>
                <h2>How to Calculate Loan Payments</h2>
                <p>
                    Using a loan calculator involves a straightforward process. Here’s how to calculate your 
                    monthly loan payments step-by-step:
                </p>
                <h3>Gather Essential Information</h3>
                <p>
                    Before you start calculating, collect the following details:
                </p>
                <ul>
                    <li>Loan Amount: The total amount borrowed.</li>
                    <li>Interest Rate: The annual rate charged for borrowing.</li>
                    <li>Loan Term: The duration over which you will pay back the loan.</li>
                </ul>

                <h3>Use the Loan Formula</h3>
                <p>
                    The formula to calculate the monthly payment on a loan is:
                </p>
                <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                    {`M = P[r(1 + r)^n] / [(1 + r)^n – 1]`}
                </pre>
                <p>
                    Where:
                </p>
                <ul>
                    <li>M = total monthly mortgage payment</li>
                    <li>P = the loan amount</li>
                    <li>r = monthly interest rate (annual interest rate / 12)</li>
                    <li>n = number of payments (loan term in months)</li>
                </ul>
            </section>

            <section>
                <h2>Worked Examples of Loan Calculations</h2>
                <div className="bg-blue-50 border border-blue-200 p-4">
                    <h3>Example 1: $10,000 Personal Loan</h3>
                    <p>
                        If you borrow $10,000 at an annual interest rate of 5% for 3 years, the monthly 
                        payment calculation would be as follows:
                    </p>
                    <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                        {`P = 10000 \n r = 0.05 / 12 \n n = 3 * 12`}
                    </pre>
                    <p>
                        Therefore, the monthly payment (M) is approximately $299.71.
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4">
                    <h3>Example 2: $25,000 Car Loan</h3>
                    <p>
                        For a $25,000 car loan at an annual interest rate of 4% over 5 years, calculate 
                        as follows:
                    </p>
                    <pre className="bg-gray-50 border-l-4 border-blue-500 p-4">
                        {`P = 25000 \n r = 0.04 / 12 \n n = 5 * 12`}
                    </pre>
                    <p>
                        The resulting monthly payment (M) comes out to around $460.35.
                    </p>
                </div>
            </section>

            <section>
                <h2>Real World Uses of a Loan Calculator</h2>
                <p>
                    Loan calculators serve various purposes in everyday finance. They help potential 
                    borrowers determine the affordability of a loan before signing any contracts. 
                    People use loan calculators when planning to make large purchases like a house or 
                    a car, allowing them to explore different scenarios by adjusting the loan terms and 
                    seeing how that affects monthly payments.
                </p>
            </section>

            <section>
                <h2>FAQ about Loans</h2>
                <h3>1. What factors affect my loan interest rate?</h3>
                <p>
                    Several factors can influence your loan interest rate, including your credit score, 
                    the type of loan, the loan amount, and the duration of the loan.
                </p>

                <h3>2. Can I pay my loan off early?</h3>
                <p>
                    Yes, many lenders allow early repayment, but some might impose a prepayment penalty.
                </p>

                <h3>3. How is my monthly payment calculated?</h3>
                <p>
                    Your monthly payment is calculated using the loan formula that takes into account 
                    the loan amount, interest rate, and loan term.
                </p>

                <h3>4. What is loan amortization?</h3>
                <p>
                    Loan amortization is the process of paying off a debt over time through regular 
                    payments, where each payment covers part of the principal and part of the interest.
                </p>

                <h3>5. Is it better to take a short-term or long-term loan?</h3>
                <p>
                    Short-term loans typically have lower interest rates but higher monthly payments, 
                    while long-term loans have smaller payments but may result in more interest overall.
                </p>
            </section>
        </article>
    );
}