// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Mobile dropdown functionality
if (dropdown) {
    const dropdownLink = dropdown.querySelector('.nav-link');
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrapper') && navMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            if (navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    // Hide/show navbar on scroll (optional)
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ============================================
// SCROLL ANIMATIONS FOR SECTIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});

// ============================================
// COUNTER ANIMATION FOR STATISTICS
// ============================================
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ============================================
// PRODUCT CARD HOVER EFFECTS
// ============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(2deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ============================================
// ADD TO CART ANIMATION - REMOVED TO ALLOW REDIRECT
// ============================================
// const addToCartBtns = document.querySelectorAll('.btn-add');

// addToCartBtns.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         e.preventDefault();

//         // Create ripple effect
//         const ripple = document.createElement('span');
//         ripple.style.cssText = `
//             position: absolute;
//             width: 20px;
//             height: 20px;
//             background: rgba(255,255,255,0.7);
//             border-radius: 50%;
//             animation: ripple 0.6s ease-out;
//             pointer-events: none;
//         `;

//         const rect = this.getBoundingClientRect();
//         ripple.style.left = (e.clientX - rect.left - 10) + 'px';
//         ripple.style.top = (e.clientY - rect.top - 10) + 'px';

//         this.style.position = 'relative';
//         this.appendChild(ripple);

//         // Change button text temporarily
//         const originalText = this.textContent;
//         this.textContent = '✓ Added!';
//         this.style.background = '#27ae60';

//         setTimeout(() => {
//             this.textContent = originalText;
//             this.style.background = '';
//             ripple.remove();
//         }, 1500);
//     });
// });

// Add animations to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content, .hero-content-center');
        const heroImage = hero.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled * 0.002);
        }
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ============================================
// FLOATING CARDS RANDOM MOVEMENT
// ============================================
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    setInterval(() => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomX}deg)`;
    }, 2000 + index * 500);
});

// ============================================
// NEWSLETTER FORM SUBMISSION
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterLink = document.querySelector('.newsletter-form .btn');

if (newsletterLink) {
    newsletterLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = newsletterInput.value.trim();
        
        if (!email) {
            // Show error for empty email
            newsletterInput.style.border = '2px solid #e74c3c';
            newsletterInput.placeholder = 'Please enter your email';
            setTimeout(() => {
                newsletterInput.style.border = '';
                newsletterInput.placeholder = 'Enter your email address';
            }, 2000);
            return;
        }
        
        if (!validateEmail(email)) {
            // Show error for invalid email
            newsletterInput.style.border = '2px solid #e74c3c';
            newsletterInput.value = '';
            newsletterInput.placeholder = 'Please enter a valid email';
            setTimeout(() => {
                newsletterInput.style.border = '';
                newsletterInput.placeholder = 'Enter your email address';
            }, 2000);
            return;
        }
        
        // Email is valid, redirect to 404.html
        window.location.href = '404.html';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
const contactForm = document.querySelector('.contact-form');
const contactLink = document.querySelector('.contact-form .btn');

if (contactLink) {
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('.form-input');
        let isValid = true;
        let firstInvalidInput = null;
        
        inputs.forEach(input => {
            const value = input.value.trim();
            
            if (!value) {
                input.style.border = '2px solid #e74c3c';
                if (!firstInvalidInput) firstInvalidInput = input;
                isValid = false;
            } else {
                input.style.border = '';
                
                // Additional validation for email
                if (input.type === 'email' && !validateEmail(value)) {
                    input.style.border = '2px solid #e74c3c';
                    if (!firstInvalidInput) firstInvalidInput = input;
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            // Focus on first invalid input
            if (firstInvalidInput) {
                firstInvalidInput.focus();
            }
            return;
        }
        
        // All fields are valid, redirect to 404.html
        window.location.href = '404.html';
    });
}

// ============================================
// GALLERY ITEM LIGHTBOX EFFECT
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            animation: fadeIn 0.3s ease-out;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            font-size: 15rem;
            animation: zoomIn 0.3s ease-out;
        `;
        content.textContent = this.textContent;
        
        lightbox.appendChild(content);
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        lightbox.addEventListener('click', () => {
            lightbox.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
            }, 300);
        });
    });
});

// ============================================
// CATEGORY CARD RIPPLE EFFECT
// ============================================
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            width: 10px;
            height: 10px;
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 5) + 'px';
        ripple.style.top = (e.clientY - rect.top - 5) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// TESTIMONIAL CARDS SLIDER EFFECT
// ============================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function highlightTestimonial() {
    testimonialCards.forEach((card, index) => {
        if (index === currentTestimonial) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 40px rgba(46, 204, 113, 0.3)';
        } else {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Auto-highlight testimonials every 3 seconds
if (testimonialCards.length > 0) {
    setInterval(highlightTestimonial, 3000);
}

// ============================================
// PARTNERS LOGO ANIMATION
// ============================================
const partnerLogos = document.querySelectorAll('.partner-logo');

partnerLogos.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.2}s`;
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(360deg)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// ============================================
// CURSOR TRAIL EFFECT (Optional)
// ============================================
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: rgba(46, 204, 113, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: fadeOut 0.5s ease-out forwards;
        `;
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        document.body.appendChild(trail);
        cursorTrail.push(trail);
        
        if (cursorTrail.length > trailLength) {
            const oldTrail = cursorTrail.shift();
            oldTrail.remove();
        }
        
        setTimeout(() => trail.remove(), 500);
    }
});

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// CONSOLE LOG
// ============================================
console.log('%c Welcome to Stackly! ', 'background: #2ecc71; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Crafted with ❤️ by SuperAgent ', 'background: #764ba2; color: white; font-size: 14px; padding: 5px; border-radius: 3px;');

// ============================================
// DASHBOARD CHARTS
// ============================================
function initDashboardCharts() {
    if (typeof Chart === 'undefined') return;

    const ordersCtx = document.getElementById('chart-orders');
    if (ordersCtx) {
        new Chart(ordersCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [{
                    label: 'Orders',
                    data: [5,8,12,9,15,20,18,25,22,30,28,35],
                    borderColor: 'rgba(46,204,113,1)',
                    backgroundColor: 'rgba(46,204,113,0.2)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    const salesCtx = document.getElementById('chart-sales');
    if (salesCtx) {
        new Chart(salesCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Fruits','Dairy','Bakery','Beverages'],
                datasets: [{
                    label: 'Sales ($)',
                    data: [1200, 900, 1500, 1750],
                    backgroundColor: [
                        'rgba(46,204,113,0.6)',
                        'rgba(52,152,219,0.6)',
                        'rgba(155,89,182,0.6)',
                        'rgba(241,196,15,0.6)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    const pointsCtx = document.getElementById('chart-points');
    if (pointsCtx) {
        new Chart(pointsCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
                datasets: [{
                    label: 'Points',
                    data: [10,25,40,60,80,100],
                    borderColor: 'rgba(52,152,219,1)',
                    backgroundColor: 'rgba(52,152,219,0.2)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initDashboardCharts);