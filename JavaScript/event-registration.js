(function () {

  // ===== GET EVENT DATA FROM URL =====
  const urlParams  = new URLSearchParams(window.location.search);
  const eventTitle = urlParams.get('event');
  const eventDate  = urlParams.get('date');
  const eventTime  = urlParams.get('time');
  const eventVenue = urlParams.get('venue');
  const eventId    = urlParams.get('id');

  

  // ===== DISPLAY EVENT INFO BANNER =====
  if (eventTitle) {
    const formCard    = document.querySelector('.form-card');
    const eventBanner = document.createElement('div');
    eventBanner.className = 'event-info-banner';

    // FIX 1: was `,;` — corrected to closing backtick + semicolon `;
    eventBanner.innerHTML = `
      <div style="background: #e8f0fe; padding: 16px 20px; border-radius: 16px; margin-bottom: 20px; border-left: 4px solid #0d6efd;">
        <h4 style="color: #0b1f3b; margin-bottom: 4px; font-size: 1rem;">
          <i class="fas fa-ticket-alt" style="color: #0d6efd;"></i> Registering for: ${eventTitle}
        </h4>
        <p style="color: #3e5a7a; font-size: 0.9rem; margin: 2px 0;">
          <i class="far fa-calendar-alt" style="color: #0d6efd; width: 18px;"></i> ${eventDate} &nbsp;|&nbsp;
          <i class="far fa-clock"        style="color: #0d6efd; width: 18px;"></i> ${eventTime} &nbsp;|&nbsp;
          <i class="fas fa-map-pin"      style="color: #0d6efd; width: 18px;"></i> ${eventVenue}
        </p>
        <p style="color: #6a7a9a; font-size: 0.8rem; margin-top: 4px;">
          <i class="fas fa-info-circle"></i> Please fill in your details to complete registration
        </p>
      </div>
    `;

    formCard.insertBefore(eventBanner, formCard.firstChild);
  }

  // ===== STAR RATING =====
  const stars       = document.querySelectorAll('#starRating .star');
  const ratingInput = document.getElementById('ratingValue');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const val    = parseInt(this.dataset.value);
      selectedRating   = val;
      ratingInput.value = val;
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= val);
      });
    });

    star.addEventListener('mouseenter', function () {
      const val = parseInt(this.dataset.value);
      stars.forEach(s => {
        s.style.color = parseInt(s.dataset.value) <= val ? '#f5b342' : '#dce3ed';
      });
    });

    star.addEventListener('mouseleave', function () {
      stars.forEach(s => {
        s.style.color = s.classList.contains('active') ? '#f5b342' : '#dce3ed';
      });
    });
  });

  // ===== "OTHER" TOGGLE — FACULTY =====
  const facultyRadios    = document.querySelectorAll('input[name="faculty"]');
  const facultyOtherInput = document.querySelector('input[name="facultyOther"]');

  facultyRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.value === 'Other') {
        facultyOtherInput.style.display = 'inline-block';
        facultyOtherInput.focus();
      } else {
        facultyOtherInput.style.display = 'none';
        facultyOtherInput.value = '';
      }
    });
  });

  if (facultyOtherInput) {
    const isOtherChecked = document.querySelector('input[name="faculty"][value="Other"]:checked');
    facultyOtherInput.style.display = isOtherChecked ? 'inline-block' : 'none';
  }

  // ===== "OTHER" TOGGLE — SEMESTER =====
  // FIX 3: logic was declared but never implemented — added full handler below
  const semRadios     = document.querySelectorAll('input[name="semester"]');
  const semOtherInput = document.querySelector('input[name="semesterOther"]');

  semRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.value === 'Other') {
        semOtherInput.style.display = 'inline-block';
        semOtherInput.focus();
      } else {
        semOtherInput.style.display = 'none';
        semOtherInput.value = '';
      }
    });
  });

  if (semOtherInput) {
    const isOtherChecked = document.querySelector('input[name="semester"][value="Other"]:checked');
    semOtherInput.style.display = isOtherChecked ? 'inline-block' : 'none';
  }

// FIX 2: IIFE was never closed — added closing })(); below
})();