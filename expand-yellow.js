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

  // 1. Fix Smooth Scroll CSS in index.html (ensure it has the lenis styles)
  if (!content.includes('html.lenis')) {
    if (content.includes('</style>')) {
        content = content.replace(/<\/style>/, lenisStyles + '\n  </style>');
    } else {
        content = content.replace(/<\/head>/, '<style>' + lenisStyles + '</style>\n</head>');
    }
  }

  // 2. Adjust Deep Dive for "Entire Left Side Yellow"
  if (f.startsWith('project-')) {
    // Specifically target the Deep Dive section
    // Change the Left column layout to be solid yellow
    
    // Previous Left Sticky logic:
    // <div class="lg:col-span-4 hidden lg:block">
    //   <div class="sticky top-32 reveal bg-[#E2FF00] p-8 md:p-10 rounded-bento shadow-[0_20px_50px_rgba(226,255,0,0.15)]">
    
    // We want the ENTIRE left column to be yellow height wise or at least look like a side panel.
    // If we make the lg:col-span-4 have bg-[#E2FF00], it will be a vertical bar.
    
    // Let's try:
    // 1. Remove the p-8 md:p-10 and rounded-bento from the STICKY DIV.
    // 2. Apply bg-[#E2FF00] to the col-span-4 PARENT.
    
    // Remove individual bento box styling from sticky content
    content = content.replace(/bg-\[#E2FF00\] p-8 md:p-10 rounded-bento shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]/g, 
        'bg-[#E2FF00] p-8 md:p-12 lg:h-full lg:min-h-screen');
    
    // Hero Left Card: "Entire Left Side"
    // Handle the Hero Section title card
    content = content.replace(/class="md:col-span-12 lg:col-span-7 bg-\[#E2FF00\] rounded-bento p-6 md:p-10 flex flex-col justify-center reveal shadow-\[0_20px_50px_rgba\(226,255,0,0\.15\)\]"/g,
        'class="md:col-span-12 lg:col-span-7 bg-[#E2FF00] p-10 md:p-16 lg:h-full flex flex-col justify-center reveal shadow-none"');
    
    // Clean up empty script tags and duplicates (again, to be safe)
    content = content.replace(/<script>\s*<\/script>/g, '');
  }

  fs.writeFileSync(f, content, 'utf8');
}
console.log('Smooth scroll fixed for Landing Page & Left-side Yellow theme expanded.');
