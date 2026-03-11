import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

console.log("Starting Code Analysis...");
console.log("Based on:");
console.log("- The Clean Code Principles");
console.log("- Josh Comeau's React and CSS guidance");
console.log("- Steve Gibson's Security Now principles");
console.log("------------------------------------------");

function walkDir(dir, callback) {
  readdirSync(dir).forEach(f => {
    const dirPath = join(dir, f);
    const isDirectory = statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!['node_modules', 'dist', '.git', '.local', '.cache', '.npm'].includes(f)) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(join(dir, f));
    }
  });
}

function analyzeFile(filePath) {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && !filePath.endsWith('.js') && !filePath.endsWith('.css')) {
    return;
  }
  
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // Clean Code
    if (line.includes('var ') && !line.includes("'var '") && !line.includes('"var "')) {
      issues.push(`[Line ${lineNum}] Clean Code: Use 'let' or 'const' instead of 'var'`);
    }
    if (line.length > 120) {
      issues.push(`[Line ${lineNum}] Clean Code: Line is too long (> 120 characters)`);
    }

    // Josh Comeau's React & CSS
    if (line.includes('!important') && !line.includes("'!important'") && !line.includes('"!important"')) {
      issues.push(`[Line ${lineNum}] CSS: Avoid '!important'. Specificity issues should be solved via CSS architecture.`);
    }
    if (filePath.endsWith('.tsx')) {
      if (line.includes('style={{') && !line.includes("'style={{'")) {
        issues.push(`[Line ${lineNum}] React: Prefer utility classes (Tailwind) or external CSS modules over inline styles.`);
      }
    }

    // Steve Gibson Security Principles
    if ((line.includes('innerHTML') || line.includes('dangerouslySetInnerHTML')) && !line.includes("'innerHTML'") && !line.includes("'dangerouslySetInnerHTML'")) {
      issues.push(`[Line ${lineNum}] Security: Avoid raw HTML injection (dangerouslySetInnerHTML) to prevent XSS attacks.`);
    }
    if (line.includes('eval(') && !line.includes("'eval('") && !line.includes('"eval("')) {
      issues.push(`[Line ${lineNum}] Security: 'eval' is evil and poses a severe security risk.`);
    }
    if (line.includes('console.log(') && !filePath.includes('analyze.js')) {
      // Just a warning
      // issues.push(`[Line ${lineNum}] Security/Clean Code: Remove console.log in production code.`);
    }
  });

  if (issues.length > 0) {
    console.log(`\nFile: ${filePath}`);
    issues.forEach(issue => console.log(`  - ${issue}`));
  }
}

walkDir('.', analyzeFile);

console.log("\nAnalysis Complete.");
