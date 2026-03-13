import re

def main():
    f = r"c:\Users\User\Downloads\portfolio7-main\index.html"
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()

    # 1. SVGs to replace Emojis
    svg_algo = '<svg class="w-8 h-8 text-ink mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18M9 15l3-3 4 4 5-5M9 15V9" /></svg>'
    svg_python = '<svg class="w-8 h-8 text-white mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
    svg_data = '<svg class="w-8 h-8 text-white mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>'
    svg_web = '<svg class="w-8 h-8 text-ink mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>'
    svg_tools = '<svg class="w-8 h-8 text-white mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
    svg_ml = '<svg class="w-10 h-10 flex-shrink-0 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>'

    # Replace Hero emojis and modify content for "Fokus & Minat"
    c = c.replace('<div class="text-4xl mb-3">🤖</div>', svg_algo)
    c = c.replace('text-ink font-black text-base leading-tight mb-1">Algo Trading</div>\n            <div class="text-ink/50 text-xs font-semibold">Grembit Systems</div>', 'text-ink font-black text-base leading-tight mb-1">Fokus Diri</div>\n            <div class="text-ink/50 text-xs font-semibold">Algorithmic Trading & Quant</div>')
    
    # We will repurpose Experience & Projects into something less standard, maybe "Minat Diri"
    exp_block_old = """        <!-- [E] Years stat — col 9-10 -->
        <div class="md:col-span-2 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between reveal">
          <div class="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">Experience</div>
          <div>
            <div class="text-[3.5rem] font-black text-y leading-none tracking-tightest">3+</div>
            <div class="text-white/40 text-xs mt-1">Years coding</div>
          </div>
        </div>"""
    
    exp_block_new = """        <!-- [E] Minat Diri -->
        <div class="md:col-span-4 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between reveal">
          <div class="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">Minat Diri</div>
          <div class="mt-4">
            <div class="text-white font-black text-base leading-tight mb-1">Data & Web Systems</div>
            <div class="text-white/40 text-xs mt-1 leading-relaxed">Building scalable backend infrastructures and fast UI.</div>
          </div>
        </div>"""
        
    proj_block_old = """        <!-- [F] Projects stat — col 11-12 -->
        <div class="md:col-span-2 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between reveal">
          <div class="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">Projects</div>
          <div>
            <div class="text-[3.5rem] font-black text-white leading-none tracking-tightest">10+</div>
            <div class="text-white/40 text-xs mt-1">Completed</div>
          </div>
        </div>"""
    proj_block_new = "" # Remove to fit the spanning better, since E is now col-span-4 (Wait, D was 3, old E=2, old F=2. 3+2+2=7. So if E is 4, 3+4=7. It fits perfectly).
    
    c = c.replace(exp_block_old, exp_block_new)
    c = c.replace(proj_block_old, proj_block_new)

    # Remove Emojis from About Tags
    c = c.replace('🐍 Python', 'Python')
    c = c.replace('📊 Data', 'Data Science')
    c = c.replace('🤖 Trading', 'Algo Trading')
    c = c.replace('🌐 Web', 'Web Dev')
    c = c.replace('📈 Finance', 'Quant Finance')
    
    # Skills changes - bg color and SVG
    # python
    c = c.replace('<div class="md:col-span-5 bg-ink rounded-bento p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:shadow-bento-hover transition-all duration-250 cursor-default reveal">',
                  '<div class="md:col-span-5 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:border-white/10 transition-all duration-250 cursor-default reveal">')
    c = c.replace('<span class="text-3xl">🐍</span>', svg_python)

    # algo
    c = c.replace('<span class="text-3xl">📈</span>', svg_algo)
    
    # data
    c = c.replace('<div class="md:col-span-3 bg-ink rounded-bento p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:shadow-bento-hover transition-all duration-250 cursor-default reveal">',
                  '<div class="md:col-span-3 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between min-h-[180px] hover:-translate-y-1 hover:border-white/10 transition-all duration-250 cursor-default reveal">')
    c = c.replace('<span class="text-3xl">📊</span>', svg_data)
    
    # web dev
    c = c.replace('<span class="text-3xl">🌐</span>', svg_web)

    # dev tools
    c = c.replace('<div class="md:col-span-3 bg-ink rounded-bento p-7 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 hover:shadow-bento-hover transition-all duration-250 cursor-default reveal">\n          <span class="text-3xl">🔧</span>',
                  '<div class="md:col-span-3 bg-ink-soft border border-white/5 rounded-bento p-7 flex flex-col justify-between min-h-[160px] hover:-translate-y-1 hover:border-white/10 transition-all duration-250 cursor-default reveal">\n          ' + svg_tools)

    # ml
    c = c.replace('<div class="md:col-span-6 bg-black rounded-bento p-7 flex items-center gap-6 min-h-[140px] hover:-translate-y-1 hover:shadow-bento-hover transition-all duration-250 cursor-default reveal">',
                  '<div class="md:col-span-6 bg-ink-soft border border-white/5 rounded-bento p-7 flex items-center gap-6 min-h-[140px] hover:-translate-y-1 hover:border-white/10 transition-all duration-250 cursor-default reveal">')
    c = c.replace('<span class="text-4xl flex-shrink-0">🤖</span>', svg_ml)

    # Education old side focus
    c = c.replace('<div class="text-[0.68rem] font-bold text-ink/40 uppercase tracking-widest">Side Focus</div>', '<div class="text-[0.68rem] font-bold text-ink/40 uppercase tracking-widest">Research Focus</div>')
    c = c.replace('<div class="text-5xl mb-4">📈</div>', '<div class="mb-5">' + svg_algo + '</div>')

    # CONTACT SECTION Rewrite
    contact_social_old = """        <!-- Social links bento grid -->
        <div class="md:col-span-4 grid grid-cols-2 grid-rows-2 gap-4">

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/gregoriussergio/" target="_blank" rel="noopener"
            class="bg-white rounded-bento p-5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-bento-hover border border-black/5 transition-all reveal">
            <span class="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all">💼</span>
            <span class="text-ink font-black text-sm">LinkedIn</span>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/gregorius-sergio" target="_blank" rel="noopener"
            class="bg-ink text-white rounded-bento p-5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-bento-hover border border-white/5 transition-all reveal">
            <span class="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all">🐙</span>
            <span class="text-white font-black text-sm">GitHub</span>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/gregoriussergio" target="_blank" rel="noopener"
            class="bg-white rounded-bento p-5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-bento-hover border border-black/5 transition-all reveal">
            <span class="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all">📸</span>
            <span class="text-ink font-black text-sm">Instagram</span>
          </a>

           <!-- TikTok -->
           <a href="https://www.tiktok.com/@gregoriussergio" target="_blank" rel="noopener"
            class="bg-white rounded-bento p-5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-bento-hover border border-black/5 transition-all reveal">
            <span class="text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all">🎵</span>
            <span class="text-ink font-black text-sm">TikTok</span>
          </a>

        </div>"""

    contact_social_new = """        <!-- Modern Social Links directory style -->
        <div class="md:col-span-4 bg-white/50 border border-black/5 rounded-bento p-2 flex flex-col gap-1 reveal">
          
          <a href="https://www.linkedin.com/in/gregoriussergio/" target="_blank" rel="noopener" class="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink group-hover:bg-y transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <div class="text-ink font-bold text-sm">LinkedIn</div>
                <div class="text-ink/50 text-xs mt-0.5">@gregoriussergio</div>
              </div>
            </div>
            <span class="text-ink/20 group-hover:text-ink transition-colors font-bold">↗</span>
          </a>

          <a href="https://github.com/gregorius-sergio" target="_blank" rel="noopener" class="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink group-hover:bg-black group-hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <div class="text-ink font-bold text-sm">GitHub</div>
                <div class="text-ink/50 text-xs mt-0.5">10+ Repositories</div>
              </div>
            </div>
            <span class="text-ink/20 group-hover:text-ink transition-colors font-bold">↗</span>
          </a>

          <a href="https://www.instagram.com/gregoriussergio" target="_blank" rel="noopener" class="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 group-hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <div class="text-ink font-bold text-sm">Instagram</div>
                <div class="text-ink/50 text-xs mt-0.5">Captures & Life</div>
              </div>
            </div>
            <span class="text-ink/20 group-hover:text-ink transition-colors font-bold">↗</span>
          </a>

          <a href="https://www.tiktok.com/@gregoriussergio" target="_blank" rel="noopener" class="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center text-ink group-hover:bg-black group-hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.41-5.46.02-2.35 1.52-4.59 3.79-5.41 1.35-.49 2.87-.52 4.25-.13.01.59 0 1.18.01 1.77-1.12-.24-2.29-.11-3.32.39-1.32.61-2.24 1.92-2.34 3.39-.08 1.56.9 3.08 2.36 3.65 1.58.62 3.42.34 4.75-.76 1.15-.93 1.7-2.4 1.68-3.89-.01-5.84-.01-11.68-.02-17.51z"/></svg>
              </div>
              <div>
                <div class="text-ink font-bold text-sm">TikTok</div>
                <div class="text-ink/50 text-xs mt-0.5">Video Content</div>
              </div>
            </div>
            <span class="text-ink/20 group-hover:text-ink transition-colors font-bold">↗</span>
          </a>

        </div>"""
    c = c.replace(contact_social_old, contact_social_new)

    with open(f, 'w', encoding='utf-8') as file:
        file.write(c)

    print("index.html updated successfully!")

if __name__ == "__main__":
    main()
