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
const zoomEls = document.querySelectorAll(".zoom");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // remove so it zooms again when scrolled back — feels more alive
        entry.target.classList.remove("visible");
      }
    });
  },
  // Tiny threshold + small bottom inset: tall sections (e.g. the case-study
  // timeline) reveal as soon as they meaningfully enter the viewport, instead
  // of waiting for 15% of a very tall element to be visible.
  { threshold: 0.03, rootMargin: "0px 0px -40px 0px" }
);

zoomEls.forEach((el) => observer.observe(el));

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
