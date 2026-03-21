const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));
for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/el\.style\.setProperty\('--x', \\`\\\$\\{x\\}px\\`\);/g, "el.style.setProperty('--x', `${x}px`);");
  text = text.replace(/el\.style\.setProperty\('--y', \\`\\\$\\{y\\}px\\`\);/g, "el.style.setProperty('--y', `${y}px`);");

  // Fallback if it has fewer backslashes
  text = text.replace(/el\.style\.setProperty\('--x', \\`\$\\{x\\}px\\`\);/g, "el.style.setProperty('--x', `${x}px`);");
  text = text.replace(/el\.style\.setProperty\('--y', \\`\$\\{y\\}px\\`\);/g, "el.style.setProperty('--y', `${y}px`);");

  fs.writeFileSync(f, text, 'utf8');
}
console.log('Fixed JS parsing');
