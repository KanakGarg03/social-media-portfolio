const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = document.getElementById('nav');
const wa = document.getElementById('wa');
const badge = document.getElementById('badge');
const badgeInner = document.getElementById('badgeInner');

function revealIntro(){
  document.querySelectorAll('.hero-word .word').forEach((el,i)=>setTimeout(()=>el.style.transform='none', i*110));
}
if(document.querySelector('.hero-word')) setTimeout(revealIntro, 150);

window.addEventListener('scroll',()=>{
  const y=scrollY, h=innerHeight;
  if(nav) nav.classList.toggle('show', y > h*.7);
  if(wa) wa.classList.toggle('show', y > h*.7);
  if(!reduce){
    document.querySelectorAll('.hero-word').forEach((el,i)=>el.style.transform=`translateY(${y*.035*(i%2?1:-1)}px)`);
  }
},{passive:true});

let flipped=false, timer;
function flipCard(){
  if(!badgeInner) return;
  flipped=!flipped;
  badgeInner.classList.toggle('flip',flipped);
  clearTimeout(timer);
  timer=setTimeout(flipCard,3600);
}
if(badge && badgeInner){
  if(!reduce) timer=setTimeout(flipCard,3100);
  badge.addEventListener('click',flipCard);
  badge.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipCard()}});
}

const typeEl=document.getElementById('typeText');
if(typeEl){
  const phrases=['Social media executive & digital creative','Content, campaigns and event promotion','Creative design with a digital-first approach','Based in Delhi, India'];
  let phrase=0, pos=0, deleting=false;
  function typeLoop(){
    if(reduce){typeEl.textContent=phrases[0];return}
    const text=phrases[phrase];
    typeEl.textContent=text.slice(0,pos);
    if(!deleting && pos<text.length) pos++;
    else if(deleting && pos>0) pos--;
    else if(pos===text.length){deleting=true;setTimeout(typeLoop,1100);return}
    else {deleting=false;phrase=(phrase+1)%phrases.length}
    setTimeout(typeLoop,deleting?35:55);
  }
  typeLoop();
}


/* =========================================================
   PROJECTS — data + viewers (carried over from the previous
   portfolio). Add new work by pushing an object into `projects`.
========================================================= */
const projects = [
  // ---------- REAL WORK (Behance) ----------
  {
    title: "Aardo Solutions",
    category: "uiux",
    catLabel: "Social Media · Brand Communication · Web Design",
    year: "2025",
    size: "md",
    description: "Website and visual identity for Aardo Solutions, created alongside regular contributions to the company social content.",
    image: "assets/aardo/01.png",
    images: [
      "assets/aardo/01.png",
      "assets/aardo/02.png",
      "assets/aardo/06.png",
      "assets/aardo/07.png",
      "assets/aardo/04.png",
      "assets/aardo/05.png",
      "assets/aardo/03.png"
    ],
    viewer: true,
viewerType: "gallery",
    link: "https://www.behance.net/gallery/217313545/AardoSolutions-Website",
    viewerTitle: "Aardo Solutions"
  },
  {
    title: "Influencer Portfolio",
    category: "uiux",
    catLabel: "Influencer Marketing · Website Template",
    year: "2025",
    size: "sm",
    description: "A portfolio website template for lifestyle influencers, focused on visual storytelling and personal brand presentation.",
    image: "assets/influencer/influencer-portfolio.png",
    images: [
      "assets/influencer/influencer-portfolio.png"
    ],
    viewer: true,
    viewerType: "single",
    link: "https://www.behance.net/gallery/217312953/Influencer-Portfolio"
  },
  {
    title: "DLF Website",
    category: "uiux",
    catLabel: "Supporting · UI/UX · Website Redesign",
    year: "2025",
    size: "sm",
    description: "A multi-page DLF website redesign concept focused on clean hierarchy and a polished, responsive digital experience.",
    image: "assets/dlf/DLF1.png",
    images: [
      "assets/dlf/DLF1.png",
      "assets/dlf/DLF2.png",
      "assets/dlf/DLF3.png",
      "assets/dlf/DLF4.png"
    ],
    viewer: true,
    viewerType: "gallery",
    link: "https://www.behance.net/gallery/217312721/DLF-Redesign",
    viewerTitle: "DLF Website"
  },
  {
    title: "Social Media Posts",
    category: "graphic",
    catLabel: "Social Media · Content · Event Promotion",
    year: "2025",
    size: "lg",
    description: "Social media carousels and promotional posts across design education, astronomy, product promotion and event communication, including an event post for Skygaze India at Select Citywalk.",
    image: "assets/covers/social-media-posts-cover.png",
    postCollection: true,
    posts: [
      {
        id: "post-1",
        title: "Post 01 — The Power of Contrast",
        shortTitle: "Post 01",
        catLabel: "Design Education · Carousel",
        year: "2025",
        description: "An educational carousel explaining contrast in visual design, common mistakes and practical ways to improve it.",
        cover: "assets/posts/post1/contrast.png",
        images: [
          "assets/posts/post1/contrast.png",
          "assets/posts/post1/contrast1.png",
          "assets/posts/post1/contrast2.png",
          "assets/posts/post1/contrast3.png"
        ]
      },
      {
        id: "post-2",
        title: "Post 02 — GymVita Connect",
        shortTitle: "Post 02",
        catLabel: "Product Promotion · Carousel",
        year: "2025",
        description: "A promotional carousel presenting GymVita Connect, its dashboard and the key features of the gym solution.",
        cover: "assets/posts/post2/1.png",
        images: [
          "assets/posts/post2/1.png",
          "assets/posts/post2/2.png"
        ]
      },
      {
        id: "post-3",
        title: "Post 03 — UI Design Resources",
        shortTitle: "Post 03",
        catLabel: "Web Design · Resource Carousel",
        year: "2025",
        description: "A curated resource carousel highlighting websites, SaaS inspiration, design research and reusable UI resources.",
        cover: "assets/posts/post3/web1.png",
        images: [
          "assets/posts/post3/web1.png",
          "assets/posts/post3/web2.png",
          "assets/posts/post3/web3.png",
          "assets/posts/post3/web4.png",
          "assets/posts/post3/web5.png",
          "assets/posts/post3/web6.png"
        ]
      },
      {
        id: "post-4",
        title: "Post 04 — Total Lunar Eclipse",
        shortTitle: "Post 04",
        catLabel: "Astronomy · Carousel",
        year: "2025",
        description: "A seven-slide educational carousel explaining the stages of a total lunar eclipse, from the beginning through totality and the return to full Moon.",
        cover: "assets/posts/p4/L1.jpg",
        images: [
          "assets/posts/p4/L1.jpg",
          "assets/posts/p4/L2.jpg",
          "assets/posts/p4/L3.jpg",
          "assets/posts/p4/L4.jpg",
          "assets/posts/p4/L5.jpg",
          "assets/posts/p4/L6.jpg",
          "assets/posts/p4/L7.jpg"
        ]
      },
      {
        id: "post-5",
        title: "Post 05 — Select Citywalk",
        shortTitle: "Post 05",
        catLabel: "Event Promotion · Mixed Media",
        year: "2026",
        description: "A mixed-media social post documenting a Skygaze India astronomy experience at Select Citywalk through static creatives and short-form video.",
        cover: "assets/posts/p5/Saket1_Linkedin.jpg",
        items: [
          { type: "image", src: "assets/posts/p5/Saket1_Linkedin.jpg" },
          { type: "video", src: "assets/posts/p5/Saket2_Linkedin.mp4", poster: "assets/posts/p5/Saket2_Linkedin.jpg" },
          { type: "video", src: "assets/posts/p5/Saket3_Linkedin.mp4", poster: "assets/posts/p5/Saket3_Linkedin.jpg" },
          { type: "image", src: "assets/posts/p5/Saket4.jpg" },
          { type: "image", src: "assets/posts/p5/Saket5_Linkedin.jpg" }
        ]
      },
      {
        id: "post-6",
        title: "Post 06 — Understanding Color Harmonies",
        shortTitle: "Post 06",
        catLabel: "Design Education · Carousel",
        year: "2024",
        description: "An educational carousel introducing monochromatic, complementary, analogous, triadic and tetradic colour relationships.",
        cover: "assets/posts/p6/c1.png",
        images: [
          "assets/posts/p6/c1.png",
          "assets/posts/p6/c2.png",
          "assets/posts/p6/c3.png",
          "assets/posts/p6/c4.png",
          "assets/posts/p6/c5.png",
          "assets/posts/p6/c6.png"
        ]
      }
    ]
  },
  {
    title: "Presentations",
    category: "editorial",
    catLabel: "Presentation Design",
    year: "2025–2026",
    size: "md",
    description: "Selected presentation designs focused on visual storytelling, information hierarchy and consistent visual communication.",
    image: "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
    presentationCollection: true,
    presentations: [
      {
        id: "sustainable-fashion",
        title: "Introduction to Sustainable Fashion",
        shortTitle: "01",
        catLabel: "Sustainability · 9 slides",
        description: "A visual introduction to sustainable fashion, including environmental responsibility, ethical production, brands and consumer choices.",
        cover: "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
        images: [
          "assets/presentations/sustainable-fashion/Sustainable-1.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-2.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-3.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-4.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-5.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-6.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-7.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-8.jpg",
          "assets/presentations/sustainable-fashion/Sustainable-9.jpg"
        ]
      },
      {
        id: "dlf-website-redesign",
        title: "DLF Website Redesign",
        shortTitle: "02",
        catLabel: "UI/UX Case Study · 8 slides",
        description: "A case study presentation documenting the DLF website redesign, from current challenges to enhancements and performance analysis.",
        cover: "assets/presentations/dlf-website-redesign/DLF REDESIGNED-1.jpg",
        images: [
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-1.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-2.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-3.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-4.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-5.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-6.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-7.jpg",
          "assets/presentations/dlf-website-redesign/DLF REDESIGNED-8.jpg"
        ]
      },
      {
        id: "power-of-persistence",
        title: "The Power of Persistence",
        shortTitle: "03",
        catLabel: "Investigative Journalism · 9 slides",
        description: "A visual presentation tracing the history, core philosophy, landmark examples and modern challenges of investigative journalism.",
        cover: "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-1.jpg",
        images: [
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-1.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-2.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-3.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-4.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-5.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-6.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-7.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-8.jpg",
          "assets/presentations/power-of-persistence/The power of persistence_KanakGarg-9.jpg"
        ]
      }
    ]
  },
  {
    title: "Magazines",
    category: "editorial",
    catLabel: "Editorial · Skygaze India",
    year: "2025",
    size: "sm",
    description: "A six-issue magazine series for Skygaze India, presented as a focused editorial collection.",
    image: "assets/covers/monthly-magazine-cover.png",
    magazineCollection: true,
    magazines: [
      {
        id: "bth-issue-1",
        title: "Beyond the Horizon — Issue 01",
        shortTitle: "Issue 01",
        catLabel: "July 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-1.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-1.pdf"
      },
      {
        id: "bth-issue-2",
        title: "Beyond the Horizon — Issue 02",
        shortTitle: "Issue 02",
        catLabel: "August 2025 · Vol. 1",
        pages: 14,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-2.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-2.pdf"
      },
      {
        id: "bth-issue-3",
        title: "Beyond the Horizon — Issue 03",
        shortTitle: "Issue 03",
        catLabel: "September 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-3.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-3.pdf"
      },
      {
        id: "bth-issue-4",
        title: "Beyond the Horizon — Issue 04",
        shortTitle: "Issue 04",
        catLabel: "October 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-4.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-4.pdf"
      },
      {
        id: "bth-issue-5",
        title: "Beyond the Horizon — Issue 05",
        shortTitle: "Issue 05",
        catLabel: "November 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-5.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-5.pdf"
      },
      {
        id: "bth-issue-6",
        title: "Beyond the Horizon — Issue 06",
        shortTitle: "Issue 06",
        catLabel: "December 2025 · Vol. 1",
        pages: 16,
        cover: "assets/magazines/beyond-the-horizon/covers/beyond-the-horizon-vol-1-issue-6.jpg",
        pdf: "assets/magazines/beyond-the-horizon/beyond-the-horizon-vol-1-issue-6.pdf"
      }
    ]
  },
  {
    title: "Gym Website & App",
    category: "uiux",
    catLabel: "UI/UX · Digital Product",
    year: "2025",
    size: "sm",
    description: "GymVita Connect — website and product screens for a gym management solution.",
    image: "assets/aardo/01-alumnisync.png",
    images: ["assets/aardo/01-alumnisync.png"],
    viewer: true,
    viewerType: "single"
  },
];

/* Priority order for the recruiter-facing hierarchy: social/campaign work first, web/UI last.
   Add new projects above with `draft: true` until their assets are in /assets, then remove the flag. */
const rank = ["Social Media Posts","Aardo Solutions","Influencer Portfolio","Presentations","DLF Website","Magazines"];
for (let i = projects.length - 1; i >= 0; i--) if (projects[i].draft) projects.splice(i, 1);
projects.sort((a, b) => (rank.indexOf(a.title) + 1 || 99) - (rank.indexOf(b.title) + 1 || 99));

/* ---------- helpers ---------- */
const initials = (title) => title.split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase();

function cardMarkup(p, idx){
  const media = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML = window.__phMarkup('${p.category}','${p.title.replace(/'/g,"")}')">`
    : phMarkup(p.category, p.title);

  // Projects with a viewer open an in-portfolio image gallery. Other real projects
  // keep their Behance link, while placeholder projects remain locked.
  const hasViewer = (p.postCollection === true && Array.isArray(p.posts) && p.posts.length > 0)
    || (p.magazineCollection === true && Array.isArray(p.magazines) && p.magazines.length > 0)
    || (p.presentationCollection === true && Array.isArray(p.presentations) && p.presentations.length > 0)
    || (p.viewer === true && Array.isArray(p.images) && p.images.length > 0);
  const hasLink = Boolean(p.link);
  const frameTag = hasViewer
    ? `<button class="card-frame project-view-trigger" type="button" data-project="${idx}" aria-label="Open ${p.title} project gallery">`
    : hasLink
      ? `<a class="card-frame" href="${p.link}" target="_blank" rel="noopener">`
      : `<div class="card-frame is-locked">`;
  const frameClose = (hasViewer || hasLink) ? `</${hasViewer ? 'button' : 'a'}>` : `</div>`;

  return `
    <article class="card reveal" data-cat="${p.category}" data-size="${p.size}" data-idx="${idx}">
      ${frameTag}
        ${media}
      ${frameClose}
      <div class="card-info">
        <div>
          <h3 class="card-title">${p.title}</h3>
          <span class="card-cat">${p.catLabel}</span>
        </div>
      </div>
    </article>`;
}

function phMarkup(category, title){
  return `<div class="ph"><span class="ph-mark">${category.toUpperCase()}</span><span class="ph-init">${initials(title)}</span></div>`;
}
window.__phMarkup = phMarkup;

/* =========================================================
   SELECTED WORK — campaign-led cards + case-study view
   ---------------------------------------------------------
   Each entry in `work` is one card. `tiles` are the images shown
   in the card collage (small WebPs in /assets/thumbs). If an image
   file is missing, a labelled placeholder appears automatically,
   so just drop the real file at the path shown and refresh.
   Card order = the order of this array.
========================================================= */
const T = (n) => `assets/thumbs/${n}.webp`;
const W = (n) => `assets/web/${n}.webp`;
const projIdx = (title) => projects.findIndex(p => p.title === title);

const work = [
  {
    id: "yashobhoomi",
    cat: "graphic",
    size: "feature",
    layout: "feature",
    kicker: "Event Campaign",
    name: "Skygaze × Yashobhoomi",
    desc: "A multi-channel promotional campaign created for a Skygaze India event at Yashobhoomi, spanning social media, event discovery platforms and physical promotional assets.",
    tags: ["Social Media", "Event Promotion", "Campaign", "Print"],
    tiles: [
      {
        area: "a",
        src: "assets/yashobhoomi/social-post-1.jpg",
        label: "Social post"
      },
      {
        area: "b",
        src: "assets/yashobhoomi/social-post-2.jpg",
        label: "Social post"
      },
      {
        area: "c",
        src: "assets/yashobhoomi/bookmyshow-1.jpg",
        label: "BookMyShow creative"
      },
      {
        area: "d",
        src: "assets/yashobhoomi/banner.jpg",
        label: "Event banner"
      }
    ],
    study: {
      kicker: "Case study · Event campaign",
      role: "Social Media & Graphic Design",
      type: "Event Campaign",
      overview:
        "Promotional communication for a Skygaze India event at Yashobhoomi, developed across social media, event discovery platforms and physical event touchpoints.",
      work: [
        "Social media",
        "Event discovery",
        "On-ground promotion",
        "Print & signage"
      ],
      sections: [
        {
          title: "Digital",
          text: "Social media + BookMyShow + District",
          cols: 3,
          items: [
            {
              src: "assets/yashobhoomi/social-post-1.jpg",
              label: "Social post",
              ar: "4/5"
            },
            {
              src: "assets/yashobhoomi/social-post-2.jpg",
              label: "Social post",
              ar: "7/10"
            },
            {
              src: "assets/yashobhoomi/social-post-3.jpg",
              label: "Social post",
              ar: "4/5"
            },
            {
              src: "assets/yashobhoomi/bookmyshow-1.jpg",
              label: "BookMyShow creative",
              ar: "21/10"
            },
            {
              src: "assets/yashobhoomi/district-1.png",
              label: "District creative",
              ar: "16/13"
            }
          ]
        },
        {
          title: "Physical",
          text: "Banner + standee + print materials",
          cols: 3,
          items: [
            {
              src: "assets/yashobhoomi/banner.jpg",
              label: "Event banner",
              ar: "16/10"
            },
            {
              src: "assets/yashobhoomi/standee.jpg",
              label: "Standee",
              ar: "16/10"
            },
            {
              src: "assets/yashobhoomi/printables.jpg.png",
              label: "Printables",
              ar: "4/6"
            }
          ]
        }
      ]
    }
  },

  {
    id: "aardo",
    cat: "graphic",
    layout: "trio",
    kicker: "Social + Digital Presence",
    name: "Aardo Solutions",
    desc: "Social media creatives for Aardo's products, alongside the company website and visual identity.",
    tags: ["Social Media", "Brand Communication", "Digital Design"],
    tiles: [
      {
        area: "a",
        src: T("aardo-gym-post-1"),
        label: "Product post"
      },
      {
        area: "b",
        src: T("aardo-gym-post-2"),
        label: "Product post"
      },
      {
        area: "c",
        src: T("aardo-site-1"),
        label: "Website"
      }
    ],
    study: {
      kicker: "Case study · Social media & digital presence",
      role: "Digital Marketing & UI/UX Designer",
      type: "Social media + digital presence",
      overview:
        "Social content for Aardo Solutions, supported by the company website and a consistent visual identity.",
      work: [
        "Social media creatives",
        "Product promotion",
        "Company website & visual identity",
        "Product pages"
      ],
      sections: [
        {
          title: "Social media",
          text: "Product-promotion creatives for GymVita Connect.",
          cols: 2,
          items: [
            {
              src: W("aardo-gym-post-1"),
              label: "Product post",
              ar: "1/1"
            },
            {
              src: W("aardo-gym-post-2"),
              label: "Product post",
              ar: "1/1"
            }
          ]
        },
        {
          title: "Digital presence",
          text: "Website pages that carry the same visual identity.",
          cols: 3,
          items: [
            {
              src: W("aardo-site-1"),
              label: "Website",
              ar: "1/1.3"
            },
            {
              src: W("aardo-site-2"),
              label: "Website",
              ar: "9/12"
            },
            {
              src: W("aardo-site-4"),
              label: "Website",
              ar: "9/12"
            }
          ]
        }
      ],
      links: [
        {
          label: "Browse all website pages →",
          viewer: "Aardo Solutions"
        }
      ]
    }
  },

  {
    id: "streetstyle",
    cat: "graphic",
    layout: "trio",
    kicker: "Self-Initiated",
    name: "Streetstyle",
    desc: "A self-initiated fashion brand concept exploring e-commerce design, promotional posts and social media communication. Not a client or live brand.",
    tags: [
      "Social Media Content",
      "Promotional Design",
      "E-commerce",
      "Campaign Concept"
    ],
    tiles: [
      {
        area: "a",
        src: "assets/streetstyle/sale-post-1.png",
        label: "Sale post"
      },
      {
        area: "b",
        src: "assets/streetstyle/12.png",
        label: "Website"
        
      },
      
      {
        area: "c",
        src: "assets/streetstyle/sale-post-2.png",
        label: "Promo post"
      }
    ],
    study: {
      kicker: "Case study · Concept project",
      role: "Self-initiated project",
      type: "E-commerce & social media concept",
      overview:
        "A self-initiated fashion brand concept exploring e-commerce design, promotional content and social media communication.",
      work: [
        "E-commerce website",
        "Sale posts",
        "Promotional creatives",
        "Social media concepts"
      ],
      
      sections: [
        {
          title: "Website",
          cols: 1,
          items: [
            {
              src: "assets/streetstyle/1.png",
              label: "Website",
              ar: "16/9"
            }
          ]
        },
        {
          title: "Promotional posts",
          cols: 3,
          items: [
            {
              src: "assets/streetstyle/sale-post-1.png",
              label: "Sale post",
              ar: "4/7"
            },
            {
              src: "assets/streetstyle/sale-post-2.png",
              label: "Sale post",
              ar: "18/10"
            },
          ]
        }
      ],links: [
  {
    label: "Browse all website pages →",
    viewer: "Streetstyle"
  }
]
    }
    
  },

  {
    id: "social-posts",
    cat: "graphic",
    layout: "trio",
    archiveOnly: true,
    kicker: "Social Media · Content",
    name: "Social Media Posts",
    desc: "Carousels and campaign posts spanning design education, astronomy, product promotion and event communication, including a mixed-media post for Skygaze India at Select Citywalk.",
    tags: ["Social Media", "Carousels", "Event Promotion"],
    tiles: [
      { area: "a", src: T("arc-social-1"), label: "Lunar eclipse carousel" },
      { area: "b", src: T("arc-social-2"), label: "Contrast carousel" },
      { area: "c", src: T("arc-social-3"), label: "Colour harmonies carousel" }
    ],
    open: { viewer: "Social Media Posts" }
  },

  {
    id: "presentations",
    cat: "editorial",
    layout: "trio",
    archiveOnly: true,
    kicker: "Editorial · Presentations",
    name: "Presentations",
    desc: "A collection of presentation decks covering sustainable fashion, a DLF website redesign case study and investigative journalism.",
    tags: ["Presentation Design", "Visual Storytelling", "Editorial"],
    tiles: [
      { area: "a", src: T("arc-pres-1"), label: "Sustainable fashion deck" },
      { area: "b", src: T("arc-pres-2"), label: "DLF redesign deck" },
      { area: "c", src: T("arc-pres-3"), label: "Power of persistence deck" }
    ],
    open: { viewer: "Presentations" }
  },

  {
    id: "magazines",
    cat: "editorial",
    layout: "trio",
    archiveOnly: true,
    kicker: "Editorial · Skygaze India",
    name: "Magazines",
    desc: "A six-issue magazine series, Beyond the Horizon, for Skygaze India, presented as a focused editorial collection.",
    tags: ["Editorial", "Magazine", "Skygaze India"],
    tiles: [
      { area: "a", src: T("arc-mag-1"), label: "Issue 01" },
      { area: "b", src: T("arc-mag-2"), label: "Issue 02" },
      { area: "c", src: T("arc-mag-3"), label: "Issue 03" }
    ],
    open: { viewer: "Magazines" }
  },

  {
    id: "aardo-website",
    cat: "uiux",
    layout: "trio",
    archiveOnly: true,
    kicker: "UI/UX · Web Design",
    name: "Aardo Solutions Website",
    desc: "Full website design for Aardo Solutions, a marketing site built to feel technical and trustworthy without going cold or corporate.",
    tags: ["Web Design", "UI/UX", "Brand Communication"],
    tiles: [
      { area: "a", src: T("arc-aardo-1"), label: "Home page" },
      { area: "b", src: T("arc-aardo-2"), label: "Product page" },
      { area: "c", src: T("arc-aardo-3"), label: "Inner page" }
    ],
    open: { viewer: "Aardo Solutions" }
  },

  {
    id: "influencer-portfolio",
    cat: "uiux",
    layout: "solo",
    archiveOnly: true,
    kicker: "UI/UX · Website Template",
    name: "Influencer Portfolio",
    desc: "A portfolio website template for lifestyle influencers, focused on visual storytelling and personal brand presentation.",
    tags: ["Website Template", "Influencer Marketing", "UI/UX"],
    tiles: [
      { area: "a", src: T("arc-inf-1"), label: "Influencer portfolio" }
    ],
    open: { viewer: "Influencer Portfolio" }
  },

  {
    id: "dlf-website",
    cat: "uiux",
    layout: "trio",
    archiveOnly: true,
    kicker: "UI/UX · Website Redesign",
    name: "DLF Website",
    desc: "A multi-page DLF website redesign concept focused on clean hierarchy and a polished, responsive digital experience.",
    tags: ["Website Redesign", "UI/UX", "Responsive"],
    tiles: [
      { area: "a", src: T("arc-dlf-1"), label: "Home page" },
      { area: "b", src: T("arc-dlf-2"), label: "Inner page" },
      { area: "c", src: T("arc-dlf-3"), label: "Inner page" }
    ],
    open: { viewer: "DLF Website" }
  }

];

window.__missingTile = (img) => {
  const f = img.closest("figure");
  if (!f) return;
  f.classList.add("is-missing");
  f.innerHTML = `<span class="miss-label">${img.dataset.label || "Image"}</span><span class="miss-path">Add: ${img.getAttribute("src")}</span>`;
};

function tileMarkup(t){
  return `<figure class="tile" style="grid-area:${t.area}"><img src="${t.src}" alt="${t.label || ""}" data-label="${t.label || ""}" loading="lazy" decoding="async" onerror="window.__missingTile(this)"></figure>`;
}

function workCard(w, i){
  const infoFirst = w.id === "yashobhoomi" ? " info-first" : "";

  return `
    <article class="card campaign reveal ${w.size || ""}${infoFirst}" data-cat="${w.cat}" data-work="${i}">

      <div class="campaign-info">
        <span class="camp-kicker">${w.kicker}</span>
        <h3 class="camp-name">${w.name}</h3>
        <p class="camp-desc">${w.desc}</p>
        <ul class="camp-tags">${w.tags.map(t => `<li>${t}</li>`).join("")}</ul>
      </div>

      <button class="card-frame campaign-trigger collage lay-${w.layout}" type="button" aria-label="Open ${w.name}">
        ${w.badge ? `<span class="camp-badge">${w.badge}</span>` : ""}
        ${w.tiles.map(tileMarkup).join("")}
      </button>

    </article>`;
}

/* ---------- case-study view ---------- */
const caseModal = document.createElement("div");
caseModal.className = "project-modal case-modal";
caseModal.id = "caseModal";
caseModal.setAttribute("aria-hidden", "true");
caseModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-case></div>
  <div class="project-modal-dialog case-dialog" role="dialog" aria-modal="true" aria-labelledby="caseTitle">
    <header class="project-modal-head">
      <div><p class="project-modal-kicker" id="caseKicker"></p><h2 id="caseTitle"></h2></div>
      <button class="case-close" type="button" data-close-case aria-label="Close case study">×</button>
    </header>
    <div class="case-body" id="caseBody"></div>
  </div>`;
document.body.appendChild(caseModal);

function figMarkup(it){
  const ar = it.ar || "4/5";
  if (it.type === "video"){
    return `<figure class="case-fig" style="aspect-ratio:${ar}"><video src="${it.src}" poster="${it.poster || ""}" controls playsinline preload="none"></video></figure>`;
  }
  return `<figure class="case-fig" style="aspect-ratio:${ar}"><img src="${it.src}" alt="${it.label || ""}" data-label="${it.label || ""}" loading="lazy" decoding="async" onerror="window.__missingTile(this)"></figure>`;
}

function openCase(w){
  const s = w.study;
  document.getElementById("caseKicker").textContent = s.kicker;
  document.getElementById("caseTitle").textContent = w.name;
  const li = (a) => a.map(x => `<li>${x}</li>`).join("");
  document.getElementById("caseBody").innerHTML = `
    <p class="case-overview">${s.overview}</p>
    ${s.note ? `<p class="case-note">${s.note}</p>` : ""}
    <div class="case-meta">
      <div><small>Project</small><b>${w.name}</b></div>
      <div><small>Role</small><b>${s.role}</b></div>
      <div><small>Type</small><b>${s.type}</b></div>
      <div class="wide"><small>Work</small><ul>${li(s.work)}</ul></div>
    </div>
    ${s.sections.map(sec => `
      <section class="case-section">
        <h3>${sec.title}</h3>
        ${sec.text ? `<p>${sec.text}</p>` : ""}
        <div class="case-grid cols-${sec.cols || 3}">${sec.items.map(figMarkup).join("")}</div>
      </section>`).join("")}
    ${s.links ? `<div class="case-links">${s.links.map((l, k) => `<button type="button" class="case-link" data-link="${k}">${l.label}</button>`).join("")}</div>` : ""}`;
  document.getElementById("caseBody").scrollTop = 0;
  caseModal.dataset.work = work.indexOf(w);
  caseModal.classList.add("is-open");
  caseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closeCase(keepLock){
  caseModal.classList.remove("is-open");
  caseModal.setAttribute("aria-hidden", "true");
  caseModal.querySelectorAll("video").forEach(v => v.pause());
  if (!keepLock) document.body.classList.remove("project-modal-open");
}

function openWork(w){
  if (w.study) return openCase(w);
  if (w.open?.viewer){
    const idx = projIdx(w.open.viewer);
    if (idx > -1) openProjectGallery(idx);
  }
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-case]")) { closeCase(); return; }
  const link = e.target.closest(".case-link");
  if (link){
    const w = work[Number(caseModal.dataset.work)];
    const l = w.study.links[Number(link.dataset.link)];
    closeCase(true);
    if (l.study) openCase(work.find(x => x.id === l.study));
    else { const idx = projIdx(l.viewer); if (idx > -1) openProjectGallery(idx); else closeCase(); }
    return;
  }
  const card = e.target.closest(".campaign");
  if (card) openWork(work[Number(card.dataset.work)]);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && caseModal.classList.contains("is-open")) closeCase();
});

const homeGrid = document.getElementById("homeWorkGrid");
if (homeGrid){
  homeGrid.innerHTML = work.map((w, i) => w.archiveOnly ? "" : workCard(w, i)).join("");
}
const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid){
  projectsGrid.innerHTML = work.map((w, i) => workCard(w, i)).join("");
}

const grid = homeGrid || projectsGrid;

/* ---------- filtering ---------- */
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = () => document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    cards().forEach(c => {
      const match = f === "all" || c.dataset.cat === f;
      c.classList.toggle("is-hidden", !match);
    });
  });
});

/* ---------- project gallery modal ---------- */
const projectModal = document.createElement("div");
projectModal.className = "project-modal";
projectModal.id = "projectModal";
projectModal.setAttribute("aria-hidden", "true");
projectModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-project></div>
  <div class="project-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
    <header class="project-modal-head">
      <div class="project-modal-heading">
        <button class="project-back-posts" id="projectBackToPosts" type="button" aria-label="Back to all posts">← All posts</button>
        <div>
          <p class="project-modal-kicker">Project preview</p>
          <h2 id="projectModalTitle">AardoSolutions Website</h2>
        </div>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close project preview">×</button>
    </header>
    <div class="project-modal-viewer">
      <button class="project-arrow project-arrow-prev" type="button" aria-label="Previous page">←</button>
      <div class="project-slide-wrap">
        <div class="project-slide" id="projectSlide"></div>
      </div>
      <button class="project-arrow project-arrow-next" type="button" aria-label="Next page">→</button>
    </div>
    <div class="project-modal-foot">
      <span id="projectCounter">Page 1 of 7</span>
      <span id="projectHint">Use the arrows or ← → keys to browse</span>
      <a id="projectBehance" href="https://www.behance.net/gallery/217313545/AardoSolutions-Website" target="_blank" rel="noopener">View full project on Behance ↗</a>
    </div>
  </div>`;
document.body.appendChild(projectModal);

/* ---------- graphics & posts collection ---------- */
const postsModal = document.createElement("div");
postsModal.className = "project-modal posts-modal";
postsModal.id = "postsModal";
postsModal.setAttribute("aria-hidden", "true");
postsModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-posts></div>
  <div class="project-modal-dialog posts-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="postsModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Social Media Posts</p>
        <h2 id="postsModalTitle">Post collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close social media posts">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="postsCollectionCount">3 posts · 12 slides</p>
        <span>Choose a post to browse its slides.</span>
      </div>
      <div class="posts-collection-grid" id="postsCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(postsModal);

/* ---------- magazines collection ---------- */
const magazinesModal = document.createElement("div");
magazinesModal.className = "project-modal magazines-modal";
magazinesModal.id = "magazinesModal";
magazinesModal.setAttribute("aria-hidden", "true");
magazinesModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-magazines></div>
  <div class="project-modal-dialog magazines-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="magazinesModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Magazines</p>
        <h2 id="magazinesModalTitle">Magazine collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close magazines">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="magazinesCollectionCount">6 issues</p>
        <span>Choose an issue to read the full magazine.</span>
      </div>
      <div class="posts-collection-grid" id="magazinesCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(magazinesModal);

/* ---------- presentations collection ---------- */
const presentationsModal = document.createElement("div");
presentationsModal.className = "project-modal presentations-modal";
presentationsModal.id = "presentationsModal";
presentationsModal.setAttribute("aria-hidden", "true");
presentationsModal.innerHTML = `
  <div class="project-modal-backdrop" data-close-presentations></div>
  <div class="project-modal-dialog magazines-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="presentationsModalTitle">
    <header class="project-modal-head">
      <div>
        <p class="project-modal-kicker">Presentations</p>
        <h2 id="presentationsModalTitle">Presentation collection</h2>
      </div>
      <button class="project-modal-close" type="button" aria-label="Close presentations">×</button>
    </header>
    <div class="posts-collection-wrap">
      <div class="posts-collection-intro">
        <p id="presentationsCollectionCount">3 presentations</p>
        <span>Choose a deck to browse it slide by slide.</span>
      </div>
      <div class="posts-collection-grid" id="presentationsCollectionGrid"></div>
    </div>
  </div>`;
document.body.appendChild(presentationsModal);

let activeProjectIndex = null;
let activePostIndex = null;
let activeSlideIndex = 0;
let returnToPostsCollection = false;
let returnToMagazineCollection = false;
let returnToPresentationCollection = false;
let activePresentationImages = null;

function openMagazineCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.magazineCollection || !project.magazines?.length) return;
  activeProjectIndex = projectIndex;
  returnToMagazineCollection = false;
  const grid = document.getElementById("magazinesCollectionGrid");
  document.getElementById("magazinesCollectionCount").textContent =
    `${project.magazines.length} issues`;
  grid.innerHTML = project.magazines.map((mag, i) => `
    <article class="post-collection-card magazine-collection-card" data-magazine-index="${i}" tabindex="0" role="button" aria-label="Open ${mag.title}">
      <div class="post-collection-cover magazine-cover">
        <img src="${mag.cover}" alt="${mag.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${mag.pages} pages</span>
        <span class="post-open-label">Read issue →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">${mag.shortTitle}</p>
          <h3>${mag.title.replace(/^Beyond the Horizon — /, "")}</h3>
        </div>
        <span>${mag.catLabel}</span>
      </div>
    </article>
  `).join("");
  magazinesModal.classList.add("is-open");
  magazinesModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closeMagazinesCollection(){
  magazinesModal.classList.remove("is-open");
  magazinesModal.setAttribute("aria-hidden", "true");
}

function openMagazineViewer(projectIndex, magazineIndex){
  const project = projects[projectIndex];
  const magazine = project?.magazines?.[magazineIndex];
  if (!magazine?.pdf) return;
  activeProjectIndex = projectIndex;
  returnToMagazineCollection = true;
  returnToPostsCollection = false;
  activePostIndex = null;
  activeSlideIndex = 0;
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  title.textContent = magazine.title;
  counter.textContent = `${magazine.pages} pages`;
  hint.textContent = "Read the complete magazine in the viewer";
  behance.style.display = "none";
  back.style.display = "inline-flex";
  back.textContent = "← All magazines";
  prev.style.display = "none";
  next.style.display = "none";
  slide.innerHTML = `<iframe class="magazine-pdf-frame" src="${magazine.pdf}#page=1&view=FitH" title="${magazine.title}" loading="lazy"></iframe>`;
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  magazinesModal.classList.remove("is-open");
  magazinesModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
}

function openPresentationCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.presentationCollection || !project.presentations?.length) return;
  activeProjectIndex = projectIndex;
  returnToPresentationCollection = false;
  const grid = document.getElementById("presentationsCollectionGrid");
  document.getElementById("presentationsCollectionCount").textContent =
    `${project.presentations.length} presentations`;
  grid.innerHTML = project.presentations.map((presentation, i) => `
    <article class="post-collection-card magazine-collection-card presentation-collection-card"
      data-presentation-index="${i}" tabindex="0" role="button" aria-label="Open ${presentation.title}">
      <div class="post-collection-cover magazine-cover">
        <img src="${presentation.cover}" alt="${presentation.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${presentation.images.length} slides</span>
        <span class="post-open-label">Open deck →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">Presentation ${presentation.shortTitle}</p>
          <h3>${presentation.title}</h3>
        </div>
        <span>${presentation.catLabel}</span>
      </div>
    </article>
  `).join("");
  presentationsModal.classList.add("is-open");
  presentationsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closePresentationsCollection(){
  presentationsModal.classList.remove("is-open");
  presentationsModal.setAttribute("aria-hidden", "true");
}

function openPresentationViewer(projectIndex, presentationIndex){
  const project = projects[projectIndex];
  const presentation = project?.presentations?.[presentationIndex];
  if (!presentation?.images?.length) return;
  activeProjectIndex = projectIndex;
  activePresentationImages = presentation.images;
  returnToPresentationCollection = true;
  returnToPostsCollection = false;
  returnToMagazineCollection = false;
  activePostIndex = null;
  activeSlideIndex = 0;

  const slide = document.getElementById("projectSlide");
  document.getElementById("projectModalTitle").textContent = presentation.title;
  document.getElementById("projectCounter").textContent = `Slide 1 of ${presentation.images.length}`;
  document.getElementById("projectHint").textContent = "Use the arrows or ← → keys to browse";
  document.getElementById("projectBehance").style.display = "none";
  const back = document.getElementById("projectBackToPosts");
  back.style.display = "inline-flex";
  back.textContent = "← All presentations";
  document.querySelector(".project-arrow-prev").style.display = "grid";
  document.querySelector(".project-arrow-next").style.display = "grid";

  slide.innerHTML = presentation.images.map((src, i) => `
    <img class="project-page-image ${i === 0 ? "is-active" : ""}" src="${src}" alt="${presentation.title} — slide ${i + 1}" draggable="false" decoding="async">
  `).join("");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  presentationsModal.classList.remove("is-open");
  presentationsModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
  setProjectSlide(0);
}

function openPostsCollection(projectIndex){
  const project = projects[projectIndex];
  if (!project?.postCollection || !project.posts?.length) return;
  activeProjectIndex = projectIndex;
  returnToPostsCollection = false;
  const grid = document.getElementById("postsCollectionGrid");
  const totalSlides = project.posts.reduce((sum, post) => sum + (post.items ? post.items.length : post.images.length), 0);
  document.getElementById("postsCollectionCount").textContent =
    `${project.posts.length} posts · ${totalSlides} items`;
  grid.innerHTML = project.posts.map((post, i) => `
    <article class="post-collection-card" data-post-index="${i}" tabindex="0" role="button" aria-label="Open ${post.title}">
      <div class="post-collection-cover">
        <img src="${post.cover}" alt="${post.title}" loading="lazy" decoding="async">
        <span class="post-slide-count">${post.items ? post.items.length : post.images.length} ${post.items ? "items" : "slides"}</span>
        <span class="post-open-label">Open post →</span>
      </div>
      <div class="post-collection-info">
        <div>
          <p class="post-collection-number">${post.shortTitle}</p>
          <h3>${post.title.replace(/^Post \d+ — /, "")}</h3>
        </div>
        <span>${post.catLabel}</span>
      </div>
    </article>
  `).join("");
  postsModal.classList.add("is-open");
  postsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
}

function closePostsCollection(){
  postsModal.classList.remove("is-open");
  postsModal.setAttribute("aria-hidden", "true");
}

function openPostGallery(projectIndex, postIndex, slideIndex = 0){
  const project = projects[projectIndex];
  const post = project?.posts?.[postIndex];
  const items = post?.items || (post?.images || []).map(src => ({ type: "image", src }));
  if (!items.length) return;
  activeProjectIndex = projectIndex;
  activePostIndex = postIndex;
  returnToPostsCollection = true;
  activeSlideIndex = Math.max(0, Math.min(slideIndex, items.length - 1));
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  title.textContent = post.title;
  behance.style.display = "none";
  prev.style.display = items.length === 1 ? "none" : "grid";
  next.style.display = items.length === 1 ? "none" : "grid";
  hint.textContent = items.length === 1 ? "Scroll to explore the artwork" : "Use the arrows or ← → keys to browse";
  back.style.display = "inline-flex";
  back.textContent = "← All posts";
  slide.innerHTML = items.map((item, i) => item.type === "video"
    ? `<video class="project-page-video ${i === activeSlideIndex ? "is-active" : ""}" src="${item.src}" poster="${item.poster || ""}" controls playsinline preload="metadata"></video>`
    : `<img class="project-page-image ${i === activeSlideIndex ? "is-active" : ""}" src="${item.src}" alt="${post.title} — slide ${i + 1}" draggable="false" decoding="async">`
  ).join("");
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  postsModal.classList.remove("is-open");
  postsModal.setAttribute("aria-hidden", "true");
  document.body.classList.add("project-modal-open");
  setProjectSlide(activeSlideIndex);
}

function openProjectGallery(projectIndex, slideIndex = 0){
  const project = projects[projectIndex];
  if (project?.postCollection){
    openPostsCollection(projectIndex);
    return;
  }
  if (project?.magazineCollection){
    openMagazineCollection(projectIndex);
    return;
  }
  if (project?.presentationCollection){
    openPresentationCollection(projectIndex);
    return;
  }
  if (!project || !project.images?.length) return;
  activeProjectIndex = projectIndex;
  activeSlideIndex = Math.max(0, Math.min(slideIndex, project.images.length - 1));
  const slide = document.getElementById("projectSlide");
  const title = document.getElementById("projectModalTitle");
  const counter = document.getElementById("projectCounter");
  const behance = document.getElementById("projectBehance");
  const hint = document.getElementById("projectHint");
  const back = document.getElementById("projectBackToPosts");
  const prev = document.querySelector(".project-arrow-prev");
  const next = document.querySelector(".project-arrow-next");
  const isSingle = project.images.length === 1;
  title.textContent = project.viewerTitle || project.title;
  back.style.display = "none";
  behance.href = project.link || "#";
  behance.style.display = project.link ? "inline-flex" : "none";
  prev.style.display = isSingle ? "none" : "grid";
  next.style.display = isSingle ? "none" : "grid";
  hint.textContent = isSingle ? "Scroll to explore the full page" : "Use the arrows or ← → keys to browse";
  slide.innerHTML = project.images.map((src, i) => `
    <img class="project-page-image full-page-preview ${i === activeSlideIndex ? "is-active" : ""}" src="${src}" alt="${(project.viewerTitle || project.title)} — page ${i + 1}" draggable="false" decoding="async">
  `).join("");
  slide.querySelectorAll("img").forEach((img, i) => {
    img.addEventListener("click", () => {
      if (i === activeSlideIndex) return;
      setProjectSlide(i);
    });
  });
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("project-modal-open");
  setProjectSlide(activeSlideIndex);
}

function setProjectSlide(index){
  const project = projects[activeProjectIndex];
  if (!project) return;
  const post = returnToPostsCollection && project.posts?.[activePostIndex] ? project.posts[activePostIndex] : null;
  const items = post ? (post.items || (post.images || []).map(src => ({ type: "image", src }))) : null;
  const slides = post ? items : (returnToPresentationCollection ? activePresentationImages : project.images);
  if (!slides?.length) return;
  activeSlideIndex = (index + slides.length) % slides.length;
  document.querySelectorAll(".project-page-image, .project-page-video").forEach((media, i) => media.classList.toggle("is-active", i === activeSlideIndex));
  const counter = document.getElementById("projectCounter");
  counter.textContent = slides.length === 1
    ? "Full page preview"
    : `${returnToPostsCollection ? "Slide" : "Page"} ${activeSlideIndex + 1} of ${slides.length}`;
}

function closeProjectGallery(){
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  if (returnToPostsCollection){
    returnToPostsCollection = false;
    openPostsCollection(activeProjectIndex);
    return;
  }
  if (returnToMagazineCollection){
    returnToMagazineCollection = false;
    openMagazineCollection(activeProjectIndex);
    return;
  }
  if (returnToPresentationCollection){
    returnToPresentationCollection = false;
    activePresentationImages = null;
    openPresentationCollection(activeProjectIndex);
    return;
  }
  document.body.classList.remove("project-modal-open");
}

document.addEventListener("click", (e) => {
  const presentationCard = e.target.closest(".presentation-collection-card");
  if (presentationCard){
    const idx = Number(presentationCard.dataset.presentationIndex);
    if (Number.isInteger(activeProjectIndex)) openPresentationViewer(activeProjectIndex, idx);
    return;
  }
  if (e.target.closest("[data-close-presentations]")){
    closePresentationsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".presentations-modal .project-modal-close")){
    closePresentationsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  const magazineCard = e.target.closest(".magazine-collection-card");
  if (magazineCard){
    const idx = Number(magazineCard.dataset.magazineIndex);
    if (Number.isInteger(activeProjectIndex)) openMagazineViewer(activeProjectIndex, idx);
    return;
  }
  const postCard = e.target.closest(".post-collection-card");
  if (postCard){
    const idx = Number(postCard.dataset.postIndex);
    if (Number.isInteger(activeProjectIndex)) openPostGallery(activeProjectIndex, idx);
    return;
  }
  const backToPosts = e.target.closest("#projectBackToPosts");
  if (backToPosts){
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    if (returnToPresentationCollection){
      openPresentationCollection(activeProjectIndex);
    } else if (returnToMagazineCollection){
      openMagazineCollection(activeProjectIndex);
    } else {
      openPostsCollection(activeProjectIndex);
    }
    return;
  }
  const trigger = e.target.closest(".project-view-trigger");
  if (trigger){
    e.preventDefault();
    openProjectGallery(Number(trigger.dataset.project));
    return;
  }
  if (e.target.closest("[data-close-magazines]")){
    closeMagazinesCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".magazines-modal .project-modal-close")){
    closeMagazinesCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest("[data-close-posts]")){
    closePostsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest(".posts-modal .project-modal-close")){
    closePostsCollection();
    document.body.classList.remove("project-modal-open");
    return;
  }
  if (e.target.closest("[data-close-project], .project-modal-close")){
    closeProjectGallery();
    return;
  }
  if (e.target.closest(".project-arrow-prev")){
    setProjectSlide(activeSlideIndex - 1);
    return;
  }
  if (e.target.closest(".project-arrow-next")){
    setProjectSlide(activeSlideIndex + 1);
  }
});

document.addEventListener("keydown", (e) => {
  if (presentationsModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closePresentationsCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".presentation-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".presentation-collection-card");
      openPresentationViewer(activeProjectIndex, Number(card.dataset.presentationIndex));
      return;
    }
  }
  if (magazinesModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closeMagazinesCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".magazine-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".magazine-collection-card");
      openMagazineViewer(activeProjectIndex, Number(card.dataset.magazineIndex));
      return;
    }
  }
  if (postsModal.classList.contains("is-open")){
    if (e.key === "Escape"){
      closePostsCollection();
      document.body.classList.remove("project-modal-open");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".post-collection-card")){
      e.preventDefault();
      const card = e.target.closest(".post-collection-card");
      openPostGallery(activeProjectIndex, Number(card.dataset.postIndex));
      return;
    }
  }
  if (!projectModal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeProjectGallery();
  if (e.key === "ArrowLeft") setProjectSlide(activeSlideIndex - 1);
  if (e.key === "ArrowRight") setProjectSlide(activeSlideIndex + 1);
});


/* ---------- scroll reveal (works for injected project cards too) ---------- */
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    if(innerWidth<900)return;
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
  });
  btn.addEventListener('mouseleave',()=>btn.style.transform='');
});
