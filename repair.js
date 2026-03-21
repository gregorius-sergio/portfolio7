const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // Fix JS syntax error caused by double escaping
  content = content.replace(/\\`\\\$\\{x\\}px\\`/g, '`${x}px`');
  content = content.replace(/\\`\\\$\\{y\\}px\\`/g, '`${y}px`');

  // Also fix if it was literal \`\${x}px\`
  content = content.replace(/\\`\$\\{x\\}px\\`/g, '`${x}px`');
  content = content.replace(/\\`\$\\{y\\}px\\`/g, '`${y}px`');

  // Restore glass-2-0 and padding to fluid sections so they aren't blank black
  content = content.replace(/class="reveal group border-b border-white\/5 pb-16 md:pb-24 mb-16 md:mb-24 last:border-0 last:pb-0 last:mb-0"/g, 
    'class="glass-2-0 liquid-glass-glow rounded-[32px] p-8 md:p-12 md:p-16 reveal shadow-lg group relative overflow-hidden"');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Restored Glassmorphism to fluid sections and repaired JS syntax.');
