#!/usr/bin/env tsx

/**
 * Fix JSX Parsing Issues
 * 
 * Finds and fixes JSX parsing errors in content files where
 * < and > characters in text need to be escaped as &lt; and &gt;
 */

import * as fs from 'fs';
import * as path from 'path';

function findContentFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findContentFiles(filePath, fileList);
    } else if (file.endsWith('Content.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function fixJSXParsing() {
  console.log('🔍 Searching for JSX parsing issues...\n');

  // Find all Content.tsx files
  const calculatorsDir = path.join(__dirname, '..', 'src/components/calculators');
  const contentFiles = findContentFiles(calculatorsDir);

  let fixedCount = 0;
  const issues: Array<{ file: string; line: number; issue: string }> = [];

  for (const file of contentFiles) {
    const filePath = file; // file is already an absolute path from findContentFiles
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    let fileFixed = false;

    // Pattern 1: Comparisons in parentheses like (f > 0), (n < 10), (k >= 5)
    // Only fix if inside text content, not in JSX tags or code blocks
    content = content.replace(/\(([a-zA-Z])\s*([<>])\s*([0-9]+)\)/g, (match, varName, operator, number, offset) => {
      const before = originalContent.substring(Math.max(0, offset - 100), offset);
      const after = originalContent.substring(offset + match.length, offset + match.length + 100);
      
      // Skip if it's in a JSX tag, code block, or already escaped
      if (
        before.match(/<[^>]*$/) || // Inside a JSX opening tag
        before.includes('<code') || 
        before.includes('&lt;') ||
        before.includes('&gt;') ||
        after.includes('</code>') ||
        before.includes('className') && !before.includes('>') // Inside JSX attribute
      ) {
        return match;
      }
      
      fileFixed = true;
      if (operator === '<') {
        return `(${varName} &lt; ${number})`;
      } else {
        return `(${varName} &gt; ${number})`;
      }
    });

    // Pattern 2: Comparisons with spaces like "k > 0", "n < 10" in text
    // Only inside <p> tags or other text containers, not in JSX attributes
    content = content.replace(/([a-zA-Z])\s*([<>])\s*([0-9]+[a-zA-Z]*)/g, (match, varName, operator, value, offset) => {
      const before = originalContent.substring(Math.max(0, offset - 100), offset);
      const after = originalContent.substring(offset + match.length, offset + match.length + 100);
      
      // Skip if it's in a JSX tag, code block, or already escaped
      if (
        before.match(/<[^>]*$/) || // Inside a JSX opening tag
        before.includes('<code') || 
        (before.includes('className') && !before.includes('>')) || // Inside JSX attribute
        before.includes('&lt;') ||
        before.includes('&gt;') ||
        after.includes('</code>')
      ) {
        return match;
      }
      
      fileFixed = true;
      if (operator === '<') {
        return `${varName} &lt; ${value}`;
      } else {
        return `${varName} &gt; ${value}`;
      }
    });

    // Pattern 3: Standalone comparisons like "<60s", ">90s"
    // Only in text content, not in JSX tags
    content = content.replace(/([^&<>])\s*([<>])\s*([0-9]+[a-zA-Z]*)/g, (match, before, operator, value, offset) => {
      const context = originalContent.substring(Math.max(0, offset - 50), offset + match.length + 50);
      
      // Skip if it's in a JSX tag, code block, or already escaped
      if (
        context.match(/<[^>]*$/) || // Inside a JSX opening tag
        context.includes('<code') ||
        (context.includes('className') && !context.includes('>')) || // Inside JSX attribute
        context.includes('&lt;') ||
        context.includes('&gt;') ||
        context.includes('</code>')
      ) {
        return match;
      }
      
      fileFixed = true;
      if (operator === '<') {
        return `${before} &lt;${value}`;
      } else {
        return `${before} &gt;${value}`;
      }
    });

    if (fileFixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files checked: ${contentFiles.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log(`\n✅ All JSX parsing issues have been fixed!`);
  } else {
    console.log(`\n✅ No JSX parsing issues found.`);
  }
}

fixJSXParsing();

