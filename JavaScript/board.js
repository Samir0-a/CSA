// ===========================
// MOBILE NAVIGATION (HAMBURGER)
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

});
// ===========================
// THEME TOGGLE FUNCTIONALITY
// ===========================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const navbar = document.querySelector('.navbar');
const body = document.body;
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const sections = document.querySelectorAll('section');

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

// ===========================
// YEAR TAB SWITCHING
// ===========================

const yearTabs = document.querySelectorAll('.year-tab');

yearTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        yearTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get the year from the button text
        const year = this.textContent.trim();
        
        // Show animation effect
        const container = document.querySelector('.container');
        container.style.opacity = '0.5';
        
        setTimeout(() => {
            // Update content based on year
            updateBoardContent(year);
            container.style.opacity = '1';
        }, 300);
    });
});

function updateBoardContent(year) {
    const memberNames = {
        '2024 Board': {
            executives: [
                { name: 'Sagar Ramrudri', 
                    position: 'President', 
                    img: '/CSA/Media/2024 Board/Sagar Ramrudri.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sagar Neupane', 
                    position: 'Executive Vice President', 
                    img: '/CSA/Media/2024 Board/Sagar Neupane.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Deepak Kunwar',
                    position: 'General Secretary', 
                    img: '/CSA/Media/2024 Board/Deepak Kunwar.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sirish Dhakal', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2024 Board/Sirish Dhakal.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Nirdesh Tiwari', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2024 Board/Nirdesh Tiwari.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Bishal Chaudhary', 
                    position: 'Treasurer', 
                    img: '/CSA/Media/2024 Board/Bishal Chaudhary.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sanjay KC', 
                    position: 'Secretary', 
                    img: '/CSA/Media/2024 Board/Sanjay KC.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Ayush Adhikari', 
                    position: 'Project Coordinator', 
                    img: '/CSA/Media/2024 Board/Ayush Adhikari.jpg',
                    facebook:'' ,
                    instagram:''},
                    
                { name: 'Harsita Pokhrel', 
                    position: 'HR Coordinator', 
                    img: '/CSA/Media/2024 Board/Harsita Pokhrel.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Jagadish Poudel', 
                    position: 'Media Coordinator', 
                    img: '/CSA/Media/2024 Board/Jagadish Poudel.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Jagadish Oli', 
                    position: 'Public R. Coodinator', 
                    img: '/CSA/Media/2024 Board/Jagadish Oli.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Nisha Maraseni', 
                    position: 'Event Coordinator', 
                    img: '/CSA/Media/2024 Board/Nisha Maraseni.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sanjay Khadka', 
                    position: 'Sport Coordinator', 
                    img: '/CSA/Media/2024 Board/Sanjay Khadka.jpg',
                    facebook:'' ,
                    instagram:''}
            ]
        },
        '2025 Board': {
            executives: [
                { name: 'Jagadish Oli', 
                    position: 'President', 
                    img: '/CSA/Media/2025 Board/Jagadish Oli.jpg',
                    facebook:'' ,
                    instagram:'' },

                { name: 'Sanjay Khadka', 
                    position: 'Executive Vice President', 
                    img: '/CSA/Media/2025 Board/Sanjay Khadka.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sanjay KC Karki', 
                    position: 'General Secretary', 
                    img: '/CSA/Media/2025 Board/Sanjay kc karki.jpg',
                    facebook:'' ,
                    instagram:''},

                { name: 'Harshita Pokhrel', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2025 Board/Harshita Pokhrel.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Prajwol Acharya', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2025 Board/Prajwol Acharya.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Nirdesh Tiwari', 
                    position: 'Treasurer', 
                    img: '/CSA/Media/2025 Board/Nirdesh Tiwari.jpg',
                    facebook:'' ,
                    instagram:''},

                { name: 'Kamal Bhattarai', 
                    position: 'Training Director', 
                    img: '/CSA/Media/2025 Board/Kamal Bhattarai.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sneha Khadka', 
                    position: 'Secretary', 
                    img: '/CSA/Media/2025 Board/Sneha Khadka.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Hari Saru Magar', 
                    position: 'HR Coordinator', 
                    img: '/CSA/Media/2025 Board/Hari Saru Magar.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Alisha Acharya', 
                    position: 'Media Coordinator', 
                    img: '/CSA/Media/2025 Board/Alisha Acharya.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Muna Dahal', 
                    position: 'Graphic Designer Coordinator', 
                    img: '/CSA/Media/2025 Board/Muna Dahal.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Abhushan Chaudhary', 
                    position: 'Project Coordinator', 
                    img: '/CSA/Media/2025 Board/Abhushan Chaudhary.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Suyog Adhikari', 
                    position: 'Public R. Coordinator', 
                    img: '/CSA/Media/2025 Board/Suyog Adhikari.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Bipin Khanal', 
                    position: 'Event Coordinator', 
                    img: '/CSA/Media/2025 Board/Bipin Khanal.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Saurav Puri', 
                    position: 'Sport Coordinator', 
                    img: '/CSA/Media/2025 Board/Saurav Puri.jpg', 
                    facebook:'' ,
                    instagram:''}
            ]
        },
        '2026 Board': {
            executives: [
                { name: 'Jagadish Oli', 
                    position: 'IPP', 
                    img: '/CSA/Media/2026 Board/Jagadish Oli.jpg',
                    facebook:'' ,
                    instagram:''},

                { name: 'Nirdesh Tiwari',
                     position: 'President', 
                     img: '/CSA/Media/2026 Board/nirdesh.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Suyog Adhikari',
                     position: 'Executive Vice President', 
                     img: '/CSA/Media/2026 Board/Suyog Adhikari.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Jivan Sharma', 
                    position: 'General Secretary', 
                    img: '/CSA/Media/2026 Board/Jivan Sharma.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Sandesh Khadka', 
                    position: 'Treasurer', 
                    img: '/CSA/Media/2026 Board/Sandesh Khadka.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Ashma Malla', 
                    position: 'Training Director', 
                    img: '/CSA/Media/2026 Board/Ashma Malla.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Niruta Acharya', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2026 Board/Niruta Acharya.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Hari Saru Magar', 
                    position: 'Vice President', 
                    img: '/CSA/Media/2026 Board/Hari Saru Magar.jpg',
                    facebook:'' ,
                    instagram:'' },

                { name: 'Samyog Adhikari', 
                    position: 'Secretary', 
                    img: '/CSA/Media/2026 Board/Samyog Adhikari.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Ganga Kunwor', 
                    position: 'HR Coordinator', 
                    img: '/CSA/Media/2026 Board/Ganga Kunwor.jpg',
                    facebook:'' ,
                    instagram:'' },

                { name: 'Bhuwan Oli', 
                    position: 'Media Coordinator', 
                    img: '/CSA/Media/2026 Board/Bhuwan Oli.jpg',
                    facebook:'' ,
                    instagram:''},

                { name: 'Alisha Acharya', 
                    position: 'Event Coordinator', 
                    img: '/CSA/Media/2026 Board/Alisha Acharya.jpg',
                    facebook:'' ,
                    instagram:'' },

                { name: 'Saurav Puri', 
                    position: 'Project Coordinator', 
                    img: '/CSA/Media/2026 Board/Saurav Puri.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Yashoda Poudel', 
                    position: 'Public R. Coordinator', 
                    img: '/CSA/Media/2026 Board/Yashoda Poudel.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Santosh Poudel', 
                    position: 'Sport Coordinator', 
                    img: '/CSA/Media/2026 Board/Santosh Adhikari.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Preeti Chaudhary', 
                    position: 'Graphic Designer Coordinator', 
                    img: '/CSA/Media/2026 Board/Preeti Chaudhary.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Deena Budhathoki', 
                    position: 'Innovation & Strategy Coordinator', 
                    img: '/CSA/Media/2026 Board/Deena Budhathoki.jpg', 
                    facebook:'' ,
                    instagram:''},

                { name: 'Anmol Poudel', 
                    position: 'Technical Supporter Coordinator', 
                    img: '/CSA/Media/2026 Board/Anmol Poudel.jpg', 
                    facebook:'' ,
                    instagram:''}
            ]
        }
    };

                const memberCards = document.querySelectorAll('.member-card');
                if (memberNames[year]) {
                const executives = memberNames[year].executives;

                memberCards.forEach((card, index) => {
                if (index < executives.length) {
                const nameEl      = card.querySelector('.member-name');
                const posEl       = card.querySelector('.member-position');
                const imgEl       = card.querySelector('.member-image img');
                const fbLink      = card.querySelector('.member-socials a[data-social="facebook"]');
                const liLink      = card.querySelector('.member-socials a[data-social="linkedin"]');
                const igLink      = card.querySelector('.member-socials a[data-social="instagram"]');

                if (nameEl) nameEl.textContent = executives[index].name;
                if (posEl)  posEl.textContent  = executives[index].position;
                if (imgEl)  imgEl.src          = executives[index].img;

                // Update social links
                if (fbLink) fbLink.href = executives[index].facebook || '#';
                if (liLink) liLink.href = executives[index].linkedin || '#';
                if (igLink) igLink.href = executives[index].instagram || '#';
                } else {
                card.style.display = 'none';
            }
        });
    }
}

// ===========================
// SMOOTH SCROLLING
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// NAVBAR EFFECTS ON SCROLL
// ===========================

const navBar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow to navbar on scroll
    if (scrollTop > 50) {
        navBar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navBar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// ===========================
// MEMBER CARD INTERACTIONS
// ===========================

const memberCards = document.querySelectorAll('.member-card');

memberCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
});


// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    // Toggle theme with keyboard shortcut (Alt + T)
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
    
    // Navigate year tabs with arrow keys
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeTab = document.querySelector('.year-tab.active');
        const allTabs = Array.from(document.querySelectorAll('.year-tab'));
        const currentIndex = allTabs.indexOf(activeTab);
        
        let nextIndex;
        if (e.key === 'ArrowLeft') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : allTabs.length - 1;
        } else {
            nextIndex = currentIndex < allTabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        allTabs[nextIndex].click();
    }
});

// ===========================
// PAGE LOAD ANIMATIONS
// ===========================

window.addEventListener('load', () => {
    // Fade in member cards on load
    const cards = document.querySelectorAll('.member-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards`;
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    
    /* Dark Mode Styles */
    [data-theme="dark"] body {
        background: #0a0e27;
        color: #e0e0e0;
    }
    
    [data-theme="dark"] .navbar {
        background: #0f1626;
    }
    
    [data-theme="dark"] .header {
        background: linear-gradient(135deg, #1a2a4e 0%, #2a3a5e 100%);
    }
    
    [data-theme="dark"] .section {
        background: #1a1f3a;
    }
    
    [data-theme="dark"] .member-card {
        background: #1a2a4e;
        color: #e0e0e0;
    }
    
    [data-theme="dark"] .member-name {
        color: #e0e0e0;
    }
    
    [data-theme="dark"] .member-position {
        color: #a0a0a0;
    }
    
    [data-theme="dark"] .section-title {
        color: #e0e0e0;
    }
    
    [data-theme="dark"] .achievements {
        background: linear-gradient(135deg, #1a2a4e 0%, #2a3a5e 100%);
    }
`;
document.head.appendChild(style);

// ===========================
// INITIALIZATION
// ===========================

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Add smooth transitions to all elements
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Board.js loaded successfully');
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}