(function() {
    // ===== EVENT DATA =====
    let events = [
        {
            id: 1,
            title: 'Hackathon 2026',
            date: '2026-06-15',
            time: '09:00 AM',
            venue: 'MMC Dang',
            desc: '24-hour coding marathon. Build innovative solutions, compete with peers, and win exciting prizes.',
            benefits: ['Skill development', 'Networking', 'Recognition', 'Prizes'],
            type: 'upcoming'
        },
        {
            id: 2,
            title: 'Python Workshop',
            date: '2026-06-10',
            time: '10:00 AM',
            venue: 'MMC Dang',
            desc: 'Hands-on Python for beginners. Learn basics, functions, and mini-projects.',
            benefits: ['Skill development', 'Networking', 'Certificate'],
            type: 'upcoming'
        },
        {
            id: 3,
            title: 'Web Dev Bootcamp',
            date: '2026-06-25',
            time: '01:00 PM',
            venue: 'MMC Dang',
            desc: 'Modern web development: HTML, CSS, JavaScript, React basics.',
            benefits: ['Skill development', 'Project building', 'Recognition'],
            type: 'upcoming'
        },
        {
            id: 4,
            title: 'AI & Future Tech Talk',
            date: '2026-07-05',
            time: '11:00 AM',
            venue: 'MMC Dang',
            desc: 'Exploring AI trends, ethics, and career opportunities with industry experts.',
            benefits: ['Networking', 'Industry insights', 'Recognition'],
            type: 'upcoming'
        },
        {
            id: 5,
            title: 'Seminar: Cloud Computing',
            date: '2026-07-20',
            time: '02:00 PM',
            venue: 'MMC Dang',
            desc: 'Deep dive into cloud architecture, AWS, Azure, and career paths in cloud.',
            benefits: ['Skill development', 'Networking', 'Industry insights'],
            type: 'upcoming'
        },
        {
            id: 6,
            title: 'Hackathon 2025',
            date: '2025-03-15',
            time: '09:00 AM',
            venue: 'MMC Dang',
            desc: '24-hour coding marathon. 50+ teams participated. Winners received cash prizes.',
            benefits: ['Skill development', 'Networking', 'Recognition', 'Prizes'],
            type: 'past'
        },
        {
            id: 7,
            title: 'UI/UX Design Workshop',
            date: '2025-02-20',
            time: '02:00 PM',
            venue: 'MMC Dang',
            desc: 'Design thinking, Figma, prototyping, and user research techniques.',
            benefits: ['Skill development', 'Portfolio building', 'Networking'],
            type: 'past'
        },
        {
            id: 8,
            title: 'Orientation Program',
            date: '2025-01-10',
            time: '10:00 AM',
            venue: 'MMC Dang',
            desc: 'Welcome new CSA members. Introduction to committees and annual events.',
            benefits: ['Networking', 'Community building', 'Recognition'],
            type: 'past'
        },
        {
            id: 9,
            title: 'AI/ML Workshop',
            date: '2025-04-05',
            time: '11:00 AM',
            venue: 'MMC Dang',
            desc: 'Introduction to Machine Learning, Neural Networks, and real-world applications.',
            benefits: ['Skill development', 'Networking', 'Certificate'],
            type: 'past'
        }
    ];

    // ===== DOM REFS =====
    const eventsList = document.getElementById('eventsList');
    const detailOverlay = document.getElementById('detailOverlay');
    const closeDetail = document.getElementById('closeDetail');

    // ===== RENDER EVENTS =====
    function renderEvents(filterType) {
        if (!eventsList) return;

        let filtered = events;
        
        if (filterType === 'upcoming') {
            filtered = filtered.filter(e => e.type === 'upcoming');
        } else if (filterType === 'past') {
            filtered = filtered.filter(e => e.type === 'past');
        }

        if (filtered.length === 0) {
            eventsList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar-plus"></i>
                    <p>No ${filterType} events available.</p>
                </div>
            `;
            return;
        }

        let html = '';
        filtered.forEach(ev => {
            const dateObj = new Date(ev.date);
            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
            const day = dateObj.getDate();
            const benefitsStr = ev.benefits.map(b => `<span>${b}</span>`).join(' ');

            html += `
                <div class="event-card ${ev.type}" data-id="${ev.id}">
                    <div class="date-box">
                        <span>${month}</span>
                        <h2>${day}</h2>
                    </div>
                    <div class="event-content">
                        <h3>${ev.title}</h3>
                        <div class="meta">
                            <span><i class="far fa-calendar-alt"></i> ${ev.date}</span>
                            <span><i class="far fa-clock"></i> ${ev.time}</span>
                            <span><i class="fas fa-map-pin"></i> ${ev.venue}</span>
                        </div>
                        <p class="desc">${ev.desc}</p>
                        <div class="benefits-badge">${benefitsStr}</div>
                        <span class="action-link view-detail" data-id="${ev.id}">
                            ${ev.type === 'upcoming' ? 'Register Now →' : 'View Details →'}
                        </span>
                    </div>
                </div>
            `;
        });

        eventsList.innerHTML = html;

        document.querySelectorAll('.view-detail').forEach(el => {
            el.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = parseInt(this.dataset.id);
                openDetail(id);
            });
        });
    }

    // ===== OPEN DETAIL =====
    function openDetail(id) {
        const ev = events.find(e => e.id === id);
        if (!ev) return;

        document.getElementById('detailTitle').textContent = ev.title;
        document.getElementById('detailDate').innerHTML = `<i class="far fa-calendar-alt"></i> ${ev.date}`;
        document.getElementById('detailTime').innerHTML = `<i class="far fa-clock"></i> ${ev.time}`;
        document.getElementById('detailVenue').innerHTML = `<i class="fas fa-map-pin"></i> ${ev.venue}`;
        document.getElementById('detailDesc').textContent = ev.desc;

        const benefitHtml = ev.benefits.map(b => `<span>${b}</span>`).join(' ');
        document.getElementById('detailBenefits').innerHTML = `<strong>✨ Benefits</strong><br>${benefitHtml}`;

        const registerBtn = document.getElementById('detailRegister');
        if (ev.type === 'upcoming') {
            registerBtn.textContent = 'Register Now →';
            // ===== LINK TO REGISTRATION PAGE WITH FULL EVENT DATA =====
            registerBtn.onclick = function() {
                const params = new URLSearchParams({
                    event: ev.title,
                    date: ev.date,
                    time: ev.time,
                    venue: ev.venue,
                    id: ev.id
                });
                window.location.href = 'event-registration.html?' + params.toString();
            };
        } else {
            registerBtn.textContent = '📋 View Past Event';
            registerBtn.onclick = function() {
                // Show past event details
                alert('📋 Past Event Details:\n\n' + 
                      'Title: ' + ev.title + '\n' +
                      'Date: ' + ev.date + '\n' +
                      'Time: ' + ev.time + '\n' +
                      'Venue: ' + ev.venue + '\n\n' +
                      'Description: ' + ev.desc + '\n\n' +
                      'Benefits: ' + ev.benefits.join(', '));
            };
        }

        detailOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // ===== CLOSE DETAIL =====
    function closeDetailHandler() {
        detailOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeDetail.addEventListener('click', closeDetailHandler);
    detailOverlay.addEventListener('click', function(e) {
        if (e.target === detailOverlay) closeDetailHandler();
    });

    // ===== TABS =====
    const tabs = document.querySelectorAll('.event-tab');
    let currentTab = 'upcoming';

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentTab = this.dataset.type;
            renderEvents(currentTab);
        });
    });

    // ===== MINI CALENDAR =====
    let calDate = new Date();
    const calMonthYear = document.getElementById('calMonthYear');
    const calDays = document.getElementById('calDays');
    const calPrev = document.getElementById('calPrev');
    const calNext = document.getElementById('calNext');

    function renderCalendar() {
        const year = calDate.getFullYear();
        const month = calDate.getMonth();

        calMonthYear.textContent = calDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let html = '';
        let startOffset = (firstDay === 0) ? 6 : firstDay - 1;

        for (let i = 0; i < startOffset; i++) {
            html += '<div></div>';
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const dateObj = new Date(year, month, d);
            const dateStr = dateObj.toISOString().slice(0, 10);
            const isToday = dateStr === new Date().toISOString().slice(0, 10);
            const hasEvent = events.some(e => e.date === dateStr);

            let cls = '';
            if (isToday) cls += ' today';
            if (hasEvent) cls += ' event-day';

            html += `<div class="${cls}">${d}</div>`;
        }

        calDays.innerHTML = html;
    }

    calPrev.addEventListener('click', function() {
        calDate.setMonth(calDate.getMonth() - 1);
        renderCalendar();
    });

    calNext.addEventListener('click', function() {
        calDate.setMonth(calDate.getMonth() + 1);
        renderCalendar();
    });

    // ===== SUBSCRIBE =====
    document.getElementById('subscribeBtn').addEventListener('click', function() {
        const email = document.getElementById('subscribeEmail').value.trim();
        if (email) {
            alert('📧 Subscribed successfully: ' + email);
            document.getElementById('subscribeEmail').value = '';
        } else {
            alert('⚠️ Please enter your email address.');
        }
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
    renderEvents('upcoming');
    renderCalendar();
})();