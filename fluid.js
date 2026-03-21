const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

const hotspotSnippet = `
            <!-- Interactive Hotspot -->
            <div class="absolute top-1/3 left-1/4 z-20 group/hotspot cursor-pointer hidden md:block">
              <div class="w-4 h-4 bg-[#E2FF00] rounded-full animate-ping absolute opacity-70"></div>
              <div class="w-4 h-4 bg-[#E2FF00] rounded-full relative z-10 border-2 border-[#0A0A0A]"></div>
              
              <!-- Floating Glass Card -->
              <div class="absolute top-8 -left-24 opacity-0 invisible group-hover/hotspot:opacity-100 group-hover/hotspot:visible transition-all duration-500 w-64 glass-2-0 p-5 rounded-[16px] flex flex-col gap-2 pointer-events-none transform translate-y-4 group-hover/hotspot:translate-y-0 shadow-2xl border border-white/10 backdrop-blur-3xl">
                <span class="text-[#E2FF00] font-black text-[0.6rem] uppercase tracking-widest">Interactive Insight</span>
                <span class="text-white text-xs font-medium leading-relaxed">Elemen UI ini menyoroti data probabilitas tertinggi secara real-time tanpa delay.</span>
              </div>
            </div>
`;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // Convert bento boxes in the Twin Scroll Narrative to Fluid Sections
  content = content.replace(/class="glass-2-0 liquid-glass-glow rounded-\[?24px\]?.*? p-7 md:p-12 reveal shadow-lg group"/g, 
    'class="reveal group border-b border-white/5 pb-16 md:pb-24 mb-16 md:mb-24 last:border-0 last:pb-0 last:mb-0"');
    
  // If `rounded-bento` was used instead of `rounded-[24px]`
  content = content.replace(/class="glass-2-0 liquid-glass-glow rounded-bento p-7 md:p-12 reveal shadow-lg group"/g, 
    'class="reveal group border-b border-white/5 pb-16 md:pb-24 mb-16 md:mb-24 last:border-0 last:pb-0 last:mb-0"');

  // Inject the hotspot precisely inside the image containers in the fluid sections
  content = content.replace(/(<div class="w-full h-\[2[0-9]{2}px\] md:h-\[[34][0-9]{2}px\].*? relative z-10">)/g, `$1\n${hotspotSnippet}`);

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Applied Fluid Sections and Interactive Hotspots (Pulsing Div Pips).');
