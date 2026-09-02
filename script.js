// =========================
// Mobile Navigation
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isActive = navMenu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isActive);
});


// =========================
// Close mobile menu
// after clicking a link
// =========================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// =========================
// Automatically update
// copyright year
// =========================

document.getElementById("year").textContent =
  new Date().getFullYear();
