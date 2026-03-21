const fs = require('fs');

const lenisStyles = `
    /* Lenis Smooth Scroll Setup */
    html.lenis {
      height: auto;
    }
    .lenis.lenis-smooth {
      scroll-behavior: auto !important;
    }
    .lenis.lenis-smooth [data-lenis-prevent] {
      overscroll-behavior: contain;
    }
    .lenis.lenis-stopped {
      overflow: hidden;
    }
    .lenis.lenis-scrolling iframe {
      pointer-events: none;
    }
`;

const files = fs.readdirSync('.').filter(f => (f === 'index.html' || f.startsWith('project-')) && f.endsWith('.html'));

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');

  // 1. Fix Smooth Scroll in ALL files
  if (!content.includes('html.lenis')) {
    if (content.includes('</style>')) {
        content = content.replace(/<\/style>/, lenisStyles + '\n  </style>');
    } else {
        content = content.replace(/<\/head>/, '<style>' + lenisStyles + '</style>\n</head>');
    }
  }

  if (f.startsWith('project-')) {
    // 2. HERO SECTION: Full Left Yellow Split
    // Find the Hero grid and make it gap-0, and the left column full width within the grid
    content = content.replace(/<div class="grid grid-cols-1 md:grid-cols-12 gap-[58] md:gap-[8] items-stretch">/g,
        '<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[32px] border border-white/5 items-stretch shadow-2xl">');
    
    // Adjust Hero Left column (lg:col-span-7)
    content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] p-10 md:p-16 lg:h-full flex flex-col justify-center reveal shadow-none"/g,
        'class="md:col-span-12 lg:col-span-7 bg-[#E2FF00] p-8 md:p-16 flex flex-col justify-center reveal"');
    
    // Adjust Hero Right column (lg:col-span-5) - make it glass but no extra padding
    content = content.replace(/class="md:col-span-12 lg:col-span-5 glass-2-0 liquid-glass-glow rounded-bento overflow-hidden reveal relative flex items-center justify-center p-3"/g,
        'class="md:col-span-12 lg:col-span-5 glass-2-0 liquid-glass-glow flex items-center justify-center p-6 md:p-10 reveal"');

    // 3. DEEP DIVE SECTION: Full Left Yellow Sidebar
    // Target the lg:col-span-4 container
    content = content.replace(/<div class="lg:col-span-4 hidden lg:block">[\s\S]*?<div class="sticky top-32 reveal bg-\[#E2FF00\] p-8 md:p-10 rounded-bento shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]">/g,
        '<div class="lg:col-span-4 hidden lg:block bg-[#E2FF00] rounded-[32px] overflow-hidden">\n        <div class="sticky top-0 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center reveal">');

    // Remove text-3xl/4xl from sticky title to fit better in a column
    content = content.replace(/class="text-3xl lg:text-4xl font-black text-\[#0A0A0A\] leading-tight tracking-tightest mb-6 relative z-10"/g,
        'class="text-4xl font-black text-[#0A0A0A] leading-tight tracking-tightest mb-8 relative z-10"');
  }

  fs.writeFileSync(f, content, 'utf8');
}
console.log('UI Transformation Complete: Full-column yellow accents & Smooth scroll fixed.');
