(function() {
  // ===== GALLERY DATA =====
  const galleryData = [
    { id: 1, title: 'Spring Showcase', date: '12 Apr 2026', type: 'photos', bg: 'blue-bg', image: 'https://via.placeholder.com/400x400/0d6efd/fff?text=Spring+Showcase' },
    { id: 2, title: 'Art & Design Reels', date: '8 May 2026', type: 'videos', bg: 'green-bg', image: 'https://via.placeholder.com/400x400/28a745/fff?text=Art+Design', video: true },
    { id: 3, title: 'CSA Meetup Recap', date: '22 May 2026', type: 'videos', bg: 'warm-bg', image: 'https://via.placeholder.com/400x400/e67e22/fff?text=CSA+Meetup', video: true },
    { id: 4, title: 'Code & Coffee Live', date: '2 Jun 2026', type: 'photos', bg: 'stone-bg', image: 'https://via.placeholder.com/400x400/6c757d/fff?text=Code+Coffee' },
    { id: 5, title: 'Composition Night', date: '15 Jun 2026', type: 'photos', bg: 'purple-bg', image: 'https://via.placeholder.com/400x400/6f42c1/fff?text=Composition+Night' },
    { id: 6, title: 'Seminar Series', date: '20 Jun 2026', type: 'videos', bg: 'rose-bg', image: 'https://via.placeholder.com/400x400/dc3545/fff?text=Seminar+Series', video: true },
    { id: 7, title: 'Photo Walk Vlog', date: '28 Jun 2026', type: 'videos', bg: 'blue-bg', image: 'https://via.placeholder.com/400x400/0d6efd/fff?text=Photo+Walk', video: true },
    { id: 8, title: 'Workshop: Design', date: '5 Jul 2026', type: 'photos', bg: 'green-bg', image: 'https://via.placeholder.com/400x400/28a745/fff?text=Design+Workshop' },
    { id: 9, title: 'Video Recap 2026', date: '12 Jul 2026', type: 'videos', bg: 'warm-bg', image: 'https://via.placeholder.com/400x400/e67e22/fff?text=Video+Recap', video: true },
    { id: 10, title: 'Sketch & Compose', date: '18 Jul 2026', type: 'photos', bg: 'stone-bg', image: 'https://via.placeholder.com/400x400/6c757d/fff?text=Sketch+Compose' },
    { id: 11, title: 'Community Event', date: '24 Jul 2026', type: 'photos', bg: 'purple-bg', image: 'https://via.placeholder.com/400x400/6f42c1/fff?text=Community+Event' },
    { id: 12, title: 'Exhibition Tour', date: '30 Jul 2026', type: 'videos', bg: 'rose-bg', image: 'https://via.placeholder.com/400x400/dc3545/fff?text=Exhibition+Tour', video: true },
    { id: 13, title: 'Hackathon Finals', date: '5 Aug 2026', type: 'photos', bg: 'blue-bg', image: 'https://via.placeholder.com/400x400/0d6efd/fff?text=Hackathon+Finals' },
    { id: 14, title: 'Tech Talk Session', date: '12 Aug 2026', type: 'videos', bg: 'green-bg', image: 'https://via.placeholder.com/400x400/28a745/fff?text=Tech+Talk', video: true }
  ];

  // ===== DOM REFS =====
  const grid = document.getElementById('galleryGrid');
  const filterTabs = document.querySelectorAll('.filter-tabs .tab');

  // ===== RENDER GALLERY =====
  function renderGallery(filter = 'all') {
    let filtered = galleryData;
    if (filter !== 'all') {
      filtered = galleryData.filter(item => item.type === filter);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-images"></i>
          <p>No ${filter} found in the gallery.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(item => {
      const isVideo = item.video || false;
      const typeBadge = isVideo ? 
        '<span class="card-type-badge video"><i class="fas fa-video"></i> Video</span>' : 
        '<span class="card-type-badge"><i class="fas fa-camera"></i> Photo</span>';

      const videoOverlay = isVideo ? 
        `<div class="video-play"><i class="fas fa-play"></i></div>` : '';

      // Get icon based on item type
      const icon = isVideo ? 'fa-video' : 'fa-image';
      const iconColor = isVideo ? '#b8860b' : '#4a6a9a';

      html += `
        <div class="gallery-card" data-type="${item.type}">
          <div class="card-img ${item.bg}">
            <!-- Placeholder text (visible by default) -->
            <div class="card-placeholder">
              <i class="fas ${icon}" style="color: ${iconColor};"></i>
              <div class="placeholder-title">${item.title}</div>
              <div class="placeholder-sub"><i class="far fa-calendar-alt"></i> ${item.date}</div>
              <div class="hover-hint">
                <i class="fas fa-mouse-pointer"></i> Hover to view image
              </div>
            </div>
            <!-- Image (hidden by default, shows on hover) -->
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            ${videoOverlay}
          </div>
          <div class="card-content">
            <div class="card-title">${item.title}</div>
            <div class="card-sub"><i class="far fa-calendar-alt"></i> ${item.date}</div>
            ${typeBadge}
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  // ===== FILTER TAB CLICK HANDLER =====
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.dataset.filter;
      renderGallery(filterValue);
    });
  });

  // ===== MOBILE MENU =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('open')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('open');
        menuToggle.querySelector('i').className = 'fas fa-bars';
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      const navbar = document.querySelector('.navbar');
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.querySelector('i').className = 'fas fa-bars';
      }
    }
  });

  // ===== INIT =====
  renderGallery('all');
})();