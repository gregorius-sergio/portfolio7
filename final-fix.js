const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // CLEAN UP DEEP DIVE STICKY SIDE
  const sidebarPattern = /<!-- Left: Sticky Title \(1\/3\) -->[\s\S]*?<!-- Right: Scrolling Visuals & Data \(2\/3\) -->/;
  
  const titleMatch = content.match(/<h2 class="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tightest mb-6 relative z-10">\s*([\s\S]*?)\s*<\/h2>/) 
                    || content.match(/<h2 class="text-3xl lg:text-4xl font-black text-\[#0A0A0A\] leading-tight tracking-tightest mb-6 relative z-10">\s*([\s\S]*?)\s*<\/h2>/)
                    || content.match(/<h2 class="text-4xl font-black text-\[#0A0A0A\] leading-tight tracking-tightest mb-8 relative z-10">\s*([\s\S]*?)\s*<\/h2>/);
  
  const paraMatch = content.match(/<p class="text-white\/40 text-sm md:text-base leading-relaxed mb-10 relative z-10 font-medium">\s*([\s\S]*?)\s*<\/p>/)
                   || content.match(/<p class="text-\[#0A0A0A\]\/70 text-sm leading-relaxed mb-0 relative z-10 font-bold">\s*([\s\S]*?)\s*<\/p>/);

  if (titleMatch && paraMatch) {
    const title = titleMatch[1].trim();
    const para = paraMatch[1].trim();

    const cleanSidebar = `<!-- Left: Sticky Title (1/3) -->
      <div class="lg:col-span-4 hidden lg:block">
        <div class="sticky top-32 reveal">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-8 h-px bg-[#E2FF00]/30"></span>
            <span class="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#E2FF00]/60">Deep Dive</span>
          </div>
          <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tightest mb-6 relative z-10">
            ${title}
          </h2>
          <p class="text-white/40 text-sm md:text-base leading-relaxed mb-10 relative z-10 font-medium">${para}</p>
        </div>
      </div>

      <!-- Right: Scrolling Visuals & Data (2/3) -->`;

    content = content.replace(sidebarPattern, cleanSidebar);
  }

  // Restore Glass Hero Card
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]/g,
    'class="md:col-span-12 lg:col-span-7 glass-2-0 liquid-glass-glow rounded-bento p-6 md:p-10 flex flex-col justify-center reveal"');

  // Fix text colors
  content = content.replace(/text-\[#0A0A0A\]/g, 'text-white');
  content = content.replace(/text-\[#0A0A0A\]\/70/g, 'text-white/40');
  
  // Ensure rounded-bento is used everywhere
  content = content.replace(/rounded-\[32px\]/g, 'rounded-bento');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Project pages finalized: Premium Glass Theme fully restored.');
