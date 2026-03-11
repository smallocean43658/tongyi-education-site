const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".grid > *, .hero-panel > *, .faq-list > *").forEach((element, index) => {
  element.classList.add("stagger-item");
  element.style.setProperty("--stagger-delay", `${index * 90}ms`);
});

const topbar = document.querySelector(".topbar");

if (topbar) {
  const syncTopbarState = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  syncTopbarState();
  window.addEventListener("scroll", syncTopbarState, { passive: true });
}
