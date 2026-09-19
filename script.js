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

const tl = gsap.timeline();

tl.from(".nav", {
  y: -40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
})

.from(".baked-text", {
  y: 30,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out"
})

.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
}, "-=0.4")

.from(".hero-description", {
  y: 30,
  opacity: 0,
  duration: 0.7,
  ease: "power3.out"
}, "-=0.5")

.from(".hero-buttons", {
  y: 25,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.4")

.from(".hero-video", {
  scale: 0.7,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.8");