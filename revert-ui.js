const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // 1. Revert HERO SECTION to Bento Boxes (not full split)
  // Ensure we have a gap and rounded corners
  content = content.replace(/grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-\[32px\] border border-white\/5 items-stretch shadow-2xl/g,
    'grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-stretch');
  
  // Restore Hero Left Card: rounded-bento and shadow
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] p-8 md:p-16 flex flex-col justify-center reveal"/g,
    'class="md:col-span-12 lg:col-span-7 bg-[#E2FF00] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-[0_20px_50px_rgba(226,255,0,0.15)] md:min-h-[400px]"');
  
  // Restore Hero Right Card: rounded-bento
  content = content.replace(/class="md:col-span-12 lg:col-span-5 glass-2-0 liquid-glass-glow flex items-center justify-center p-6 md:p-10 reveal"/g,
    'class="md:col-span-12 lg:col-span-5 glass-2-0 liquid-glass-glow rounded-bento overflow-hidden reveal relative flex items-center justify-center p-3"');

  // 2. Revert DEEP DIVE SECTION: Restore Sticky Bento Box
  // Remove the parent bg-yellow
  content = content.replace(/<div class="lg:col-span-4 hidden lg:block bg-\[#E2FF00\] rounded-\[32px\] overflow-hidden">/g,
    '<div class="lg:col-span-4 hidden lg:block">');
  
  // Restore the sticky box styling
  content = content.replace(/class="sticky top-0 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center reveal"/g,
    'class="sticky top-32 reveal bg-[#E2FF00] p-8 md:p-10 rounded-bento shadow-[0_20px_50px_rgba(226,255,0,0.15)]"');

  // 3. Fix "gap tulisannya kejauhan"
  // It happened because of the p-12 and flex-col justify-center in the sticky side.
  // I already restored it to p-10 in the line above.

  fs.writeFileSync(f, content, 'utf8');
}
console.log('UI Reverted to Bento Highlight style. Smooth scroll preserved.');
