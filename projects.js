(function() {
  // ===== PROJECT DATA (full info) =====
  const projects = [
    {
      id: 1,
      title: 'AI-powered Study Assistant',
      desc: 'An intelligent chatbot that helps students with course material, schedules, and Q&A using NLP.',
      tags: ['AI', 'NLP', 'Python'],
      outcome: 'MVP deployed',
      status: 'Active',
      team: 'AI Squad',
      date: '2026-05-20',
      fullDesc: 'This project leverages state-of-the-art transformer models to answer academic queries, summarize lectures, and recommend study resources. Built with FastAPI and React, it integrates with the university LMS.',
      benefits: ['Improved student engagement', '24/7 support', 'Personalized learning'],
      repo: '#'
    },
    {
      id: 2,
      title: 'Blockchain-based Certificate Verifier',
      desc: 'Decentralized system to issue and verify academic credentials, reducing fraud.',
      tags: ['Blockchain', 'Solidity', 'Web3'],
      outcome: 'Pilot with 200+ students',
      status: 'Completed',
      team: 'Blockchain Devs',
      date: '2026-04-10',
      fullDesc: 'Using Ethereum smart contracts, this project creates tamper-proof digital certificates. Employers can verify instantly via a public ledger. Built with Hardhat, React, and IPFS.',
      benefits: ['Immutable records', 'Instant verification', 'Reduced admin overhead'],
      repo: '#'
    },
    {
      id: 3,
      title: 'Smart Campus IOT Dashboard',
      desc: 'Real-time monitoring of campus facilities using IoT sensors and a central dashboard.',
      tags: ['IoT', 'Node.js', 'MQTT'],
      outcome: 'Live in 3 buildings',
      status: 'Active',
      team: 'IOT Crew',
      date: '2026-06-01',
      fullDesc: 'Sensors track temperature, humidity, and occupancy in lecture halls. The dashboard provides analytics and alerts for facility management. Built with Node-RED, InfluxDB, and Grafana.',
      benefits: ['Energy efficiency', 'Space utilization insights', 'Predictive maintenance'],
      repo: '#'
    },
    {
      id: 4,
      title: 'Virtual Lab Simulator',
      desc: 'Interactive simulation for computer networking experiments, accessible remotely.',
      tags: ['Education', 'React', 'D3'],
      outcome: 'Used by 500+ students',
      status: 'Completed',
      team: 'EduTech',
      date: '2026-03-15',
      fullDesc: 'A web-based platform where students can simulate network topologies, configure routers, and test connectivity without physical hardware. Built with React, D3.js, and a custom backend.',
      benefits: ['Remote learning', 'Cost-effective', 'Hands-on practice'],
      repo: '#'
    }
  ];

  const grid = document.getElementById('projectsGrid');
  const overlay = document.getElementById('detailOverlay');
  const closeBtn = document.getElementById('closeDetail');

  // ===== RENDER PROJECT CARDS =====
  function renderProjects() {
    if (!grid) return;
    let html = '';
    projects.forEach((p, idx) => {
      const accent = idx % 2 === 0 ? 'accent-light' : 'accent-dark';
      const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
      html += `
        <div class="project-card" data-id="${p.id}">
          <div class="project-accent ${accent}"></div>
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="tags">${tagsHtml}</div>
            <span class="outcome-badge">${p.outcome}</span>
            <button class="view-details-link" data-id="${p.id}">View Details <i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      `;
    });
    grid.innerHTML = html;

    // Attach click listeners to detail buttons
    document.querySelectorAll('.view-details-link').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const id = parseInt(this.dataset.id);
        openDetail(id);
      });
    });

    // Also card click opens detail
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function() {
        const id = parseInt(this.dataset.id);
        openDetail(id);
      });
    });
  }

  // ===== OPEN DETAIL OVERLAY (full project info) =====
  function openDetail(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailDate').textContent = project.date;
    document.getElementById('detailTeam').textContent = project.team;
    document.getElementById('detailStatus').textContent = project.status;
    document.getElementById('detailDesc').textContent = project.fullDesc || project.desc;

    // Benefits
    const benefitsContainer = document.getElementById('detailBenefits');
    const benefitsHtml = project.benefits.map(b => `<span>${b}</span>`).join(' ');
    benefitsContainer.innerHTML = `<strong>✨ Key Outcomes</strong><br>${benefitsHtml}`;

    // Outcome badge
    document.getElementById('detailOutcomeBadge').textContent = `🏆 ${project.outcome}`;

    // Action button
    const actionBtn = document.getElementById('detailAction');
    actionBtn.textContent = '🔗 View Repository →';
    actionBtn.onclick = function() {
      window.open(project.repo || '#', '_blank');
    };

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // ===== CLOSE DETAIL =====
  function closeDetail() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeDetail);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeDetail();
  });

  // ===== MOBILE MENU (MATCHING EVENT PAGE) =====
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
  renderProjects();
})();