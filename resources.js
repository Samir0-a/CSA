// ===========================
// SECTION SWITCH (Resources / Blog)
// ===========================
const switchBtns = document.querySelectorAll('.switch-btn');
const pageSections = document.querySelectorAll('.page-section');

switchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    switchBtns.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });

    pageSections.forEach(section => {
      section.classList.toggle('active-section', section.id === target);
    });
  });
});

// ===========================
// MOBILE NAV TOGGLE
// ===========================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===========================
// RESOURCE CARD RENDERING
// ===========================
const resourceGrid = document.getElementById('resource-grid');
const resourceFilters = document.getElementById('resource-filters');

function renderResources(filter = 'all') {
  const list = filter === 'all' ? resources : resources.filter(r => r.type === filter);

  resourceGrid.innerHTML = list.map(r => `
    <div class="resource-card">
      <div class="resource-icon ${r.type}"><i class="fas ${r.icon}"></i></div>
      <span class="resource-tag">${labelFor(r.type)}</span>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="resource-meta">
        <span>${r.meta}</span>
        <a class="resource-link" href="${r.link}" target="_blank" rel="noopener">
          Open <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');
}

function labelFor(type) {
  return { tutorial: 'Tutorial', study: 'Study Material', tool: 'IT Tool' }[type] || type;
}

resourceFilters.addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;

  resourceFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderResources(chip.dataset.filter);
});

// ===========================
// BLOG CARD RENDERING
// ===========================
const blogGrid = document.getElementById('blog-grid');
const blogFilters = document.getElementById('blog-filters');

function categoryLabel(cat) {
  return { news: 'Tech News', student: 'Student Experience', industry: 'Industry Update' }[cat] || cat;
}

function renderPosts(filter = 'all') {
  const list = filter === 'all' ? posts : posts.filter(p => p.category === filter);

  blogGrid.innerHTML = list.map((p, i) => `
    <article class="blog-card" data-index="${posts.indexOf(p)}">
      <div class="blog-date">
        <span class="day">${p.day}</span>
        <span class="month">${p.month}</span>
      </div>
      <div class="blog-content">
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="blog-footer-row">
          <span class="blog-category ${p.category}">${categoryLabel(p.category)}</span>
          <span>${p.author}</span>
          <span>·</span>
          <span>${p.readTime}</span>
        </div>
      </div>
    </article>
  `).join('');
}

blogFilters.addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;

  blogFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  renderPosts(chip.dataset.filter);
});

// ===========================
// BLOG POST MODAL
// ===========================
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

blogGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.blog-card');
  if (!card) return;

  const post = posts[card.dataset.index];
  if (!post) return;

  modalBody.innerHTML = `
    <h2>${post.title}</h2>
    <p class="modal-meta">
      <span class="blog-category ${post.category}">${categoryLabel(post.category)}</span>
      &nbsp;·&nbsp; ${post.author} &nbsp;·&nbsp; ${post.readTime} &nbsp;·&nbsp; ${post.month} ${post.day}
    </p>
    <p>${post.full}</p>
  `;
  modalOverlay.classList.add('open');
});

modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modalOverlay.classList.remove('open');
});

// ===========================
// NEWSLETTER FORM
// ===========================
const newsletterForm = document.getElementById('newsletter-form');
const newsletterNote = document.getElementById('newsletter-note');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input').value;
  newsletterNote.textContent = `Subscribed — we'll email ${email} when there's something new.`;
  newsletterForm.reset();
});

// ===========================
// INITIAL RENDER
// ===========================
renderResources();
renderPosts();
