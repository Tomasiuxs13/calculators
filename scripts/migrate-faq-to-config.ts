/**
 * FAQ Migration Script
 *
 * Parses existing Content component files to extract FAQ question/answer pairs,
 * then injects them as structured `faq` arrays into calculators.ts config.
 *
 * Usage: npx tsx scripts/migrate-faq-to-config.ts [--dry-run]
 */

import * as fs from 'fs';
import * as path from 'path';

const CALCULATORS_DIR = path.join(__dirname, '..', 'src', 'components', 'calculators');
const CONFIG_FILE = path.join(__dirname, '..', 'src', 'config', 'calculators.ts');

interface FAQItem {
  question: string;
  answer: string;
}

interface ExtractedFAQ {
  slug: string;
  dirName: string;
  faqs: FAQItem[];
}

function extractFAQsFromContent(filePath: string): FAQItem[] {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find the FAQ section - look for "Frequently Asked Questions" heading
  const faqSectionMatch = content.match(/Frequently Asked Questions[\s\S]*$/);
  if (!faqSectionMatch) return [];

  const faqSection = faqSectionMatch[0];

  // Extract h4 question + p answer pairs
  // Pattern: <h4 ...>QUESTION</h4><p ...>ANSWER</p>
  // Also handles: <h4 ...>QUESTION</h4>\n<p ...>ANSWER</p>
  const faqs: FAQItem[] = [];

  // Match h4 content followed by p content (handles multi-line and various class patterns)
  const pairRegex = /<h[34][^>]*>(.*?)<\/h[34]>[\s\S]*?<p[^>]*>(.*?)<\/p>/g;
  let match;

  while ((match = pairRegex.exec(faqSection)) !== null) {
    let question = match[1]
      .replace(/<[^>]*>/g, '') // Strip inner HTML tags
      .replace(/\{['"`]([^'"`]*?)['"`]\}/g, '$1') // Strip JSX string expressions
      .replace(/^\s*Q\d*[:.]?\s*/i, '') // Strip "Q:", "Q1:", "Q1." prefixes
      .replace(/^\s*\d+[.)]\s*/, '') // Strip "1.", "1)" number prefixes
      .trim();

    let answer = match[2]
      .replace(/<[^>]*>/g, '') // Strip inner HTML tags
      .replace(/\{['"`]([^'"`]*?)['"`]\}/g, '$1') // Strip JSX string expressions
      .replace(/^\s*A\d*[:.]?\s*/i, '') // Strip "A:", "A1:" prefixes
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&times;/g, '×')
      .replace(/\s+/g, ' ')
      .trim();

    // Only include if it looks like a question (contains ? or starts with common question words)
    if (question && answer && (
      question.includes('?') ||
      /^(what|how|why|when|where|which|can|do|does|is|are|should|will|would)/i.test(question)
    )) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

function getCalculatorSlug(dirName: string): string {
  // Convert directory name to slug (they're usually the same)
  return dirName;
}

function main() {
  const isDryRun = process.argv.includes('--dry-run');

  console.log(`FAQ Migration Script ${isDryRun ? '(DRY RUN)' : ''}`);
  console.log('='.repeat(60));

  // Find all content files
  const dirs = fs.readdirSync(CALCULATORS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const results: ExtractedFAQ[] = [];
  let totalFAQs = 0;
  let filesWithFAQs = 0;
  let filesWithoutFAQs = 0;

  for (const dir of dirs) {
    const contentFiles = fs.readdirSync(path.join(CALCULATORS_DIR, dir))
      .filter(f => f.endsWith('Content.tsx'));

    for (const file of contentFiles) {
      const filePath = path.join(CALCULATORS_DIR, dir, file);
      const faqs = extractFAQsFromContent(filePath);

      if (faqs.length > 0) {
        results.push({
          slug: getCalculatorSlug(dir),
          dirName: dir,
          faqs,
        });
        totalFAQs += faqs.length;
        filesWithFAQs++;
      } else {
        filesWithoutFAQs++;
      }
    }
  }

  console.log(`\nFound ${totalFAQs} FAQ items across ${filesWithFAQs} calculators`);
  console.log(`${filesWithoutFAQs} calculators have no FAQ section\n`);

  if (isDryRun) {
    // Print sample results
    for (const result of results.slice(0, 5)) {
      console.log(`\n--- ${result.dirName} (${result.faqs.length} FAQs) ---`);
      for (const faq of result.faqs) {
        console.log(`  Q: ${faq.question}`);
        console.log(`  A: ${faq.answer.substring(0, 100)}...`);
      }
    }
    console.log(`\n... and ${results.length - 5} more calculators`);
    console.log('\nRun without --dry-run to apply changes to calculators.ts');
    return;
  }

  // Apply changes to calculators.ts
  let configContent = fs.readFileSync(CONFIG_FILE, 'utf-8');
  let updatedCount = 0;
  let skippedCount = 0;

  for (const result of results) {
    // Build the faq array string
    const faqString = result.faqs.map(faq => {
      const q = faq.question.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      const a = faq.answer.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      return `      { question: '${q}', answer: '${a}' }`;
    }).join(',\n');

    // Find the calculator config entry by slug
    const slugStr = `slug: '${result.slug}'`;
    const slugIndex = configContent.indexOf(slugStr);
    if (slugIndex === -1) {
      skippedCount++;
      continue;
    }

    // Find the meta: { ... }, block after this slug
    const afterSlug = configContent.substring(slugIndex);
    const metaStart = afterSlug.indexOf('meta: {');
    if (metaStart === -1) {
      skippedCount++;
      continue;
    }

    // Find the closing of the meta object: },
    // We need to find the matching closing brace for meta: {
    let braceCount = 0;
    let metaEnd = -1;
    const metaSection = afterSlug.substring(metaStart);
    for (let i = 0; i < metaSection.length; i++) {
      if (metaSection[i] === '{') braceCount++;
      if (metaSection[i] === '}') {
        braceCount--;
        if (braceCount === 0) {
          metaEnd = i;
          break;
        }
      }
    }

    if (metaEnd === -1) {
      skippedCount++;
      continue;
    }

    // Absolute position of the character right after meta's closing },
    const metaCloseAbsPos = slugIndex + metaStart + metaEnd + 1;

    // Find the next newline after meta close
    const afterMetaClose = configContent.substring(metaCloseAbsPos);
    const nextNewline = afterMetaClose.indexOf('\n');
    const insertPos = metaCloseAbsPos + nextNewline + 1;

    // Check if faq already exists in this entry
    const nextChunk = configContent.substring(insertPos, insertPos + 100);
    if (nextChunk.includes('faq:')) {
      skippedCount++;
      continue;
    }

    const faqInsert = `    faq: [\n${faqString},\n    ],\n`;
    configContent = configContent.substring(0, insertPos) + faqInsert + configContent.substring(insertPos);
    updatedCount++;
  }

  fs.writeFileSync(CONFIG_FILE, configContent, 'utf-8');
  console.log(`\nUpdated ${updatedCount} calculator configs with FAQ data`);
  console.log(`Skipped ${skippedCount} (not found or already had FAQ)`);
  console.log('Done!');
}

main();
