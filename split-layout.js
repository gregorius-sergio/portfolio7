const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // 1. HERO SECTION: Full Left Side Yellow
  // Find the Section and add the Split Background
  content = content.replace(/<(section class="bg-\[#0A0A0A\] pt-16 pb-0 relative")>/i, 
    '<$1>\n    <!-- Full Left Side Yellow Background -->\n    <div class="absolute inset-y-0 left-0 w-[60%] bg-[#E2FF00] hidden lg:block z-0 uppercase"></div>');
  
  // Clean up the Title Card (remove bento box styling from the inner card, making it transparent over the yellow background)
  content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]"/g,
    'class="md:col-span-12 lg:col-span-7 p-6 md:py-16 md:px-0 flex flex-col justify-center reveal relative z-10"');

  // 2. DEEP DIVE SECTION: Full Left Side Yellow (Sticky side)
  // Find the Section and add the Split Background (Left 33% roughly for col-span-4)
  content = content.replace(/<(section class="bg-\[#0A0A0A\] py-16 md:py-24 relative")>/i,
    '<$1>\n    <!-- Full Left Side Yellow Background -->\n    <div class="absolute inset-y-0 left-0 w-[35%] bg-[#E2FF00] hidden lg:block z-0"></div>');

  // Clean up the Sticky Title Card (remove inner card styling)
  content = content.replace(/class="sticky top-32 reveal bg-\[#E2FF00\] p-8 md:p-10 rounded-bento shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]"/g,
    'class="sticky top-40 reveal p-0 flex flex-col relative z-10"');

  // 3. TEXT CONTRAST FIX: On Yellow background, we need black text.
  // Navbar Fix (If it overlaps, it might need to change, but it's fixed at top)
  
  // Breadcrumb fix (When over yellow)
  content = content.replace(/class="flex items-center gap-2 text-\[0\.68rem\] text-white\/30 font-bold uppercase tracking-widest mb-10 reveal"/g,
    'class="flex items-center gap-2 text-[0.68rem] text-[#0A0A0A]/40 font-bold uppercase tracking-widest mb-10 reveal relative z-10"');
  content = content.replace(/class="hover:text-\[#E2FF00\]/g, 'class="hover:text-black/60');
  content = content.replace(/class="text-white\/60"/g, 'class="text-[#0A0A0A]/80 font-bold"');

  // Final Smooth Scroll Alignment with UI-Layouts Screenshot
  // (Standard Lenis setup as shown in the component code they like)
  const lenisFinal = `
    <!-- Lenis Smooth Scroll (UI-Layouts Reference) -->
    <script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script>
    <script>
      const lenis = new Lenis({
        duration: 2, 
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    </script>
`;
  // Clean up previous blocks (v2)
  content = content.replace(/<!-- Lenis CSS & JS [\s\S]*?<\/script>/g, '');
  content = content.replace(/<\/body>/, lenisFinal + '\n</body>');

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Project pages updated: Split Screen Plasma Yellow layout implemented.');
