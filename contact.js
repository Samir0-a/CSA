/**
 * CSA Contact Page - Main JavaScript File
 * Handles: Form validation, Theme toggle, Interactions, Navigation
 */

// ========================================
// DOM Elements
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.querySelector('form');
const formInputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
};
const joinBtn = document.querySelector('.join-btn');

// ========================================
// THEME TOGGLE FUNCTIONALITY
// ========================================

/**
 * Set the theme and update icon/localStorage
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
}
// ========================================
// FORM VALIDATION
// ========================================

/**
 * Validate email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate form inputs
 */
function validateForm() {
    const errors = {};

    // Validate name
    if (!formInputs.name.value.trim()) {
        errors.name = 'Name is required';
        formInputs.name.classList.add('error');
    } else if (formInputs.name.value.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
        formInputs.name.classList.add('error');
    } else {
        formInputs.name.classList.remove('error');
    }

    // Validate email
    if (!formInputs.email.value.trim()) {
        errors.email = 'Email is required';
        formInputs.email.classList.add('error');
    } else if (!validateEmail(formInputs.email.value.trim())) {
        errors.email = 'Please enter a valid email address';
        formInputs.email.classList.add('error');
    } else {
        formInputs.email.classList.remove('error');
    }

    // Validate subject
    if (!formInputs.subject.value.trim()) {
        errors.subject = 'Subject is required';
        formInputs.subject.classList.add('error');
    } else if (formInputs.subject.value.trim().length < 3) {
        errors.subject = 'Subject must be at least 3 characters';
        formInputs.subject.classList.add('error');
    } else {
        formInputs.subject.classList.remove('error');
    }

    // Validate message
    if (!formInputs.message.value.trim()) {
        errors.message = 'Message is required';
        formInputs.message.classList.add('error');
    } else if (formInputs.message.value.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
        formInputs.message.classList.add('error');
    } else {
        formInputs.message.classList.remove('error');
    }

    return { isValid: Object.keys(errors).length === 0, errors };
}

/**
 * Display validation errors
 */
function displayErrors(errors) {
    // Remove previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Display new error messages
    Object.keys(errors).forEach(fieldName => {
        const field = formInputs[fieldName];
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errors[fieldName];
        errorDiv.style.cssText = `
            color: #e74c3c;
            font-size: 12px;
            margin-top: 4px;
            display: block;
        `;
        field.parentElement.appendChild(errorDiv);
    });
}

// ========================================
// FORM SUBMISSION
// ========================================

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form
    const { isValid, errors } = validateForm();

    if (!isValid) {
        displayErrors(errors);
        console.log('Form validation failed:', errors);
        return;
    }

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Get form data
    const formData = {
        name: formInputs.name.value.trim(),
        email: formInputs.email.value.trim(),
        subject: formInputs.subject.value.trim(),
        message: formInputs.message.value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-send');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Option 1: Send to backend (uncomment when ready)
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        */

        // Option 2: Store in localStorage (for demo)
        saveFormDataLocally(formData);

        // Show success message
        showSuccessMessage(formData.name);

        // Reset form
        contactForm.reset();
        
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        console.log('Form submitted successfully:', formData);

    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error sending message. Please try again.');
        
        // Restore button
        const submitBtn = contactForm.querySelector('.btn-send');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
}

/**
 * Save form data to localStorage
 */
function saveFormDataLocally(data) {
    const existingData = JSON.parse(localStorage.getItem('contactMessages')) || [];
    existingData.push(data);
    localStorage.setItem('contactMessages', JSON.stringify(existingData));
    console.log('Message saved locally:', data);
}

/**
 * Show success message
 */
function showSuccessMessage(name) {
    // Create success alert
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            max-width: 400px;
        ">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle" style="font-size: 20px;"></i>
                <div>
                    <strong>Success!</strong>
                    <p style="margin: 4px 0 0 0; font-size: 14px;">
                        Thank you ${name}! Your message has been sent. We'll get back to you soon.
                    </p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(successDiv);

    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

// ========================================
// FORM INTERACTIONS
// ========================================

/**
 * Add focus effects to form inputs
 */
function setupFormInteractions() {
    Object.values(formInputs).forEach(input => {
        // Add focus event
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        // Add blur event
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });

        // Real-time validation
        input.addEventListener('input', function() {
            validateForm();
        });

        // Remove error class on input
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
}

// ========================================
// NAVIGATION
// ========================================

/**
 * Highlight active nav link based on current page
 */
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
            link.style.color = '#4a9eff';
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Handle smooth scrolling for nav links
 */
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for same-page links
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ========================================
// BUTTON INTERACTIONS
// ========================================

/**
 * Setup join button functionality
 */
function setupJoinButton() {
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            alert('Join functionality coming soon! Please check back later.');
            // You can replace this with actual join functionality
        });

        // Add hover effect
        joinBtn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px #2563eb, 0 0 30px #2563eb';
        });

        joinBtn.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Log page analytics
 */
function logPageView() {
    console.log(`Page loaded: Contact Page`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log(`User Agent: ${navigator.userAgent}`);
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// ADD CSS ANIMATIONS
// ========================================

function injectStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
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

        .form-group.focused label {
            color: #4a9eff;
        }

        .form-group input.error,
        .form-group textarea.error {
            border-color: #e74c3c;
            background-color: #fadbd8;
        }

        .error-message {
            animation: slideIn 0.3s ease-out;
        }

        @media (max-width: 768px) {
            .success-message {
                position: fixed !important;
                left: 10px !important;
                right: 10px !important;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page initialized');

    // Theme
    initializeTheme();
    themeToggle.addEventListener('click', toggleTheme);

    // Form
    contactForm.addEventListener('submit', handleFormSubmit);
    setupFormInteractions();

    // Navigation
    highlightActiveNav();
    setupNavigation();

    // Buttons
    setupJoinButton();

    // Inject CSS animations
    injectStyles();

    // Analytics
    logPageView();

    console.log('All scripts loaded successfully');
});

// ========================================
// RETRIEVE SAVED MESSAGES (FOR DEBUGGING)
// ========================================

/**
 * Get all saved contact messages from localStorage
 * Usage: getSavedMessages() in console
 */
function getSavedMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    console.table(messages);
    return messages;
}

/**
 * Clear all saved messages
 * Usage: clearSavedMessages() in console
 */
function clearSavedMessages() {
    localStorage.removeItem('contactMessages');
    console.log('All saved messages cleared');
}

// ========================================
// EXPORT FUNCTIONS (for use in console)
// ========================================

window.ContactPageUtils = {
    getSavedMessages,
    clearSavedMessages,
    scrollToTop,
    toggleTheme
};