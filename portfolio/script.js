// ═══════════════ TYPING ANIMATION ═══════════════
const words = ["Web Developer", "UI/UX Designer", "Logo Creator", "Freelancer"];
let wi = 0, ci = 0, del = false;
const typingEl = document.getElementById("typing");

function type() {
  const w = words[wi];
  if (!del) {
    typingEl.textContent = w.substring(0, ++ci);
    if (ci === w.length) {
      del = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = w.substring(0, --ci);
    if (ci === 0) {
      del = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, del ? 45 : 90);
}

type();

// ═══════════════ SCROLL REVEAL ═══════════════
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ═══════════════ SKILL BAR ANIMATION ═══════════════
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".skill-fill").forEach(bar => {
        bar.style.transform = `scaleX(${bar.dataset.width / 100})`;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".skills-wrap").forEach(el => skillObserver.observe(el));

// ═══════════════ MOBILE MENU ═══════════════
function openMobile() {
  document.getElementById("mobileMenu").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("open");
  document.body.style.overflow = "";
}

// Close mobile menu on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobile();
});

// ═══════════════ NAV SCROLL EFFECT ═══════════════
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 60) {
    nav.style.padding = "14px 40px";
    nav.style.boxShadow = "0 8px 40px rgba(0,0,0,0.4)";
  } else {
    nav.style.padding = "20px 40px";
    nav.style.boxShadow = "none";
  }
});

// ═══════════════ ACTIVE NAV LINK ═══════════════
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.style.color = a.getAttribute("href") === `#${current}` ? "var(--cyan)" : "";
  });
});
