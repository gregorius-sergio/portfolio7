const fs = require('fs');

const files = fs.readdirSync('.').filter(f => (f === 'index.html' || f.startsWith('project-')) && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // Fix the "Floating Blue Ball" rogue glows
  // Replace invalid glass-2-0 liquid-glass-glow/10 or similar with solid glows
  content = content.replace(/glass-2-0 liquid-glass-glow\/10/g, 'bg-[#E2FF00]/10');
  content = content.replace(/bg-ink\/10/g, 'bg-black/10'); // Uniformity
  
  // Clean up any remaining rogue class names with /10
  content = content.replace(/liquid-glass-glow\/10/g, 'bg-[#E2FF00]/10');
  
  // Ensure we have a clean glow implementation like project-grembit
  content = content.replace(/class="absolute top-1\/4 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[600px\] h-\[600px\] bg-\[#E2FF00\]\/10 blur-\[120px\]/g,
    'class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E2FF00]/10 blur-[120px]');

  // BUTTON REFINEMENT: Fix the CTA button styles to be clear and match grembit
  // Target: class="inline-block glass-2-0 liquid-glass-glow text-white ...
  // Change to: class="inline-block bg-[#E2FF00] text-[#0A0A0A] font-black ...
  content = content.replace(/class="inline-block glass-2-0 liquid-glass-glow text-white font-black text-sm px-10 py-5 rounded-full/g,
    'class="inline-block bg-[#E2FF00] text-[#0A0A0A] font-black text-sm px-10 py-5 rounded-full');
  
  content = content.replace(/class="inline-block glass-2-0 liquid-glass-glow text-white font-bold text-sm px-10 py-5 rounded-full/g,
    'class="inline-block bg-[#E2FF00] text-[#0A0A0A] font-bold text-sm px-10 py-5 rounded-full');

  // Ensure and reinforce hover styles (White bg with black text)
  content = content.replace(/bg-\[#E2FF00\] text-\[#0A0A0A\]([\s\S]*?)hover:bg-white/g,
    'bg-[#E2FF00] text-[#0A0A0A]$1hover:bg-white hover:text-black');

  // One specific fix for project-grembit's button text encoding if it was messy
  content = content.replace(/Connect Today G/g, 'Connect Today →');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Rogue "Blue Ball" glows removed and CTA buttons standardized across all pages.');
