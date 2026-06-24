// ===========================
// MOBILE NAVIGATION (HAMBURGER)
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');


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

// Function to update board content based on selected year
function updateBoardContent(year) {
    const memberNames = {
        '2024 Board': {
            executives: [
                { name: 'Rahul Singh', position: 'President' },
                { name: 'Priya Sharma', position: 'Vice President' },
                { name: 'Aditya Kumar', position: 'Secretary' },
                { name: 'Neha Patel', position: 'Treasurer' }
            ]
        },
        '2025 Board': {
            executives: [
                { name: 'Rohit Choudhary', position: 'President' },
                { name: 'Anjali Thapa', position: 'Vice President' },
                { name: 'Manoj Yadav', position: 'Secretary' },
                { name: 'Sushmita GC', position: 'Treasurer' }
            ]
        },
        '2026 Board': {
            executives: [
                { name: 'Jagadish Oli', position: 'IPP' },
                { name: 'Nirdesh Tiwari', position: 'President' },
                { name: 'Suyog Adhikari', position: 'Executive Vice President' },
                { name: 'Jivan Sharma', position: 'General Secretary' },
                { name: 'Sandesh Khadka', position: 'Treasurer' },
                { name: 'Ashma Malla', position: 'Training Director' },
                { name: 'Niruta Acharya', position: 'Vice President' },
                { name: 'Hari Saru Magar', position: 'Vice President' },
                { name: 'Samyog Adhikari', position: 'Secretary' },
                { name: 'Ganga Kunwor', position: 'H.R Coordinator' },
                { name: 'Bhuwan Oli', position: 'Media Coordinator' },
                { name: 'Alisha Acharya', position: 'Event Coordinator' },
                { name: 'Saurav Puri', position: 'Project Coordinator' },
                { name: 'Yashoda Poudel', position: 'Public Related Coordinator' },
                { name: 'Santosh Adhikari', position: 'Sport Coordinator' },
                { name: 'Preeti Chaudhary', position: 'Graphic Designer Coordinator' },
                { name: 'Deena Budhathoki', position: 'Innovation & Strategy Coordinator' },
                { name: 'Anmol Poudel', position: 'Technical Supporter Coordinator' },
            ]
        }
    };

    // Update member cards with new data
    const memberCards = document.querySelectorAll('.member-card');
    if (memberNames[year]) {
        const executives = memberNames[year].executives;
        
        // Update executive members (first 4 cards)
        memberCards.forEach((card, index) => {
            if (index < executives.length) {
                const nameElement = card.querySelector('.member-name');
                const positionElement = card.querySelector('.member-position');
                
                if (nameElement && positionElement) {
                    nameElement.textContent = executives[index].name;
                    positionElement.textContent = executives[index].position;
                }
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
    
    .nav-links a.active {
        color: #4da6ff;
        border-bottom: 3px solid #4da6ff;
        padding-bottom: 5px;
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