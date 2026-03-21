const fs = require('fs');

const goodScript = `    // Liquid Glass Glow Effect
    document.querySelectorAll('.liquid-glass-glow').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', \`\${x}px\`);
        el.style.setProperty('--y', \`\${y}px\`);
      });
    });`;

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // Clean out any existing bad JS
  content = content.replace(/\/\/ Liquid Glass Glow Effect[\s\S]*?(?=<\/script>)/g, goodScript + "\n  ");

  // Fix 'blank content' layout
  content = content.replace(/class="reveal group border-b border-white\/5 pb-16 md:pb-24 mb-16 md:mb-24 last:border-0 last:pb-0 last:mb-0"/g, 
    'class="glass-2-0 liquid-glass-glow rounded-[32px] p-8 md:p-12 md:p-16 reveal shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 group relative overflow-hidden mb-16 md:mb-24 max-w-[850px]"');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Fixed JS safely and restored glass-2-0 format!');
