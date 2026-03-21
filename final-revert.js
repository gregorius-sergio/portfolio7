const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // 1. Revert HERO SECTION to Glass Bento
  // Target the Left Title Card
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\] md:min-h-\[400px\]"/g,
    'class="md:col-span-12 lg:col-span-7 glass-2-0 liquid-glass-glow rounded-bento p-6 md:p-10 flex flex-col justify-center reveal"');
  
  // Standardize the Hero grid gap just in case
  content = content.replace(/grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-\[32px\] border border-white\/5 items-stretch shadow-2xl/g,
    'grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-stretch');

  // Ensure text inside Hero box is back to white
  content = content.replace(/text-\[#0A0A0A\] mb-6 uppercase relative z-10/g, 'text-white mb-6 uppercase relative z-10');
  content = content.replace(/text-\[#0A0A0A\]\/70 text-sm md:text-base leading-relaxed max-w-lg relative z-10 font-bold/g, 'text-white/40 text-sm md:text-base leading-relaxed max-w-lg relative z-10 font-medium');

  // Re-accent the Hero Title text with Plasma Yellow if needed
  content = content.replace(/<span class="text-black\/80 font-black">([\s\S]*?)<\/span>/g, '<span class="text-[#E2FF00]">$1</span>');

  // Hero Badge: Restore Yellow accent
  content = content.replace(/text-black bg-black\/10 px-4 py-1\.5 rounded-full w-fit mb-6 border border-black\/20/g,
    'text-[#E2FF00] bg-[#E2FF00]/10 px-4 py-1.5 rounded-full w-fit mb-6 border border-[#E2FF00]/20');
  content = content.replace(/bg-black animate-pulse/g, 'bg-[#E2FF00] animate-pulse');

  // 2. Revert DEEP DIVE to Glass Bento
  // Currently: lg:col-span-4 column is yellow? No, I reverted the "Sidebar" in the last turn but left the box yellow.
  content = content.replace(/class="sticky top-32 reveal bg-\[#E2FF00\] p-8 md:p-10 rounded-bento shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]"/g,
    'class="sticky top-32 reveal"');
  
  // Restore original Sticky content structure
  // We capturing the Captured title and para if they were in the yellow box structure
  const stickyContentRegex = /<h2 class="text-4xl font-black text-\[#0A0A0A\] leading-tight tracking-tightest mb-8 relative z-10">\s*([\s\S]*?)\s*<\/h2>\s*<p class="text-\[#0A0A0A\]\/70 text-sm leading-relaxed mb-0 relative z-10 font-bold">\s*([\s\S]*?)\s*<\/p>/;
  const match = content.match(stickyContentRegex);
  if (match) {
    const title = match[1];
    const para = match[2];
    const restoredSticky = `          <div class="flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-[#E2FF00]/30"></span>
            <span class="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#E2FF00]/50">Deep Dive</span>
          </div>
          <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tightest mb-6 relative z-10">
            ${title}
          </h2>
          <p class="text-white/40 text-sm md:text-base leading-relaxed mb-10 relative z-10 font-medium">${para}</p>`;
    
    content = content.replace(stickyContentRegex, restoredSticky);
  }

  // Final fix for any sharp edges
  content = content.replace(/rounded-\[32px\]/g, 'rounded-bento'); // Standardizer

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Project pages reverted to original Glass Bento style. Smooth scroll preserved.');
