// =========================
// Mobile Navigation
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  const isActive =
    navMenu.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    isActive
  );

});


// =========================
// Navigation Links
// =========================

const navLinks =
  document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (
      targetId &&
      targetId.startsWith("#")
    ) {

      const targetSection =
        document.querySelector(targetId);

      if (targetSection) {

        event.preventDefault();

        const header =
          document.querySelector(".header");

        const headerHeight =
          header.offsetHeight;

        const sectionPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({

          top: sectionPosition,

          behavior: "smooth"

        });

      }

    }

    // Close mobile menu

    navMenu.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


// =========================
// Copyright Year
// =========================

document.getElementById("year").textContent =
  new Date().getFullYear();
