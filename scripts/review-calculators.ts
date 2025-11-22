#!/usr/bin/env tsx

/**
 * Calculator Review Automation
 * 
 * Reviews all calculators to ensure they:
 * 1. Make sense (logical purpose)
 * 2. Are simple (not overly complex)
 * 3. Work correctly (calculations are correct)
 * 4. Cover different unit types and currencies
 */

import * as fs from 'fs';
import * as path from 'path';
import { calculators } from '../src/config/calculators';

interface ReviewIssue {
  severity: 'error' | 'warning' | 'info';
  category: string;
  message: string;
  suggestion?: string;
}

interface SEOAnalysis {
  wordCount: number;
  hasH2Headings: boolean;
  hasH3Headings: boolean;
  h2Count: number;
  h3Count: number;
  hasFormula: boolean;
  hasExamples: boolean;
  hasUseCases: boolean;
  hasFAQ: boolean;
  hasSemanticHTML: boolean;
  primaryKeywordInH2: boolean;
  primaryKeywordInFirstParagraph: boolean;
  metaTitleLength: number;
  metaDescriptionLength: number;
  keywordsCount: number;
  seoScore: number; // 1-10
  seoIssues: ReviewIssue[];
}

interface CalculatorReview {
  id: string;
  title: string;
  slug: string;
  category: string;
  issues: ReviewIssue[];
  hasUnitSupport: boolean;
  hasCurrencySupport: boolean;
  unitTypes: string[];
  currencies: string[];
  complexityScore: number; // 1-10, lower is simpler
  correctnessScore: number; // 1-10, higher is better
  seoAnalysis: SEOAnalysis | null;
  overallScore: number; // 1-10
}

interface CoverageAnalysis {
  unitTypes: Map<string, number>;
  currencies: Map<string, number>;
  categories: Map<string, number>;
  converters: number;
  financial: number;
  health: number;
  math: number;
}

// Common unit types to look for
const UNIT_PATTERNS = {
  length: ['mm', 'cm', 'm', 'km', 'in', 'ft', 'yd', 'mi', 'meter', 'kilometer', 'inch', 'foot', 'mile'],
  weight: ['kg', 'g', 'lb', 'lbs', 'oz', 'ton', 'kilogram', 'pound', 'ounce'],
  volume: ['l', 'ml', 'gal', 'fl oz', 'cup', 'liter', 'gallon', 'milliliter'],
  temperature: ['c', 'f', 'k', 'celsius', 'fahrenheit', 'kelvin'],
  area: ['m²', 'ft²', 'acre', 'hectare', 'square meter', 'square foot'],
  speed: ['km/h', 'mph', 'm/s', 'kph', 'kilometer per hour', 'mile per hour'],
  time: ['s', 'min', 'h', 'day', 'week', 'month', 'year', 'second', 'minute', 'hour'],
  energy: ['j', 'kj', 'cal', 'kcal', 'joule', 'calorie', 'kilocalorie'],
  pressure: ['pa', 'psi', 'bar', 'atm', 'pascal', 'pound per square inch'],
  data: ['b', 'kb', 'mb', 'gb', 'tb', 'byte', 'kilobyte', 'megabyte', 'gigabyte'],
  angle: ['deg', 'rad', 'degree', 'radian'],
  power: ['w', 'kw', 'hp', 'watt', 'kilowatt', 'horsepower'],
  force: ['n', 'lbf', 'newton', 'pound force'],
  frequency: ['hz', 'khz', 'mhz', 'ghz', 'hertz'],
};

// Common currencies to look for
const CURRENCY_PATTERNS = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', '$', '€', '£', '¥', 'dollar', 'euro', 'pound', 'yen'];

// Keywords that suggest complexity
const COMPLEXITY_KEYWORDS = [
  'matrix', 'regression', 'distribution', 'statistical', 'quantum', 'thermodynamic',
  'stoichiometry', 'genetic', 'molecular', 'equilibrium', 'differential', 'integral',
  'optimization', 'simulation', 'algorithm', 'recursive', 'iterative'
];

// Keywords that suggest simplicity
const SIMPLICITY_KEYWORDS = [
  'convert', 'add', 'subtract', 'multiply', 'divide', 'percentage', 'tip', 'discount',
  'basic', 'simple', 'quick'
];

function analyzeSEOContent(contentPath: string | null, calc: any): SEOAnalysis {
  const seoIssues: ReviewIssue[] = [];
  let wordCount = 0;
  let hasH2Headings = false;
  let hasH3Headings = false;
  let h2Count = 0;
  let h3Count = 0;
  let hasFormula = false;
  let hasExamples = false;
  let hasUseCases = false;
  let hasFAQ = false;
  let hasSemanticHTML = false;
  let primaryKeywordInH2 = false;
  let primaryKeywordInFirstParagraph = false;
  let seoScore = 0;

  if (!contentPath || !fs.existsSync(contentPath)) {
    seoIssues.push({
      severity: 'error',
      category: 'seo',
      message: 'Content file not found',
      suggestion: 'Create a Content component for SEO optimization',
    });
    return {
      wordCount: 0,
      hasH2Headings: false,
      hasH3Headings: false,
      h2Count: 0,
      h3Count: 0,
      hasFormula: false,
      hasExamples: false,
      hasUseCases: false,
      hasFAQ: false,
      hasSemanticHTML: false,
      primaryKeywordInH2: false,
      primaryKeywordInFirstParagraph: false,
      metaTitleLength: 0,
      metaDescriptionLength: 0,
      keywordsCount: 0,
      seoScore: 0,
      seoIssues,
    };
  }

  const content = fs.readFileSync(contentPath, 'utf-8');
  
  // Extract text content (remove JSX tags for word count)
  const textContent = content
    .replace(/<[^>]+>/g, ' ') // Remove JSX tags
    .replace(/\{.*?\}/g, ' ') // Remove JSX expressions
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

  // Check word count
  if (wordCount < 500) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: `Content is too short (${wordCount} words, minimum 500 recommended)`,
      suggestion: 'Expand content to at least 500 words (800+ preferred)',
    });
  } else if (wordCount >= 800) {
    seoScore += 2; // Bonus for comprehensive content
  } else {
    seoScore += 1;
  }

  // Check heading structure
  const h2Matches = content.match(/<h2[^>]*>/gi) || [];
  const h3Matches = content.match(/<h3[^>]*>/gi) || [];
  h2Count = h2Matches.length;
  h3Count = h3Matches.length;
  hasH2Headings = h2Count > 0;
  hasH3Headings = h3Count > 0;

  if (!hasH2Headings) {
    seoIssues.push({
      severity: 'error',
      category: 'seo',
      message: 'No H2 headings found',
      suggestion: 'Add H2 headings for main sections (What is..., How to calculate..., etc.)',
    });
  } else if (h2Count < 3) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: `Only ${h2Count} H2 heading(s) found (recommend 3+)`,
      suggestion: 'Add more H2 headings for better content structure',
    });
  } else {
    seoScore += 1;
  }

  if (hasH3Headings) {
    seoScore += 0.5; // Bonus for subsections
  }

  // Check for semantic HTML
  if (content.includes('<article') && content.includes('<section')) {
    hasSemanticHTML = true;
    seoScore += 1;
  } else {
    seoIssues.push({
      severity: 'info',
      category: 'seo',
      message: 'Not using semantic HTML (article, section tags)',
      suggestion: 'Use <article> and <section> tags for better SEO',
    });
  }

  // Check for formula
  if (content.includes('formula') || content.includes('Formula') || 
      content.includes('<code') || content.includes('bg-gray-50 border-l-4')) {
    hasFormula = true;
    seoScore += 1;
  } else {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: 'No formula section detected',
      suggestion: 'Add a formula section with code blocks',
    });
  }

  // Check for examples
  if (content.toLowerCase().includes('example') || 
      content.includes('bg-blue-50') || 
      content.includes('Example:')) {
    hasExamples = true;
    seoScore += 1;
  } else {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: 'No examples detected',
      suggestion: 'Add 2-3 worked examples with numbers',
    });
  }

  // Check for use cases
  const useCaseKeywords = ['use case', 'use cases', 'real world', 'applications', 'when to use'];
  if (useCaseKeywords.some(keyword => content.toLowerCase().includes(keyword))) {
    hasUseCases = true;
    seoScore += 1;
  } else {
    seoIssues.push({
      severity: 'info',
      category: 'seo',
      message: 'No use cases section detected',
      suggestion: 'Add a "Real World Uses" or "Use Cases" section',
    });
  }

  // Check for FAQ
  if (content.toLowerCase().includes('frequently asked') || 
      content.toLowerCase().includes('faq') ||
      content.toLowerCase().includes('question')) {
    hasFAQ = true;
    seoScore += 1;
  } else {
    seoIssues.push({
      severity: 'info',
      category: 'seo',
      message: 'No FAQ section detected',
      suggestion: 'Add a FAQ section with 5-7 common questions',
    });
  }

  // Extract primary keyword from title (first word or main term)
  const primaryKeyword = calc.title.toLowerCase()
    .replace(/\s+calculator.*/i, '')
    .replace(/\s+converter.*/i, '')
    .trim()
    .split(/\s+/)[0];

  // Check if primary keyword appears in H2 headings
  const h2Text = content.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  primaryKeywordInH2 = h2Text.some(h2 => 
    h2.toLowerCase().includes(primaryKeyword)
  );

  if (!primaryKeywordInH2) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: 'Primary keyword not found in H2 headings',
      suggestion: `Include "${primaryKeyword}" in at least one H2 heading`,
    });
  } else {
    seoScore += 1;
  }

  // Check first paragraph for primary keyword
  const firstParagraph = textContent.split('\n').find(p => p.trim().length > 50) || '';
  primaryKeywordInFirstParagraph = firstParagraph.toLowerCase().includes(primaryKeyword);

  if (!primaryKeywordInFirstParagraph) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: 'Primary keyword not in first paragraph',
      suggestion: `Include "${primaryKeyword}" in the first paragraph of content`,
    });
  } else {
    seoScore += 1;
  }

  // Check meta tags from config
  const metaTitleLength = calc.meta?.title?.length || 0;
  const metaDescriptionLength = calc.meta?.description?.length || 0;
  const keywordsCount = calc.meta?.keywords?.length || 0;

  if (metaTitleLength === 0) {
    seoIssues.push({
      severity: 'error',
      category: 'seo',
      message: 'Missing meta title',
      suggestion: 'Add meta.title in calculator config',
    });
  } else if (metaTitleLength > 60) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: `Meta title too long (${metaTitleLength} chars, max 60 recommended)`,
      suggestion: 'Shorten meta title to 50-60 characters',
    });
  } else {
    seoScore += 0.5;
  }

  if (metaDescriptionLength === 0) {
    seoIssues.push({
      severity: 'error',
      category: 'seo',
      message: 'Missing meta description',
      suggestion: 'Add meta.description in calculator config',
    });
  } else if (metaDescriptionLength < 120 || metaDescriptionLength > 160) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: `Meta description length (${metaDescriptionLength} chars) should be 120-160 characters`,
      suggestion: 'Adjust meta description to 120-160 characters',
    });
  } else {
    seoScore += 0.5;
  }

  if (keywordsCount === 0) {
    seoIssues.push({
      severity: 'warning',
      category: 'seo',
      message: 'No keywords defined',
      suggestion: 'Add 5-10 keywords in meta.keywords array',
    });
  } else if (keywordsCount < 5) {
    seoIssues.push({
      severity: 'info',
      category: 'seo',
      message: `Only ${keywordsCount} keyword(s) defined (recommend 5-10)`,
      suggestion: 'Add more keywords for better SEO',
    });
  } else {
    seoScore += 0.5;
  }

  // Normalize SEO score to 1-10
  seoScore = Math.min(10, Math.max(0, seoScore));

  return {
    wordCount,
    hasH2Headings,
    hasH3Headings,
    h2Count,
    h3Count,
    hasFormula,
    hasExamples,
    hasUseCases,
    hasFAQ,
    hasSemanticHTML,
    primaryKeywordInH2,
    primaryKeywordInFirstParagraph,
    metaTitleLength,
    metaDescriptionLength,
    keywordsCount,
    seoScore: Math.round(seoScore * 10) / 10,
    seoIssues,
  };
}

function analyzeCalculatorFile(filePath: string): {
  content: string;
  hasUnitSupport: boolean;
  hasCurrencySupport: boolean;
  unitTypes: string[];
  currencies: string[];
  complexityScore: number;
  correctnessScore: number;
  issues: ReviewIssue[];
} {
  const issues: ReviewIssue[] = [];
  let hasUnitSupport = false;
  let hasCurrencySupport = false;
  const unitTypes: string[] = [];
  const currencies: string[] = [];
  let complexityScore = 5; // Default medium complexity
  let correctnessScore = 7; // Default good correctness

  if (!fs.existsSync(filePath)) {
    issues.push({
      severity: 'error',
      category: 'file',
      message: `Calculator file not found: ${filePath}`,
    });
    return { content: '', hasUnitSupport, hasCurrencySupport, unitTypes, currencies, complexityScore, correctnessScore, issues };
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for required patterns
  if (!content.includes("'use client'")) {
    issues.push({
      severity: 'error',
      category: 'structure',
      message: 'Missing "use client" directive',
      suggestion: 'Add \'use client\' at the top of the file',
    });
  }

  if (!content.includes('useState')) {
    issues.push({
      severity: 'error',
      category: 'structure',
      message: 'Missing useState hook',
      suggestion: 'Calculator should use React state',
    });
  }

  if (!content.includes('useEffect')) {
    issues.push({
      severity: 'warning',
      category: 'structure',
      message: 'Missing useEffect for auto-calculation',
      suggestion: 'Consider using useEffect for automatic calculation on input change',
    });
  }

  // Check for default values
  const defaultValuePattern = /useState<string>\(['"][^'"]+['"]\)|useState<number>\([0-9.]+\)/g;
  const hasDefaultValues = defaultValuePattern.test(content);
  if (!hasDefaultValues) {
    issues.push({
      severity: 'warning',
      category: 'ux',
      message: 'No default values detected',
      suggestion: 'Add default values so results show immediately on page load',
    });
  }

  // Check for PDF export
  if (!content.includes('generateCalculatorPDF')) {
    issues.push({
      severity: 'warning',
      category: 'features',
      message: 'Missing PDF export functionality',
      suggestion: 'Add PDF download using generateCalculatorPDF',
    });
  }

  // Check for CalculatorLayout
  if (!content.includes('CalculatorLayout')) {
    // This is optional, so make it info level
    issues.push({
      severity: 'info',
      category: 'structure',
      message: 'Not using CalculatorLayout component',
      suggestion: 'Consider using CalculatorLayout for consistency',
    });
  }

  // Detect unit support - be more specific to avoid false positives
  // Look for unit arrays, type definitions, or conversion objects
  const unitContextPatterns = [
    /type\s+\w+Unit\s*=/,
    /const\s+\w+Conversions?\s*[:=]/,
    /unit\s*[:=]\s*['"]/,
    /fromUnit|toUnit|unitSystem/i,
    /Select.*unit/i,
  ];
  
  const hasUnitContext = unitContextPatterns.some(pattern => pattern.test(content));
  
  if (hasUnitContext) {
    for (const [unitType, patterns] of Object.entries(UNIT_PATTERNS)) {
      // Check for unit patterns in context (not just anywhere)
      const unitRegex = new RegExp(`\\b(${patterns.join('|')})\\b`, 'i');
      if (unitRegex.test(content)) {
        hasUnitSupport = true;
        unitTypes.push(unitType);
      }
    }
  }

  // Detect currency support - look for currency arrays, types, or conversion
  const currencyContextPatterns = [
    /type\s+\w*[Cc]urrency\s*=/,
    /const\s+\w*[Cc]urrency/,
    /exchangeRates?/i,
    /fromCurrency|toCurrency/i,
    /currency\s*[:=]/i,
  ];
  
  const hasCurrencyContext = currencyContextPatterns.some(pattern => pattern.test(content));
  
  if (hasCurrencyContext) {
    for (const currency of CURRENCY_PATTERNS) {
      // Check for currency in context (not just $ which appears everywhere)
      if (currency === '$') {
        // $ is too common, need more context
        if (content.includes('USD') || content.includes('currency') || content.includes('dollar')) {
          hasCurrencySupport = true;
          currencies.push(currency);
        }
      } else if (content.includes(currency)) {
        hasCurrencySupport = true;
        currencies.push(currency);
      }
    }
  }

  // Analyze complexity
  const complexityMatches = COMPLEXITY_KEYWORDS.filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase())
  ).length;
  const simplicityMatches = SIMPLICITY_KEYWORDS.filter(keyword => 
    content.toLowerCase().includes(keyword.toLowerCase())
  ).length;

  if (complexityMatches > simplicityMatches) {
    complexityScore = Math.min(10, 5 + complexityMatches);
    if (complexityScore > 7) {
      issues.push({
        severity: 'info',
        category: 'complexity',
        message: 'Calculator appears complex',
        suggestion: 'Ensure the calculator remains user-friendly despite complexity',
      });
    }
  } else if (simplicityMatches > complexityMatches) {
    complexityScore = Math.max(1, 5 - simplicityMatches);
  }

  // Check for common calculation errors
  // Division by zero checks - be more lenient
  const hasDivision = content.includes('/') && !content.includes('//');
  const hasGuards = content.includes('if') || content.includes('guard') || content.includes('check') || 
                    content.includes('isNaN') || content.includes('> 0') || content.includes('>= 0');
  if (hasDivision && !hasGuards) {
    issues.push({
      severity: 'warning',
      category: 'correctness',
      message: 'Potential division by zero - no guard detected',
      suggestion: 'Add validation to prevent division by zero',
    });
    correctnessScore -= 0.5;
  }

  // Check for NaN handling
  if (content.includes('parseFloat') || content.includes('parseInt')) {
    if (!content.includes('isNaN')) {
      issues.push({
        severity: 'warning',
        category: 'correctness',
        message: 'Missing NaN validation',
        suggestion: 'Add isNaN checks after parsing numbers',
      });
      correctnessScore -= 0.5;
    }
  }

  // Check for negative number handling (where applicable)
  if (content.includes('weight') || content.includes('height') || content.includes('amount')) {
    if (!content.includes('>= 0') && !content.includes('> 0') && !content.includes('min="0"')) {
      issues.push({
        severity: 'info',
        category: 'correctness',
        message: 'Consider validating for negative numbers',
        suggestion: 'Add validation to prevent negative values where not applicable',
      });
    }
  }

  // Check calculation logic patterns
  const hasCalculation = content.includes('=') && (
    content.includes('*') || content.includes('+') || content.includes('-') || content.includes('/')
  );
  if (!hasCalculation) {
    issues.push({
      severity: 'error',
      category: 'correctness',
      message: 'No calculation logic detected',
      suggestion: 'Ensure calculator performs actual calculations',
    });
    correctnessScore = 0;
  }

  return {
    content,
    hasUnitSupport,
    hasCurrencySupport,
    unitTypes: [...new Set(unitTypes)],
    currencies: [...new Set(currencies)],
    complexityScore,
    correctnessScore: Math.max(0, Math.min(10, correctnessScore)),
    issues,
  };
}

function findContentFile(slug: string, title: string): string | null {
  const baseDir = path.join(__dirname, '..', 'src', 'components', 'calculators', slug);
  
  if (!fs.existsSync(baseDir)) {
    return null;
  }

  // Look for Content files
  const files = fs.readdirSync(baseDir);
  const contentFile = files.find(f => 
    (f.endsWith('Content.tsx') || f.includes('Content')) && 
    !f.includes('Calculator')
  );

  if (contentFile) {
    return path.join(baseDir, contentFile);
  }

  // Try patterns
  const patterns = [
    `${title.replace(/\s+/g, '')}Content.tsx`,
    `${title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Content.tsx`,
    `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Content.tsx`,
  ];

  for (const pattern of patterns) {
    const filePath = path.join(baseDir, pattern);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

function findCalculatorFile(slug: string, title: string): string | null {
  const baseDir = path.join(__dirname, '..', 'src', 'components', 'calculators', slug);
  
  if (!fs.existsSync(baseDir)) {
    return null;
  }

  // First, check for files in the directory (most reliable)
  const files = fs.readdirSync(baseDir);
  const calculatorFile = files.find(f => 
    (f.endsWith('Calculator.tsx') || f.endsWith('Converter.tsx')) && 
    !f.includes('Content')
  );

  if (calculatorFile) {
    return path.join(baseDir, calculatorFile);
  }

  // Try different naming patterns as fallback
  const patterns = [
    `${title.replace(/\s+/g, '')}Calculator.tsx`,
    `${title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Calculator.tsx`,
    `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Calculator.tsx`,
    `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}.tsx`,
  ];

  for (const pattern of patterns) {
    const filePath = path.join(baseDir, pattern);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

function reviewCalculator(calc: any): CalculatorReview {
  const componentPath = findCalculatorFile(calc.slug, calc.title);
  const contentPath = findContentFile(calc.slug, calc.title);

  // Analyze SEO content
  const seoAnalysis = analyzeSEOContent(contentPath, calc);

  if (!componentPath) {
    return {
      id: calc.id,
      title: calc.title,
      slug: calc.slug,
      category: calc.category,
      issues: [
        {
          severity: 'error',
          category: 'file',
          message: `Calculator file not found for ${calc.slug}`,
          suggestion: 'Check if the component file exists in the correct directory',
        },
        ...seoAnalysis.seoIssues,
      ],
      hasUnitSupport: false,
      hasCurrencySupport: false,
      unitTypes: [],
      currencies: [],
      complexityScore: 10,
      correctnessScore: 0,
      seoAnalysis,
      overallScore: 0,
    };
  }

  const analysis = analyzeCalculatorFile(componentPath);

  // Combine all issues
  const allIssues = [...analysis.issues, ...seoAnalysis.seoIssues];

  // Calculate overall score (weighted average)
  // Simplicity: 20%, Correctness: 30%, SEO: 30%, Unit/Currency: 20%
  const overallScore = (
    (10 - analysis.complexityScore) * 0.2 + // Simplicity (20%)
    analysis.correctnessScore * 0.3 + // Correctness (30%)
    seoAnalysis.seoScore * 0.3 + // SEO (30%)
    (analysis.hasUnitSupport || analysis.hasCurrencySupport ? 2 : 0) * 0.2 // Unit/currency support (20%)
  );

  return {
    id: calc.id,
    title: calc.title,
    slug: calc.slug,
    category: calc.category,
    issues: allIssues,
    hasUnitSupport: analysis.hasUnitSupport,
    hasCurrencySupport: analysis.hasCurrencySupport,
    unitTypes: analysis.unitTypes,
    currencies: analysis.currencies,
    complexityScore: analysis.complexityScore,
    correctnessScore: analysis.correctnessScore,
    seoAnalysis,
    overallScore: Math.round(overallScore * 10) / 10,
  };
}

function generateReport(reviews: CalculatorReview[]): void {
  const coverage: CoverageAnalysis = {
    unitTypes: new Map(),
    currencies: new Map(),
    categories: new Map(),
    converters: 0,
    financial: 0,
    health: 0,
    math: 0,
  };

  let totalIssues = 0;
  let errorCount = 0;
  let warningCount = 0;
  let infoCount = 0;

  let totalWordCount = 0;
  let calculatorsWithSEO = 0;
  let avgWordCount = 0;
  let avgSEOScore = 0;

  reviews.forEach(review => {
    // Count issues
    review.issues.forEach(issue => {
      totalIssues++;
      if (issue.severity === 'error') errorCount++;
      else if (issue.severity === 'warning') warningCount++;
      else infoCount++;
    });

    // Track SEO metrics
    if (review.seoAnalysis) {
      totalWordCount += review.seoAnalysis.wordCount;
      calculatorsWithSEO++;
      avgSEOScore += review.seoAnalysis.seoScore;
    }

    // Track coverage
    review.unitTypes.forEach(unit => {
      coverage.unitTypes.set(unit, (coverage.unitTypes.get(unit) || 0) + 1);
    });

    review.currencies.forEach(currency => {
      coverage.currencies.set(currency, (coverage.currencies.get(currency) || 0) + 1);
    });

    coverage.categories.set(review.category, (coverage.categories.get(review.category) || 0) + 1);

    if (review.slug.includes('converter') || review.slug.includes('convert')) {
      coverage.converters++;
    }
    if (review.category === 'finance') coverage.financial++;
    if (review.category === 'health') coverage.health++;
    if (review.category === 'math') coverage.math++;
  });

  if (calculatorsWithSEO > 0) {
    avgWordCount = totalWordCount / calculatorsWithSEO;
    avgSEOScore = avgSEOScore / calculatorsWithSEO;
  }

  // Generate report
  const report: string[] = [];
  report.push('='.repeat(80));
  report.push('CALCULATOR REVIEW REPORT');
  report.push('='.repeat(80));
  report.push('');
  report.push(`Total Calculators Reviewed: ${reviews.length}`);
  report.push(`Total Issues Found: ${totalIssues}`);
  report.push(`  - Errors: ${errorCount}`);
  report.push(`  - Warnings: ${warningCount}`);
  report.push(`  - Info: ${infoCount}`);
  report.push('');

  // Overall statistics
  const avgScore = reviews.reduce((sum, r) => sum + r.overallScore, 0) / reviews.length;
  const avgComplexity = reviews.reduce((sum, r) => sum + r.complexityScore, 0) / reviews.length;
  const avgCorrectness = reviews.reduce((sum, r) => sum + r.correctnessScore, 0) / reviews.length;
  const calculatorsWithUnits = reviews.filter(r => r.hasUnitSupport).length;
  const calculatorsWithCurrency = reviews.filter(r => r.hasCurrencySupport).length;

  report.push('OVERALL STATISTICS');
  report.push('-'.repeat(80));
  report.push(`Average Overall Score: ${avgScore.toFixed(2)}/10`);
  report.push(`Average Complexity Score: ${avgComplexity.toFixed(2)}/10 (lower is simpler)`);
  report.push(`Average Correctness Score: ${avgCorrectness.toFixed(2)}/10`);
  report.push(`Average SEO Score: ${avgSEOScore.toFixed(2)}/10`);
  report.push(`Average Content Word Count: ${avgWordCount.toFixed(0)} words`);
  report.push(`Calculators with Unit Support: ${calculatorsWithUnits}/${reviews.length} (${((calculatorsWithUnits/reviews.length)*100).toFixed(1)}%)`);
  report.push(`Calculators with Currency Support: ${calculatorsWithCurrency}/${reviews.length} (${((calculatorsWithCurrency/reviews.length)*100).toFixed(1)}%)`);
  report.push(`Calculators with Content Files: ${calculatorsWithSEO}/${reviews.length} (${((calculatorsWithSEO/reviews.length)*100).toFixed(1)}%)`);
  report.push('');

  // Coverage Analysis
  report.push('COVERAGE ANALYSIS');
  report.push('-'.repeat(80));
  report.push('Unit Types Covered:');
  const sortedUnits = Array.from(coverage.unitTypes.entries()).sort((a, b) => b[1] - a[1]);
  sortedUnits.forEach(([unit, count]) => {
    report.push(`  - ${unit}: ${count} calculator(s)`);
  });
  report.push('');

  report.push('Currencies Covered:');
  const sortedCurrencies = Array.from(coverage.currencies.entries()).sort((a, b) => b[1] - a[1]);
  if (sortedCurrencies.length > 0) {
    sortedCurrencies.forEach(([currency, count]) => {
      report.push(`  - ${currency}: ${count} calculator(s)`);
    });
  } else {
    report.push('  - No currency support detected');
  }
  report.push('');

  report.push('Category Distribution:');
  const sortedCategories = Array.from(coverage.categories.entries()).sort((a, b) => b[1] - a[1]);
  sortedCategories.forEach(([category, count]) => {
    report.push(`  - ${category}: ${count} calculator(s)`);
  });
  report.push('');

  // Calculators with issues
  const calculatorsWithIssues = reviews.filter(r => r.issues.length > 0);
  if (calculatorsWithIssues.length > 0) {
    report.push('CALCULATORS WITH ISSUES');
    report.push('-'.repeat(80));
    calculatorsWithIssues.forEach(review => {
      report.push(`\n${review.title} (${review.slug})`);
      report.push(`  Category: ${review.category}`);
      report.push(`  Overall Score: ${review.overallScore}/10`);
      if (review.seoAnalysis) {
        report.push(`  SEO Score: ${review.seoAnalysis.seoScore}/10 | Word Count: ${review.seoAnalysis.wordCount}`);
      }
      report.push(`  Issues: ${review.issues.length}`);
      
      // Group issues by category
      const seoIssues = review.issues.filter(i => i.category === 'seo');
      const otherIssues = review.issues.filter(i => i.category !== 'seo');
      
      if (otherIssues.length > 0) {
        report.push(`  Code/Functionality Issues:`);
        otherIssues.forEach(issue => {
          const icon = issue.severity === 'error' ? '❌' : issue.severity === 'warning' ? '⚠️' : 'ℹ️';
          report.push(`    ${icon} [${issue.category}] ${issue.message}`);
          if (issue.suggestion) {
            report.push(`       → ${issue.suggestion}`);
          }
        });
      }
      
      if (seoIssues.length > 0) {
        report.push(`  SEO Issues:`);
        seoIssues.forEach(issue => {
          const icon = issue.severity === 'error' ? '❌' : issue.severity === 'warning' ? '⚠️' : 'ℹ️';
          report.push(`    ${icon} [${issue.category}] ${issue.message}`);
          if (issue.suggestion) {
            report.push(`       → ${issue.suggestion}`);
          }
        });
      }
    });
  }

  // Top and bottom performers
  const sortedByScore = [...reviews].sort((a, b) => b.overallScore - a.overallScore);
  report.push('');
  report.push('TOP 10 PERFORMERS');
  report.push('-'.repeat(80));
  sortedByScore.slice(0, 10).forEach((review, index) => {
    const seoInfo = review.seoAnalysis ? ` | SEO: ${review.seoAnalysis.seoScore}/10` : ' | SEO: N/A';
    report.push(`${index + 1}. ${review.title} - Score: ${review.overallScore}/10${seoInfo}`);
  });

  report.push('');
  report.push('BOTTOM 10 PERFORMERS (Need Attention)');
  report.push('-'.repeat(80));
  sortedByScore.slice(-10).reverse().forEach((review, index) => {
    const seoInfo = review.seoAnalysis ? ` | SEO: ${review.seoAnalysis.seoScore}/10` : ' | SEO: N/A';
    report.push(`${index + 1}. ${review.title} - Score: ${review.overallScore}/10${seoInfo}`);
  });

  // SEO-specific rankings
  const sortedBySEO = [...reviews]
    .filter(r => r.seoAnalysis)
    .sort((a, b) => (b.seoAnalysis?.seoScore || 0) - (a.seoAnalysis?.seoScore || 0));
  
  if (sortedBySEO.length > 0) {
    report.push('');
    report.push('TOP 10 SEO PERFORMERS');
    report.push('-'.repeat(80));
    sortedBySEO.slice(0, 10).forEach((review, index) => {
      const seo = review.seoAnalysis!;
      report.push(`${index + 1}. ${review.title} - SEO: ${seo.seoScore}/10 | Words: ${seo.wordCount} | H2s: ${seo.h2Count}`);
    });

    report.push('');
    report.push('BOTTOM 10 SEO PERFORMERS (Need SEO Improvement)');
    report.push('-'.repeat(80));
    sortedBySEO.slice(-10).reverse().forEach((review, index) => {
      const seo = review.seoAnalysis!;
      report.push(`${index + 1}. ${review.title} - SEO: ${seo.seoScore}/10 | Words: ${seo.wordCount} | H2s: ${seo.h2Count}`);
    });
  }

  // Recommendations
  report.push('');
  report.push('RECOMMENDATIONS');
  report.push('-'.repeat(80));
  
  if (calculatorsWithUnits < reviews.length * 0.3) {
    report.push('⚠️  Less than 30% of calculators support unit conversion. Consider adding unit support to more calculators.');
  }
  
  if (calculatorsWithCurrency < reviews.length * 0.1) {
    report.push('⚠️  Very few calculators support currency. Consider adding currency support to financial calculators.');
  }

  if (errorCount > 0) {
    report.push(`❌  ${errorCount} error(s) found. These should be fixed immediately.`);
  }

  if (warningCount > reviews.length * 0.5) {
    report.push(`⚠️  High number of warnings (${warningCount}). Consider addressing common issues.`);
  }

  const lowScoreCalculators = reviews.filter(r => r.overallScore < 5);
  if (lowScoreCalculators.length > 0) {
    report.push(`⚠️  ${lowScoreCalculators.length} calculator(s) have scores below 5/10. These need significant improvement.`);
  }

  const lowSEOCalculators = reviews.filter(r => r.seoAnalysis && r.seoAnalysis.seoScore < 5);
  if (lowSEOCalculators.length > 0) {
    report.push(`⚠️  ${lowSEOCalculators.length} calculator(s) have SEO scores below 5/10. These need SEO improvements.`);
  }

  const shortContentCalculators = reviews.filter(r => r.seoAnalysis && r.seoAnalysis.wordCount < 500);
  if (shortContentCalculators.length > 0) {
    report.push(`⚠️  ${shortContentCalculators.length} calculator(s) have content shorter than 500 words. Expand content for better SEO.`);
  }

  const missingContentCalculators = reviews.filter(r => !r.seoAnalysis || r.seoAnalysis.wordCount === 0);
  if (missingContentCalculators.length > 0) {
    report.push(`❌  ${missingContentCalculators.length} calculator(s) are missing content files. Create Content components for SEO.`);
  }

  report.push('');
  report.push('='.repeat(80));
  report.push('End of Report');
  report.push('='.repeat(80));

  // Write report to file
  const reportPath = path.join(__dirname, '..', 'CALCULATOR_REVIEW_REPORT.txt');
  fs.writeFileSync(reportPath, report.join('\n'), 'utf-8');
  console.log(`\n✅ Review complete! Report saved to: ${reportPath}\n`);

  // Also print summary to console
  console.log(report.join('\n'));
}

// Main execution
function main() {
  console.log('🔍 Starting calculator review...\n');
  
  const reviews: CalculatorReview[] = [];
  
  for (const calc of calculators) {
    try {
      const review = reviewCalculator(calc);
      reviews.push(review);
      console.log(`✓ Reviewed: ${calc.title}`);
    } catch (error) {
      console.error(`✗ Error reviewing ${calc.title}:`, error);
    }
  }

  console.log('\n📊 Generating report...\n');
  generateReport(reviews);
}

main();

