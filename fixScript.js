const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('project-') && f.endsWith('.html'));

const goodScript = `  <script>
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

for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  let newText = text.replace(/<script>[\s\S]*?<\/html>/, goodScript);
  fs.writeFileSync(f, newText, 'utf8');
}
console.log('Fixed script blocks.');
