const fs = require('fs');

// The "Gold Standard" Template (Structure only)
const standardFile = 'project-grembit.html';
const standardContent = fs.readFileSync(standardFile, 'utf8');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html') && f !== standardFile);

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // 1. Sync the <head> styles and scripts (including Smooth Scroll)
  const headMatch = standardContent.match(/<head>([\s\S]*?)<\/head>/);
  if (headMatch) {
    content = content.replace(/<head>([\s\S]*?)<\/head>/, `<head>${headMatch[1]}</head>`);
  }

  // 2. Sync the Hero Section Grid structure
  // Capture unique content from current file
  const heroTitleMatch = content.match(/<h1[\s\S]*?>([\s\S]*?)<\/h1>/);
  const heroParaMatch = content.match(/<section[\s\S]*?<p class="text-white\/40[\s\S]*?>([\s\S]*?)<\/p>/);
  const heroImageMatch = content.match(/<div class="md:col-span-12 lg:col-span-5[\s\S]*?<img src="([\s\S]*?)"/);
  const heroBadgeMatch = content.match(/<div class="inline-flex items-center[\s\S]*?><span[\s\S]*?<\/span>([\s\S]*?)<\/div>/);

  // 3. Sync the Tech Stack Bar structure (keep the tags)
  const techStackMatch = content.match(/<div class="flex flex-wrap gap-2 justify-center">([\s\S]*?)<\/div>/) 
                        || content.match(/<div class="flex flex-wrap gap-3 justify-center">([\s\S]*?)<\/div>/);
  const techArchMatch = content.match(/<span class="text-white\/80 font-bold text-xs uppercase tracking-wider">([\s\S]*?)<\/span>/);

  // 4. Sync the Deep Dive Sidebar content
  const deepTitleMatch = content.match(/<h2 class="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tightest mb-6 relative z-10">\s*([\s\S]*?)\s*<\/h2>/);
  const deepParaMatch = content.match(/<p class="text-white\/40 text-sm md:text-base leading-relaxed mb-10 relative z-10 font-medium">\s*([\s\S]*?)\s*<\/p>/);

  // Now, we could try to replace the whole body but that's risky.
  // Instead, let's fix the specific classes to match project-grembit.

  // Restore Glass Bento to Hero Left
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\] md:min-h-\[400px\]"/g,
    'class="md:col-span-12 lg:col-span-7 glass-2-0 liquid-glass-glow rounded-bento p-6 md:p-10 flex flex-col justify-center reveal"');
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] p-10 md:p-16 lg:h-full flex flex-col justify-center reveal shadow-none"/g,
    'class="md:col-span-12 lg:col-span-7 glass-2-0 liquid-glass-glow rounded-bento p-6 md:p-10 flex flex-col justify-center reveal"');

  // Restore Hero Grid gap/rounded
  content = content.replace(/grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-\[32px\] border border-white\/5 items-stretch shadow-2xl/g,
    'grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-stretch');

  // Deep Dive Sidebar: Ensure it's original text-on-black (No box)
  content = content.replace(/<div class="lg:col-span-4 hidden lg:block bg-\[#E2FF00\] rounded-bento overflow-hidden">[\s\S]*?<div class="sticky top-0 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center reveal">/g,
    '<div class="lg:col-span-4 hidden lg:block">\n        <div class="sticky top-32 reveal">');

  // Restore Deep Dive boxes structure (rounding and glass)
  content = content.replace(/rounded-\[32px\]/g, 'rounded-bento');
  content = content.replace(/bg-\[#E2FF00\]/g, 'glass-2-0 liquid-glass-glow'); // Target any rogue yellow boxes

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Project pages synchronized to project-grembit style.');
