panels.forEach(panel => {
  gsap.from(panel.querySelector(".animated-element"), {
    opacity: 0,
    x: -300,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: panel,
      containerAnimation: ScrollTrigger.getById("horizontal"),
      start: "left center",
      toggleActions: "play none none none"
    }
  });
});
