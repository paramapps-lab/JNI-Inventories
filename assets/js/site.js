// const NAV_ITEMS = [
//   { key: "home", label: "Home", path: "" },
//   {
//     key: "services",
//     label: "Services",
//     path: "services/",
//     children: [
//       { key: "inventory-report", label: "Inventory Report", path: "inventory-report/" },
//       { key: "mid-term-report", label: "Mid-Term Report", path: "mid-term-report/" },
//       { key: "check-out-report", label: "Check Out Report", path: "check-out-report/" }
//     ]
//   },
//   { key: "testimonials", label: "Testimonials", path: "testimonials/" },
//   { key: "blog", label: "Blog", path: "blog/" },
//   // {
//   //   key: "price-list",
//   //   label: "Price List",
//   //   path: "https://www.captureinventory.co.uk/wp-content/uploads/2025/04/Capture-Website-Price-List_upd.pdf",
//   //   external: true
//   // },
//   { key: "contact", label: "Contact", path: "contact/" }
// ];

// const FOOTER_MENU_ITEMS = [
//   { label: "Home", path: "" },
//   { label: "Services", path: "services/" },
//   { label: "Inventory Report", path: "inventory-report/" },
//   { label: "Mid-Term Report", path: "mid-term-report/" },
//   { label: "Check Out Report", path: "check-out-report/" },
//   { label: "Testimonials", path: "testimonials/" },
//   { label: "Blog", path: "blog/" },
//   { label: "Price List", path: "https://www.captureinventory.co.uk/wp-content/uploads/2025/04/Capture-Website-Price-List_upd.pdf", external: true },
//   { label: "Contact", path: "contact/" }
// ];

// const MORE_INFO_ITEMS = [
//   { label: "Areas Covered", path: "areas-covered/" },
//   { label: "HTML Sitemap", path: "html-sitemap/" }
// ];

// const ACTIVE_GROUPS = {
//   "inventory-report": "services",
//   "mid-term-report": "services",
//   "check-out-report": "services",
//   location: "services",
//   "html-sitemap": null,
//   "areas-covered": null
// };

// const PHONE_DISPLAY = "0207 183 5182";
// const PHONE_LINK = "tel:02071835182";
// const EMAIL = "contact@captureinventory.co.uk";
// const EMAIL_LINK = `mailto:${EMAIL}`;
// const ADDRESS = "28 Hanson, Lower Richmond Road, SW14 7SH";
// const LOGO_PATH = "assets/images/JNI_transparent.png";

// const icons = {
//   phone:
//     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.47 15.47 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.44 11.44 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.44 11.44 0 0 0 .57 3.58 1 1 0 0 1-.25 1.02Z"/></svg>',
//   email:
//     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.51l9 5.63 9-5.63V7l-9 5.63L3 7.01Z"/></svg>',
//   location:
//     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 4.65-4.86 10.32-6.31 11.91a1 1 0 0 1-1.38 0C9.86 19.32 5 13.65 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z"/></svg>'
// };

// function withRoot(root, path = "") {
//   if (!path) {
//     return `${root || "."}/`.replace(/\/{2,}/g, "/");
//   }

//   if (/^https?:\/\//.test(path)) {
//     return path;
//   }

//   return `${root || "."}/${path}`.replace(/\/{2,}/g, "/");
// }

// function activeKeyFor(pageKey) {
//   return ACTIVE_GROUPS[pageKey] === undefined ? pageKey : ACTIVE_GROUPS[pageKey];
// }

// function anchorMarkup(root, item, className = "") {
//   const href = withRoot(root, item.path);
//   const attrs = item.external ? ' target="_blank" rel="noopener"' : "";
//   return `<a class="${className}" href="${href}"${attrs}>${item.label}</a>`;
// }

// function desktopNavMarkup(root, activeKey) {
//   return NAV_ITEMS.map((item) => {
//     const isActive = item.key === activeKey;
//     const className = `nav-link${isActive ? " is-active" : ""}`;

//     if (!item.children) {
//       return `<li class="nav-item">${anchorMarkup(root, item, className)}</li>`;
//     }

//     const children = item.children
//       .map((child) => `<li>${anchorMarkup(root, child)}</li>`)
//       .join("");

//     return `
//       <li class="nav-item">
//         <a class="${className}" href="${withRoot(root, item.path)}">
//           <span>${item.label}</span>
//           <span class="nav-caret">▼</span>
//         </a>
//         <ul class="submenu">
//           ${children}
//         </ul>
//       </li>
//     `;
//   }).join("");
// }

// function mobileNavMarkup(root, activeKey) {
//   return NAV_ITEMS.map((item) => {
//     const isActive = item.key === activeKey;
//     const className = `nav-link${isActive ? " is-active" : ""}`;

//     if (!item.children) {
//       return `<li>${anchorMarkup(root, item, className)}</li>`;
//     }

//     const children = item.children
//       .map((child) => `<li>${anchorMarkup(root, child)}</li>`)
//       .join("");

//     return `
//       <li>
//         <a class="${className}" href="${withRoot(root, item.path)}">${item.label}</a>
//         <ul class="submenu">
//           ${children}
//         </ul>
//       </li>
//     `;
//   }).join("");
// }

// function footerLinksMarkup(root, items) {
//   return items
//     .map((item) => `<li>${anchorMarkup(root, item)}</li>`)
//     .join("");
// }

// function footerInlineLinksMarkup(root, items) {
//   return items
//     .map((item) => `<li>${anchorMarkup(root, item)}</li>`)
//     .join("");
// }

// function headerMarkup(root, activeKey) {
//   return `
//     <header class="site-header" data-header>
//       <div class="header-topbar">
//         <div class="container header-topbar-inner">
//           <div class="topbar-left">
//             <a class="topbar-link" href="${PHONE_LINK}">
//               ${icons.phone}
//               <span>${PHONE_DISPLAY}</span>
//             </a>
//             <a class="topbar-link" href="${EMAIL_LINK}">
//               ${icons.email}
//               <span>${EMAIL}</span>
//             </a>
//           </div>
//           <a class="btn btn-primary header-book-btn" href="${withRoot(root, "contact/")}">Click Here to Book</a>
//         </div>
//       </div>
//       <div class="header-main">
//         <div class="container header-main-inner">
//           <a class="brand" href="${withRoot(root)}" aria-label="JNI Inventories home">
//             <img src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories logo">
//           </a>
//           <div class="nav-shell">
//             <nav class="main-nav" aria-label="Primary">
//               <ul>
//                 ${desktopNavMarkup(root, activeKey)}
//               </ul>
//             </nav>
//           </div>
//           <div class="header-phone-card">
//             ${icons.phone}
//             <div class="header-phone-copy">
//               <span class="small">Phone Number</span>
//               <span class="large">${PHONE_DISPLAY}</span>
//             </div>
//           </div>
//           <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-navigation">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span class="sr-only">Toggle navigation</span>
//           </button>
//         </div>
//       </div>
//       <div class="mobile-backdrop" data-menu-close></div>
//       <aside class="mobile-panel" id="mobile-navigation" aria-label="Mobile navigation">
//         <div class="mobile-header">
//           <a class="mobile-logo" href="${withRoot(root)}" aria-label="JNI Inventories home">
//             <img src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories logo">
//           </a>
//           <button class="mobile-close" type="button" data-menu-close aria-label="Close navigation">
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//         <nav class="mobile-nav" aria-label="Mobile">
//           <ul>
//             ${mobileNavMarkup(root, activeKey)}
//           </ul>
//         </nav>
//         <a class="btn btn-primary" href="${withRoot(root, "contact/")}">Click Here to Book</a>
//       </aside>
//     </header>
//   `;
// }

// function footerMarkup(root) {
//   return `
//     <footer class="site-footer">
//       <div class="footer-surface">
//         <div class="container footer-top">
//           <div class="footer-pro-main">
//             <div class="footer-pro-brand">
//               <img class="footer-brand" src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories logo">
//               <div class="footer-pro-copy">
//                 <span class="footer-pro-eyebrow">JNI Inventories</span>
//                 <h2 class="footer-pro-title">Reliable inventory reporting for landlords, tenants and agents.</h2>
//                 <p>Professional property inventory services across London and surrounding areas, delivered with clear communication, fast turnaround and dependable support.</p>
//               </div>
//             </div>
//             <div class="footer-pro-actions">
//               <a class="btn btn-light" href="${withRoot(root, "contact/")}">Book Online</a>
//               <a class="btn btn-secondary footer-call-btn" href="${PHONE_LINK}">${PHONE_DISPLAY}</a>
//             </div>
//           </div>
//           <div class="footer-pro-details">
//             <div class="footer-pro-panel">
//               <h3 class="footer-pro-heading">Contact</h3>
//               <div class="footer-pro-stack">
//                 <a class="footer-contact" href="${PHONE_LINK}">${icons.phone}<span>${PHONE_DISPLAY}</span></a>
//                 <a class="footer-contact" href="${EMAIL_LINK}">${icons.email}<span>${EMAIL}</span></a>
//                 <div class="footer-contact">${icons.location}<span>${ADDRESS}</span></div>
//               </div>
//             </div>
//             <div class="footer-pro-panel">
//               <h3 class="footer-pro-heading">Quick Links</h3>
//               <ul class="footer-pro-links">
//                 ${footerInlineLinksMarkup(root, FOOTER_MENU_ITEMS)}
//                 ${footerInlineLinksMarkup(root, MORE_INFO_ITEMS)}
//               </ul>
//             </div>
//           </div>
//           <div class="footer-bottom">© 2023 | JNI Inventories | All Rights Reserved.</div>
//         </div>
//       </div>
//     </footer>
//   `;
// }

// function mountShell() {
//   const body = document.body;
//   const root = body.dataset.root || ".";
//   const activeKey = activeKeyFor(body.dataset.nav || body.dataset.page || "home");
//   const headerTarget = document.querySelector("[data-site-header]");
//   const footerTarget = document.querySelector("[data-site-footer]");

//   if (headerTarget) {
//     headerTarget.innerHTML = headerMarkup(root, activeKey);
//   }

//   if (footerTarget) {
//     footerTarget.innerHTML = footerMarkup(root);
//   }
// }

// function initMenu() {
//   const toggle = document.querySelector("[data-menu-toggle]");
//   const closers = document.querySelectorAll("[data-menu-close]");
//   const links = document.querySelectorAll(".mobile-nav a");

//   if (!toggle) {
//     return;
//   }

//   const setOpen = (open) => {
//     document.body.classList.toggle("menu-open", open);
//     toggle.setAttribute("aria-expanded", String(open));
//   };

//   toggle.addEventListener("click", () => {
//     setOpen(!document.body.classList.contains("menu-open"));
//   });

//   closers.forEach((element) => {
//     element.addEventListener("click", () => setOpen(false));
//   });

//   links.forEach((link) => {
//     link.addEventListener("click", () => setOpen(false));
//   });
// }

// function initStickyHeader() {
//   const header = document.querySelector("[data-header]");

//   if (!header) {
//     return;
//   }

//   const sync = () => {
//     header.classList.toggle("is-scrolled", window.scrollY > 8);
//   };

//   sync();
//   window.addEventListener("scroll", sync, { passive: true });
// }

// function initContactForms() {
//   document.querySelectorAll("[data-contact-form]").forEach((form) => {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const success = form.querySelector("[data-form-success]");
//       const error = form.querySelector("[data-form-error]");
//       const submitButton = form.querySelector("[data-form-submit]");
//       const originalLabel = submitButton ? submitButton.textContent : "";
//       const payload = new FormData(form);

//       if (success) {
//         success.hidden = true;
//       }

//       if (error) {
//         error.hidden = true;
//       }

//       if (submitButton) {
//         submitButton.disabled = true;
//         submitButton.textContent = "SENDING...";
//       }

//       try {
//         const response = await fetch(form.action, {
//           method: "POST",
//           body: payload,
//           headers: {
//             Accept: "application/json"
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`Formspree request failed with status ${response.status}`);
//         }

//         form.reset();

//         if (success) {
//           success.hidden = false;
//         }
//       } catch (submitError) {
//         console.error("JNI Inventories contact form submission failed", submitError);

//         if (error) {
//           error.hidden = false;
//         }
//       } finally {
//         if (submitButton) {
//           submitButton.disabled = false;
//           submitButton.textContent = originalLabel;
//         }
//       }
//     });
//   });
// }

// function initHeroCanvas() {
//   const canvas = document.querySelector("[data-hero-canvas]");

//   if (!canvas) {
//     return;
//   }

//   const ctx = canvas.getContext("2d");
//   if (!ctx) {
//     return;
//   }

//   let width = 0;
//   let height = 0;
//   let animationFrame = 0;
//   const points = [];

//   const pointCount = 26;

//   const setup = () => {
//     const rect = canvas.getBoundingClientRect();
//     width = rect.width;
//     height = rect.height;
//     const ratio = window.devicePixelRatio || 1;
//     canvas.width = Math.floor(width * ratio);
//     canvas.height = Math.floor(height * ratio);
//     ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

//     points.length = 0;
//     for (let index = 0; index < pointCount; index += 1) {
//       points.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3
//       });
//     }
//   };

//   const draw = () => {
//     ctx.clearRect(0, 0, width, height);

//     for (const point of points) {
//       point.x += point.vx;
//       point.y += point.vy;

//       if (point.x < 0 || point.x > width) {
//         point.vx *= -1;
//       }

//       if (point.y < 0 || point.y > height) {
//         point.vy *= -1;
//       }
//     }

//     for (let i = 0; i < points.length; i += 1) {
//       for (let j = i + 1; j < points.length; j += 1) {
//         const a = points[i];
//         const b = points[j];
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         const distance = Math.sqrt((dx * dx) + (dy * dy));

//         if (distance < 220) {
//           const alpha = (1 - (distance / 220)) * 0.28;
//           ctx.strokeStyle = `rgba(226,224,214,${alpha})`;
//           ctx.lineWidth = 1;
//           ctx.beginPath();
//           ctx.moveTo(a.x, a.y);
//           ctx.lineTo(b.x, b.y);
//           ctx.stroke();
//         }
//       }
//     }

//     for (const point of points) {
//       ctx.fillStyle = "rgba(214, 211, 195, 0.42)";
//       ctx.beginPath();
//       ctx.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
//       ctx.fill();
//     }

//     animationFrame = window.requestAnimationFrame(draw);
//   };

//   setup();
//   draw();
//   window.addEventListener("resize", setup);
//   window.addEventListener("beforeunload", () => window.cancelAnimationFrame(animationFrame), { once: true });
// }

// function initRevealOnScroll() {
//   const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//   if (prefersReduced) {
//     return;
//   }

//   const targets = document.querySelectorAll(
//     ".page-hero .container, .section .service-card, .section .benefit-item, .section .feature-card, .section .detail-card, .section .stat-card, .section .blog-card, .section .city-guide-card, .section .content-card, .section .contact-card, .section .contact-form-card, .section .report-image-card, .section .client-logo-card, .section .testimonial-preview-card, .footer-surface, .testimonial-placeholder"
//   );

//   if (!targets.length) {
//     return;
//   }

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-on-scroll", "is-visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
//   );

//   targets.forEach((target) => {
//     target.classList.add("reveal-on-scroll");
//     observer.observe(target);
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   mountShell();
//   initMenu();
//   initStickyHeader();
//   initContactForms();
//   initHeroCanvas();
//   initRevealOnScroll();
// });


































/* ============================================
   JNI INVENTORIES — site.js
   GSAP-powered animations + full site shell
   ============================================ */

/* ---- SITE DATA ---- */
const NAV_ITEMS = [
  { key: "home", label: "Home", path: "" },
  {
    key: "services",
    label: "Services",
    path: "services/",
    children: [
      { key: "inventory-report",  label: "Inventory Report",  path: "inventory-report/"  },
      { key: "mid-term-report",   label: "Mid-Term Report",   path: "mid-term-report/"   },
      { key: "check-out-report",  label: "Check Out Report",  path: "check-out-report/"  }
    ]
  },
  { key: "testimonials", label: "Testimonials", path: "testimonials/" },
  { key: "blog",         label: "Blog",         path: "blog/"         },
  { key: "contact",      label: "Contact",      path: "contact/"      }
];

const FOOTER_MENU_ITEMS = [
  { label: "Home",             path: ""                 },
  { label: "Services",         path: "services/"        },
  { label: "Inventory Report", path: "inventory-report/"},
  { label: "Mid-Term Report",  path: "mid-term-report/" },
  { label: "Check Out Report", path: "check-out-report/"},
  { label: "Testimonials",     path: "testimonials/"    },
  { label: "Blog",             path: "blog/"            },
  { label: "Price List",       path: "https://www.captureinventory.co.uk/wp-content/uploads/2025/04/Capture-Website-Price-List_upd.pdf", external: true },
  { label: "Contact",          path: "contact/"         }
];

const MORE_INFO_ITEMS = [
  { label: "Areas Covered", path: "areas-covered/" },
  { label: "HTML Sitemap",  path: "html-sitemap/"  }
];

const ACTIVE_GROUPS = {
  "inventory-report":  "services",
  "mid-term-report":   "services",
  "check-out-report":  "services",
  "location":          "services",
  "html-sitemap":      null,
  "areas-covered":     null
};

const PHONE_DISPLAY = "0207 183 5182";
const PHONE_LINK    = "tel:02071835182";
const EMAIL         = "contact@jniinventories.co.uk";
const EMAIL_LINK    = `mailto:${EMAIL}`;
const ADDRESS       = "28 Hanson, Lower Richmond Road, SW14 7SH";
const LOGO_PATH     = "assets/images/JNI_transparent.png";
const SCRIPT_BASE   = (() => {
  const script = document.querySelector('script[src$="site.js"]');
  return script ? new URL(".", script.src).href : "";
})();

/* ---- ICONS ---- */
const icons = {
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.47 15.47 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.44 11.44 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.44 11.44 0 0 0 .57 3.58 1 1 0 0 1-.25 1.02Z"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.51l9 5.63 9-5.63V7l-9 5.63L3 7.01Z"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 4.65-4.86 10.32-6.31 11.91a1 1 0 0 1-1.38 0C9.86 19.32 5 13.65 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z"/></svg>'
};

/* ---- HELPERS ---- */
function withRoot(root, path = "") {
  if (!path) return `${root || "."}/`.replace(/\/{2,}/g, "/");
  if (/^https?:\/\//.test(path)) return path;
  return `${root || "."}/${path}`.replace(/\/{2,}/g, "/");
}

function activeKeyFor(pageKey) {
  return ACTIVE_GROUPS[pageKey] === undefined ? pageKey : ACTIVE_GROUPS[pageKey];
}

function anchorMarkup(root, item, className = "") {
  const href  = withRoot(root, item.path);
  const attrs = item.external ? ' target="_blank" rel="noopener"' : "";
  return `<a class="${className}" href="${href}"${attrs}>${item.label}</a>`;
}

/* ---- NAV MARKUP ---- */
function desktopNavMarkup(root, activeKey) {
  return NAV_ITEMS.map(item => {
    const isActive  = item.key === activeKey;
    const className = `nav-link${isActive ? " is-active" : ""}`;
    if (!item.children) {
      return `<li class="nav-item">${anchorMarkup(root, item, className)}</li>`;
    }
    const children = item.children.map(c => `<li>${anchorMarkup(root, c)}</li>`).join("");
    return `
      <li class="nav-item">
        <a class="${className}" href="${withRoot(root, item.path)}">
          <span>${item.label}</span>
          <span class="nav-caret">▼</span>
        </a>
        <ul class="submenu">${children}</ul>
      </li>`;
  }).join("");
}

function mobileNavMarkup(root, activeKey) {
  return NAV_ITEMS.map(item => {
    const isActive  = item.key === activeKey;
    const className = `nav-link${isActive ? " is-active" : ""}`;
    if (!item.children) {
      return `<li>${anchorMarkup(root, item, className)}</li>`;
    }
    const children = item.children.map(c => `<li>${anchorMarkup(root, c)}</li>`).join("");
    return `
      <li>
        <a class="${className}" href="${withRoot(root, item.path)}">${item.label}</a>
        <ul class="submenu">${children}</ul>
      </li>`;
  }).join("");
}

function footerLinksMarkup(root, items) {
  return items.map(item => `<li>${anchorMarkup(root, item)}</li>`).join("");
}

/* ---- SHELL MARKUP ---- */
function headerMarkup(root, activeKey) {
  return `
<header class="site-header" data-header>
  <div class="header-topbar">
    <div class="container header-topbar-inner">
      <div class="topbar-left">
        <a class="topbar-link" href="${PHONE_LINK}">${icons.phone}<span>${PHONE_DISPLAY}</span></a>
        <a class="topbar-link" href="${EMAIL_LINK}">${icons.email}<span>${EMAIL}</span></a>
      </div>
      <a class="header-book-btn" href="${withRoot(root, "contact/")}">Book Now</a>
    </div>
  </div>
  <div class="header-main">
    <div class="container header-main-inner">
      <a class="brand" href="${withRoot(root)}" aria-label="JNI Inventories home">
        <img src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories" loading="eager">
      </a>
      <div class="nav-shell">
        <nav class="main-nav" aria-label="Primary">
          <ul>${desktopNavMarkup(root, activeKey)}</ul>
        </nav>
      </div>
      <div class="header-phone-card">
        ${icons.phone}
        <div class="header-phone-copy">
          <span class="small">Call Us</span>
          <span class="large">${PHONE_DISPLAY}</span>
        </div>
      </div>
      <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-navigation">
        <span></span><span></span><span></span>
        <span class="sr-only">Toggle navigation</span>
      </button>
    </div>
  </div>
  <div class="mobile-backdrop" data-menu-close></div>
  <aside class="mobile-panel" id="mobile-navigation" aria-label="Mobile navigation">
    <div class="mobile-header">
      <a class="mobile-logo" href="${withRoot(root)}" aria-label="JNI Inventories home">
        <img src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories">
      </a>
      <button class="mobile-close" type="button" data-menu-close aria-label="Close">
        <span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" aria-label="Mobile">
      <ul>${mobileNavMarkup(root, activeKey)}</ul>
    </nav>
    <a class="btn btn-primary" href="${withRoot(root, "contact/")}">Book Now</a>
  </aside>
</header>`;
}

function footerMarkup(root) {
  return `
<footer class="site-footer">
  <div class="footer-surface">
    <div class="container footer-top">
      <div class="footer-pro-main">
        <div class="footer-pro-brand">
          <img class="footer-brand" src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories">
          <div class="footer-pro-copy">
            <span class="footer-pro-eyebrow">JNI Inventories</span>
            <h2 class="footer-pro-title">Reliable inventory reporting across London.</h2>
            <p>Professional property inventory services for landlords, tenants and letting agents — delivered with clear communication, fast turnaround and dependable support.</p>
          </div>
        </div>
        <div class="footer-pro-actions">
          <a class="btn btn-light"     href="${withRoot(root, "contact/")}">Book Online</a>
          <a class="btn btn-secondary footer-call-btn" href="${PHONE_LINK}">${PHONE_DISPLAY}</a>
        </div>
      </div>
      <div class="footer-pro-details">
        <div class="footer-pro-panel">
          <h3 class="footer-pro-heading">Contact Us</h3>
          <div class="footer-pro-stack">
            <a class="footer-contact" href="${PHONE_LINK}">${icons.phone}<span>${PHONE_DISPLAY}</span></a>
            <a class="footer-contact" href="${EMAIL_LINK}">${icons.email}<span>${EMAIL}</span></a>
            <div class="footer-contact">${icons.location}<span>${ADDRESS}</span></div>
          </div>
        </div>
        <div class="footer-pro-panel">
          <h3 class="footer-pro-heading">Quick Links</h3>
          <ul class="footer-pro-links">
            ${footerLinksMarkup(root, FOOTER_MENU_ITEMS)}
            ${footerLinksMarkup(root, MORE_INFO_ITEMS)}
          </ul>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} JNI Inventories. All rights reserved.</div>
    </div>
  </div>
</footer>`;
}

/* ---- MOUNT SHELL ---- */
function mountShell() {
  const body        = document.body;
  const root        = body.dataset.root || ".";
  const activeKey   = activeKeyFor(body.dataset.nav || body.dataset.page || "home");
  const headerSlot  = document.querySelector("[data-site-header]");
  const footerSlot  = document.querySelector("[data-site-footer]");
  if (headerSlot) headerSlot.innerHTML = headerMarkup(root, activeKey);
  if (footerSlot) footerSlot.innerHTML = footerMarkup(root);
}

/* ---- MOBILE MENU ---- */
function initMenu() {
  const toggle  = document.querySelector("[data-menu-toggle]");
  const closers = document.querySelectorAll("[data-menu-close]");
  const links   = document.querySelectorAll(".mobile-nav a");
  if (!toggle) return;

  const setOpen = open => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  closers.forEach(el => el.addEventListener("click", () => setOpen(false)));
  links.forEach(l  => l.addEventListener("click",  () => setOpen(false)));
}

/* ---- STICKY HEADER ---- */
function initStickyHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

/* ---- CONTACT FORMS ---- */
function initContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const success = form.querySelector("[data-form-success]");
      const error   = form.querySelector("[data-form-error]");
      const btn     = form.querySelector("[data-form-submit]");
      const orig    = btn ? btn.textContent : "";
      if (success) success.hidden = true;
      if (error)   error.hidden   = true;
      if (btn)     { btn.disabled = true; btn.textContent = "SENDING…"; }
      try {
        const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        form.reset();
        if (success) success.hidden = false;
      } catch (err) {
        console.error("Form error", err);
        if (error) error.hidden = false;
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = orig; }
      }
    });
  });
}

/* ---- GSAP ANIMATIONS ---- */
function initGSAP() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  /* Load local GSAP + ScrollTrigger assets */
  const gsapScript = document.createElement("script");
  gsapScript.src = new URL("gsap.min.js", SCRIPT_BASE).href;
  gsapScript.onload = () => {
    const stScript = document.createElement("script");
    stScript.src = new URL("ScrollTrigger.min.js", SCRIPT_BASE).href;
    stScript.onload = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        document.documentElement.dataset.gsap = "active";
        runAnimations();
      }
    };
    document.head.appendChild(stScript);
  };
  document.head.appendChild(gsapScript);
}

function runAnimations() {
  const gsap = window.gsap;
  if (!gsap) {
    return;
  }
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  initAmbientMotion(gsap);

  /* ---- HERO ---- */
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  /* Hero photo reveal and slow scroll parallax */
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    const photoOpacity = parseFloat(getComputedStyle(heroBg).getPropertyValue("--hero-photo-opacity")) || 0.7;

    heroTl.fromTo(heroBg,
      { opacity: 0.12, scale: 1.08, xPercent: 2 },
      { opacity: photoOpacity, scale: 1, xPercent: 0, duration: 1.3, ease: "power2.out" },
      0
    );

    gsap.to(heroBg, {
      yPercent: 10,
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  /* Hero copy stagger */
  const kicker    = document.querySelector(".hero-kicker");
  const title     = document.querySelector(".hero-title");
  const heroText  = document.querySelector(".hero-text");
  const heroActs  = document.querySelector(".hero-actions");
  const heroTrust = document.querySelector(".hero-trust-strip");
  const heroStats = document.querySelector(".hero-stats-panel");
  const heroScrl  = document.querySelector(".hero-scroll-cue");
  const heroButtons = document.querySelectorAll(".hero-actions .btn");
  const trustItems = document.querySelectorAll(".hero-trust-strip span");
  const heroEntranceItems = [kicker, title, heroText].filter(Boolean);

  if (heroEntranceItems.length) {
    gsap.set(heroEntranceItems, { opacity: 0, y: 30 });
  }

  if (heroButtons.length) {
    gsap.set(heroButtons, { opacity: 0, y: 18, scale: 0.96 });
  }

  if (trustItems.length) {
    gsap.set(trustItems, { opacity: 0, y: 14 });
  }

  if (kicker)    heroTl.to(kicker,    { opacity: 1, y: 0, duration: 0.65 }, 0.2);
  if (title)     heroTl.to(title,     { opacity: 1, y: 0, duration: 0.9 }, 0.42);
  if (heroText)  heroTl.to(heroText,  { opacity: 1, y: 0, duration: 0.75 }, 0.64);
  if (heroActs)  heroTl.to(heroActs,  { opacity: 1, y: 0, duration: 0.1 }, 0.82);
  if (heroButtons.length) heroTl.to(heroButtons, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 }, 0.84);
  if (heroTrust) heroTl.to(heroTrust, { opacity: 1, y: 0, duration: 0.1 }, 1.02);
  if (trustItems.length) heroTl.to(trustItems, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, 1.04);
  if (heroStats) heroTl.to(heroStats, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }, 0.8);
  if (heroScrl)  heroTl.to(heroScrl,  { opacity: 1, duration: 1 }, 1.2);

  /* ---- SCROLL-TRIGGERED: fade up for section content ---- */
  const fadeTargets = document.querySelectorAll(
    ".service-card, .benefit-item, .testimonial-preview-card, .city-guide-card, .client-logo-card, .stat-card, .blog-card"
  );

  fadeTargets.forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 64, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: (i % 3) * 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  /* ---- SECTION HEADERS ---- */
  document.querySelectorAll(".spaced-header").forEach(header => {
    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: header, start: "top 85%" }
      }
    );
  });

  /* ---- SPLIT LAYOUT (inventory pages) ---- */
  const contentCard = document.querySelector(".content-card");
  const imageCard   = document.querySelector(".report-image-card");
  if (contentCard) {
    gsap.fromTo(contentCard,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: contentCard, start: "top 80%" } }
    );
  }
  if (imageCard) {
    gsap.fromTo(imageCard,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: imageCard, start: "top 80%" } }
    );
  }

  /* ---- PAGE HERO (inner pages) ---- */
  const pageHero = document.querySelector(".page-hero .container");
  if (pageHero) {
    gsap.fromTo(pageHero,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.15 }
    );
  }

  /* ---- CTA STRIP ---- */
  const ctaStrip = document.querySelector(".cta-strip");
  if (ctaStrip) {
    gsap.fromTo(ctaStrip.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ctaStrip, start: "top 80%" }
      }
    );
  }

  /* ---- FOOTER ---- */
  const footer = document.querySelector(".footer-surface");
  if (footer) {
    gsap.fromTo(footer,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: footer, start: "top 95%" } }
    );
  }

  /* ---- NUMBER COUNTER animation for hero stats ---- */
  document.querySelectorAll("[data-count-to]").forEach(el => {
    const target = parseInt(el.dataset.countTo, 10);
    const suffix = el.dataset.countSuffix || "";
    gsap.fromTo({ val: 0 },
      { val: target },
      {
        val: target,
        duration: 2,
        ease: "power2.out",
        delay: 1.2,
        onUpdate: function() {
          el.textContent = Math.round(this.targets()[0].val) + suffix;
        }
      }
    );
  });

  /* eslint-enable no-undef */
}

function initAmbientMotion(gsap) {
  const layer = document.querySelector(".home-motion-layer");
  if (!layer) {
    return;
  }

  const runnerA = layer.querySelector(".motion-runner-a");
  const runnerB = layer.querySelector(".motion-runner-b");
  const scanline = layer.querySelector(".motion-scanline");
  const reportStack = layer.querySelector(".motion-report-stack");
  const measureGrid = layer.querySelector(".motion-measure-grid");
  const motionPath = layer.querySelector(".motion-path");

  const animateRunners = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const margin = width < 768 ? 10 : 18;

    gsap.killTweensOf([runnerA, runnerB, scanline, reportStack, measureGrid, motionPath]);

    if (runnerA) {
      gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
        .set(runnerA, { x: margin, y: margin, rotation: 0, opacity: 0.7 })
        .to(runnerA, { x: width - margin - 56, duration: 5.5 })
        .to(runnerA, { rotation: 90, duration: 0.15 })
        .to(runnerA, { y: height - margin - 56, duration: 4.3 })
        .to(runnerA, { rotation: 180, duration: 0.15 })
        .to(runnerA, { x: margin, duration: 5.5 })
        .to(runnerA, { rotation: 270, duration: 0.15 })
        .to(runnerA, { y: margin, duration: 4.3 })
        .to(runnerA, { rotation: 360, duration: 0.15 });
    }

    if (runnerB) {
      gsap.timeline({ repeat: -1, delay: 0.8, defaults: { ease: "none" } })
        .set(runnerB, { x: width - margin - 3, y: height * 0.25, opacity: 0.45 })
        .to(runnerB, { y: height - margin - 56, duration: 4.5 })
        .to(runnerB, { x: margin, duration: 5.8 })
        .to(runnerB, { y: margin, duration: 4.5 })
        .to(runnerB, { x: width - margin - 3, duration: 5.8 });
    }

    if (scanline) {
      gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
        .set(scanline, { y: -40, opacity: 0 })
        .to(scanline, { opacity: 0.75, duration: 0.45, ease: "power2.out" })
        .to(scanline, { y: height * 0.78, duration: 5.8, ease: "sine.inOut" }, 0)
        .to(scanline, { opacity: 0, duration: 0.8, ease: "power2.in" }, 5);
    }

    if (reportStack) {
      gsap.timeline({ repeat: -1, yoyo: true })
        .set(reportStack, { opacity: 0.46, x: 0, y: 0, rotation: 0 })
        .to(reportStack, { x: -18, y: 12, rotation: -1.2, duration: 5.5, ease: "sine.inOut" })
        .to(reportStack, { x: 10, y: -8, rotation: 1.1, duration: 5.2, ease: "sine.inOut" });

      gsap.to(reportStack.querySelectorAll(".motion-card-row"), {
        x: 8,
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.12
      });
    }

    if (measureGrid) {
      gsap.timeline({ repeat: -1, yoyo: true })
        .set(measureGrid, { opacity: 0.5, x: 0, y: 0, rotation: 0 })
        .to(measureGrid, { x: 16, y: -14, rotation: 1.4, duration: 6.4, ease: "sine.inOut" })
        .to(measureGrid, { x: -10, y: 8, rotation: -1, duration: 5.8, ease: "sine.inOut" });

      gsap.to(measureGrid.querySelector(".motion-measure-line"), {
        scaleX: 0.72,
        transformOrigin: "center",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    if (motionPath) {
      gsap.timeline({ repeat: -1, yoyo: true })
        .set(motionPath, { opacity: 0.42, x: 0, y: 0 })
        .to(motionPath, { x: -12, y: -10, duration: 5.2, ease: "sine.inOut" })
        .to(motionPath, { x: 12, y: 6, duration: 5.6, ease: "sine.inOut" });

      gsap.to(motionPath.querySelectorAll(".motion-photo-card"), {
        y: -7,
        rotation: (index) => [-1, 1.4, -0.8][index] || 0,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });
    }
  };

  animateRunners();
  window.addEventListener("resize", () => {
    window.clearTimeout(window.__jniMotionResizeTimer);
    window.__jniMotionResizeTimer = window.setTimeout(animateRunners, 180);
  }, { passive: true });
}

/* ---- SMOOTH PAGE TRANSITIONS ---- */
function buildLoaderMarkup(root) {
  return `
    <div class="site-loader-panel">
      <img src="${withRoot(root, LOGO_PATH)}" alt="JNI Inventories">
      <div class="lds-ripple" aria-hidden="true"><div></div><div></div></div>
      <span class="sr-only">Loading JNI Inventories</span>
    </div>`;
}

function createSiteLoader(root) {
  const existing = document.querySelector(".site-loader");
  if (existing) {
    return existing;
  }

  const loader = document.createElement("div");
  loader.className = "site-loader";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");
  loader.innerHTML = buildLoaderMarkup(root);
  document.body.prepend(loader);
  return loader;
}

function initSiteLoader() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const startedAt = performance.now();
  const minVisibleMs = 3000;
  const root = document.body.dataset.root || ".";
  const loader = createSiteLoader(root);

  document.body.classList.add("site-loading");

  const hideLoader = () => {
    const wait = Math.max(0, minVisibleMs - (performance.now() - startedAt));
    window.setTimeout(() => {
      loader.classList.add("is-hiding");
      document.body.classList.remove("site-loading");
      window.setTimeout(() => loader.remove(), 520);
    }, wait);
  };

  hideLoader();

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.body.classList.remove("site-loading", "is-page-leaving");
      document.querySelector(".site-loader")?.remove();
    }
  });
}

function initPageTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const href = link.getAttribute("href") || "";
    const target = link.getAttribute("target");
    const isUtility = href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || link.hasAttribute("download");
    const url = new URL(link.href, window.location.href);
    const samePageHash = url.pathname === window.location.pathname && url.search === window.location.search && url.hash;

    if (target || isUtility || samePageHash || url.origin !== window.location.origin) {
      return;
    }

    const root = document.body.dataset.root || ".";
    const loader = createSiteLoader(root);
    loader.classList.remove("is-hiding");
    document.body.classList.add("site-loading", "is-page-leaving");
  });
}

/* ---- HERO CANVAS (fallback — only runs if no hero-bg img exists) ---- */
function initHeroCanvas() {
  const canvas = document.querySelector("[data-hero-canvas]");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0, h = 0, raf = 0;
  const pts = [];
  const N   = 28;

  const setup = () => {
    const rect  = canvas.getBoundingClientRect();
    w = rect.width; h = rect.height;
    const dpr   = window.devicePixelRatio || 1;
    canvas.width  = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pts.length = 0;
    for (let i = 0; i < N; i++) {
      pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 200) {
          ctx.strokeStyle = `rgba(200,216,200,${(1 - d / 200) * 0.25})`;
          ctx.lineWidth   = 1;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
    for (const p of pts) {
      ctx.fillStyle = "rgba(200,216,200,0.35)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  setup(); draw();
  window.addEventListener("resize", setup);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(raf), { once: true });
}

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  initSiteLoader();
  mountShell();
  initMenu();
  initStickyHeader();
  initContactForms();
  initHeroCanvas();
  initPageTransitions();
  initGSAP(); /* must come after shell is mounted */
});
