const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));
for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  
  // Use exact string matching
  const badX = "el.style.setProperty('--x', \\`\\$\\{x\\}px\\`);";
  const goodX = "el.style.setProperty('--x', `${x}px`);";
  const badY = "el.style.setProperty('--y', \\`\\$\\{y\\}px\\`);";
  const goodY = "el.style.setProperty('--y', `${y}px`);";
  
  text = text.split(badX).join(goodX);
  text = text.split(badY).join(goodY);

  fs.writeFileSync(f, text, 'utf8');
}
console.log('Fixed JS strings exactly.');
