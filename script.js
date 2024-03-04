// Toggle Icon NavBar

let menuIcon = document.querySelector("#menu-icon");
let nav = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

// Scroll Section Active NavBar
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky NavBar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle Icon and NavBar When Click NavBar Link (Scroll)

  menuIcon.classList.remove("bx-x");
  nav.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: [
    "Aspiring Software Engineer!",
    "Frontend Developer",
    "Sakristan!",
    "Working Scholar!",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -20 + "%)";
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex(sectionIndex);
    indicator.classList.add("selected");
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 4;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});
