// ===============================
// Maestro Cuts Barbershop - Script
// ===============================

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Maestro Cuts Barbershop site is ready!");

  // Example: toggle a class on header when scrolling
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("show");
    });
  }

  // Example: simple button click handler
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Thanks for booking with Maestro Cuts 💈");
    });
  }
});
