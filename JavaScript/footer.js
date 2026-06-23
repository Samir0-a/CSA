// ===== FOOTER SCROLL ANIMATION =====

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  const footerCols = document.querySelectorAll(".footer-col");
  const footerCopy = document.querySelector(".footer-copy");

  // --- Initial hidden state (injected via JS so it degrades gracefully) ---
  Object.assign(footer.style, {
    opacity: "0",
    transform: "translateY(40px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  });

  footerCols.forEach((col) => {
    Object.assign(col.style, {
      opacity: "0",
      transform: "translateY(24px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    });
  });

  if (footerCopy) {
    Object.assign(footerCopy.style, {
      opacity: "0",
      transition: "opacity 0.6s ease 0.6s", // delayed after cols
    });
  }

  // --- Animate footer wrapper in ---
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Fade + slide the footer wrapper
          Object.assign(footer.style, {
            opacity: "1",
            transform: "translateY(0)",
          });

          // Stagger each column
          footerCols.forEach((col, i) => {
            setTimeout(() => {
              Object.assign(col.style, {
                opacity: "1",
                transform: "translateY(0)",
              });
            }, 150 + i * 120); // 150ms base delay, 120ms between each col
          });

          // Fade in copyright line last
          if (footerCopy) {
            setTimeout(() => {
              footerCopy.style.opacity = "1";
            }, 150 + footerCols.length * 120 + 100);
          }

          // Stop observing once animated
          footerObserver.unobserve(footer);
        }
      });
    },
    {
      threshold: 0.1, // trigger when 10% of footer is visible
    }
  );

  footerObserver.observe(footer);
});