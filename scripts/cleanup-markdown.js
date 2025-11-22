const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results.push(...walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/components/calculators');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Check if file starts with ```
  if (content.trim().startsWith('```')) {
    console.log('Fixing', file);
    // Remove the first line if it starts with ```
    let lines = content.split('\n');
    if (lines[0].trim().startsWith('```')) {
      lines.shift();
    }
    // Remove the last line if it starts with ```
    if (lines.length > 0 && lines[lines.length - 1].trim().startsWith('```')) {
      lines.pop();
    }
    // Join and save
    fs.writeFileSync(file, lines.join('\n'));
  }
});

