gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

  // Page fade-in
  gsap.from("body", {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out"
  });

  // ABOUT text slide in
  gsap.from("#about .intro", {
    x: -120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%"
    }
  });

  // PROJECTS pan left → center and STOP
  const projectsTrack = document.querySelector(
    "#projects .experience-details-container"
  );

  if (projectsTrack) {
    gsap.fromTo(
      projectsTrack,
      { x: "-50vw" },
      {
        x: "0vw",
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "top 10%",
          scrub: true
        }
      }
    );
  }

  // WEEKS buttons → iframe loader
  const buttons = document.querySelectorAll(".weeks-grid button");
  const frame = document.getElementById("weekFrame");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const src = btn.dataset.src;
      if (frame && src) frame.src = src;
    });
  });

  if (buttons[0]) buttons[0].click();

});

// MENU
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DARK / LIGHT
const btn = document.getElementById("modeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") setDarkMode();
if (btn) btn.addEventListener("click", setTheme);

function setTheme() {
  const theme = document.body.getAttribute("theme");
  if (theme === "dark") setLightMode();
  else setDarkMode();
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
}

function setLightMode() {
  document.body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");
}
