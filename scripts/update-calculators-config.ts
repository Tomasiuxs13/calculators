import * as fs from 'fs/promises';
import * as path from 'path';

export interface ConfigEntry {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory: string;
  authorId: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * Converts a slug to a PascalCase component name, preserving common acronyms in uppercase.
 * Examples:
 * - "ira-calculator" -> "IRACalculator"
 * - "lcm-calculator" -> "LCMCalculator"
 * - "gcd-calculator" -> "GCDCalculator"
 * - "bmi-calculator" -> "BMICalculator"
 * - "bmr-calculator" -> "BMRCalculator"
 * - "tdee-calculator" -> "TDEECalculator"
 * - "401k-calculator" -> "401kCalculator" (numbers preserved)
 */
function getComponentName(slug: string): string {
  // Common acronyms that should be kept in uppercase
  const acronyms = new Set([
    'ira', 'lcm', 'gcd', 'bmi', 'bmr', 'tdee', 'roi', 'apr', 'apy',
    'mpg', 'mph', 'kph', 'rpm', 'fps', 'gdp', 'api', 'url', 'html',
    'css', 'js', 'ts', 'json', 'xml', 'pdf', 'csv', 'http', 'https',
    'ssl', 'tls', 'dns', 'ip', 'cpu', 'gpu', 'ram', 'rom', 'ssd', 'hdd'
  ]);

  // Convert numbers to words
  const numberToWord: Record<string, string> = {
    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
    '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine',
    '10': 'Ten', '11': 'Eleven', '12': 'Twelve', '13': 'Thirteen',
    '14': 'Fourteen', '15': 'Fifteen', '16': 'Sixteen', '17': 'Seventeen',
    '18': 'Eighteen', '19': 'Nineteen', '20': 'Twenty'
  };

  return slug
    .split('-')
    .map(word => {
      const lowerWord = word.toLowerCase();
      // If it's a known acronym, return it in uppercase
      if (acronyms.has(lowerWord)) {
        return lowerWord.toUpperCase();
      }
      // Handle words starting with numbers (e.g., "5k" -> "FiveK", "10k" -> "TenK")
      const numberMatch = word.match(/^(\d+)(.*)$/);
      if (numberMatch) {
        const [, number, rest] = numberMatch;
        const numberWord = numberToWord[number] || number;
        const restPart = rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : '';
        return numberWord + restPart;
      }
      // Otherwise, capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

async function updateCalculatorsConfig(configs: ConfigEntry[]) {
  const configPath = path.join(process.cwd(), 'src/config/calculators.ts');
  let content = await fs.readFile(configPath, 'utf-8');

  // Ensure dynamic is imported
  if (!content.includes("import dynamic from 'next/dynamic'")) {
    const lines = content.split('\n');
    // Insert after imports if possible, or at top
    let insertIndex = 0;
    if (content.startsWith('import')) {
        insertIndex = lines.findIndex(l => !l.startsWith('import') && l.trim() !== '') || 0;
    }
    lines.splice(insertIndex, 0, "import dynamic from 'next/dynamic';");
    content = lines.join('\n');
  }

  // Check which configs are already imported/registered
  const existingImports = new Set<string>();
  const existingIds = new Set<string>();
  
  // Extract existing imports (static)
  const importRegex = /import\s+(\w+)\s+from\s+['"]@\/components\/calculators\//g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    existingImports.add(match[1]);
  }

  // Extract existing imports (dynamic)
  const dynamicImportRegex = /const\s+(\w+)\s+=\s+dynamic\(\(\)\s+=>\s+import\(['"]@\/components\/calculators\//g;
  while ((match = dynamicImportRegex.exec(content)) !== null) {
    existingImports.add(match[1]);
  }
  
  // Extract existing calculator IDs
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  while ((match = idRegex.exec(content)) !== null) {
    existingIds.add(match[1]);
  }

  // Filter out configs that are already registered
  const newConfigs = configs.filter(config => !existingIds.has(config.id));
  
  if (newConfigs.length === 0) {
    console.log('ℹ️  All calculators are already registered in calculators.ts');
    return;
  }

  console.log(`\n📝 Adding ${newConfigs.length} new calculator(s) to calculators.ts...`);

  // Add imports
  const newImports: string[] = [];
  newConfigs.forEach(config => {
    const componentName = getComponentName(config.slug);
    const contentName = `${componentName}Content`;
    
    if (!existingImports.has(componentName)) {
      newImports.push(`const ${componentName} = dynamic(() => import('@/components/calculators/${config.slug}/${componentName}'));`);
    }
    if (!existingImports.has(contentName)) {
      newImports.push(`const ${contentName} = dynamic(() => import('@/components/calculators/${config.slug}/${contentName}'));`);
    }
  });

  if (newImports.length > 0) {
    // Find the last import or const definition related to calculators
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trim();
      if ((line.startsWith('import ') || line.startsWith('const ')) && line.includes('@/components/calculators/')) {
        lastImportIndex = i;
        break;
      }
    }
    
    if (lastImportIndex >= 0) {
      // Insert new imports after the last import
      lines.splice(lastImportIndex + 1, 0, ...newImports);
      content = lines.join('\n');
      console.log(`✓ Added ${newImports.length} dynamic import(s)`);
    } else {
        // Fallback: insert after imports
        const lastGenericImportIndex = lines.findLastIndex(l => l.startsWith('import '));
        if (lastGenericImportIndex >= 0) {
             lines.splice(lastGenericImportIndex + 1, 0, ...newImports);
             content = lines.join('\n');
        }
    }
  }

  // Add config entries
  const configEntries = newConfigs.map(config => {
    const componentName = getComponentName(config.slug);
    const contentName = `${componentName}Content`;
    
    // Escape single quotes in strings
    const escapeString = (str: string) => str.replace(/'/g, "\\'");
    
    return `  {
    id: '${config.id}',
    title: '${escapeString(config.title)}',
    slug: '${config.slug}',
    description: '${escapeString(config.description)}',
    category: '${config.category}',
    subcategory: '${config.subcategory}',
    authorId: '${config.authorId}',
    component: ${componentName},
    content: ${contentName},
    meta: {
      title: '${escapeString(config.meta.title)}',
      description: '${escapeString(config.meta.description)}',
      keywords: ${JSON.stringify(config.meta.keywords)},
    },
  },`;
  }).join('\n');

  // Find the position to insert config entries (before the closing bracket of the array)
  // Look for the closing bracket of the calculators array
  const lines = content.split('\n');
  let arrayEndLineIndex = -1;
  
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '];') {
      arrayEndLineIndex = i;
      break;
    }
  }
  
  if (arrayEndLineIndex >= 0) {
    // Insert config entries before the closing bracket
    lines.splice(arrayEndLineIndex, 0, configEntries);
    content = lines.join('\n');
    console.log(`✓ Added ${newConfigs.length} config entr${newConfigs.length === 1 ? 'y' : 'ies'}`);
  } else {
    // Fallback: find the last config entry
    const lastConfigMatch = content.match(/\s+\},\s*$/m);
    if (lastConfigMatch) {
      const lastConfigIndex = content.lastIndexOf(lastConfigMatch[0]);
      if (lastConfigIndex >= 0) {
        content = content.slice(0, lastConfigIndex + lastConfigMatch[0].length) + '\n' + configEntries + content.slice(lastConfigIndex + lastConfigMatch[0].length);
        console.log(`✓ Added ${newConfigs.length} config entr${newConfigs.length === 1 ? 'y' : 'ies'}`);
      } else {
        throw new Error('Could not find where to insert config entries');
      }
    } else {
      throw new Error('Could not find calculators array end');
    }
  }

  await fs.writeFile(configPath, content);
  console.log('✅ Successfully updated calculators.ts\n');
}

export { updateCalculatorsConfig, getComponentName };
