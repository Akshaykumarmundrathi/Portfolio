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
  { threshold: 0.15 }
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
