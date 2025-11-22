# Comprehensive Calculator Content Plan

## Executive Summary

This document provides a detailed content plan for expanding the Omni-Style Calculators platform from 3 calculators to 3,000+ calculators across 13 categories, matching and exceeding competitor offerings.

**Current State:**
- 3 calculators (BMI, Loan, Percentage)
- 4 categories (health, finance, math, other)
- 3 authors

**Target State (12 months):**
- 250+ calculators (Year 1)
- 13 categories with full subcategory structure
- 25+ authors
- 3,000+ calculators (long-term goal)

---

## Category Expansion Strategy

### Phase 1: Update Type System (Week 1)

**Action Items:**
1. Update `src/types/index.ts` to include all 13 categories
2. Define comprehensive subcategories for each category
3. Update `Category` type to be a union of all categories

**New Categories to Add:**
- `biology` - 104 calculators
- `chemistry` - 102 calculators
- `construction` - 153 calculators
- `conversion` - 315 calculators (highest priority)
- `ecology` - 33 calculators
- `everyday-life` - 270 calculators
- `food` - 69 calculators
- `physics` - 529 calculators
- `sports` - 109 calculators
- `statistics` - 191 calculators

**Existing Categories to Expand:**
- `health` - 431 calculators (currently 1)
- `finance` - 594 calculators (currently 1)
- `math` - 671 calculators (currently 1)
- `other` - 189 calculators (currently 0)

---

## Detailed Calculator Lists by Category

### 1. Conversion (315 calculators) - TIER 1 PRIORITY

**Why First:** Highest search volume, easiest to implement, universal appeal

#### Subcategories:
- **Length & Distance** (45 calculators)
- **Weight & Mass** (35 calculators)
- **Volume & Capacity** (40 calculators)
- **Temperature** (15 calculators)
- **Area** (30 calculators)
- **Speed & Velocity** (25 calculators)
- **Time** (20 calculators)
- **Energy** (20 calculators)
- **Pressure** (15 calculators)
- **Data Storage** (15 calculators)
- **Angle** (10 calculators)
- **Fuel Economy** (10 calculators)
- **Power** (15 calculators)
- **Force** (10 calculators)
- **Torque** (10 calculators)
- **Frequency** (10 calculators)
- **Electrical** (20 calculators)

#### Top 30 Priority Calculators:

**Length & Distance:**
1. **Length Converter** - mm, cm, m, km, inches, feet, yards, miles
2. **Distance Converter** - All length units + nautical miles
3. **Height Converter** - Feet/inches to cm/meters
4. **Mile to Kilometer Converter**
5. **Inch to Centimeter Converter**
6. **Foot to Meter Converter**
7. **Yard to Meter Converter**
8. **Nautical Mile Converter**

**Weight & Mass:**
9. **Weight Converter** - grams, kg, pounds, ounces, tons, stones
10. **Pound to Kilogram Converter**
11. **Ounce to Gram Converter**
12. **Stone to Kilogram Converter**
13. **Tonne to Kilogram Converter**

**Volume & Capacity:**
14. **Volume Converter** - liters, gallons, cubic meters, cubic feet, cups, pints, quarts
15. **Liter to Gallon Converter**
16. **Cubic Meter Converter**
17. **Cup to Milliliter Converter**
18. **Fluid Ounce Converter**

**Temperature:**
19. **Temperature Converter** - Celsius, Fahrenheit, Kelvin
20. **Celsius to Fahrenheit Converter**
21. **Fahrenheit to Celsius Converter**

**Area:**
22. **Area Converter** - square meters, square feet, acres, hectares, square miles
23. **Square Foot to Square Meter Converter**
24. **Acre to Hectare Converter**
25. **Square Kilometer to Square Mile Converter**

**Speed & Time:**
26. **Speed Converter** - km/h, mph, m/s, knots
27. **Time Converter** - seconds, minutes, hours, days, weeks, months, years

**Energy & Power:**
28. **Energy Converter** - joules, calories, kWh, BTU
29. **Power Converter** - watts, horsepower, BTU/h

**Data:**
30. **Data Storage Converter** - bytes, KB, MB, GB, TB, PB

**SEO Strategy for Conversion:**
- Target: "[unit] to [unit]" (e.g., "kg to lbs", "celsius to fahrenheit")
- Long-tail: "convert [unit] to [unit]", "[unit] converter online"
- Each calculator should have 500+ words explaining both units, conversion formula, and use cases

---

### 2. Finance (594 calculators) - TIER 1 PRIORITY

**Why High Priority:** High commercial value, affiliate potential, user engagement

#### Subcategories:
- **Loans & Mortgages** (120 calculators)
- **Investments & Savings** (150 calculators)
- **Taxes & Deductions** (100 calculators)
- **Budgeting & Planning** (80 calculators)
- **Retirement Planning** (60 calculators)
- **Insurance** (40 calculators)
- **Currency & Exchange** (44 calculators)

#### Top 40 Priority Calculators:

**Loans & Mortgages:**
1. **Mortgage Calculator** (enhance existing)
2. **Auto Loan Calculator**
3. **Personal Loan Calculator**
4. **Student Loan Calculator**
5. **Credit Card Payoff Calculator**
6. **Refinance Calculator**
7. **Home Equity Loan Calculator**
8. **Amortization Schedule Generator**
9. **Loan Comparison Calculator**
10. **Debt Consolidation Calculator**

**Investments & Savings:**
11. **Compound Interest Calculator**
12. **Investment Return Calculator (ROI)**
13. **Savings Calculator**
14. **Future Value Calculator**
15. **Present Value Calculator**
16. **Annuity Calculator**
17. **401(k) Calculator**
18. **IRA Calculator**
19. **Stock Return Calculator**
20. **Dividend Calculator**

**Taxes:**
21. **Income Tax Calculator**
22. **Capital Gains Tax Calculator**
23. **Property Tax Calculator**
24. **Sales Tax Calculator**
25. **VAT Calculator**
26. **Tax Refund Calculator**
27. **Tax Bracket Calculator**

**Budgeting:**
28. **Budget Calculator**
29. **Debt-to-Income Ratio Calculator**
30. **Expense Tracker Calculator**
31. **Cost of Living Calculator**
32. **Salary Calculator** (Hourly to Annual)

**Retirement:**
33. **Retirement Calculator**
34. **Social Security Calculator**
35. **Pension Calculator**
36. **Retirement Savings Goal Calculator**

**Currency:**
37. **Currency Converter** (USD, EUR, GBP, JPY, etc.)
38. **Exchange Rate Calculator**

**Other:**
39. **Tip Calculator**
40. **Discount Calculator**

**SEO Strategy for Finance:**
- Target: "[type] calculator" (e.g., "mortgage calculator", "loan calculator")
- Long-tail: "calculate [financial term]", "how to calculate [metric]"
- Include real-world examples, current rates (if applicable), and financial advice disclaimers

---

### 3. Health (431 calculators) - TIER 1 PRIORITY

**Why High Priority:** High search volume, health-conscious audience, medical authority

#### Subcategories:
- **Fitness & Exercise** (120 calculators)
- **Nutrition & Diet** (100 calculators)
- **Medical & Health** (150 calculators)
- **Pregnancy & Baby** (61 calculators)

#### Top 35 Priority Calculators:

**Fitness & Exercise:**
1. **BMI Calculator** (enhance existing)
2. **BMR Calculator** (Basal Metabolic Rate)
3. **TDEE Calculator** (Total Daily Energy Expenditure)
4. **Body Fat Calculator**
5. **Ideal Weight Calculator**
6. **Body Surface Area Calculator**
7. **Lean Body Mass Calculator**
8. **Waist-to-Hip Ratio Calculator**
9. **Body Type Calculator** (Ectomorph, Mesomorph, Endomorph)
10. **Running Pace Calculator**
11. **Steps to Miles Calculator**
12. **Exercise Calorie Burn Calculator**
13. **VO2 Max Calculator**
14. **Training Zone Calculator**
15. **One Rep Max Calculator**

**Nutrition:**
16. **Calorie Calculator**
17. **Macro Calculator** (Protein, Carbs, Fats)
18. **Protein Calculator**
19. **Carb Calculator**
20. **Fat Calculator**
21. **Fiber Calculator**
22. **Water Intake Calculator**
23. **Meal Prep Calculator**
24. **Portion Size Calculator**

**Medical:**
25. **Heart Rate Calculator** (Target, Max, Resting)
26. **Blood Pressure Calculator**
27. **Sleep Calculator**
28. **Vitamin Calculator**
29. **Drug Dosage Calculator** (with medical disclaimer)

**Pregnancy:**
30. **Pregnancy Due Date Calculator**
31. **Ovulation Calculator**
32. **Pregnancy Week Calculator**
33. **Baby Growth Calculator**
34. **Pregnancy Weight Gain Calculator**
35. **Breastfeeding Calculator**

**SEO Strategy for Health:**
- Target: "[health metric] calculator" (e.g., "BMI calculator", "BMR calculator")
- Long-tail: "calculate [health metric]", "[metric] for [demographic]"
- Include medical disclaimers, cite sources, provide context for results
- Target demographic-specific searches (e.g., "BMI calculator for women")

---

### 4. Math (671 calculators) - TIER 1 PRIORITY

**Why High Priority:** Educational value, high search volume, broad appeal

#### Subcategories:
- **Basic Math** (150 calculators)
- **Algebra** (180 calculators)
- **Geometry** (200 calculators)
- **Statistics** (141 calculators)

#### Top 40 Priority Calculators:

**Basic Math:**
1. **Percentage Calculator** (enhance existing)
2. **Fraction Calculator**
3. **Percentage Increase/Decrease Calculator**
4. **Ratio Calculator**
5. **Proportion Calculator**
6. **Square Root Calculator**
7. **Cube Root Calculator**
8. **Exponent Calculator**
9. **Logarithm Calculator**
10. **Factorial Calculator**
11. **Prime Number Calculator**
12. **GCD Calculator** (Greatest Common Divisor)
13. **LCM Calculator** (Least Common Multiple)
14. **Scientific Calculator** (multi-function)
15. **Number Base Converter** (binary, decimal, hex, octal)

**Algebra:**
16. **Quadratic Equation Solver**
17. **Linear Equation Solver**
18. **System of Equations Solver**
19. **Polynomial Calculator**
20. **Matrix Calculator**
21. **Determinant Calculator**
22. **Inverse Matrix Calculator**
23. **Slope Calculator**
24. **Distance Calculator** (2D, 3D)
25. **Midpoint Calculator**

**Geometry:**
26. **Area Calculator** (Circle, Rectangle, Triangle, etc.)
27. **Volume Calculator** (Sphere, Cylinder, Cone, etc.)
28. **Perimeter Calculator**
29. **Circumference Calculator**
30. **Pythagorean Theorem Calculator**
31. **Angle Calculator**
32. **Triangle Calculator** (sides, angles, area)
33. **Circle Calculator** (radius, diameter, area, circumference)
34. **Rectangle Calculator**
35. **Cylinder Calculator**

**Statistics:**
36. **Mean Calculator**
37. **Median Calculator**
38. **Mode Calculator**
39. **Standard Deviation Calculator**
40. **Variance Calculator**

**SEO Strategy for Math:**
- Target: "[math operation] calculator" (e.g., "fraction calculator", "quadratic calculator")
- Long-tail: "solve [math problem]", "[formula] calculator", "how to calculate [concept]"
- Include step-by-step solutions, formula explanations, and educational content

---

### 5. Everyday Life (270 calculators) - TIER 2 PRIORITY

**Why Important:** Broad appeal, high traffic potential, practical utility

#### Subcategories:
- **Date & Time** (50 calculators)
- **Cooking & Recipes** (40 calculators)
- **Shopping & Savings** (35 calculators)
- **Travel** (30 calculators)
- **Home & Garden** (45 calculators)
- **Time Management** (35 calculators)
- **Relationships** (20 calculators)
- **Pets** (20 calculators)

#### Top 30 Priority Calculators:

**Date & Time:**
1. **Age Calculator**
2. **Date Calculator** (Days between dates)
3. **Time Zone Converter**
4. **Day of Week Calculator**
5. **Leap Year Calculator**
6. **Countdown Timer Calculator**

**Cooking:**
7. **Recipe Scaling Calculator**
8. **Cooking Time Calculator**
9. **Oven Temperature Converter**
10. **Ingredient Substitution Calculator**

**Shopping:**
11. **Discount Calculator**
12. **Tip Calculator**
13. **Unit Price Calculator**
14. **Percentage Off Calculator**
15. **Split Bill Calculator**
16. **Sales Tax Calculator**

**Travel:**
17. **Fuel Cost Calculator**
18. **Mileage Calculator**
19. **Travel Time Calculator**
20. **Currency Converter** (if not in Finance)

**Home & Garden:**
21. **Paint Calculator** (Room coverage)
22. **Tile Calculator**
23. **Concrete Calculator**
24. **Carpet Calculator**
25. **Fence Calculator**
26. **Lawn Area Calculator**

**Time Management:**
27. **Salary to Hourly Calculator**
28. **Overtime Calculator**
29. **Time Card Calculator**
30. **Productivity Calculator**

**SEO Strategy:**
- Target practical, problem-solving queries
- Long-tail: "how to calculate [everyday task]", "[task] calculator"
- Focus on immediate utility and ease of use

---

### 6. Physics (529 calculators) - TIER 2 PRIORITY

**Why Important:** Educational market, academic users, high authority potential

#### Subcategories:
- **Mechanics** (150 calculators)
- **Thermodynamics** (80 calculators)
- **Electricity & Magnetism** (120 calculators)
- **Optics** (60 calculators)
- **Waves** (50 calculators)
- **Nuclear Physics** (40 calculators)
- **Astrophysics** (29 calculators)

#### Top 30 Priority Calculators:

**Mechanics:**
1. **Force Calculator**
2. **Acceleration Calculator**
3. **Velocity Calculator**
4. **Momentum Calculator**
5. **Kinetic Energy Calculator**
6. **Potential Energy Calculator**
7. **Power Calculator**
8. **Work Calculator**
9. **Friction Calculator**
10. **Gravity Calculator**
11. **Projectile Motion Calculator**
12. **Centripetal Force Calculator**
13. **Torque Calculator**
14. **Angular Velocity Calculator**

**Thermodynamics:**
15. **Temperature Converter** (if not in Conversion)
16. **Heat Transfer Calculator**
17. **Ideal Gas Law Calculator**
18. **Pressure Calculator**
19. **Density Calculator**

**Electricity:**
20. **Ohm's Law Calculator**
21. **Electric Power Calculator**
22. **Capacitance Calculator**
23. **Resistance Calculator**
24. **Voltage Calculator**
25. **Current Calculator**
26. **Series/Parallel Resistor Calculator**

**Optics:**
27. **Lens Calculator**
28. **Refraction Calculator**
29. **Wavelength Calculator**
30. **Frequency Calculator**

**SEO Strategy:**
- Target: "[physics concept] calculator", "[formula] calculator"
- Long-tail: "calculate [physics quantity]", "solve [physics problem]"
- Include formula derivations, unit explanations, and educational context

---

### 7. Statistics (191 calculators) - TIER 2 PRIORITY

**Why Important:** Professional and academic use, data analysis market

#### Subcategories:
- **Descriptive Statistics** (60 calculators)
- **Probability** (50 calculators)
- **Regression & Correlation** (40 calculators)
- **Sampling & Testing** (41 calculators)

#### Top 25 Priority Calculators:

**Descriptive:**
1. **Mean Calculator**
2. **Median Calculator**
3. **Mode Calculator**
4. **Standard Deviation Calculator**
5. **Variance Calculator**
6. **Range Calculator**
7. **Quartile Calculator**
8. **Percentile Calculator**
9. **Z-Score Calculator**
10. **Outlier Calculator**

**Probability:**
11. **Probability Calculator**
12. **Binomial Distribution Calculator**
13. **Normal Distribution Calculator**
14. **Poisson Distribution Calculator**
15. **Combination Calculator**
16. **Permutation Calculator**

**Regression:**
17. **Linear Regression Calculator**
18. **Correlation Calculator**
19. **R-Squared Calculator**
20. **Slope Calculator** (if not in Math)

**Testing:**
21. **T-Test Calculator**
22. **Chi-Square Calculator**
23. **ANOVA Calculator**
24. **Sample Size Calculator**
25. **Confidence Interval Calculator**

**SEO Strategy:**
- Target: "[statistical measure] calculator", "statistics calculator"
- Long-tail: "calculate [statistic]", "how to find [statistic]"
- Include interpretation guides and when to use each measure

---

### 8. Construction (153 calculators) - TIER 2 PRIORITY

**Why Important:** Professional tools, B2B potential, high-value users

#### Subcategories:
- **Materials** (40 calculators)
- **Measurements** (35 calculators)
- **Structural** (30 calculators)
- **Electrical** (25 calculators)
- **Plumbing** (23 calculators)

#### Top 25 Priority Calculators:

**Materials:**
1. **Concrete Calculator** (Volume, Bags needed)
2. **Paint Calculator** (Room coverage)
3. **Tile Calculator** (Square footage)
4. **Lumber Calculator**
5. **Drywall Calculator**
6. **Insulation Calculator**
7. **Flooring Calculator**
8. **Roofing Calculator**

**Measurements:**
9. **Area Calculator** (if not in Math)
10. **Volume Calculator** (if not in Math)
11. **Angle Calculator** (if not in Math)
12. **Slope Calculator** (if not in Math)

**Structural:**
13. **Foundation Calculator**
14. **Beam Calculator**
15. **Column Calculator**
16. **Rafter Calculator**
17. **Stair Calculator**
18. **Deck Calculator**
19. **Fence Calculator**

**Electrical:**
20. **Electrical Load Calculator**
21. **Wire Size Calculator**
22. **Voltage Drop Calculator**
23. **Circuit Breaker Calculator**

**Plumbing:**
24. **Pipe Size Calculator**
25. **Water Flow Calculator**

**SEO Strategy:**
- Target: "[construction task] calculator", "[material] calculator"
- Long-tail: "how much [material] do I need", "calculate [construction metric]"
- Include material specifications and building code references

---

### 9. Biology (104 calculators) - TIER 3 PRIORITY

**Why Important:** Educational value, academic market

#### Subcategories:
- **Genetics** (35 calculators)
- **Ecology** (25 calculators)
- **Anatomy & Physiology** (25 calculators)
- **Microbiology** (19 calculators)

#### Top 20 Priority Calculators:

**Genetics:**
1. **Punnett Square Calculator**
2. **Hardy-Weinberg Calculator**
3. **Genetic Distance Calculator**
4. **DNA Sequence Calculator**
5. **Allele Frequency Calculator**

**Ecology:**
6. **Population Growth Calculator**
7. **Growth Rate Calculator**
8. **Carrying Capacity Calculator**
9. **Biodiversity Calculator**

**Anatomy:**
10. **Body Surface Area Calculator** (if not in Health)
11. **Lean Body Mass Calculator** (if not in Health)
12. **Metabolic Rate Calculator** (if not in Health)

**Microbiology:**
13. **Cell Count Calculator**
14. **Dilution Calculator**
15. **pH Calculator**
16. **Osmolarity Calculator**
17. **Enzyme Kinetics Calculator**
18. **Half-Life Calculator**
19. **Respiration Rate Calculator**
20. **Protein Calculator** (if not in Health)

**SEO Strategy:**
- Target: "[biology concept] calculator", "biology calculator"
- Long-tail: "calculate [biological metric]", "[concept] calculator biology"
- Include educational explanations and scientific context

---

### 10. Chemistry (102 calculators) - TIER 3 PRIORITY

**Why Important:** Educational value, academic market, lab use

#### Subcategories:
- **Stoichiometry** (35 calculators)
- **Solutions** (30 calculators)
- **Thermodynamics** (20 calculators)
- **Organic Chemistry** (17 calculators)

#### Top 20 Priority Calculators:

**Stoichiometry:**
1. **Mole Calculator**
2. **Molarity Calculator**
3. **Molality Calculator**
4. **Stoichiometry Calculator**
5. **Percent Composition Calculator**
6. **Empirical Formula Calculator**
7. **Molecular Formula Calculator**

**Solutions:**
8. **Solution Concentration Calculator**
9. **Dilution Calculator**
10. **pH Calculator**
11. **Buffer Calculator**
12. **Titration Calculator**

**Thermodynamics:**
13. **Ideal Gas Law Calculator**
14. **Enthalpy Calculator**
15. **Entropy Calculator**
16. **Gibbs Free Energy Calculator**
17. **Reaction Rate Calculator**
18. **Equilibrium Constant Calculator**

**Other:**
19. **Bond Energy Calculator**
20. **Half-Life Calculator** (if not in Biology)

**SEO Strategy:**
- Target: "[chemistry concept] calculator", "chemistry calculator"
- Long-tail: "calculate [chemical quantity]", "[formula] calculator chemistry"
- Include balanced equations and step-by-step solutions

---

### 11. Sports (109 calculators) - TIER 3 PRIORITY

**Why Important:** Niche but engaged audience, fitness market overlap

#### Subcategories:
- **Running** (30 calculators)
- **Cycling** (20 calculators)
- **Strength Training** (25 calculators)
- **Team Sports** (20 calculators)
- **Fitness Tracking** (14 calculators)

#### Top 20 Priority Calculators:

**Running:**
1. **Running Pace Calculator**
2. **Marathon Time Calculator**
3. **5K/10K Time Calculator**
4. **Running Calorie Burn Calculator**
5. **VO2 Max Calculator** (if not in Health)
6. **Training Zone Calculator** (if not in Health)

**Cycling:**
7. **Cycling Power Calculator**
8. **Cycling Speed Calculator**
9. **Bike Gear Calculator**
10. **Cycling Calorie Burn Calculator**

**Strength:**
11. **One Rep Max Calculator** (if not in Health)
12. **Volume Calculator** (training volume)
13. **Rest Period Calculator**
14. **Progressive Overload Calculator**

**Team Sports:**
15. **Baseball Stats Calculator**
16. **Basketball Stats Calculator**
17. **Football Stats Calculator**
18. **Golf Handicap Calculator**
19. **Tennis Serve Speed Calculator**

**Other:**
20. **Swimming Pace Calculator**

**SEO Strategy:**
- Target: "[sport] calculator", "[sport metric] calculator"
- Long-tail: "calculate [sport metric]", "[sport] training calculator"
- Include training tips and performance benchmarks

---

### 12. Food (69 calculators) - TIER 3 PRIORITY

**Why Important:** Lifestyle content, recipe sites overlap, cooking enthusiasts

#### Subcategories:
- **Nutrition** (25 calculators)
- **Recipe Scaling** (20 calculators)
- **Cooking Conversions** (15 calculators)
- **Calorie Counting** (9 calculators)

#### Top 15 Priority Calculators:

**Nutrition:**
1. **Calorie Calculator** (Food-specific)
2. **Macro Calculator** (Food-specific)
3. **Food Cost Calculator**
4. **Nutrition Label Calculator**

**Recipe:**
5. **Recipe Scaling Calculator**
6. **Recipe Converter** (Servings)
7. **Ingredient Substitution Calculator**
8. **Cooking Time Calculator**

**Conversions:**
9. **Oven Temperature Converter**
10. **Cooking Measurement Converter** (cups, tablespoons, etc.)
11. **Recipe Unit Converter**

**Other:**
12. **Portion Size Calculator**
13. **Meal Prep Calculator**
14. **Calorie Density Calculator**
15. **Food Waste Calculator**

**SEO Strategy:**
- Target: "[cooking task] calculator", "recipe calculator"
- Long-tail: "how to scale recipe", "convert recipe measurements"
- Include cooking tips and recipe ideas

---

### 13. Ecology (33 calculators) - TIER 3 PRIORITY

**Why Important:** Growing environmental awareness, sustainability market

#### Subcategories:
- **Carbon Footprint** (12 calculators)
- **Water Usage** (8 calculators)
- **Energy Consumption** (8 calculators)
- **Sustainability** (5 calculators)

#### Top 15 Priority Calculators:

1. **Carbon Footprint Calculator**
2. **Water Usage Calculator**
3. **Energy Consumption Calculator**
4. **Recycling Calculator**
5. **Compost Calculator**
6. **Solar Panel Calculator**
7. **Wind Energy Calculator**
8. **Tree Planting Calculator**
9. **Carbon Offset Calculator**
10. **Ecological Footprint Calculator**
11. **Home Energy Calculator**
12. **Transportation Carbon Calculator**
13. **Food Carbon Calculator**
14. **Waste Reduction Calculator**
15. **Sustainability Score Calculator**

**SEO Strategy:**
- Target: "[environmental metric] calculator", "carbon calculator"
- Long-tail: "calculate my carbon footprint", "how to reduce [environmental impact]"
- Include actionable tips and environmental impact explanations

---

## Author Expansion Plan

### Current Authors (3):
1. Dr. Sarah Smith - Medical Expert
2. Mike Johnson - Financial Advisor
3. Prof. Alan Turing - Mathematics Professor

### New Authors Needed (22):

**Biology & Chemistry:**
1. **Dr. Jane Watson** - Biochemist, PhD
   - Bio: "Dr. Watson specializes in molecular biology and genetics with 20+ years of research experience."
   - Categories: biology, chemistry

2. **Prof. Marie Curie** - Chemistry Expert
   - Bio: "Professor Curie is a renowned chemist specializing in analytical and organic chemistry."
   - Categories: chemistry

**Physics:**
3. **Dr. Albert Einstein** - Theoretical Physicist
   - Bio: "Dr. Einstein has dedicated his career to making complex physics concepts accessible."
   - Categories: physics

4. **Prof. Isaac Newton** - Classical Mechanics Expert
   - Bio: "Professor Newton specializes in mechanics, thermodynamics, and applied physics."
   - Categories: physics

**Construction:**
5. **Mike Builder** - Licensed Contractor
   - Bio: "Mike is a licensed general contractor with 25 years of experience in residential and commercial construction."
   - Categories: construction

6. **Sarah Architect** - Architectural Engineer
   - Bio: "Sarah is a licensed architect specializing in structural design and building codes."
   - Categories: construction

**Conversion:**
7. **Unit Master** - Conversion Specialist
   - Bio: "Unit Master is an expert in measurement systems and unit conversions across all disciplines."
   - Categories: conversion

**Everyday Life:**
8. **Lisa Daily** - Lifestyle Expert
   - Bio: "Lisa helps people solve everyday problems with practical calculators and tools."
   - Categories: everyday-life

9. **Tom Practical** - Everyday Solutions Expert
   - Bio: "Tom creates calculators for common daily tasks and life management."
   - Categories: everyday-life

**Food:**
10. **Chef Gordon** - Culinary Expert
    - Bio: "Chef Gordon brings 30 years of culinary experience to recipe and cooking calculators."
    - Categories: food

11. **Nutritionist Amy** - Food Science Expert
    - Bio: "Amy is a registered nutritionist specializing in food science and dietary planning."
    - Categories: food

**Sports:**
12. **Coach Johnson** - Fitness Expert
    - Bio: "Coach Johnson is a certified personal trainer and sports performance specialist."
    - Categories: sports

13. **Trainer Maria** - Athletic Performance Expert
    - Bio: "Maria specializes in athletic performance optimization and training program design."
    - Categories: sports

**Ecology:**
14. **Dr. Green** - Environmental Scientist
    - Bio: "Dr. Green is an environmental scientist focused on sustainability and carbon reduction."
    - Categories: ecology

15. **Eco Expert Sam** - Sustainability Specialist
    - Bio: "Sam helps individuals and businesses understand and reduce their environmental impact."
    - Categories: ecology

**Statistics:**
16. **Prof. Data** - Statistician
    - Bio: "Professor Data is a statistician specializing in data analysis and statistical modeling."
    - Categories: statistics, math

17. **Analyst Alex** - Data Science Expert
    - Bio: "Alex is a data scientist who makes statistical analysis accessible to everyone."
    - Categories: statistics

**Health (Additional):**
18. **Dr. Fitness** - Exercise Physiologist
    - Bio: "Dr. Fitness specializes in exercise science and fitness program design."
    - Categories: health (fitness subcategory)

19. **Nutritionist Ben** - Registered Dietitian
    - Bio: "Ben is a registered dietitian with expertise in nutritional planning and meal design."
    - Categories: health (nutrition subcategory)

**Finance (Additional):**
20. **Tax Expert Carol** - Certified Tax Advisor
    - Bio: "Carol is a certified tax advisor helping individuals and businesses with tax planning."
    - Categories: finance (taxes subcategory)

21. **Investment Pro** - Certified Financial Planner
    - Bio: "Investment Pro is a CFP specializing in investment strategies and retirement planning."
    - Categories: finance (investments subcategory)

**Math (Additional):**
22. **Prof. Geometry** - Geometry Expert
    - Bio: "Professor Geometry makes geometric calculations and spatial reasoning accessible."
    - Categories: math (geometry subcategory)

---

## Implementation Timeline

### Month 1: Foundation & Type System
**Week 1-2:**
- [ ] Update `src/types/index.ts` with all 13 categories
- [ ] Define all subcategories for each category
- [ ] Create 10 new author profiles
- [ ] Update category routing and pages

**Week 3-4:**
- [ ] Build 5 conversion calculators (Length, Weight, Temperature, Area, Volume)
- [ ] Build 3 finance calculators (Auto Loan, Credit Card Payoff, Savings)
- [ ] Build 2 health calculators (BMR, TDEE)
- [ ] **Total: 10 calculators**

### Month 2: High-Value Categories
**Week 1-2:**
- [ ] Build 5 more conversion calculators (Speed, Time, Energy, Pressure, Data)
- [ ] Build 4 finance calculators (Compound Interest, Investment Return, Retirement, Tax)
- [ ] Build 3 health calculators (Body Fat, Calorie, Macro)
- [ ] Build 3 math calculators (Fraction, Ratio, Square Root)
- [ ] **Total: 15 calculators**

**Week 3-4:**
- [ ] Build 5 more conversion calculators
- [ ] Build 3 finance calculators
- [ ] Build 2 health calculators
- [ ] Build 2 math calculators
- [ ] **Total: 12 calculators**

**Month 2 Total: 27 calculators**

### Month 3: Continue Expansion
**Week 1-2:**
- [ ] Build 5 conversion calculators
- [ ] Build 3 finance calculators
- [ ] Build 3 health calculators
- [ ] Build 3 math calculators
- [ ] Build 2 everyday-life calculators
- [ ] **Total: 16 calculators**

**Week 3-4:**
- [ ] Build 4 conversion calculators
- [ ] Build 3 finance calculators
- [ ] Build 2 health calculators
- [ ] Build 2 math calculators
- [ ] Build 2 everyday-life calculators
- [ ] **Total: 13 calculators**

**Month 3 Total: 29 calculators**

**Q1 Total: 66 calculators (10 + 27 + 29)**

### Month 4-6: Broad Appeal Categories
- Build 15 everyday-life calculators
- Build 15 physics calculators
- Build 10 statistics calculators
- Build 10 construction calculators
- Continue building in Tier 1 categories (20 calculators)
- **Q2 Total: 70 calculators**

### Month 7-9: Educational & Niche
- Build 10 biology calculators
- Build 10 chemistry calculators
- Build 10 sports calculators
- Build 8 food calculators
- Build 8 ecology calculators
- Continue building in all categories (30 calculators)
- **Q3 Total: 76 calculators**

### Month 10-12: Scale & Optimization
- Fill gaps in all categories
- Add 20-30 calculators per month
- Focus on high-traffic keywords
- **Q4 Total: 100+ calculators**

**Year 1 Total: 312+ calculators**

---

## SEO Content Strategy

### Per Calculator Content Requirements:

1. **Title Tag (50-60 characters):**
   - Format: "[Calculator Name] - [Primary Keyword] | Omni-Style Calculators"
   - Example: "BMI Calculator - Calculate Body Mass Index | Omni-Style Calculators"

2. **Meta Description (150-160 characters):**
   - Include primary keyword in first 120 characters
   - Add value proposition and call-to-action
   - Example: "Free BMI Calculator to find your Body Mass Index. Understand your weight category and health risks. Calculate instantly."

3. **H1 (Page Title):**
   - Match or closely match the calculator name
   - Include primary keyword

4. **Content Structure (500-800 words minimum):**
   - **Introduction (100-150 words):** What is [concept]? Why is it useful?
   - **How to Calculate (150-200 words):** Step-by-step instructions
   - **Formula Section (100-150 words):** Formula with explanation
   - **Examples (100-150 words):** 2-3 worked examples
   - **Use Cases (100-150 words):** 4+ real-world applications
   - **FAQ (100-150 words):** 5-7 common questions

5. **Keywords (5-10 per calculator):**
   - Primary keyword (exact match)
   - Secondary keywords (variations)
   - Long-tail keywords
   - Related terms
   - Competitor keywords

### Content Quality Checklist:
- [ ] Minimum 500 words (800+ preferred)
- [ ] Primary keyword in H1, first paragraph, and 2-3 H2 headings
- [ ] Natural keyword density (1-2%)
- [ ] At least one formula with explanation
- [ ] 2-3 worked examples with numbers
- [ ] 4+ real-world use cases
- [ ] 5-7 FAQ questions
- [ ] Internal links to related calculators
- [ ] External links to authoritative sources (where appropriate)
- [ ] Proper heading hierarchy (H2, H3)
- [ ] Code blocks for formulas
- [ ] Highlighted example boxes
- [ ] Mobile-responsive formatting

---

## Technical Implementation Notes

### Calculator Component Requirements:
1. **Default Values:** All calculators must show results immediately with prefilled values
2. **Auto-Calculation:** No "Calculate" button - use `useEffect` for automatic updates
3. **Unit Support:** Include unit conversion where applicable
4. **PDF Export:** Every calculator must have "Download PDF" button
5. **Charts:** Include "Show More" button with relevant visualizations
6. **Error Handling:** Validate inputs and show helpful error messages
7. **Mobile Responsive:** Ensure all calculators work on mobile devices

### Content Component Requirements:
1. **Server Component:** Must be a server component (no 'use client')
2. **Semantic HTML:** Use proper article, section, heading tags
3. **Styling:** Self-contained styling (don't rely on prose wrapper)
4. **Formatting:** Proper heading hierarchy, lists, code blocks, example boxes

### Registration Requirements:
1. **Calculator Config:** Add to `src/config/calculators.ts`
2. **Author Assignment:** Assign appropriate author based on category
3. **Subcategory:** Assign to relevant subcategory
4. **SEO Metadata:** Complete title, description, keywords
5. **Testing:** Test all functionality before deployment

---

## Success Metrics

### Month 1-3 (Q1):
- ✅ 66 calculators live
- ✅ 13 categories with subcategories defined
- ✅ 15+ authors
- ✅ 50+ subcategories
- ✅ All Tier 1 categories have 10+ calculators

### Month 4-6 (Q2):
- ✅ 136 calculators total
- ✅ 8 categories with 10+ calculators
- ✅ 20+ authors
- ✅ Tier 2 categories launched

### Month 7-9 (Q3):
- ✅ 212 calculators total
- ✅ 13 categories all active
- ✅ 25+ authors
- ✅ All categories have calculators

### Month 10-12 (Q4):
- ✅ 312+ calculators total
- ✅ All categories well-populated
- ✅ 25+ authors
- ✅ High-traffic keywords targeted

---

## Next Steps

### Immediate Actions (This Week):
1. [ ] Update `src/types/index.ts` with all 13 categories
2. [ ] Define comprehensive subcategories for each category
3. [ ] Create 10 new author profiles in `src/config/authors.ts`
4. [ ] Update category page routing to handle new categories
5. [ ] Begin building first 5 conversion calculators

### Short-term (Month 1):
1. [ ] Complete type system updates
2. [ ] Build 10 calculators (5 conversion, 3 finance, 2 health)
3. [ ] Create author pages for all new authors
4. [ ] Test and optimize SEO for new calculators

### Medium-term (Months 2-3):
1. [ ] Build 50+ calculators across all Tier 1 categories
2. [ ] Expand content team or create content templates
3. [ ] Implement analytics tracking
4. [ ] Begin link building and SEO outreach

---

## Content Templates

### Calculator Content Template:

```markdown
# [Calculator Name]

## What is [Concept]?

[2-3 paragraphs explaining what the concept is, why it's useful, when to use it]

## How to Calculate [Concept]

[Step-by-step instructions]

### Formula

[Formula in code block with explanation]

### Example

[Worked example with numbers]

## Understanding the Formula

[Breakdown of each variable]

## Real-World Uses

[4+ use cases in card format]

## Frequently Asked Questions

[5-7 Q&A pairs]
```

### SEO Metadata Template:

```typescript
{
  title: '[Calculator Name] - [Primary Keyword] | Omni-Style Calculators',
  description: '[150-160 char description with primary keyword and value prop]',
  keywords: [
    'primary keyword',
    'secondary keyword',
    'long-tail keyword',
    'related term 1',
    'related term 2',
    'variation 1',
    'variation 2',
  ],
}
```

---

## Resources & References

### Tools for Calculator Development:
- **Recharts:** For data visualizations
- **jsPDF:** For PDF generation
- **Next.js:** Framework
- **TypeScript:** Type safety
- **Tailwind CSS:** Styling

### SEO Tools:
- Google Keyword Planner
- Google Trends
- Answer The Public
- SEMrush / Ahrefs (for competitor analysis)
- Google Search Console

### Content Resources:
- Scientific formulas and equations
- Industry standards and definitions
- Academic sources for health/medical calculators
- Government sources for tax/finance calculators

---

## Notes

- This plan is a living document and should be updated as priorities shift
- Focus on quality over quantity - each calculator should be fully functional and SEO-optimized
- Track performance metrics and adjust priorities based on traffic and engagement
- Consider user feedback when prioritizing new calculators
- Maintain consistency in design, functionality, and content quality across all calculators

---

**Last Updated:** [Current Date]
**Version:** 1.0
**Status:** Active Planning Phase


