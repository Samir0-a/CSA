/* =====================================================
   CSA MMC Dang — script.js
   Handles: mobile navigation, dark/light theme,
   sticky navbar shadow, animated stat counters,
   event preview swapping, and footer year.
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------
     1. AOS (scroll animation library) init
  ------------------------------------------------- */
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80
    });
  }

  /* -------------------------------------------------
     2. Mobile navigation (hamburger menu)
  ------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  const openMenu = () => {
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (hamburger && navLinks && navOverlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('active');
      isOpen ? closeMenu() : openMenu();
    });

    // Close menu when a nav link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when tapping the dark overlay
    navOverlay.addEventListener('click', closeMenu);

    // Close menu with the Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Reset menu state if the window is resized back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991) closeMenu();
    });
  }

  /* -------------------------------------------------
     3. Sticky navbar shadow on scroll
  ------------------------------------------------- */
  const navbar = document.querySelector('.navbar');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  // Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Initialize theme on page load
function initializeTheme() {
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Enable Dark Mode
function enableDarkMode() {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    
    // Apply dark mode styles
    body.style.background = '#0a0e27';
    body.style.color = '#e0e0e0';
    navbar.style.background = '#0f1626';
    
    document.documentElement.style.setProperty('--bg-primary', '#0a0e27');
    document.documentElement.style.setProperty('--bg-secondary', '#1a2a4e');
    document.documentElement.style.setProperty('--text-primary', '#e0e0e0');
    document.documentElement.style.setProperty('--text-secondary', '#a0a0a0');
}

// Enable Light Mode
function enableLightMode() {
    htmlElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Apply light mode styles
    body.style.background = '#f8f9fa';
    body.style.color = '#333';
    navbar.style.background = '#142558';
    
    document.documentElement.style.setProperty('--bg-primary', '#f8f9fa');
    document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#333');
    document.documentElement.style.setProperty('--text-secondary', '#666');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    if (theme === 'dark') {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});
  /* -------------------------------------------------
     5. Event preview (click an event to show its image)
  ------------------------------------------------- */
  const eventItems  = document.querySelectorAll('.event-item');
  const previewBox  = document.querySelector('.preview-box');
  const previewImg  = document.getElementById('preview-image');

  if (eventItems.length && previewBox && previewImg) {
    eventItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        if (!imgSrc) return;

        previewImg.src = imgSrc;
        previewImg.alt = item.textContent.trim();
        previewBox.classList.add('active');

        eventItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Show the first event's image by default
    eventItems[0].click();
  }

  /* -------------------------------------------------
     6. Animated stat counters (count up when in view)
  ------------------------------------------------- */
  const counters = document.querySelectorAll('.counter[data-target]');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + '+';
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + '+';
      }
    };

    requestAnimationFrame(tick);
  };

  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      counters.forEach(counter => observer.observe(counter));
    } else {
      // Fallback for very old browsers without IntersectionObserver
      counters.forEach(animateCounter);
    }
  }

  /* -------------------------------------------------
     7. Footer year (stays correct every year)
  ------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});