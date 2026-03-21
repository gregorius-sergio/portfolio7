import os
import re

files = [
    'project-grembit.html',
    'project-grembit-vada.html',
    'project-portfolio.html',
    'project-mevers.html'
]

for f in files:
    filepath = os.path.join(r'c:\Users\User\Downloads\portfolio7-main', f)
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    # 1. Update CSS
    if 'glass-2-0' not in content:
        content = content.replace('.img-zoom:hover img {\n      transform: scale(1.04);\n    }', 
'''.img-zoom:hover img {
      transform: scale(1.04);
    }

    /* Glassmorphism 2.0 (The MacOS Standard) */
    .glass-2-0 {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
    }

    /* Liquid Glass Hover Effect */
    .liquid-glass-glow {
      position: relative;
      overflow: hidden;
    }
    .liquid-glass-glow::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--x) var(--y), rgba(226, 255, 0, 0.15) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 10;
    }
    .liquid-glass-glow:hover::after {
      opacity: 1;
    }''')

    # 2. Update Body & Nav & Footer colors to #0A0A0A, replace bg-ink with bg-[#0A0A0A], text-y with text-[#E2FF00] etc
    # We will just replace ink with #0A0A0A across Nav and Footer and Contact Strip
    content = content.replace('<body class="bg-ink ', '<body class="bg-[#0A0A0A] ')
    content = content.replace('<nav id="nav"\n    class="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-ink/80', '<nav id="nav" class="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-[#0A0A0A]/80')
    content = content.replace('bg-ink border-b', 'bg-[#0A0A0A] border-b')
    content = content.replace('<footer class="bg-ink ', '<footer class="bg-[#0A0A0A] ')
    content = content.replace('hover:text-y', 'hover:text-[#E2FF00]')
    content = content.replace('text-y', 'text-[#E2FF00]')
    content = content.replace('bg-y', 'bg-[#E2FF00]')
    
    # Add JS script logic at bottom
    if 'liquid-glass-glow' not in content.split('<script>')[-1]:
        content = content.replace('  </script>\\n</body>', '''
    // Liquid Glass Glow Effect
    document.querySelectorAll('.liquid-glass-glow').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', ${x}px);
        el.style.setProperty('--y', ${y}px);
      });
    });
  </script>
</body>''')

    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Patched {f}")

