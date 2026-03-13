import os

def update_index():
    f = r"c:\Users\User\Downloads\portfolio7-main\index.html"
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    # Skills section: Yellow to Dark/Ink
    content = content.replace(
        '<!-- ═══════════════════════════════════════════\n       SKILLS — YELLOW BG, BENTO GRID\n  ═══════════════════════════════════════════ -->\n  <section id="skills" class="bg-y py-20">',
        '<!-- ═══════════════════════════════════════════\n       SKILLS — DARK BG, BENTO GRID\n  ═══════════════════════════════════════════ -->\n  <section id="skills" class="bg-ink py-20">'
    )
    content = content.replace(
        '<span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-ink/40">Tools & Tech</span>\n        <div class="flex-1 h-px bg-ink/15"></div>',
        '<span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-white/30">Tools & Tech</span>\n        <div class="flex-1 h-px bg-white/10"></div>'
    )
    content = content.replace(
        '<h2 class="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tightest text-ink leading-none mb-2">Technologies.</h2>\n          <p class="text-ink/50 text-sm max-w-sm">Everything I use to build robust, scalable systems.</p>',
        '<h2 class="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tightest text-white leading-none mb-2">Technologies.</h2>\n          <p class="text-white/50 text-sm max-w-sm">Everything I use to build robust, scalable systems.</p>'
    )

    # Projects section: from Ink to Ink-soft
    content = content.replace(
        '<!-- ═══════════════════════════════════════════\n       PROJECTS — BLACK BG, BENTO GRID\n  ═══════════════════════════════════════════ -->\n  <section id="projects" class="bg-ink py-20">',
        '<!-- ═══════════════════════════════════════════\n       PROJECTS — DARK BG, BENTO GRID\n  ═══════════════════════════════════════════ -->\n  <section id="projects" class="bg-ink-soft py-20">'
    )

    # Contact section
    contact_orig = """  <!-- ═══════════════════════════════════════════
       CONTACT — YELLOW BG, BENTO GRID
  ═══════════════════════════════════════════ -->
  <section id="contact" class="bg-y py-20">
    <div class="w-full max-w-7xl mx-auto px-6 md:px-12">

      <div class="flex items-center gap-3 mb-8 reveal">
        <span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-ink/40">Get in Touch</span>
        <div class="flex-1 h-px bg-ink/15"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">

        <!-- Big CTA -->
        <div class="md:col-span-8 bg-ink rounded-bento p-10 md:p-14 flex flex-col justify-between min-h-[320px] reveal">
          <div class="text-[0.68rem] font-bold text-white/30 uppercase tracking-widest">Let's Work Together</div>
          <div>
            <h2 class="text-[clamp(2.5rem,4.5vw,4rem)] font-black text-white tracking-tightest leading-[1.05] mb-5">
              Open to great<br>opportunities.
            </h2>
            <p class="text-white/50 text-base leading-relaxed max-w-md mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
            </p>
            <a href="mailto:gregorius.sergio@students.uajy.ac.id"
              class="inline-flex items-center gap-2 bg-y text-ink font-black text-sm px-7 py-3.5 rounded-full hover:bg-white transition-all hover:-translate-y-0.5 hover:shadow-y">
              ✉ Send an Email
            </a>
          </div>
        </div>

        <!-- Social links bento column -->
        <div class="md:col-span-4 grid grid-rows-3 gap-4">

          <a href="https://www.linkedin.com/in/gregoriussergio/" target="_blank" rel="noopener"
            class="bg-white rounded-bento p-6 flex items-center justify-between group hover:-translate-y-0.5 hover:shadow-bento-hover transition-all reveal">
            <div>
              <div class="text-[0.68rem] font-bold text-black/30 uppercase tracking-widest mb-1">Connect on</div>
              <div class="text-ink font-black text-base">LinkedIn</div>
            </div>
            <span class="text-2xl group-hover:scale-110 transition-transform">💼</span>
          </a>

          <a href="https://github.com/gregorius-sergio" target="_blank" rel="noopener"
            class="bg-ink rounded-bento p-6 flex items-center justify-between group hover:-translate-y-0.5 hover:shadow-bento-hover transition-all reveal">
            <div>
              <div class="text-[0.68rem] font-bold text-white/30 uppercase tracking-widest mb-1">Code on</div>
              <div class="text-white font-black text-base">GitHub</div>
            </div>
            <span class="text-2xl group-hover:scale-110 transition-transform">🐙</span>
          </a>

          <div class="bg-white/30 border border-ink/10 rounded-bento p-6 flex flex-col justify-between reveal">
            <div class="text-[0.68rem] font-bold text-ink/40 uppercase tracking-widest">Based in</div>
            <div>
              <div class="text-ink font-black text-base">Yogyakarta</div>
              <div class="text-ink/50 text-xs">Indonesia 🇮🇩</div>
            </div>
          </div>

        </div>

      </div>"""

    contact_new = """  <!-- ═══════════════════════════════════════════
       CONTACT — CREAM BG, BENTO GRID
  ═══════════════════════════════════════════ -->
  <section id="contact" class="bg-cream py-20">
    <div class="w-full max-w-7xl mx-auto px-6 md:px-12">

      <div class="flex items-center gap-3 mb-8 reveal">
        <span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-black/30">Get in Touch</span>
        <div class="flex-1 h-px bg-black/10"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">

        <!-- Big CTA -->
        <div class="md:col-span-8 bg-ink rounded-bento p-10 md:p-14 flex flex-col justify-between min-h-[320px] reveal">
          <div class="text-[0.68rem] font-bold text-white/30 uppercase tracking-widest">Let's Work Together</div>
          <div>
            <h2 class="text-[clamp(2.5rem,4.5vw,4rem)] font-black text-white tracking-tightest leading-[1.05] mb-5">
              Open to great<br>opportunities.
            </h2>
            <p class="text-white/50 text-base leading-relaxed max-w-md mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
            </p>
            <a href="mailto:gregorius.sergio@students.uajy.ac.id"
              class="inline-flex items-center gap-2 bg-y text-ink font-black text-sm px-7 py-3.5 rounded-full hover:bg-white transition-all hover:-translate-y-0.5 hover:shadow-y">
              ✉ Send an Email
            </a>
          </div>
        </div>

        <!-- Social links bento grid -->
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

        </div>

      </div>"""

    content = content.replace(contact_orig, contact_new)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print("Updated index.html")

def update_projects():
    project_files = [
        r"c:\Users\User\Downloads\portfolio7-main\project-grembit.html",
        r"c:\Users\User\Downloads\portfolio7-main\project-grembit-vada.html",
        r"c:\Users\User\Downloads\portfolio7-main\project-portfolio.html"
    ]

    for pf in project_files:
        with open(pf, 'r', encoding='utf-8') as file:
            pcontent = file.read()
            
        orig_stack = """        <!-- Tech stack -->
        <div class="md:col-span-12 bg-white rounded-bento p-6 flex flex-wrap gap-2 items-center reveal">
          <span class="text-[0.65rem] font-bold text-black/30 uppercase tracking-widest mr-3">Stack:</span>"""
        
        new_stack = """        <!-- Tech stack -->
        <div class="md:col-span-12 bg-ink-soft border border-white/5 rounded-bento p-6 flex flex-wrap gap-2 items-center reveal">
          <span class="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest mr-3">Stack:</span>"""
          
        pcontent = pcontent.replace(orig_stack, new_stack)
        pcontent = pcontent.replace(
            'class="text-sm font-bold text-ink bg-black/5 px-4 py-2 rounded-full"',
            'class="text-sm font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full"'
        )

        pcontent = pcontent.replace(
            '<!-- ── SCREENSHOTS: YELLOW ── -->\n  <section class="bg-y py-20">',
            '<!-- ── SCREENSHOTS: CREAM ── -->\n  <section class="bg-cream py-20">'
        )
        pcontent = pcontent.replace(
            '<span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-ink/40">Screenshots</span>\n        <div class="flex-1 h-px bg-ink/15"></div>',
            '<span class="text-[0.68rem] font-bold uppercase tracking-[2px] text-black/30">Screenshots</span>\n        <div class="flex-1 h-px bg-black/10"></div>'
        )

        contact_strip_orig = '<div class="bg-y rounded-bento p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 reveal">'
        contact_strip_new = '<div class="bg-white rounded-bento p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 reveal">'
        pcontent = pcontent.replace(contact_strip_orig, contact_strip_new)
        
        pcontent = pcontent.replace(
            'class="bg-ink text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-ink-soft transition-all hover:-translate-y-0.5">✉ Email Me</a>',
            'class="bg-y text-ink font-bold text-sm px-6 py-3 rounded-full hover:bg-y-dark transition-all hover:-translate-y-0.5">✉ Email Me</a>'
        )
        pcontent = pcontent.replace(
            'class="bg-white/30 text-ink font-bold text-sm px-6 py-3 rounded-full hover:bg-white transition-all hover:-translate-y-0.5">See All Contacts →</a>',
            'class="bg-ink/5 border border-ink/10 text-ink font-bold text-sm px-6 py-3 rounded-full hover:bg-ink/10 transition-all hover:-translate-y-0.5">See All Contacts →</a>'
        )

        with open(pf, 'w', encoding='utf-8') as file:
            file.write(pcontent)
            
    print("Updated project files")

update_index()
update_projects()
