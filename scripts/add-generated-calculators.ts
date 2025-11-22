import fs from 'fs/promises';
import path from 'path';
import { config } from 'dotenv';

config({ path: path.join(process.cwd(), '.env.local') });
config({ path: path.join(process.cwd(), '.env') });

// Config entries from the batch generation
const configs = [
  {
    id: 'frequency-converter',
    title: 'Frequency Converter',
    slug: 'frequency-converter',
    description: 'Convert between hertz, kilohertz, megahertz, and gigahertz.',
    category: 'conversion',
    subcategory: 'frequency',
    authorId: 'unit-master',
    meta: {
      title: 'Frequency Converter - Convert Hz, kHz, MHz, GHz',
      description: 'Easily convert between hertz, kilohertz, megahertz, and gigahertz with our Frequency Converter. Ideal for telecommunications, electronics, and physics.',
      keywords: ['frequency conversion', 'Hz to kHz', 'MHz to GHz', 'frequency calculator'],
    },
  },
  {
    id: 'electric-current-converter',
    title: 'Electric Current Converter',
    slug: 'electric-current-converter',
    description: 'Convert between amperes, milliamperes, and kiloamperes.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    meta: {
      title: 'Electric Current Converter - Convert A, mA, kA',
      description: 'Easily convert between amperes, milliamperes, and kiloamperes with our Electric Current Converter. Ideal for engineering and electronics projects.',
      keywords: ['electric current converter', 'amperes to milliamperes', 'milliamperes to kiloamperes', 'A to mA conversion', 'mA to kA conversion'],
    },
  },
  {
    id: 'voltage-converter',
    title: 'Voltage Converter',
    slug: 'voltage-converter',
    description: 'Convert between volts, millivolts, and kilovolts.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    meta: {
      title: 'Voltage Converter - Convert V, mV, kV',
      description: 'Easily convert between volts, millivolts, and kilovolts with our Voltage Converter. Perfect for electrical engineering, electronics, and general use.',
      keywords: ['voltage converter', 'volt conversion', 'millivolt converter', 'kilovolt conversion', 'electrical conversion'],
    },
  },
  {
    id: 'resistance-converter',
    title: 'Resistance Converter',
    slug: 'resistance-converter',
    description: 'Convert between ohms, kiloohms, and megaohms.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    meta: {
      title: 'Convert Resistance Units Online',
      description: 'Easily convert between ohms, kiloohms, and megaohms with our online resistance converter. Perfect for electrical engineering and electronics projects.',
      keywords: ['resistance conversion', 'ohms to kiloohms', 'kiloohms to megaohms', 'electrical unit conversion'],
    },
  },
  {
    id: 'capacitance-converter',
    title: 'Capacitance Converter',
    slug: 'capacitance-converter',
    description: 'Convert between farads, microfarads, nanofarads, and picofarads.',
    category: 'conversion',
    subcategory: 'electrical',
    authorId: 'unit-master',
    meta: {
      title: 'Capacitance Converter - Convert Capacitance Units Easily',
      description: 'Use our Capacitance Converter to seamlessly convert between farads, microfarads, nanofarads, and picofarads. Ideal for electronics and electrical engineering.',
      keywords: ['capacitance conversion', 'farads', 'microfarads', 'nanofarads', 'picofarads', 'capacitance converter'],
    },
  },
];

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

async function main() {
  const configPath = path.join(process.cwd(), 'src/config/calculators.ts');
  let content = await fs.readFile(configPath, 'utf-8');

  // Check existing imports and IDs
  const existingImports = new Set<string>();
  const existingIds = new Set<string>();
  
  const importRegex = /import\s+(\w+)\s+from\s+['"]@\/components\/calculators\//g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    existingImports.add(match[1]);
  }
  
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  while ((match = idRegex.exec(content)) !== null) {
    existingIds.add(match[1]);
  }

  // Filter new configs
  const newConfigs = configs.filter(config => !existingIds.has(config.id));
  
  if (newConfigs.length === 0) {
    console.log('ℹ️  All calculators are already registered');
    return;
  }

  console.log(`\n📝 Adding ${newConfigs.length} calculator(s) to calculators.ts...\n`);

  // Add imports
  const newImports: string[] = [];
  newConfigs.forEach(config => {
    const componentName = getComponentName(config.slug);
    const contentName = `${componentName}Content`;
    
    if (!existingImports.has(componentName)) {
      newImports.push(`import ${componentName} from '@/components/calculators/${config.slug}/${componentName}';`);
    }
    if (!existingImports.has(contentName)) {
      newImports.push(`import ${contentName} from '@/components/calculators/${config.slug}/${contentName}';`);
    }
  });

  if (newImports.length > 0) {
    const lines = content.split('\n');
    let lastImportIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim().startsWith('import ') && lines[i].includes('@/components/calculators/')) {
        lastImportIndex = i;
        break;
      }
    }
    
    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, ...newImports);
      content = lines.join('\n');
      console.log(`✓ Added ${newImports.length} import(s)`);
    }
  }

  // Add config entries
  const configEntries = newConfigs.map(config => {
    const componentName = getComponentName(config.slug);
    const contentName = `${componentName}Content`;
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

  // Find array end
  const lines = content.split('\n');
  let arrayEndLineIndex = -1;
  
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '];') {
      arrayEndLineIndex = i;
      break;
    }
  }
  
  if (arrayEndLineIndex >= 0) {
    lines.splice(arrayEndLineIndex, 0, configEntries);
    content = lines.join('\n');
    console.log(`✓ Added ${newConfigs.length} config entr${newConfigs.length === 1 ? 'y' : 'ies'}`);
  } else {
    throw new Error('Could not find calculators array end');
  }

  await fs.writeFile(configPath, content);
  console.log('\n✅ Successfully updated calculators.ts!\n');
}

main().catch(console.error);

