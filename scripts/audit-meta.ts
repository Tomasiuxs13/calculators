/**
 * Meta Audit Script
 *
 * Reports calculators with missing or suboptimal metadata:
 * - Missing keywords
 * - Title too long (>60 chars) or too short (<20 chars)
 * - Description too long (>160 chars) or too short (<80 chars)
 * - Missing FAQ data
 * - Missing subcategory
 *
 * Usage: npx tsx scripts/audit-meta.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const CONFIG_FILE = path.join(__dirname, '..', 'src', 'config', 'calculators.ts');

interface Issue {
  slug: string;
  title: string;
  problems: string[];
}

function main() {
  const configContent = fs.readFileSync(CONFIG_FILE, 'utf-8');

  // Extract calculator entries using regex
  const entryRegex = /\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*slug:\s*'([^']+)',/g;
  const issues: Issue[] = [];
  let totalCalcs = 0;
  let missingKeywords = 0;
  let missingFaq = 0;
  let missingSubcategory = 0;
  let titleTooLong = 0;
  let titleTooShort = 0;
  let descTooLong = 0;
  let descTooShort = 0;

  let match;
  while ((match = entryRegex.exec(configContent)) !== null) {
    totalCalcs++;
    const [, id, title, slug] = match;
    const problems: string[] = [];

    // Find the full entry for this calculator (from slug to next entry)
    const slugPos = configContent.indexOf(`slug: '${slug}'`);
    const nextEntryPos = configContent.indexOf("\n  {", slugPos + 1);
    const entry = configContent.substring(slugPos, nextEntryPos === -1 ? configContent.length : nextEntryPos);

    // Check keywords
    const keywordsMatch = entry.match(/keywords:\s*\[([^\]]*)\]/);
    if (!keywordsMatch || keywordsMatch[1].trim() === '') {
      problems.push('Missing keywords');
      missingKeywords++;
    }

    // Check meta title
    const metaTitleMatch = entry.match(/title:\s*'([^']*)'.*?,\s*\n/);
    if (metaTitleMatch) {
      const metaTitle = metaTitleMatch[1];
      if (metaTitle.length > 60) {
        problems.push(`Meta title too long (${metaTitle.length} chars, max 60)`);
        titleTooLong++;
      }
      if (metaTitle.length < 20) {
        problems.push(`Meta title too short (${metaTitle.length} chars, min 20)`);
        titleTooShort++;
      }
    }

    // Check meta description
    const descMatch = entry.match(/description:\s*'([^']*)',/);
    if (descMatch) {
      const desc = descMatch[1];
      if (desc.length > 160) {
        problems.push(`Description too long (${desc.length} chars, max 160)`);
        descTooLong++;
      }
      if (desc.length < 80) {
        problems.push(`Description too short (${desc.length} chars, min 80)`);
        descTooShort++;
      }
    }

    // Check FAQ
    if (!entry.includes('faq: [')) {
      problems.push('Missing FAQ data');
      missingFaq++;
    }

    // Check subcategory
    if (!entry.includes('subcategory:')) {
      problems.push('Missing subcategory');
      missingSubcategory++;
    }

    if (problems.length > 0) {
      issues.push({ slug, title, problems });
    }
  }

  // Print report
  console.log('Calculator Meta Audit Report');
  console.log('='.repeat(60));
  console.log(`Total calculators: ${totalCalcs}`);
  console.log(`Calculators with issues: ${issues.length}`);
  console.log('');
  console.log('Summary:');
  console.log(`  Missing keywords:     ${missingKeywords}`);
  console.log(`  Missing FAQ data:     ${missingFaq}`);
  console.log(`  Missing subcategory:  ${missingSubcategory}`);
  console.log(`  Title too long:       ${titleTooLong}`);
  console.log(`  Title too short:      ${titleTooShort}`);
  console.log(`  Description too long: ${descTooLong}`);
  console.log(`  Description too short:${descTooShort}`);
  console.log('');

  if (issues.length > 0) {
    console.log('Detailed Issues:');
    console.log('-'.repeat(60));
    for (const issue of issues) {
      console.log(`\n${issue.slug} (${issue.title})`);
      for (const problem of issue.problems) {
        console.log(`  - ${problem}`);
      }
    }
  } else {
    console.log('No issues found! All metadata looks good.');
  }
}

main();
