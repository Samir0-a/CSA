// ===== EVENT DATA =====
const events = [
    {
        id: 1,
        title: 'Web Development Competition',
        date: '2026-06-15',
        time: '09:00 AM',
        venue: 'MMC Dang',
        desc: 'CSA website ',
        benefits: ['Skill development', 'Networking', 'Recognition', 'Prizes'],
        type: 'upcoming',
        registrationUrl: 'https://forms.gle/YOUR_HACKATHON_FORM_LINK'  // ← Form link
    },
    {
        id: 2,
        title: 'Python Workshop',
        date: '2026-06-10',
        time: '10:00 AM',
        venue: 'MMC Dang',
        desc: 'Hands-on Python for beginners. Learn basics, functions, and mini-projects.',
        benefits: ['Skill development', 'Networking', 'Certificate'],
        type: 'upcoming',
        registrationUrl: 'https://forms.gle/YOUR_PYTHON_FORM_LINK'     // ← Form link
    },
    {
        id: 3,
        title: 'Web Dev Bootcamp',
        date: '2026-06-25',
        time: '01:00 PM',
        venue: 'MMC Dang',
        desc: 'Modern web development: HTML, CSS, JavaScript, React basics.',
        benefits: ['Skill development', 'Project building', 'Recognition'],
        type: 'upcoming',
        registrationUrl: 'https://forms.gle/YOUR_WEBDEV_FORM_LINK'     // ← replace with your Google Form URL
    },
    {
        id: 4,
        title: 'AI & Future Tech Talk',
        date: '2026-07-05',
        time: '11:00 AM',
        venue: 'MMC Dang',
        desc: 'Exploring AI trends, ethics, and career opportunities with industry experts.',
        benefits: ['Networking', 'Industry insights', 'Recognition'],
        type: 'upcoming',
        registrationUrl: 'https://forms.gle/YOUR_AI_FORM_LINK'         // ← replace with your Google Form URL
    },
    {
        id: 5,
        title: 'Seminar: Cloud Computing',
        date: '2026-07-20',
        time: '02:00 PM',
        venue: 'MMC Dang',
        desc: 'Deep dive into cloud architecture, AWS, Azure, and career paths in cloud.',
        benefits: ['Skill development', 'Networking', 'Industry insights'],
        type: 'upcoming',
        registrationUrl: 'https://forms.gle/YOUR_CLOUD_FORM_LINK'      // ← replace with your Google Form URL
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

document.addEventListener('DOMContentLoaded', function () {

    // ===== DOM REFS =====
    const eventsList   = document.getElementById('eventsList');
    const detailOverlay = document.getElementById('detailOverlay');
    const closeDetail  = document.getElementById('closeDetail');

    // ===== RENDER EVENTS =====
    function renderEvents(filterType) {
        if (!eventsList) return;

        const filtered = filterType === 'all'
            ? events
            : events.filter(e => e.type === filterType);

        if (filtered.length === 0) {
            eventsList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar-plus"></i>
                    <p>No ${filterType} events available.</p>
                </div>`;
            return;
        }

        eventsList.innerHTML = filtered.map(ev => {
            const dateObj = new Date(ev.date);
            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
            const day   = dateObj.getDate();
            const benefitsHTML = ev.benefits.map(b => `<span>${b}</span>`).join('');

            return `
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
                    <div class="benefits-badge">${benefitsHTML}</div>
                    <span class="action-link view-detail" data-id="${ev.id}">
                        ${ev.type === 'upcoming' ? 'Register Now →' : 'View Details →'}
                    </span>
                </div>
            </div>`;
        }).join('');

        // Attach click handlers to all "view detail / register" links
        document.querySelectorAll('.view-detail').forEach(el => {
            el.addEventListener('click', function (e) {
                e.stopPropagation();
                const id = parseInt(this.dataset.id);
                const ev = events.find(e => e.id === id);
                // Upcoming events with a Google Form → open it directly
                if (ev && ev.type === 'upcoming' && ev.registrationUrl) {
                    window.open(ev.registrationUrl, '_blank');
                } else {
                    openDetail(id);
                }
            });
        });
    }

    // ===== OPEN DETAIL OVERLAY =====
    function openDetail(id) {
        const ev = events.find(e => e.id === id);
        if (!ev) return;

        document.getElementById('detailTitle').textContent  = ev.title;
        document.getElementById('detailDate').innerHTML     = `<i class="far fa-calendar-alt"></i> ${ev.date}`;
        document.getElementById('detailTime').innerHTML     = `<i class="far fa-clock"></i> ${ev.time}`;
        document.getElementById('detailVenue').innerHTML    = `<i class="fas fa-map-pin"></i> ${ev.venue}`;
        document.getElementById('detailDesc').textContent   = ev.desc;
        document.getElementById('detailBenefits').innerHTML =
            `<strong>✨ Benefits</strong><br>` +
            ev.benefits.map(b => `<span>${b}</span>`).join('');

        const registerBtn = document.getElementById('detailRegister');
        if (ev.type === 'upcoming') {
            registerBtn.style.display = 'block';
            registerBtn.textContent = 'Register Now →';
            registerBtn.onclick = function () {
                if (ev.registrationUrl) {
                    window.open(ev.registrationUrl, '_blank');
                } else {
                    // Fallback: redirect to local registration page with event details
                    const params = new URLSearchParams({
                        event: ev.title,
                        date:  ev.date,
                        time:  ev.time,
                        venue: ev.venue,
                        id:    ev.id
                    });
                    window.location.href = 'event-registration.html?' + params.toString();
                }
            };
        } else {
            registerBtn.textContent = '📋 Past Event Summary';
            registerBtn.onclick = null;
        }

        detailOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // ===== CLOSE DETAIL OVERLAY =====
    function closeDetailHandler() {
        detailOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeDetail.addEventListener('click', closeDetailHandler);
    detailOverlay.addEventListener('click', function (e) {
        if (e.target === detailOverlay) closeDetailHandler();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDetailHandler();
    });

    // ===== EVENT TABS =====
    const tabs = document.querySelectorAll('.event-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderEvents(this.dataset.type);
        });
    });

    // ===== MINI CALENDAR =====
    let calDate = new Date();
    const calMonthYear = document.getElementById('calMonthYear');
    const calDays      = document.getElementById('calDays');
    const calPrev      = document.getElementById('calPrev');
    const calNext      = document.getElementById('calNext');
    const todayStr     = new Date().toISOString().slice(0, 10);

    function renderCalendar() {
        const year  = calDate.getFullYear();
        const month = calDate.getMonth();

        calMonthYear.textContent = calDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        const firstDay    = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startOffset = firstDay === 0 ? 6 : firstDay - 1;

        let html = '';
        for (let i = 0; i < startOffset; i++) html += '<div></div>';

        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = new Date(year, month, d).toISOString().slice(0, 10);
            const isToday    = dateStr === todayStr;
            const hasEvent   = events.some(e => e.date === dateStr);
            let cls = '';
            if (isToday)  cls += ' today';
            if (hasEvent) cls += ' event-day';
            html += `<div class="${cls.trim()}">${d}</div>`;
        }

        calDays.innerHTML = html;
    }

    calPrev.addEventListener('click', function () {
        calDate.setMonth(calDate.getMonth() - 1);
        renderCalendar();
    });
    calNext.addEventListener('click', function () {
        calDate.setMonth(calDate.getMonth() + 1);
        renderCalendar();
    });

    // ===== SUBSCRIBE =====
    document.getElementById('subscribeBtn').addEventListener('click', function () {
        const email = document.getElementById('subscribeEmail').value.trim();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('📧 Subscribed successfully: ' + email);
            document.getElementById('subscribeEmail').value = '';
        } else {
            alert('⚠️ Please enter a valid email address.');
        }
    });

    // ===== INIT =====
    renderEvents('upcoming');
    renderCalendar();
});