const fs = require('fs');

const files = fs.readdirSync('.').filter(f => (f === 'index.html' || f.startsWith('project-')) && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // Fix Button Colors (Black text on Yellow)
  // Target: bg-[#E2FF00] text-white
  content = content.replace(/bg-\[#E2FF00\] text-white font-black/g, 'bg-[#E2FF00] text-[#0A0A0A] font-black');
  content = content.replace(/bg-\[#E2FF00\] text-white font-bold/g, 'bg-[#E2FF00] text-[#0A0A0A] font-bold');
  
  // Fix Hover State (Black text on White)
  content = content.replace(/hover:bg-white transition-all/g, 'hover:bg-white hover:text-black transition-all');

  // Check for the "Circle Ball" - I'll try to find any z-50 or fixed that might be it
  // Actually, I'll search for "rounded-full" with specific dimensions.
  // Screenshot target icon looks about 32x32 or 40x40.
  
  // Clean up any rogue floating buttons from UI-Layouts? 
  // I didn't see any in my text searches, so it might be an external script.

  // Restore Glass Hero Card consistency
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]/g,
    'class="md:col-span-12 lg:col-span-7 glass-2-0 liquid-glass-glow rounded-bento p-6 md:p-10 flex flex-col justify-center reveal"');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Button colors and card consistency refined across all pages.');
