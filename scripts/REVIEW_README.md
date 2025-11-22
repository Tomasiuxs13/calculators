# Calculator Review Automation

This script automatically reviews all calculators in the project to ensure they meet quality standards.

## What It Checks

The review automation checks each calculator for:

1. **Correctness**
   - Mathematical/logical correctness
   - Division by zero protection
   - NaN handling
   - Input validation

2. **Simplicity**
   - Complexity scoring (1-10, lower is simpler)
   - Code structure and patterns

3. **SEO Readiness** ⭐ NEW
   - Word count (minimum 500 words, 800+ preferred)
   - Heading structure (H2, H3 hierarchy)
   - Primary keyword usage (in H2 headings, first paragraph)
   - Formula sections
   - Examples and use cases
   - FAQ sections
   - Semantic HTML (article, section tags)
   - Meta tags (title, description, keywords)
   - SEO score (1-10)

4. **Unit & Currency Support**
   - Detects unit conversion support (length, weight, volume, temperature, etc.)
   - Detects currency support (USD, EUR, GBP, etc.)
   - Coverage analysis across all calculators

5. **Code Quality**
   - Required patterns (useState, useEffect, 'use client')
   - Default values for immediate results
   - PDF export functionality
   - CalculatorLayout usage

## Usage

Run the review script:

```bash
npm run review:calculators
```

This will:
1. Analyze all calculators in `src/config/calculators.ts`
2. Review each calculator component file
3. Generate a comprehensive report saved to `CALCULATOR_REVIEW_REPORT.txt`
4. Display summary statistics in the console

## Report Contents

The generated report includes:

- **Overall Statistics**: 
  - Average scores (complexity, correctness, SEO, overall)
  - Average content word count
  - Unit/currency coverage percentages
  - Content file coverage
- **Coverage Analysis**: 
  - Unit types covered (length, weight, volume, etc.)
  - Currencies covered
  - Category distribution
- **Calculators with Issues**: 
  - Detailed list of all issues found
  - Separated by Code/Functionality and SEO issues
- **Top/Bottom Performers**: 
  - Best and worst calculators by overall score
  - **Top/Bottom SEO Performers**: Best and worst by SEO score
- **Recommendations**: Actionable suggestions for improvement

## Scoring System

Each calculator receives scores (1-10):

- **Complexity Score**: Lower is simpler (1 = very simple, 10 = very complex)
- **Correctness Score**: Higher is better (10 = perfect, 0 = critical errors)
- **SEO Score**: Higher is better (10 = fully optimized)
  - Word count (500+ words)
  - Heading structure (H2, H3)
  - Keyword optimization
  - Content elements (formulas, examples, FAQs)
  - Meta tags quality
- **Overall Score**: Weighted combination
  - Simplicity: 20%
  - Correctness: 30%
  - SEO: 30%
  - Unit/Currency Support: 20%

## Issue Severity Levels

- **Error** ❌: Critical issues that must be fixed
  - Missing files (calculator or content)
  - No calculations
  - Missing meta tags
  - No H2 headings
- **Warning** ⚠️: Should be addressed
  - Missing validation
  - No PDF export
  - Content too short (< 500 words)
  - Missing keyword optimization
  - Meta description length issues
- **Info** ℹ️: Suggestions for improvement
  - Not using CalculatorLayout
  - Missing use cases or FAQs
  - Complexity notes

## Interpreting Results

### Good Scores
- Overall Score: 7-10
- Complexity: 1-5 (simple)
- Correctness: 8-10 (excellent)

### Needs Attention
- Overall Score: 4-6
- Multiple warnings
- Missing unit/currency support where applicable

### Critical Issues
- Overall Score: 0-3
- Errors present
- Missing core functionality

## Recommendations

The script provides recommendations such as:
- Adding unit support to more calculators
- Adding currency support to financial calculators
- Fixing errors immediately
- Addressing common warnings

## Example Output

```
CALCULATOR REVIEW REPORT
================================================================================

Total Calculators Reviewed: 250
Total Issues Found: 45
  - Errors: 2
  - Warnings: 28
  - Info: 15

OVERALL STATISTICS
--------------------------------------------------------------------------------
Average Overall Score: 7.2/10
Average Complexity Score: 4.1/10 (lower is simpler)
Average Correctness Score: 8.5/10
Calculators with Unit Support: 85/250 (34.0%)
Calculators with Currency Support: 12/250 (4.8%)

COVERAGE ANALYSIS
--------------------------------------------------------------------------------
Unit Types Covered:
  - length: 8 calculator(s)
  - weight: 6 calculator(s)
  - volume: 4 calculator(s)
  ...
```

## Integration

You can integrate this into your CI/CD pipeline:

```bash
npm run review:calculators && cat CALCULATOR_REVIEW_REPORT.txt
```

Or use it as a pre-commit check to ensure new calculators meet quality standards.

