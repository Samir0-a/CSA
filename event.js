// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function setTheme(theme){
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    const current = htmlElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

setTheme(localStorage.getItem('theme') || 'light');

// TAB SWITCHING (Upcoming / Past)
const eventTabs = document.querySelectorAll('.event-tab');

eventTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        eventTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const type = tab.dataset.type;

        document.querySelectorAll('.event-card').forEach(card => {
            card.style.display = card.classList.contains(type) ? 'flex' : 'none';
        });
    });
});

// JOIN BUTTON
const joinBtn = document.querySelector('.join-btn');
joinBtn.addEventListener('click', () => {
    alert('Thank you for your interest!');
});