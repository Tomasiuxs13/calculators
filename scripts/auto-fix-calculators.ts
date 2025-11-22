#!/usr/bin/env tsx

/**
 * Auto-Fix Calculator Issues
 * 
 * Uses ChatGPT API to automatically fix issues found in calculator reviews:
 * - SEO issues (expand content, add keywords, fix meta descriptions)
 * - Code issues (add validation, fix NaN handling, add default values)
 * - Missing files (generate content files)
 */

import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import OpenAI from 'openai';
import { calculators } from '../src/config/calculators';

// Helper functions from review script
function findContentFile(slug: string, title: string): string | null {
  const baseDir = path.join(__dirname, '..', 'src', 'components', 'calculators', slug);
  
  if (!fs.existsSync(baseDir)) {
    return null;
  }

  const files = fs.readdirSync(baseDir);
  const contentFile = files.find(f => 
    (f.endsWith('Content.tsx') || f.includes('Content')) && 
    !f.includes('Calculator')
  );

  if (contentFile) {
    return path.join(baseDir, contentFile);
  }

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

  const files = fs.readdirSync(baseDir);
  const calculatorFile = files.find(f => 
    (f.endsWith('Calculator.tsx') || f.endsWith('Converter.tsx')) && 
    !f.includes('Content')
  );

  if (calculatorFile) {
    return path.join(baseDir, calculatorFile);
  }

  const patterns = [
    `${title.replace(/\s+/g, '')}Calculator.tsx`,
    `${title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Calculator.tsx`,
    `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Calculator.tsx`,
  ];

  for (const pattern of patterns) {
    const filePath = path.join(baseDir, pattern);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

// Simple review function to get issues
function getCalculatorIssues(calc: any): any[] {
  const issues: any[] = [];
  
  const calculatorPath = findCalculatorFile(calc.slug, calc.title);
  const contentPath = findContentFile(calc.slug, calc.title);

  // Check for missing files
  if (!calculatorPath || !fs.existsSync(calculatorPath)) {
    issues.push({
      severity: 'error',
      category: 'file',
      message: 'Calculator file not found',
      suggestion: 'Check if the component file exists in the correct directory',
    });
  }

  if (!contentPath || !fs.existsSync(contentPath)) {
    issues.push({
      severity: 'error',
      category: 'seo',
      message: 'Content file not found',
      suggestion: 'Create a Content component for SEO optimization',
    });
  } else {
    // Check content for SEO issues
    const content = fs.readFileSync(contentPath, 'utf-8');
    const textContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

    if (wordCount < 500) {
      issues.push({
        severity: 'warning',
        category: 'seo',
        message: `Content is too short (${wordCount} words, minimum 500 recommended)`,
        suggestion: 'Expand content to at least 500 words (800+ preferred)',
      });
    }

    const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
    if (h2Count < 3) {
      issues.push({
        severity: 'warning',
        category: 'seo',
        message: `Only ${h2Count} H2 heading(s) found (recommend 3+)`,
        suggestion: 'Add more H2 headings for better content structure',
      });
    }

    // Check meta tags
    if (calc.meta) {
      if (calc.meta.description && (calc.meta.description.length < 120 || calc.meta.description.length > 160)) {
        issues.push({
          severity: 'warning',
          category: 'seo',
          message: `Meta description length (${calc.meta.description.length} chars) should be 120-160 characters`,
          suggestion: 'Adjust meta description to 120-160 characters',
        });
      }

      if (!calc.meta.keywords || calc.meta.keywords.length < 5) {
        issues.push({
          severity: 'info',
          category: 'seo',
          message: `Only ${calc.meta.keywords?.length || 0} keyword(s) defined (recommend 5-10)`,
          suggestion: 'Add more keywords for better SEO',
        });
      }
    }
  }

  // Check calculator code
  if (calculatorPath && fs.existsSync(calculatorPath)) {
    const code = fs.readFileSync(calculatorPath, 'utf-8');
    
    if (!code.includes('isNaN') && (code.includes('parseFloat') || code.includes('parseInt'))) {
      issues.push({
        severity: 'warning',
        category: 'correctness',
        message: 'Missing NaN validation',
        suggestion: 'Add isNaN checks after parsing numbers',
      });
    }

    const defaultValuePattern = /useState<string>\(['"][^'"]+['"]\)|useState<number>\([0-9.]+\)/g;
    if (!defaultValuePattern.test(code)) {
      issues.push({
        severity: 'warning',
        category: 'ux',
        message: 'No default values detected',
        suggestion: 'Add default values so results show immediately on page load',
      });
    }
  }

  return issues;
}

config({ path: path.join(process.cwd(), '.env') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface FixOptions {
  fixSEO?: boolean;
  fixCode?: boolean;
  fixMissingFiles?: boolean;
  dryRun?: boolean;
  limit?: number; // Limit number of calculators to fix
  minScore?: number; // Only fix calculators below this score
}

interface FixResult {
  calculatorId: string;
  title: string;
  fixed: boolean;
  fixes: string[];
  errors: string[];
}

async function fixSEOContent(
  contentPath: string | null,
  calc: any,
  issues: any[]
): Promise<{ content: string; fixes: string[] }> {
  const fixes: string[] = [];
  let content = '';

  if (!contentPath || !fs.existsSync(contentPath)) {
    // Generate new content file
    const seoIssues = issues.filter(i => i.category === 'seo');
    const prompt = `You are an expert SEO content writer. Create a comprehensive SEO-optimized content component for a calculator.

CALCULATOR DETAILS:
- Title: ${calc.title}
- Category: ${calc.category}
- Description: ${calc.description}
- Slug: ${calc.slug}

REQUIREMENTS:
1. Minimum 500 words (800+ preferred)
2. Use semantic HTML: <article> and <section> tags
3. Include H2 headings (at least 3-4) with primary keyword "${calc.title.toLowerCase().replace(/\s+calculator.*/i, '').replace(/\s+converter.*/i, '').trim()}"
4. Include H3 headings for subsections
5. Start with "What is..." section
6. Include "How to Calculate..." section
7. Add formula section with code blocks (bg-gray-50 border-l-4 border-blue-500)
8. Add 2-3 worked examples (bg-blue-50 border border-blue-200)
9. Add "Real World Uses" or "Use Cases" section
10. Add FAQ section with 5-7 questions
11. Include primary keyword naturally in first paragraph and H2 headings
12. Use proper React component structure (export default function)
13. IMPORTANT: In JSX text content, escape comparison operators: use &lt; for < and &gt; for > (e.g., "k &lt; 10" not "k < 10", "&lt;60s" not "<60s")

ISSUES TO FIX:
${seoIssues.map(i => `- ${i.message}`).join('\n')}

Return ONLY the complete React component code, no explanations.`;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert React/TypeScript developer and SEO content writer. Always return valid React component code."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      });

      content = completion.choices[0].message.content || '';
      fixes.push('Generated new SEO content file');
    } catch (error: any) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  } else {
    // Fix existing content
    content = fs.readFileSync(contentPath, 'utf-8');
    const seoIssues = issues.filter(i => i.category === 'seo');

    if (seoIssues.length === 0) {
      return { content, fixes: [] };
    }

    const prompt = `You are an expert SEO content writer. Fix the following React content component to address SEO issues.

CURRENT CONTENT:
\`\`\`tsx
${content}
\`\`\`

CALCULATOR DETAILS:
- Title: ${calc.title}
- Category: ${calc.category}
- Primary Keyword: "${calc.title.toLowerCase().replace(/\s+calculator.*/i, '').replace(/\s+converter.*/i, '').trim()}"

ISSUES TO FIX:
${seoIssues.map(i => `- ${i.message}: ${i.suggestion || ''}`).join('\n')}

REQUIREMENTS:
1. Keep all existing good content
2. Fix the specific issues mentioned
3. Ensure minimum 500 words (expand if needed)
4. Add missing sections (use cases, FAQs, etc.)
5. Include primary keyword in H2 headings if missing
6. Maintain React component structure
7. Keep all existing styling and structure
8. IMPORTANT: In JSX text content, escape comparison operators: use &lt; for < and &gt; for > (e.g., "k &lt; 10" not "k < 10", "&lt;60s" not "<60s")

Return ONLY the complete fixed React component code, no explanations.`;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert React/TypeScript developer and SEO content writer. Always return valid React component code."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      });

      const fixedContent = completion.choices[0].message.content || '';
      
      // Extract code if wrapped in markdown
      const codeMatch = fixedContent.match(/```(?:tsx|ts|jsx)?\n([\s\S]*?)```/) || [null, fixedContent];
      content = codeMatch[1] || fixedContent;
      
      // Fix JSX parsing issues: escape < and > in text content within <p> tags
      // This handles cases like "k > 0", "n < 10", "<60s", ">90s" in text
      content = content.replace(/(<p[^>]*>)([\s\S]*?)(<\/p>)/g, (match, openTag, textContent, closeTag) => {
        // Escape < and > that are not part of HTML tags or already escaped
        let fixed = textContent
          .replace(/([^&])\s*<\s*(\d+[a-zA-Z]*)/g, '$1 &lt;$2')  // <60s, <10, etc.
          .replace(/([^&])\s*>\s*(\d+[a-zA-Z]*)/g, '$1 &gt;$2')  // >90s, >10, etc.
          .replace(/([a-zA-Z0-9])\s*<\s*([0-9])/g, '$1 &lt; $2')  // k < 0, n < 10
          .replace(/([a-zA-Z0-9])\s*>\s*([0-9])/g, '$1 &gt; $2'); // k > 0, n > 10
        return openTag + fixed + closeTag;
      });
      
      fixes.push(`Fixed ${seoIssues.length} SEO issue(s)`);
    } catch (error: any) {
      throw new Error(`Failed to fix content: ${error.message}`);
    }
  }

  return { content, fixes };
}

async function fixCalculatorCode(
  calculatorPath: string | null,
  calc: any,
  issues: any[]
): Promise<{ code: string; fixes: string[] }> {
  const fixes: string[] = [];
  let code = '';

  if (!calculatorPath || !fs.existsSync(calculatorPath)) {
    throw new Error('Calculator file not found - cannot auto-generate calculator component');
  }

  code = fs.readFileSync(calculatorPath, 'utf-8');
  const codeIssues = issues.filter(i => 
    i.category !== 'seo' && 
    i.category !== 'file' &&
    (i.severity === 'error' || i.severity === 'warning')
  );

  if (codeIssues.length === 0) {
    return { code, fixes: [] };
  }

  const prompt = `You are an expert React/TypeScript developer. Fix the following calculator component to address code issues.

CURRENT CODE:
\`\`\`tsx
${code.substring(0, 4000)}${code.length > 4000 ? '\n... (truncated)' : ''}
\`\`\`

CALCULATOR DETAILS:
- Title: ${calc.title}
- Category: ${calc.category}

ISSUES TO FIX:
${codeIssues.map(i => `- [${i.severity}] ${i.message}: ${i.suggestion || ''}`).join('\n')}

REQUIREMENTS:
1. Keep all existing functionality
2. Fix the specific issues mentioned
3. Maintain code structure and patterns
4. Add validation where needed
5. Ensure default values are present
6. Add NaN checks if missing
7. Maintain TypeScript types
8. Keep all imports and dependencies

Return ONLY the complete fixed React component code, no explanations.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert React/TypeScript developer. Always return valid React component code."
        },
        {
          role: "user",
          content: prompt
        }
      ],
    });

    const fixedCode = completion.choices[0].message.content || '';
    
    // Extract code if wrapped in markdown
    const codeMatch = fixedCode.match(/```(?:tsx|ts|jsx)?\n([\s\S]*?)```/) || [null, fixedCode];
    code = codeMatch[1] || fixedCode;
    
    fixes.push(`Fixed ${codeIssues.length} code issue(s)`);
  } catch (error: any) {
    throw new Error(`Failed to fix code: ${error.message}`);
  }

  return { code, fixes };
}

async function fixMetaTags(
  calc: any,
  issues: any[]
): Promise<{ meta: any; fixes: string[] }> {
  const fixes: string[] = [];
  const metaIssues = issues.filter(i => 
    i.category === 'seo' && 
    (i.message.includes('Meta') || i.message.includes('meta'))
  );

  if (metaIssues.length === 0) {
    return { meta: calc.meta, fixes: [] };
  }

  const prompt = `Fix the meta tags for a calculator to improve SEO.

CALCULATOR DETAILS:
- Title: ${calc.title}
- Category: ${calc.category}
- Description: ${calc.description}
- Current Meta Title: ${calc.meta?.title || 'N/A'}
- Current Meta Description: ${calc.meta?.description || 'N/A'}
- Current Keywords: ${JSON.stringify(calc.meta?.keywords || [])}

ISSUES TO FIX:
${metaIssues.map(i => `- ${i.message}: ${i.suggestion || ''}`).join('\n')}

REQUIREMENTS:
1. Meta title: 50-60 characters, include primary keyword
2. Meta description: 120-160 characters, include primary keyword in first 120 chars
3. Keywords: 5-10 relevant keywords including primary, secondary, and long-tail

Return ONLY a JSON object with this structure:
{
  "title": "...",
  "description": "...",
  "keywords": ["...", "..."]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert SEO specialist. Always return valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');
    fixes.push(`Fixed meta tags`);
    
    return { 
      meta: {
        ...calc.meta,
        ...result
      }, 
      fixes 
    };
  } catch (error: any) {
    throw new Error(`Failed to fix meta tags: ${error.message}`);
  }
}

async function fixCalculator(
  calc: any,
  options: FixOptions
): Promise<FixResult> {
  const result: FixResult = {
    calculatorId: calc.id,
    title: calc.title,
    fixed: false,
    fixes: [],
    errors: [],
  };

  try {
    // Get current issues
    const issues = getCalculatorIssues(calc);
    
    if (issues.length === 0) {
      return { ...result, fixes: ['No issues to fix'] };
    }
    const seoIssues = issues.filter(i => i.category === 'seo');
    const codeIssues = issues.filter(i => i.category !== 'seo' && i.category !== 'file');

    // Fix SEO content
    if (options.fixSEO !== false && seoIssues.length > 0) {
      try {
        const contentPath = findContentFile(calc.slug, calc.title);
        const { content, fixes: contentFixes } = await fixSEOContent(contentPath, calc, issues);
        
        if (!options.dryRun && content) {
          const dir = path.join(__dirname, '..', 'src/components/calculators', calc.slug);
          await fs.promises.mkdir(dir, { recursive: true });
          
          const fileName = contentPath || path.join(dir, `${calc.title.replace(/\s+/g, '')}Content.tsx`);
          await fs.promises.writeFile(fileName, content, 'utf-8');
          result.fixes.push(...contentFixes);
        } else if (options.dryRun) {
          result.fixes.push(...contentFixes.map(f => `[DRY RUN] ${f}`));
        }
      } catch (error: any) {
        result.errors.push(`SEO fix failed: ${error.message}`);
      }
    }

    // Fix calculator code
    if (options.fixCode !== false && codeIssues.length > 0) {
      try {
        const calculatorPath = findCalculatorFile(calc.slug, calc.title);
        const { code, fixes: codeFixes } = await fixCalculatorCode(calculatorPath, calc, issues);
        
        if (!options.dryRun && code && calculatorPath) {
          await fs.promises.writeFile(calculatorPath, code, 'utf-8');
          result.fixes.push(...codeFixes);
        } else if (options.dryRun) {
          result.fixes.push(...codeFixes.map(f => `[DRY RUN] ${f}`));
        }
      } catch (error: any) {
        result.errors.push(`Code fix failed: ${error.message}`);
      }
    }

    // Fix meta tags in config
    if (options.fixSEO !== false && seoIssues.some(i => i.message.includes('Meta'))) {
      try {
        const { meta, fixes: metaFixes } = await fixMetaTags(calc, issues);
        
        if (!options.dryRun) {
          // Note: This would require updating calculators.ts, which is complex
          // For now, we'll just report what needs to be fixed
          result.fixes.push(...metaFixes.map(f => `[CONFIG] ${f} - manual update needed in calculators.ts`));
        } else {
          result.fixes.push(...metaFixes.map(f => `[DRY RUN] ${f}`));
        }
      } catch (error: any) {
        result.errors.push(`Meta tags fix failed: ${error.message}`);
      }
    }

    result.fixed = result.fixes.length > 0;
  } catch (error: any) {
    result.errors.push(`Fix failed: ${error.message}`);
  }

  return result;
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set');
    console.log('\n📝 Please create a .env file in the project root with:');
    console.log('   OPENAI_API_KEY=sk-your-key-here');
    console.log('\n💡 Get your API key from: https://platform.openai.com/api-keys');
    process.exit(1);
  }

  // Parse command line arguments
  const args = process.argv.slice(2);
  const options: FixOptions = {
    fixSEO: !args.includes('--no-seo'),
    fixCode: !args.includes('--no-code'),
    fixMissingFiles: !args.includes('--no-missing'),
    dryRun: args.includes('--dry-run'),
    limit: args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : undefined,
    minScore: args.includes('--min-score') ? parseFloat(args[args.indexOf('--min-score') + 1]) : 0,
  };

  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  console.log('🔧 Starting auto-fix process...\n');
  console.log('Options:', {
    fixSEO: options.fixSEO,
    fixCode: options.fixCode,
    fixMissingFiles: options.fixMissingFiles,
    limit: options.limit,
    minScore: options.minScore,
  });
  console.log('');

  const results: FixResult[] = [];
  const calculatorsToFix = options.limit 
    ? calculators.slice(0, options.limit)
    : calculators;

  for (let i = 0; i < calculatorsToFix.length; i++) {
    const calc = calculatorsToFix[i];
    console.log(`[${i + 1}/${calculatorsToFix.length}] Fixing: ${calc.title}...`);
    
    try {
      const result = await fixCalculator(calc, options);
      results.push(result);

      if (result.fixed) {
        console.log(`  ✅ Fixed: ${result.fixes.join(', ')}`);
      } else if (result.errors.length > 0) {
        console.log(`  ❌ Errors: ${result.errors.join(', ')}`);
      } else {
        console.log(`  ℹ️  ${result.fixes[0] || 'No issues to fix'}`);
      }

      // Rate limiting
      if (i < calculatorsToFix.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error: any) {
      console.error(`  ❌ Failed: ${error.message}`);
      results.push({
        calculatorId: calc.id,
        title: calc.title,
        fixed: false,
        fixes: [],
        errors: [error.message],
      });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 AUTO-FIX SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total Processed: ${results.length}`);
  console.log(`Successfully Fixed: ${results.filter(r => r.fixed).length}`);
  console.log(`With Errors: ${results.filter(r => r.errors.length > 0).length}`);
  console.log(`No Issues: ${results.filter(r => !r.fixed && r.errors.length === 0).length}`);

  if (results.filter(r => r.fixed).length > 0) {
    console.log('\n✅ Successfully Fixed Calculators:');
    results.filter(r => r.fixed).forEach(r => {
      console.log(`  - ${r.title}: ${r.fixes.join(', ')}`);
    });
  }

  if (results.filter(r => r.errors.length > 0).length > 0) {
    console.log('\n❌ Calculators with Errors:');
    results.filter(r => r.errors.length > 0).forEach(r => {
      console.log(`  - ${r.title}: ${r.errors.join(', ')}`);
    });
  }

  // Save results to file
  const resultsPath = path.join(__dirname, '..', 'AUTO_FIX_RESULTS.json');
  await fs.promises.writeFile(resultsPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n📄 Results saved to: ${resultsPath}`);
}

main().catch(console.error);

