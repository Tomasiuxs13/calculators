# Calculator Development Guide

This guide explains how to create new calculators for the Omni-Style Calculators platform. Follow these steps to ensure consistency, SEO optimization, and proper integration.

## Table of Contents
1. [Calculator Structure](#calculator-structure)
2. [Required Components](#required-components)
3. [SEO Requirements](#seo-requirements)
4. [Unit & Currency Support](#unit--currency-support)
5. [PDF Export](#pdf-export)
6. [Charts & Visualizations](#charts--visualizations)
7. [Registration](#registration)
8. [Best Practices](#best-practices)

---

## Calculator Structure

Each calculator consists of three main parts:
1. **Calculator Component** - Interactive calculation interface
2. **Content Component** - SEO-optimized article content
3. **Configuration Entry** - Registry entry in `src/config/calculators.ts`

---

## Required Components

### 1. Calculator Component (`src/components/calculators/[name]/[Name]Calculator.tsx`)

**Requirements:**
- Must be a client component (`'use client'` directive)
- Use default values so results show immediately on page load
- Calculate automatically using `useEffect` (no "Calculate" button needed)
- Support unit conversion if applicable (metric/imperial, currencies, etc.)
- Include a "Download PDF" button when results are available
- Include a "Show More" button to reveal charts/visualizations
- Use UI components from `@/components/ui/`

**Example Structure:**
```tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { generateCalculatorPDF } from '@/utils/pdfGenerator';

export default function YourCalculator() {
  const [input1, setInput1] = useState<string>('default-value');
  const [result, setResult] = useState<number | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  // Auto-calculate on input change
  useEffect(() => {
    // Calculation logic here
    if (input1) {
      const calculated = /* your formula */;
      setResult(calculated);
    }
  }, [input1]);

  const handleDownloadPDF = () => {
    if (!result) return;
    
    generateCalculatorPDF({
      title: 'Your Calculator Results',
      inputs: [
        { label: 'Input 1', value: input1 },
      ],
      results: [
        { label: 'Result', value: result.toString() },
      ],
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your Calculator</CardTitle>
        <CardDescription>Brief description</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input fields */}
        
        {result !== null && (
          <>
            {/* Results display */}
            <div className="flex gap-2">
              <Button onClick={handleDownloadPDF} className="flex-1" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={() => setShowCharts(!showCharts)}
                className="flex-1"
                variant="outline"
              >
                {showCharts ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Show More
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </CardContent>

      {showCharts && result !== null && (
        <CardFooter className="flex flex-col gap-6 pt-6 border-t">
          {/* Charts here using recharts */}
        </CardFooter>
      )}
    </Card>
  );
}
```

### 2. Content Component (`src/components/calculators/[name]/[Name]Content.tsx`)

**Requirements:**
- Must be a server component (no `'use client'`)
- Use semantic HTML (`<article>`, `<section>`, proper headings)
- Minimum 500-800 words for SEO
- Include formulas, examples, and real-world use cases
- Use proper heading hierarchy (H2, H3)
- Include code blocks for formulas
- Add highlighted example boxes
- Use card layouts for use cases

**SEO Content Structure:**
```tsx
import React from 'react';

export default function YourContent() {
  return (
    <article className="space-y-6 text-gray-700 leading-relaxed">
      {/* Introduction Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
          What is [Calculator Topic]?
        </h2>
        <p className="mb-4 text-lg leading-7">
          Comprehensive explanation (2-3 paragraphs) covering:
          - What the calculator does
          - Why it's useful
          - When to use it
        </p>
      </section>

      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          How to Calculate [Topic]
        </h2>
        <p className="mb-4 text-lg leading-7">
          Step-by-step explanation of the calculation process.
        </p>
        
        {/* Formula in code block */}
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded-r">
          <code className="text-base font-mono text-gray-900">
            Formula = (Variable1 × Variable2) / Variable3
          </code>
        </div>

        {/* Example */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-base text-gray-700">
            <strong className="text-gray-900">Example:</strong> 
            Worked example with numbers showing the calculation.
          </p>
        </div>
      </section>

      {/* Formula Breakdown */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
          Understanding the Formula
        </h3>
        <ul className="space-y-3 mb-6 list-none">
          <li className="text-lg flex items-start">
            <span className="font-bold text-gray-900 mr-2">Variable1:</span>
            <span>Explanation of what this variable represents</span>
          </li>
          {/* More variables */}
        </ul>
      </section>

      {/* Use Cases Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Real World Uses
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Use Case 1</h4>
            <p className="text-base text-gray-700">Description</p>
          </div>
          {/* More use cases */}
        </div>
      </section>

      {/* FAQ Section (Optional but recommended) */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Question 1?</h4>
            <p className="text-base text-gray-700">Answer</p>
          </div>
          {/* More FAQs */}
        </div>
      </section>
    </article>
  );
}
```

**SEO Content Checklist:**
- [ ] Minimum 500 words (800+ preferred)
- [ ] Include target keywords naturally (3-5 times)
- [ ] Use H2 for main sections, H3 for subsections
- [ ] Include at least one formula with explanation
- [ ] Provide 2-3 worked examples
- [ ] List 4+ real-world use cases
- [ ] Add FAQ section (5-7 questions)
- [ ] Use semantic HTML structure
- [ ] Include related terms and synonyms
- [ ] Write for readability (short paragraphs, clear language)

---

## SEO Requirements

### 1. Metadata Configuration

In `src/config/calculators.ts`, include comprehensive metadata:

```typescript
{
  id: 'your-calculator-id',
  title: 'Your Calculator Name',
  slug: 'your-calculator-slug', // URL-friendly, lowercase, hyphens
  description: 'Clear, compelling description (150-160 characters)',
  category: 'health' | 'finance' | 'math' | 'other',
  subcategory: 'fitness' | 'loans' | 'basic' | etc., // Optional
  authorId: 'author-id',
  component: YourCalculator,
  content: YourContent,
  meta: {
    title: 'Your Calculator - Primary Keyword | Omni-Style Calculators',
    description: 'SEO-optimized description (150-160 chars) with primary keyword and value proposition',
    keywords: [
      'primary keyword',
      'secondary keyword',
      'long-tail keyword',
      'related term 1',
      'related term 2',
    ],
  },
}
```

**SEO Metadata Best Practices:**
- **Title**: Include primary keyword, keep under 60 characters
- **Description**: Include primary keyword in first 120 characters, include call-to-action
- **Keywords**: 5-10 relevant keywords including:
  - Primary keyword (exact match)
  - Secondary keywords (variations)
  - Long-tail keywords
  - Related terms
  - Competitor keywords

### 2. Content SEO Guidelines

**Keyword Optimization:**
- Use primary keyword in H1 (page title)
- Include in first paragraph of content
- Use in at least 2-3 H2 headings
- Natural keyword density: 1-2% (don't overstuff)
- Use related keywords and synonyms throughout

**Content Structure:**
- Start with "What is..." section (answers user intent)
- Include "How to calculate..." section (instructional)
- Add "Formula" or "Calculation method" section
- Provide examples and use cases
- Include FAQ section (targets long-tail queries)

**Internal Linking:**
- Link to related calculators in the same category
- Link to author pages
- Link to category pages
- Use descriptive anchor text

### 3. Technical SEO

**URL Structure:**
- Use descriptive slugs: `/calculators/bmi-calculator`
- Keep slugs short and keyword-rich
- Use hyphens, not underscores

**Schema Markup:**
- Already handled in `src/app/calculators/[slug]/page.tsx`
- Includes WebApplication and BreadcrumbList schemas
- No additional action needed

**Performance:**
- Keep calculator component lightweight
- Lazy load charts (only when "Show More" is clicked)
- Optimize images if used

---

## Unit & Currency Support

### Implementing Unit Conversion

**For calculators with units (length, weight, temperature, etc.):**

```tsx
const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
const [value, setValue] = useState<string>('');

// Conversion functions
const convertToBase = (val: string, unit: string) => {
  if (unit === 'metric') return parseFloat(val);
  // Convert imperial to metric
  return parseFloat(val) * conversionFactor;
};

// In calculation
useEffect(() => {
  const baseValue = convertToBase(value, unitSystem);
  // Use baseValue for calculations
}, [value, unitSystem]);
```

**For calculators with currencies:**

```tsx
const [currency, setCurrency] = useState('$');
const currencies = ['$', '€', '£', '¥'];

// Display currency symbol
<span>{currency}{amount.toFixed(2)}</span>
```

**Best Practices:**
- Always provide default values
- Show unit labels clearly
- Support common units (metric/imperial for measurements)
- Support major currencies (USD, EUR, GBP) for financial calculators
- Update calculations automatically when units change

---

## PDF Export

**Required Implementation:**

```tsx
import { generateCalculatorPDF } from '@/utils/pdfGenerator';

const handleDownloadPDF = () => {
  if (!result) return;

  generateCalculatorPDF({
    title: 'Calculator Name Results',
    inputs: [
      { label: 'Input Label', value: 'Input Value' },
      // All user inputs
    ],
    results: [
      { label: 'Result Label', value: result.toString() },
      // All calculated results
    ],
  });
};
```

**PDF Requirements:**
- Include all input values with labels
- Include all calculated results
- Use clear, descriptive labels
- Format numbers appropriately (decimals, currency symbols)

---

## Charts & Visualizations

**Using Recharts:**

```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Chart data
const chartData = [
  { name: 'Category 1', value: 100 },
  { name: 'Category 2', value: 200 },
];

// In CardFooter when showCharts is true
<CardFooter className="flex flex-col gap-6 pt-6 border-t">
  <div className="w-full">
    <h3 className="text-lg font-semibold mb-4 text-center">Chart Title</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</CardFooter>
```

**Chart Best Practices:**
- Show relevant visualizations (not just decorative)
- Use appropriate chart types:
  - Bar charts for categories
  - Line charts for trends over time
  - Pie charts for proportions
- Keep charts responsive
- Use consistent color scheme (blue for primary, red for warnings)
- Add clear titles and labels

---

## Registration

### Adding to Calculator Registry

In `src/config/calculators.ts`:

```typescript
import YourCalculator from '@/components/calculators/your-calc/YourCalculator';
import YourContent from '@/components/calculators/your-calc/YourContent';

export const calculators: CalculatorConfig[] = [
  // ... existing calculators
  {
    id: 'your-calculator-id',
    title: 'Your Calculator Name',
    slug: 'your-calculator-slug',
    description: 'Clear description (used in listings)',
    category: 'health', // or 'finance', 'math', 'other'
    subcategory: 'fitness', // Optional, see src/types/index.ts for options
    authorId: 'author-id', // Must exist in src/config/authors.ts
    component: YourCalculator,
    content: YourContent,
    meta: {
      title: 'SEO Title - Primary Keyword | Omni-Style Calculators',
      description: 'SEO description with keywords (150-160 chars)',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
  },
];
```

### Assigning Authors

- Authors must exist in `src/config/authors.ts`
- Assign based on category expertise:
  - Health calculators → Medical experts
  - Finance calculators → Financial advisors
  - Math calculators → Math professors
- Each calculator must have an `authorId`

---

## Best Practices

### Code Quality
- [ ] Use TypeScript types for all state variables
- [ ] Handle edge cases (division by zero, negative numbers, etc.)
- [ ] Validate inputs before calculations
- [ ] Show error messages for invalid inputs
- [ ] Use consistent naming conventions
- [ ] Add comments for complex calculations

### User Experience
- [ ] Provide default values (results show immediately)
- [ ] Auto-calculate on input change (no button needed)
- [ ] Show loading states if calculations are slow
- [ ] Display results clearly with proper formatting
- [ ] Include helpful placeholder text
- [ ] Add tooltips for complex inputs

### Accessibility
- [ ] Use proper HTML labels for all inputs
- [ ] Ensure keyboard navigation works
- [ ] Use semantic HTML elements
- [ ] Provide alt text for any images
- [ ] Ensure color contrast meets WCAG standards

### Performance
- [ ] Keep calculations efficient
- [ ] Avoid unnecessary re-renders
- [ ] Lazy load charts (only when expanded)
- [ ] Optimize any images used

### SEO Content Writing
- [ ] Write for humans first, search engines second
- [ ] Use natural language, avoid keyword stuffing
- [ ] Answer common questions users might have
- [ ] Include examples and use cases
- [ ] Update content regularly if formulas change
- [ ] Use internal links to related calculators

### Testing Checklist
- [ ] Calculator works with default values
- [ ] Results update when inputs change
- [ ] Unit conversion works correctly
- [ ] PDF download includes all data
- [ ] Charts display correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SEO metadata is correct
- [ ] Content is readable and well-formatted

---

## File Structure Example

```
src/
├── components/
│   └── calculators/
│       └── your-calculator/
│           ├── YourCalculator.tsx    # Interactive calculator
│           └── YourContent.tsx       # SEO article content
├── config/
│   └── calculators.ts                 # Add your calculator here
└── types/
    └── index.ts                       # Types (already defined)
```

---

## Quick Start Checklist

1. [ ] Create calculator component with default values
2. [ ] Create content component (500+ words, SEO optimized)
3. [ ] Add unit/currency support if applicable
4. [ ] Implement PDF download functionality
5. [ ] Add charts/visualizations (optional but recommended)
6. [ ] Register calculator in `src/config/calculators.ts`
7. [ ] Assign appropriate author
8. [ ] Add subcategory if applicable
9. [ ] Write SEO metadata (title, description, keywords)
10. [ ] Test all functionality
11. [ ] Verify SEO content quality
12. [ ] Check mobile responsiveness

---

## SEO Keyword Research Tips

Before creating a calculator, research:
1. **Primary keyword**: Main search term (e.g., "BMI calculator")
2. **Long-tail keywords**: Specific queries (e.g., "BMI calculator for women")
3. **Related terms**: Synonyms and variations
4. **Competitor analysis**: What keywords do similar calculators rank for?
5. **User intent**: What are users trying to accomplish?

**Tools to use:**
- Google Keyword Planner
- Google Trends
- Answer The Public
- Competitor analysis

---

## Common Mistakes to Avoid

1. ❌ **Forgetting default values** - Users should see results immediately
2. ❌ **Requiring a "Calculate" button** - Should auto-calculate
3. ❌ **Thin content** - Need 500+ words for SEO
4. ❌ **Keyword stuffing** - Use keywords naturally
5. ❌ **Missing unit support** - Add if applicable
6. ❌ **No PDF export** - Always include this feature
7. ❌ **Poor error handling** - Validate inputs
8. ❌ **Not testing edge cases** - Test with various inputs
9. ❌ **Ignoring mobile** - Ensure responsive design
10. ❌ **Weak metadata** - Invest time in SEO metadata

---

## Support & Resources

- **UI Components**: `src/components/ui/`
- **PDF Generator**: `src/utils/pdfGenerator.ts`
- **Types**: `src/types/index.ts`
- **Author Config**: `src/config/authors.ts`
- **Calculator Examples**: 
  - `src/components/calculators/bmi/`
  - `src/components/calculators/loan/`
  - `src/components/calculators/percentage/`

---

## Questions?

Refer to existing calculators for examples:
- BMI Calculator (health category, unit conversion)
- Loan Calculator (finance category, currency support, charts)
- Percentage Calculator (math category, multiple calculation types)


