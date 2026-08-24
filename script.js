const sections = document.querySelectorAll(
  ".hero, .delights, .collections, .about-ckay, .whatsapp-cta, .site-footer"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
      } else {
        entry.target.classList.remove("section-visible");
      }
    });
  },
  {
    threshold: 0.35
  }
);

sections.forEach((section) => {
  section.classList.add("section-transition");
  observer.observe(section);
});