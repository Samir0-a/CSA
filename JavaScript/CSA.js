/* =CSA Script= */

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
     7. Footer year (stays correct every year)
  ------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});