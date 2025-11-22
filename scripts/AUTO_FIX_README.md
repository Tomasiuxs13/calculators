# Auto-Fix Calculator Issues

This script automatically fixes calculator issues using the ChatGPT API.

## Features

- ✅ **SEO Fixes**: Expands content, adds keywords, fixes meta descriptions, adds missing sections
- ✅ **Code Fixes**: Adds validation, fixes NaN handling, adds default values
- ✅ **Missing Files**: Generates content files for calculators that don't have them
- ✅ **Dry Run Mode**: Preview fixes without modifying files

## Usage

### Basic Usage

Fix all calculators with issues:

```bash
npm run fix:calculators
```

### Options

**Dry Run** (preview fixes without applying):
```bash
npm run fix:calculators -- --dry-run
```

**Limit number of calculators**:
```bash
npm run fix:calculators -- --limit 10
```

**Only fix calculators below a certain score**:
```bash
npm run fix:calculators -- --min-score 5
```

**Disable specific fix types**:
```bash
# Don't fix SEO issues
npm run fix:calculators -- --no-seo

# Don't fix code issues
npm run fix:calculators -- --no-code

# Don't generate missing files
npm run fix:calculators -- --no-missing
```

**Combine options**:
```bash
# Dry run on first 5 calculators with score below 6
npm run fix:calculators -- --dry-run --limit 5 --min-score 6
```

## What Gets Fixed

### SEO Issues

1. **Content Expansion**
   - Expands content to 500+ words
   - Adds missing sections (use cases, FAQs)
   - Adds primary keyword to H2 headings
   - Improves keyword optimization

2. **Meta Tags**
   - Fixes meta description length (120-160 chars)
   - Adds missing keywords (5-10 recommended)
   - Optimizes meta titles

3. **Content Structure**
   - Adds H2/H3 headings
   - Adds formula sections
   - Adds examples
   - Adds FAQ sections

### Code Issues

1. **Validation**
   - Adds NaN checks after parsing
   - Adds division by zero protection
   - Adds negative number validation

2. **UX Improvements**
   - Adds default values
   - Ensures auto-calculation works

3. **Missing Files**
   - Generates content files for calculators missing them

## Setup

1. **Set OpenAI API Key**:
   ```bash
   # Create .env file
   echo "OPENAI_API_KEY=sk-your-key-here" > .env
   ```

2. **Get API Key**: https://platform.openai.com/api-keys

## Output

The script generates:
- **Console output**: Progress and summary
- **AUTO_FIX_RESULTS.json**: Detailed results for each calculator

## Example Output

```
🔧 Starting auto-fix process...

[1/314] Fixing: BMI Calculator...
  ✅ Fixed: Generated new SEO content file

[2/314] Fixing: Length Converter...
  ✅ Fixed: Fixed 3 SEO issue(s)

[3/314] Fixing: Temperature Converter...
  ✅ Fixed: Fixed 2 SEO issue(s), Fixed 1 code issue(s)

================================================================================
📊 AUTO-FIX SUMMARY
================================================================================
Total Processed: 314
Successfully Fixed: 287
With Errors: 5
No Issues: 22

✅ Successfully Fixed Calculators:
  - BMI Calculator: Generated new SEO content file
  - Length Converter: Fixed 3 SEO issue(s)
  ...
```

## Safety

- **Dry Run Mode**: Always test with `--dry-run` first
- **Backup**: Consider committing changes before running
- **Rate Limiting**: Script includes 2-second delays between API calls
- **Error Handling**: Errors are logged but don't stop the process

## Limitations

1. **Meta Tags**: Meta tag fixes require manual updates to `calculators.ts` (script reports what needs to be changed)

2. **Complex Issues**: Some issues may require manual review

3. **API Costs**: Uses OpenAI API (charges apply)

4. **Rate Limits**: Respects API rate limits with delays

## Best Practices

1. **Review First**: Run `npm run review:calculators` to see issues
2. **Test Small**: Start with `--limit 5 --dry-run`
3. **Review Changes**: Check generated files before committing
4. **Iterate**: Fix in batches, review, then continue

## Troubleshooting

**API Key Error**:
```
❌ Error: OPENAI_API_KEY environment variable is not set
```
→ Create `.env` file with your API key

**File Not Found**:
```
❌ Calculator file not found - cannot auto-generate calculator component
```
→ Some calculators may need manual file creation first

**Rate Limit**:
→ Script includes delays, but if you hit limits, wait and retry with `--limit`

## Integration with Review

1. Run review: `npm run review:calculators`
2. Review report: `CALCULATOR_REVIEW_REPORT.txt`
3. Fix issues: `npm run fix:calculators`
4. Review again: `npm run review:calculators`

This creates a continuous improvement cycle!

