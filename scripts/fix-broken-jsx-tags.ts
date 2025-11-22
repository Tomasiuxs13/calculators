#!/usr/bin/env tsx

/**
 * Fix Broken JSX Tags
 * 
 * Fixes incorrectly escaped JSX tags where &gt; or &lt; appear in tag attributes
 * or closing tags (e.g., <h1 ... &gt; should be <h1 ...>)
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

function fixBrokenJSXTags() {
  console.log('🔍 Searching for broken JSX tags...\n');

  const calculatorsDir = path.join(__dirname, '..', 'src/components/calculators');
  const contentFiles = findContentFiles(calculatorsDir);

  let fixedCount = 0;

  for (const filePath of contentFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    let fileFixed = false;

    // Fix: " &gt; or " &lt; in JSX tag attributes (should be > or <)
    // Pattern: className="..." &gt; or className='...' &gt;
    content = content.replace(/(className=["'][^"']*["'])\s*&gt;/g, '$1>');
    content = content.replace(/(className=["'][^"']*["'])\s*&lt;/g, '$1<');
    
    // Fix: Any attribute followed by &gt; or &lt; (like id="..." &gt;)
    content = content.replace(/(\w+=["'][^"']*["'])\s*&gt;/g, '$1>');
    content = content.replace(/(\w+=["'][^"']*["'])\s*&lt;/g, '$1<');
    
    // Fix: Closing tags with &gt; (like </h1> should not have &gt;)
    // But be careful - we only want to fix cases where &gt; appears where > should be
    // Pattern: <tag ... &gt;Text</tag> should be <tag ...>Text</tag>
    content = content.replace(/<(\w+)([^>]*)\s+&gt;([^<]*?)<\/\1>/g, '<$1$2>$3</$1>');
    
    // Fix: Standalone &gt; or &lt; that appear before closing tags
    // Pattern: ... &gt;</tag> should be ...></tag> (but only if it's part of opening tag)
    content = content.replace(/(<[^/][^>]*?)\s+&gt;([^<]*?<\/[^>]+>)/g, '$1>$2');
    content = content.replace(/(<[^/][^>]*?)\s+&lt;([^<]*?<\/[^>]+>)/g, '$1<$2');
    
    // Fix: &gt; or &lt; after closing tags like </strong> &gt; should be </strong>
    // This handles cases where &gt; appears after a closing tag but before text
    content = content.replace(/(<\/\w+>)\s*&gt;/g, '$1');
    content = content.replace(/(<\/\w+>)\s*&lt;/g, '$1');
    
    // Fix: Self-closing tags like <br / &gt; should be <br />
    content = content.replace(/<(\w+)([^>]*)\s*\/\s*&gt;/g, '<$1$2 />');
    content = content.replace(/<(\w+)([^>]*)\s*\/\s*&lt;/g, '<$1$2 />');
    
    // Fix: Opening tags with &gt; like <li &gt; should be <li>
    content = content.replace(/<(\w+)\s+&gt;/g, '<$1>');
    content = content.replace(/<(\w+)\s+&lt;/g, '<$1>');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files checked: ${contentFiles.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log(`\n✅ All broken JSX tags have been fixed!`);
  } else {
    console.log(`\n✅ No broken JSX tags found.`);
  }
}

fixBrokenJSXTags();

