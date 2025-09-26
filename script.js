// ===============================
// Maestro Cuts Barbershop - Script
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Maestro Cuts Barbershop site is ready!");

  // Header scrolled style
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // Nav + hamburger + overlay
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".nav-overlay");

  if (hamburger && nav) {
    // Toggle open/close (one handler only)
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("show");
    });
  }

  if (overlay && hamburger && nav) {
    // Click outside to close
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("show");
    });
  }

  // Esc key to close (nice UX)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburger && nav) {
      hamburger.classList.remove("active");
      nav.classList.remove("show");
    }
  });

  // Optional: booking button alert
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Thanks for booking with Maestro Cuts 💈");
    });
  }

  // ===== Hero slider (auto-rotate + dots) =====
  const hero = document.querySelector(".hero");
  const slides = document.querySelectorAll(".hero-slide, .hero_slide");
  const dots = document.querySelectorAll(".hero-dots .dot");

  if (slides.length > 0) {
    let current = 0;
    const intervalMs = 5000;
    let timer;

    function show(i) {
      slides[current].classList.remove("active");
      dots[current]?.classList.remove("active");
      current = i;
      slides[current].classList.add("active");
      if (dots[current]) dots[current].classList.add("active");
    }
    function next() { show((current + 1) % slides.length); }
    function start() { timer = setInterval(next, intervalMs); }
    function stop() { clearInterval(timer); }

    // dots click
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => { stop(); show(i); start(); });
    });

    // pause on hover (desktop nicety)
    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);

    // kick off
    start();
  } else {
    console.warn("Hero slider: no slides found. Check class name or image paths");
  }
});
