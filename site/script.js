// ===== Loader: spinning glider staff, hidden once the page is ready =====
const loader = document.getElementById("loader");
if (loader) {
  const hide = () => loader.classList.add("done");
  if (document.readyState === "complete") {
    setTimeout(hide, 500);
  } else {
    window.addEventListener("load", () => setTimeout(hide, 400));
  }
  setTimeout(hide, 2600); // never trap the visitor
}

// ===== Scroll progress bar (water -> earth -> fire -> air) =====
const progressBar = document.querySelector(".progress-bar");
if (progressBar) {
  const updateProgress = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progressBar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
  updateProgress();
}

// ===== Zoom-in on scroll =====
// Reveal a section once ~22% of it (or of the viewport, whichever is smaller)
// is on screen. Hide again only when it fully leaves, so the effect replays.
// Plain scroll math instead of IntersectionObserver: with sections much taller
// than the viewport, observer thresholds kept revealing content too late.
const zoomEls = Array.from(document.querySelectorAll(".zoom"));

function updateReveals() {
  const vh = window.innerHeight;
  zoomEls.forEach((el) => {
    const r = el.getBoundingClientRect();
    const visiblePx = Math.min(r.bottom, vh) - Math.max(r.top, 0);
    const needed = 0.22 * Math.min(r.height, vh);
    if (visiblePx >= needed) {
      el.classList.add("visible");
    } else if (visiblePx <= 0) {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", updateReveals, { passive: true });
window.addEventListener("resize", updateReveals, { passive: true });
updateReveals();

// ===== Swap nav brand text for photo once scrolled past the hero portrait =====
const heroRing = document.querySelector(".hero-photo-ring");
const nav = document.querySelector(".nav");
if (heroRing && nav) {
  new IntersectionObserver(
    ([entry]) => {
      const past = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      nav.classList.toggle("past-photo", past);
    },
    { threshold: 0 }
  ).observe(heroRing);
}

// ===== Messenger hawk form → mailto =====
const form = document.getElementById("hawk-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("hawk-name").value.trim();
    const msg = document.getElementById("hawk-msg").value.trim();
    const subject = encodeURIComponent(`Messenger hawk from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}`);
    window.location.href = `mailto:akshay06sep@gmail.com?subject=${subject}&body=${body}`;
  });
}
