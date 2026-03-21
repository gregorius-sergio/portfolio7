const fs = require('fs');

const newFooter = String.raw`  <!-- ── CONTACT STRIP: BLACK ── -->
  <section class="bg-[#0A0A0A] py-16 md:py-24 border-t border-white/5 relative">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#E2FF00]/10 rounded-full blur-[120px]"></div>
    </div>
    <div class="w-full max-w-7xl mx-auto px-5 md:px-12 relative z-10">
      <div class="glass-2-0 liquid-glass-glow rounded-[24px] md:rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 border border-white/10 shadow-y group">
        <div>
          <div class="text-[0.68rem] font-bold text-[#E2FF00] uppercase tracking-widest mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#E2FF00] animate-pulse"></span>Let's Collaborate
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">Build something iconic.</h2>
          <p class="text-white/50 text-sm max-w-md">Tertarik untuk membangun relasi atau berkolaborasi? Diskusikan ide Anda sekarang.</p>
        </div>
        <div class="flex-shrink-0">
          <a href="index.html#contact"
            class="inline-block bg-[#E2FF00] text-[#0A0A0A] font-black text-sm px-10 py-5 rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-y hover:shadow-none">Connect Today →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
    <div class="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
    <div class="w-full max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
      <div class="md:col-span-2">
        <a href="index.html" class="flex items-center gap-3 mb-6 group">
          <img src="assets/profile-hero.png" alt="" class="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 grayscale group-hover:grayscale-0 transition-all duration-500">
          <span class="font-black text-white text-xl tracking-tight">Gregorius Sergio</span>
        </a>
        <p class="text-white/40 text-sm leading-relaxed max-w-sm">Focused on System Architecture, Data Precision, and UI/UX Mastery. Based in Pontianak, Indonesia.</p>
        <div class="flex gap-4 mt-8">
          <a href="https://github.com/gregorius-sergio" target="_blank" rel="noopener"
            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#E2FF00] hover:text-[#0A0A0A] hover:border-[#E2FF00] hover:scale-110 transition-all text-sm font-black">GH</a>
          <a href="https://www.linkedin.com/in/gregorius-sergio-37762b300/" target="_blank" rel="noopener"
            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#E2FF00] hover:text-[#0A0A0A] hover:border-[#E2FF00] hover:scale-110 transition-all text-sm font-black">LI</a>
          <a href="https://www.instagram.com/gregorius_gesergio/" target="_blank" rel="noopener"
            class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#E2FF00] hover:text-[#0A0A0A] hover:border-[#E2FF00] hover:scale-110 transition-all text-sm font-black">IG</a>
        </div>
      </div>
      <div>
        <h5 class="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Directory</h5>
        <ul class="space-y-4">
          <li><a href="index.html#about" class="text-sm font-medium text-white/60 hover:text-[#E2FF00] transition-colors">About</a></li>
          <li><a href="index.html#skills" class="text-sm font-medium text-white/60 hover:text-[#E2FF00] transition-colors">Skills</a></li>
          <li><a href="index.html#projects" class="text-sm font-medium text-white/60 hover:text-[#E2FF00] transition-colors">Projects</a></li>
          <li><a href="index.html#contact" class="text-sm font-medium text-white/60 hover:text-[#E2FF00] transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Case Studies</h5>
        <ul class="space-y-4">
          <li><a href="project-grembit.html" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Grembit 10 Axiom</a></li>
          <li><a href="project-fronton.html" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Grembit Fronton</a></li>
          <li><a href="project-mevers.html" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Grembit Mevers 7</a></li>
          <li><a href="project-grembit-vada.html" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Grembit VADA</a></li>
          <li><a href="project-portfolio.html" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Portfolio</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/5 relative z-10 w-full bg-[#0A0A0A]">
      <div class="w-full max-w-7xl mx-auto px-5 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <span class="text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">© 2026 GREGORIUS SERGIO. </span>
        <span class="text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">BUILT WITH <span class="text-[#E2FF00] font-black">TAILWIND CSS</span> & GLASSMORPHISM 2.0</span>
      </div>
    </div>
  </footer>

  <script>
    const hbg = document.getElementById('hbg'), mnav = document.getElementById('mnav'), hbs = document.querySelectorAll('.hb');
    function toggleNav() {
      const o = hbg.classList.toggle('open');
      mnav.style.display = o ? 'flex' : 'none';
      hbs[0].style.transform = o ? 'translateY(7px) rotate(45deg)' : '';
      hbs[1].style.opacity = o ? '0' : ''; hbs[2].style.transform = o ? 'translateY(-7px) rotate(-45deg)' : '';
    }
    function closeNav() { hbg.classList.remove('open'); mnav.style.display = 'none'; hbs.forEach(b => { b.style.transform = ''; b.style.opacity = ''; }); }
    window.addEventListener('scroll', () => { document.getElementById('nav').style.backgroundColor = window.scrollY > 20 ? 'rgba(10,10,10,0.9)' : 'rgba(10,10,10,0.8)'; document.getElementById('nav').style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none'; }, { passive: true });
    const io = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Liquid Glass Glow Effect
    document.querySelectorAll('.liquid-glass-glow').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', \`\${x}px\`);
        el.style.setProperty('--y', \`\${y}px\`);
      });
    });
  </script>
</body>
</html>`;

const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));
for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  
  // Cleanup cream screenshots
  content = content.replace(/<!-- ── SCREENSHOTS: CREAM ── -->[\s\S]*?(?=<!-- ── CONTACT STRIP|\z)/ig, '');
  content = content.replace(/<!-- ── SCREENSHOTS ── -->[\s\S]*?(?=<!-- ── CONTACT STRIP|\z)/ig, '');

  content = content.replace(/<!-- ── CONTACT STRIP.*?\n([\s\S]*?)<\/html>/ig, newFooter);

  let p = f.split('.')[0];
  content = content.replace(
    new RegExp(`<!-- ── CONTACT STRIP([\\s\\S]*?)href="${p}.html"([\\s\\S]*?)<!-- ── CONTACT STRIP`, 'ig'),
    `<!-- ── CONTACT STRIP$1href="${p}.html" class="text-sm font-black text-[#E2FF00]"$2<!-- ── CONTACT STRIP`
  );

  fs.writeFileSync(f, content, 'utf8');
}
