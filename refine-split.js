const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // DEEP DIVE SECTION: Full Left Column Yellow
  // Replace the col-span-4 container to have bg-yellow
  content = content.replace(/<div class="lg:col-span-4 hidden lg:block">/g,
    '<div class="lg:col-span-4 hidden lg:block bg-[#E2FF00] rounded-[32px] overflow-hidden">');
  
  // Remove individual box styles from sticky content to make it seamless
  content = content.replace(/sticky top-32 reveal bg-\[#E2FF00\] p-8 md:p-12 lg:h-full lg:min-h-screen/g,
    'sticky top-0 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center reveal');

  // HERO SECTION: Full Left Split
  // Ensure the container has no gap and children have no rounded corners on the inner side
  content = content.replace(/grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-stretch/g,
    'grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[32px] border border-white/5 items-stretch shadow-2xl');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Split layout refined for full-column yellow accents.');
