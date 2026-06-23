// ===== NAVBAR JAVASCRIPT =====

document.addEventListener("DOMContentLoaded", () => {

  const navbar     = document.querySelector(".navbar");
  const hamburger  = document.querySelector(".hamburger");
  const navLinks   = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");
  const themeToggle = document.getElementById("theme-toggle");

  // ===========================
  // 1. SCROLLED CLASS (shrink navbar on scroll)
  // ===========================

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ===========================
  // 2. HAMBURGER TOGGLE (open/close mobile menu)
  // ===========================

  function openMenu() {
    hamburger.classList.add("active");
    navLinks.classList.add("active");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when overlay is clicked
  navOverlay.addEventListener("click", closeMenu);

  // Close menu when a nav link is clicked (mobile UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // ===========================
  // 3. ACTIVE LINK HIGHLIGHT
  // ===========================

  const currentPath = window.location.pathname.split("/").pop();

  navLinks.querySelectorAll("a").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath && linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  // ===========================
  // 4. DARK MODE TOGGLE
  // ===========================

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  // ===========================
  // 5. CLOSE MENU ON RESIZE (if user widens window)
  // ===========================

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMenu();
    }
  });

});